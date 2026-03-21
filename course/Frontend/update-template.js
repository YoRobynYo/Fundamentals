#!/usr/bin/env node

// =============================================================
// TEMPLATE UPDATER PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node update-template.js 2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md
//
// What it does:
//   1. Reads the target file from mainTemplate/
//   2. Hunter Alpha fixes all banned words and adds banned words section
//   3. Saves the updated file back to mainTemplate/
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const BUILDER_MODEL = 'deepseek-r1:7b'; // Ollama local - 2026-03-21
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const MAX_ATTEMPTS = 3;
const DELAY = 15000;

// --- HELPERS ---

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function readFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function notify(message) {
  console.log(`\n🔔 NOTIFICATION: ${message}\n`);
  try {
    execSync(`osascript -e 'display notification "${message}" with title "Template Updater"'`);
  } catch (e) {}
}

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

// --- OPENROUTER ---
async function runOpenRouter(prompt) {
  if (!OPENROUTER_API_KEY) throw new Error('No OpenRouter API key');

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://core-value-fundamentals',
      'X-Title': 'Template Updater Pipeline'
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
    console.log(`   🔍 OpenRouter raw response: ${JSON.stringify(data).slice(0, 500)}`);
    throw new Error('Unexpected API response: ' + JSON.stringify(data).slice(0, 200));
  }
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

