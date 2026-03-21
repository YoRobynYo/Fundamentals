# module 3 - conditions part 2 - exercise specifications
## Language-Agnostic Edition

**Created:** February 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 3 Conditions Part 2 exercises

**SETTING:** Popcorn Factory (Station One)
**THEME:** Exact matching — checking if things are EXACTLY right or WRONG

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-3-CONDITIONS-PART2-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: BAG POSITIONING CHECK ✅

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 1
**EMOJI:** ✅

**SCENARIO:** Checking if bags are positioned exactly under the machine's chute to prevent spills.

**VARIABLES TO USE:**
- Part A: "bag position", "correct position"
- Part B: "bag position", "correct position"

**CONCEPT:** Using exact matching to check if two text values are identical.

**PART A FOCUS:** Check if the bag's position is exactly correct.
**PART B FOCUS:** Check if the bag's position is not correct, identifying an error.

**IMAGE:** if-statement-equal-to.jpg
**ALT TEXT:** "A diagram showing an IF statement checking if two values are equal."

**EXPECTED OUTPUT PART A:** "Is the bag position correct? true"
**EXPECTED OUTPUT PART B:** "Is the bag position wrong? true"

---

## EXERCISE 2: BOX NUMBER VERIFICATION 🔢

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 2
**EMOJI:** 🔢

**SCENARIO:** Verifying that the number on a supply box exactly matches the station number.

**VARIABLES TO USE:**
- Part A: "box number", "station number"
- Part B: "box number", "station number"

**CONCEPT:** Using exact matching with numbers to ensure correctness.

**PART A FOCUS:** Check if the box number exactly matches the station number.
**PART B FOCUS:** Identify a box that has the wrong number for the current station.

**IMAGE:** if-statement-equal-to.jpg
**ALT TEXT:** "A diagram showing an IF statement checking if two numbers are equal."

**EXPECTED OUTPUT PART A:** "Does the box number match? true"
**EXPECTED OUTPUT PART B:** "Is the box number a mismatch? true"

---

## EXERCISE 3: STATUS LIGHT COLOR CHECK 🔴

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 3
**EMOJI:** 🔴

**SCENARIO:** Checking the color of the machine's status light to ensure it's in the correct state for setup.

**VARIABLES TO USE:**
- Part A: "light color", "expected color"
- Part B: "light color", "expected color"

**CONCEPT:** Using exact matching with text to verify a machine's status.

**PART A FOCUS:** Verify the status light is the correct color ("red") for the setup phase.
**PART B FOCUS:** Detect when the status light is an unexpected color ("green"), indicating a problem.

**IMAGE:** if-statement-not-equal-to.jpg
**ALT TEXT:** "A diagram showing an IF statement checking if two values are not equal."

**EXPECTED OUTPUT PART A:** "Is the light color correct? true"
**EXPECTED OUTPUT PART B:** "Is the light color a mismatch? true"

---

## EXERCISE 4: TOOL TYPE VERIFICATION 🔧

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 4
**EMOJI:** 🔧

**SCENARIO:** Ensuring the correct type of tool ("scoop") is at the workstation.

**VARIABLES TO USE:**
- Part A: "tool type", "correct tool"
- Part B: "tool type", "correct tool"

**CONCEPT:** Using exact matching to ensure the correct equipment is being used.

**PART A FOCUS:** Check if the tool at the station is the exact one required.
**PART B FOCUS:** Identify when the wrong tool ("tongs") has been brought to the station.

**IMAGE:** if-statement-equal-to.jpg
**ALT TEXT:** "A diagram showing an IF statement checking if a tool is the correct type."

**EXPECTED OUTPUT PART A:** "Is the tool correct? true"
**EXPECTED OUTPUT PART B:** "Is the tool a mismatch? true"

---

## EXERCISE 5: LIGHTNING PANEL CHECK ⚡

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 5
**EMOJI:** ⚡

**SCENARIO:** Verifying the machine is connected to electricity by checking a status panel.

**VARIABLES TO USE:**
- Part A: "panel status", "expected status"
- Part B: "panel status", "expected status"

**CONCEPT:** Using exact matching to check for a critical "on" or "off" status.

**PART A FOCUS:** Check if the panel shows the machine is correctly powered "on".
**PART B FOCUS:** Detect if the panel shows the machine is unexpectedly powered "off".

**IMAGE:** if-statement-not-equal-to.jpg
**ALT TEXT:** "A diagram showing an IF statement checking if a system status is correct."

**EXPECTED OUTPUT PART A:** "Is the power on? true"
**EXPECTED OUTPUT PART B:** "Is there a power problem? true"

---

## NARRATIVE CONTEXT

**Opening:**
"Great work checking the supply levels! Now we need to be even more precise. At the factory, some things must be EXACTLY right for the machines to work safely. In this module, we'll learn how to do exact checks to make sure everything is perfectly in place."

**Exercise Flow:**
1. Bag positioning — is it exactly under the chute?
2. Box numbers — does the number on the box match the station number?
3. Status lights — is the light the correct color for the setup phase?
4. Tool types — is it the right tool for the job?
5. Power panel — is the machine switched on and ready?

**Closing:**
"Excellent! You've mastered exact checks. You can now be sure things are either exactly right or exactly wrong. Next, we'll learn how to check for more than one condition at the same time!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "conditions"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET and PRINT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses `<code>` tags (not `<highlight>`)
- [ ] IDs follow pattern: conditions-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="conditions"
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

END OF MODULE 3 PART 2 SPECIFICATIONS