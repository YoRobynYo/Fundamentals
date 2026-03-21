# module 3 - conditions part 4 - exercise specifications
## Ready-to-Generate Exercise Templates

**Created:** February 25, 2026
**Purpose:** Pre-filled specifications for Conditions Part 4 (if/else with &&) exercises - combined condition checks

**HOW TO USE THIS DOCUMENT:**
1. Copy ONE exercise specification at a time
2. Give it to your AI assistant with instruction: "Generate the HTML for this exercise following the EXERCISE-TEMPLATE-MASTER.md structure"
3. AI outputs the complete HTML
4. Review and adjust as needed
5. Copy into your HTML file
6. Move to next exercise

---

## CONDITIONS PART 4 (if/else with &&) - 5 EXERCISES

**CONCEPT:** Making decisions when BOTH conditions must be true - checking and reporting

**CONTEXT:** Children are helping check things and REPORT what they find - not fixing or operating, just checking and telling!

---

### EXERCISE 1: BAGS AND BOXES READY 📦

**SECTION NAME:** conditionsPart4
**EXERCISE NUMBER:** 1
**EMOJI:** 📦

**EXERCISE INTRODUCTION:**
"The control panel has lights that show if Machine 1 is ready! The light turns green when BOTH bags and boxes are in place. Let's help check and see what the light should show!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using if/else with combined conditions"

---

**PART A: Control panel green light**

**PART A TITLE:** Control panel green light
**PART A CONTEXT:** The green light only turns on when bags are under the chute AND boxes are in place - both must be ready!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `bagsReady`. Set its value to `true`.
- Step 2: Create a variable named `boxesReady`. Set its value to `true`.
- Step 3: Use an if/else statement to check: If BOTH bags are ready AND boxes are ready, report "Green light - ready to start!", else report "Red light - something needs fixing"
- Step 4: Write the full code:

**STEP 4 COMPLETE CODE:**
```javascript
let bagsReady = true;
let boxesReady = true;

if (bagsReady && boxesReady) {
  console.log("Green light - ready to start!");
} else {
  console.log("Red light - something needs fixing");
}
```

**PART A NOTES:**
- Note:: The && operator means BOTH conditions must be true!
- Note:: Your output should show: "Green light - ready to start!"

---

**PART B: Something needs fixing**

**PART B TRANSITION:**
"Perfect! When both are ready, we get the green light. But what if bags are ready but boxes aren't? Let's check!"

**PART B TITLE:** Something needs fixing
**PART B CONTEXT:** If even ONE thing isn't ready, the light stays red and we need to report what's wrong!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `bagsReady`. Set its value to `true`.
- Step 2: Create a variable named `boxesReady`. Set its value to `false`.
- Step 3: Use an if/else statement to check both conditions and report the light status. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: If even one is false, the whole && check is false!
- Note:: Your output should show: "Red light - something needs fixing"

---

### EXERCISE 2: HAIR NETS AND APRONS CHECK 🦺

**SECTION NAME:** conditionsPart4
**EXERCISE NUMBER:** 2
**EMOJI:** 🦺

**EXERCISE INTRODUCTION:**
"Before entering the Grand Hall, everyone needs hair nets AND aprons! Let's check if we have enough of both so children can enter safely."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using if/else with combined conditions"

---

**PART A: Can enter Grand Hall**

**PART A TITLE:** Can enter Grand Hall
**PART A CONTEXT:** Children need BOTH hair nets (for long hair) AND aprons (to keep clean). If we have enough of both, they can enter!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `enoughHairNets`. Set its value to `true`.
- Step 2: Create a variable named `enoughAprons`. Set its value to `true`.
- Step 3: Use an if/else statement to check: If we have enough hair nets AND enough aprons, report "Children can enter Grand Hall!", else report "Wait in hallway - need more gear". If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Both types of safety gear must be available!
- Note:: Your output should show: "Children can enter Grand Hall!"

---

**PART B: Wait for missing gear**

**PART B TRANSITION:**
"Great! With both types of gear ready, children can enter. But what if we're missing hair nets?"

**PART B TITLE:** Wait for missing gear
**PART B CONTEXT:** If we don't have enough of BOTH items, children must wait until the assistant brings more!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `enoughHairNets`. Set its value to `false`.
- Step 2: Create a variable named `enoughAprons`. Set its value to `true`.
- Step 3: Use an if/else statement to check both conditions and report if children can enter or must wait. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Missing even one type means children must wait!
- Note:: Your output should show: "Wait in hallway - need more gear"

---

### EXERCISE 3: SCALE STATUS CHECK ⚖️

**SECTION NAME:** conditionsPart4
**EXERCISE NUMBER:** 3
**EMOJI:** ⚖️

**EXERCISE INTRODUCTION:**
"The weighing scale needs to be both calibrated AND not overloaded before we can use it! Let's check both conditions and report if it's ready."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using if/else with combined conditions"

---

**PART A: Scale ready to use**

