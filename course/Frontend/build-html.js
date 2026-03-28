#!/usr/bin/env node

// =============================================================
// HTML EXERCISE GENERATOR PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node build-html.js MODULE-1-VARIABLES
//   node build-html.js MODULE-2-OPERATORS
//   node build-html.js MODULE-3-CONDITIONS-PART1
//
// OUTPUT:
//   modules/module-1-variables/index.html
//   modules/module-2-operators/index.html
//   modules/module-3-conditions-part1/index.html
//
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const RULES = JSON.parse(fs.readFileSync(path.join(__dirname, 'course-rules.json'), 'utf8'));

// --- CONFIG ---
const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const MODULES_DIR = path.join(__dirname, 'modules');
const MAX_ATTEMPTS = 3;
const DELAY_BETWEEN_ATTEMPTS = 15000;

// Foundation files — rules every exercise must follow
const FOUNDATION_FILES = [
  '1-HOW-TO-REWRITE-MODULE-SPECS.md',
  '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md',
  '3-MODULE-0-TEMPLATE-SPEC.md',
  'NARRATIVE-FRAMEWORK.md',
  'MODULE-1-VARIABLES-HELPER-BOXES.md'
];

// Gold standard HTML — the structure every exercise must match
const GOLD_STANDARD_FILE = 'MODULE-0-EXERCISE-GOLD-STANDARD.html';

// Module name → output folder mapping
const MODULE_FOLDER_MAP = {
  'MODULE-1-VARIABLES':             'module-1-variables',
  'MODULE-2-OPERATORS':             'module-2-operators',
  'MODULE-3-CONDITIONS-PART1':      'module-3-conditions-part1',
  'MODULE-3-CONDITIONS-PART2':      'module-3-conditions-part2',
  'MODULE-3-CONDITIONS-PART3':      'module-3-conditions-part3',
  'MODULE-3-CONDITIONS-PART4':      'module-3-conditions-part4',
  'MODULE-3-CONDITIONS-PART5':      'module-3-conditions-part5',
  'MODULE-4-LOGICAL-OPERATORS-PART1': 'module-4-logical-operators-part1',
  'MODULE-4-LOGICAL-OPERATORS-PART2': 'module-4-logical-operators-part2',
  'MODULE-5-LOOPS-PART1':           'module-5-loops-part1',
  'MODULE-5-LOOPS-PART2':           'module-5-loops-part2',
  'MODULE-5-LOOPS-PART3':           'module-5-loops-part3',
  'MODULE-5-LOOPS-PART4':           'module-5-loops-part4',
  'MODULE-6-PIRATE-ADVENTURE-PART1': 'module-6-pirate-adventure-part1',
  'MODULE-6-PIRATE-ADVENTURE-PART2': 'module-6-pirate-adventure-part2',
};

// Module name → spec file mapping
const SPEC_FILE_MAP = {
  'MODULE-1-VARIABLES':             'MODULE-1-VARIABLES-SPECS.md',
  'MODULE-2-OPERATORS':             'MODULE-2-OPERATORS-SPECS.md',
  'MODULE-3-CONDITIONS-PART1':      'MODULE-3-CONDITIONS-PART1-SPECS.md',
  'MODULE-3-CONDITIONS-PART2':      'MODULE-3-CONDITIONS-PART2-SPECS.md',
  'MODULE-3-CONDITIONS-PART3':      'MODULE-3-CONDITIONS-PART3-SPECS.md',
  'MODULE-3-CONDITIONS-PART4':      'MODULE-3-CONDITIONS-PART4-SPECS.md',
  'MODULE-3-CONDITIONS-PART5':      'MODULE-3-CONDITIONS-PART5-SPECS.md',
  'MODULE-4-LOGICAL-OPERATORS-PART1': 'MODULE-4-LOGICAL-OPERATORS-PART1-SPECS.md',
  'MODULE-4-LOGICAL-OPERATORS-PART2': 'MODULE-4-LOGICAL-OPERATORS-PART2-SPECS.md',
  'MODULE-5-LOOPS-PART1':           'MODULE-5-LOOPS-PART-1-SPEC.md',
  'MODULE-5-LOOPS-PART2':           'MODULE-5-LOOPS-PART-2-SPEC.md',
  'MODULE-5-LOOPS-PART3':           'MODULE-5-LOOPS-PART-3-SPEC.md',
  'MODULE-5-LOOPS-PART4':           'MODULE-5-LOOPS-PART-4-SPEC.md',
  'MODULE-6-PIRATE-ADVENTURE-PART1': 'MODULE-6-PIRATE-ADVENTURE-PART1-SPECS.md',
  'MODULE-6-PIRATE-ADVENTURE-PART2': 'MODULE-6-PIRATE-ADVENTURE-PART2-SPECS.md',
};

