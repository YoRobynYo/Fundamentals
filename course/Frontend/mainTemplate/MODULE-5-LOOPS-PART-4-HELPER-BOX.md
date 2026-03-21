# module 5 - loops - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 5 Loops Part 4 exercises

**SETTING:** The Popcorn Factory
**THEME:** Using accumulators to track running totals of production, supplies, and more.

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-5-LOOPS-PART-4-HELPER-BOX.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: TRACKING CORN DELIVERIES 🌽

**SECTION NAME:** loops
**EXERCISE NUMBER:** 1
**EMOJI:** 🌽

**SCENARIO:** The factory receives multiple deliveries of corn, and we need to track the total number of boxes received.

**VARIABLES TO USE:**
- Part A: `"total corn boxes"`, `"new boxes per delivery"`
- Part B: `"total corn boxes"`, `"new boxes per delivery"`

**CONCEPT:** Using an accumulator variable (a variable created outside a loop) to keep a running total.

**PART A FOCUS:** Create a running total of corn boxes over 4 deliveries, with 5 new boxes arriving in each delivery.
**PART B FOCUS:** Create a running total of corn boxes over 3 deliveries, with 10 new boxes arriving in each delivery.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using accumulators to track running totals"

**EXPECTED OUTPUT PART A:** "Delivery 1: Total now 5 boxes. Delivery 2: Total now 10 boxes. Delivery 3: Total now 15 boxes. Delivery 4: Total now 20 boxes."
**EXPECTED OUTPUT PART B:** "Delivery 1: Total now 10 boxes. Delivery 2: Total now 20 boxes. Delivery 3: Total now 30 boxes."

---

## EXERCISE 2: TOTAL POPCORN BATCHES 📦

**SECTION NAME:** loops
**EXERCISE NUMBER:** 2
**EMOJI:** 📦

**SCENARIO:** The factory produces a set number of popcorn batches each day. We need to track the total batches completed over several days.

**VARIABLES TO USE:**
- Part A: `"total batches"`, `"batches completed per day"`
- Part B: `"total batches"`, `"batches completed per day"`

**CONCEPT:** Applying the accumulator pattern to a different scenario (tracking daily production output).

**PART A FOCUS:** Track the total batches of popcorn completed over 5 days, with 7 batches being completed each day.
**PART B FOCUS:** Track the total batches of popcorn completed over 3 days, with 12 batches being completed each day.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Tracking daily production with accumulators"

**EXPECTED OUTPUT PART A:** "Day 1: Total batches: 7. Day 2: Total batches: 14. Day 3: Total batches: 21. Day 4: Total batches: 28. Day 5: Total batches: 35."
**EXPECTED OUTPUT PART B:** "Day 1: Total batches: 12. Day 2: Total batches: 24. Day 3: Total batches: 36."

---

## EXERCISE 3: USING UP SUPPLIES 📉

**SECTION NAME:** loops
**EXERCISE NUMBER:** 3
**EMOJI:** 📉

**SCENARIO:** We start with a full supply of an ingredient and use some of it up with each production run. We need to track how much is left.

**VARIABLES TO USE:**
- Part A: `"corn in silo"`, `"corn used per run"`
- Part B: `"oil in tank"`, `"oil used per run"`

**CONCEPT:** Using an accumulator pattern with subtraction to track a decreasing total over time.

**PART A FOCUS:** Track the remaining corn in a silo that starts with 100 units and uses 10 units per production run for 5 runs.
**PART B FOCUS:** Track the remaining oil in a tank that starts with 50 units and uses 5 units per production run for 4 runs.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Tracking remaining supplies with accumulators"

**EXPECTED OUTPUT PART A:** "Run 1: Corn remaining: 90. Run 2: Corn remaining: 80. Run 3: Corn remaining: 70. Run 4: Corn remaining: 60. Run 5: Corn remaining: 50."
**EXPECTED OUTPUT PART B:** "Run 1: Oil remaining: 45. Run 2: Oil remaining: 40. Run 3: Oil remaining: 35. Run 4: Oil remaining: 30."

---

## EXERCISE 4: QUALITY CONTROL CHECKS ✅

**SECTION NAME:** loops
**EXERCISE NUMBER:** 4
**EMOJI:** ✅

**SCENARIO:** A quality control inspector checks a certain number of boxes from each batch. We need to count the total number of boxes checked during a shift.

**VARIABLES TO USE:**
- Part A: `"total boxes checked"`, `"boxes checked per batch"`
- Part B: `"total defects found"`, `"defects found per hour"`

**CONCEPT:** Applying the accumulator pattern to a quality control scenario to count items or events.

**PART A FOCUS:** Count the total boxes checked if an inspector checks 3 boxes from each of 8 batches.
**PART B FOCUS:** Count the total defects found if an inspector finds 2 defects per hour over a 6-hour shift.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Counting totals in a quality control process"

**EXPECTED OUTPUT PART A:** "Batch 1: Total checked: 3. Batch 2: Total checked: 6. Batch 3: Total checked: 9. Batch 4: Total checked: 12. Batch 5: Total checked: 15. Batch 6: Total checked: 18. Batch 7: Total checked: 21. Batch 8: Total checked: 24."
**EXPECTED OUTPUT PART B:** "Hour 1: Total defects: 2. Hour 2: Total defects: 4. Hour 3: Total defects: 6. Hour 4: Total defects: 8. Hour 5: Total defects: 10. Hour 6: Total defects: 12."

---

## EXERCISE 5: FACTORY PAYROLL 💰

**SECTION NAME:** loops
**EXERCISE NUMBER:** 5
**EMOJI:** 💰

**SCENARIO:** At the end of the day, we need to calculate the total amount of wages to be paid to a team of workers.

**VARIABLES TO USE:**
- Part A: `"total wages"`, `"daily wage per worker"`
- Part B: `"total bonus paid"`, `"bonus per worker"`

**CONCEPT:** Using an accumulator to calculate a financial total by adding up payments for a group of people.

**PART A FOCUS:** Calculate the total daily payroll for a team of 5 workers who each earn 100 currency units per day.
**PART B FOCUS:** Calculate the total bonus paid to 3 high-performing workers who each get a 50 currency unit bonus.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Calculating financial totals with accumulators"

**EXPECTED OUTPUT PART A:** "Worker 1 paid. Total wages: 100. Worker 2 paid. Total wages: 200. Worker 3 paid. Total wages: 300. Worker 4 paid. Total wages: 400. Worker 5 paid. Total wages: 500."
**EXPECTED OUTPUT PART B:** "Worker 1 bonus paid. Total bonus: 50. Worker 2 bonus paid. Total bonus: 100. Worker 3 bonus paid. Total bonus: 150."

---

## NARRATIVE CONTEXT

**Opening for Module 5, Part 4:**
"You've learned how to make the factory machines repeat tasks with loops. Now, let's learn how to keep a running total of everything the factory produces! We'll use a special type of variable called an ACCUMULATOR. Think of it as a bucket outside the loop that collects and remembers the total from every run."

**Exercise Flow:**
1. Track total corn deliveries coming into the factory.
2. Track total batches of popcorn being produced.
3. Track supplies being used up (subtracting from a total).
4. Count the number of items checked during quality control.
5. Calculate the total wages for a team of workers.

**Closing:**
"Amazing work! You are now a master of accumulators. You can track totals that go up, totals that go down, and count anything in the factory. This is one of the most powerful skills in all of coding. You're ready for any challenge that comes your way!"

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

END OF MODULE 5 SPECIFICATIONS