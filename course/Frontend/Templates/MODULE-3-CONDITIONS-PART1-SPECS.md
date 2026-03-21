# module 3 - conditions part 1 - exercise specifications
## Ready-to-Generate Exercise Templates

**Created:** February 2026
**Purpose:** Pre-filled specifications for all 35 Conditions exercises so AI generates EXACTLY what's needed without deviations

**HOW TO USE THIS DOCUMENT:**
1. Copy ONE exercise specification at a time
2. Give it to DeepSeek with instruction: "Generate the HTML for this exercise following the EXERCISE-TEMPLATE-MASTER.md structure"
3. DeepSeek outputs the complete HTML
4. Quick review (should be perfect!)
5. Copy into your HTML file
6. Move to next exercise

---

## CONDITIONS PART 1 (>, <) - 5 EXERCISES

### EXERCISE 1: GREAT HALL HEADCOUNT 👥

**SECTION NAME:** conditionsPart1
**EXERCISE NUMBER:** 1
**EMOJI:** 👥

**EXERCISE INTRODUCTION:**
"The production manager needs at least 15 children to run the production line safely. Let's check if we have enough helpers today and make sure we're not over capacity!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators"

---

**PART A: Checking if we have enough helpers**

**PART A TITLE:** Checking if we have enough helpers

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `childrenPresent`. Set its value to `18`.
- Step 2: Create a variable named `minimumRequired`. Set its value to `15`.
- Step 3: Use `console.log()` to check: Is `childrenPresent` greater than `minimumRequired`?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`We have ${childrenPresent} children. Minimum required is ${minimumRequired}.`);
console.log(childrenPresent > minimumRequired);
```

**PART A NOTES:**
- Note:: The > operator returns true if the left side is greater than the right side!
- Note:: Your output should show: "We have 18 children. Minimum required is 15." followed by "true"

---

**PART B: Checking workspace capacity**

**PART B TRANSITION:**
"Great! We have enough helpers. Now let's make sure we're not OVER capacity. Safety rules say maximum 30 children in the work area!"

**PART B TITLE:** Checking workspace capacity

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `childrenPresent`. Set its value to `18`.
- Step 2: Create a variable named `maximumCapacity`. Set its value to `30`.
- Step 3: Look at the image above to see how comparison operators work. Now write the code to check if `childrenPresent` is less than `maximumCapacity`. If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: The < operator checks if the left side is smaller than the right side
- Note:: Your output should show: "We have 18 children. Maximum capacity is 30." followed by "true"

---

### EXERCISE 2: SAFETY GEAR DISTRIBUTION 🦺

**SECTION NAME:** conditionsPart1
**EXERCISE NUMBER:** 2
**EMOJI:** 🦺

**EXERCISE INTRODUCTION:**
"Before anyone enters the production area, we need to make sure we have enough safety equipment for everyone! Every child needs a safety vest and children with long hair need hair nets."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators"

---

**PART A: Enough safety vests available**

**PART A TITLE:** Enough safety vests available

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `vestsAvailable`. Set its value to `25`.
- Step 2: Create a variable named `childrenPresent`. Set its value to `18`.
- Step 3: Use `console.log()` to check: Do we have more vests than children?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Vests available: ${vestsAvailable}. Children present: ${childrenPresent}.`);
console.log(vestsAvailable > childrenPresent);
```

**PART A NOTES:**
- Note:: We need MORE vests than children to have enough for everyone
- Note:: Your output should show: "Vests available: 25. Children present: 18." followed by "true"

---

**PART B: Hair net requirements**

**PART B TRANSITION:**
"Perfect! We have enough vests. Now let's check hair nets. Children with long hair must wear hair nets in the production area."

**PART B TITLE:** Hair net requirements

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `hairNets`. Set its value to `12`.
- Step 2: Create a variable named `childrenWithLongHair`. Set its value to `8`.
- Step 3: Look at the image above to see how comparison operators work. Now write the code to check if we have more hair nets than children with long hair. If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Use the > operator to compare quantities
- Note:: Your output should show we have enough hair nets (true)

---

### EXERCISE 3: WORK STATION SETUP 🛠️

**SECTION NAME:** conditionsPart1
**EXERCISE NUMBER:** 3
**EMOJI:** 🛠️

**EXERCISE INTRODUCTION:**
"The Great Hall has many work stations! Each station needs to be cleaned and set up before children can start working. Let's check if we have enough stations ready and enough clipboards for everyone."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators"

---

**PART A: Are stations ready**

**PART A TITLE:** Are stations ready

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `stationsReady`. Set its value to `10`.
- Step 2: Create a variable named `stationsNeeded`. Set its value to `8`.
- Step 3: Use `console.log()` to check: Do we have more stations ready than needed?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Stations ready: ${stationsReady}. Stations needed: ${stationsNeeded}.`);
console.log(stationsReady > stationsNeeded);
```

**PART A NOTES:**
- Note:: We need AT LEAST as many stations ready as we need
- Note:: Your output should show: "Stations ready: 10. Stations needed: 8." followed by "true"

---

**PART B: Clipboards for task lists**

**PART B TRANSITION:**
"Excellent! All the stations are ready. Each station needs a clipboard with today's task list. Do we need more clipboards?"

**PART B TITLE:** Clipboards for task lists

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `clipboards`. Set its value to `6`.
- Step 2: Create a variable named `stationsNeeded`. Set its value to `8`.
- Step 3: Look at the image above to see how comparison operators work. Now write the code to check if clipboards is LESS than stationsNeeded (meaning we need more!). If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Use the < operator - if true, we need more clipboards!
- Note:: Your output should show we need more clipboards (true)

---

### EXERCISE 4: CHECKING BAGS AT STATION 1 👜

**SECTION NAME:** conditionsPart1
**EXERCISE NUMBER:** 4
**EMOJI:** 👜

**EXERCISE INTRODUCTION:**
"Now we're helping check Machine 1! The assistant needs to know if everything is ready at the station. First, let's check the bags - we can't package popcorn without them!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators"

---

**PART A: Are there bags at station 1?**

**PART A TITLE:** Are there bags at station 1?
**PART A CONTEXT:** The first thing to check - are bags even here yet?

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `bagsAtStation`. Set its value to `25`.
- Step 2: Create a variable named `minimumNeeded`. Set its value to `0`.
- Step 3: Use `console.log()` to check: Are there MORE bags at the station than zero? (Are bags present?)
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Bags at station: ${bagsAtStation}. We need at least some bags (more than ${minimumNeeded}).`);
console.log(bagsAtStation > minimumNeeded);
```

**PART A NOTES:**
- Note:: If bagsAtStation > 0, then YES, bags are there!
- Note:: Your output should show: "Bags at station: 25. We need at least some bags (more than 0)." followed by "true"

---

**PART B: How many bags? Do we have enough?**

**PART B TRANSITION:**
"Good! Bags are here. But do we have ENOUGH bags for today's production?"

**PART B TITLE:** How many bags? Do we have enough?
**PART B CONTEXT:** Now let's count and make sure we have plenty!

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `bagsAtStation`. Set its value to `25`.
- Step 2: Create a variable named `bagsNeededToday`. Set its value to `20`.
- Step 3: Write the code to check if we have MORE bags than we need today. If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: We need MORE bags available than needed for today's production!
- Note:: Your output should show we have enough bags (true)

---

### EXERCISE 5: CHECKING BOXES AT STATION 1 📦

**SECTION NAME:** conditionsPart1
**EXERCISE NUMBER:** 5
**EMOJI:** 📦

**EXERCISE INTRODUCTION:**
"Great work checking the bags! Now we need to check the boxes - but wait, where are they? Let's help figure out what's going on!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators"

---

**PART A: Are there boxes at station 1?**

**PART A TITLE:** Are there boxes at station 1?
**PART A CONTEXT:** We need boxes to pack the popcorn bags! Let's check if they're here yet.

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `boxesAtStation`. Set its value to `0`.
- Step 2: Create a variable named `minimumNeeded`. Set its value to `0`.
- Step 3: Use `console.log()` to check: Are there MORE boxes at the station than zero?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Boxes at station: ${boxesAtStation}. We need boxes (more than ${minimumNeeded}).`);
console.log(boxesAtStation > minimumNeeded);
```

**PART A NOTES:**
- Note:: Oh no! boxesAtStation is 0, so 0 > 0 is FALSE! No boxes yet!
- Note:: Your output should show: "Boxes at station: 0. We need boxes (more than 0)." followed by "false"

---

**PART B: Boxes arrived! Are they labeled?**

**PART B TRANSITION:**
"The assistant heard us and brought boxes over! Now let's make sure they're labeled with numbers."

**PART B TITLE:** Are the boxes labeled?
**PART B CONTEXT:** Boxes need labels with numbers on them! Let's check if they have numbers.

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `boxNumber`. Set its value to `1`.
- Step 2: Create a variable named `noLabel`. Set its value to `0`.
- Step 3: Write the code to check if the box number is GREATER than zero (meaning it has a label!). If you need help, check Exercise 1 Step 4 in Parts A and B — they show the complete working examples!

**PART B NOTES:**
- Note:: If boxNumber > 0, then yes, the box is labeled!
- Note:: Your output should show the boxes have labels (true)

---
- Step 3: Look at the image above to see how comparison operators work. Now write the code to check if supervisorsOnBreak is LESS than maxOnBreak (meaning we have enough coverage). If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: We need FEWER supervisors on break than the maximum allowed
- Note:: Your output should show we have good coverage (true)

---

## CONDITIONS PART 2 (===, !==) - 5 EXERCISES

### EXERCISE 1: BADGE STATION MATCHING 🎫

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 1
**EMOJI:** 🎫

**EXERCISE INTRODUCTION:**
"Every child has a colored badge showing which station they're assigned to! Blue badges work at Popping Station, Green badges at Flavoring Station, Yellow badges at Packaging Station. Let's make sure everyone is at the correct station!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators for exact matching"

---

**PART A: Correct station assignment**

**PART A TITLE:** Correct station assignment

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `badgeColor`. Set its value to `"blue"`.
- Step 2: Create a variable named `assignedStation`. Set its value to `"blue"`.
- Step 3: Use `console.log()` to check: Does the badge color EXACTLY match the station?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Badge color: ${badgeColor}. Assigned station: ${assignedStation}.`);
console.log(badgeColor === assignedStation);
```

**PART A NOTES:**
- Note:: The === operator checks for EXACT matches - spelling and case must match!
- Note:: Your output should show: "Badge color: blue. Assigned station: blue." followed by "true"

---

**PART B: Wrong station alert**

**PART B TRANSITION:**
"Perfect! Sarah is at the right station. But wait - Tom is at the packaging station but his badge says mixing. Let's check if this is wrong!"

**PART B TITLE:** Wrong station alert

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `currentStation`. Set its value to `"packaging"`.
- Step 2: Create a variable named `badgeStation`. Set its value to `"mixing"`.
- Step 3: Look at the image above to see how exact matching works. Now write the code to check if currentStation does NOT equal badgeStation (wrong station!). If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Use the !== operator to check if things DON'T match
- Note:: Your output should show they don't match (true - Tom is at the wrong station!)

---

### EXERCISE 2: EQUIPMENT VERIFICATION ✅

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 2
**EMOJI:** ✅

**EXERCISE INTRODUCTION:**
"Each child needs the correct size gloves and the right tools for their station! Let's verify that everyone has equipment that matches their requirements."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators for exact matching"

---

**PART A: Correct glove size**

**PART A TITLE:** Correct glove size

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `gloveSize`. Set its value to `"medium"`.
- Step 2: Create a variable named `sizeCard`. Set its value to `"medium"`.
- Step 3: Use `console.log()` to check: Does the glove size EXACTLY match the size card?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Glove size: ${gloveSize}. Size card shows: ${sizeCard}.`);
console.log(gloveSize === sizeCard);
```

**PART A NOTES:**
- Note:: Gloves must be the EXACT size shown on the card for safety!
- Note:: Your output should show they match perfectly (true)

---

**PART B: Incorrect tool alert**

**PART B TRANSITION:**
"Great! The gloves fit perfectly. But hold on - someone gave this station TONGS when they need SCOOPS! Let's catch that error."

**PART B TITLE:** Incorrect tool alert

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `toolProvided`. Set its value to `"tongs"`.
- Step 2: Create a variable named `toolNeeded`. Set its value to `"scoops"`.
- Step 3: Look at the image above to see how exact matching works. Now write the code to check if the wrong tool was provided. If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Use !== to detect when tools don't match!
- Note:: Your output should show wrong tool was given (true)

---

### EXERCISE 3: TASK LIST CONFIRMATION 📝

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 3
**EMOJI:** 📝

**EXERCISE INTRODUCTION:**
"Each child receives a task card with their assigned role. Let's verify that the task cards match their actual assignments and catch any task errors!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators for exact matching"

---

**PART A: Checking assigned task**

**PART A TITLE:** Checking assigned task

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `taskCard`. Set its value to `"Quality Control"`.
- Step 2: Create a variable named `assignedRole`. Set its value to `"Quality Control"`.
- Step 3: Use `console.log()` to check: Does the task card match the assigned role?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Task card: ${taskCard}. Assigned role: ${assignedRole}.`);
console.log(taskCard === assignedRole);
```

**PART A NOTES:**
- Note:: Task cards must EXACTLY match the role assignment!
- Note:: Your output should show perfect match (true)

---

**PART B: Detecting task errors**

**PART B TRANSITION:**
"Emma's assignment is correct! But Jake's clipboard says 'Cleaning' and production hasn't even started yet! Something's wrong."

**PART B TITLE:** Detecting task errors

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `clipboardTask`. Set its value to `"Cleaning"`.
- Step 2: Create a variable named `currentPhase`. Set its value to `"Production"`.
- Step 3: Look at the image above to see how exact matching works. Now write the code to check if there's a mismatch between clipboard and current phase. If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Use !== to detect phase mismatches!
- Note:: Your output should show they don't match (true - wrong task for this phase!)

---

### EXERCISE 4: MACHINE ASSIGNMENT 🤖

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 4
**EMOJI:** 🤖

**EXERCISE INTRODUCTION:**
"Each station operates a specific machine! Station 1 uses Machine A, Station 2 uses Machine B, and so on. We also need to verify that machines are set to the correct flavor for today's production."

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators for exact matching"

---

**PART A: Correct machine number**

**PART A TITLE:** Correct machine number

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `machineAssigned`. Set its value to `"Machine C"`.
- Step 2: Create a variable named `correctMachine`. Set its value to `"Machine C"`.
- Step 3: Use `console.log()` to check: Is the correct machine assigned to this station?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Machine assigned: ${machineAssigned}. Correct machine: ${correctMachine}.`);
console.log(machineAssigned === correctMachine);
```

**PART A NOTES:**
- Note:: Station 3 should always use Machine C - check for exact match!
- Note:: Your output should show correct machine is assigned (true)

---

**PART B: Machine error detection**

**PART B TRANSITION:**
"Perfect machine assignment! But wait - there's a problem. This machine is set to 'Caramel' flavor but today's order is for 'Butter' flavor!"

**PART B TITLE:** Machine error detection

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `machineSetting`. Set its value to `"Caramel"`.
- Step 2: Create a variable named `todaysFlavor`. Set its value to `"Butter"`.
- Step 3: Look at the image above to see how exact matching works. Now write the code to detect if the machine is set to the wrong flavor. If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Use !== to catch configuration errors!
- Note:: Your output should show wrong flavor setting (true)

---

### EXERCISE 5: SHIFT SCHEDULE ACCURACY 📅

**SECTION NAME:** conditionsPart2
**EXERCISE NUMBER:** 5
**EMOJI:** 📅

**EXERCISE INTRODUCTION:**
"The factory runs on a strict schedule! We have morning shift, afternoon shift, and night shift. Let's verify everyone is on the correct shift and catch any scheduling confusion!"

**IMAGE FILENAME:** first-steps-console.jpg
**IMAGE ALT TEXT:** "Using console and comparison operators for exact matching"

---

**PART A: Correct shift confirmation**

**PART A TITLE:** Correct shift confirmation

**PART A INSTRUCTIONS:**
- Step 1: Create a variable named `currentShift`. Set its value to `"morning"`.
- Step 2: Create a variable named `scheduledShift`. Set its value to `"morning"`.
- Step 3: Use `console.log()` to check: Is everyone on the correct shift?
- Step 4: Write the full code to display the result:

**STEP 4 COMPLETE CODE:**
```javascript
console.log(`Current shift: ${currentShift}. Scheduled shift: ${scheduledShift}.`);
console.log(currentShift === scheduledShift);
```

**PART A NOTES:**
- Note:: Shift names must match EXACTLY - morning, afternoon, or night!
- Note:: Your output should show shifts match (true)

---

**PART B: Break time mismatch**

**PART B TRANSITION:**
"Everyone's on the right shift! But someone is confused - they think it's break time but we're supposed to be in production!"

**PART B TITLE:** Break time mismatch

**PART B INSTRUCTIONS:**
- Step 1: Create a variable named `currentActivity`. Set its value to `"break"`.
- Step 2: Create a variable named `scheduledActivity`. Set its value to `"production"`.
- Step 3: Look at the image above to see how exact matching works. Now write the code to detect if activities don't match. If you need help, check Exercise 1 Part A — it shows the complete working example!

**PART B NOTES:**
- Note:: Use !== to catch scheduling confusion!
- Note:: Your output should show activities don't match (true)

---

## CONDITIONS PART 3 (<=, >=) - 5 EXERCISES

*[Due to length, I'll continue with abbreviated format for remaining parts - let me know if you want full detail for Parts 3-7]*

### EXERCISE 1: CORN KERNEL INVENTORY 🌽
**SECTION:** conditionsPart3 | **NUMBER:** 1
**Part A:** Check if cornBags >= 50 (minimum required)
**Part B:** Check if cornBags <= 200 (storage capacity)

### EXERCISE 2: OIL CONTAINERS 🛢️
**SECTION:** conditionsPart3 | **NUMBER:** 2
**Part A:** Check if oilContainers >= (batches * 5)
**Part B:** Check if oilContainers <= 50 (shelf capacity)

### EXERCISE 3: FLAVORING SUPPLIES 🍬
**SECTION:** conditionsPart3 | **NUMBER:** 3
**Part A:** Check if sweetFlavoring >= 10
**Part B:** Check if bottlesOnShelf <= 25

### EXERCISE 4: SALT PACKAGES 🧂
**SECTION:** conditionsPart3 | **NUMBER:** 4
**Part A:** Check if saltPackages >= 20
**Part B:** Check if saltPackages <= 35 (cart limit)

### EXERCISE 5: COMPLETE INVENTORY ✅
**SECTION:** conditionsPart3 | **NUMBER:** 5
**Part A:** Multiple minimums check (corn >= 50, oil >= 40, salt >= 20)
**Part B:** Multiple capacity checks (all <= their max)

---

*Would you like me to continue with full detailed specs for Parts 4-7 (if/else, else if, &&, ||)?  
Or is this format sufficient and I should complete all 35 in this style?*

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

END OF DOCUMENT (Parts 4-7 pending - let me know format preference)
