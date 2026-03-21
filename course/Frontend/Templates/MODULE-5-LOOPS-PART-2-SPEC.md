# MODULE 5: LOOPS PART 2 - ADDITION & MULTIPLICATION - EXERCISE SPECIFICATIONS

## Overview
This module builds on Loops Part 1 (Basic Counting) by introducing math operations inside loops. You'll practice addition and multiplication while still using the loop structure you've mastered.

**Building on Part 1:**
- Part 1: Pure counting (no math)
- Part 2: Addition (+) and Multiplication (×) inside loops

**No arrays, no conditionals** - just loops + variables + addition/multiplication.

---

## EXERCISE 1: Oil Containers with Backup Supply ➕

### Part A: Base Containers Plus Backup
**Scenario:** Each machine needs oil containers numbered 1, 2, 3, 4, and 5. For safety, we also provide 2 backup containers for each machine. Let's calculate the total oil containers each machine gets. Machine 1 gets container 1 PLUS 2 backup containers (total 3). Machine 2 gets container 2 PLUS 2 backup containers (total 4), and so on.

**Task:** Write a for loop that calculates how many total oil containers each machine receives by adding the container number plus 2 backup containers.

**Concepts:**
- Using addition inside a loop
- Creating a variable inside the loop for the calculation
- Loop counter in math operations

**Expected Output:**
```
Container 1: 1 + 2 backup = 3 total containers
Container 2: 2 + 2 backup = 4 total containers
Container 3: 3 + 2 backup = 5 total containers
Container 4: 4 + 2 backup = 6 total containers
Container 5: 5 + 2 backup = 7 total containers
```

**Code Structure:**
```javascript
for (let container = 1; container <= 5; container++) {
  let totalContainers = container + 2;
  console.log(`Container ${container}: ${container} + 2 backup = ${totalContainers} total containers`);
}
```

---

### Part B: Different Backup Amount
**Scenario:** For the premium production run, we're providing 3 backup oil containers instead of 2. Let's calculate the new totals. Container 1 gets 1 PLUS 3 backup (total 4). Container 2 gets 2 PLUS 3 backup (total 5), and so on, for containers 1 through 6.

**Task:** Write a for loop that adds 3 backup containers to each container number for containers 1-6.

**Concepts:**
- Same addition pattern with different numbers
- Practicing addition in loops

**Expected Output:**
```
Container 1: 1 + 3 backup = 4 total containers
Container 2: 2 + 3 backup = 5 total containers
Container 3: 3 + 3 backup = 6 total containers
Container 4: 4 + 3 backup = 7 total containers
Container 5: 5 + 3 backup = 8 total containers
Container 6: 6 + 3 backup = 9 total containers
```

**Code Structure:**
```javascript
for (let container = 1; container <= 6; container++) {
  let totalContainers = container + 3;
  console.log(`Container ${container}: ${container} + 3 backup = ${totalContainers} total containers`);
}
```

---

## EXERCISE 2: Flavor Packets Distribution ✖️

### Part A: Double Packets per Station
**Scenario:** Each flavor station gets flavor packets. Station 1 gets 2 packets (1 × 2). Station 2 gets 4 packets (2 × 2). Station 3 gets 6 packets (3 × 2), and so on. Let's calculate how many flavor packets each of the first 5 stations receives.

**Task:** Write a for loop that calculates how many flavor packets each station gets by multiplying the station number by 2.

**Concepts:**
- Using multiplication inside a loop
- Loop counter × 2

**Expected Output:**
```
Station 1 gets 2 flavor packets
Station 2 gets 4 flavor packets
Station 3 gets 6 flavor packets
Station 4 gets 8 flavor packets
Station 5 gets 10 flavor packets
```

**Code Structure:**
```javascript
for (let station = 1; station <= 5; station++) {
  let packets = station * 2;
  console.log(`Station ${station} gets ${packets} flavor packets`);
}
```

---

### Part B: Triple Packets for Storage
**Scenario:** The flavor storage areas are numbered 1 through 4. Each storage area gets boxes of flavor packets. Storage 1 gets 3 boxes (1 × 3). Storage 2 gets 6 boxes (2 × 3). Storage 3 gets 9 boxes (3 × 3), and so on.

**Task:** Write a for loop that calculates how many boxes each storage area gets by multiplying the storage number by 3.

**Concepts:**
- Same multiplication pattern with different numbers
- Practicing multiplication in loops

**Expected Output:**
```
Storage 1 gets 3 boxes
Storage 2 gets 6 boxes
Storage 3 gets 9 boxes
Storage 4 gets 12 boxes
```

**Code Structure:**
```javascript
for (let storage = 1; storage <= 4; storage++) {
  let boxes = storage * 3;
  console.log(`Storage ${storage} gets ${boxes} boxes`);
}
```

---

## EXERCISE 3: Salt Packets for Machines ✖️

### Part A: Four Packets per Machine
**Scenario:** Each machine in the Grand Hall gets salt packets. Machine 1 gets 4 packets (1 × 4). Machine 2 gets 8 packets (2 × 4). Machine 3 gets 12 packets (3 × 4), and so on. Let's calculate how many salt packets each of the first 5 machines receives.

**Task:** Write a for loop that calculates how many salt packets each machine gets by multiplying the machine number by 4.

