# module 3 - conditions part 3 - exercise specifications
## Ready-to-Generate Exercise Templates

**Created:** February 24, 2026
**Purpose:** Pre-filled specifications for Conditions Part 3 (<=, >=) exercises - threshold and safety checks

**HOW TO USE THIS DOCUMENT:**
1. Copy ONE exercise specification at a time
2. Give it to your AI assistant with instruction: "Generate the HTML for this exercise following the EXERCISE-TEMPLATE-MASTER.md structure"
3. AI outputs the complete HTML
4. Review and adjust as needed
5. Copy into your HTML file
6. Move to next exercise

---

## CONDITIONS PART 3 (<=, >=) - 5 EXERCISES

**CONCEPT:** Threshold checks - "at least" and "at most" verification

**CONTEXT:** Final safety checks before Machine 1 can start! We need to make sure we have AT LEAST the minimum safety equipment and we're AT OR UNDER maximum capacity limits.

---

### EXERCISE 1: SAFETY GUARD VERIFICATION 🛡️

**SECTION NAME:** conditionsPart3
**EXERCISE NUMBER:** 1
**EMOJI:** 🛡️

**EXERCISE INTRODUCTION:**
"Before any machine can start, the safety guard must be properly secured! Let's check that it's in the safe position and locked in place."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and threshold operators"

---

**PART A: Is safety guard secured?**

**PART A TITLE:** Is safety guard secured?
**PART A CONTEXT:** The safety guard protects us from the hot machine parts! It must be at least at the minimum safe position.

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `guardPosition`. Set its value to `5` (fully closed).
- Step 2: Create a variable named `minimumSafePosition`. Set its value to `4`.
- Step 3: Use `console.log()` to check: Is the guard position AT LEAST at the minimum safe position (or higher)?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Guard position: ${guardPosition}. Minimum safe position: ${minimumSafePosition}.`);
console.log(guardPosition >= minimumSafePosition);
```

**PART A NOTES:**
- Note:: The >= operator checks "greater than or equal to" - at LEAST this amount!
- Note:: Your output should show: "Guard position: 5. Minimum safe position: 4." followed by "true"

---

**PART B: Guard not secure enough!**

**PART B TRANSITION:**
"Perfect! Machine 1's guard is secure. But we just checked Machine 2 and its guard isn't fully closed yet!"

**PART B TITLE:** Guard not secure enough!
**PART B CONTEXT:** If the guard isn't at least at the safe position, we need to tell the assistant to adjust it!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `guardPosition`. Set its value to `3`.
- Step 2: Create a variable named `minimumSafePosition`. Set its value to `4`.
- Step 3: Write the code to check if the guard position is AT LEAST at the minimum safe position. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use >= to check if we have at least the minimum!
- Note:: Your output should show guard not secure enough (false - needs adjusting!)

---

### EXERCISE 2: SAFETY GOGGLES CHECK 🥽

**SECTION NAME:** conditionsPart3
**EXERCISE NUMBER:** 2
**EMOJI:** 🥽

**EXERCISE INTRODUCTION:**
"Everyone helping at the machine needs safety goggles to protect their eyes! Let's make sure we have enough goggles for all the children."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and threshold operators"

---

**PART A: Enough goggles for everyone?**

**PART A TITLE:** Enough goggles for everyone?
**PART A CONTEXT:** We need AT LEAST as many goggles as children helping at this station!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `gogglesAvailable`. Set its value to `8`.
- Step 2: Create a variable named `childrenAtStation`. Set its value to `6`.
- Step 3: Write the code to check if we have AT LEAST as many goggles as children (or more). If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Use >= to check if goggles are at least equal to (or more than) children!
- Note:: Your output should show we have enough goggles (true)

---

**PART B: Not enough goggles!**

**PART B TRANSITION:**
"Great! Station 1 has enough goggles. But Station 2 has more children than goggles - we need to get more!"

**PART B TITLE:** Not enough goggles!
**PART B CONTEXT:** If we don't have enough goggles, children will have to wait until more arrive!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `gogglesAvailable`. Set its value to `5`.
- Step 2: Create a variable named `childrenAtStation`. Set its value to `7`.
- Step 3: Write the code to check if we have AT LEAST as many goggles as children. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use >= to check for minimum needed!
- Note:: Your output should show not enough goggles (false - need 2 more!)

---

### EXERCISE 3: SAFETY GLOVES CHECK 🧤

**SECTION NAME:** conditionsPart3
**EXERCISE NUMBER:** 3
**EMOJI:** 🧤

**EXERCISE INTRODUCTION:**
"Safety gloves protect hands from hot surfaces! Let's verify we have enough gloves and that we're not over our maximum limit."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and threshold operators"

---

**PART A: Minimum gloves available?**

