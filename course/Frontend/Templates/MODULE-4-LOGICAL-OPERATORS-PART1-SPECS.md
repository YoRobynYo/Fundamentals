# MODULE 4: LOGICAL OPERATORS PART 1 - EXERCISE SPECIFICATIONS

## Overview
This module introduces the AND (&&) logical operator, teaching children how to check if BOTH conditions are true at the same time. Building on their knowledge of basic conditions from Module 3.

**Concepts taught:**
- Using && (AND) operator
- Checking multiple conditions together
- Both conditions must be true
- Real-world scenarios requiring double-checks

**No arrays, building on conditions knowledge from Module 3**

---

## EXERCISE 1: PLAIN POPCORN - FLAVOR AND QUANTITY 🌽

**SECTION NAME:** logicalOperatorsPart1
**EXERCISE NUMBER:** 1
**EMOJI:** 🌽

**EXERCISE INTRODUCTION:**
"The Plain Popcorn station needs both the right flavor AND enough quantity to fill the order! Let's check if both conditions are ready."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using && operator to check multiple conditions"

---

**PART A: Checking Flavor and Quantity**

**PART A TITLE:** Checking Flavor and Quantity

**PART A PARAGRAPH:**
"The order requires Plain flavor popcorn. We have Plain flavor ready. The order also needs at least 50 bags. We currently have 75 bags ready. Let's check if BOTH the flavor is correct AND we have enough quantity."

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `flavor` and set it to `"Plain"`.
- Step 2: Create a variable named `requiredFlavor` and set it to `"Plain"`.
- Step 3: Create a variable named `bagsReady` and set it to `75`.
- Step 4: Create a variable named `bagsNeeded` and set it to `50`.
- Step 5: Use `console.log()` to check if `flavor === requiredFlavor` AND `bagsReady >= bagsNeeded`.

**STEP 5 COMPLETE CODE:**
```javascript
console.log(`Flavor: ${flavor}. Required: ${requiredFlavor}. Bags ready: ${bagsReady}. Bags needed: ${bagsNeeded}.`);
console.log(flavor === requiredFlavor && bagsReady >= bagsNeeded);
```

---

**PART B: Different Quantities**

**PART B TRANSITION:**
"Great! That order is ready. Now let's check another order with different quantities."

**PART B TITLE:** Different Quantities

**PART B PARAGRAPH:**
"The next order also requires Plain flavor. We still have Plain flavor ready. This order needs at least 100 bags, but we only have 75 bags ready. Let's check if BOTH conditions are met."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `flavor` and set it to `"Plain"`.
- Step 2: Create a variable named `requiredFlavor` and set it to `"Plain"`.
- Step 3: Create a variable named `bagsReady` and set it to `75`.
- Step 4: Create a variable named `bagsNeeded` and set it to `100`.
- Step 5: Now try and write the code in the code block below.

---

## EXERCISE 2: BUTTERY POPCORN - FLAVOR AND FRESHNESS 🧈

**SECTION NAME:** logicalOperatorsPart1
**EXERCISE NUMBER:** 2
**EMOJI:** 🧈

**EXERCISE INTRODUCTION:**
"The Buttery Popcorn station must have the correct flavor AND the popcorn must be fresh! Let's check both conditions."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using && operator to check multiple conditions"

---

**PART A: Checking Flavor and Freshness**

**PART A TITLE:** Checking Flavor and Freshness

**PART A PARAGRAPH:**
"The order requires Butter flavor popcorn. We have Butter flavor ready. The popcorn must also be fresh (made within 2 hours). Our current batch was made 1 hour ago. Let's check if BOTH the flavor is correct AND the popcorn is fresh."

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `flavor` and set it to `"Butter"`.
- Step 2: Create a variable named `requiredFlavor` and set it to `"Butter"`.
- Step 3: Create a variable named `hoursSinceMade` and set it to `1`.
- Step 4: Create a variable named `freshnessLimit` and set it to `2`.
- Step 5: Use `console.log()` to check if `flavor === requiredFlavor` AND `hoursSinceMade <= freshnessLimit`.

