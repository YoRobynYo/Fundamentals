#!/usr/bin/env node

// =============================================================
// SPEC REWRITE PIPELINE
// Gemini rewrites — Gemini validates — Auto saves on pass
// Usage: node rewrite-spec.js <spec-file-to-rewrite>
// Example: node rewrite-spec.js MODULE-2-OPERATORS-SPECS.md
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- CONFIG ---
const TEMPLATES_DIR = path.join(__dirname, 'mainTemplate');
const OUTPUT_DIR = path.join(__dirname, 'mainTemplate');
const MAX_ATTEMPTS = 3;

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
  } catch (e) {
    // silently fail if osascript not available
  }
}

function runGemini(prompt) {
  const tempFile = path.join(__dirname, '_gemini_temp.txt');
  fs.writeFileSync(tempFile, prompt, 'utf8');
  try {
    const result = execSync(`gemini -p "$(cat '${tempFile}')" -y`, {
      encoding: 'utf8',
      timeout: 300000
    });
    fs.unlinkSync(tempFile);
    const cleaned = result.trim().split('\n')
      .filter(line => !line.includes('cached credentials') && !line.includes('Loaded') && !line.includes('Authenticated') && !line.includes('Authentication'))
      .join('\n').trim();
    return cleaned;
  } catch (e) {
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    throw new Error(`Gemini error: ${e.message}`);
  }
}

// --- GEMINI REWRITE ---

function rewriteWithGemini(targetSpec) {
  const prompt = `
You are rewriting a markdown spec file for a language-agnostic fundamentals course for children aged 10-12.
Output ONLY the rewritten markdown file — no explanation, no preamble, no code fences.

Apply ALL of these rules exactly:

---

RULE 1 — FILE HEADER:
Replace with this exact format:
# module [NUMBER] - [TOPIC] - exercise specifications
## Language-Agnostic Edition

**Created:** [keep original date]
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module [NUMBER] [TOPIC] exercises

**SETTING:** [keep original setting]
**THEME:** [keep original theme]

---

RULE 2 — HOW TO USE THIS WITH AI:
Replace the entire section with this exact text (fill in correct module number and topic):

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-[X]-[TOPIC]-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for Exercise [NUMBER] following these specifications exactly."

---

RULE 3 — VARIABLES TO USE:
Convert EVERY camelCase variable name to natural language in quotes.
Split into Part A and Part B on separate lines like this:
- Part A: "first variable", "second variable", "third variable"
- Part B: "first variable", "second variable", "third variable"

Examples of conversions:
- shelf1Pencils → "first shelf pencils"
- shelf2Pencils → "second shelf pencils"
- totalPencils → "total pencils"
- notebooksStart → "notebooks at start"
- notebooksUsed → "notebooks used"
- notebooksLeft → "notebooks left"
- numberOfStudents → "number of children"
- studentsPresent → "children present"
- studentsAbsent → "children absent"
- pencilsPerStudent → "pencils per child"
- sheetsPerStudent → "sheets per child"
- totalSheets → "total sheets"
- markersPerBox → "markers per box"
- numberOfBoxes → "number of boxes"
- totalMarkers → "total markers"
- grandTotal → "grand total"
- papersAvailable → "papers available"
- papersUsed → "papers used"
- papersLeft → "papers left"
- boxesToFill → "boxes to fill"
- papersPerBox → "papers per box"

---

RULE 4 — WORD REPLACEMENTS (apply throughout entire file):
- "student" → "child"
- "students" → "children"
- "programming" → "coding"
- "NARRATIVE-FRAMEWORK.md" → "MODULE-[X]-[TOPIC]-HELPER-BOXES.md"
- "EXERCISE-TEMPLATE-MASTER.md" → "MODULE-0-EXERCISE-TEMPLATE-MASTER.md"
- Remove any "PART A CONTEXT" or "PART B CONTEXT" fields entirely

---

RULE 5 — QUALITY CHECKLIST:
Replace the entire quality checklist section with this exact text:

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name matches exactly
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET and PRINT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: [section]-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="[section]"
- [ ] Image filename and alt text match spec
- [ ] Empty hint/output/answer containers present
- [ ] Part A Step 4 shows complete pseudocode answer
- [ ] Part B Step 4 references the specific task — no pseudocode shown
- [ ] Expected outputs match the spec
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6 — confer with user)

---

RULE 6 — GENERATION RESULTS:
Replace the TEST RESULTS section with this exact text:

## GENERATION RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________

---

RULE 7 — KEEP THESE EXACTLY AS THEY ARE:
- Exercise titles and emojis
- SCENARIO fields
- CONCEPT fields
- PART A FOCUS and PART B FOCUS fields
- EXPECTED OUTPUT PART A and EXPECTED OUTPUT PART B fields
- IMAGE and ALT TEXT fields
- SECTION NAME, EXERCISE NUMBER, EMOJI fields
- NARRATIVE CONTEXT section (but apply Rule 4 word replacements)
- The --- dividers between sections

---

SPEC FILE TO REWRITE:
${targetSpec}
`;

  return runGemini(prompt);
}

