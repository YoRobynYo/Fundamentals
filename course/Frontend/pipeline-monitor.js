#!/usr/bin/env node

// =============================================================
// PIPELINE MONITOR
// core-value-fundamentals
// =============================================================
//
// USAGE:
//   node pipeline-monitor.js
//
// Shows:
//   - Which AI is currently configured
//   - Session usage tracker
//   - Approved models list
//   - AI waterfall order
// =============================================================

const fs = require('fs');
const path = require('path');

const CHUNK_SIZE = 80; // lines per chunk
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

// ---------------------------------------------------------------
// APPROVED MODELS — only these are allowed in the pipeline
// ---------------------------------------------------------------
const APPROVED_MODELS = [
  'openrouter/auto',
  'openrouter/hunter-alpha',
  'nvidia/nemotron-3-nano-30b-a3b:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'google/gemini-2.0-flash-exp:free',
  'qwen2.5-coder:7b',      // Ollama offline
  'llama3.1:8b',         // Ollama offline
];

// ---------------------------------------------------------------
// SESSION LOG FILE
// ---------------------------------------------------------------
const LOG_FILE = path.join(__dirname, '_pipeline-session.json');

function loadSession() {
  if (!fs.existsSync(LOG_FILE)) {
    return { requests: [], startTime: new Date().toISOString(), totalRequests: 0 };
  }
  try {
    return JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
  } catch {
    return { requests: [], startTime: new Date().toISOString(), totalRequests: 0 };
  }
}

// ---------------------------------------------------------------
// CHECK OPENROUTER STATUS
// ---------------------------------------------------------------
async function checkOpenRouter() {
  if (!OPENROUTER_API_KEY) return { status: '❌ No API key', model: 'none' };

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openrouter/auto',
        messages: [{ role: 'user', content: 'Reply with just: OK' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      const data = await response.json();
      const model = data.model || 'openrouter/auto';
      return { status: '✅ Online', model };
    } else {
      const err = await response.json();
      return { status: `❌ Error ${response.status}: ${err.error?.message?.slice(0, 60)}`, model: 'none' };
    }
  } catch (e) {
    return { status: `❌ Connection failed: ${e.message.slice(0, 60)}`, model: 'none' };
  }
}

// ---------------------------------------------------------------
// CHECK GEMINI STATUS
// ---------------------------------------------------------------
async function checkGemini() {
  if (!GEMINI_API_KEY) return { status: '❌ No API key' };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Reply with just: OK' }] }],
          generationConfig: { maxOutputTokens: 5 }
        })
      }
    );

    if (response.ok) {
      return { status: '✅ Online' };
    } else {
      const err = await response.json();
      if (err.error?.code === 429) {
        const retryMatch = err.error?.message?.match(/retry in (\d+)s/);
        const retryTime = retryMatch ? `retry in ${retryMatch[1]}s` : 'quota exceeded';
        return { status: `⚠️  Quota exceeded — ${retryTime}` };
      }
      return { status: `❌ Error ${response.status}` };
    }
  } catch (e) {
    return { status: `❌ Connection failed` };
  }
}

// ---------------------------------------------------------------
// CHECK OLLAMA STATUS
// ---------------------------------------------------------------
async function checkOllama() {
  try {
    const response = await fetch('http://localhost:11434/api/tags');
    if (response.ok) {
      const data = await response.json();
      const models = data.models?.map(m => m.name) || [];
      return { status: '✅ Online', models };
    }
    return { status: '❌ Not running' };
  } catch {
    return { status: '❌ Not running' };
  }
}

// ---------------------------------------------------------------
// READ CURRENT MODEL FROM SCRIPTS
// ---------------------------------------------------------------
function getCurrentModel(scriptName) {
  const scriptPath = path.join(__dirname, scriptName);
  if (!fs.existsSync(scriptPath)) return 'unknown';
  const content = fs.readFileSync(scriptPath, 'utf8');
  const match = content.match(/const BUILDER_MODEL = '([^']+)'/);
  return match ? match[1] : 'unknown';
}

// ---------------------------------------------------------------
// PROGRESS BAR
// ---------------------------------------------------------------
function progressBar(used, total, width = 20) {
  if (total === 0) return '░'.repeat(width) + ' unknown';
  const pct = Math.min(used / total, 1);
  const filled = Math.round(pct * width);
  const bar = '█'.repeat(filled) + '░'.repeat(width - filled);
  const pctStr = Math.round(pct * 100) + '%';
  return `${bar} ${pctStr}`;
}

