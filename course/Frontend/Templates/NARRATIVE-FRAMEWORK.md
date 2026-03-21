# POPCORN FACTORY NARRATIVE FRAMEWORK
## JavaScript Fundamentals Course - Story Template

**Created:** February 2026
**Purpose:** Provide the narrative structure and storyline for exercises, mapping JavaScript concepts to factory exploration

---

## OVERVIEW: THE JOURNEY

Children are visiting the Popcorn Factory and learning how it works by helping with various tasks. Each module represents a deeper level of understanding both the factory AND programming concepts.

**The Progression:**
1. **Variables** → Learning the MAP (where is everything?)
2. **Operators** → Counting SUPPLIES (what quantities?)
3. **Conditions** → Understanding WORKFLOW (when, how, why?)
4. **Loops** → REPETITIVE tasks (doing things over and over)
5. **Functions** → SPECIALIZED jobs (specific tasks we do often)

---

## MODULE 1: VARIABLES 🗺️
### Theme: Learning the MAP - Where is Everything?

**Opening Narrative:**
"Welcome to the Popcorn Factory! 🍿 Today is your first day, and there's SO much to see! Before we can help with any tasks, we need to learn where everything is located. The factory supervisor has asked you to help map out the different areas. Let's use variables to remember where things are!"

**Chapter Context:**
Children are being given a tour and need to store/remember information about locations, departments, and what's where. Variables help them "save" this information.

**Exercises 1-5: Getting Oriented**

### Exercise 1: Your First Batch Report
**Context:** "The factory supervisor needs a quick report on this morning's first batch. Let's learn how to store and display information!"
**Task:** Store batch information (number, quantity, flavor) and display it
**Learning:** Creating variables, storing values, using template literals

### Exercise 2: Mapping Storage Areas
**Context:** "Now let's explore the storage room! We need to remember what's stored where."
**Task:** Store room names, shelf locations, and what's on each shelf
**Learning:** Multiple variables, organizing information

### Exercise 3: Department Labels
**Context:** "The factory has many departments. Let's label each one so we don't get lost!"
**Task:** Store department names and their purposes
**Learning:** Using descriptive variable names, storing text

### Exercise 4: Team Member Directory
**Context:** "You'll be working with many people today! Let's create a directory of who works where."
**Task:** Store names, roles, and locations of team members
**Learning:** Organizing related information with variables

### Exercise 5: Equipment Locations
**Context:** "The factory has lots of machines! Let's map where each important piece of equipment is."
**Task:** Store machine names and their locations
**Learning:** Consolidating all variable skills, building a complete map

**Closing Narrative:**
"Great work! You now know where everything is in the factory. The supervisor is impressed with your mapping skills! Tomorrow, we'll start counting supplies and helping with inventory. See you in the morning! 🍿"

---

## MODULE 2: OPERATORS ➕➖✖️➗
### Theme: Counting SUPPLIES - What Quantities Do We Have?

**Opening Narrative:**
"Good morning! Welcome back to the Popcorn Factory! Yesterday you learned WHERE everything is. Today, you're going to explore each area on your own and COUNT what's inside! The inventory manager needs your help calculating supplies. Let's start counting!"

**Chapter Context:**
Children explore different areas independently and calculate quantities, totals, and amounts. Math operators help them work with numbers.

**Exercises 1-5: Taking Inventory**

### Exercise 1: Counting Corn Kernels
**Context:** "The raw materials storage room has bags of corn kernels. We need to know our total supply!"
**Task:** Add up bags from different shelves to get total
**Learning:** Addition operator (+)

### Exercise 2: Bags Used vs. Bags Remaining
**Context:** "Yesterday we used some bags. Let's calculate how many we have left."
**Task:** Subtract bags used from total supply
**Learning:** Subtraction operator (-)

### Exercise 3: Cases for Shipping
**Context:** "We need to pack individual bags into cases. How many cases will we need?"
**Task:** Calculate number of cases needed (bags ÷ bags per case)
**Learning:** Division operator (/)

### Exercise 4: Flavoring Batches
**Context:** "We're making multiple batches today. How much flavoring total?"
**Task:** Multiply flavoring per batch × number of batches
**Learning:** Multiplication operator (*)

### Exercise 5: Complete Inventory Report
**Context:** "The inventory manager needs a full report with all calculations!"
**Task:** Use all operators to calculate totals, costs, and quantities
**Learning:** Combining multiple operators, order of operations

**Closing Narrative:**
"Excellent counting! The inventory manager says you're a natural at calculations. Now that you know WHERE things are and HOW MUCH we have, tomorrow we'll learn about the PROCESS of making popcorn. That's when things get really interesting! 🍿"

