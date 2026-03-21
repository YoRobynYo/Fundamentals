# module 2 - operators - exercise specifications
## Language-Agnostic Edition

**Created:** February 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 2 operators exercises

**SETTING:** Classroom (still in familiar environment before field trip)
**THEME:** Counting supplies and doing calculations with maths operators

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-2-OPERATORS-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: COUNTING PENCILS ✏️

**SECTION NAME:** operations
**EXERCISE NUMBER:** 1
**EMOJI:** ✏️

**SCENARIO:** The teacher needs to know the total number of pencils by adding up different storage locations

**VARIABLES TO USE:**
- Part A: "first shelf pencils", "second shelf pencils", "total pencils"
- Part B: "first drawer pencils", "second drawer pencils", "grand total"

**CONCEPT:** Using the addition operator (+) to calculate totals

**PART A FOCUS:** Add pencils from two shelves to get total
**PART B FOCUS:** Add pencils from two drawers and show grand total

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using maths operators to calculate totals"

**EXPECTED OUTPUT PART A:** "Shelf 1 has 15 pencils. Shelf 2 has 23 pencils. Total: 38 pencils."
**EXPECTED OUTPUT PART B:** "Drawer 1 has 12 pencils. Drawer 2 has 8 pencils. Grand total of all pencils: 58."

---

## EXERCISE 2: SUPPLIES USED VS. REMAINING 📝

**SECTION NAME:** operations
**EXERCISE NUMBER:** 2
**EMOJI:** 📝

**SCENARIO:** Calculate how many supplies remain after a day of classroom activities

**VARIABLES TO USE:**
- Part A: "notebooks at start", "notebooks used", "notebooks left"
- Part B: "erasers at start", "erasers used", "erasers remaining"

**CONCEPT:** Using the subtraction operator (-) to calculate what's left

**PART A FOCUS:** Subtract notebooks used from starting amount
**PART B FOCUS:** Subtract erasers used from starting amount

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using subtraction to calculate remaining supplies"

**EXPECTED OUTPUT PART A:** "Started with 50 notebooks. Used 12 notebooks today. Remaining: 38 notebooks."
**EXPECTED OUTPUT PART B:** "Started with 30 erasers. Used 7 erasers today. Remaining: 23 erasers."

---

## EXERCISE 3: ORGANIZING INTO BOXES 📦

**SECTION NAME:** operations
**EXERCISE NUMBER:** 3
**EMOJI:** 📦

**SCENARIO:** Divide classroom supplies equally into storage boxes

**VARIABLES TO USE:**
- Part A: "total markers", "number of boxes", "markers per box"
- Part B: "total crayons", "number of containers", "crayons per container"

**CONCEPT:** Using the division operator (/) to split items equally

**PART A FOCUS:** Divide markers equally among boxes
**PART B FOCUS:** Divide crayons equally among containers

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using division to organise supplies equally"

**EXPECTED OUTPUT PART A:** "We have 48 markers to put into 4 boxes. Each box gets: 12 markers."
**EXPECTED OUTPUT PART B:** "We have 60 crayons to put into 5 containers. Each container gets: 12 crayons."

---

## EXERCISE 4: SUPPLIES FOR ALL CHILDREN 🎨

**SECTION NAME:** operations
**EXERCISE NUMBER:** 4
**EMOJI:** 🎨

**SCENARIO:** Calculate total supplies needed when each child needs multiple items

**VARIABLES TO USE:**
- Part A: "number of children", "sheets per child", "total sheets"
- Part B: "number of groups", "glue per group", "total glue sticks"

**CONCEPT:** Using the multiplication operator (×) to calculate totals

**PART A FOCUS:** Multiply children by sheets needed per child
**PART B FOCUS:** Multiply groups by glue sticks per group

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using multiplication to calculate total supplies needed"

**EXPECTED OUTPUT PART A:** "We have 20 children. Each needs 3 sheets. Total sheets needed: 60."
**EXPECTED OUTPUT PART B:** "We have 5 groups. Each needs 2 glue sticks. Total glue sticks needed: 10."

---

## EXERCISE 5: COMPLETE CLASSROOM SUPPLY PLANNING 📊

**SECTION NAME:** operations
**EXERCISE NUMBER:** 5
**EMOJI:** 📊

**SCENARIO:** Use all four operations to plan and calculate classroom supplies

**VARIABLES TO USE:**
- Part A: "children present", "children absent", "total children", "pencils per child", "pencils needed"
- Part B: "papers available", "papers used", "papers left", "boxes to fill", "papers per box"

**CONCEPT:** Combining all operators (+, -, ×, /) in realistic calculations

**PART A FOCUS:** Calculate total children (addition) then supplies needed (multiplication)
**PART B FOCUS:** Calculate papers remaining (subtraction) then organise into boxes (division)

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using all maths operators together for planning"

**EXPECTED OUTPUT PART A:** "Present: 18 children. Absent: 2 children. Total children: 20. Each needs 2 pencils. Total pencils needed: 40."
**EXPECTED OUTPUT PART B:** "Started with 100 papers. Used 35 papers. Papers left: 65. We have 5 boxes. Papers per box: 13."

---

## NARRATIVE CONTEXT (From MODULE-2-OPERATORS-HELPER-BOXES.md)

**Opening for Module 2:**
"Welcome back! Yesterday we learned how to store and organise information using variables. Today we're going to use MATHSS to calculate things! Counting supplies, figuring out what's left, dividing things equally — maths operators help us do all of this. Let's start calculating!"

**Exercise Flow:**
1. Addition (+): Counting totals
2. Subtraction (-): Finding what remains
3. Division (/): Splitting equally
4. Multiplication (×): Calculating needs
5. All together: Real planning

**Closing:**
"Excellent work! You can now count, subtract, divide, and multiply using operators. Tomorrow is special - we're going on a field trip to the Popcorn Factory! You'll use everything you've learned to help with real production tasks! 🍿"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name matches exactly
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET and PRINT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: [section]-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="operations"
- [ ] Image filename and alt text match spec
- [ ] Empty hint/output/answer containers present
- [ ] Part A Step 4 shows complete pseudocode answer
- [ ] Part B Step 4 references the specific task — no pseudocode shown
- [ ] Expected outputs match the spec
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6 — confer with user)

---

## GENERATION RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________

---

END OF MODULE 2 SPECIFICATIONS