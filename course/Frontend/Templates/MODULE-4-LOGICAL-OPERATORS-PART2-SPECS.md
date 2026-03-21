# MODULE 4: LOGICAL OPERATORS PART 2 - EXERCISE SPECIFICATIONS

## Overview
This module introduces the OR (||) logical operator, teaching children how to check if AT LEAST ONE condition is true. Building on their knowledge of AND (&&) from Part 1.

**Concepts taught:**
- Using || (OR) operator
- Checking if either condition is true
- Only ONE condition needs to be true
- Real-world scenarios with alternatives/options

**No arrays, building on Part 1 AND operator knowledge**

---

## EXERCISE 1: BUTTER OR OIL 🧈

**SECTION NAME:** logicalOperatorsPart2
**EXERCISE NUMBER:** 1
**EMOJI:** 🧈

**EXERCISE INTRODUCTION:**
"The popcorn machine can use either butter OR oil to make popcorn! We just need ONE of them available. Let's check!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using || operator to check alternative conditions"

---

**PART A: Have butter available**

**PART A TITLE:** Have butter available

**PART A PARAGRAPH:**
"The machine needs either butter or oil to operate. We have butter available (true). We don't have oil available (false). Let's check if we have butter OR oil - we only need ONE of them!"

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `butterAvailable` and set it to `true`.
- Step 2: Create a variable named `oilAvailable` and set it to `false`.
- Step 3: Use `console.log()` to check if `butterAvailable` OR `oilAvailable` is true.

**STEP 3 COMPLETE CODE:**
```javascript
console.log(`Butter available: ${butterAvailable}. Oil available: ${oilAvailable}.`);
console.log(butterAvailable || oilAvailable);
```

---

**PART B: Have oil available**

**PART B TRANSITION:**
"Great! Butter is available, so the machine can run. But what if we only have oil?"

**PART B TITLE:** Have oil available

**PART B PARAGRAPH:**
"The machine needs either butter or oil. We don't have butter available (false). We have oil available (true). Let's check if we have butter OR oil."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `butterAvailable` and set it to `false`.
- Step 2: Create a variable named `oilAvailable` and set it to `true`.
- Step 3: Now try and write the code in the code block below.

---

## EXERCISE 2: SUGAR OR HONEY 🍯

**SECTION NAME:** logicalOperatorsPart2
**EXERCISE NUMBER:** 2
**EMOJI:** 🍯

**EXERCISE INTRODUCTION:**
"Sweet popcorn can be sweetened with sugar OR honey! Either one works. Let's check what we have!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using || operator to check alternative conditions"

---

**PART A: Have sugar available**

**PART A TITLE:** Have sugar available

**PART A PARAGRAPH:**
"Sweet popcorn needs either sugar or honey for sweetness. We have sugar available (true). We don't have honey available (false). Let's check if we have sugar OR honey - either one is fine!"

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `sugarAvailable` and set it to `true`.
- Step 2: Create a variable named `honeyAvailable` and set it to `false`.
- Step 3: Use `console.log()` to check if `sugarAvailable` OR `honeyAvailable` is true.

**STEP 3 COMPLETE CODE:**
```javascript
console.log(`Sugar available: ${sugarAvailable}. Honey available: ${honeyAvailable}.`);
console.log(sugarAvailable || honeyAvailable);
```

---

**PART B: Have honey available**

**PART B TRANSITION:**
"Great! Sugar worked. But honey is actually really popular - some children prefer the honey flavor!"

**PART B TITLE:** Have honey available

**PART B PARAGRAPH:**
"Sweet popcorn needs either sugar or honey. We don't have sugar available (false). We have honey available (true). Let's check if we have sugar OR honey."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `sugarAvailable` and set it to `false`.
- Step 2: Create a variable named `honeyAvailable` and set it to `true`.
- Step 3: Now try and write the code in the code block below.

---

## EXERCISE 3: CHEDDAR OR PARMESAN 🧀

**SECTION NAME:** logicalOperatorsPart2
**EXERCISE NUMBER:** 3
**EMOJI:** 🧀

**EXERCISE INTRODUCTION:**
"Cheese popcorn can use cheddar cheese OR parmesan cheese! Both are delicious. Let's check what's available!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using || operator to check alternative conditions"

---

**PART A: Have cheddar available**

**PART A TITLE:** Have cheddar available

**PART A PARAGRAPH:**
"Cheese popcorn needs either cheddar or parmesan cheese. We have cheddar available (true). We don't have parmesan available (false). Let's check if we have cheddar OR parmesan - either works!"

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `cheddarAvailable` and set it to `true`.
- Step 2: Create a variable named `parmesanAvailable` and set it to `false`.
- Step 3: Use `console.log()` to check if `cheddarAvailable` OR `parmesanAvailable` is true.