**Concepts:**
- Multiplication with a different multiplier
- Loop counter × 4

**Expected Output:**
```
Machine 1 gets 4 salt packets
Machine 2 gets 8 salt packets
Machine 3 gets 12 salt packets
Machine 4 gets 16 salt packets
Machine 5 gets 20 salt packets
```

**Code Structure:**
```javascript
for (let machine = 1; machine <= 5; machine++) {
  let packets = machine * 4;
  console.log(`Machine ${machine} gets ${packets} salt packets`);
}
```

---

### Part B: Five Packets per Production Line
**Scenario:** The factory has 6 production lines. Each production line number gets salt containers. Line 1 gets 5 containers (1 × 5). Line 2 gets 10 containers (2 × 5). Line 3 gets 15 containers (3 × 5), and so on.

**Task:** Write a for loop that calculates how many salt containers each production line gets by multiplying the line number by 5.

**Concepts:**
- Multiplication with different multiplier
- Loop counter × 5

**Expected Output:**
```
Line 1 gets 5 salt containers
Line 2 gets 10 salt containers
Line 3 gets 15 salt containers
Line 4 gets 20 salt containers
Line 5 gets 25 salt containers
Line 6 gets 30 salt containers
```

**Code Structure:**
```javascript
for (let line = 1; line <= 6; line++) {
  let containers = line * 5;
  console.log(`Line ${line} gets ${containers} salt containers`);
}
```

---

## EXERCISE 4: Mixing Addition and Multiplication 🔢

### Part A: Corn Boxes Plus Extra
**Scenario:** Each machine gets corn boxes. The base amount is calculated by multiplying the machine number by 2. Then we add 3 extra boxes for backup. Machine 1 gets (1 × 2) + 3 = 5 boxes. Machine 2 gets (2 × 2) + 3 = 7 boxes. Let's calculate for machines 1 through 4.

**Task:** Write a for loop that calculates corn boxes by multiplying the machine number by 2, then adding 3 extra boxes.

**Concepts:**
- Combining multiplication and addition
- Order of operations in loops
- Multiple calculations

**Expected Output:**
```
Machine 1: (1 × 2) + 3 = 5 corn boxes
Machine 2: (2 × 2) + 3 = 7 corn boxes
Machine 3: (3 × 2) + 3 = 9 corn boxes
Machine 4: (4 × 2) + 3 = 11 corn boxes
```

**Code Structure:**
```javascript
for (let machine = 1; machine <= 4; machine++) {
  let baseBoxes = machine * 2;
  let totalBoxes = baseBoxes + 3;
  console.log(`Machine ${machine}: (${machine} × 2) + 3 = ${totalBoxes} corn boxes`);
}
```

---

### Part B: Flavor Packets Calculation
**Scenario:** Each station gets flavor packets calculated by multiplying the station number by 3, then adding 2 bonus packets. Station 1 gets (1 × 3) + 2 = 5 packets. Station 2 gets (2 × 3) + 2 = 8 packets. Let's calculate for stations 1 through 5.

**Task:** Write a for loop that calculates flavor packets by multiplying the station number by 3, then adding 2 bonus packets.

**Concepts:**
- Same pattern with different numbers
- Multiplication then addition

**Expected Output:**
```
Station 1: (1 × 3) + 2 = 5 flavor packets
Station 2: (2 × 3) + 2 = 8 flavor packets
Station 3: (3 × 3) + 2 = 11 flavor packets
Station 4: (4 × 3) + 2 = 14 flavor packets
Station 5: (5 × 3) + 2 = 17 flavor packets
```

**Code Structure:**
```javascript
for (let station = 1; station <= 5; station++) {
  let basePackets = station * 3;
  let totalPackets = basePackets + 2;
  console.log(`Station ${station}: (${station} × 3) + 2 = ${totalPackets} flavor packets`);
}
```

---

## TEACHING NOTES

**Exercise Progression:**
1. Ex 1: Introduction to addition in loops (oil containers + backup)
2. Ex 2: Introduction to multiplication in loops (flavor packets × 2, × 3)
3. Ex 3: More multiplication practice (salt packets × 4, × 5)
4. Ex 4: Combining addition and multiplication (multiply first, then add)

**Factory Narrative Connection:**
- Continues from Loops Part 1 (Basic Counting)
- Uses same factory context and ingredients
- Adds calculations to the counting
- All scenarios involve production preparation

**Key Concepts:**
- Addition inside loops (counter + number)
- Multiplication inside loops (counter × number)
- Variables inside loops to store calculations
- Combining operations (multiply then add)
- Order of operations matters

**What NOT to include:**
- ❌ Arrays (not taught yet)
- ❌ Conditionals inside loops (saved for later)
- ❌ Subtraction/Division (saved for Part 3)
- ❌ Accumulators - saved for Part 4
- ❌ Decimals or complex math

**Step Format:**
- Exercise 1 Part A: Show complete code (teaches addition pattern)
- Exercise 1 Part B through Exercise 4: "Now try and write the code in the code block below"

**Assessment Criteria:**
- Can use addition inside loops correctly
- Can use multiplication inside loops correctly
- Understands loop counter can be used in calculations
- Can combine operations in proper order
- Creates variables inside loops for calculations