---

## MODULE 3: CONDITIONS 🔀
### Theme: Understanding the WORKFLOW - When, How, and Why?

**Opening Narrative:**
"Welcome to your third day at the Popcorn Factory! You know where everything is, and you can count supplies. Now it's time to learn HOW we actually MAKE popcorn! Today, you'll help with production from start to finish. The production manager will guide you through each step. Let's head to the Great Hall where all the machines are! 🍿"

---

### CONDITIONS PART 1 (>, <): Arrival & Preparation Checks
**Concept:** Greater than / Less than comparisons
**Context:** "Before we start production, we need to make sure everything is ready. Are there enough children to help? Is the work area prepared? Let's do our first checks!"

**Exercises 1-5:**

### Exercise 1: Great Hall Headcount 👥
**Part A: Checking if we have enough helpers**
- Context: "The production manager needs at least 15 children to run the production line safely."
- Task: Check if children present > minimum required (15)
- Variables: childrenPresent, minimumRequired
- Learning: Using > to verify we have enough

**Part B: Checking workspace capacity**
- Context: "We also can't have TOO many people - safety rules say maximum 30 in the work area."
- Task: Check if children present < maximum allowed (30)
- Variables: childrenPresent, maximumCapacity
- Learning: Using < to verify we're under limit

### Exercise 2: Safety Gear Distribution 🦺
**Part A: Enough safety vests available**
- Context: "Every child needs a safety vest before entering the production area."
- Task: Check if vests available > children present
- Variables: vestsAvailable, childrenPresent
- Learning: Comparing quantities to ensure enough supply

**Part B: Hair net requirements**
- Context: "Children with long hair need hair nets. Do we have enough?"
- Task: Check if hairNets > childrenWithLongHair
- Variables: hairNets, childrenWithLongHair
- Learning: Specific quantity comparisons

### Exercise 3: Work Station Setup 🛠️
**Part A: Are stations ready**
- Context: "Each work station needs to be cleaned and ready. Count how many are ready!"
- Task: Check if stationsReady > stationsNeeded
- Variables: stationsReady, stationsNeeded
- Learning: Comparing preparation status

**Part B: Clipboards for task lists**
- Context: "Each station needs a clipboard with today's task list."
- Task: Check if clipboards < stationsNeeded (do we need more?)
- Variables: clipboards, stationsNeeded
- Learning: Identifying shortages using <

### Exercise 4: Time Check ⏰
**Part A: Are we on schedule**
- Context: "Production must start by 9:00 AM. What time is it now?"
- Task: Check if currentTime < startTime (are we early?)
- Variables: currentTime (8:45), startTime (9:00)
- Learning: Comparing time values

**Part B: Break time planning**
- Context: "Children can't work more than 2 hours without a break."
- Task: Check if workTime > maxWorkTime (2 hours)
- Variables: workTime, maxWorkTime
- Learning: Safety limit comparisons

### Exercise 5: Supervisor Availability 👨‍🏫
**Part A: Experience level check**
- Context: "The shift supervisor must have more than 5 years experience."
- Task: Check if supervisorExperience > minimumYears (5)
- Variables: supervisorExperience, minimumYears
- Learning: Qualification verification

**Part B: Assistant availability**
- Context: "We need fewer than 3 supervisors on break at any time."
- Task: Check if supervisorsOnBreak < maxOnBreak (3)
- Variables: supervisorsOnBreak, maxOnBreak
- Learning: Maximum limit checking

**Transition to Part 2:**
"Excellent! Everyone is here, we have enough equipment, and we're on schedule. Now let's get everyone to their assigned stations and make sure everything EXACTLY matches what it should be! 📋"

---

### CONDITIONS PART 2 (===, !==): Getting Organized - Exact Matching
**Concept:** Equal to / Not equal to comparisons
**Context:** "Now we're assigning children to stations. Each child has a colored badge that shows which station they're assigned to. We need to make sure everyone is at the CORRECT station!"

**Exercises 1-5:**

### Exercise 1: Badge Station Matching 🎫
**Part A: Correct station assignment**
- Context: "Sarah has a BLUE badge. Is she at the correct station?"
- Task: Check if badgeColor === assignedStation ("blue" === "blue")
- Variables: badgeColor, assignedStation
- Learning: Using === for exact matching

**Part B: Wrong station alert**
- Context: "Tom is at the packaging station but his badge says mixing. Is this wrong?"
- Task: Check if currentStation !== badgeStation
- Variables: currentStation, badgeStation
- Learning: Using !== to identify mismatches

