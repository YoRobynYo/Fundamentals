# module 6 - pirate adventure part 2 - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Spec file for AI to generate all Module 6 Pirate Adventure Part 2 exercises
**This module is a REVIEW module — children use everything they have learned so far**

**SETTING:** Treasure Island 🏝️
**THEME:** Treasure Hunt — combining all conditions and logical operators to find buried treasure

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-6-PIRATE-ADVENTURE-PART2-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: DIGGING FOR TREASURE ⛏️

**SECTION NAME:** piratePart2
**EXERCISE NUMBER:** 1
**EMOJI:** ⛏️

**SCENARIO:** To dig for treasure you need a shovel AND you must be exactly 10 steps from the palm tree

**VARIABLES TO USE:**
- Part A: "has shovel", "steps from tree" — shovel true, steps is 10
- Part B: "has shovel", "steps from tree" — shovel true, steps is 12

**CONCEPT:** Using AND with an equals check to verify both a condition and an exact value

**PART A FOCUS:** Has shovel AND exactly 10 steps — perfect spot — start digging!
**PART B FOCUS:** Has shovel but wrong number of steps — wrong location!

**EXPECTED OUTPUT PART A:** "⛏️ Perfect spot — start digging!"
**EXPECTED OUTPUT PART B:** "📍 Wrong location — check your steps!"

---

## EXERCISE 2: ANCIENT PUZZLE STONES 🪨

**SECTION NAME:** piratePart2
**EXERCISE NUMBER:** 2
**EMOJI:** 🪨

**SCENARIO:** Three stone tablets — the treasure is behind stone 2 OR stone 3 but NOT stone 1

**VARIABLES TO USE:**
- Part A: "stone number" — value is 2
- Part B: "stone number" — value is 1

**CONCEPT:** Using OR to check for two valid options, with a separate check for the dangerous option

**PART A FOCUS:** Stone 2 — correct — passage opens!
**PART B FOCUS:** Stone 1 — triggers trap — careful!

**EXPECTED OUTPUT PART A:** "✅ Correct stone — passage opens!"
**EXPECTED OUTPUT PART B:** "❌ Stone 1 triggers trap — careful!"

---

## EXERCISE 3: JUNGLE PATH CHOICE 🌿

**SECTION NAME:** piratePart2
**EXERCISE NUMBER:** 3
**EMOJI:** 🌿

**SCENARIO:** You can take the path if you have a machete OR it is daylight

**VARIABLES TO USE:**
- Part A: "has machete", "is daylight" — machete true, daylight false
- Part B: "has machete", "is daylight" — machete false, daylight true

**CONCEPT:** Using OR where different conditions can each independently allow the action

**PART A FOCUS:** Has machete — EITHER condition true — path clear!
**PART B FOCUS:** No machete but daylight — EITHER condition still true — path clear!

**EXPECTED OUTPUT PART A:** "🌿 Path clear — continue adventure!"
**EXPECTED OUTPUT PART B:** "🌿 Path clear — continue adventure!"

---

## EXERCISE 4: CAVE ENTRANCE 🕯️

**SECTION NAME:** piratePart2
**EXERCISE NUMBER:** 4
**EMOJI:** 🕯️

**SCENARIO:** You can enter the cave if you have a torch AND the cave is NOT flooded

**VARIABLES TO USE:**
- Part A: "has torch", "cave flooded" — torch true, flooded false
- Part B: "has torch", "cave flooded" — torch true, flooded true

**CONCEPT:** Combining AND with NOT — both a positive check and a negative check together

**PART A FOCUS:** Has torch AND NOT flooded — safe to enter!
**PART B FOCUS:** Has torch BUT cave is flooded — cannot enter!

**EXPECTED OUTPUT PART A:** "🕯️ Cave safe — watch your step!"
**EXPECTED OUTPUT PART B:** "💧 Cannot enter — cave is flooded!"

---

## EXERCISE 5: TREASURE CHEST 🏆

**SECTION NAME:** piratePart2
**EXERCISE NUMBER:** 5
**EMOJI:** 🏆

**SCENARIO:** Open the treasure chest if you have the key AND the secret code is 123 OR 456 AND the chest is NOT rusty

**VARIABLES TO USE:**
- Part A: "has key", "secret code", "chest rusty" — key true, code 123, rusty false
- Part B: "has key", "secret code", "chest rusty" — key true, code 123, rusty true

**CONCEPT:** Combining AND, OR, and NOT together in one check — the ultimate challenge!

**PART A FOCUS:** Has key, correct code, NOT rusty — TREASURE FOUND!
**PART B FOCUS:** Has key, correct code, BUT rusty — chest won't open!

**EXPECTED OUTPUT PART A:** "🏆💎 TREASURE FOUND — YOU WIN!"
**EXPECTED OUTPUT PART B:** "🔒 Still locked — chest is too rusty!"

---

## BONUS EXERCISE: CAPTAIN'S FINAL TEST 🥇

**SECTION NAME:** piratePart2
**EXERCISE NUMBER:** 6
**EMOJI:** 🏆

**SCENARIO:** Earn the Golden Coder Medal by passing ALL conditions at once — the ultimate review challenge!

**VARIABLES TO USE:**
- Part A: "child age", "number of mistakes", "secret word", "challenges completed" — age 9, mistakes 2, word "treasure", challenges 5
- Part B: same but "number of mistakes" is 3 — fails the check

**CONCEPT:** Combining ALL comparison operators and logical operators learned in the course

**PART A FOCUS:** All four conditions pass — Golden Medal earned!
**PART B FOCUS:** Too many mistakes — one condition fails — medal not earned

**EXPECTED OUTPUT PART A:** "🏆🎉 GOLDEN CODER MEDAL EARNED! You mastered ALL conditions!"
**EXPECTED OUTPUT PART B:** "⚓ Keep practising — review your conditions!"

---

## NARRATIVE CONTEXT

**Opening for Module 6 Part 2:**
"Welcome to Treasure Island! 🏝️ You've proven yourself on the ship — now
the real adventure begins! The treasure is buried somewhere on this island
and you'll need ALL your coding skills to find it. Are you ready, young coder? 🏴‍☠️"

**Exercise Flow:**
1. Digging for Treasure — AND with exact value check
2. Ancient Puzzle Stones — OR with a dangerous option
3. Jungle Path Choice — OR where either condition works
4. Cave Entrance — AND combined with NOT
5. Treasure Chest — AND, OR, and NOT all together
6. BONUS: Captain's Final Test — every skill combined!

**Closing:**
"🎉 CONGRATULATIONS! You have found the treasure and earned the Golden Coder Medal!
You have mastered every condition, every comparison, and every logical operator.
You are now a TRUE CODING PIRATE! 🏴‍☠️💻
The adventure continues — what will you build next?"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "piratePart2"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, IF, AND, OR, NOT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] IDs follow pattern: piratePart2-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="piratePart2"
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1 Part A and Part B show complete pseudocode answer
- [ ] Exercises 2-6 Part A and Part B reference specific task — no pseudocode shown
- [ ] Expected outputs match the spec
- [ ] British English throughout — practising not practicing
- [ ] Pirate theme maintained throughout
- [ ] Bonus Exercise 6 is styled with a golden border — celebration feel

---

## GENERATION RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________

---

END OF MODULE 6 PIRATE ADVENTURE PART 2 SPECIFICATIONS
