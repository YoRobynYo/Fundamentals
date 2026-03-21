# module 4 - logical operators part 1 - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 4 Logical Operators Part 1 exercises

**SETTING:** Popcorn Factory
**THEME:** Checking multiple conditions at once to ensure quality and accuracy

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-4-LOGICAL-OPERATORS-PART1-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: PLAIN POPCORN - FLAVOR AND QUANTITY 🌽

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 1
**EMOJI:** 🌽

**SCENARIO:** The Plain Popcorn station needs both the right flavor AND enough quantity to fill an order.

**VARIABLES TO USE:**
- Part A: "current flavor", "required flavor", "bags ready", "bags needed"
- Part B: "current flavor", "required flavor", "bags ready", "bags needed"

**CONCEPT:** Using the AND operator to check if two conditions are true at the same time.

**PART A FOCUS:** Check if the flavor is correct AND the quantity is enough.
**PART B FOCUS:** Check what happens when the flavor is correct BUT the quantity is not enough.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using the AND operator to check multiple conditions"

**EXPECTED OUTPUT PART A:** "The flavor is correct and the quantity is enough: true"
**EXPECTED OUTPUT PART B:** "The flavor is correct and the quantity is enough: false"

---

## EXERCISE 2: BUTTERY POPCORN - FLAVOR AND FRESHNESS 🧈

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 2
**EMOJI:** 🧈

**SCENARIO:** The Buttery Popcorn station must have the correct flavor AND the popcorn must be fresh.

**VARIABLES TO USE:**
- Part A: "current flavor", "required flavor", "hours since made", "freshness limit in hours"
- Part B: "current flavor", "required flavor", "hours since made", "freshness limit in hours"

**CONCEPT:** Checking two different types of conditions (text and numbers) together with AND.

**PART A FOCUS:** Check if the flavor is correct AND the popcorn is fresh.
**PART B FOCUS:** Check what happens when the flavor is correct BUT the popcorn is not fresh.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Checking text and number conditions together"

**EXPECTED OUTPUT PART A:** "The flavor is correct and the popcorn is fresh: true"
**EXPECTED OUTPUT PART B:** "The flavor is correct and the popcorn is fresh: false"

---

## EXERCISE 3: CHEESE POPCORN - INGREDIENT AND CONTAINER 🧀

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 3
**EMOJI:** 🧀

**SCENARIO:** The Cheese Popcorn station needs the right cheese ingredient AND the correct container size.

**VARIABLES TO USE:**
- Part A: "current ingredient", "required ingredient", "container size in grams", "minimum size in grams"
- Part B: "current ingredient", "required ingredient", "container size in grams", "minimum size in grams"

**CONCEPT:** Using AND with 'greater than or equal to' comparisons.

**PART A FOCUS:** Check if the ingredient is correct AND the container is large enough.
**PART B FOCUS:** Check what happens when the ingredient is correct BUT the container is too small.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using AND with size comparisons"

**EXPECTED OUTPUT PART A:** "The ingredient is correct and the container is large enough: true"
**EXPECTED OUTPUT PART B:** "The ingredient is correct and the container is large enough: false"

---

## EXERCISE 4: SWEET POPCORN - SUGAR AND LABEL 🍬

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 4
**EMOJI:** 🍬

**SCENARIO:** The Sweet Popcorn station needs enough sugar AND the correct label on the bag.

**VARIABLES TO USE:**
- Part A: "sugar amount in grams", "sugar needed in grams", "current label text", "required label text"
- Part B: "sugar amount in grams", "sugar needed in grams", "current label text", "required label text"

**CONCEPT:** Combining a numerical comparison and a text comparison with AND.

**PART A FOCUS:** Check if there is enough sugar AND the bag label is correct.
**PART B FOCUS:** Check what happens when there is enough sugar BUT the label is wrong.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Checking quantity and labels with AND"

**EXPECTED OUTPUT PART A:** "There is enough sugar and the label is correct: true"
**EXPECTED OUTPUT PART B:** "There is enough sugar and the label is correct: false"

---

## EXERCISE 5: COMPLETE ORDER CHECK ✅

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 5
**EMOJI:** ✅

**SCENARIO:** Before shipping an order, we must verify that BOTH the flavor is correct AND the weight meets requirements.

**VARIABLES TO USE:**
- Part A: "ordered flavor", "current flavor", "current weight in grams", "required weight in grams"
- Part B: "ordered flavor", "current flavor", "current weight in grams", "required weight in grams"

**CONCEPT:** Performing a final quality check using the AND operator.

**PART A FOCUS:** Check if the flavor is correct AND the weight is sufficient for shipping.
**PART B FOCUS:** Check what happens when the flavor is correct BUT the weight is insufficient.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Performing a final check with the AND operator"

**EXPECTED OUTPUT PART A:** "The order is correct and ready to ship: true"
**EXPECTED OUTPUT PART B:** "The order is correct and ready to ship: false"

---

## NARRATIVE CONTEXT

**Opening:**
"Welcome back to the Popcorn Factory! You've learned to check one condition at a time, but what if you need to check two things at once? In this module, you'll learn to use the AND operator to make sure multiple conditions are true before the factory can proceed."

**Exercise Flow:**
1. Check popcorn flavor AND quantity.
2. Check popcorn flavor AND freshness.
3. Check cheese ingredient AND container size.
4. Check sugar amount AND bag label.
5. Perform a final check on a complete order's flavor AND weight.

**Closing:**
"Amazing work! You can now perform double-checks to make sure everything is perfect. Next, you'll learn about the OR operator, which lets you check if at least one of two conditions is true. Let's keep the production line moving!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "logicalOperators"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET and PRINT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses `<code>` tags (not `<highlight>`)
- [ ] IDs follow pattern: logicalOperators-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="logicalOperators"
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

END OF MODULE 4 PART 1 SPECIFICATIONS