// ---------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------
async function main() {
  console.log('\n🎛️  PIPELINE MONITOR');
  console.log('═══════════════════════════════════════════════\n');

  const session = loadSession();

  // Current model config
  const buildModel = getCurrentModel('build-html.js');
  const updateModel = getCurrentModel('update-template.js');

  console.log('📋 CURRENT CONFIGURATION');
  console.log('─────────────────────────');
  console.log(`   build-html.js    → ${buildModel}`);
  console.log(`   update-template  → ${updateModel}`);

  const isApproved = (model) => APPROVED_MODELS.includes(model);
  if (!isApproved(buildModel)) {
    console.log(`   ⚠️  WARNING: ${buildModel} is NOT on the approved models list!`);
  }
  if (!isApproved(updateModel)) {
    console.log(`   ⚠️  WARNING: ${updateModel} is NOT on the approved models list!`);
  }

  console.log('\n🔍 CHECKING AI STATUS (this may take a moment)...\n');

  // Check all AIs in parallel
  const [openrouter, gemini, ollama] = await Promise.all([
    checkOpenRouter(),
    checkGemini(),
    checkOllama()
  ]);

  console.log('🤖 AI STATUS');
  console.log('─────────────────────────');
  console.log(`   OpenRouter  → ${openrouter.status}`);
  if (openrouter.model && openrouter.model !== 'none') {
    console.log(`               (auto-selected: ${openrouter.model})`);
  }
  console.log(`   Gemini API  → ${gemini.status}`);
  console.log(`   Ollama      → ${ollama.status}`);
  if (ollama.models?.length > 0) {
    console.log(`               Models: ${ollama.models.join(', ')}`);
  }

  console.log('\n🌊 AI WATERFALL ORDER');
  console.log('─────────────────────────');
  console.log('   1. OpenRouter (openrouter/auto) <- tries this first');
  console.log('   2. Gemini API                   <- fallback if OpenRouter fails');
  console.log('   3. Ollama (qwen2.5-coder:7b)      <- final offline safety net');
  console.log('   4. Pipeline stops               <- only if all three fail');

  console.log('\n✅ APPROVED MODELS');
  console.log('─────────────────────────');
  APPROVED_MODELS.forEach(m => console.log(`   • ${m}`));

  console.log('\n🛡️  PROTECTIONS ACTIVE');
  console.log('─────────────────────────');
  console.log('   ✅ Safety block — refuses to save files shorter than original');
  console.log('   ✅ Timestamped backups — every update saves a dated backup');
  console.log('   ✅ REVIEW-NEEDED — saves for review if validation fails');
  console.log('   ✅ Max 3 attempts — pipeline stops after 3 failures');


  console.log('\n🤖 AGENT SYSTEM');
  console.log('─────────────────────────');
  console.log('   Agent 1 — Reader     : Loads rules and standards');
  console.log('   Agent 2 — Chunker    : Splits file into ' + CHUNK_SIZE + '-line chunks');
  console.log('   Agent 3 — Fixer      : Fixes banned words (qwen2.5-coder:7b)');
  console.log('   Agent 4 — Validator  : Checks each chunk (llama3.1:8b)');
  console.log('   Agent 5 — Assembler  : Rebuilds complete file');
  console.log('');
  console.log('   Usage: node agent-pipeline.js update FILENAME.md');

  console.log('\n📊 RECOMMENDATIONS');
  console.log('─────────────────────────');
  if (openrouter.status.includes('✅')) {
    console.log('   ✅ OpenRouter is online — safe to run pipeline');
  } else {
    console.log('   ⚠️  OpenRouter is offline — check Gemini status before running');
  }
  if (gemini.status.includes('Quota')) {
    console.log('   ⚠️  Gemini quota exhausted — fallback unavailable');
    console.log('   💡 Tip: Gemini resets at 8am UK time');
  }
  if (openrouter.status.includes('❌') && gemini.status.includes('Quota')) {
    console.log('\n   🚨 BOTH AIs unavailable — do not run pipeline until one recovers');
  }

  console.log('\n═══════════════════════════════════════════════\n');
}

main().catch(err => {
  console.error('❌ Monitor error:', err);
  process.exit(1);
});