### Exercise 2: Equipment Verification ✅
**Part A: Correct glove size**
- Context: "Each child needs gloves that match their size card."
- Task: Check if gloveSize === sizeCard
- Variables: gloveSize ("medium"), sizeCard ("medium")
- Learning: Exact equipment matching

**Part B: Incorrect tool alert**
- Context: "This station needs scoops, not tongs!"
- Task: Check if toolProvided !== toolNeeded
- Variables: toolProvided, toolNeeded
- Learning: Identifying wrong equipment

### Exercise 3: Task List Confirmation 📝
**Part A: Checking assigned task**
- Context: "Emma's task card says 'Quality Control'. Is that her assigned role?"
- Task: Check if taskCard === assignedRole
- Variables: taskCard, assignedRole
- Learning: Role verification

**Part B: Detecting task errors**
- Context: "Jake's clipboard says 'Cleaning' but production hasn't started yet!"
- Task: Check if clipboardTask !== currentPhase
- Variables: clipboardTask, currentPhase
- Learning: Phase mismatch detection

### Exercise 4: Machine Assignment 🤖
**Part A: Correct machine number**
- Context: "Station 3 should be operating Machine C. Let's verify!"
- Task: Check if machineAssigned === correctMachine
- Variables: machineAssigned, correctMachine
- Learning: Equipment assignment verification

**Part B: Machine error detection**
- Context: "Warning! This machine is set to 'Caramel' but we're making 'Butter' flavor today!"
- Task: Check if machineSetting !== todaysFlavor
- Variables: machineSetting, todaysFlavor
- Learning: Configuration error detection

### Exercise 5: Shift Schedule Accuracy 📅
**Part A: Correct shift confirmation**
- Context: "Is this the morning shift or afternoon shift?"
- Task: Check if currentShift === scheduledShift
- Variables: currentShift, scheduledShift
- Learning: Schedule verification

**Part B: Break time mismatch**
- Context: "It's not break time yet! Someone's confused."
- Task: Check if currentActivity !== scheduledActivity
- Variables: currentActivity ("break"), scheduledActivity ("production")
- Learning: Activity status checking

**Transition to Part 3:**
"Perfect! Everyone is at their correct station with the right equipment. Now let's head to the Ingredients Room and check our supplies! We need to make sure we have AT LEAST enough of everything! 📦"

---

### CONDITIONS PART 3 (<=, >=): Ingredients Room - Threshold Checks
**Concept:** Greater/Less than or equal to
**Context:** "Welcome to the Ingredients Room! Here we store all the corn, oil, salt, and flavorings. Before we start production, we need to check if we have ENOUGH supplies (>=) and that we're not OVER capacity (<=)."

**Exercises 1-5:**

### Exercise 1: Corn Kernel Inventory 🌽
**Part A: Minimum corn requirement**
- Context: "We need at least 50 bags of corn kernels for today's production."
- Task: Check if cornBags >= minimumRequired (50)
- Variables: cornBags, minimumRequired
- Learning: Using >= for minimum requirements

**Part B: Storage capacity limit**
- Context: "The corn storage area can hold a maximum of 200 bags safely."
- Task: Check if cornBags <= maximumCapacity (200)
- Variables: cornBags, maximumCapacity
- Learning: Using <= for maximum capacity

### Exercise 2: Oil Containers 🛢️
**Part A: Sufficient oil supply**
- Context: "Each batch needs 5 containers of popping oil. We're making 8 batches today."
- Task: Check if oilContainers >= (batchCount * 5)
- Variables: oilContainers, batchCount
- Learning: Calculated minimum requirements

**Part B: Oil storage shelf limit**
- Context: "The oil shelf can safely hold up to 50 containers."
- Task: Check if oilContainers <= shelfCapacity (50)
- Variables: oilContainers, shelfCapacity
- Learning: Weight/space capacity limits

### Exercise 3: Flavoring Supplies 🍬
**Part A: Sweet flavoring check**
- Context: "We need at least 10 bottles of sweet flavoring for today's orders."
- Task: Check if sweetFlavoring >= requiredBottles (10)
- Variables: sweetFlavoring, requiredBottles
- Learning: Minimum inventory checking

**Part B: Shelf organization**
- Context: "Each flavor shelf should have no more than 25 bottles to prevent crowding."
- Task: Check if bottlesOnShelf <= maxPerShelf (25)
- Variables: bottlesOnShelf, maxPerShelf
- Learning: Organization capacity rules

### Exercise 4: Salt Packages 🧂
**Part A: Meeting production needs**
- Context: "We need at least 20 salt packages to meet today's production quota."
- Task: Check if saltPackages >= productionQuota (20)
- Variables: saltPackages, productionQuota
- Learning: Production planning thresholds

