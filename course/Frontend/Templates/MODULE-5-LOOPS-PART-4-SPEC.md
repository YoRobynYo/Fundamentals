# MODULE 5: LOOPS PART 4 - ACCUMULATORS - EXERCISE SPECIFICATIONS

## Overview
This module introduces the accumulator pattern - using a variable OUTSIDE the loop to track running totals. This is one of the most powerful patterns in programming!

**Building on Parts 1, 2, & 3:**
- Part 1: Pure counting
- Part 2: Addition & Multiplication inside loops
- Part 3: Subtraction & Division inside loops
- Part 4: Variables OUTSIDE loops that track totals (accumulators)

**No arrays, no conditionals** - just loops + accumulators.

---

## EXERCISE 1: Tracking Total Corn Boxes 📊

### Part A: Counting Corn from Supply Shelves
**Scenario:** The corn supply room has 4 shelves. Each shelf contains 5 boxes of corn. We need to track the running total as we count the corn boxes from each shelf. We start with 0 boxes counted. Shelf 1 adds 5 boxes (total: 5). Shelf 2 adds 5 more boxes (total: 10). Shelf 3 adds 5 more boxes (total: 15). Shelf 4 adds 5 more boxes (total: 20). Let's track the total corn available for production.

**Task:** Create a variable BEFORE the loop to track the total. Inside the loop, add 5 boxes for each shelf and print the running total.

**Concepts:**
- Variable OUTSIDE the loop (accumulator)
- Updating the variable INSIDE the loop
- Tracking a running total

**Expected Output:**
```
Added 5 boxes from shelf 1. Total now: 5 boxes
Added 5 boxes from shelf 2. Total now: 10 boxes
Added 5 boxes from shelf 3. Total now: 15 boxes
Added 5 boxes from shelf 4. Total now: 20 boxes
```

**Code Structure:**
```javascript
let totalCorn = 0;

for (let shelf = 1; shelf <= 4; shelf++) {
  totalCorn = totalCorn + 5;
  console.log(`Added 5 boxes from shelf ${shelf}. Total now: ${totalCorn} boxes`);
}
```

---

### Part B: Tracking Oil Containers Delivered
**Scenario:** The Grand Hall receives oil container deliveries. Each delivery brings 6 containers. We start with 0 containers. Delivery 1 brings 6 containers (total: 6). Delivery 2 brings 6 more containers (total: 12). Delivery 3 brings 6 more containers (total: 18). Let's track the total oil containers received over 5 deliveries.

**Task:** Create a variable to track total oil containers starting at 0. Inside the loop, add 6 containers each delivery and show the running total.

**Concepts:**
- Same accumulator pattern with different scenario
- Building up totals over time

**Expected Output:**
```
Delivery 1: Received 6 containers. Total: 6 containers
Delivery 2: Received 6 containers. Total: 12 containers
Delivery 3: Received 6 containers. Total: 18 containers
Delivery 4: Received 6 containers. Total: 24 containers
Delivery 5: Received 6 containers. Total: 30 containers
```

**Code Structure:**
```javascript
let totalOil = 0;

for (let delivery = 1; delivery <= 5; delivery++) {
  totalOil = totalOil + 6;
  console.log(`Delivery ${delivery}: Received 6 containers. Total: ${totalOil} containers`);
}
```

---

## EXERCISE 2: Tracking Salt Usage Over Time 🧂

### Part A: Daily Salt Consumption
**Scenario:** During production, machines use salt packets each day. Each day, 3 salt packets get used. We start with 0 packets used. Day 1 uses 3 packets (total used: 3). Day 2 uses 3 more packets (total used: 6). Day 3 uses 3 more packets (total used: 9). Let's track the total salt packets used over 5 days.

**Task:** Create a variable to track total salt used starting at 0. Inside the loop, add 3 packets each day and show the running total.

**Concepts:**
- Accumulator tracking consumption
- Running totals of items used

**Expected Output:**
```
Day 1: Used 3 packets. Total used: 3 packets
Day 2: Used 3 packets. Total used: 6 packets
Day 3: Used 3 packets. Total used: 9 packets
Day 4: Used 3 packets. Total used: 12 packets
Day 5: Used 3 packets. Total used: 15 packets
```

**Code Structure:**
```javascript
let totalSaltUsed = 0;

for (let day = 1; day <= 5; day++) {
  totalSaltUsed = totalSaltUsed + 3;
  console.log(`Day ${day}: Used 3 packets. Total used: ${totalSaltUsed} packets`);
}
```

---

### Part B: Weekly Flavor Usage
**Scenario:** Each week, the factory uses flavor packets for production. Each week, 8 flavor packets get used. We start with 0 packets used. Week 1 uses 8 packets (total used: 8). Week 2 uses 8 more packets (total used: 16). Let's track total flavor packets used over 4 weeks.