// Module name → helper box file mapping
const HELPER_FILE_MAP = {
  'MODULE-1-VARIABLES':             'MODULE-1-VARIABLES-HELPER-BOXES.md',
  'MODULE-2-OPERATORS':             'MODULE-2-OPERATORS-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART1':      'MODULE-3-CONDITIONS-PART1-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART2':      'MODULE-3-CONDITIONS-PART2-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART3':      'MODULE-3-CONDITIONS-PART3-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART4':      'MODULE-3-CONDITIONS-PART4-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART5':      'MODULE-3-CONDITIONS-PART5-HELPER-BOXES.md',
  'MODULE-4-LOGICAL-OPERATORS-PART1': 'MODULE-4-LOGICAL-OPERATORS-PART1-HELPER-BOXES.md',
  'MODULE-4-LOGICAL-OPERATORS-PART2': 'MODULE-4-LOGICAL-OPERATORS-PART2-HELPER-BOXES.md',
  'MODULE-5-LOOPS-PART1':           'MODULE-5-LOOPS-PART-1-HELPER-BOX.md',
  'MODULE-5-LOOPS-PART2':           'MODULE-5-LOOPS-PART-2-HELPER-BOX.md',
  'MODULE-5-LOOPS-PART3':           'MODULE-5-LOOPS-PART-3-HELPER-BOX.md',
  'MODULE-5-LOOPS-PART4':           'MODULE-5-LOOPS-PART-4-HELPER-BOX.md',
  'MODULE-6-PIRATE-ADVENTURE-PART1': 'MODULE-6-PIRATE-ADVENTURE-PART1-HELPER-BOXES.md',
  'MODULE-6-PIRATE-ADVENTURE-PART2': 'MODULE-6-PIRATE-ADVENTURE-PART2-HELPER-BOXES.md',
};

// --- HELPERS ---

function readFile(dir, filename) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function wrapHTML(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Core Value Fundamentals</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../styles/css/style.css">
</head>
<body>
<main id="main-content">

${content}

</main>
<script src="../../scripts/main.js"></script>
<script src="../../scripts/scroll.js"></script>
</body>
</html>`;
}

function saveHTML(moduleName, content) {
  const folder = MODULE_FOLDER_MAP[moduleName];
  const outputDir = path.join(MODULES_DIR, folder);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const filePath = path.join(outputDir, 'index.html');
  fs.writeFileSync(filePath, wrapHTML(content), 'utf8');
  console.log(`✅ Saved: ${filePath}`);
}

function saveReviewNeeded(moduleName, content) {
  const folder = MODULE_FOLDER_MAP[moduleName];
  const outputDir = path.join(MODULES_DIR, folder);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const filePath = path.join(outputDir, `REVIEW-NEEDED-index.html`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`⚠️  Saved for review: ${filePath}`);
}

function notify(message) {
  console.log(`\n🔔 NOTIFICATION: ${message}\n`);
  try {
    execSync(`osascript -e 'display notification "${message}" with title "HTML Pipeline"'`);
  } catch (e) {}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --- AI SETUP ---
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const BUILDER_MODEL = 'deepseek-r1:7b'; // Ollama local - 2026-03-21
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// --- OLLAMA (Primary local builder) ---
async function runOllamaPrimary(prompt) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'qwen2.5-coder:7b',
      prompt: prompt,
      stream: false
    })
  });
  if (!response.ok) throw new Error(`Ollama error ${response.status}`);
  const data = await response.json();
  return data.response.trim();
}

// --- BUILDER: OpenRouter (Gemini Flash via OpenRouter) ---
async function runBuilder(prompt) {
  if (!OPENROUTER_API_KEY) throw new Error('No OpenRouter API key');

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://core-value-fundamentals',
      'X-Title': 'HTML Build Pipeline'
    },
    body: JSON.stringify({
      model: BUILDER_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 8000
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenRouter error ${response.status}: ${err}`);
  }

  const data = await response.json();
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('Unexpected API response: ' + JSON.stringify(data).slice(0, 200));
  }
  return data.choices[0].message.content.trim();
}

// --- VALIDATOR: Gemini API directly ---
async function runValidator(prompt) {
  if (!GEMINI_API_KEY) throw new Error('No Gemini API key');

  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 2000 }
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gemini API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
    throw new Error('Unexpected Gemini response: ' + JSON.stringify(data).slice(0, 200));
  }
  return data.candidates[0].content.parts[0].text.trim();
}

// --- RUN BUILDER ---
async function callOpenRouter(prompt) {
  try {
    console.log(`   🦙 Using Ollama (deepseek-r1:7b)...`);
    return await runOllamaPrimary(prompt);
  } catch (e) {
    console.log(`   ⚠️  Ollama failed — falling back to OpenRouter...`);
    try {
      return await runBuilder(prompt);
    } catch (e2) {
      console.log(`   ⚠️  OpenRouter failed — falling back to Gemini API...`);
      return await runValidator(prompt);
    }
  }
}

async function runOllamaLocal(prompt) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'qwen2.5-coder:7b', prompt, stream: false })
  });
  if (!response.ok) throw new Error(`Ollama error ${response.status}`);
  const data = await response.json();
  return data.response.trim();
}

// --- RUN VALIDATOR ---
async function callValidator(prompt) {
  try {
    return await runValidator(prompt);
  } catch (e) {
    console.log(`   ⚠️  Gemini validator failed — falling back to OpenRouter...`);
    return await callOpenRouter(prompt);
  }
}

// --- PROGRAMMATIC AUDIT ---
function programmaticAudit(html, moduleName) {
  const BANNED = RULES.bannedWords;

  const lines = html.split('\n');
  const issues = [];
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
          issues.push(`Line ${lineNum}: "let " — ${reason}`);
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
        issues.push(`Line ${lineNum}: "${word}" — ${reason}`);
      }
    });
  });

  // Structural Validation
  const section = getSectionName(moduleName);
  const patterns = RULES.idPatterns;

  for (let ex = 1; ex <= 5; ex++) {
    ['a', 'b'].forEach(part => {
      const codeId = patterns.codeBlock.replace('{section}', section).replace('{n}', ex).replace('{part}', part);
      const hintId = patterns.hintPara.replace('{section}', section).replace('{n}', ex).replace('{part}', part);
      const outputId = patterns.outputBlock.replace('{section}', section).replace('{n}', ex).replace('{part}', part);
      const answerId = patterns.answerBlock.replace('{section}', section).replace('{n}', ex).replace('{part}', part);
      const dataEx = patterns.dataEx.replace('{n}', ex).replace('{part}', part);

      if (!html.includes(`id="${codeId}"`)) issues.push(`Missing or incorrect ID for code block: ${codeId}`);
      if (!html.includes(`id="${hintId}"`)) issues.push(`Missing or incorrect ID for hint para: ${hintId}`);
      if (!html.includes(`id="${outputId}"`)) issues.push(`Missing or incorrect ID for output block: ${outputId}`);
      if (!html.includes(`id="${answerId}"`)) issues.push(`Missing or incorrect ID for answer block: ${answerId}`);
      if (!html.includes(`data-section="${section}"`)) issues.push(`Missing or incorrect data-section: ${section}`);
      if (!html.includes(`data-ex="${dataEx}"`)) issues.push(`Missing or incorrect data-ex: ${dataEx}`);
    });
  }

  return issues;
}


