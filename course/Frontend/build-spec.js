#!/usr/bin/env node

// =============================================================
// SPEC BUILD PIPELINE
// Hunter Alpha (OpenRouter free) first — Gemini as fallback
// Usage: node build-spec.js <spec-filename>
// Example: node build-spec.js MODULE-2-OPERATORS-HELPER-BOXES.md
//
// SETUP: Set your OpenRouter API key once:
// echo 'export OPENROUTER_API_KEY=your-key-here' >> ~/.zshrc && source ~/.zshrc
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- CONFIG ---
const OLD_TEMPLATES_DIR = path.join(__dirname, 'Templates');
const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const MAX_ATTEMPTS = 3;
const DELAY_BETWEEN_ATTEMPTS = 15000;

// Hunter Alpha — free, massive, no quota
const OPENROUTER_MODEL = 'openrouter/hunter-alpha';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';

const FOUNDATION_FILES = [
  '1-HOW-TO-REWRITE-MODULE-SPECS.md',
  '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md',
  '3-MODULE-0-TEMPLATE-SPEC.md',
  'MODULE-1-VARIABLES-SPECS.md'
];

// --- HELPERS ---

function readFile(dir, filename) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) return null;
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

// --- OPENROUTER ---
async function runOpenRouter(prompt) {
  if (!OPENROUTER_API_KEY) throw new Error('No OpenRouter API key');

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://core-value-fundamentals',
      'X-Title': 'Spec Build Pipeline'
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenRouter error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

// --- GEMINI FALLBACK ---
function runGemini(prompt) {
  const tempFile = path.join(__dirname, '_gemini_temp.txt');
  fs.writeFileSync(tempFile, prompt, 'utf8');
  try {
    const result = execSync(`gemini -p "$(cat '${tempFile}')" -y`, {
      encoding: 'utf8',
      timeout: 300000,
      stdio: ['pipe', 'pipe', 'ignore']
    });
    fs.unlinkSync(tempFile);
    return result.trim().split('\n')
      .filter(line => !line.includes('cached credentials') && !line.includes('Loaded'))
      .join('\n').trim();
  } catch (e) {
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    throw new Error(`Gemini error: ${e.message}`);
  }
}

// --- RUN AI ---
async function runAI(prompt) {
  if (OPENROUTER_API_KEY) {
    try {
      return await runOpenRouter(prompt);
    } catch (e) {
      console.log(`   ⚠️  OpenRouter failed — falling back to Gemini...`);
    }
  }
  return runGemini(prompt);
}

// --- FIND SOURCE FILE ---
// Looks in Templates first — if not found, uses matching spec from mainTemplate
function findSourceFile(targetFilename) {
  // Try Templates first
  const oldPath = path.join(OLD_TEMPLATES_DIR, targetFilename);
  if (fs.existsSync(oldPath)) {
    console.log(`   📂 Source: Templates/${targetFilename}`);
    return fs.readFileSync(oldPath, 'utf8');
  }

  // Try matching spec file in mainTemplate
  // e.g. MODULE-2-OPERATORS-HELPER-BOXES.md → MODULE-2-OPERATORS-SPECS.md
  const specFilename = targetFilename
    .replace('-HELPER-BOXES.md', '-SPECS.md')
    .replace('-HELPER-BOX.md', '-SPEC.md');
  
  const specPath = path.join(MAIN_TEMPLATE_DIR, specFilename);
  if (fs.existsSync(specPath)) {
    console.log(`   📂 Source: mainTemplate/${specFilename} (building fresh from spec)`);
    return fs.readFileSync(specPath, 'utf8');
  }

  // Try the file itself in mainTemplate
  const mainPath = path.join(MAIN_TEMPLATE_DIR, targetFilename);
  if (fs.existsSync(mainPath)) {
    console.log(`   📂 Source: mainTemplate/${targetFilename}`);
    return fs.readFileSync(mainPath, 'utf8');
  }

  console.error(`❌ No source file found for: ${targetFilename}`);
  process.exit(1);
}

// --- BUILD PROMPT ---
function buildPrompt(sourceContent, foundationContent, filename) {
  const isHelperBox = filename.includes('HELPER');
  
  if (isHelperBox) {
    return `
You are building a brand new language-agnostic helper box file for a fundamentals course for children aged 10-12.
Output ONLY the finished markdown helper box file — no explanation, no preamble, no code fences.

MASTER TEMPLATE AND RULES:
${foundationContent}

SOURCE FILE (use for context, themes and concepts only):
${sourceContent}

BUILD INSTRUCTIONS:
1. Follow the exact structure from MODULE-1-VARIABLES-HELPER-BOXES.md as your gold standard
2. Use the concepts and themes from the source file
3. Write helper boxes that explain each concept in plain English for a 10-12 year old
4. Use pseudocode only — SET, PRINT, IF, FOR — never real syntax
5. Replace "student" with "child" throughout
6. The filename is: ${filename}

Output ONLY the finished helper box file in markdown.
`;
  }

  return `
You are building a brand new language-agnostic spec file for a fundamentals course for children aged 10-12.
Output ONLY the finished markdown spec file — no explanation, no preamble, no code fences.

MASTER TEMPLATE AND RULES:
${foundationContent}

SOURCE FILE (use for scenarios and themes only — do NOT copy JS syntax or camelCase):
${sourceContent}

BUILD INSTRUCTIONS:
1. Follow the exact structure from MODULE-1-VARIABLES-SPECS.md as your gold standard
2. Keep all exercise titles, emojis and scenarios from the source
3. Build natural language variable names in quotes
4. Write CONCEPT, PART A FOCUS and PART B FOCUS in plain English
5. Replace "student" with "child" throughout
6. The filename is: ${filename}

Output ONLY the finished spec file in markdown.
`;
}

// --- VALIDATE PROMPT ---
function validatePrompt(newContent, foundationContent, filename) {
  const isHelperBox = filename.includes('HELPER');

  return `
You are validating a newly built ${isHelperBox ? 'helper box' : 'spec'} file for a language-agnostic fundamentals course.

GOLD STANDARD:
${foundationContent}

FILE TO VALIDATE:
${newContent}

Check ONLY for these issues:
1. Any camelCase variable names — must be natural language in quotes
2. Any JS syntax (console.log, backticks, const/let/var, ===, !==)
3. Any mention of "student" — must be "child"
4. Any mention of specific AI names (DeepSeek, Gemini, ChatGPT)
5. Missing ## Language-Agnostic Edition subtitle
6. Any + concatenation — must use commas in PRINT statements

Do NOT flag narrative or content choices.

Respond with ONLY:
PASS: The file is correctly built.
OR
FAIL:
- [issue 1]
`;
}

// --- MAIN ---
async function main() {
  const targetFilename = process.argv[2];

  if (!targetFilename) {
    console.error('❌ Please provide a filename.');
    console.error('   Usage: node build-spec.js MODULE-2-OPERATORS-HELPER-BOXES.md');
    process.exit(1);
  }

  const usingOpenRouter = !!OPENROUTER_API_KEY;
  const isHelperBox = targetFilename.includes('HELPER');

  console.log(`\n🚀 SPEC BUILD PIPELINE`);
  console.log(`📄 Building: ${targetFilename}`);
  console.log(`📦 Type: ${isHelperBox ? 'Helper Box' : 'Spec File'}`);
  console.log(`🤖 AI: ${usingOpenRouter ? '🌐 Hunter Alpha (OpenRouter)' : '⚡ Gemini'}`);
  console.log(`─────────────────────────────────────\n`);

  console.log('📚 Loading foundation files...');
  let foundationContent = '';
  for (const file of FOUNDATION_FILES) {
    const content = readFile(MAIN_TEMPLATE_DIR, file);
    if (content) {
      console.log(`   ✅ ${file}`);
      foundationContent += `\n\n=== ${file} ===\n\n` + content;
    }
  }

  // Also load Module 1 helper box as gold standard for helper boxes
  if (isHelperBox) {
    const helperGold = readFile(MAIN_TEMPLATE_DIR, 'MODULE-1-VARIABLES-HELPER-BOXES.md');
    if (helperGold) {
      console.log(`   ✅ MODULE-1-VARIABLES-HELPER-BOXES.md (helper box gold standard)`);
      foundationContent += `\n\n=== MODULE-1-VARIABLES-HELPER-BOXES.md ===\n\n` + helperGold;
    }
  }

  console.log(`\n📄 Finding source file...`);
  const sourceContent = findSourceFile(targetFilename);

  let attempt = 0;
  let newContent = '';
  let validationResult = '';

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    console.log(`\n🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
    console.log(`   ✍️  Building...`);

    try {
      newContent = await runAI(buildPrompt(sourceContent, foundationContent, targetFilename));
    } catch (e) {
      console.log(`   ❌ Build error: ${e.message}`);
      if (attempt < MAX_ATTEMPTS) {
        console.log(`   ⏳ Waiting 15 seconds...`);
        await sleep(DELAY_BETWEEN_ATTEMPTS);
      }
      continue;
    }

    console.log(`   🔍 Validating...`);
    try {
      validationResult = await runAI(validatePrompt(newContent, foundationContent, targetFilename));
    } catch (e) {
      validationResult = `FAIL: Validation error — ${e.message}`;
    }

    if (validationResult.startsWith('PASS')) {
      console.log(`\n✅ PASSED on attempt ${attempt}!`);
      break;
    } else {
      console.log(`\n❌ FAILED on attempt ${attempt}:`);
      console.log(validationResult);
      if (attempt < MAX_ATTEMPTS) {
        console.log(`\n   ⏳ Waiting 15 seconds...`);
        await sleep(DELAY_BETWEEN_ATTEMPTS);
      }
    }
  }

  if (validationResult.startsWith('PASS')) {
    saveFile(targetFilename, newContent);
    console.log(`\n🎉 Pipeline complete! ${targetFilename} saved to mainTemplate.`);
    notify(`${targetFilename} built successfully!`);
  } else {
    console.log(`\n🔔 Pipeline failed after ${MAX_ATTEMPTS} attempts.`);
    notify(`Pipeline failed for ${targetFilename}. Manual review needed.`);
    saveFile(`REVIEW-NEEDED-${targetFilename}`, newContent);
    console.log(`\n💾 Last attempt saved as: REVIEW-NEEDED-${targetFilename}`);
  }
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
