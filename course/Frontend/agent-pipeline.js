#!/usr/bin/env node

// =============================================================
// AGENT PIPELINE
// core-value-fundamentals
// =============================================================
// Five focused agents working together using Ollama locally.
// No API keys. No quota. No internet needed.
//
// USAGE:
//   node agent-pipeline.js update 2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md
//   node agent-pipeline.js build MODULE-1-VARIABLES
// =============================================================

const fs = require('fs');
const path = require('path');

const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const OLLAMA_URL = 'http://localhost:11434/api/generate';
const BUILDER_MODEL = 'qwen2.5-coder:7b';
const VALIDATOR_MODEL = 'qwen2.5-coder:7b'; // Temporary - same as builder to reduce memory
const CHUNK_SIZE = 80; // lines per chunk

// =============================================================
// OLLAMA CALL
// =============================================================
async function callOllama(model, prompt, agentName) {
  process.stdout.write(`   🤖 ${agentName} thinking...`);
  
  const response = await fetch(OLLAMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt, stream: false })
  });

  if (!response.ok) throw new Error(`Ollama error ${response.status}`);
  const data = await response.json();
  process.stdout.write(' done\n');
  return data.response.trim();
}

// =============================================================
// AGENT 1 — READER
// Loads the rules so all other agents understand the standards
// =============================================================
async function agentReader() {
  console.log('\n🤖 AGENT 1 — READER');
  const filesToLoad = [
    '1-HOW-TO-REWRITE-MODULE-SPECS.md',
    '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md',
  ];

  let rules = '';
  for (const file of filesToLoad) {
    const filePath = path.join(MAIN_TEMPLATE_DIR, file);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      rules += fileContent.split('\n').slice(0, 50).join('\n') + '\n';
      console.log(`   ✅ Loaded: ${file}`);
    } else {
      console.log(`   ⚠️  Not found: ${file}`);
    }
  }
  return rules;
}

// =============================================================
// AGENT 2 — CHUNKER
// Splits the file into manageable pieces
// =============================================================
function agentChunker(content) {
  console.log('\n🤖 AGENT 2 — CHUNKER');
  
  const lines = content.split('\n');
  const chunks = [];
  
  for (let i = 0; i < lines.length; i += CHUNK_SIZE) {
    chunks.push({
      index: chunks.length + 1,
      startLine: i + 1,
      endLine: Math.min(i + CHUNK_SIZE, lines.length),
      content: lines.slice(i, i + CHUNK_SIZE).join('\n')
    });
  }

  console.log(`   ✅ Split into ${chunks.length} chunks of ~${CHUNK_SIZE} lines each`);
  return chunks;
}

// =============================================================
// AGENT 3 — FIXER
// Fixes one chunk at a time
// =============================================================
async function agentFixer(chunk, rules, isRuleSection) {
  const prompt = `You are fixing a section of a children's coding course foundation file.

RULES TO FOLLOW:
${rules}

BANNED WORDS — fix these:
- "students" -> "children"
- "student" -> "child"
- "period" (school) -> "lesson"
- "program" (computer) -> "code"
- "programming" -> "coding"
- "practice" (verb) -> "practise"
- "color" -> "colour" (NOT in CSS properties like color: or background-color)
- "organize" -> "organise"
- "recognize" -> "recognise"
- "center" -> "centre" (NOT in CSS like text-align: center)
- "math" -> "maths"

${isRuleSection ? `IMPORTANT: After RULE 6, add this new section exactly:

## RULE 7: BANNED WORDS — NEVER USE THESE

The following words are banned from ALL exercises, helper boxes, and any content children will read.
No exceptions. If you are unsure — do not use it.

### Banned — Use These Instead

| Never Use | Use Instead |
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
| AI tool names | AI |

### Why This Matters
- This course is built for children in the UK — British English only
- "Period" means something very different to children in the UK
- Real code syntax must never appear — pseudocode only

---` : ''}

SECTION TO FIX (lines ${chunk.startLine}-${chunk.endLine}):
${chunk.content}

CRITICAL RULES FOR YOUR OUTPUT:
- Return the COMPLETE section with ALL lines intact
- Do NOT summarise, shorten, or skip any lines
- Do NOT add explanations or comments
- The output must have the same number of lines as the input (or more if adding RULE 7)
- Start immediately with the fixed content, no preamble`;

  const fixed = await callOllama(BUILDER_MODEL, prompt, `Fixer (chunk ${chunk.index})`);
  return fixed;
}

// =============================================================
// AGENT 4 — VALIDATOR
// Checks each fixed chunk
// =============================================================
async function agentValidator(original, fixed, chunkIndex) {
  // Quick code-based checks first
  const issues = [];
  const lines = fixed.split('\n');
  
  lines.forEach((line, i) => {
    const lower = line.toLowerCase();
    const isComment = line.trim().startsWith('<!--');
    const inScript = false;
    
    if (!isComment) {
      if (lower.includes('students') && !line.includes('|')) issues.push(`Line ${i+1}: "students" still present`);
      if (lower.includes(' period') && !line.includes('lesson') && !line.includes('|')) issues.push(`Line ${i+1}: "period" still present`);
    }
  });

  if (issues.length > 0) {
    console.log(`   ⚠️  Chunk ${chunkIndex} has ${issues.length} issue(s) — will retry`);
    return { passed: false, issues };
  }

  console.log(`   ✅ Chunk ${chunkIndex} passed`);
  return { passed: true, issues: [] };
}

