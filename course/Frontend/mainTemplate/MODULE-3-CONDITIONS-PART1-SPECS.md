# module 3 - conditions part 1 - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 3 Conditions Part 1 exercises

**SETTING:** The Popcorn Factory
**THEME:** Checking safety and inventory levels before production begins

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-3-CONDITIONS-PART1-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: GREAT HALL HEADCOUNT 👥

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 1
**EMOJI:** 👥

**SCENARIO:** A production manager checks if there are enough children to run the line, but not too many to exceed capacity.

**VARIABLES TO USE:**
- Part A: "children present", "minimum required"
- Part B: "children present", "maximum capacity"

**CONCEPT:** Using comparison operators (greater than, less than) to check if a number meets a requirement.

**PART A FOCUS:** Check if the number of children present is greater than the minimum required.
**PART B FOCUS:** Check if the number of children present is less than the maximum capacity.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using comparison operators to check if a value is greater than another."

**EXPECTED OUTPUT PART A:** "We have 18 children. Minimum required is 15. Check passes: true"
**EXPECTED OUTPUT PART B:** "We have 18 children. Maximum capacity is 30. Check passes: true"

---

## EXERCISE 2: SAFETY GEAR DISTRIBUTION 🦺

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 2
**EMOJI:** 🦺

**SCENARIO:** Checking if there is enough safety equipment (vests, hair nets) for all the children present.

**VARIABLES TO USE:**
- Part A: "vests available", "children present"
- Part B: "hair nets", "children with long hair"

**CONCEPT:** Using comparison operators to manage inventory and safety requirements.

**PART A FOCUS:** Check if there are more safety vests available than children present.
**PART B FOCUS:** Check if there are more hair nets available than children who need them.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using comparison operators to check inventory levels."

**EXPECTED OUTPUT PART A:** "Vests available: 25. Children present: 18. Check passes: true"
**EXPECTED OUTPUT PART B:** "Hair nets: 12. Children needing nets: 8. Check passes: true"

---

## EXERCISE 3: WORK STATION SETUP 🛠️

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 3
**EMOJI:** 🛠️

**SCENARIO:** Checking if enough work stations are ready and if there are enough clipboards for the tasks.

**VARIABLES TO USE:**
- Part A: "stations ready", "stations needed"
- Part B: "clipboards", "stations needed"

**CONCEPT:** Using greater than and less than operators to compare resource availability against needs.

**PART A FOCUS:** Check if the number of ready stations is greater than the number of stations needed.
**PART B FOCUS:** Check if the number of clipboards is less than the number of stations needed, indicating a shortage.

**IMAGE:** if-statement-less-than.jpg
**ALT TEXT:** "Using comparison operators to check for resource shortages."

**EXPECTED OUTPUT PART A:** "Stations ready: 10. Stations needed: 8. Check passes: true"
**EXPECTED OUTPUT PART B:** "Clipboards available: 6. Stations needing them: 8. Shortage check: true"

---

## EXERCISE 4: CHECKING BAGS AT STATION 1 👜

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 4
**EMOJI:** 👜

**SCENARIO:** At Machine 1, checking if bags have arrived and if there are enough for today's production run.

**VARIABLES TO USE:**
- Part A: "bags at station", "minimum needed"
- Part B: "bags at station", "bags needed today"

**CONCEPT:** Using the greater than operator to check for presence (greater than zero) and sufficiency (greater than needed amount).

**PART A FOCUS:** Check if any bags are present at the station by seeing if the count is greater than zero.
**PART B FOCUS:** Check if the number of bags at the station is greater than the number of bags needed for today.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using the greater than operator to check for presence and sufficiency."

**EXPECTED OUTPUT PART A:** "Bags at station: 25. Check for presence (>0): true"
**EXPECTED OUTPUT PART B:** "Bags at station: 25. Bags needed today: 20. Check for sufficiency: true"

---

## EXERCISE 5: CHECKING BOXES AT STATION 1 📦

**SECTION NAME:** conditions
**EXERCISE NUMBER:** 5
**EMOJI:** 📦

**SCENARIO:** Checking for boxes at Machine 1, discovering there are none, and then checking if the newly arrived boxes are labeled.

**VARIABLES TO USE:**
- Part A: "boxes at station", "minimum needed"
- Part B: "box number", "no label"

**CONCEPT:** Using the greater than operator to identify a missing item (returns false) and to verify an item has a valid property (is labeled).

**PART A FOCUS:** Check if any boxes are present at the station, expecting the check to fail (return false).
**PART B FOCUS:** After boxes arrive, check if a box is labeled by seeing if its number is greater than zero.

**IMAGE:** if-statement-greater-than.jpg
**ALT TEXT:** "Using the greater than operator to identify missing items."

**EXPECTED OUTPUT PART A:** "Boxes at station: 0. Check for presence (>0): false"
**EXPECTED OUTPUT PART B:** "Box number: 1. Check if labeled (>0): true"

---

## NARRATIVE CONTEXT

**Opening:**
"Great work organising the classroom! Now that we're at the Popcorn Factory, we need to learn how to make decisions. In coding, we use CONDITIONS to check if something is true or false. This helps us make sure everything is safe and ready for production. Let's start by checking if we have enough helpers!"

**Exercise Flow:**
1. Headcount check: Are there enough children, but not too many?
2. Safety gear: Do we have enough vests and hair nets?
3. Work stations: Are enough stations ready and do we have enough clipboards?
4. Bags check: Are bags at the station and are there enough?
5. Boxes check: Are boxes at the station, and are they labeled correctly?

**Closing:**
"Excellent! You've learned how to use > (greater than) and < (less than) to compare numbers. This is a fundamental skill for checking inventory, safety, and rules. Next, we'll learn how to check if things are exactly the same or different."

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

END OF MODULE 3 PART 1 SPECIFICATIONS