**Part B: Transport cart limits**
- Context: "The transport cart can carry a maximum of 35 packages safely."
- Task: Check if saltPackages <= cartLimit (35)
- Variables: saltPackages, cartLimit
- Learning: Transport safety limits

### Exercise 5: Complete Inventory Checklist ✅
**Part A: All ingredients meet minimum**
- Context: "Let's verify we have enough of EVERYTHING before we leave the ingredients room!"
- Task: Check multiple items: corn >= 50, oil >= 40, salt >= 20
- Variables: corn, oil, salt with their minimums
- Learning: Multiple threshold checks

**Part B: All ingredients within capacity**
- Context: "And let's make sure nothing is over-stored!"
- Task: Check multiple items: corn <= 200, oil <= 50, salt <= 35
- Variables: corn, oil, salt with their maximums
- Learning: Multiple capacity verifications

**Transition to Part 4:**
"Excellent work! We have enough supplies and everything is organized properly. Now we need to start checking items off our list and making decisions. IF we have something, we check it off. ELSE, we need to get more! Let's create our checklist! 📝"

---

### CONDITIONS PART 4 (if/else): Checklist Verification - Making Decisions
**Concept:** If-then-else logic (making backup plans)
**Context:** "Now you have your task checklist! For each item, we need to check: IF we have it ready THEN we check it off and move forward. ELSE (if we don't) we need to do something about it!"

**Exercises 1-5:**

### Exercise 1: Checking Off Supplies 📋
**Part A: Corn kernels decision**
- Context: "IF we have the corn ready THEN check it off. ELSE make a note to get more."
- Task: IF cornReady === true THEN display "✓ Corn ready", ELSE display "⚠️ Get corn from storage"
- Variables: cornReady (true/false)
- Learning: Basic if/else branching

**Part B: Oil containers decision**
- Context: "IF the oil is ready THEN check it off. ELSE we need to fetch it."
- Task: IF oilReady === true THEN display "✓ Oil ready", ELSE display "⚠️ Get oil containers"
- Variables: oilReady (true/false)
- Learning: Applying same logic to different scenarios

### Exercise 2: Machine Status Checks 🤖
**Part A: Popping machine ready**
- Context: "IF the popping machine is on THEN we can start. ELSE we need to turn it on."
- Task: IF machineStatus === "on" THEN display "✓ Machine ready", ELSE display "⚠️ Turn on machine"
- Variables: machineStatus ("on"/"off")
- Learning: String-based if/else decisions

**Part B: Conveyor belt operational**
- Context: "IF the conveyor belt is running THEN we're good. ELSE call maintenance."
- Task: IF beltStatus === "running" THEN display "✓ Belt operational", ELSE display "⚠️ Call maintenance"
- Variables: beltStatus ("running"/"stopped")
- Learning: Equipment status decisions

### Exercise 3: Safety Preparations 🦺
**Part A: Emergency stop button test**
- Context: "IF the emergency button works THEN production can start. ELSE we must fix it first."
- Task: IF emergencyButton === "working" THEN display "✓ Safety verified", ELSE display "⚠️ Fix button immediately"
- Variables: emergencyButton ("working"/"broken")
- Learning: Safety-critical if/else logic

**Part B: Fire extinguisher check**
- Context: "IF the fire extinguisher is in place THEN we're safe. ELSE get one from storage."
- Task: IF extinguisher === "present" THEN display "✓ Fire safety OK", ELSE display "⚠️ Get extinguisher"
- Variables: extinguisher ("present"/"missing")
- Learning: Safety equipment verification

### Exercise 4: Team Assignments 👥
**Part A: Supervisor present**
- Context: "IF a supervisor is present THEN children can start work. ELSE they must wait."
- Task: IF supervisorPresent === true THEN display "✓ Begin tasks", ELSE display "⚠️ Wait for supervisor"
- Variables: supervisorPresent (true/false)
- Learning: Authorization-based decisions

**Part B: First aid trained staff**
- Context: "IF someone with first aid training is here THEN we're ready. ELSE call for trained staff."
- Task: IF firstAidStaff === true THEN display "✓ Medical support ready", ELSE display "⚠️ Call trained staff"
- Variables: firstAidStaff (true/false)
- Learning: Qualification requirements

### Exercise 5: Production Start Checklist ✅
**Part A: All systems go**
- Context: "IF all preparations are complete THEN announce 'START PRODUCTION'. ELSE continue preparing."
- Task: IF allReady === true THEN display "🎉 START PRODUCTION!", ELSE display "⏸️ Complete checklist first"
- Variables: allReady (true/false)
- Learning: Final go/no-go decision

