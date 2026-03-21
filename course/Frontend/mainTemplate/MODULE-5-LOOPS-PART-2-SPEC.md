# module 5 - loops part 2 - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 5 Loops Part 2 exercises

**SETTING:** Popcorn Factory
**THEME:** Addition and Multiplication inside loops

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-5-LOOPS-PART-2-HELPER-BOX.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: OIL CONTAINERS WITH BACKUP SUPPLY ➕

**SECTION NAME:** loops
**EXERCISE NUMBER:** 1
**EMOJI:** ➕

**SCENARIO:** Calculating the total oil containers each machine gets by adding a backup supply.

**VARIABLES TO USE:**
- Part A: "container number", "backup containers", "total containers"
- Part B: "container number", "backup containers", "total containers"

**CONCEPT:** Using addition inside a loop to calculate a total for each cycle.

**PART A FOCUS:** For containers 1 through 5, add 2 backup containers to each one.
**PART B FOCUS:** For containers 1 through 6, add 3 backup containers to each one.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using addition inside a loop to calculate totals."

**EXPECTED OUTPUT PART A:** "Container 1 plus 2 backups is 3 total. Container 2 plus 2 backups is 4 total. Container 3 plus 2 backups is 5 total. Container 4 plus 2 backups is 6 total. Container 5 plus 2 backups is 7 total."
**EXPECTED OUTPUT PART B:** "Container 1 plus 3 backups is 4 total. Container 2 plus 3 backups is 5 total. Container 3 plus 3 backups is 6 total. Container 4 plus 3 backups is 7 total. Container 5 plus 3 backups is 8 total. Container 6 plus 3 backups is 9 total."

---

## EXERCISE 2: FLAVOR PACKETS DISTRIBUTION ✖️

**SECTION NAME:** loops
**EXERCISE NUMBER:** 2
**EMOJI:** ✖️

**SCENARIO:** Calculating how many flavor packets each station receives based on its number.

**VARIABLES TO USE:**
- Part A: "station number", "total packets"
- Part B: "storage area number", "total boxes"

**CONCEPT:** Using multiplication inside a loop.

**PART A FOCUS:** Calculate total packets by multiplying the station number (1-5) by 2.
**PART B FOCUS:** Calculate total boxes by multiplying the storage area number (1-4) by 3.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using multiplication inside a loop."

**EXPECTED OUTPUT PART A:** "Station 1 gets 2 flavor packets. Station 2 gets 4 flavor packets. Station 3 gets 6 flavor packets. Station 4 gets 8 flavor packets. Station 5 gets 10 flavor packets."
**EXPECTED OUTPUT PART B:** "Storage area 1 gets 3 boxes. Storage area 2 gets 6 boxes. Storage area 3 gets 9 boxes. Storage area 4 gets 12 boxes."

---

## EXERCISE 3: SALT PACKETS FOR MACHINES ✖️

**SECTION NAME:** loops
**EXERCISE NUMBER:** 3
**EMOJI:** ✖️

**SCENARIO:** Calculating how many salt packets each machine or production line receives.

**VARIABLES TO USE:**
- Part A: "machine number", "total packets"
- Part B: "line number", "total containers"

**CONCEPT:** Practicing multiplication inside a loop with different multipliers.

**PART A FOCUS:** Calculate salt packets by multiplying the machine number (1-5) by 4.
**PART B FOCUS:** Calculate salt containers by multiplying the production line number (1-6) by 5.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Practicing multiplication in loops."

**EXPECTED OUTPUT PART A:** "Machine 1 gets 4 salt packets. Machine 2 gets 8 salt packets. Machine 3 gets 12 salt packets. Machine 4 gets 16 salt packets. Machine 5 gets 20 salt packets."
**EXPECTED OUTPUT PART B:** "Line 1 gets 5 salt containers. Line 2 gets 10 salt containers. Line 3 gets 15 salt containers. Line 4 gets 20 salt containers. Line 5 gets 25 salt containers. Line 6 gets 30 salt containers."

