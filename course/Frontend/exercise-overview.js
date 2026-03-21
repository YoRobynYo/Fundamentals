#!/usr/bin/env node

// =============================================================
// EXERCISE OVERVIEW
// core-value-fundamentals — Course Content At A Glance
// =============================================================
//
// USAGE:
//   node exercise-overview.js
//
// Reads all spec files from mainTemplate/ and outputs a clean
// summary of every module, exercise, and topic in the course.
// =============================================================

const fs = require('fs');
const path = require('path');

const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');

const SPEC_FILES = [
  { module: 'MODULE 1 — VARIABLES',                    file: 'MODULE-1-VARIABLES-SPECS.md',                  setting: '🏫 Classroom' },
  { module: 'MODULE 2 — OPERATORS',                    file: 'MODULE-2-OPERATORS-SPECS.md',                  setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 3 — CONDITIONS PART 1',            file: 'MODULE-3-CONDITIONS-PART1-SPECS.md',           setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 3 — CONDITIONS PART 2',            file: 'MODULE-3-CONDITIONS-PART2-SPECS.md',           setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 3 — CONDITIONS PART 3',            file: 'MODULE-3-CONDITIONS-PART3-SPECS.md',           setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 3 — CONDITIONS PART 4',            file: 'MODULE-3-CONDITIONS-PART4-SPECS.md',           setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 3 — CONDITIONS PART 5',            file: 'MODULE-3-CONDITIONS-PART5-SPECS.md',           setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 4 — LOGICAL OPERATORS PART 1',     file: 'MODULE-4-LOGICAL-OPERATORS-PART1-SPECS.md',    setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 4 — LOGICAL OPERATORS PART 2',     file: 'MODULE-4-LOGICAL-OPERATORS-PART2-SPECS.md',    setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 5 — LOOPS PART 1',                 file: 'MODULE-5-LOOPS-PART-1-SPEC.md',                setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 5 — LOOPS PART 2',                 file: 'MODULE-5-LOOPS-PART-2-SPEC.md',                setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 5 — LOOPS PART 3',                 file: 'MODULE-5-LOOPS-PART-3-SPEC.md',                setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 5 — LOOPS PART 4',                 file: 'MODULE-5-LOOPS-PART-4-SPEC.md',                setting: '🍿 Popcorn Factory' },
  { module: 'MODULE 6 — PIRATE ADVENTURE PART 1',      file: 'MODULE-6-PIRATE-ADVENTURE-PART1-SPECS.md',     setting: '🏴‍☠️ Pirate Adventure' },
  { module: 'MODULE 6 — PIRATE ADVENTURE PART 2',      file: 'MODULE-6-PIRATE-ADVENTURE-PART2-SPECS.md',     setting: '🏴‍☠️ Pirate Adventure' },
];

function parseSpec(filePath) {
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const exercises = [];
  let currentExercise = null;

  lines.forEach(line => {
    const trimmed = line.trim();

    if (trimmed.startsWith('## EXERCISE')) {
      if (currentExercise) exercises.push(currentExercise);
      // Extract just the title without "## EXERCISE N: "
      const titleMatch = trimmed.match(/## EXERCISE \d+:\s*(.+)/);
      const title = titleMatch ? titleMatch[1] : trimmed.replace('## ', '');
      currentExercise = { title, partA: '', partB: '' };
    }

    if (trimmed.startsWith('**PART A FOCUS:**') && currentExercise) {
      currentExercise.partA = trimmed.replace('**PART A FOCUS:**', '').trim();
    }

    if (trimmed.startsWith('**PART B FOCUS:**') && currentExercise) {
      currentExercise.partB = trimmed.replace('**PART B FOCUS:**', '').trim();
    }
  });

  if (currentExercise) exercises.push(currentExercise);
  return exercises;
}

function main() {
  console.log('\n📚 CORE-VALUE-FUNDAMENTALS — COURSE OVERVIEW');
  console.log('═══════════════════════════════════════════════\n');

  let totalExercises = 0;

  SPEC_FILES.forEach(({ module, file, setting }) => {
    const filePath = path.join(MAIN_TEMPLATE_DIR, file);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  ${module} — spec file not found\n`);
      return;
    }

    const exercises = parseSpec(filePath);
    if (!exercises) return;

    console.log(`${module} ${setting}`);
    console.log('─'.repeat(50));

    exercises.forEach((ex, i) => {
      totalExercises++;
      console.log(`Ex ${i + 1}: ${ex.title}`);


    });

    console.log('');
  });

  console.log('═══════════════════════════════════════════════');
  console.log(`✏️  Total exercises: ${totalExercises} (${totalExercises * 2} parts)\n`);
}

main();
