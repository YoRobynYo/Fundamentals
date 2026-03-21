#!/usr/bin/env node

// =============================================================
// REBUILD ALL PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node rebuild-all.js
//
// Rebuilds all modules that have issues, one by one,
// with a 30 second gap between each one.
// Sit back, have a tea, let Hunter Alpha do the work!
// =============================================================

const { execSync } = require('child_process');
const path = require('path');

// Modules that still have issues after audit
const MODULES_TO_REBUILD = [
  'MODULE-1-VARIABLES',
  'MODULE-3-CONDITIONS-PART1',
  'MODULE-3-CONDITIONS-PART2',
  'MODULE-4-LOGICAL-OPERATORS-PART1',
];

const GAP_BETWEEN_MODULES = 30000; // 30 seconds

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function notify(message) {
  try {
    execSync(`osascript -e 'display notification "${message}" with title "Rebuild All Pipeline"'`);
  } catch (e) {}
}

async function main() {
  const total = MODULES_TO_REBUILD.length;
  const startTime = Date.now();

  console.log(`\n🚀 REBUILD ALL PIPELINE`);
  console.log(`📦 Modules to rebuild: ${total}`);
  console.log(`⏱️  Estimated time: ~${total * 3 + (total - 1) / 2} minutes`);
  console.log(`─────────────────────────────────────\n`);
  console.log(`🍵 Go and have a tea — Hunter Alpha has got this!\n`);
  console.log(`─────────────────────────────────────\n`);

  const results = { passed: [], failed: [] };

  for (let i = 0; i < MODULES_TO_REBUILD.length; i++) {
    const module = MODULES_TO_REBUILD[i];
    console.log(`\n[${i + 1}/${total}] Building ${module}...`);

    try {
      execSync(`node build-html.js ${module}`, {
        cwd: __dirname,
        encoding: 'utf8',
        stdio: 'inherit'
      });
      results.passed.push(module);
    } catch (e) {
      console.log(`❌ ${module} failed`);
      results.failed.push(module);
    }

    if (i < MODULES_TO_REBUILD.length - 1) {
      console.log(`\n⏳ Waiting 30 seconds before next module...`);
      await sleep(GAP_BETWEEN_MODULES);
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const timeStr = `${mins}m ${secs}s`;

  console.log(`\n════════════════════════════════════════`);
  console.log(`📊 REBUILD COMPLETE`);
  console.log(`════════════════════════════════════════`);
  console.log(`✅ Passed: ${results.passed.length}/${total}`);
  console.log(`❌ Failed: ${results.failed.length}/${total}`);
  console.log(`⏱️  Total time: ${timeStr}`);

  if (results.failed.length > 0) {
    console.log(`\n⚠️  Modules needing attention:`);
    results.failed.forEach(m => console.log(`   • ${m}`));
    notify(`Rebuild done! ${results.passed.length} passed, ${results.failed.length} need attention. (${timeStr})`);
  } else {
    console.log(`\n🎉 All modules rebuilt successfully!`);
    notify(`All ${total} modules rebuilt successfully! (${timeStr})`);
  }

  console.log(`\n💡 Run node audit-html.js to verify everything is clean.\n`);
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
