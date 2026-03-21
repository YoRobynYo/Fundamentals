# module 5 - loops part 2 - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 5 Loops Part 2 exercises

**SETTING:** Popcorn Factory
**THEME:** Doing math with loops to manage factory resources

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

## EXERCISE 1: BACKUP OIL CONTAINERS 🛢️

**SECTION NAME:** loops
**EXERCISE NUMBER:** 1
**EMOJI:** 🛢️

**SCENARIO:** Calculating the total number of oil containers needed for a line of machines, including backups.

**VARIABLES TO USE:**
- Part A: "number of machines", "backup containers per machine"
- Part B: "number of machines", "backup containers per machine"

**CONCEPT:** Using addition inside a loop to calculate a running total for each iteration.

**PART A FOCUS:** For machines 1 through 5, calculate total containers needed if each machine gets its number plus 2 backup containers.
**PART B FOCUS:** For machines 1 through 7, calculate total containers needed if each machine gets its number plus 3 backup containers.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using loops to perform calculations"

**EXPECTED OUTPUT PART A:** "Machine 1 needs 3 containers. Machine 2 needs 4 containers. Machine 3 needs 5 containers. Machine 4 needs 6 containers. Machine 5 needs 7 containers."
**EXPECTED OUTPUT PART B:** "Machine 1 needs 4 containers. Machine 2 needs 5 containers. Machine 3 needs 6 containers. Machine 4 needs 7 containers. Machine 5 needs 8 containers. Machine 6 needs 9 containers. Machine 7 needs 10 containers."

---

## EXERCISE 2: FLAVOR PACKET CALCULATION 🍬

**SECTION NAME:** loops
**EXERCISE NUMBER:** 2
**EMOJI:** 🍬

**SCENARIO:** Calculating how many flavor packets to deliver to each station based on its number.

**VARIABLES TO USE:**
- Part A: "number of stations", "packets multiplier"
- Part B: "number of stations", "packets multiplier"

**CONCEPT:** Using multiplication inside a loop to scale a value with each iteration.

**PART A FOCUS:** For stations 1 through 5, calculate flavor packets needed if each station gets its number multiplied by 2.
**PART B FOCUS:** For stations 1 through 6, calculate flavor packets needed if each station gets its number multiplied by 3.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using loops to perform calculations"

**EXPECTED OUTPUT PART A:** "Station 1 gets 2 packets. Station 2 gets 4 packets. Station 3 gets 6 packets. Station 4 gets 8 packets. Station 5 gets 10 packets."
**EXPECTED OUTPUT PART B:** "Station 1 gets 3 packets. Station 2 gets 6 packets. Station 3 gets 9 packets. Station 4 gets 12 packets. Station 5 gets 15 packets. Station 6 gets 18 packets."

---

## EXERCISE 3: TOTAL CORN BOX DELIVERY 📦

**SECTION NAME:** loops
**EXERCISE NUMBER:** 3
**EMOJI:** 📦

**SCENARIO:** Calculating the total number of corn boxes for each machine using a formula.

**VARIABLES TO USE:**
- Part A: "number of machines", "base box multiplier", "extra boxes"
- Part B: "number of machines", "base box multiplier", "extra boxes"

**CONCEPT:** Combining multiplication and addition inside a loop for more complex calculations.

**PART A FOCUS:** For machines 1 through 4, calculate total boxes if each gets (machine number × 2) + 3 extra boxes.
**PART B FOCUS:** For machines 1 through 5, calculate total boxes if each gets (machine number × 3) + 5 extra boxes.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using loops to perform calculations"

**EXPECTED OUTPUT PART A:** "Machine 1 needs 5 boxes. Machine 2 needs 7 boxes. Machine 3 needs 9 boxes. Machine 4 needs 11 boxes."
**EXPECTED OUTPUT PART B:** "Machine 1 needs 8 boxes. Machine 2 needs 11 boxes. Machine 3 needs 14 boxes. Machine 4 needs 17 boxes. Machine 5 needs 20 boxes."

---

## EXERCISE 4: OIL LEVEL CHECK 💧

**SECTION NAME:** loops
**EXERCISE NUMBER:** 4
**EMOJI:** 💧

**SCENARIO:** Monitoring a decreasing resource as it's used by a line of machines.

**VARIABLES TO USE:**
- Part A: "starting oil level", "oil used per machine", "number of machines"
- Part B: "starting oil level", "oil used per machine", "number of machines"

**CONCEPT:** Using subtraction inside a loop to track a depleting value.

**PART A FOCUS:** An oil drum starts with 100 units. For machines 1 through 5, calculate the remaining oil if each machine uses 10 units.
**PART B FOCUS:** An oil drum starts with 200 units. For machines 1 through 6, calculate the remaining oil if each machine uses 15 units.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using loops to perform calculations"

**EXPECTED OUTPUT PART A:** "After machine 1, 90 units left. After machine 2, 80 units left. After machine 3, 70 units left. After machine 4, 60 units left. After machine 5, 50 units left."
**EXPECTED OUTPUT PART B:** "After machine 1, 185 units left. After machine 2, 170 units left. After machine 3, 155 units left. After machine 4, 140 units left. After machine 5, 125 units left. After machine 6, 110 units left."

---

## EXERCISE 5: POWER GRID PLANNING ⚡

**SECTION NAME:** loops
**EXERCISE NUMBER:** 5
**EMOJI:** ⚡

**SCENARIO:** Calculating the total power required for each machine in a new production line.

**VARIABLES TO USE:**
- Part A: "base power multiplier", "extra power per machine", "number of machines"
- Part B: "base power multiplier", "extra power per machine", "number of machines"

**CONCEPT:** Using multiple operations in a loop to solve a planning problem.

**PART A FOCUS:** For machines 1 through 5, calculate power needed if each requires (machine number × 10) + 5 extra units.
**PART B FOCUS:** For machines 1 through 4, calculate power needed if each requires (machine number × 12) + 8 extra units.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using loops to perform calculations"

**EXPECTED OUTPUT PART A:** "Machine 1 needs 15 power units. Machine 2 needs 25 power units. Machine 3 needs 35 power units. Machine 4 needs 45 power units. Machine 5 needs 55 power units."
**EXPECTED OUTPUT PART B:** "Machine 1 needs 20 power units. Machine 2 needs 32 power units. Machine 3 needs 44 power units. Machine 4 needs 56 power units."

---

## NARRATIVE CONTEXT

**Opening for Module 5, Part 2:**
"Welcome back to the factory floor! You've mastered counting with loops, but now it's time to make them do some real work. In this section, we'll use loops to perform calculations for every machine and station, helping us manage supplies, power, and more. Let's get calculating!"

**Exercise Flow:**
1. Adding backup supplies for each machine.
2. Multiplying to find out how many flavor packets each station needs.
3. Combining multiplication and addition to deliver the right number of corn boxes.
4. Subtracting to check how much oil is left after each machine runs.
5. Planning the power needs for a whole new line of machines.

**Closing:**
"Amazing work! You've turned loops into powerful calculators. You can now automatically manage resources for the entire factory. Next up, we'll learn how to make loops even smarter by changing how they count."

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

END OF MODULE 5 PART 2 SPECIFICATIONS