// --- GEMINI API (direct — for validation) ---
async function runGeminiAPI(prompt) {
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

// --- OLLAMA (offline validator fallback) ---
async function runOllama(prompt) {
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

// --- RUN AI ---
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

async function callAI(prompt) {
  try {
    console.log(`   🦙 Using Ollama (deepseek-r1:7b)...`);
    return await runOllamaPrimary(prompt);
  } catch (e) {
    console.log(`   ⚠️  Ollama failed — falling back to OpenRouter...`);
    try {
      return await runOpenRouter(prompt);
    } catch (e2) {
      console.log(`   ⚠️  OpenRouter failed — falling back to Gemini API...`);
      return await runGeminiAPI(prompt);
    }
  }
}

// --- BUILD PROMPT ---
function buildPrompt(filename, content) {
  return `
You are updating a foundation file for a children's coding course called core-value-fundamentals.

The course is for children aged 10-12 in the UK.

=== FILE TO UPDATE ===
Filename: ${filename}

${content}

=== YOUR TASKS ===

TASK 1 — FIX BANNED WORDS throughout the entire file:
- "students" → "children"
- "student" → "child"  
- "period" (school period) → "lesson"
- "periods" (school periods) → "lessons"
- "program" (as in computer program) → "code"
- "programming" → "coding"
- "practice" (as a verb) → "practise"
- "color" → "colour"
- "organize" → "organise"
- "recognize" → "recognise"
- "center" → "centre"
- "math" → "maths"
- NEVER use "console" anywhere
- NEVER use "let", "const", "var" as code syntax
- NEVER name specific AI tools — always say "AI"

IMPORTANT: Do NOT change "period" if it means a full stop punctuation mark.
Do NOT change "practice" if it is being used as a noun (e.g. "best practice").
Do NOT change words inside code examples that are showing what NOT to do (marked with ❌ WRONG).

CRITICAL CSS RULE — NEVER BREAK THIS:
Do NOT change any CSS property values. CSS is not English — it only understands American spellings.
- "text-align: center" → LEAVE IT AS "center" — "centre" is NOT valid CSS and will break the layout
- "color:" in CSS properties → LEAVE IT AS "color" — "colour:" is NOT valid CSS
- Only change spellings in content that children READ — never in HTML attributes or CSS values

TASK 2 — ADD A BANNED WORDS SECTION:
Add it IMMEDIATELY after RULE 6 — it must stay inside the critical rules block so the AI reads it before anything else. Call it:

## RULE 7: BANNED WORDS — NEVER USE THESE

With this exact content:

---

## RULE 7: BANNED WORDS — NEVER USE THESE

The following words are banned from ALL exercises, helper boxes, and any content children will read.
No exceptions. If you are unsure — do not use it.

### Banned — Use These Instead

| ❌ Never Use | ✅ Use Instead |
|---|---|
| students / student | children / child |
| period / periods (school) | lesson / lessons |
| program / programming | code / coding |
| practice (verb) | practise |
| color | colour |
| organize | organise |
| recognize | recognise |
| center | centre |
| math | maths |
| console | never use this word |
| let / const / var | SET (pseudocode only) |
| AI tool names (Gemini, ChatGPT etc) | AI |

### Why This Matters
- This course is built for children in the UK — British English only
- "Period" means something very different to children in the UK — always say "lesson"
- "Program/programming" is too technical and language-specific — say "code/coding"
- Real code syntax (let, const, var) must never appear — pseudocode only (SET, PRINT, IF, FOR)

---

TASK 3 — UPDATE RULE 2 — EXERCISE 1 PART B PSEUDOCODE:
Find RULE 2 in the file. In the section about Exercise 1 Step 4, make sure it clearly states that BOTH Part A AND Part B must show pseudocode in a code-example div. If the rule only mentions Part A, add Part B explicitly. Add this warning:

⚠️ CRITICAL: Exercise 1 Part B MUST also show pseudocode in a code-example div — exactly like Part A. This is the most commonly missed rule. Never leave Part B without pseudocode.

TASK 4 — DO NOT CHANGE ANYTHING ELSE:
- Keep all existing rules exactly as they are
- Keep all HTML examples exactly as they are
- Keep all structure, headings, and formatting exactly as they are
- Only fix the banned words and add the new section

OUTPUT THE COMPLETE UPDATED FILE.
NO preamble. NO explanation. NO markdown code fences.
Start with the very first line of the file and end with the very last line.
`;
}

// --- VALIDATE ---
function validate(original, updated) {
  // Check banned words are gone from non-code sections
  const issues = [];

  const lines = updated.split('\n');
  lines.forEach((line, i) => {
    const lineNum = i + 1;
    const lower = line.toLowerCase();

    // Skip lines that are showing WRONG examples (they contain ❌)
    if (line.includes('❌') || line.includes('NEVER use') || line.includes('Never Use')) return;
    // Skip the banned words table we just added
    if (line.includes('| ❌') || line.includes('|---|')) return;

    if (lower.includes('students') && !line.includes('→') && !line.includes('children / child')) {
      issues.push(`Line ${lineNum}: still contains "students"`);
    }
    if (lower.includes(' period') && !line.includes('→') && !line.includes('lesson') && !line.includes('full stop') && !line.includes('punctuation')) {
      issues.push(`Line ${lineNum}: still contains "period"`);
    }
  });

  // Check the new section was added
  if (!updated.includes('RULE 7: BANNED WORDS')) {
    issues.push('RULE 7 banned words section is missing');
  }

  return issues;
}

// --- MAIN ---
async function main() {
  const filename = process.argv[2];

  if (!filename) {
    console.error('❌ Please provide a filename.');
    console.error('   Example: node update-template.js 2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md');
    process.exit(1);
  }

  const filePath = path.join(MAIN_TEMPLATE_DIR, filename);
  const startTime = Date.now();

  console.log(`\n🔧 TEMPLATE UPDATER`);
  console.log(`📄 File:    ${filename}`);
  console.log(`🤖 AI:      ${OPENROUTER_API_KEY ? '🌐 Hunter Alpha (OpenRouter)' : '⚡ Gemini'}`);
  console.log(`─────────────────────────────────────\n`);

  const originalContent = readFile(filePath);
  console.log(`✅ File loaded (${originalContent.split('\n').length} lines)\n`);

  let attempt = 0;
  let updatedContent = '';
  let issues = [];

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    console.log(`🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
    console.log(`   ✍️  Updating file...`);

    try {
      const prompt = buildPrompt(filename, originalContent);
      updatedContent = await callAI(prompt);
    } catch (e) {
      console.log(`   ❌ AI error: ${e.message}`);
      if (attempt < MAX_ATTEMPTS) {
        console.log(`   ⏳ Waiting 15 seconds before retry...`);
        await sleep(DELAY);
      }
      continue;
    }

    console.log(`   🔍 Validating...`);
    issues = validate(originalContent, updatedContent);

    if (issues.length === 0) {
      console.log(`\n✅ PASSED on attempt ${attempt}!`);
      break;
    } else {
      console.log(`\n❌ FAILED on attempt ${attempt}:`);
      issues.forEach(issue => console.log(`   • ${issue}`));
      if (attempt < MAX_ATTEMPTS) {
        console.log(`   ⏳ Waiting 15 seconds before retry...`);
        await sleep(DELAY);
      }
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  if (issues.length === 0) {
    // Safety check — never save a file shorter than the original
    const originalLines = originalContent.split('\n').length;
    const updatedLines = updatedContent.split('\n').length;

    if (updatedLines < originalLines * 0.8) {
      console.log(`\n🚨 SAFETY BLOCK: Updated file is ${updatedLines} lines but original was ${originalLines} lines.`);
      console.log(`   Something went wrong — refusing to save to protect your file.`);
      console.log(`   Saving as REVIEW-NEEDED instead.`);
      const reviewPath = filePath.replace('.md', '-REVIEW-NEEDED.md');
      fs.writeFileSync(reviewPath, updatedContent, 'utf8');
      notify(`SAFETY BLOCK: ${filename} — file too short, not saved!`);
      return;
    }

    // Save a timestamped backup first — never loses history
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    const backupName = filename.replace('.md', `-BACKUP-${timestamp}.md`);
    const backupPath = path.join(MAIN_TEMPLATE_DIR, backupName);
    fs.writeFileSync(backupPath, originalContent, 'utf8');
    console.log(`\n💾 Backup saved: ${backupName}`);

    // Save the updated file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ Updated: ${filename}`);
    console.log(`\n🎉 Done! (${timeStr})`);
    notify(`${filename} updated successfully! (${timeStr})`);
  } else {
    // Save for review
    const reviewPath = filePath.replace('.md', '-REVIEW-NEEDED.md');
    fs.writeFileSync(reviewPath, updatedContent, 'utf8');
    console.log(`\n⚠️  Saved for review: ${filename.replace('.md', '-REVIEW-NEEDED.md')}`);
    console.log(`⏱️  Total time: ${timeStr}`);
    notify(`REVIEW NEEDED: ${filename} needs checking! (${timeStr})`);
  }
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
