#!/usr/bin/env node

// =============================================================
// HTML AUDIT SCRIPT
// core-value-fundamentals — Banned Word Checker
// =============================================================
//
// USAGE:
//   node audit-html.js
//
// Checks every modules/*/index.html for banned words and reports
// exactly which file and line they appear on.
// =============================================================

const fs = require('fs');
const path = require('path');

const MODULES_DIR = path.join(__dirname, 'modules');
const RULES = JSON.parse(fs.readFileSync(path.join(__dirname, 'course-rules.json'), 'utf8'));

// ---------------------------------------------------------------
// BANNED WORDS — with reason
// ---------------------------------------------------------------
const BANNED = RULES.bannedWords;

// ---------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------

function getAllModuleFolders() {
  if (!fs.existsSync(MODULES_DIR)) {
    console.error(`❌ modules/ folder not found at: ${MODULES_DIR}`);
    process.exit(1);
  }
  return fs.readdirSync(MODULES_DIR)
    .filter(name => fs.statSync(path.join(MODULES_DIR, name)).isDirectory())
    .sort();
}

function auditFile(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  const findings = [];
  let inScriptTag = false;
  let inGoldStandard = false;
  let inCommentBlock = false;

  lines.forEach((line, i) => {
    const lineNum = i + 1;
    const lower = line.toLowerCase();
    const trimmed = line.trim();

    // Track <script> blocks — skip them entirely (real JS lives here)
    if (trimmed.startsWith('<script')) { inScriptTag = true; return; }
    if (trimmed.startsWith('</script>')) { inScriptTag = false; return; }
    if (inScriptTag) return;

    // Track Multi-line HTML Comments
    if (trimmed.startsWith('<!--')) { inCommentBlock = true; }
    if (inCommentBlock && trimmed.includes('-->')) { inCommentBlock = false; return; }
    if (inCommentBlock) return;

    // Track GOLD STANDARD block — skip it (contains examples of banned words)
    if (trimmed.includes('GOLD STANDARD EXERCISE FILE')) { inGoldStandard = true; return; }
    if (inGoldStandard && trimmed.includes('====') && trimmed.endsWith('-->')) { inGoldStandard = false; return; }
    if (inGoldStandard) return;

    BANNED.forEach(({ word, reason }) => {

      // CSS exceptions — these are valid CSS, not English spelling
      if (word === 'color' && (line.includes('background-color') || line.includes('-color') || line.includes('color:'))) return;
      if (word === 'center' && line.includes('text-align')) return;

      // JS Reserved Words — skip if in a code-block div (those are pseudocode examples)
      if ((word === 'let ' || word === 'const ' || word === 'var ') && trimmed.includes('class="code-block"')) return;

      // For 'let ' — only flag real JS let, not British English phrases
      if (word === 'let ') {
        const letMatches = lower.match(/\blet\s+/g) || [];
        const englishLetMatches = lower.match(/\blet\s+(us|anyone|them|me|her|him|it|the|a|an)\b/g) || [];
        const wontLetMatches = lower.match(/\b(won't|will not|cannot|can't)\s+let\b/g) || [];
        const genuineJS = letMatches.length - englishLetMatches.length - wontLetMatches.length;
        if (genuineJS > 0) {
          findings.push({ lineNum, word, reason: 'JS syntax — use SET in pseudocode', line: trimmed });
        }
        return;
      }

      if (lower.includes(word.toLowerCase())) {
        // Exception for "maths" which contains "math"
        if (word === 'math' && lower.includes('maths')) {
          const occurrences = (lower.match(/math/g) || []).length;
          const mathsOccurrences = (lower.match(/maths/g) || []).length;
          if (occurrences === mathsOccurrences) return;
        }
        findings.push({ lineNum, word, reason, line: trimmed });
      }
    });
  });

  return findings;
}

// ---------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------

function main() {
  const folders = getAllModuleFolders();
  let totalIssues = 0;
  let totalFiles = 0;
  let cleanFiles = 0;
  const report = [];

  console.log('\n🔍 HTML AUDIT — Banned Word Checker');
  console.log('════════════════════════════════════════\n');

  folders.forEach(folder => {
    const indexPath = path.join(MODULES_DIR, folder, 'index.html');
    if (!fs.existsSync(indexPath)) {
      console.log(`⚠️  ${folder} — no index.html found, skipping`);
      return;
    }

    totalFiles++;
    const findings = auditFile(indexPath);

    if (findings.length === 0) {
      cleanFiles++;
      console.log(`✅ ${folder} — CLEAN`);
    } else {
      totalIssues += findings.length;
      console.log(`\n❌ ${folder} — ${findings.length} issue(s) found:`);
      findings.forEach(({ lineNum, word, reason, line }) => {
        console.log(`   Line ${lineNum}: "${word}" — ${reason}`);
        console.log(`   → ${line.slice(0, 120)}`);
      });
      report.push({ folder, findings });
    }
  });

  // --- SUMMARY ---
  console.log('\n════════════════════════════════════════');
  console.log('📊 AUDIT SUMMARY');
  console.log('════════════════════════════════════════');
  console.log(`📁 Files checked:  ${totalFiles}`);
  console.log(`✅ Clean files:    ${cleanFiles}`);
  console.log(`❌ Files with issues: ${totalFiles - cleanFiles}`);
  console.log(`🔢 Total issues:   ${totalIssues}`);

  if (totalIssues === 0) {
    console.log('\n🎉 All files are clean! No banned words found.\n');
  } else {
    console.log('\n⚠️  Files needing attention:');
    report.forEach(({ folder, findings }) => {
      console.log(`   • ${folder} (${findings.length} issue${findings.length > 1 ? 's' : ''})`);
    });
    console.log('\n💡 To rebuild a module: node build-html.js MODULE-NAME\n');
  }
}

main();