---

## EXERCISE 4: MIXING ADDITION AND MULTIPLICATION 🔢

**SECTION NAME:** loops
**EXERCISE NUMBER:** 4
**EMOJI:** 🔢

**SCENARIO:** Calculating totals using both multiplication and addition in a single process.

**VARIABLES TO USE:**
- Part A: "machine number", "extra boxes", "total boxes"
- Part B: "station number", "bonus packets", "total packets"

**CONCEPT:** Combining multiplication and addition inside a loop, following the order of operations.

**PART A FOCUS:** For machines 1-4, calculate total boxes by multiplying the machine number by 2, then adding 3.
**PART B FOCUS:** For stations 1-5, calculate total packets by multiplying the station number by 3, then adding 2.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Combining multiplication and addition in loops."

**EXPECTED OUTPUT PART A:** "Machine 1 gets (1 x 2) + 3 = 5 corn boxes. Machine 2 gets (2 x 2) + 3 = 7 corn boxes. Machine 3 gets (3 x 2) + 3 = 9 corn boxes. Machine 4 gets (4 x 2) + 3 = 11 corn boxes."
**EXPECTED OUTPUT PART B:** "Station 1 gets (1 x 3) + 2 = 5 flavor packets. Station 2 gets (2 x 3) + 2 = 8 flavor packets. Station 3 gets (3 x 3) + 2 = 11 flavor packets. Station 4 gets (4 x 3) + 2 = 14 flavor packets. Station 5 gets (5 x 3) + 2 = 17 flavor packets."

---

## NARRATIVE CONTEXT

**Opening for Module 5, Part 2:**
"Now that you can count with loops, let's add some math! In the factory, we don't just count items, we calculate totals. We'll use loops to add backup supplies and multiply packets for each machine. Let's get calculating!"

**Exercise Flow:**
1. Adding a fixed number inside a loop (oil containers + backup).
2. Multiplying by the loop counter (distributing flavor packets).
3. Practicing multiplication with different numbers (salt packets).
4. Combining multiplication and addition in the correct order.

**Closing:**
"Amazing work! You can now perform calculations inside loops. You've learned how to add and multiply to figure out factory totals. Next, we'll learn how to handle subtraction and division in loops."

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "loops"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET and PRINT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses `<code>` tags (not `<highlight>`)
- [ ] IDs follow pattern: loops-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="loops"
- [ ] Image filename and alt text match spec
- [ ] Empty hint/output/answer containers present
- [ ] Part A Step 4 shows complete pseudocode answer
- [ ] Part B Step 4 references the specific task — no pseudocode shown
- [ ] Expected outputs match the spec
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

## EXERCISE 5: POWER GRID PLANNING ⚡

**SECTION NAME:** loops
**EXERCISE NUMBER:** 5
**EMOJI:** ⚡

**SCENARIO:** Calculating the total power required for each machine in a new production line.

**VARIABLES TO USE:**
- Part A: "machine number", "base power", "extra power", "total power"
- Part B: "machine number", "base power", "extra power", "total power"

**CONCEPT:** Using multiple operations in a loop to solve a planning problem.

**PART A FOCUS:** For machines 1 through 5, calculate power needed if each requires (machine number × 10) + 5 extra units.
**PART B FOCUS:** For machines 1 through 4, calculate power needed if each requires (machine number × 12) + 8 extra units.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Planning power needs using loops."

**EXPECTED OUTPUT PART A:**
```
Machine 1 needs 15 power units
Machine 2 needs 25 power units
Machine 3 needs 35 power units
Machine 4 needs 45 power units
Machine 5 needs 55 power units
```
**EXPECTED OUTPUT PART B:**
```
Machine 1 needs 20 power units
Machine 2 needs 32 power units
Machine 3 needs 44 power units
Machine 4 needs 56 power units
```

---

END OF MODULE 5 PART 2 SPECIFICATIONS
