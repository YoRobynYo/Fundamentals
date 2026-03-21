# module 3 - conditions part 2 - exercise specifications
## Ready-to-Generate Exercise Templates

**Created:** February 24, 2026
**Purpose:** Pre-filled specifications for Conditions Part 2 (===, !==) exercises - exact matching checks

**HOW TO USE THIS DOCUMENT:**
1. Copy ONE exercise specification at a time
2. Give it to your AI assistant with instruction: "Generate the HTML for this exercise following the EXERCISE-TEMPLATE-MASTER.md structure"
3. AI outputs the complete HTML
4. Review and adjust as needed
5. Copy into your HTML file
6. Move to next exercise

---

## CONDITIONS PART 2 (===, !==) - 5 EXERCISES

**CONCEPT:** Exact matching - checking if things are EXACTLY right or WRONG

**CONTEXT:** Continuing Machine 1 checks at Station One. Now we're verifying things are set up EXACTLY as they should be!

---

### EXERCISE 1: BAG POSITIONING CHECK ✅

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 1
**EMOJI:** ✅

**EXERCISE INTRODUCTION:**
"Great work checking bags and boxes! Now we need to make sure everything is positioned EXACTLY right. Bags need to be under the chute so popcorn goes straight into them!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and exact matching operators"

---

**PART A: Are bags under the chute?**

**PART A TITLE:** Are bags under the chute?
**PART A CONTEXT:** Bags must be positioned exactly under the chute, or popcorn will spill everywhere!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `bagPosition`. Set its value to `"under chute"`.
- Step 2: Create a variable named `correctPosition`. Set its value to `"under chute"`.
- Step 3: Use `console.log()` to check: Is the bag position EXACTLY equal to the correct position?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Bag position: ${bagPosition}. Correct position: ${correctPosition}.`);
console.log(bagPosition === correctPosition);
```

**PART A NOTES:**
- Note:: The === operator checks if things are EXACTLY the same!
- Note:: Your output should show: "Bag position: under chute. Correct position: under chute." followed by "true"

---

**PART B: Wrong position alert!**

**PART B TRANSITION:**
"Perfect! Those bags are positioned correctly. But wait - we found another station where bags are in the wrong place!"

**PART B TITLE:** Wrong position alert!
**PART B CONTEXT:** If bags aren't in the right spot, we need to know so the assistant can fix it!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `bagPosition`. Set its value to `"on floor"`.
- Step 2: Create a variable named `correctPosition`. Set its value to `"under chute"`.
- Step 3: Write the code to check if the bag position is NOT EQUAL to the correct position (wrong spot!). If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use !== to check if things DON'T match!
- Note:: Your output should show bags are in the wrong position (true - they need moving!)

---

### EXERCISE 2: BOX NUMBER VERIFICATION 🔢

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 2
**EMOJI:** 🔢

**EXERCISE INTRODUCTION:**
"The boxes are here and labeled, but we need to make sure the numbers are EXACTLY right! Each station has its own number, and boxes must match."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and exact matching operators"

---

**PART A: Does box number match station?**

**PART A TITLE:** Does box number match station?
**PART A CONTEXT:** Station 1 should only have boxes labeled with number 1!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `boxNumber`. Set its value to `1`.
- Step 2: Create a variable named `stationNumber`. Set its value to `1`.
- Step 3: Write the code to check if the box number EXACTLY matches the station number. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Numbers must match EXACTLY - box 1 for station 1!
- Note:: Your output should show they match (true)

---

**PART B: Wrong box detected!**

**PART B TRANSITION:**
"Good! That box is correct. But someone just brought over a box with number 3 - that's for Station 3, not Station 1!"

**PART B TITLE:** Wrong box detected!
**PART B CONTEXT:** We need to catch boxes that don't belong at this station!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `boxNumber`. Set its value to `3`.
- Step 2: Create a variable named `stationNumber`. Set its value to `1`.
- Step 3: Write the code to check if the box number does NOT match the station number. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use !== to catch mismatches!
- Note:: Your output should show wrong box (true - needs moving to Station 3!)

---

### EXERCISE 3: STATUS LIGHT COLOR CHECK 🔴

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 3
**EMOJI:** 🔴

**EXERCISE INTRODUCTION:**
"Every machine has a status light that shows if it's ready. Right now, lights should be RED because we haven't finished setup yet. Let's check!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and exact matching operators"

---

**PART A: Is the light red?**