**STEP 3 COMPLETE CODE:**
```javascript
console.log(`Cheddar available: ${cheddarAvailable}. Parmesan available: ${parmesanAvailable}.`);
console.log(cheddarAvailable || parmesanAvailable);
```

---

**PART B: Have parmesan available**

**PART B TRANSITION:**
"Perfect! Cheddar is ready. But parmesan is a premium option too!"

**PART B TITLE:** Have parmesan available

**PART B PARAGRAPH:**
"Cheese popcorn needs either cheddar or parmesan. We don't have cheddar available (false). We have parmesan available (true). Parmesan is a premium cheese option - more expensive but really tasty! Let's check if we have cheddar OR parmesan."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `cheddarAvailable` and set it to `false`.
- Step 2: Create a variable named `parmesanAvailable` and set it to `true`.
- Step 3: Now try and write the code in the code block below.

---

## EXERCISE 4: PEANUTS OR ALMONDS 🥜

**SECTION NAME:** logicalOperatorsPart2
**EXERCISE NUMBER:** 4
**EMOJI:** 🥜

**EXERCISE INTRODUCTION:**
"Nutty popcorn can have peanuts OR almonds mixed in! Either nut adds great crunch. Let's check!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using || operator to check alternative conditions"

---

**PART A: Have peanuts available**

**PART A TITLE:** Have peanuts available

**PART A PARAGRAPH:**
"Nutty popcorn needs either peanuts or almonds. We have peanuts available (true). We don't have almonds available (false). Let's check if we have peanuts OR almonds - either nut works!"

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `peanutsAvailable` and set it to `true`.
- Step 2: Create a variable named `almondsAvailable` and set it to `false`.
- Step 3: Use `console.log()` to check if `peanutsAvailable` OR `almondsAvailable` is true.

**STEP 3 COMPLETE CODE:**
```javascript
console.log(`Peanuts available: ${peanutsAvailable}. Almonds available: ${almondsAvailable}.`);
console.log(peanutsAvailable || almondsAvailable);
```

---

**PART B: Have almonds available**

**PART B TRANSITION:**
"Excellent! Peanuts are ready. Almonds are a popular alternative too!"

**PART B TITLE:** Have almonds available

**PART B PARAGRAPH:**
"Nutty popcorn needs either peanuts or almonds. We don't have peanuts available (false). We have almonds available (true). Let's check if we have peanuts OR almonds."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `peanutsAvailable` and set it to `false`.
- Step 2: Create a variable named `almondsAvailable` and set it to `true`.
- Step 3: Now try and write the code in the code block below.

---

## EXERCISE 5: SALT OR SEA SALT 🧂

**SECTION NAME:** logicalOperatorsPart2
**EXERCISE NUMBER:** 5
**EMOJI:** 🧂

**EXERCISE INTRODUCTION:**
"Savory popcorn needs salt OR sea salt for that salty flavor! Both types work great. Let's verify!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using || operator to check alternative conditions"

---

**PART A: Have regular salt**

**PART A TITLE:** Have regular salt

**PART A PARAGRAPH:**
"Savory popcorn needs either regular salt or sea salt. We have regular salt available (true). We don't have sea salt available (false). Let's check if we have salt OR sea salt - either adds the salty taste!"

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `saltAvailable` and set it to `true`.
- Step 2: Create a variable named `seaSaltAvailable` and set it to `false`.
- Step 3: Use `console.log()` to check if `saltAvailable` OR `seaSaltAvailable` is true.

**STEP 3 COMPLETE CODE:**
```javascript
console.log(`Salt available: ${saltAvailable}. Sea salt available: ${seaSaltAvailable}.`);
console.log(saltAvailable || seaSaltAvailable);
```

---

**PART B: Have sea salt**

**PART B TRANSITION:**
"Perfect! Regular salt is ready. Sea salt is a gourmet option with a slightly different flavor!"

**PART B TITLE:** Have sea salt

**PART B PARAGRAPH:**
"Savory popcorn needs either regular salt or sea salt. We don't have regular salt available (false). We have sea salt available (true). Let's check if we have salt OR sea salt."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `saltAvailable` and set it to `false`.
- Step 2: Create a variable named `seaSaltAvailable` and set it to `true`.
- Step 3: Now try and write the code in the code block below.

---

## TEACHING NOTES

**Key Concepts:**
- OR (||) operator requires AT LEAST ONE condition to be true
- If either condition (or both) is true, the result is true
- Used for "alternatives" or "options" scenarios
- Contrasts with AND (&&) from Part 1

**What NOT to include:**
- ❌ Arrays (not taught yet)
- ❌ NOT operator (future module)
- ❌ Combining && and || (too advanced)

**Step Format:**
- Exercise 1: Show complete code in Step 3
- Exercises 2-5: "Now try and write the code in the code block below"

**Assessment Criteria:**
- Can use || operator correctly
- Understands only one condition needs to be true
- Can distinguish between AND (&&) and OR (||) usage
- Recognizes when OR logic is appropriate
