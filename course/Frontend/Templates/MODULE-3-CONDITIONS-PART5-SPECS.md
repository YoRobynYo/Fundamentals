# module 3 - conditions part 5 - exercise specifications
## Ready-to-Generate Exercise Templates

**Created:** February 25, 2026
**Purpose:** Pre-filled specifications for Conditions Part 5 (else if) exercises - multiple flavor paths in the Ingredients Room

**HOW TO USE THIS DOCUMENT:**
1. Copy ONE exercise specification at a time
2. Give it to your AI assistant with instruction: "Generate the HTML for this exercise following the EXERCISE-TEMPLATE-MASTER.md structure"
3. AI outputs the complete HTML
4. Review and adjust as needed
5. Copy into your HTML file
6. Move to next exercise

---

## CONDITIONS PART 5 (else if) - 5 EXERCISES

**CONCEPT:** Multiple decision paths - checking one condition with many possible outcomes

**CONTEXT:** The assistant takes children to the Ingredients Room! Time to learn about different popcorn flavors and what ingredients each one needs. Children help check which flavor is being made and report which ingredients to collect!

---

### EXERCISE 1: BASIC FLAVORS 🍿

**SECTION NAME:** conditionsPart5
**EXERCISE NUMBER:** 1
**EMOJI:** 🍿

**EXERCISE INTRODUCTION:**
"Welcome to the Ingredients Room! This is where we keep everything needed to make different popcorn flavors. The assistant explains: 'Each flavor needs specific ingredients. Let's start with the basic flavors!'"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using else if for multiple outcomes"

---

**PART A: Plain or buttery popcorn**

**PART A TITLE:** Plain or buttery popcorn
**PART A CONTEXT:** Plain popcorn just needs corn. Buttery popcorn needs corn AND butter. Let's check which one we're making!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `flavorOrder`. Set its value to `"plain"`.
- Step 2: Use if/else if/else to check: If flavor is "plain", report "Get: Corn only", else if flavor is "buttery", report "Get: Corn and butter", else report "Check with supervisor"
- Step 3: Write the full code:

**STEP 3 COMPLETE CODE:**
```javascript
let flavorOrder = "plain";

if (flavorOrder === "plain") {
  console.log("Get: Corn only");
} else if (flavorOrder === "buttery") {
  console.log("Get: Corn and butter");
} else {
  console.log("Check with supervisor");
}
```

**PART A NOTES:**
- Note:: else if lets us check multiple options in order!
- Note:: Your output should show: "Get: Corn only"

---

**PART B: Adding salty popcorn**

**PART B TRANSITION:**
"Great! Now let's add a third option - salty popcorn, which needs corn and salt!"

**PART B TITLE:** Adding salty popcorn
**PART B CONTEXT:** Now we have THREE flavor options to check: plain, buttery, OR salty!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `flavorOrder`. Set its value to `"salty"`.
- Step 2: Build your if/else if/else statement:
  * if (flavorOrder === "plain") → "Get: Corn only"
  * else if (flavorOrder === "buttery") → "Get: Corn and butter"
  * else if (flavorOrder === "salty") → "Get: Corn and salt"
  * else → "Check with supervisor"
- Step 3: If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Add another else if for the third option!
- Note:: Your output should show: "Get: Corn and salt"

---

### EXERCISE 2: SWEET FLAVORS 🍬

**SECTION NAME:** conditionsPart5
**EXERCISE NUMBER:** 2
**EMOJI:** 🍬

**EXERCISE INTRODUCTION:**
"The assistant shows us the sweet section of the Ingredients Room! 'Children love sweet popcorn,' she explains. 'We have three sweet varieties - let's learn what makes each one special!'"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using else if for multiple outcomes"

---

**PART A: Sweet or butterscotch**

**PART A TITLE:** Sweet or butterscotch
**PART A CONTEXT:** Sweet popcorn needs corn and sugar. Butterscotch needs corn, butter, and brown sugar. Let's figure out which ingredients we need!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `sweetFlavor`. Set its value to `"sweet"`.
- Step 2: Use if/else if/else to check: If "sweet", report "Get: Corn and sugar", else if "butterscotch", report "Get: Corn, butter, and brown sugar", else report "Check sweet flavor list". If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART A NOTES:**
- Note:: Different sweet flavors need different ingredients!
- Note:: Your output should show: "Get: Corn and sugar"