**Part B: Backup plan needed**
- Context: "IF we're ready to start THEN proceed. ELSE activate backup schedule."
- Task: IF readyToStart === true THEN display "▶️ Proceed", ELSE display "📅 Use backup timeline"
- Variables: readyToStart (true/false)
- Learning: Contingency planning with if/else

**Transition to Part 5:**
"Great decision-making! You know how to handle IF this THEN that situations. But what if there are MORE than two options? What if we have small, medium, OR large orders? Different machines for different tasks? Time to learn ELSE IF! 🔀"

---

### CONDITIONS PART 5 (else if): Loading Machines - Multiple Paths
**Concept:** Else if chains (handling multiple scenarios)
**Context:** "The factory has different machines for different jobs! Small orders go to Machine A, medium orders to Machine B, large orders to Machine C. We need to check which situation we're in and choose the RIGHT path!"

**Exercises 1-5:**

### Exercise 1: Order Size Routing 📦
**Part A: Which production line**
- Context: "Route orders based on size: small (1-20 bags), medium (21-50 bags), large (51+ bags)"
- Task: IF bags <= 20 THEN "Line A", ELSE IF bags <= 50 THEN "Line B", ELSE "Line C"
- Variables: bags (order size)
- Learning: Basic else if chains

**Part B: Machine assignment**
- Context: "Now assign the correct machine based on line: Line A uses Machine 1, Line B uses Machine 2, Line C uses Machine 3"
- Task: IF line === "A" THEN "Machine 1", ELSE IF line === "B" THEN "Machine 2", ELSE "Machine 3"
- Variables: line (assigned line)
- Learning: String-based else if chains

### Exercise 2: Flavor Selection 🍬
**Part A: Flavoring machine routing**
- Context: "Sweet flavoring goes to Station 1, Butter to Station 2, Cheese to Station 3, Plain to Station 4"
- Task: IF flavor === "Sweet" THEN "Station 1", ELSE IF === "Butter" THEN "Station 2", ELSE IF === "Cheese" THEN "Station 3", ELSE "Station 4"
- Variables: flavor (type)
- Learning: Multiple string comparisons

**Part B: Flavoring amount needed**
- Context: "Different flavors need different amounts: Sweet needs 5 bottles, Butter needs 3, Cheese needs 4, Plain needs 0"
- Task: Based on flavor, output correct bottle count
- Variables: flavor (type)
- Learning: Matching actions to conditions

### Exercise 3: Shift Assignments ⏰
**Part A: Work schedule routing**
- Context: "Morning shift (6am-2pm) goes to Production, Afternoon (2pm-10pm) to Packaging, Night (10pm-6am) to Cleaning"
- Task: IF time < 14 THEN "Production", ELSE IF time < 22 THEN "Packaging", ELSE "Cleaning"
- Variables: time (hour in 24h format)
- Learning: Time-based routing

**Part B: Break schedule**
- Context: "Morning shift breaks at 10am, Afternoon at 6pm, Night at 2am. What time is this shift's break?"
- Task: Based on shift, assign correct break time
- Variables: shift (morning/afternoon/night)
- Learning: Schedule matching

### Exercise 4: Bag Size Selection 🛍️
**Part A: Choosing correct bag**
- Context: "Small bags for 1-2 cups, Medium for 3-5 cups, Large for 6-10 cups, Extra Large for 11+ cups"
- Task: IF cups <= 2 THEN "Small", ELSE IF <= 5 THEN "Medium", ELSE IF <= 10 THEN "Large", ELSE "XL"
- Variables: cups (serving size)
- Learning: Progressive size categorization

**Part B: Weight capacity check**
- Context: "Small bags hold up to 100g, Medium 250g, Large 500g, XL 1000g. Which bag do we need?"
- Task: Based on weight, select correct bag size
- Variables: weight (in grams)
- Learning: Capacity-based decisions

### Exercise 5: Priority Order Handling 🚨
**Part A: Order urgency routing**
- Context: "URGENT orders go to Express Line (processed in 1 hour), PRIORITY to Fast Line (3 hours), STANDARD to Regular Line (next day)"
- Task: IF urgency === "URGENT" THEN "Express (1hr)", ELSE IF === "PRIORITY" THEN "Fast (3hr)", ELSE "Regular (next day)"
- Variables: urgency (level)
- Learning: Priority-based routing

**Part B: Shipping method selection**
- Context: "Express orders ship by courier, Priority by next-day delivery, Standard by regular post"
- Task: Based on urgency, assign shipping method
- Variables: urgency (level)
- Learning: Matching services to priority