**PART A TITLE:** Scale ready to use
**PART A CONTEXT:** The scale must be calibrated (showing zero) AND not overloaded - both checks must pass!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `scaleCalibrated`. Set its value to `true`.
- Step 2: Create a variable named `scaleNotOverloaded`. Set its value to `true`.
- Step 3: Use an if/else statement to check: If scale is calibrated AND not overloaded, report "Scale ready to use!", else report "Call assistant for help". If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Both conditions must be true for safe weighing!
- Note:: Your output should show: "Scale ready to use!"

---

**PART B: Scale needs help**

**PART B TRANSITION:**
"Perfect! When both checks pass, the scale is ready. But what if it's calibrated but overloaded?"

**PART B TITLE:** Scale needs help
**PART B CONTEXT:** If EITHER check fails, we can't use the scale and need the assistant's help!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `scaleCalibrated`. Set its value to `true`.
- Step 2: Create a variable named `scaleNotOverloaded`. Set its value to `false`.
- Step 3: Use an if/else statement to check both conditions and report the scale status. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: If either condition is false, we need help!
- Note:: Your output should show: "Call assistant for help"

---

### EXERCISE 4: TOOL CHECK 🔧

**SECTION NAME:** conditionsPart4
**EXERCISE NUMBER:** 4
**EMOJI:** 🔧

**EXERCISE INTRODUCTION:**
"The station needs the correct TYPE of tool AND enough of them! Let's check both things and report if the station is ready."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using if/else with combined conditions"

---

**PART A: Station ready**

**PART A TITLE:** Station ready
**PART A CONTEXT:** We need scoops (correct type) AND at least 3 of them (enough count) - both must be true!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `correctToolType`. Set its value to `true`.
- Step 2: Create a variable named `enoughTools`. Set its value to `true`.
- Step 3: Use an if/else statement to check: If correct tool type AND enough tools, report "Station ready - let's work!", else report "Get correct tools from storage". If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Both the type and quantity must be correct!
- Note:: Your output should show: "Station ready - let's work!"

---

**PART B: Need correct tools**

**PART B TRANSITION:**
"Excellent! With the right tools in the right amount, we can work. But what if we have scoops but not enough of them?"

**PART B TITLE:** Need correct tools
**PART B CONTEXT:** If EITHER the type is wrong OR we don't have enough, we need to get tools from storage!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `correctToolType`. Set its value to `true`.
- Step 2: Create a variable named `enoughTools`. Set its value to `false`.
- Step 3: Use an if/else statement to check both conditions and report the tool status. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Both conditions must pass to be ready!
- Note:: Your output should show: "Get correct tools from storage"

---

### EXERCISE 5: GLOVES AND GOGGLES 🧤🥽

**SECTION NAME:** conditionsPart4
**EXERCISE NUMBER:** 5
**EMOJI:** 🧤🥽

**EXERCISE INTRODUCTION:**
"Personal safety is important! Before helping at the machine, children need BOTH gloves AND goggles. Let's do the final safety check!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using if/else with combined conditions"

---

**PART A: Can help at machine**

**PART A TITLE:** Can help at machine
**PART A CONTEXT:** Children need BOTH gloves (to protect hands) AND goggles (to protect eyes) before they can help!

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `hasGloves`. Set its value to `true`.
- Step 2: Create a variable named `hasGoggles`. Set its value to `true`.
- Step 3: Use an if/else statement to check: If has gloves AND has goggles, report "Ready to help - stay safe!", else report "Collect missing items first". If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART A NOTES:**
- Note:: Both safety items are required - no exceptions!
- Note:: Your output should show: "Ready to help - stay safe!"

---

**PART B: Missing safety items**

**PART B TRANSITION:**
"Perfect! With both safety items, children can help safely. But what if someone has gloves but forgot their goggles?"

**PART B TITLE:** Missing safety items
**PART B CONTEXT:** If even ONE safety item is missing, children cannot help until they collect it!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `hasGloves`. Set its value to `true`.
- Step 2: Create a variable named `hasGoggles`. Set its value to `false`.
- Step 3: Use an if/else statement to check both conditions and report if children can help or must collect items. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: Safety first - both items required!
- Note:: Your output should show: "Collect missing items first"

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
- [ ] Section name is "conditionsPart4"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables match the ones specified
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: conditionsPart4-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="conditionsPart4"
- [ ] Image filename and alt text match
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1: Part A AND Part B Step 4 show complete code with if/else
- [ ] Exercise 2+: Final step references Exercise 1 Step 4
- [ ] Part A has engaging context paragraph
- [ ] Part B has engaging context paragraph
- [ ] Uses && operator correctly
- [ ] if/else structure is clear
- [ ] Children are CHECKING and REPORTING, not operating!
- [ ] Uses child-appropriate language
- [ ] Avoid "student" - use "children" or "you"

---

END OF MODULE 3 CONDITIONS PART 4 SPECIFICATIONS
