# module 2 - operators - exercise specifications
## Simple Spec List for AI Generation

**Created:** February 2026
**Purpose:** Generate complete exercises from minimal specs using NARRATIVE-FRAMEWORK.md + EXERCISE-TEMPLATE-MASTER.md

**SETTING:** Classroom (still in familiar environment before field trip)
**THEME:** Counting supplies and doing calculations with math operators

---

## HOW TO USE THIS WITH AI

**Give AI these three things:**
1. This spec list (below)
2. NARRATIVE-FRAMEWORK.md (for context/narrative)
3. EXERCISE-TEMPLATE-MASTER.md (for HTML structure)

**Instruction to AI:**
"Using the narrative framework and exercise template, generate the complete HTML for Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: COUNTING PENCILS ✏️

**SECTION NAME:** operators
**EXERCISE NUMBER:** 1
**EMOJI:** ✏️

**SCENARIO:** The teacher needs to know the total number of pencils by adding up different storage locations

**VARIABLES TO USE:**
- Part A: `shelf1Pencils`, `shelf2Pencils`, `totalPencils`
- Part B: `drawer1Pencils`, `drawer2Pencils`, `grandTotal`

**CONCEPT:** Using the addition operator (+) to calculate totals

**PART A FOCUS:** Add pencils from two shelves to get total
**PART A CONTEXT:** The art cupboard has pencils on different shelves. Let's count them all!

**PART B FOCUS:** Add pencils from two drawers and show grand total
**PART B CONTEXT:** Now let's check the drawers too and calculate the grand total of all pencils!

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using math operators to calculate totals"

**EXPECTED OUTPUT PART A:** "Shelf 1 has 15 pencils. Shelf 2 has 23 pencils. Total: 38 pencils."
**EXPECTED OUTPUT PART B:** "Drawer 1 has 12 pencils. Drawer 2 has 8 pencils. Grand total of all pencils: 58."

---

## EXERCISE 2: SUPPLIES USED VS. REMAINING 📝

**SECTION NAME:** operators
**EXERCISE NUMBER:** 2
**EMOJI:** 📝

**SCENARIO:** Calculate how many supplies remain after a day of classroom activities

**VARIABLES TO USE:**
- Part A: `notebooksStart`, `notebooksUsed`, `notebooksLeft`
- Part B: `erasersStart`, `erasersUsed`, `erasersRemaining`

**CONCEPT:** Using the subtraction operator (-) to calculate what's left

**PART A FOCUS:** Subtract notebooks used from starting amount
**PART A CONTEXT:** This morning we had plenty of notebooks. After today's lessons, how many are left?

**PART B FOCUS:** Subtract erasers used from starting amount
**PART B CONTEXT:** Let's do the same calculation for erasers!

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using subtraction to calculate remaining supplies"

**EXPECTED OUTPUT PART A:** "Started with 50 notebooks. Used 12 notebooks today. Remaining: 38 notebooks."
**EXPECTED OUTPUT PART B:** "Started with 30 erasers. Used 7 erasers today. Remaining: 23 erasers."

---

## EXERCISE 3: ORGANIZING INTO BOXES 📦

**SECTION NAME:** operators
**EXERCISE NUMBER:** 3
**EMOJI:** 📦

**SCENARIO:** Divide classroom supplies equally into storage boxes

**VARIABLES TO USE:**
- Part A: `totalMarkers`, `numberOfBoxes`, `markersPerBox`
- Part B: `totalCrayons`, `numberOfContainers`, `crayonsPerContainer`

**CONCEPT:** Using the division operator (/) to split items equally

**PART A FOCUS:** Divide markers equally among boxes
**PART A CONTEXT:** We need to organize our markers into storage boxes. How many markers go in each box?

**PART B FOCUS:** Divide crayons equally among containers
**PART B CONTEXT:** Now let's organize the crayons into containers the same way!

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using division to organize supplies equally"