**STEP 5 COMPLETE CODE:**
```javascript
console.log(`Flavor: ${flavor}. Required: ${requiredFlavor}. Hours since made: ${hoursSinceMade}. Freshness limit: ${freshnessLimit} hours.`);
console.log(flavor === requiredFlavor && hoursSinceMade <= freshnessLimit);
```

---

**PART B: Checking Stale Popcorn**

**PART B TRANSITION:**
"Perfect! That batch is ready. But what if the popcorn is old?"

**PART B TITLE:** Checking Stale Popcorn

**PART B PARAGRAPH:**
"Another order requires Butter flavor. We have Butter flavor ready. However, this batch was made 3 hours ago, which exceeds the 2-hour freshness limit. Let's check if BOTH conditions are met."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `flavor` and set it to `"Butter"`.
- Step 2: Create a variable named `requiredFlavor` and set it to `"Butter"`.
- Step 3: Create a variable named `hoursSinceMade` and set it to `3`.
- Step 4: Create a variable named `freshnessLimit` and set it to `2`.
- Step 5: Now try and write the code in the code block below.

---

## EXERCISE 3: CHEESE POPCORN - INGREDIENT AND CONTAINER 🧀

**SECTION NAME:** logicalOperatorsPart1
**EXERCISE NUMBER:** 3
**EMOJI:** 🧀

**EXERCISE INTRODUCTION:**
"The Cheese Popcorn station needs the right cheese ingredient AND the correct container size! Let's check both."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using && operator to check multiple conditions"

---

**PART A: Checking Ingredient and Container**

**PART A TITLE:** Checking Ingredient and Container

**PART A PARAGRAPH:**
"The order requires Cheddar cheese ingredient. We have Cheddar cheese ready. The container must hold at least 500 grams. Our current container holds 750 grams. Let's check if BOTH the ingredient is correct AND the container is large enough."

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `ingredient` and set it to `"Cheddar"`.
- Step 2: Create a variable named `requiredIngredient` and set it to `"Cheddar"`.
- Step 3: Create a variable named `containerSize` and set it to `750`.
- Step 4: Create a variable named `minimumSize` and set it to `500`.
- Step 5: Use `console.log()` to check if `ingredient === requiredIngredient` AND `containerSize >= minimumSize`.

**STEP 5 COMPLETE CODE:**
```javascript
console.log(`Ingredient: ${ingredient}. Required: ${requiredIngredient}. Container size: ${containerSize}g. Minimum: ${minimumSize}g.`);
console.log(ingredient === requiredIngredient && containerSize >= minimumSize);
```

---

**PART B: Small Container**

**PART B TRANSITION:**
"Excellent! That container works. But what if the container is too small?"

**PART B TITLE:** Small Container

**PART B PARAGRAPH:**
"The order requires Cheddar cheese ingredient. We have Cheddar cheese ready. However, our container only holds 400 grams, which is less than the 500-gram minimum. Let's check if BOTH conditions are met."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `ingredient` and set it to `"Cheddar"`.
- Step 2: Create a variable named `requiredIngredient` and set it to `"Cheddar"`.
- Step 3: Create a variable named `containerSize` and set it to `400`.
- Step 4: Create a variable named `minimumSize` and set it to `500`.
- Step 5: Now try and write the code in the code block below.

---

## EXERCISE 4: SWEET POPCORN - SUGAR AND LABEL 🍬

**SECTION NAME:** logicalOperatorsPart1
**EXERCISE NUMBER:** 4
**EMOJI:** 🍬

**EXERCISE INTRODUCTION:**
"The Sweet Popcorn station needs enough sugar AND the correct label on the bag! Let's check both requirements."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using && operator to check multiple conditions"

---

**PART A: Checking Sugar and Label**

**PART A TITLE:** Checking Sugar and Label

**PART A PARAGRAPH:**
"The recipe requires at least 100 grams of sugar. We have 150 grams of sugar ready. The bag label must say Sweet. Our current label says Sweet. Let's check if BOTH we have enough sugar AND the label is correct."

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `sugarAmount` and set it to `150`.
- Step 2: Create a variable named `sugarNeeded` and set it to `100`.
- Step 3: Create a variable named `labelText` and set it to `"Sweet"`.
- Step 4: Create a variable named `requiredLabel` and set it to `"Sweet"`.
- Step 5: Use `console.log()` to check if `sugarAmount >= sugarNeeded` AND `labelText === requiredLabel`.