// --- BUILD HTML ---

async function buildHTML(moduleName, foundationContent, goldStandard, specContent, helperContent) {
  const prompt = `
You are building a complete HTML exercise file for a children's coding fundamentals course.
This course is LANGUAGE-AGNOSTIC — all exercises use PSEUDOCODE only. No JavaScript, Python, or any real language.

=== GOLD STANDARD HTML STRUCTURE ===
Study this carefully — your output must follow this EXACT structure:

${goldStandard}

=== FOUNDATION RULES ===
${foundationContent}

=== HELPER BOXES (what children have been taught) ===
${helperContent}

=== EXERCISE SPEC (what to build) ===
${specContent}

=== BUILD INSTRUCTIONS ===

BRITISH ENGLISH ONLY — CRITICAL:
- lessons (NOT periods)
- colour (NOT color)
- organise (NOT organize)
- maths (NOT math)
- children (NOT students or kids)
- practise (NOT practice as a verb)

PSEUDOCODE RULES — CRITICAL:
- Exercise 1 Part A & Part B → SHOW pseudocode in a code-example div
- Exercises 2-5 Part A & Part B → NO pseudocode shown — Step 4 says "Now write the code to [specific task] in the code block below."

STRUCTURE — FOLLOW EXACTLY:
1. Opening module separator
2. <section class="page" id="[section]-module">
3. <h2 class="module-title"> — module title
4. Helper boxes separator + all helper boxes
5. Exercises separator + <h2 class="module-title"> — exercises title
6. Exercise 1 through Exercise 5 each with Part A and Part B
7. Closing section separator
8. End of file separator

EVERY PART must have ALL of these in order:
- <label> with correct for attribute
- <div class="code-block" contenteditable="true"> with correct id
- <div class="exercise-buttons"> with Hint, Run My Code, Reset My Code buttons
- <p class="hint"> with correct id
- <pre class="output-block"> with correct id
- <pre class="answer-block"> with correct id

CRITICAL ID PATTERN — NEVER BREAK THIS:
- code block:   id="[section]-ex[N]-part-[a/b]"
- hint button:  data-section="[section]" data-ex="[N]-part-[a/b]"
- hint para:    id="[section]-hint[N]-part-[a/b]"
- output block: id="[section]-output[N]-part-[a/b]"
- answer block: id="[section]-answer[N]-part-[a/b]"

SECTION NAMES — EXACT — READ THIS VERY CAREFULLY:
- variables        (Module 1)
- operations       (Module 2) WARNING: NOT "operators" — MUST be "operations"
- conditions       (Module 3 — all parts)
- logicalOperators (Module 4 — both parts) WARNING: camelCase capital O
- loops            (Module 5 — all parts)
- pirateAdventure  (Module 6 — both parts) WARNING: camelCase capital A

MODULE 2 WARNING: The module is called "Operators" but the section name is "operations"
   CORRECT:   data-section="operations"   id="operations-ex1-part-a"
   WRONG:     data-section="operators"    id="operators-ex1-part-a"

MODULE 4 WARNING: The section name is "logicalOperators" with camelCase capital O
   CORRECT:   data-section="logicalOperators"   id="logicalOperators-ex1-part-a"
   WRONG:     data-section="logical-operators"  id="logical-operators-ex1-part-a" 

MODULE 6 WARNING: The section name is "pirateAdventure" with camelCase capital A
   CORRECT:   data-section="pirateAdventure"   id="pirateAdventure-ex1-part-a"
   WRONG:     data-section="pirate-adventure"  id="pirate-adventure-ex1-part-a"

No images anywhere. No JS syntax anywhere. No camelCase variables anywhere.

OUTPUT ONLY THE HTML. NO PREAMBLE. NO EXPLANATION.
DO NOT wrap output in markdown code fences — do NOT start with \`\`\`html or \`\`\`.
DO NOT include any instruction comments in your output.
DO NOT copy any comments from the gold standard that contain words like BRITISH ENGLISH, PSEUDOCODE RULES, ID PATTERN, SECTION NAMES, EXERCISE RULES, or STRUCTURE RULES.
Start your output with the first <!-- ▼▼▼ --> separator comment and end with the last <!-- ▲▲▲ --> separator comment.
Everything between those two separators is the only thing that should appear in your output.
`;

  return await callOpenRouter(prompt);
}

// --- VALIDATE HTML ---