**Transition to Part 6:**
"Excellent routing! You can handle multiple choices perfectly. Now comes the tricky part - sometimes we need MULTIPLE things to be true at the SAME time before we can proceed. The machine must be ON AND the ingredients must be loaded. Ready to learn about AND logic? 🔗"

---

### CONDITIONS PART 6 (&&): Pre-Start Checks - Both Must Be True
**Concept:** Logical AND (&&) - all conditions must be met
**Context:** "Before starting any machine, we have MULTIPLE safety checks. The machine must be powered on AND the safety guard must be in place AND the operator must be ready. ALL of these must be true! If even ONE is false, we cannot start!"

**Exercises 1-5:**

### Exercise 1: Machine Start Safety 🤖
**Part A: Two-factor machine start**
- Context: "The popping machine can only start IF it's powered on AND the safety guard is closed."
- Task: IF machineOn === true && safetyGuard === "closed" THEN "✓ Start machine", ELSE "⚠️ Cannot start"
- Variables: machineOn (true/false), safetyGuard ("open"/"closed")
- Learning: Basic && with two conditions

**Part B: Three-factor start**
- Context: "The machine also needs ingredients loaded! All three must be ready: power AND safety AND ingredients."
- Task: IF machineOn && safetyGuard === "closed" && ingredientsLoaded === true THEN "✓ Start", ELSE "⚠️ Wait"
- Variables: machineOn, safetyGuard, ingredientsLoaded
- Learning: && with three conditions

### Exercise 2: Packaging Authorization 📦
**Part A: Supervisor and quality check**
- Context: "Bags can only be sealed IF they passed quality check AND a supervisor approved them."
- Task: IF qualityPassed === true && supervisorApproved === true THEN "✓ Seal bags", ELSE "⚠️ Hold"
- Variables: qualityPassed, supervisorApproved
- Learning: Authorization with &&

**Part B: Labeling requirements**
- Context: "Labels can only be applied IF bags are sealed AND correct label is loaded AND printer works."
- Task: IF bagsSealed && correctLabel && printerWorking THEN "✓ Apply labels", ELSE "⚠️ Fix issues"
- Variables: bagsSealed, correctLabel, printerWorking (all true/false)
- Learning: Multiple requirement checking

### Exercise 3: Conveyor Belt Operation 🔄
**Part A: Belt start conditions**
- Context: "Conveyor belt can start IF machine ahead is running AND belt is empty AND motor is on."
- Task: IF machineRunning && beltEmpty && motorOn THEN "✓ Start belt", ELSE "⚠️ Wait"
- Variables: machineRunning, beltEmpty, motorOn
- Learning: Sequential operation checks

**Part B: Belt safety stops**
- Context: "Belt continues running IF no emergency alarm AND no obstruction AND not at capacity."
- Task: IF !emergencyAlarm && !obstruction && !atCapacity THEN "✓ Keep running", ELSE "🛑 Stop belt"
- Variables: emergencyAlarm, obstruction, atCapacity (all true/false)
- Learning: && with negation (!) for safety

### Exercise 4: Ingredient Mixing 🥄
**Part A: Safe mixing conditions**
- Context: "Mixing can start IF correct ingredients are measured AND mixing bowl is clean AND temperature is right."
- Task: IF ingredientsMeasured && bowlClean && temperatureOK THEN "✓ Start mixing", ELSE "⚠️ Prepare first"
- Variables: ingredientsMeasured, bowlClean, temperatureOK
- Learning: Preparation verification with &&

**Part B: Complete mixing checklist**
- Context: "All must be true: ingredients measured AND bowl clean AND temperature right AND timer set AND supervisor watching."
- Task: IF all five conditions true THEN "✓ Begin mixing", ELSE "⚠️ Complete checklist"
- Variables: 5 different conditions
- Learning: Complex && chains with many conditions

### Exercise 5: Final Shipping Approval 🚚
**Part A: Ready for shipping**
- Context: "Orders can ship IF bags are sealed AND labels are correct AND box is packed AND address is verified."
- Task: IF allSealed && labelsCorrect && boxPacked && addressVerified THEN "✓ Ship it!", ELSE "⚠️ Not ready"
- Variables: allSealed, labelsCorrect, boxPacked, addressVerified
- Learning: Multi-stage completion checking

**Part B: Shipping documentation**
- Context: "Can't ship without paperwork! Need: packing slip printed AND invoice ready AND shipping label attached AND manifest signed."
- Task: IF packingSlip && invoice && shippingLabel && manifestSigned THEN "✓ Documentation complete", ELSE "⚠️ Complete paperwork"
- Variables: 4 documentation requirements
- Learning: Administrative && requirements

