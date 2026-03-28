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

// ---------------------------------------------------------------
// BANNED WORDS — with reason
// ---------------------------------------------------------------
const BANNED = [
  { word: 'period',      reason: 'Banned — use "lesson", "week", "time", "stretch" etc' },
  { word: 'periods',     reason: 'Banned — use "lessons" etc' },
  { word: 'students',    reason: 'Use "children" instead' },
  { word: 'student',     reason: 'Use "child" instead' },
  { word: 'kids',        reason: 'Use "children" instead' },
  { word: 'color',       reason: 'American spelling — use "colour"' },
  { word: 'center',      reason: 'American spelling — use "centre"' },
  { word: 'organize',    reason: 'American spelling — use "organise"' },
  { word: 'recognize',   reason: 'American spelling — use "recognise"' },
  { word: 'practice',    reason: 'American verb — use "practise"' },
  { word: 'program',     reason: 'Use "code" or "coding" instead' },
  { word: 'programming', reason: 'Use "coding" instead' },
  { word: 'math',        reason: 'American spelling — use "maths"' },
  { word: 'console',     reason: 'Technical jargon — avoid' },
  { word: 'terminal',    reason: 'Technical jargon — avoid' },
  { word: 'let ',        reason: 'JS syntax — use SET in pseudocode' },
  { word: 'const ',      reason: 'JS syntax — use pseudocode' },
  { word: 'var ',        reason: 'JS syntax — use pseudocode' },
  { word: 'childName',   reason: 'camelCase variable — use "child name" in quotes' },
];

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
  let inGoldStandardBlock = false;

  lines.forEach((line, i) => {
    const lineNum = i + 1;
    const lower = line.toLowerCase();
    const trimmed = line.trim();

    // Track <script> blocks — skip them entirely (real JS lives here)
    if (trimmed.startsWith('<script')) { inScriptTag = true; return; }
    if (trimmed.startsWith('</script>')) { inScriptTag = false; return; }
    if (inScriptTag) return;

    // Track Gold Standard block to skip false positives in the rule explanation
    if (trimmed === '<!-- ============================================================ -->' && lines[i+1]?.includes('GOLD STANDARD EXERCISE FILE')) {
      inGoldStandardBlock = true;
    }

    if (inGoldStandardBlock) {
      if (trimmed === '<!-- ============================================================ -->' && i > 0 && lines[i-1]?.includes('STRUCTURE RULES')) {
        inGoldStandardBlock = false;
        return; // skip the closing line too
      }
      return; // skip everything inside the block
    }

    // Is this line an HTML comment?
    const isComment = trimmed.startsWith('<!--');

    BANNED.forEach(({ word, reason }) => {

      // CSS exceptions — these are valid CSS, not English spelling
      if (word === 'color' && (line.includes('background-color') || line.includes('-color') || line.includes('color:'))) return;
      if (word === 'center' && line.includes('text-align')) return;


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

      // For 'var ' and 'const ' — skip if in a comment
      if ((word === 'var ' || word === 'const ') && isComment) return;

      // Use word boundaries for words that could be part of other words (like 'math' in 'maths')
      const useBoundary = ['math', 'program', 'kids', 'student', 'students', 'color', 'center', 'period', 'periods'].includes(word);
      const regex = useBoundary ? new RegExp('\\b' + word + '\\b', 'i') : new RegExp(word, 'i');

      if (regex.test(line)) {
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