---

**PART B: Adding toffee flavor**

**PART B TRANSITION:**
"Perfect! Now let's add toffee popcorn - that's a really special one with corn, butter, and toffee pieces!"

**PART B TITLE:** Adding toffee flavor
**PART B CONTEXT:** Now checking THREE sweet options: sweet, butterscotch, OR toffee!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `sweetFlavor`. Set its value to `"toffee"`.
- Step 2: Build your if/else if/else statement:
  * if (sweetFlavor === "sweet") → "Get: Corn and sugar"
  * else if (sweetFlavor === "butterscotch") → "Get: Corn, butter, and brown sugar"
  * else if (sweetFlavor === "toffee") → "Get: Corn, butter, and toffee pieces"
  * else → "Check sweet flavor list"
- Step 3: If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Keep adding else if for more options!
- Note:: Your output should show: "Get: Corn, butter, and toffee pieces"

---

### EXERCISE 3: SAVORY FLAVORS 🧀

**SECTION NAME:** conditionsPart5
**EXERCISE NUMBER:** 3
**EMOJI:** 🧀

**EXERCISE INTRODUCTION:**
"'Not everyone likes sweet!' says the assistant with a smile. 'Savory flavors are really popular too. Let's check the cheese and spice section!'"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using else if for multiple outcomes"

---

**PART A: Cheese or chili**

**PART A TITLE:** Cheese or chili
**PART A CONTEXT:** Cheese popcorn needs corn and cheese powder. Chili popcorn needs corn and chili seasoning. Let's check which one we're making!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `savoryFlavor`. Set its value to `"cheese"`.
- Step 2: Use if/else if/else to check: If "cheese", report "Get: Corn and cheese powder", else if "chili", report "Get: Corn and chili seasoning", else report "Check savory list". If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART A NOTES:**
- Note:: Savory flavors add exciting tastes!
- Note:: Your output should show: "Get: Corn and cheese powder"

---

**PART B: Adding BBQ flavor**

**PART B TRANSITION:**
"Excellent! Now let's add BBQ popcorn - that needs corn and BBQ seasoning. It's really tasty!"

**PART B TITLE:** Adding BBQ flavor
**PART B CONTEXT:** Now we're checking THREE savory options: cheese, chili, OR BBQ!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `savoryFlavor`. Set its value to `"BBQ"`.
- Step 2: Build your if/else if/else statement:
  * if (savoryFlavor === "cheese") → "Get: Corn and cheese powder"
  * else if (savoryFlavor === "chili") → "Get: Corn and chili seasoning"
  * else if (savoryFlavor === "BBQ") → "Get: Corn and BBQ seasoning"
  * else → "Check savory list"
- Step 3: If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: BBQ is a popular savory choice!
- Note:: Your output should show: "Get: Corn and BBQ seasoning"

---

### EXERCISE 4: SPECIAL FLAVORS 🍫

**SECTION NAME:** conditionsPart5
**EXERCISE NUMBER:** 4
**EMOJI:** 🍫

**EXERCISE INTRODUCTION:**
"The assistant unlocks a special cupboard! 'These are our premium flavors,' she explains. 'Caramel and chocolate popcorn are really special treats!'"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using else if for multiple outcomes"

---

**PART A: Caramel or chocolate**

**PART A TITLE:** Caramel or chocolate
**PART A CONTEXT:** Caramel popcorn needs corn, butter, and caramel sauce. Chocolate popcorn needs corn and melted chocolate. These are premium flavors!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `premiumFlavor`. Set its value to `"caramel"`.
- Step 2: Use if/else if/else to check: If "caramel", report "Get: Corn, butter, and caramel sauce", else if "chocolate", report "Get: Corn and melted chocolate", else report "Check premium list". If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART A NOTES:**
- Note:: Premium flavors need special ingredients!
- Note:: Your output should show: "Get: Corn, butter, and caramel sauce"

---

**PART B: Adding chocolate with nuts**