**PART A TITLE:** Minimum gloves available?
**PART A CONTEXT:** We need at least the minimum number of gloves for safe operation!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `glovesAvailable`. Set its value to `12`.
- Step 2: Create a variable named `minimumRequired`. Set its value to `10`.
- Step 3: Write the code to check if gloves available is AT LEAST the minimum required. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Use >= for "at least" checks!
- Note:: Your output should show we have enough gloves (true)

---

**PART B: Not exceeding storage limit?**

**PART B TRANSITION:**
"Perfect amount of gloves! Now let's check the glove storage box - we can't overstuff it or the gloves get damaged."

**PART B TITLE:** Not exceeding storage limit?
**PART B CONTEXT:** The storage box can hold AT MOST 20 pairs of gloves safely!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `glovesInBox`. Set its value to `18`.
- Step 2: Create a variable named `maximumCapacity`. Set its value to `20`.
- Step 3: Write the code to check if gloves in box is AT MOST the maximum capacity (not over!). If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use <= to check "at most" or "not exceeding" limits!
- Note:: Your output should show we're under capacity (true - safe!)

---

### EXERCISE 4: WEIGHING SCALE CHECK ⚖️

**SECTION NAME:** conditionsPart3
**EXERCISE NUMBER:** 4
**EMOJI:** ⚖️

**EXERCISE INTRODUCTION:**
"The assistant is showing us the weighing scale attached to Machine 1! Scales are important for measuring ingredients accurately. Let's help check that it's working properly and not overloaded."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and threshold operators"

---

**PART A: Is scale calibrated?**

**PART A TITLE:** Is scale calibrated?
**PART A CONTEXT:** The assistant explains that scales must be AT LEAST at zero when empty - negative numbers mean it needs fixing!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `scaleReading`. Set its value to `0`.
- Step 2: Create a variable named `minimumReading`. Set its value to `0`.
- Step 3: Write the code to check if the scale reading is AT LEAST zero (properly calibrated). If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Use >= to check the scale is at least zero (not negative)!
- Note:: Your output should show scale is calibrated (true)

---

**PART B: Scale not overloaded?**

**PART B TRANSITION:**
"Perfect! The scale is calibrated. Now the assistant wants us to check the maximum weight limit - we can't overload it or it breaks!"

**PART B TITLE:** Scale not overloaded?
**PART B CONTEXT:** The weighing scale can hold AT MOST 50kg safely without damage!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `currentWeight`. Set its value to `35`.
- Step 2: Create a variable named `maximumWeight`. Set its value to `50`.
- Step 3: Write the code to check if the current weight is AT MOST the maximum safe weight (not overloaded!). If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use <= to check we're not over the weight limit!
- Note:: Your output should show scale is safe (true - not overloaded!)

---

### EXERCISE 5: FINAL READINESS VERIFICATION ✅

**SECTION NAME:** conditionsPart3
**EXERCISE NUMBER:** 5
**EMOJI:** ✅

**EXERCISE INTRODUCTION:**
"This is it - the final checks before Machine 1 can start! Let's verify we have enough helpers and that we're not over the maximum people allowed."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and threshold operators"

---

**PART A: Enough helpers at station?**

**PART A TITLE:** Enough helpers at station?
**PART A CONTEXT:** We need AT LEAST 4 children at the station to operate safely!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `helpersAtStation`. Set its value to `6`.
- Step 2: Create a variable named `minimumHelpers`. Set its value to `4`.
- Step 3: Write the code to check if we have AT LEAST the minimum helpers needed. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Use >= to check minimum helpers!
- Note:: Your output should show we have enough helpers (true)

---

**PART B: Not too many people at station?**

**PART B TRANSITION:**
"Perfect! We have enough helpers. But safety rules say we can't have TOO MANY people crowded around one machine!"

**PART B TITLE:** Not too many people at station?
**PART B CONTEXT:** For safety, we can have AT MOST 10 people at one machine station!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `peopleAtStation`. Set its value to `8`.
- Step 2: Create a variable named `maximumAllowed`. Set its value to `10`.
- Step 3: Write the code to check if people at station is AT MOST the maximum allowed. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use <= to check maximum capacity!
- Note:: Your output should show we're safe (true - not too crowded!)

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
- [ ] Section name is "conditionsPart3"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables match the ones specified
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: conditionsPart3-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="conditionsPart3"
- [ ] Image filename and alt text match
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1: Part A AND Part B Step 4 show complete code
- [ ] Exercise 2+: Final step references Exercise 1 Step 4
- [ ] Part A has engaging context paragraph
- [ ] Part B has engaging context paragraph
- [ ] Expected outputs are realistic and clear
- [ ] Uses child-appropriate language
- [ ] Avoid "student" - use "children" or "you"

---

END OF MODULE 3 CONDITIONS PART 3 SPECIFICATIONS
