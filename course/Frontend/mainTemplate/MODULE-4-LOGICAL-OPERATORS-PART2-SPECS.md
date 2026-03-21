# module 4 - logical operators part 2 - exercise specifications
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Spec file for AI to generate all Module 4 Logical Operators Part 2 exercises

**SETTING:** Popcorn Factory
**THEME:** Checking for alternative ingredients or conditions using OR logic

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-4-LOGICAL-OPERATORS-PART2-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: BUTTER OR OIL 🧈

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 1
**EMOJI:** 🧈

**SCENARIO:** The popcorn machine can use either butter OR oil, so we need to check if at least one is available.

**VARIABLES TO USE:**
- Part A: "butter available", "oil available"
- Part B: "butter available", "oil available"

**CONCEPT:** Using the OR logical operator to check if at least one of two conditions is true.

**PART A FOCUS:** Check if the machine can run when butter is available but oil is not.
**PART B FOCUS:** Check if the machine can run when oil is available but butter is not.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using the OR operator to check for alternative options"

**EXPECTED OUTPUT PART A:** "Butter: true, Oil: false. Machine can run: true"
**EXPECTED OUTPUT PART B:** "Butter: false, Oil: true. Machine can run: true"

---

## EXERCISE 2: SUGAR OR HONEY 🍯

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 2
**EMOJI:** 🍯

**SCENARIO:** Sweet popcorn can be made with sugar OR honey, so we need to check if we have either one.

**VARIABLES TO USE:**
- Part A: "sugar available", "honey available"
- Part B: "sugar available", "honey available"

**CONCEPT:** Using the OR logical operator to check if at least one of two ingredients is available.

**PART A FOCUS:** Check if we can make sweet popcorn when sugar is available but honey is not.
**PART B FOCUS:** Check if we can make sweet popcorn when honey is available but sugar is not.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using the OR operator to check for alternative options"

**EXPECTED OUTPUT PART A:** "Sugar: true, Honey: false. Can make sweet popcorn: true"
**EXPECTED OUTPUT PART B:** "Sugar: false, Honey: true. Can make sweet popcorn: true"

---

## EXERCISE 3: CHEDDAR OR PARMESAN 🧀

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 3
**EMOJI:** 🧀

**SCENARIO:** Cheese popcorn can be made with cheddar OR parmesan, so we need to check which one is in stock.

**VARIABLES TO USE:**
- Part A: "cheddar available", "parmesan available"
- Part B: "cheddar available", "parmesan available"

**CONCEPT:** Using the OR logical operator to check if at least one of two ingredients is available.

**PART A FOCUS:** Check if we can make cheese popcorn when cheddar is available but parmesan is not.
**PART B FOCUS:** Check if we can make cheese popcorn when parmesan is available but cheddar is not.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using the OR operator to check for alternative options"

**EXPECTED OUTPUT PART A:** "Cheddar: true, Parmesan: false. Can make cheese popcorn: true"
**EXPECTED OUTPUT PART B:** "Cheddar: false, Parmesan: true. Can make cheese popcorn: true"

---

## EXERCISE 4: PEANUTS OR ALMONDS 🥜

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 4
**EMOJI:** 🥜

**SCENARIO:** Nutty popcorn can be made with peanuts OR almonds, so we need to check if we have either.

**VARIABLES TO USE:**
- Part A: "peanuts available", "almonds available"
- Part B: "peanuts available", "almonds available"

**CONCEPT:** Using the OR logical operator to check if at least one of two ingredients is available.

**PART A FOCUS:** Check if we can make nutty popcorn when peanuts are available but almonds are not.
**PART B FOCUS:** Check if we can make nutty popcorn when almonds are available but peanuts are not.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using the OR operator to check for alternative options"

**EXPECTED OUTPUT PART A:** "Peanuts: true, Almonds: false. Can make nutty popcorn: true"
**EXPECTED OUTPUT PART B:** "Peanuts: false, Almonds: true. Can make nutty popcorn: true"

---

## EXERCISE 5: SALT OR SEA SALT 🧂

**SECTION NAME:** logicalOperators
**EXERCISE NUMBER:** 5
**EMOJI:** 🧂

**SCENARIO:** Savory popcorn can be made with regular salt OR sea salt, so we need to check which is ready.

**VARIABLES TO USE:**
- Part A: "salt available", "sea salt available"
- Part B: "salt available", "sea salt available"

**CONCEPT:** Using the OR logical operator to check if at least one of two ingredients is available.

**PART A FOCUS:** Check if we can make savory popcorn when regular salt is available but sea salt is not.
**PART B FOCUS:** Check if we can make savory popcorn when sea salt is available but regular salt is not.

**IMAGE:** first-steps-console.jpg
**ALT TEXT:** "Using the OR operator to check for alternative options"

**EXPECTED OUTPUT PART A:** "Salt: true, Sea Salt: false. Can make savory popcorn: true"
**EXPECTED OUTPUT PART B:** "Salt: false, Sea Salt: true. Can make savory popcorn: true"

---

## NARRATIVE CONTEXT

**Opening for Module 4 Part 2:**
"Welcome back to the Popcorn Factory! In our last module, we learned how to check if two things were true at the same time using AND. But what if we have options? Sometimes, we only need ONE of two things to be true. That's where the OR operator comes in. Let's see how it works!"

**Exercise Flow:**
1. Butter OR oil for the machine.
2. Sugar OR honey for sweet popcorn.
3. Cheddar OR parmesan for cheese popcorn.
4. Peanuts OR almonds for nutty popcorn.
5. Salt OR sea salt for savory popcorn.

**Closing:**
"Fantastic! You've mastered the OR operator and can now handle situations with multiple options. You've learned how to check for one thing AND another, and one thing OR another. Next, we'll start learning how to make our code repeat itself with loops!"

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

END OF MODULE 4 PART 2 SPECIFICATIONS