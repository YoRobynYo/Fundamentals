# module 5 - loops part 4 - accumulators - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 5 Loops Part 4 exercises

**SETTING:** The Popcorn Factory
**THEME:** Using variables outside loops to track running totals (accumulators)

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

## EXERCISE 1: Tracking Total Corn Boxes 📊

**SECTION NAME:** loops
**EXERCISE NUMBER:** 1
**EMOJI:** 📊

**SCENARIO:** Track the running total of corn boxes as they are counted from shelves in the supply room.

**VARIABLES TO USE:**
- Part A: "total corn boxes", "number of shelves", "boxes per shelf"
- Part B: "total oil containers", "number of deliveries", "containers per delivery"

**CONCEPT:** Using a variable outside a loop (an accumulator) to keep a running total of items.

**PART A FOCUS:** Start a total at zero and add to it inside a loop that counts 4 shelves, with 5 boxes per shelf.
**PART B FOCUS:** Apply the same accumulator pattern to track a running total of oil containers over 5 deliveries, with 6 containers per delivery.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Tracking a running total using a loop."

**EXPECTED OUTPUT PART A:**
```
Added 5 boxes from shelf 1. Total now: 5 boxes
Added 5 boxes from shelf 2. Total now: 10 boxes
Added 5 boxes from shelf 3. Total now: 15 boxes
Added 5 boxes from shelf 4. Total now: 20 boxes
```
**EXPECTED OUTPUT PART B:**
```
Delivery 1: Received 6 containers. Total: 6 containers
Delivery 2: Received 6 containers. Total: 12 containers
Delivery 3: Received 6 containers. Total: 18 containers
Delivery 4: Received 6 containers. Total: 24 containers
Delivery 5: Received 6 containers. Total: 30 containers
```

---

## EXERCISE 2: Tracking Salt Usage Over Time 🧂

**SECTION NAME:** loops
**EXERCISE NUMBER:** 2
**EMOJI:** 🧂

**SCENARIO:** Track the total number of salt and flavour packets used over several days or weeks of production.

**VARIABLES TO USE:**
- Part A: "total salt used", "number of days", "packets used per day"
- Part B: "total flavour used", "number of weeks", "packets used per week"

**CONCEPT:** Using an accumulator to track the consumption or usage of items over time.

**PART A FOCUS:** Track the total salt packets used over 5 days, with 3 packets used per day.
**PART B FOCUS:** Track the total flavour packets used over 4 weeks, with 8 packets used per week.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Tracking consumption with an accumulator."

**EXPECTED OUTPUT PART A:**
```
Day 1: Used 3 packets. Total used: 3 packets
Day 2: Used 3 packets. Total used: 6 packets
Day 3: Used 3 packets. Total used: 9 packets
Day 4: Used 3 packets. Total used: 12 packets
Day 5: Used 3 packets. Total used: 15 packets
```
**EXPECTED OUTPUT PART B:**
```
Week 1: Used 8 packets. Total used: 8 packets
Week 2: Used 8 packets. Total used: 16 packets
Week 3: Used 8 packets. Total used: 24 packets
Week 4: Used 8 packets. Total used: 32 packets
```

---

## EXERCISE 3: Tracking Production Batches 📦

**SECTION NAME:** loops
**EXERCISE NUMBER:** 3
**EMOJI:** 📦

**SCENARIO:** Track the total number of batches produced or bags packaged over multiple days or shifts.

**VARIABLES TO USE:**
- Part A: "total batches completed", "number of days", "batches per day"
- Part B: "total bags packaged", "number of shifts", "bags per shift"

**CONCEPT:** Using an accumulator to track total production output.

**PART A FOCUS:** Track the total number of popcorn batches completed over 6 days, with 7 batches completed per day.
**PART B FOCUS:** Track the total number of bags packaged over 8 shifts, with 10 bags packaged per shift.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Tracking production output with an accumulator."