**PART B TRANSITION:**
"Perfect! Now we're adding an extra special one - chocolate popcorn with nuts! This needs corn, melted chocolate, AND peanuts!"

**PART B TITLE:** Adding chocolate with nuts
**PART B CONTEXT:** Now THREE premium options: caramel, chocolate, OR chocolate with nuts!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `premiumFlavor`. Set its value to `"chocolate nuts"`.
- Step 2: Build your if/else if/else statement:
  * if (premiumFlavor === "caramel") → "Get: Corn, butter, and caramel sauce"
  * else if (premiumFlavor === "chocolate") → "Get: Corn and melted chocolate"
  * else if (premiumFlavor === "chocolate nuts") → "Get: Corn, melted chocolate, and peanuts"
  * else → "Check premium list"
- Step 3: If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Adding nuts makes it even more special!
- Note:: Your output should show: "Get: Corn, melted chocolate, and peanuts"

---

### EXERCISE 5: ICE CREAM FLAVORS 🍦

**SECTION NAME:** conditionsPart5
**EXERCISE NUMBER:** 5
**EMOJI:** 🍦

**EXERCISE INTRODUCTION:**
"'Wait until you see this!' says the assistant excitedly. 'We make ice cream popcorn too! The popcorn is coated with ice cream flavors - it's amazing!'"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using else if for multiple outcomes"

---

**PART A: Vanilla or strawberry ice cream**

**PART A TITLE:** Vanilla or strawberry ice cream
**PART A CONTEXT:** Vanilla ice cream popcorn needs corn and vanilla coating. Strawberry needs corn and strawberry coating. Let's check which one!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `iceCreamFlavor`. Set its value to `"vanilla"`.
- Step 2: Use if/else if/else to check: If "vanilla", report "Get: Corn and vanilla coating", else if "strawberry", report "Get: Corn and strawberry coating", else report "Check ice cream flavors". If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART A NOTES:**
- Note:: Ice cream popcorn is a unique treat!
- Note:: Your output should show: "Get: Corn and vanilla coating"

---

**PART B: Adding cookies and cream**

**PART B TRANSITION:**
"Delicious! Now let's add the most popular one - cookies and cream ice cream popcorn! This needs corn, vanilla coating, AND cookie crumbles!"

**PART B TITLE:** Adding cookies and cream
**PART B CONTEXT:** Now THREE ice cream options: vanilla, strawberry, OR cookies and cream!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `iceCreamFlavor`. Set its value to `"cookies cream"`.
- Step 2: Build your if/else if/else statement:
  * if (iceCreamFlavor === "vanilla") → "Get: Corn and vanilla coating"
  * else if (iceCreamFlavor === "strawberry") → "Get: Corn and strawberry coating"
  * else if (iceCreamFlavor === "cookies cream") → "Get: Corn, vanilla coating, and cookie crumbles"
  * else → "Check ice cream flavors"
- Step 3: If you need help, check Exercise 1 Step 3 in Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Cookies and cream is the children's favorite!
- Note:: Your output should show: "Get: Corn, vanilla coating, and cookie crumbles"

---

## HOW TO USE THESE SPECS WITH AI

**Simple workflow:**
1. Copy ONE exercise specification from above
2. Open your AI assistant
3. Say: "Using the EXERCISE-TEMPLATE-MASTER.md structure, generate the complete HTML for this exercise: [paste spec]"
4. AI generates HTML
5. Review and adjust as needed
6. Copy into your HTML
7. Move to next exercise

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "conditionsPart5"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Uses else if structure correctly
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: conditionsPart5-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="conditionsPart5"
- [ ] Image filename and alt text match
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1: Part A shows complete code with if/else if/else
- [ ] Exercise 2+: References Exercise 1 Step 3 Part A
- [ ] Part A has engaging context paragraph
- [ ] Part B has engaging context paragraph
- [ ] Flavor names and ingredients are clear
- [ ] Children are helping CHECK which flavor, not making it
- [ ] Uses child-appropriate language
- [ ] Avoid "student" - use "children" or "you"

---

END OF MODULE 3 CONDITIONS PART 5 SPECIFICATIONS