**Task:** Create a variable to track total flavor used starting at 0. Inside the loop, add 8 packets each week and show the running total.

**Concepts:**
- Same accumulator pattern with weeks
- Different increments (adding 8 instead of 3)

**Expected Output:**
```
Week 1: Used 8 packets. Total used: 8 packets
Week 2: Used 8 packets. Total used: 16 packets
Week 3: Used 8 packets. Total used: 24 packets
Week 4: Used 8 packets. Total used: 32 packets
```

**Code Structure:**
```javascript
let totalFlavorUsed = 0;

for (let week = 1; week <= 4; week++) {
  totalFlavorUsed = totalFlavorUsed + 8;
  console.log(`Week ${week}: Used 8 packets. Total used: ${totalFlavorUsed} packets`);
}
```

---

## EXERCISE 3: Tracking Production Batches 📦

### Part A: Accumulating Daily Production
**Scenario:** The Grand Hall produces popcorn batches each day. Each day, they complete 7 batches. We start with 0 batches completed. Day 1 completes 7 batches (total: 7). Day 2 completes 7 more batches (total: 14). Day 3 completes 7 more batches (total: 21). Let's track total batches completed over 6 days.

**Task:** Create a variable to track total batches completed starting at 0. Inside the loop, add 7 batches each day and show the running total.

**Concepts:**
- Accumulator for production tracking
- Building up completed work

**Expected Output:**
```
Day 1: Completed 7 batches. Total production: 7 batches
Day 2: Completed 7 batches. Total production: 14 batches
Day 3: Completed 7 batches. Total production: 21 batches
Day 4: Completed 7 batches. Total production: 28 batches
Day 5: Completed 7 batches. Total production: 35 batches
Day 6: Completed 7 batches. Total production: 42 batches
```

**Code Structure:**
```javascript
let totalBatches = 0;

for (let day = 1; day <= 6; day++) {
  totalBatches = totalBatches + 7;
  console.log(`Day ${day}: Completed 7 batches. Total production: ${totalBatches} batches`);
}
```

---

### Part B: Tracking Bags Packaged
**Scenario:** Each production shift packages popcorn bags. Each shift packages 10 bags. We start with 0 bags packaged. Shift 1 packages 10 bags (total: 10). Shift 2 packages 10 more bags (total: 20). Let's track total bags packaged over 8 shifts.

**Task:** Create a variable to track total bags packaged starting at 0. Inside the loop, add 10 bags each shift and show the running total.

**Concepts:**
- Same accumulator pattern
- Tracking packaging progress

**Expected Output:**
```
Shift 1: Packaged 10 bags. Total: 10 bags
Shift 2: Packaged 10 bags. Total: 20 bags
Shift 3: Packaged 10 bags. Total: 30 bags
Shift 4: Packaged 10 bags. Total: 40 bags
Shift 5: Packaged 10 bags. Total: 50 bags
Shift 6: Packaged 10 bags. Total: 60 bags
Shift 7: Packaged 10 bags. Total: 70 bags
Shift 8: Packaged 10 bags. Total: 80 bags
```

**Code Structure:**
```javascript
let totalBags = 0;

for (let shift = 1; shift <= 8; shift++) {
  totalBags = totalBags + 10;
  console.log(`Shift ${shift}: Packaged 10 bags. Total: ${totalBags} bags`);
}
```

---

## TEACHING NOTES

**Exercise Progression:**
1. Ex 1: Introduction to accumulators (tracking corn and oil totals)
2. Ex 2: Accumulators for consumption (salt and flavor usage)
3. Ex 3: Accumulators for production (batches and bags completed)

**Factory Narrative Connection:**
- Completes the Loops module sequence
- Uses same factory context throughout
- Shows real-world use of accumulators
- Demonstrates tracking totals over time

**Key Concepts:**
- **Variable OUTSIDE the loop** - this is the accumulator
- **Starts at 0** - we build up from nothing
- **Gets updated INSIDE the loop** - adds to the total each time
- **Persists between iterations** - remembers its value
- **Pattern:** `total = total + amount`

**Why Accumulators Matter:**
- Track running totals
- Count things as they happen
- Build up values over time
- Essential for real-world programming

**What NOT to include:**
- ❌ Arrays (not taught yet)
- ❌ Conditionals inside loops (saved for later)
- ❌ Multiple accumulators in one loop (too complex)
- ❌ Subtracting from accumulators (keep it simple - just adding)

**Step Format:**
- Exercise 1 Part A: Show complete code (teaches accumulator pattern)
- Exercise 1 Part B through Exercise 3: "Now try and write the code in the code block below"

**Assessment Criteria:**
- Understands variables outside loops vs inside loops
- Can initialize accumulator to 0
- Can update accumulator inside loop correctly
- Understands accumulator "remembers" its value
- Can use accumulator pattern in different contexts
- Recognizes when to use accumulators