// --- GEMINI VALIDATE ---

function validateWithGemini(rewrittenSpec, foundationContent) {
  const prompt = `
You are validating a rewritten spec file for a language-agnostic fundamentals course for children aged 10-12.

Here is the gold standard to validate against:
${foundationContent}

REWRITTEN SPEC TO VALIDATE:
${rewrittenSpec}

Check for ALL of these issues:
1. Any camelCase variable names (e.g. shelf1Pencils, notebooksStart) — must be natural language in quotes
2. Any JS syntax (template literals, console.log, backticks, const/let/var)
3. Any mention of "student" or "students" — must be "child" or "children"
4. Any mention of "programming" — must be "coding" or removed
5. Any mention of specific AI names (DeepSeek, Gemini, ChatGPT)
6. Missing ## Language-Agnostic Edition subtitle
7. Missing or non-standard HOW TO USE THIS WITH AI section
8. Missing or non-standard QUALITY CHECKLIST FOR AI GENERATION section
9. Missing or non-standard GENERATION RESULTS section
10. Missing NARRATIVE CONTEXT section
11. Variables not separated into Part A and Part B
12. Any PART A CONTEXT or PART B CONTEXT fields — these must be removed
13. Any + concatenation — must use commas in PRINT statements

Respond with ONLY one of these two formats:

PASS: The spec is correctly rewritten and follows all rules.

FAIL:
- [issue 1]
- [issue 2]
- [issue 3]
`;

  return runGemini(prompt);
}

// --- MAIN PIPELINE ---

async function main() {
  const targetFilename = process.argv[2];

  if (!targetFilename) {
    console.error('❌ Please provide a spec file to rewrite.');
    console.error('   Usage: node rewrite-spec.js MODULE-2-OPERATORS-SPECS.md');
    process.exit(1);
  }

  console.log(`\n🚀 SPEC REWRITE PIPELINE`);
  console.log(`📄 Target: ${targetFilename}`);
  console.log(`─────────────────────────────────────\n`);

  // Read foundation files for validation
  console.log('📚 Loading foundation files...');
  let foundationContent = '';
  for (const file of FOUNDATION_FILES) {
    console.log(`   ✅ ${file}`);
    foundationContent += `\n\n=== ${file} ===\n\n` + readFile(file);
  }

  // Read target spec
  console.log(`\n📄 Loading target spec: ${targetFilename}`);
  const targetSpec = readFile(targetFilename);

  // Rewrite + validate loop
  let attempt = 0;
  let rewrittenSpec = '';
  let validationResult = '';

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    console.log(`\n🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
    console.log(`   ✍️  Gemini rewriting...`);

    try {
      rewrittenSpec = rewriteWithGemini(targetSpec);
    } catch (e) {
      console.log(`   ❌ Gemini rewrite error: ${e.message}`);
      continue;
    }

    console.log(`   🔍 Gemini validating...`);
    try {
      validationResult = validateWithGemini(rewrittenSpec, foundationContent);
    } catch (e) {
      validationResult = `FAIL: Gemini validation error — ${e.message}`;
    }

    if (validationResult.startsWith('PASS')) {
      console.log(`\n✅ PASSED on attempt ${attempt}!`);
      break;
    } else {
      console.log(`\n❌ FAILED on attempt ${attempt}:`);
      console.log(validationResult);
      if (attempt < MAX_ATTEMPTS) {
        console.log(`\n   Retrying...`);
      }
    }
  }

  // Save or notify
  if (validationResult.startsWith('PASS')) {
    saveFile(targetFilename, rewrittenSpec);
    console.log(`\n🎉 Pipeline complete! ${targetFilename} has been rewritten and saved.`);
    notify(`${targetFilename} rewritten successfully!`);
  } else {
    console.log(`\n🔔 Pipeline failed after ${MAX_ATTEMPTS} attempts.`);
    console.log(`   Please review the issues above and check your foundation files.`);
    notify(`Pipeline failed for ${targetFilename} after ${MAX_ATTEMPTS} attempts. Manual review needed.`);

    const reviewFilename = `REVIEW-NEEDED-${targetFilename}`;
    saveFile(reviewFilename, rewrittenSpec);
    console.log(`\n💾 Last attempt saved as: ${reviewFilename}`);
    console.log(`   Review this file and fix manually if needed.`);
  }
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