**Transition to Part 7:**
"Perfect! You understand that EVERYTHING must be ready before proceeding. But here's a new situation: sometimes we just need ONE of several things to be true. The supervisor OR the manager can approve. The morning shift OR afternoon shift means we're open. Let's learn about OR logic! 🔗"

---

### CONDITIONS PART 7 (||): Safety & Override - Either One Works
**Concept:** Logical OR (||) - at least one condition must be true
**Context:** "Not everything needs ALL conditions to be true! Sometimes we just need AT LEAST ONE option. Either the supervisor OR the manager can give approval. Either the emergency stop button OR the safety sensor can halt production. Let's learn when ANY one option is enough!"

**Exercises 1-5:**

### Exercise 1: Authorization Approval ✅
**Part A: Who can approve**
- Context: "Production changes can be approved by EITHER the supervisor OR the factory manager."
- Task: IF supervisor === "approved" || manager === "approved" THEN "✓ Changes authorized", ELSE "⚠️ Needs approval"
- Variables: supervisor ("approved"/"pending"), manager ("approved"/"pending")
- Learning: Basic || with two options

**Part B: Emergency authority**
- Context: "Emergency stops can be initiated by the supervisor OR the safety officer OR any floor manager."
- Task: IF supervisor || safetyOfficer || floorManager THEN "🛑 Stop authorized", ELSE "⚠️ Not authorized"
- Variables: 3 different authorization sources (true/false)
- Learning: || with multiple options

### Exercise 2: Factory Operating Hours 🕐
**Part A: When factory is open**
- Context: "The factory is open IF it's the morning shift (6am-2pm) OR the afternoon shift (2pm-10pm)."
- Task: IF shift === "morning" || shift === "afternoon" THEN "🏭 Factory open", ELSE "🔒 Factory closed"
- Variables: shift ("morning"/"afternoon"/"night")
- Learning: Time-based || conditions

**Part B: Weekend operations**
- Context: "We operate on weekdays OR if there's an urgent order on weekends."
- Task: IF weekday === true || urgentOrder === true THEN "✓ Operating today", ELSE "🔒 Closed"
- Variables: weekday (true/false), urgentOrder (true/false)
- Learning: Combining regular and exception cases

### Exercise 3: Emergency Situations 🚨
**Part A: When to stop production**
- Context: "Stop production immediately IF there's a fire alarm OR a machine malfunction OR a safety violation."
- Task: IF fireAlarm || malfunction || safetyViolation THEN "🛑 STOP PRODUCTION", ELSE "✓ Continue safely"
- Variables: fireAlarm, malfunction, safetyViolation (all true/false)
- Learning: Safety-critical || conditions

**Part B: When to evacuate**
- Context: "Evacuate the building IF fire alarm sounds OR gas leak detected OR structural warning OR emergency drill."
- Task: IF fireAlarm || gasLeak || structuralWarning || emergencyDrill THEN "🚨 EVACUATE NOW", ELSE "✓ Safe to remain"
- Variables: 4 different emergency triggers
- Learning: Multiple safety triggers with ||

### Exercise 4: Alternative Supply Sources 📦
**Part A: Ingredient availability**
- Context: "We can make popcorn IF we have corn from Supplier A OR Supplier B OR emergency stock."
- Task: IF supplierA > 0 || supplierB > 0 || emergencyStock > 0 THEN "✓ Can produce", ELSE "⚠️ Out of corn"
- Variables: supplierA, supplierB, emergencyStock (quantities)
- Learning: Alternative resource checking

**Part B: Equipment alternatives**
- Context: "We can package IF Machine 1 works OR Machine 2 works OR the backup sealer works."
- Task: IF machine1 === "working" || machine2 === "working" || backup === "working" THEN "✓ Can package", ELSE "⚠️ Call repair"
- Variables: 3 different machine statuses
- Learning: Backup equipment logic

### Exercise 5: Flexible Scheduling 📅
**Part A: When children can help**
- Context: "Children can participate IF it's a school holiday OR it's Saturday OR they have parent permission for a weekday."
- Task: IF holiday || saturday || parentPermission THEN "✓ Children can help", ELSE "🔒 School day"
- Variables: holiday, saturday, parentPermission (all true/false)
- Learning: Flexible participation rules

**Part B: Alternative break times**
- Context: "Workers can take break IF it's scheduled break time OR they've worked 3 hours OR supervisor approves early break."
- Task: IF scheduledBreak || hoursWorked >= 3 || supervisorApproves THEN "✓ Take break", ELSE "⏳ Keep working"
- Variables: scheduledBreak, hoursWorked, supervisorApproves
- Learning: Combining time-based and approval-based ||

