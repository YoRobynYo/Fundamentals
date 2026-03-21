# module 3 - conditions part 3 - exercise specifications
## Language-Agnostic Edition

**Created:** February 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 3 Conditions Part 3 exercises

**SETTING:** The Popcorn Factory
**THEME:** Final safety checks using "at least" (>=) and "at most" (<=)

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-3-CONDITIONS-PART3-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: SAFETY GUARD VERIFICATION 🛡️

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 1
**EMOJI:** 🛡️

**SCENARIO:** Before a machine starts, the safety guard must be in a safe position.

**VARIABLES TO USE:**
- Part A: "guard position", "minimum safe position"
- Part B: "guard position", "minimum safe position"

**CONCEPT:** Using the 'greater than or equal to' operator (>=) to check if a value meets a minimum requirement.

**PART A FOCUS:** Check if the guard's position is at least the minimum required for safety.
**PART B FOCUS:** Check a different guard that is not in a safe position.

**IMAGE:** if-statement-greater-than-or-equal-to.jpg
**ALT TEXT:** "Checking if a value is at least the minimum required"

**EXPECTED OUTPUT PART A:** "Guard position is safe: true"
**EXPECTED OUTPUT PART B:** "Guard position is safe: false"

---

## EXERCISE 2: SAFETY GOGGLES CHECK 🥽

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 2
**EMOJI:** 🥽

**SCENARIO:** Making sure there are enough safety goggles for every child at a machine station.

**VARIABLES TO USE:**
- Part A: "goggles available", "children at station"
- Part B: "goggles available", "children at station"

**CONCEPT:** Using the 'greater than or equal to' operator (>=) to check if there are enough items for a group.

**PART A FOCUS:** Check if the number of goggles is at least the number of children.
**PART B FOCUS:** Check a different station where there are not enough goggles.

**IMAGE:** if-statement-greater-than-or-equal-to.jpg
**ALT TEXT:** "Checking if there are enough items for everyone"

**EXPECTED OUTPUT PART A:** "There are enough goggles for everyone: true"
**EXPECTED OUTPUT PART B:** "There are enough goggles for everyone: false"

---

## EXERCISE 3: SAFETY GLOVES CHECK 🧤

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 3
**EMOJI:** 🧤

**SCENARIO:** Checking the supply of safety gloves to ensure there are enough, but not too many for the storage box.

**VARIABLES TO USE:**
- Part A: "gloves available", "minimum required"
- Part B: "gloves in box", "maximum capacity"

**CONCEPT:** Using 'greater than or equal to' (>=) for minimums and 'less than or equal to' (<=) for maximums.

**PART A FOCUS:** Check if there are at least the minimum number of gloves required.
**PART B FOCUS:** Check if the number of gloves in storage does not exceed the maximum capacity.

**IMAGE:** if-statement-less-than-or-equal-to.jpg
**ALT TEXT:** "Checking for minimums and maximums"

**EXPECTED OUTPUT PART A:** "Minimum gloves available: true"
**EXPECTED OUTPUT PART B:** "Storage limit not exceeded: true"

---

## EXERCISE 4: WEIGHING SCALE CHECK ⚖️

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 4
**EMOJI:** ⚖️

**SCENARIO:** Checking a weighing scale to make sure it is calibrated correctly and not overloaded.

**VARIABLES TO USE:**
- Part A: "scale reading", "minimum reading"
- Part B: "current weight", "maximum weight"

**CONCEPT:** Applying threshold checks (>=, <=) to a real-world device like a scale.

**PART A FOCUS:** Check if the empty scale's reading is at least zero (not a negative number).
**PART B FOCUS:** Check if the current weight on the scale is not over the maximum weight limit.

**IMAGE:** if-statement-less-than-or-equal-to.jpg
**ALT TEXT:** "Checking if a scale is calibrated and not overloaded"

**EXPECTED OUTPUT PART A:** "Scale is calibrated correctly: true"
**EXPECTED OUTPUT PART B:** "Scale is not overloaded: true"

---

## EXERCISE 5: FINAL READINESS VERIFICATION ✅

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 5
**EMOJI:** ✅

**SCENARIO:** Performing a final headcount to ensure there are enough helpers, but not too many people crowded around a machine.

**VARIABLES TO USE:**
- Part A: "helpers at station", "minimum helpers"
- Part B: "people at station", "maximum allowed"

**CONCEPT:** Performing final readiness checks by verifying minimum and maximum numbers of people.

**PART A FOCUS:** Check if there are at least the minimum number of helpers needed at the station.
**PART B FOCUS:** Check if the total number of people does not exceed the maximum allowed for safety.

**IMAGE:** if-statement-greater-than-or-equal-to.jpg
**ALT TEXT:** "Verifying final minimum and maximum numbers"

**EXPECTED OUTPUT PART A:** "There are enough helpers at the station: true"
**EXPECTED OUTPUT PART B:** "The station is not too crowded: true"

---

## NARRATIVE CONTEXT

**Opening for Module 3, Part 3:**
"Welcome back to the Popcorn Factory! Before we can start Machine 1, we have to do some final safety checks. We need to make sure we have AT LEAST the minimum safety equipment and that we are AT OR UNDER the maximum capacity limits. Let's use our new coding skills to verify everything is safe!"

**Exercise Flow:**
1. Check the machine's safety guard is in position.
2. Count the safety goggles to make sure there are enough.
3. Verify we have enough safety gloves, but not too many for the storage box.
4. Check the weighing scale is calibrated and not overloaded.
5. Do a final headcount to ensure we have enough helpers, but not too many people at the station.

**Closing:**
"Amazing work! All safety checks have passed, and Machine 1 is ready to go. You've mastered how to check for 'at least' and 'at most' conditions. Next, we'll learn how to check multiple conditions at the same time using logical operators!"

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

END OF MODULE 3 PART 3 SPECIFICATIONS