**PART A TITLE:** Is the light red?
**PART A CONTEXT:** During setup, the status light should be red (not ready). Let's verify!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `lightColor`. Set its value to `"red"`.
- Step 2: Create a variable named `expectedColor`. Set its value to `"red"`.
- Step 3: Write the code to check if the light color EXACTLY matches what we expect. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Red light = not ready yet (correct during setup!)
- Note:: Your output should show light is correct color (true)

---

**PART B: Unexpected green light!**

**PART B TRANSITION:**
"That light is correct! But wait - Machine 2's light is green already. That's wrong because we haven't finished checking everything!"

**PART B TITLE:** Unexpected green light!
**PART B CONTEXT:** A green light means "ready to start" but we're not ready yet! Let's catch this error.

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `lightColor`. Set its value to `"green"`.
- Step 2: Create a variable named `expectedColor`. Set its value to `"red"`.
- Step 3: Write the code to check if the light color does NOT match what we expect. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use !== to catch wrong color!
- Note:: Your output should show wrong light color (true - needs fixing!)

---

### EXERCISE 4: TOOL TYPE VERIFICATION 🔧

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 4
**EMOJI:** 🔧

**EXERCISE INTRODUCTION:**
"Different machines need different tools! Let's check that the CORRECT type of tool is at each station - scoops for measuring, not tongs or other tools!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and exact matching operators"

---

**PART A: Correct tool at station?**

**PART A TITLE:** Correct tool at station?
**PART A CONTEXT:** Station 1 needs scoops for measuring popcorn - not tongs or spoons!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `toolType`. Set its value to `"scoop"`.
- Step 2: Create a variable named `correctTool`. Set its value to `"scoop"`.
- Step 3: Write the code to check if the tool type EXACTLY matches the correct tool. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Tool type must be EXACTLY "scoop" - not similar tools!
- Note:: Your output should show correct tool (true)

---

**PART B: Wrong tool detected!**

**PART B TRANSITION:**
"Perfect! Station 1 has scoops. But someone just brought tongs to Station 2 - those are for a different machine!"

**PART B TITLE:** Wrong tool detected!
**PART B CONTEXT:** If the wrong tool type is at a station, we need to swap it for the correct one!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `toolType`. Set its value to `"tongs"`.
- Step 2: Create a variable named `correctTool`. Set its value to `"scoop"`.
- Step 3: Write the code to check if the tool type does NOT match the correct tool. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use !== to catch wrong tools!
- Note:: Your output should show wrong tool (true - needs replacing!)

---

### EXERCISE 5: LIGHTNING PANEL CHECK ⚡

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 5
**EMOJI:** ⚡

**EXERCISE INTRODUCTION:**
"Before we finish checking Machine 1, let's verify the lightning panel shows the machine is connected to electricity!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and exact matching operators"

---

**PART A: Is lightning panel on?**

**PART A TITLE:** Is lightning panel on?
**PART A CONTEXT:** The lightning panel should show "on" if the machine is connected to electricity correctly!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `lightningPanel`. Set its value to `"on"`.
- Step 2: Create a variable named `expectedStatus`. Set its value to `"on"`.
- Step 3: Write the code to check if the lightning panel EXACTLY matches what we expect. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Lightning panel "on" means machine has electricity!
- Note:: Your output should show correct status (true)

---

**PART B: Lightning panel off!**

**PART B TRANSITION:**
"Perfect! Machine 1 has electricity. But we just noticed Machine 3's lightning panel is OFF - that's a problem that needs fixing!"

**PART B TITLE:** Lightning panel off!
**PART B CONTEXT:** If the lightning panel is off, the machine might not be connected! Let's catch this.

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `lightningPanel`. Set its value to `"off"`.
- Step 2: Create a variable named `expectedStatus`. Set its value to `"on"`.
- Step 3: Write the code to check if the lightning panel does NOT match what we expect. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Use !== to catch electricity problems!
- Note:: Your output should show wrong status (true - check the connection!)

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
- [ ] Section name is "conditionsPart2"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables match the ones specified
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: conditionsPart2-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="conditionsPart2"
- [ ] Image filename and alt text match
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1: Part A AND Part B Step 4 show complete code
- [ ] Exercise 2+: Final step references Exercise 1 Step 4
- [ ] Part A has engaging context paragraph
- [ ] Part B has engaging context paragraph
- [ ] Expected outputs are realistic and clear
- [ ] No overly technical language
- [ ] Avoid "student" - use "children" or "you"

---

END OF MODULE 3 CONDITIONS PART 2 SPECIFICATIONS