**EXPECTED OUTPUT PART A:**
```
Day 1: Completed 7 batches. Total production: 7 batches
Day 2: Completed 7 batches. Total production: 14 batches
Day 3: Completed 7 batches. Total production: 21 batches
Day 4: Completed 7 batches. Total production: 28 batches
Day 5: Completed 7 batches. Total production: 35 batches
Day 6: Completed 7 batches. Total production: 42 batches
```
**EXPECTED OUTPUT PART B:**
```
Shift 1: Packaged 10 bags. Total: 10 bags
Shift 2: Packaged 10 bags. Total: 20 bags
Shift 3: Packaged 10 bags. Total: 30 bags
Shift 4: Packaged 10 bags. Total: 40 bags
Shift 5: Packaged 10 bags. Total: 50 bags
Shift 6: Packaged 10 bags. Total: 60 bags
Shift 7: Packaged 10 bags. Total: 70 bags
Shift 8: Packaged 10 bags. Total: 80 bags
```

---

## EXERCISE 4: Quality Control Checks ✅

**SECTION NAME:** loops
**EXERCISE NUMBER:** 4
**EMOJI:** ✅

**SCENARIO:** A quality control inspector checks a number of boxes from each batch and counts defects found during a shift.

**VARIABLES TO USE:**
- Part A: "total boxes checked", "boxes checked per batch"
- Part B: "total defects found", "defects found per hour"

**CONCEPT:** Applying the accumulator pattern to a quality control scenario to count items or events.

**PART A FOCUS:** Count the total boxes checked if an inspector checks 3 boxes from each of 8 batches.
**PART B FOCUS:** Count the total defects found if an inspector finds 2 defects per hour over a 6-hour shift.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Counting totals in a quality control process."

**EXPECTED OUTPUT PART A:**
```
Batch 1: Total checked: 3
Batch 2: Total checked: 6
Batch 3: Total checked: 9
Batch 4: Total checked: 12
Batch 5: Total checked: 15
Batch 6: Total checked: 18
Batch 7: Total checked: 21
Batch 8: Total checked: 24
```
**EXPECTED OUTPUT PART B:**
```
Hour 1: Total defects: 2
Hour 2: Total defects: 4
Hour 3: Total defects: 6
Hour 4: Total defects: 8
Hour 5: Total defects: 10
Hour 6: Total defects: 12
```

---

## EXERCISE 5: Factory Payroll 💰

**SECTION NAME:** loops
**EXERCISE NUMBER:** 5
**EMOJI:** 💰

**SCENARIO:** At the end of the day, calculate the total wages to be paid to a team of workers and the total bonus paid to high performers.

**VARIABLES TO USE:**
- Part A: "total wages", "daily wage per worker"
- Part B: "total bonus paid", "bonus per worker"

**CONCEPT:** Using an accumulator to calculate a financial total by adding up payments for a group of people.

**PART A FOCUS:** Calculate the total daily payroll for a team of 5 workers who each earn 100 currency units per day.
**PART B FOCUS:** Calculate the total bonus paid to 3 high-performing workers who each receive a 50 currency unit bonus.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Calculating financial totals with accumulators."

**EXPECTED OUTPUT PART A:**
```
Worker 1 paid. Total wages: 100
Worker 2 paid. Total wages: 200
Worker 3 paid. Total wages: 300
Worker 4 paid. Total wages: 400
Worker 5 paid. Total wages: 500
```
**EXPECTED OUTPUT PART B:**
```
Worker 1 bonus paid. Total bonus: 50
Worker 2 bonus paid. Total bonus: 100
Worker 3 bonus paid. Total bonus: 150
```

---

## NARRATIVE CONTEXT

**Opening for Module 5 Part 4:**
"Welcome back to the factory! So far, we've used loops to count things and do calculations inside the loop. Now, we're going to learn a powerful new pattern: using a variable OUTSIDE the loop to keep a running total. This is called an accumulator, and it's how we track totals over time!"

**Exercise Flow:**
1. Introduce the accumulator pattern by tracking the total corn and oil supplies.
2. Use accumulators to track consumption of items like salt and flavour packets.
3. Use accumulators to track production output, like total batches and bags completed.
4. Apply accumulators to quality control — counting boxes checked and defects found.
5. Use accumulators to calculate financial totals — wages and bonuses for the team.

**Closing:**
"Amazing work! You have now mastered the accumulator pattern, one of the most useful tools in coding for tracking totals. You've completed the Loops module and are ready for the next big challenge. Well done!"

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

END OF MODULE 5 PART 4 SPECIFICATIONS