**STEP 5 COMPLETE CODE:**
```javascript
console.log(`Sugar: ${sugarAmount}g. Needed: ${sugarNeeded}g. Label: ${labelText}. Required: ${requiredLabel}.`);
console.log(sugarAmount >= sugarNeeded && labelText === requiredLabel);
```

---

**PART B: Wrong Label**

**PART B TRANSITION:**
"Great! That batch is ready. But what if the label is wrong?"

**PART B TITLE:** Wrong Label

**PART B PARAGRAPH:**
"We have 150 grams of sugar, which is more than the 100 grams needed. However, the bag label says Plain instead of Sweet. Let's check if BOTH conditions are met."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `sugarAmount` and set it to `150`.
- Step 2: Create a variable named `sugarNeeded` and set it to `100`.
- Step 3: Create a variable named `labelText` and set it to `"Plain"`.
- Step 4: Create a variable named `requiredLabel` and set it to `"Sweet"`.
- Step 5: Now try and write the code in the code block below.

---

## EXERCISE 5: COMPLETE ORDER CHECK ✅

**SECTION NAME:** logicalOperatorsPart1
**EXERCISE NUMBER:** 5
**EMOJI:** ✅

**EXERCISE INTRODUCTION:**
"Before shipping an order, we must verify that BOTH the flavor is correct AND the weight meets requirements! Let's do a final check."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using && operator to check multiple conditions"

---

**PART A: Order Ready to Ship**

**PART A TITLE:** Order Ready to Ship

**PART A PARAGRAPH:**
"The customer ordered Caramel flavor popcorn. We have Caramel flavor ready. The order requires at least 2000 grams total weight. Our current batch weighs 2500 grams. Let's check if BOTH the flavor is correct AND we have enough weight to ship."

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `orderFlavor` and set it to `"Caramel"`.
- Step 2: Create a variable named `currentFlavor` and set it to `"Caramel"`.
- Step 3: Create a variable named `currentWeight` and set it to `2500`.
- Step 4: Create a variable named `requiredWeight` and set it to `2000`.
- Step 5: Use `console.log()` to check if `orderFlavor === currentFlavor` AND `currentWeight >= requiredWeight`.

**STEP 5 COMPLETE CODE:**
```javascript
console.log(`Order flavor: ${orderFlavor}. Current: ${currentFlavor}. Weight: ${currentWeight}g. Required: ${requiredWeight}g.`);
console.log(orderFlavor === currentFlavor && currentWeight >= requiredWeight);
```

---

**PART B: Insufficient Weight**

**PART B TRANSITION:**
"Perfect! That order can ship. But what if we don't have enough weight yet?"

**PART B TITLE:** Insufficient Weight

**PART B PARAGRAPH:**
"The customer ordered Caramel flavor. We have Caramel flavor ready. However, our current batch only weighs 1500 grams, which is less than the 2000 grams required. Let's check if BOTH conditions are met."

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `orderFlavor` and set it to `"Caramel"`.
- Step 2: Create a variable named `currentFlavor` and set it to `"Caramel"`.
- Step 3: Create a variable named `currentWeight` and set it to `1500`.
- Step 4: Create a variable named `requiredWeight` and set it to `2000`.
- Step 5: Now try and write the code in the code block below.

---

## TEACHING NOTES

**Key Concepts:**
- AND (&&) operator requires BOTH conditions to be true
- If either condition is false, the result is false
- Used for "double-check" scenarios
- Building on Module 3 comparison operators

**What NOT to include:**
- ❌ Arrays (not taught yet)
- ❌ OR operator (that's Part 2)
- ❌ NOT operator (future module)

**Step Format:**
- Exercise 1: Show complete code in Step 5
- Exercises 2-5: "Now try and write the code in the code block below"

**Assessment Criteria:**
- Can use && operator correctly
- Understands both conditions must be true
- Can combine comparison operators with &&
- Recognizes when AND logic is appropriate
