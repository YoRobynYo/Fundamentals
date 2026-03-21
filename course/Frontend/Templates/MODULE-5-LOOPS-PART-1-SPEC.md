# MODULE 5: LOOPS PART 1 - BASIC COUNTING - EXERCISE SPECIFICATIONS

## Overview
This module introduces for loops in their simplest form - just counting! No math operations, no complex calculations. You'll master the loop structure by counting ingredients for the Grand Hall's 10 production machines.

**Building on Module 3 Conditions Part 3:** We verified we have enough ingredients in inventory. Now we need to COUNT them as we prepare for production!

**Focus: Pure counting loops - mastering Initialize, Condition, Increment**

**No arrays, no conditionals, NO MATH OPERATIONS** - just loops and counting!

---

## EXERCISE 1: Counting Bags on the Production Line 📦

### Part A: Counting First Five Bags
**Scenario:** The production line has bags moving along for packaging. You need to count them as they pass by. Let's count the first 5 bags.

**Task:** Write a for loop that counts from 1 to 5 and prints a message for each bag.

**Concepts:**
- Basic for loop structure
- Initialize, Condition, Increment
- Using the loop counter in template literals

**Expected Output:**
```
Bag 1 is ready
Bag 2 is ready
Bag 3 is ready
Bag 4 is ready
Bag 5 is ready
```

**Code Structure:**
```javascript
for (let bag = 1; bag <= 5; bag++) {
  console.log(`Bag ${bag} is ready`);
}
```

---

### Part B: Counting More Bags
**Scenario:** The production line is running faster now! You need to count 10 bags instead of 5 as they move along the line.

**Task:** Write a for loop that counts from 1 to 10 and prints a message for each bag.

**Concepts:**
- Changing the condition to count higher
- Same loop structure, different numbers

**Expected Output:**
```
Bag 1 passing through
Bag 2 passing through
Bag 3 passing through
...
Bag 10 passing through
```

**Code Structure:**
```javascript
for (let bag = 1; bag <= 10; bag++) {
  console.log(`Bag ${bag} passing through`);
}
```

---

## EXERCISE 2: Counting Corn Boxes 🌽

### Part A: Counting Corn for First Six Machines
**Scenario:** The Grand Hall has 10 popcorn machines. Before production starts, we need to count the corn boxes as we assign them to each machine. Let's count the corn boxes for machines 1 through 6.

**Task:** Write a for loop that counts from machine 1 to machine 6 and prints which corn box each machine receives.

**Concepts:**
- Counting with meaningful variable names
- Loop counter represents machine numbers
- Clear output messages

**Expected Output:**
```
Machine 1 receives corn box
Machine 2 receives corn box
Machine 3 receives corn box
Machine 4 receives corn box
Machine 5 receives corn box
Machine 6 receives corn box
```

**Code Structure:**
```javascript
for (let machine = 1; machine <= 6; machine++) {
  console.log(`Machine ${machine} receives corn box`);
}
```

---

### Part B: Counting Corn for All Ten Machines
**Scenario:** Great! Now we need to count corn boxes for ALL 10 machines in the Grand Hall. Let's make sure every machine from 1 to 10 gets counted.

**Task:** Write a for loop that counts from machine 1 to machine 10 and prints which corn box each machine receives.

**Concepts:**
- Counting to higher numbers
- Same pattern, extended range

**Expected Output:**
```
Machine 1 receives corn box
Machine 2 receives corn box
Machine 3 receives corn box
...
Machine 10 receives corn box
```

**Code Structure:**
```javascript
for (let machine = 1; machine <= 10; machine++) {
  console.log(`Machine ${machine} receives corn box`);
}
```

---

## EXERCISE 3: Counting Oil Containers 🛢️

### Part A: Counting Oil for Storage Area
**Scenario:** The oil storage area has containers numbered 1 through 7. We need to count each oil container as we check the storage inventory.

**Task:** Write a for loop that counts oil containers from 1 to 7 and prints a message for each container.

**Concepts:**
- Counting different items with loops
- Using descriptive variable names

**Expected Output:**
```
Checking oil container 1
Checking oil container 2
Checking oil container 3
Checking oil container 4
Checking oil container 5
Checking oil container 6
Checking oil container 7
```

**Code Structure:**
```javascript
for (let container = 1; container <= 7; container++) {
  console.log(`Checking oil container ${container}`);
}
```

---

### Part B: Counting Oil for Machines
**Scenario:** Each of the 8 production machines needs an oil container assignment. Let's count which oil container goes to each machine.

**Task:** Write a for loop that counts from machine 1 to machine 8 and prints which oil container each machine receives.

**Concepts:**
- Same counting pattern, different context
- Practicing loop structure

