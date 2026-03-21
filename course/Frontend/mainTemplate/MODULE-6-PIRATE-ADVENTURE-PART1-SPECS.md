# module 6 - pirate adventure part 1 - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Spec file for AI to generate all Module 6 Pirate Adventure Part 1 exercises
**This module is a REVIEW module — children use everything they have learned so far**

**SETTING:** Pirate Ship 🏴‍☠️
**THEME:** Ship Challenges — using conditions and logical operators to solve pirate puzzles

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-6-PIRATE-ADVENTURE-PART1-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: BOARDING THE SHIP ⚓

**SECTION NAME:** piratePart1
**EXERCISE NUMBER:** 1
**EMOJI:** ⚓

**SCENARIO:** To board the pirate ship you must be at least 8 years old AND have a parent's permission

**VARIABLES TO USE:**
- Part A: "child age", "has permission" — age is 9, permission is true
- Part B: "child age", "has permission" — age is 7, permission is true

**CONCEPT:** Using AND to check that BOTH conditions are true before allowing something

**PART A FOCUS:** Check if child is old enough AND has permission — both true — should board
**PART B FOCUS:** Check same conditions — age too young — should NOT board

**EXPECTED OUTPUT PART A:** "✅ Permission granted — welcome aboard!"
**EXPECTED OUTPUT PART B:** "🚫 Stay on shore — need to be 8 or older with permission!"

---

## EXERCISE 2: TREASURE MAP READING 🗺️

**SECTION NAME:** piratePart1
**EXERCISE NUMBER:** 2
**EMOJI:** 🗺️

**SCENARIO:** The treasure map has three possible locations — use ELSE IF to find where X marks the spot!

**VARIABLES TO USE:**
- Part A: "map clue" — value is "palm tree"
- Part B: "map clue" — value is "waterfall"

**CONCEPT:** Using ELSE IF to check through multiple options one at a time

**PART A FOCUS:** Check the map clue — palm tree found — print correct location
**PART B FOCUS:** Check same map — waterfall found — print different location

**EXPECTED OUTPUT PART A:** "🌴 Look by the palm trees!"
**EXPECTED OUTPUT PART B:** "💧 Check behind the waterfall!"

---

## EXERCISE 3: CREW MEMBER CHECK 👥

**SECTION NAME:** piratePart1
**EXERCISE NUMBER:** 3
**EMOJI:** 👥

**SCENARIO:** To join the pirate crew you need BOTH a pirate hat AND a wooden sword

**VARIABLES TO USE:**
- Part A: "has pirate hat", "has wooden sword" — both true
- Part B: "has pirate hat", "has wooden sword" — hat true, sword false

**CONCEPT:** Using AND to check that BOTH required items are present

**PART A FOCUS:** Check both items present — welcome to the crew!
**PART B FOCUS:** Check same — missing sword — cannot join crew

**EXPECTED OUTPUT PART A:** "✅ Welcome to the crew — yo ho ho!"
**EXPECTED OUTPUT PART B:** "🚫 Not ready — need hat AND sword!"

---

## EXERCISE 4: NIGHT WATCH DUTY 🌙

**SECTION NAME:** piratePart1
**EXERCISE NUMBER:** 4
**EMOJI:** 🌙

**SCENARIO:** You can see land if the moon is bright OR stars are visible — use OR to check if you should keep watch

**VARIABLES TO USE:**
- Part A: "moon bright", "stars visible" — moon true, stars false
- Part B: "moon bright", "stars visible" — both false

**CONCEPT:** Using OR to check if EITHER condition is true

**PART A FOCUS:** Moon is bright — EITHER condition true — keep watch!
**PART B FOCUS:** Both false — cannot see anything — rest now

**EXPECTED OUTPUT PART A:** "👀 Keep watch — you can see land!"
**EXPECTED OUTPUT PART B:** "😴 Rest now — too dark to see!"

---

## EXERCISE 5: CANNON FIRING TIME 💥

**SECTION NAME:** piratePart1
**EXERCISE NUMBER:** 5
**EMOJI:** 💥

**SCENARIO:** We can fire the cannon if it is NOT stormy weather

**VARIABLES TO USE:**
- Part A: "stormy weather" — value is false (not stormy)
- Part B: "stormy weather" — value is true (stormy)

**CONCEPT:** Using NOT to check the opposite of a condition

**PART A FOCUS:** Weather is NOT stormy — safe to fire!
**PART B FOCUS:** Weather IS stormy — too dangerous — wait!

**EXPECTED OUTPUT PART A:** "💥 CANNON READY — FIRE AWAY!"
**EXPECTED OUTPUT PART B:** "⛈️ Wait for storm to pass — too dangerous!"

---

## NARRATIVE CONTEXT

**Opening for Module 6 Part 1:**
"Ahoy, young coders! Welcome aboard the Jolly Coder! 🏴‍☠️
Captain Condition and First Mate Function need your help on their pirate ship!
You have learned all about conditions and logical operators — now use your skills
to solve five pirate ship challenges and earn your sea legs!"

**Exercise Flow:**
1. Boarding the Ship — AND both conditions must be true
2. Treasure Map Reading — ELSE IF to check multiple locations
3. Crew Member Check — AND both items required
4. Night Watch Duty — OR either condition is enough
5. Cannon Firing Time — NOT the opposite condition

**Closing:**
"Brilliant work! You've passed all five ship challenges! Captain Condition is
impressed — you've earned your pirate stripes! 🏴‍☠️
Now it's time to go ashore and find the buried treasure! Are you ready? ⚓"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name matches exactly
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, IF, AND, OR, NOT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: piratePart1-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="piratePart1"
- [ ] Image filename and alt text match spec
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1 Part A shows complete pseudocode answer
- [ ] Exercises 2-5 Part A and Part B reference specific task — no pseudocode shown
- [ ] Expected outputs match the spec
- [ ] British English throughout
- [ ] Pirate theme maintained throughout — "Ahoy!", "Yo ho ho!" etc
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6)

---

## GENERATION RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________

---

END OF MODULE 6 PIRATE ADVENTURE PART 1 SPECIFICATIONS