async function validateHTML(html, moduleName) {
  const section = getSectionName(moduleName);

  const prompt = `
You are a strict validator for a children's coding course HTML file.

HTML TO VALIDATE:
${html}

VALIDATION — check each block and report with ✅ or ❌:

BLOCK 1 — Language
- British English used throughout (lessons not periods, colour not color, children not students)
- No American spellings anywhere

BLOCK 2 — Structure  
- Module title present (<h2 class="module-title">)
- Helper boxes present before exercises
- Exercises title present between helper boxes and exercises
- All separators (▼▼▼) in place around sections and exercises

BLOCK 3 — Pseudocode
- Exercise 1 Part A shows pseudocode in code-example div ✅
- Exercise 1 Part B shows pseudocode in code-example div ✅
- Exercises 2-5 Part A and Part B have NO pseudocode shown ✅
- No JS syntax anywhere (no let, var, const, console.log)
- No camelCase variable names in steps

BLOCK 4 — IDs and Buttons
- All code blocks follow: id="${section}-ex[N]-part-[a/b]"
- All buttons have: data-section="${section}" data-ex="[N]-part-[a/b]"
- All hint/output/answer elements have correct matching IDs
- label, code-block, buttons, hint, output-block, answer-block present for every part

BLOCK 5 — Content
- All 5 exercises present with Part A and Part B
- All helper boxes present
- No images anywhere

Report each block as:
BLOCK 1 — Language ✅ or ❌ [reason]
BLOCK 2 — Structure ✅ or ❌ [reason]
BLOCK 3 — Pseudocode ✅ or ❌ [reason]
BLOCK 4 — IDs and Buttons ✅ or ❌ [reason]
BLOCK 5 — Content ✅ or ❌ [reason]

Then on the final line:
PASS: All blocks passed.
OR
FAIL: [list which blocks failed]
`;

  return await callValidator(prompt);
}

function getSectionName(moduleName) {
  if (moduleName.startsWith('MODULE-1')) return 'variables';
  if (moduleName.startsWith('MODULE-2')) return 'operations';
  if (moduleName.startsWith('MODULE-3')) return 'conditions';
  if (moduleName.startsWith('MODULE-4')) return 'logicalOperators';
  if (moduleName.startsWith('MODULE-5')) return 'loops';
  if (moduleName.startsWith('MODULE-6')) return 'pirateAdventure';
  return 'unknown';
}

// --- MAIN PIPELINE ---