**Expected Output:**
```
Machine 1 gets oil container
Machine 2 gets oil container
Machine 3 gets oil container
Machine 4 gets oil container
Machine 5 gets oil container
Machine 6 gets oil container
Machine 7 gets oil container
Machine 8 gets oil container
```

**Code Structure:**
```javascript
for (let machine = 1; machine <= 8; machine++) {
  console.log(`Machine ${machine} gets oil container`);
}
```

---

## EXERCISE 4: Counting Flavor Packets 🍬

### Part A: Counting Flavor Inventory
**Scenario:** The flavor storage room has packets numbered 1 through 5 on the shelf. We need to count each flavor packet to verify our inventory.

**Task:** Write a for loop that counts flavor packets from 1 to 5 and prints a message for each packet.

**Concepts:**
- Counting smaller quantities
- Clear counting messages

**Expected Output:**
```
Counting flavor packet 1
Counting flavor packet 2
Counting flavor packet 3
Counting flavor packet 4
Counting flavor packet 5
```

**Code Structure:**
```javascript
for (let packet = 1; packet <= 5; packet++) {
  console.log(`Counting flavor packet ${packet}`);
}
```

---

### Part B: Counting Flavor for Stations
**Scenario:** The Grand Hall has 9 flavor stations. Each station needs a flavor packet. Let's count which flavor packet goes to each station.

**Task:** Write a for loop that counts from station 1 to station 9 and prints which flavor packet each station receives.

**Concepts:**
- Counting to 9
- Stations and packets

**Expected Output:**
```
Station 1 receives flavor packet
Station 2 receives flavor packet
Station 3 receives flavor packet
Station 4 receives flavor packet
Station 5 receives flavor packet
Station 6 receives flavor packet
Station 7 receives flavor packet
Station 8 receives flavor packet
Station 9 receives flavor packet
```

**Code Structure:**
```javascript
for (let station = 1; station <= 9; station++) {
  console.log(`Station ${station} receives flavor packet`);
}
```

---

## EXERCISE 5: Counting Salt Containers 🧂

### Part A: Counting Salt in Storage
**Scenario:** The salt storage shelf has containers numbered 1 through 4. We need to count each salt container to check our supply.

**Task:** Write a for loop that counts salt containers from 1 to 4 and prints a message for each container.

**Concepts:**
- Counting small inventory
- Simple loop practice

**Expected Output:**
```
Salt container 1 counted
Salt container 2 counted
Salt container 3 counted
Salt container 4 counted
```

**Code Structure:**
```javascript
for (let container = 1; container <= 4; container++) {
  console.log(`Salt container ${container} counted`);
}
```

---

### Part B: Counting Salt for All Machines
**Scenario:** All 10 machines in the Grand Hall need salt containers. Let's count which salt container goes to each of the 10 machines.

**Task:** Write a for loop that counts from machine 1 to machine 10 and prints which salt container each machine receives.

**Concepts:**
- Counting to 10 again
- Reinforcing the loop pattern
- Building confidence

**Expected Output:**
```
Machine 1 receives salt container
Machine 2 receives salt container
Machine 3 receives salt container
...
Machine 10 receives salt container
```

**Code Structure:**
```javascript
for (let machine = 1; machine <= 10; machine++) {
  console.log(`Machine ${machine} receives salt container`);
}
```

---

## TEACHING NOTES

**Exercise Progression:**
1. Ex 1: Introduction to loops - counting bags (5, then 10)
2. Ex 2: Counting corn for machines (6, then 10 machines)
3. Ex 3: Counting oil containers (7, then 8 machines)
4. Ex 4: Counting flavor packets (5, then 9 stations)
5. Ex 5: Counting salt containers (4, then 10 machines)

**Factory Narrative Connection:**
- Builds directly on Conditions Part 3 (Inventory checks)
- Uses same ingredients: Corn 🌽, Oil 🛢️, Flavoring 🍬, Salt 🧂
- Introduces counting for the 10 machines in Grand Hall
- Pure counting - NO math operations

**Key Concepts:**
- **Initialize:** `let variable = 1;` - where we start
- **Condition:** `variable <= number;` - when we stop
- **Increment:** `variable++` - how we move forward
- Template literals for output
- Using meaningful variable names (machine, container, packet)

**What NOT to include:**
- ❌ Arrays (not taught yet)
- ❌ Conditionals inside loops (saved for later)
- ❌ Math operations (+, -, ×, ÷) - saved for Part 2 & 3
- ❌ Accumulators/variables outside loops - saved for Part 4
- ❌ Counting down - saved for later

**Step Format:**
- Exercise 1 Part A: Show complete code (teaches the pattern)
- Exercise 1 Part B through Exercise 5: "Now try and write the code in the code block below"

**Assessment Criteria:**
- Can write basic for loop syntax correctly
- Understands initialize, condition, increment
- Can change the ending number in condition
- Can use loop counter in template literals
- Understands loops repeat automatically