// =============================================================
// AGENT 5 — ASSEMBLER
// Puts all fixed chunks back together
// =============================================================
function agentAssembler(chunks, filename) {
  console.log('\n🤖 AGENT 5 — ASSEMBLER');
  
  const assembled = chunks.join('\n');
  
  // Safety check
  const originalLines = parseInt(process.env.ORIGINAL_LINES || '0');
  const assembledLines = assembled.split('\n').length;
  
  if (originalLines > 0 && assembledLines < originalLines * 0.8) {
    console.log(`   🚨 SAFETY BLOCK: assembled ${assembledLines} lines but original was ${originalLines}`);
    return { success: false, content: assembled };
  }

  console.log(`   ✅ Assembled ${assembledLines} lines`);
  return { success: true, content: assembled };
}

// =============================================================
// SAVE FILE
// =============================================================
function saveFile(filePath, content, filename) {
  // Timestamped backup
  const now = new Date();
  const timestamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const backupName = filename.replace('.md', `-BACKUP-${timestamp}.md`);
  const backupPath = path.join(MAIN_TEMPLATE_DIR, backupName);
  
  const original = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(backupPath, original, 'utf8');
  console.log(`   💾 Backup saved: ${backupName}`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`   ✅ Saved: ${filename}`);
}

// =============================================================
// MAIN — UPDATE PIPELINE
// =============================================================
async function runUpdatePipeline(filename) {
  const filePath = path.join(MAIN_TEMPLATE_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  console.log('\n🚀 AGENT PIPELINE — UPDATE MODE');
  console.log(`📄 File: ${filename}`);
  console.log(`🦙 Builder: ${BUILDER_MODEL} (Ollama)`);
  console.log(`🦙 Validator: ${VALIDATOR_MODEL} (Ollama)`);
  console.log('─────────────────────────────────────\n');

  const startTime = Date.now();
  const originalContent = fs.readFileSync(filePath, 'utf8');
  const originalLines = originalContent.split('\n').length;
  process.env.ORIGINAL_LINES = originalLines;
  
  console.log(`✅ File loaded (${originalLines} lines)`);

  // Agent 1 — Load rules
  const rules = await agentReader();

  // Agent 2 — Split into chunks  
  const chunks = agentChunker(originalContent);

  // Agent 3 + 4 — Fix and validate each chunk
  console.log('\n🤖 AGENT 3 — FIXER + AGENT 4 — VALIDATOR');
  const fixedChunks = [];
  let allPassed = true;

  for (const chunk of chunks) {
    process.stdout.write(`   Processing chunk ${chunk.index}/${chunks.length} (lines ${chunk.startLine}-${chunk.endLine})... `);
    
    // Check if this chunk contains RULE 6 (where we need to add RULE 7)
    const isRuleSection = chunk.content.includes('RULE 6');
    const hasRule7 = originalContent.includes('RULE 7');
    
    let fixed = await agentFixer(chunk, rules, isRuleSection && !hasRule7);
    
    // Validate
    const validation = await agentValidator(chunk.content, fixed, chunk.index);
    
    if (!validation.passed) {
      // One retry
      console.log(`   🔄 Retrying chunk ${chunk.index}...`);
      fixed = await agentFixer(chunk, rules, isRuleSection && !hasRule7);
      const retry = await agentValidator(chunk.content, fixed, chunk.index);
      if (!retry.passed) {
        allPassed = false;
        console.log(`   ❌ Chunk ${chunk.index} failed after retry`);
      }
    }
    
    fixedChunks.push(fixed);
  }

  // Agent 5 — Assemble
  const result = agentAssembler(fixedChunks, filename);

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  if (result.success) {
    saveFile(filePath, result.content, filename);
    console.log(`\n🎉 Pipeline complete! (${timeStr})`);
    if (!allPassed) {
      console.log(`⚠️  Some chunks had issues — review the file`);
    }
  } else {
    const reviewPath = filePath.replace('.md', '-REVIEW-NEEDED.md');
    if (result.content && result.content.trim().length > 100) {
      fs.writeFileSync(reviewPath, result.content, 'utf8');
      console.log(`⚠️  Saved for review: ${filename.replace('.md', '-REVIEW-NEEDED.md')}`);
    } else {
      console.log(`🚨 Nothing saved — original file untouched`);
    }
  }
}

// =============================================================
// ENTRY POINT
// =============================================================
const mode = process.argv[2];
const target = process.argv[3];

if (!mode || !target) {
  console.error('Usage: node agent-pipeline.js update FILENAME.md');
  console.error('       node agent-pipeline.js build MODULE-NAME');
  process.exit(1);
}

if (mode === 'update') {
  runUpdatePipeline(target).catch(err => {
    console.error('❌ Pipeline error:', err);
    process.exit(1);
  });
} else {
  console.error('❌ Unknown mode. Use: update or build');
  process.exit(1);
}