async function main() {
  const moduleName = process.argv[2]?.toUpperCase();

  if (!moduleName) {
    console.error('❌ Please provide a module name.');
    console.error('   Example: node build-html.js MODULE-1-VARIABLES');
    process.exit(1);
  }

  if (!MODULE_FOLDER_MAP[moduleName]) {
    console.error(`❌ Unknown module: ${moduleName}`);
    console.error('   Valid modules:', Object.keys(MODULE_FOLDER_MAP).join(', '));
    process.exit(1);
  }

  const specFile = SPEC_FILE_MAP[moduleName];
  const helperFile = HELPER_FILE_MAP[moduleName];
  const outputFolder = MODULE_FOLDER_MAP[moduleName];
  const startTime = Date.now();

  console.log(`\n🚀 HTML EXERCISE GENERATOR`);
  console.log(`📄 Module:  ${moduleName}`);
  console.log(`📂 Output:  modules/${outputFolder}/index.html`);
  console.log(`🤖 AI:      ${OPENROUTER_API_KEY ? '🌐 Hunter Alpha (OpenRouter)' : '⚡ Gemini'}`);
  console.log(`─────────────────────────────────────\n`);

  // Load foundation files
  console.log(`📚 Loading foundation files...`);
  let foundationContent = '';
  for (const file of FOUNDATION_FILES) {
    foundationContent += `\n\n=== ${file} ===\n\n` + readFile(MAIN_TEMPLATE_DIR, file);
    console.log(`   ✅ ${file}`);
  }

  // Load gold standard
  console.log(`\n⭐ Loading gold standard...`);
  const goldStandard = readFile(MAIN_TEMPLATE_DIR, GOLD_STANDARD_FILE);
  console.log(`   ✅ ${GOLD_STANDARD_FILE}`);

  // Load spec and helper box
  console.log(`\n📋 Loading module files...`);
  const specContent = readFile(MAIN_TEMPLATE_DIR, specFile);
  console.log(`   ✅ ${specFile}`);
  const helperContent = readFile(MAIN_TEMPLATE_DIR, helperFile);
  console.log(`   ✅ ${helperFile}`);

  // Build and validate
  let attempt = 0;
  let html = '';
  let validationResult = '';

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    console.log(`\n🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
    console.log(`   ✍️  Building HTML...`);

    try {
      html = await buildHTML(moduleName, foundationContent, goldStandard, specContent, helperContent);
    } catch (e) {
      console.log(`   ❌ Build error: ${e.message}`);
      await sleep(DELAY_BETWEEN_ATTEMPTS);
      continue;
    }

    console.log(`   🔍 Programmatic Auditing...`);
    const auditIssues = programmaticAudit(html, moduleName);
    if (auditIssues.length > 0) {
      validationResult = `FAIL: Programmatic audit found ${auditIssues.length} issue(s):\n   ` + auditIssues.join('\n   ');
      console.log(`\n❌ Programmatic Audit FAILED:`);
      console.log(validationResult);
    } else {
      console.log(`   ✅ Programmatic Audit PASSED`);
      console.log(`   🔍 AI Validating...`);
      try {
        validationResult = await validateHTML(html, moduleName);
      } catch (e) {
        validationResult = `FAIL: AI Validation error — ${e.message}`;
      }
    }

    if (validationResult.includes('PASS: All blocks passed')) {
      console.log(`\n✅ PASSED on attempt ${attempt}!`);
      break;
    } else {
      console.log(`\n❌ FAILED on attempt ${attempt}:`);
      console.log(validationResult);
      if (attempt < MAX_ATTEMPTS) {
        console.log(`   ⏳ Waiting 15 seconds before retry...`);
        await sleep(DELAY_BETWEEN_ATTEMPTS);
      }
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  if (validationResult.includes('PASS: All blocks passed')) {
    saveHTML(moduleName, html);
    console.log(`\n🎉 Pipeline complete! ${moduleName} saved to modules/${outputFolder}/`);
    console.log(`⏱️  Total time: ${timeStr}`);
    notify(`${moduleName} built successfully! (${timeStr})`);
  } else {
    console.log(`\n⚠️  Pipeline failed after ${MAX_ATTEMPTS} attempts — saving for review.`);
    console.log(`⏱️  Total time: ${timeStr}`);
    saveReviewNeeded(moduleName, html);
    notify(`REVIEW NEEDED: ${moduleName} needs checking! (${timeStr})`);
  }
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});



////////////// //////////////
////////////// //////////////
////////////// //////////////

//////////////  original file below //////////////

////////////// //////////////
////////////// //////////////
////////////// //////////////


// #!/usr/bin/env node

// // =============================================================
// // HTML EXERCISE GENERATOR PIPELINE
// // core-value-fundamentals — Language-Agnostic Edition
// // =============================================================
// //
// // USAGE:
// //   node build-html.js MODULE-1-VARIABLES
// //   node build-html.js MODULE-2-OPERATORS
// //   node build-html.js MODULE-3-CONDITIONS-PART1
// //
// // OUTPUT:
// //   modules/module-1-variables/index.html
// //   modules/module-2-operators/index.html
// //   modules/module-3-conditions-part1/index.html
// //
// // =============================================================

// const fs = require('fs');
// const path = require('path');
// const { execSync } = require('child_process');

// // --- CONFIG ---
// const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
// const MODULES_DIR = path.join(__dirname, 'modules');
// const MAX_ATTEMPTS = 3;
// const DELAY_BETWEEN_ATTEMPTS = 15000;

// // Foundation files — rules every exercise must follow
// const FOUNDATION_FILES = [
//   '1-HOW-TO-REWRITE-MODULE-SPECS.md',
//   '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md',
//   '3-MODULE-0-TEMPLATE-SPEC.md',
//   'NARRATIVE-FRAMEWORK.md',
//   'MODULE-1-VARIABLES-HELPER-BOXES.md'
// ];

// // Gold standard HTML — the structure every exercise must match
// const GOLD_STANDARD_FILE = 'MODULE-0-EXERCISE-GOLD-STANDARD.html';

// // Module name → output folder mapping
// const MODULE_FOLDER_MAP = {
//   'MODULE-1-VARIABLES':             'module-1-variables',
//   'MODULE-2-OPERATORS':             'module-2-operators',
//   'MODULE-3-CONDITIONS-PART1':      'module-3-conditions-part1',
//   'MODULE-3-CONDITIONS-PART2':      'module-3-conditions-part2',
//   'MODULE-3-CONDITIONS-PART3':      'module-3-conditions-part3',
//   'MODULE-3-CONDITIONS-PART4':      'module-3-conditions-part4',
//   'MODULE-3-CONDITIONS-PART5':      'module-3-conditions-part5',
//   'MODULE-4-LOGICAL-OPERATORS-PART1': 'module-4-logical-operators-part1',
//   'MODULE-4-LOGICAL-OPERATORS-PART2': 'module-4-logical-operators-part2',
//   'MODULE-5-LOOPS-PART1':           'module-5-loops-part1',
//   'MODULE-5-LOOPS-PART2':           'module-5-loops-part2',
//   'MODULE-5-LOOPS-PART3':           'module-5-loops-part3',
//   'MODULE-5-LOOPS-PART4':           'module-5-loops-part4',
// };

// // Module name → spec file mapping
// const SPEC_FILE_MAP = {
//   'MODULE-1-VARIABLES':             'MODULE-1-VARIABLES-SPECS.md',
//   'MODULE-2-OPERATORS':             'MODULE-2-OPERATORS-SPECS.md',
//   'MODULE-3-CONDITIONS-PART1':      'MODULE-3-CONDITIONS-PART1-SPECS.md',
//   'MODULE-3-CONDITIONS-PART2':      'MODULE-3-CONDITIONS-PART2-SPECS.md',
//   'MODULE-3-CONDITIONS-PART3':      'MODULE-3-CONDITIONS-PART3-SPECS.md',
//   'MODULE-3-CONDITIONS-PART4':      'MODULE-3-CONDITIONS-PART4-SPECS.md',
//   'MODULE-3-CONDITIONS-PART5':      'MODULE-3-CONDITIONS-PART5-SPECS.md',
//   'MODULE-4-LOGICAL-OPERATORS-PART1': 'MODULE-4-LOGICAL-OPERATORS-PART1-SPECS.md',
//   'MODULE-4-LOGICAL-OPERATORS-PART2': 'MODULE-4-LOGICAL-OPERATORS-PART2-SPECS.md',
//   'MODULE-5-LOOPS-PART1':           'MODULE-5-LOOPS-PART-1-SPEC.md',
//   'MODULE-5-LOOPS-PART2':           'MODULE-5-LOOPS-PART-2-SPEC.md',
//   'MODULE-5-LOOPS-PART3':           'MODULE-5-LOOPS-PART-3-SPEC.md',
//   'MODULE-5-LOOPS-PART4':           'MODULE-5-LOOPS-PART-4-SPEC.md',
// };

// // Module name → helper box file mapping
// const HELPER_FILE_MAP = {
//   'MODULE-1-VARIABLES':             'MODULE-1-VARIABLES-HELPER-BOXES.md',
//   'MODULE-2-OPERATORS':             'MODULE-2-OPERATORS-HELPER-BOXES.md',
//   'MODULE-3-CONDITIONS-PART1':      'MODULE-3-CONDITIONS-PART1-HELPER-BOXES.md',
//   'MODULE-3-CONDITIONS-PART2':      'MODULE-3-CONDITIONS-PART2-HELPER-BOXES.md',
//   'MODULE-3-CONDITIONS-PART3':      'MODULE-3-CONDITIONS-PART3-HELPER-BOXES.md',
//   'MODULE-3-CONDITIONS-PART4':      'MODULE-3-CONDITIONS-PART4-HELPER-BOXES.md',
//   'MODULE-3-CONDITIONS-PART5':      'MODULE-3-CONDITIONS-PART5-HELPER-BOXES.md',
//   'MODULE-4-LOGICAL-OPERATORS-PART1': 'MODULE-4-LOGICAL-OPERATORS-PART1-HELPER-BOXES.md',
//   'MODULE-4-LOGICAL-OPERATORS-PART2': 'MODULE-4-LOGICAL-OPERATORS-PART2-HELPER-BOXES.md',
//   'MODULE-5-LOOPS-PART1':           'MODULE-5-LOOPS-PART-1-HELPER-BOX.md',
//   'MODULE-5-LOOPS-PART2':           'MODULE-5-LOOPS-PART-2-HELPER-BOX.md',
//   'MODULE-5-LOOPS-PART3':           'MODULE-5-LOOPS-PART-3-HELPER-BOX.md',
//   'MODULE-5-LOOPS-PART4':           'MODULE-5-LOOPS-PART-4-HELPER-BOX.md',
// };

// // --- HELPERS ---

// function readFile(dir, filename) {
//   const filePath = path.join(dir, filename);
//   if (!fs.existsSync(filePath)) {
//     console.error(`❌ File not found: ${filePath}`);
//     process.exit(1);
//   }
//   return fs.readFileSync(filePath, 'utf8');
// }

// function wrapHTML(content) {
//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Core Value Fundamentals</title>
//   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=swap" rel="stylesheet">
//   <link rel="stylesheet" href="../../styles/css/style.css">
// </head>
// <body>
// <main id="main-content">

// ${content}

// </main>
// <script src="../../scripts/main.js"></script>
// <script src="../../scripts/scroll.js"></script>
// </body>
// </html>`;
// }

// function saveHTML(moduleName, content) {
//   const folder = MODULE_FOLDER_MAP[moduleName];
//   const outputDir = path.join(MODULES_DIR, folder);
//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir, { recursive: true });
//   }
//   const filePath = path.join(outputDir, 'index.html');
//   fs.writeFileSync(filePath, wrapHTML(content), 'utf8');
//   console.log(`✅ Saved: ${filePath}`);
// }

// function saveReviewNeeded(moduleName, content) {
//   const folder = MODULE_FOLDER_MAP[moduleName];
//   const outputDir = path.join(MODULES_DIR, folder);
//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir, { recursive: true });
//   }
//   const filePath = path.join(outputDir, `REVIEW-NEEDED-index.html`);
//   fs.writeFileSync(filePath, content, 'utf8');
//   console.log(`⚠️  Saved for review: ${filePath}`);
// }

// function notify(message) {
//   console.log(`\n🔔 NOTIFICATION: ${message}\n`);
//   try {
//     execSync(`osascript -e 'display notification "${message}" with title "HTML Pipeline"'`);
//   } catch (e) {}
// }

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// // --- AI SETUP ---
// const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
// const OPENROUTER_MODEL = 'openrouter/hunter-alpha';

// // --- OLLAMA (Primary local builder) ---
async function runOllamaPrimary(prompt) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'qwen2.5-coder:7b',
      prompt: prompt,
      stream: false
    })
  });
  if (!response.ok) throw new Error(`Ollama error ${response.status}`);
  const data = await response.json();
  return data.response.trim();
}

