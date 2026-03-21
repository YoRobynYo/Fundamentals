#!/usr/bin/env node

// =============================================================
// SPEC BUILD PIPELINE (OLLAMA EDITION - STRICT)
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- CONFIG ---
const OLD_TEMPLATES_DIR = path.join(__dirname, 'Templates');
const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const MAX_ATTEMPTS = 3;
const DELAY_BETWEEN_ATTEMPTS = 5000;

const FOUNDATION_FILES = [
  '1-HOW-TO-REWRITE-MODULE-SPECS.md',
  '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md',
  '3-MODULE-0-TEMPLATE-SPEC.md',
  'MODULE-1-VARIABLES-SPECS.md'
];

// --- HELPERS ---

function readFile(dir, filename) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function saveFile(filename, content) {
  const filePath = path.join(MAIN_TEMPLATE_DIR, filename);
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

/* take this first line ... 
  function runOllama(prompt, model = 'deepseek-r1:7b') {
  then replace it with different models to see what is best
  replace with 
  function runOllama(prompt, model = 'Mistral:latest') {
*/ 
function runOllama(prompt, model = 'Mistral:latest') {
  const tempFile = path.join(__dirname, '_ollama_temp.txt');
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

// --- OLLAMA BUILD FRESH ---

function buildFreshSpec(oldSpec, foundationContent, filename) {
  const prompt = `
### CRITICAL: YOU MUST FOLLOW THESE RULES OR THE BUILD WILL FAIL ###

1. YOU MUST INCLUDE THE SUBTITLE: ## Language-Agnostic Edition
2. YOU MUST INCLUDE THESE SECTIONS EXACTLY AS THEY APPEAR IN THE GOLD STANDARD:
   - ## HOW TO USE THIS WITH AI
   - ## QUALITY CHECKLIST FOR AI GENERATION
   - ## GENERATION RESULTS
   - ## NARRATIVE CONTEXT
3. NO CAMELCASE! 
   - WRONG: containersLeft, saltLeft
   - RIGHT: "containers left", "salt left" (Always in quotes)
4. OUTPUT ONLY THE MARKDOWN. NO PREAMBLE. NO EXPLANATION.

---

MASTER TEMPLATE AND RULES:
${foundationContent}

---

OLD SPEC (USE FOR THEME/SCENARIOS ONLY):
${oldSpec}

---

BUILD INSTRUCTIONS:
1. Follow the exact structure from MODULE-1-VARIABLES-SPECS.md.
2. Use the SETTING and THEME from the old spec.
3. Replace "student" with "child" throughout.
4. The filename is: ${filename}.

Output ONLY the finished spec file in markdown.
`;

  return runOllama(prompt);
}

// --- OLLAMA VALIDATE ---

function validateWithOllama(newSpec, foundationContent) {
  const prompt = `
You are a strict validator. Check this spec file against the rules.

SPEC TO VALIDATE:
${newSpec}

CHECKLIST:
1. Does it have "## Language-Agnostic Edition"?
2. Does it have "## HOW TO USE THIS WITH AI"?
3. Does it have "## QUALITY CHECKLIST FOR AI GENERATION"?
4. Does it have "## GENERATION RESULTS"?
5. Does it have "## NARRATIVE CONTEXT"?
6. Are there ANY camelCase variables (like containersLeft)? (FAIL if yes)
7. Is there ANY JS syntax (console.log, backticks)? (FAIL if yes)

Respond with ONLY:
PASS: The spec is perfect.
OR
FAIL:
- [list the specific missing sections or camelCase issues]
`;

  return runOllama(prompt);
}

// --- MAIN PIPELINE ---

async function main() {
  const targetFilename = process.argv[2];

  if (!targetFilename) {
    console.error('❌ Please provide a spec filename.');
    process.exit(1);
  }

  console.log(`\n🚀 SPEC BUILD PIPELINE (OLLAMA - STRICT)`);
  console.log(`📄 Building: ${targetFilename}`);
  console.log(`─────────────────────────────────────\n`);

  let foundationContent = '';
  for (const file of FOUNDATION_FILES) {
    foundationContent += `\n\n=== ${file} ===\n\n` + readFile(MAIN_TEMPLATE_DIR, file);
  }

  const oldSpec = readFile(OLD_TEMPLATES_DIR, targetFilename);

  let attempt = 0;
  let newSpec = '';
  let validationResult = '';

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    console.log(`\n🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
    console.log(`   ✍️  Ollama building fresh spec...`);

    try {
      newSpec = buildFreshSpec(oldSpec, foundationContent, targetFilename);
    } catch (e) {
      console.log(`   ❌ Ollama build error: ${e.message}`);
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
    console.log(`\n🎉 Pipeline complete!`);
    notify(`${targetFilename} built successfully!`);
  } else {
    console.log(`\n🔔 Pipeline failed after ${MAX_ATTEMPTS} attempts.`);
    saveFile(`REVIEW-NEEDED-${targetFilename}`, newSpec);
  }
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
