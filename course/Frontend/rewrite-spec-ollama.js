#!/usr/bin/env node

// =============================================================
// SPEC REWRITE PIPELINE (OLLAMA EDITION)
// Ollama rewrites — Ollama validates — Auto saves on pass
// Usage: node rewrite-spec-ollama.js <spec-file-to-rewrite>
// Example: node rewrite-spec-ollama.js MODULE-2-OPERATORS-SPECS.md
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- CONFIG ---
const TEMPLATES_DIR = path.join(__dirname, 'mainTemplate');
const OUTPUT_DIR = path.join(__dirname, 'mainTemplate');
const MAX_ATTEMPTS = 3;
const DELAY_BETWEEN_ATTEMPTS = 5000;

// Foundation files for validation
const FOUNDATION_FILES = [
  '1-HOW-TO-REWRITE-MODULE-SPECS.md',
  '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md',
  '3-MODULE-0-TEMPLATE-SPEC.md',
  'MODULE-1-VARIABLES-SPECS.md'
];

// --- HELPERS ---

function readFile(filename) {
  const filePath = path.join(TEMPLATES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function saveFile(filename, content) {
  const filePath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Saved: ${filePath}`);
}

function notify(message) {
  console.log(`\n🔔 NOTIFICATION: ${message}\n`);
  try {
    execSync(`osascript -e 'display notification "${message}" with title "Spec Pipeline"'`);
  } catch (e) {}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Updated to use Ollama instead of Gemini CLI
 */
function runOllama(prompt, model = 'deepseek-r1:7b') {
  const tempFile = path.join(__dirname, '_ollama_temp_rewrite.txt');
  fs.writeFileSync(tempFile, prompt, 'utf8');
  try {
    const result = execSync(`ollama run ${model} "$(cat '${tempFile}')"`, {
      encoding: 'utf8',
      timeout: 600000
    });
    fs.unlinkSync(tempFile);
    
    let cleaned = result.trim();
    cleaned = cleaned.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    
    return cleaned;
  } catch (e) {
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    throw new Error(`Ollama error: ${e.message}`);
  }
}

// --- OLLAMA REWRITE ---

function rewriteSpec(oldSpec, foundationContent) {
  const prompt = `
You are an expert at rewriting educational content for children.
Your task is to rewrite the provided spec file to be 100% language-agnostic.

---

RULES AND GOLD STANDARD:
${foundationContent}

---

SPEC FILE TO REWRITE:
${oldSpec}

---

REWRITE INSTRUCTIONS:
1. Follow every step in "1-HOW-TO-REWRITE-MODULE-SPECS.md"
2. Ensure the structure matches "MODULE-1-VARIABLES-SPECS.md" exactly
3. Remove ALL camelCase, JS syntax, and programming references
4. Use natural language in quotes for all variable descriptions
5. Output ONLY the finished markdown — no preamble or explanation.
`;

  return runOllama(prompt);
}

// --- OLLAMA VALIDATE ---

function validateWithOllama(newSpec, foundationContent) {
  const prompt = `
You are validating a rewritten spec file for a language-agnostic fundamentals course.

GOLD STANDARD:
${foundationContent}

SPEC TO VALIDATE:
${newSpec}

Check for:
1. Any camelCase variable names
2. Any JS syntax (console.log, backticks, etc.)
3. Any mention of "student" (must be "child")
4. Standard sections (HOW TO USE, QUALITY CHECKLIST, GENERATION RESULTS)
5. Narrative context section present

Respond with ONLY:
PASS: [reason]
OR
FAIL: [list of issues]
`;

  return runOllama(prompt);
}

// --- MAIN PIPELINE ---

async function main() {
  const targetFilename = process.argv[2];

  if (!targetFilename) {
    console.error('❌ Please provide a filename to rewrite.');
    process.exit(1);
  }

  console.log(`\n🚀 SPEC REWRITE PIPELINE (OLLAMA)`);
  console.log(`📄 Rewriting: ${targetFilename}`);
  console.log(`─────────────────────────────────────\n`);

  let foundationContent = '';
  for (const file of FOUNDATION_FILES) {
    foundationContent += `\n\n=== ${file} ===\n\n` + readFile(file);
  }

  const oldSpec = readFile(targetFilename);

  let attempt = 0;
  let newSpec = '';
  let validationResult = '';

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    console.log(`\n🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
    console.log(`   ✍️  Ollama rewriting spec...`);

    try {
      newSpec = rewriteSpec(oldSpec, foundationContent);
    } catch (e) {
      console.log(`   ❌ Ollama rewrite error: ${e.message}`);
      await sleep(DELAY_BETWEEN_ATTEMPTS);
      continue;
    }

    console.log(`   🔍 Ollama validating...`);
    try {
      validationResult = validateWithOllama(newSpec, foundationContent);
    } catch (e) {
      validationResult = `FAIL: Ollama validation error — ${e.message}`;
    }

    if (validationResult.startsWith('PASS')) {
      console.log(`\n✅ PASSED on attempt ${attempt}!`);
      break;
    } else {
      console.log(`\n❌ FAILED on attempt ${attempt}:`);
      console.log(validationResult);
      if (attempt < MAX_ATTEMPTS) await sleep(DELAY_BETWEEN_ATTEMPTS);
    }
  }

  if (validationResult.startsWith('PASS')) {
    saveFile(targetFilename, newSpec);
    console.log(`\n🎉 Rewrite complete!`);
    notify(`${targetFilename} rewritten successfully!`);
  } else {
    console.log(`\n🔔 Rewrite failed after ${MAX_ATTEMPTS} attempts.`);
    saveFile(`REVIEW-NEEDED-${targetFilename}`, newSpec);
  }
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