// --- OPENROUTER ---
// async function runOpenRouter(prompt) {
//   if (!OPENROUTER_API_KEY) throw new Error('No OpenRouter API key');

//   const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
//       'Content-Type': 'application/json',
//       'HTTP-Referer': 'https://core-value-fundamentals',
//       'X-Title': 'HTML Build Pipeline'
//     },
//     body: JSON.stringify({
//       model: OPENROUTER_MODEL,
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 8000
//     })
//   });

//   if (!response.ok) {
//     const err = await response.text();
//     throw new Error(`OpenRouter error ${response.status}: ${err}`);
//   }

//   const data = await response.json();
//   if (!data.choices || !data.choices[0] || !data.choices[0].message) {
//     throw new Error('Unexpected API response: ' + JSON.stringify(data).slice(0, 200));
//   }
//   return data.choices[0].message.content.trim();
// }

// // --- GEMINI FALLBACK ---
// function runGemini(prompt) {
//   const tempFile = path.join(__dirname, '_gemini_temp.txt');
//   fs.writeFileSync(tempFile, prompt, 'utf8');
//   try {
//     const result = execSync(`gemini -p "$(cat '${tempFile}')" -y`, {
//       encoding: 'utf8',
//       timeout: 300000,
//       stdio: ['pipe', 'pipe', 'ignore']
//     });
//     fs.unlinkSync(tempFile);
//     return result.trim().split('\n')
//       .filter(line => !line.includes('cached credentials') && !line.includes('Loaded'))
//       .join('\n').trim();
//   } catch (e) {
//     if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
//     throw new Error(`Gemini error: ${e.message}`);
//   }
// }

// // --- RUN AI (Hunter Alpha first, Gemini fallback) ---
// async function callOpenRouter(prompt) {
//   if (OPENROUTER_API_KEY) {
//     try {
//       return await runOpenRouter(prompt);
//     } catch (e) {
//       console.log(`   ⚠️  OpenRouter failed — falling back to Gemini...`);
//     }
//   }
//   return runGemini(prompt);
// }