**Closing Narrative (End of ALL Conditions):**
"🎉 Congratulations! You've mastered ALL the decision-making skills needed in the factory!

You can:
✓ Compare if things are bigger or smaller (>, <)
✓ Check if things are exactly right or wrong (===, !==)
✓ Verify if we have enough or too much (<=, >=)
✓ Make backup plans when things go wrong (if/else)
✓ Handle multiple different situations (else if)
✓ Check that EVERYTHING is ready before starting (&&)
✓ Know when just ONE option is enough (||)

The production manager is SO impressed! You understand the entire production workflow from arrival to shipping. Tomorrow, we'll learn about LOOPS - how to do the same task over and over efficiently. Because in a factory, we don't do things just once - we do them hundreds of times! Rest up - you've earned it! 🍿✨"

---

## NARRATIVE PRINCIPLES

### Voice & Tone Guidelines:
1. **Always say "children" not "kids"**
2. **Use encouraging, supportive language**
3. **Frame tasks as "helping" not "doing work"**
4. **Acknowledge progress frequently**
5. **Make connections to real factory operations**
6. **Use age-appropriate explanations (10-12 years old)**

### Story Elements to Include:
- **Arrival/welcome** at start of each module
- **Context for why** each task matters
- **Transitions** between exercises
- **Acknowledgment** of completed work
- **Preview** of what's coming next
- **Closing** with encouragement

### What Makes It "Human":
- ❌ "Create three variables." → Too robotic
- ✅ "The supervisor needs your help tracking this morning's batch! Let's store the information..." → Story-driven

- ❌ "Use the > operator." → Too technical
- ✅ "We need to check if the bag is full enough to send to shipping..." → Purpose-driven

### Factory Realism:
- Use actual factory terminology (supervisor, production line, quality control)
- Reference real equipment (poppers, conveyor belts, sealing machines)
- Include realistic scenarios (orders, inventory, shipping)
- Maintain logical workflow (can't ship before sealing, can't pop without corn)

---

## USING THIS TEMPLATE

### For Each Exercise:

1. **Choose the module/concept**
2. **Find the matching narrative section above**
3. **Read the context for that exercise**
4. **Use the scenario as the basis for your exercise**
5. **Maintain the storytelling voice**
6. **Connect to previous exercises when relevant**

### Example Usage:

**Module:** Variables, Exercise 2
**From Template:** "Now let's explore the storage room! We need to remember what's stored where."
**Apply to Exercise Structure Template:**
- Exercise title: "Exercise 2: Mapping Storage Areas"
- Introduction: Use the context paragraph
- Part A: Store room locations
- Part B: Store what's on each shelf
- Maintain the "helping map the factory" narrative throughout

---

## EXTENDING THE NARRATIVE

### For Future Modules:

**Module 4 - LOOPS:**
"Doing the Same Task Over and Over"
- Context: Repetitive factory tasks (checking each bag, counting each item)
- While loops: Keep doing until condition met
- For loops: Do this exact number of times

**Module 5 - FUNCTIONS:**
"Specialized Jobs That We Do Often"
- Context: Standard procedures in the factory
- Creating functions: Building our own tools
- Calling functions: Using specialized skills

**Module 6 - ARRAYS:**
"Managing Lists and Collections"
- Context: Tracking multiple items (orders, inventory, schedules)
- Working with groups of related data

---

## QUALITY CHECKLIST

Before using a narrative in an exercise, verify:

- [ ] Uses "children" not "kids"
- [ ] Explains WHY the task matters
- [ ] Connects to factory reality
- [ ] Age-appropriate language (10-12 years)
- [ ] Encouraging and supportive tone
- [ ] Builds on previous knowledge
- [ ] Makes child feel like a helper/participant
- [ ] Avoids robotic command language
- [ ] Includes context, not just instructions
- [ ] Maintains the factory storyline

---

## NOTES FOR FUTURE CLAUDE

This narrative framework is the STORYTELLING layer that wraps around the technical exercise structure. When generating exercises:

1. Robyn has spent months developing this pedagogical approach
2. The factory metaphor is intentional and carefully crafted
3. Every JavaScript concept maps to a real factory operation
4. Children need to feel like PARTICIPANTS, not just command-followers
5. The progression (mapping → counting → deciding) is purposeful
6. Never suggest removing the narrative wrapper - it's essential to learning
7. When in doubt, add MORE story, not less
8. Robyn will come to you to verify the narrative fits the technical structure

---

## VERSION HISTORY

**v1.0** - February 24, 2026
- Initial narrative framework
- Variables through Logical Operators (||) mapped
- Factory tour structure established
- Story progression defined

---

END OF NARRATIVE TEMPLATE