**EXPECTED OUTPUT PART A:** "We have 48 markers to put into 4 boxes. Each box gets: 12 markers."
**EXPECTED OUTPUT PART B:** "We have 60 crayons to put into 5 containers. Each container gets: 12 crayons."

---

## EXERCISE 4: SUPPLIES FOR ALL STUDENTS 🎨

**SECTION NAME:** operators
**EXERCISE NUMBER:** 4
**EMOJI:** 🎨

**SCENARIO:** Calculate total supplies needed when each child needs multiple items

**VARIABLES TO USE:**
- Part A: `numberOfStudents`, `sheetsPerStudent`, `totalSheets`
- Part B: `numberOfGroups`, `gluePerGroup`, `totalGlueSticks`

**CONCEPT:** Using the multiplication operator (×) to calculate totals

**PART A FOCUS:** Multiply students by sheets needed per student
**PART A CONTEXT:** For today's drawing activity, each child needs 3 sheets of paper. How many sheets total?

**PART B FOCUS:** Multiply groups by glue sticks per group
**PART B CONTEXT:** We're working in groups today. Each group needs 2 glue sticks. How many total?

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using multiplication to calculate total supplies needed"

**EXPECTED OUTPUT PART A:** "We have 20 students. Each needs 3 sheets. Total sheets needed: 60."
**EXPECTED OUTPUT PART B:** "We have 5 groups. Each needs 2 glue sticks. Total glue sticks needed: 10."

---

## EXERCISE 5: COMPLETE CLASSROOM SUPPLY PLANNING 📊

**SECTION NAME:** operators
**EXERCISE NUMBER:** 5
**EMOJI:** 📊

**SCENARIO:** Use all four operations to plan and calculate classroom supplies

**VARIABLES TO USE:**
- Part A: `studentsPresent`, `studentsAbsent`, `totalStudents`, `pencilsPerStudent`, `pencilsNeeded`
- Part B: `papersAvailable`, `papersUsed`, `papersLeft`, `boxesToFill`, `papersPerBox`

**CONCEPT:** Combining all operators (+, -, ×, /) in realistic calculations

**PART A FOCUS:** Calculate total students (addition) then supplies needed (multiplication)
**PART A CONTEXT:** Let's plan for tomorrow! First, figure out total students, then calculate supplies needed.

**PART B FOCUS:** Calculate papers remaining (subtraction) then organize into boxes (division)
**PART B CONTEXT:** Now let's see what papers we have left and organize them into storage boxes!

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using all math operators together for planning"

**EXPECTED OUTPUT PART A:** "Present: 18 students. Absent: 2 students. Total students: 20. Each needs 2 pencils. Total pencils needed: 40."
**EXPECTED OUTPUT PART B:** "Started with 100 papers. Used 35 papers. Papers left: 65. We have 5 boxes. Papers per box: 13."

---

## NARRATIVE CONTEXT (From NARRATIVE-FRAMEWORK.md)

**Opening for Module 2:**
"Good morning! Yesterday we learned how to store and organize information using variables. Today we're going to use MATH to calculate things! Counting supplies, figuring out what's left, dividing things equally - math operators help us do all of this. Let's start calculating!"

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
- [ ] Section name is "operators"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables match the ones specified
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: operators-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="operators"
- [ ] Image filename and alt text match
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1: Part A AND Part B Step 4 show complete code
- [ ] Exercise 2+: Final step references Exercise 1 Step 4
- [ ] Part B has context paragraph after title
- [ ] Expected outputs are realistic and clear
- [ ] No overly fancy scenarios (keep it simple!)
- [ ] British English spelling where appropriate
- [ ] Avoid "student" - use "child" or "you" or just describe the action

---

## TEST RESULTS

**When you test this with AI, document here:**
- Which AI was used: ___________
- Exercise tested: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Time taken: ___________

---

END OF MODULE 2 SPECIFICATIONS