// // --- BUILD HTML ---

// async function buildHTML(moduleName, foundationContent, goldStandard, specContent, helperContent) {
//   const prompt = `
// You are building a complete HTML exercise file for a children's coding fundamentals course.
// This course is LANGUAGE-AGNOSTIC — all exercises use PSEUDOCODE only. No JavaScript, Python, or any real language.

// === GOLD STANDARD HTML STRUCTURE ===
// Study this carefully — your output must follow this EXACT structure:

// ${goldStandard}

// === FOUNDATION RULES ===
// ${foundationContent}

// === HELPER BOXES (what children have been taught) ===
// ${helperContent}

// === EXERCISE SPEC (what to build) ===
// ${specContent}

// === BUILD INSTRUCTIONS ===

// BRITISH ENGLISH ONLY — CRITICAL:
// - lessons (NOT periods)
// - colour (NOT color)
// - organise (NOT organize)
// - maths (NOT math)
// - children (NOT students or kids)
// - practise (NOT practice as a verb)

// PSEUDOCODE RULES — CRITICAL:
// - Exercise 1 Part A & Part B → SHOW pseudocode in a code-example div
// - Exercises 2-5 Part A & Part B → NO pseudocode shown — Step 4 says "Now write the code to [specific task] in the code block below."

// STRUCTURE — FOLLOW EXACTLY:
// 1. Opening module separator
// 2. <section class="page" id="[section]-module">
// 3. <h2 class="module-title"> — module title
// 4. Helper boxes separator + all helper boxes
// 5. Exercises separator + <h2 class="module-title"> — exercises title
// 6. Exercise 1 through Exercise 5 each with Part A and Part B
// 7. Closing section separator
// 8. End of file separator

// EVERY PART must have ALL of these in order:
// - <label> with correct for attribute
// - <div class="code-block" contenteditable="true"> with correct id
// - <div class="exercise-buttons"> with Hint, Run My Code, Reset My Code buttons
// - <p class="hint"> with correct id
// - <pre class="output-block"> with correct id
// - <pre class="answer-block"> with correct id

// CRITICAL ID PATTERN — NEVER BREAK THIS:
// - code block:   id="[section]-ex[N]-part-[a/b]"
// - hint button:  data-section="[section]" data-ex="[N]-part-[a/b]"
// - hint para:    id="[section]-hint[N]-part-[a/b]"
// - output block: id="[section]-output[N]-part-[a/b]"
// - answer block: id="[section]-answer[N]-part-[a/b]"

// SECTION NAMES — EXACT — READ THIS VERY CAREFULLY:
// - variables        (Module 1)
// - operations       (Module 2) WARNING: NOT "operators" — MUST be "operations"
// - conditions       (Module 3 — all parts)
// - logicalOperators (Module 4 — both parts) WARNING: camelCase capital O
// - loops            (Module 5 — all parts)

// MODULE 2 WARNING: The module is called "Operators" but the section name is "operations"
//    CORRECT:   data-section="operations"   id="operations-ex1-part-a"
//    WRONG:     data-section="operators"    id="operators-ex1-part-a"

// MODULE 4 WARNING: The section name is "logicalOperators" with camelCase capital O
//    CORRECT:   data-section="logicalOperators"   id="logicalOperators-ex1-part-a"
//    WRONG:     data-section="logical-operators"  id="logical-operators-ex1-part-a" 

// No images anywhere. No JS syntax anywhere. No camelCase variables anywhere.

// OUTPUT ONLY THE HTML. NO PREAMBLE. NO EXPLANATION.
// DO NOT wrap output in markdown code fences — do NOT start with \`\`\`html or \`\`\`.
// DO NOT include any instruction comments in your output.
// DO NOT copy any comments from the gold standard that contain words like BRITISH ENGLISH, PSEUDOCODE RULES, ID PATTERN, SECTION NAMES, EXERCISE RULES, or STRUCTURE RULES.
// Start your output with the first <!-- ▼▼▼ --> separator comment and end with the last <!-- ▲▲▲ --> separator comment.
// Everything between those two separators is the only thing that should appear in your output.
// `;

//   return await callOpenRouter(prompt);
// }

// // --- VALIDATE HTML ---

// async function validateHTML(html, moduleName) {
//   const section = getSectionName(moduleName);

//   const prompt = `
// You are a strict validator for a children's coding course HTML file.

// HTML TO VALIDATE:
// ${html}

// VALIDATION — check each block and report with ✅ or ❌:

// BLOCK 1 — Language
// - British English used throughout (lessons not periods, colour not color, children not students)
// - No American spellings anywhere

// BLOCK 2 — Structure  
// - Module title present (<h2 class="module-title">)
// - Helper boxes present before exercises
// - Exercises title present between helper boxes and exercises
// - All separators (▼▼▼) in place around sections and exercises

// BLOCK 3 — Pseudocode
// - Exercise 1 Part A shows pseudocode in code-example div ✅
// - Exercise 1 Part B shows pseudocode in code-example div ✅
// - Exercises 2-5 Part A and Part B have NO pseudocode shown ✅
// - No JS syntax anywhere (no let, var, const, console.log)
// - No camelCase variable names in steps

// BLOCK 4 — IDs and Buttons
// - All code blocks follow: id="${section}-ex[N]-part-[a/b]"
// - All buttons have: data-section="${section}" data-ex="[N]-part-[a/b]"
// - All hint/output/answer elements have correct matching IDs
// - label, code-block, buttons, hint, output-block, answer-block present for every part

// BLOCK 5 — Content
// - All 5 exercises present with Part A and Part B
// - All helper boxes present
// - No images anywhere

// Report each block as:
// BLOCK 1 — Language ✅ or ❌ [reason]
// BLOCK 2 — Structure ✅ or ❌ [reason]
// BLOCK 3 — Pseudocode ✅ or ❌ [reason]
// BLOCK 4 — IDs and Buttons ✅ or ❌ [reason]
// BLOCK 5 — Content ✅ or ❌ [reason]

// Then on the final line:
// PASS: All blocks passed.
// OR
// FAIL: [list which blocks failed]
// `;

//   return await callOpenRouter(prompt);
// }

// function getSectionName(moduleName) {
//   if (moduleName.startsWith('MODULE-1')) return 'variables';
//   if (moduleName.startsWith('MODULE-2')) return 'operations';
//   if (moduleName.startsWith('MODULE-3')) return 'conditions';
//   if (moduleName.startsWith('MODULE-4')) return 'logicalOperators';
//   if (moduleName.startsWith('MODULE-5')) return 'loops';
//   return 'unknown';
// }

// // --- MAIN PIPELINE ---

// async function main() {
//   const moduleName = process.argv[2]?.toUpperCase();

//   if (!moduleName) {
//     console.error('❌ Please provide a module name.');
//     console.error('   Example: node build-html.js MODULE-1-VARIABLES');
//     process.exit(1);
//   }

//   if (!MODULE_FOLDER_MAP[moduleName]) {
//     console.error(`❌ Unknown module: ${moduleName}`);
//     console.error('   Valid modules:', Object.keys(MODULE_FOLDER_MAP).join(', '));
//     process.exit(1);
//   }

//   const specFile = SPEC_FILE_MAP[moduleName];
//   const helperFile = HELPER_FILE_MAP[moduleName];
//   const outputFolder = MODULE_FOLDER_MAP[moduleName];
//   const startTime = Date.now();

//   console.log(`\n🚀 HTML EXERCISE GENERATOR`);
//   console.log(`📄 Module:  ${moduleName}`);
//   console.log(`📂 Output:  modules/${outputFolder}/index.html`);
//   console.log(`🤖 AI:      ${OPENROUTER_API_KEY ? '🌐 Hunter Alpha (OpenRouter)' : '⚡ Gemini'}`);
//   console.log(`─────────────────────────────────────\n`);

//   // Load foundation files
//   console.log(`📚 Loading foundation files...`);
//   let foundationContent = '';
//   for (const file of FOUNDATION_FILES) {
//     foundationContent += `\n\n=== ${file} ===\n\n` + readFile(MAIN_TEMPLATE_DIR, file);
//     console.log(`   ✅ ${file}`);
//   }

//   // Load gold standard
//   console.log(`\n⭐ Loading gold standard...`);
//   const goldStandard = readFile(MAIN_TEMPLATE_DIR, GOLD_STANDARD_FILE);
//   console.log(`   ✅ ${GOLD_STANDARD_FILE}`);

//   // Load spec and helper box
//   console.log(`\n📋 Loading module files...`);
//   const specContent = readFile(MAIN_TEMPLATE_DIR, specFile);
//   console.log(`   ✅ ${specFile}`);
//   const helperContent = readFile(MAIN_TEMPLATE_DIR, helperFile);
//   console.log(`   ✅ ${helperFile}`);

//   // Build and validate
//   let attempt = 0;
//   let html = '';
//   let validationResult = '';

//   while (attempt < MAX_ATTEMPTS) {
//     attempt++;
//     console.log(`\n🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
//     console.log(`   ✍️  Building HTML...`);

//     try {
//       html = await buildHTML(moduleName, foundationContent, goldStandard, specContent, helperContent);
//     } catch (e) {
//       console.log(`   ❌ Build error: ${e.message}`);
//       await sleep(DELAY_BETWEEN_ATTEMPTS);
//       continue;
//     }

//     console.log(`   🔍 Validating...`);
//     try {
//       validationResult = await validateHTML(html, moduleName);
//     } catch (e) {
//       validationResult = `FAIL: Validation error — ${e.message}`;
//     }

//     if (validationResult.includes('PASS: All blocks passed')) {
//       console.log(`\n✅ PASSED on attempt ${attempt}!`);
//       break;
//     } else {
//       console.log(`\n❌ FAILED on attempt ${attempt}:`);
//       console.log(validationResult);
//       if (attempt < MAX_ATTEMPTS) {
//         console.log(`   ⏳ Waiting 15 seconds before retry...`);
//         await sleep(DELAY_BETWEEN_ATTEMPTS);
//       }
//     }
//   }

//   const elapsed = Math.round((Date.now() - startTime) / 1000);
//   const mins = Math.floor(elapsed / 60);
//   const secs = elapsed % 60;
//   const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

//   if (validationResult.includes('PASS: All blocks passed')) {
//     saveHTML(moduleName, html);
//     console.log(`\n🎉 Pipeline complete! ${moduleName} saved to modules/${outputFolder}/`);
//     console.log(`⏱️  Total time: ${timeStr}`);
//     notify(`${moduleName} built successfully! (${timeStr})`);
//   } else {
//     console.log(`\n⚠️  Pipeline failed after ${MAX_ATTEMPTS} attempts — saving for review.`);
//     console.log(`⏱️  Total time: ${timeStr}`);
//     saveReviewNeeded(moduleName, html);
//     notify(`REVIEW NEEDED: ${moduleName} needs checking! (${timeStr})`);
//   }
// }

// main().catch(err => {
//   console.error('❌ Pipeline error:', err);
//   process.exit(1);
// });
