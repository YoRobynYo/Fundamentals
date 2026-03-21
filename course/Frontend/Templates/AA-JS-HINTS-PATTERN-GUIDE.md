# JAVASCRIPT HINTS PATTERN GUIDE

**Companion Document:** See JS-CONNECTION-SPEC.md for HTML/JS connection details and setup.

## Universal Rule for Creating Hints Across All Modules

**Created:** March 2026  
**Purpose:** Guide for determining how many hints to create for any exercise in any module

---

## THE UNIVERSAL RULE

**For any exercise in any module:**

1. **Count the data** - How many pieces of data does this exercise create/use?
2. **Create hints** - One hint per piece of data showing how to create it
3. **Write answer** - Complete working code + Output section

**That's it!** No exceptions, no special cases.

---

## WHAT COUNTS AS "DATA"?

**Data = Variables, values, or settings that the exercise creates**

✅ **Counts as data:**
- Variables being created (`let name = "Ben"`)
- Starting values (`let total = 100`)
- Array items being defined
- Object properties being set
- Function parameters

❌ **NOT data (don't hint these):**
- Loop structures (`for`, `while`)
- Conditional logic (`if`, `else`)
- Console.log statements
- Template literals
- Mathematical operations (unless creating a variable)

---

## PATTERN BY MODULE

### Module 1: Variables 📦

**Exercise example:**
- Creates: name variable, age variable, classroom variable
- **Data count:** 3
- **Hints:** 3 (one showing how to create each variable)
- **Answer:** Complete code with console.log + Output

**Hint format:**
```
Hint 1: Step 1: Create a variable named "child name" - `let childName = "Ben";`
Hint 2: Step 2: Create a variable named "age" - `let age = 10;`
Hint 3: Step 3: Create a variable named "classroom" - `let classroom = 5;`
```

**Answer format:**
```javascript
let childName = "Ben";
let age = 10;
let classroom = 5;
console.log(`My name is ${childName}. I am ${age} years old in classroom ${classroom}.`);

Output:
My name is Ben. I am 10 years old in classroom 5.
```

---

### Module 2: Order of Operations 🧮

**Exercise example:**
- Creates: multiple variables with calculations
- **Data count:** 2-4 (depending on exercise)
- **Hints:** 2-4 (one per variable with its calculation)
- **Answer:** Complete code with console.log + Output

**Hint format:**
```
Hint 1: Step 1: Create "total rolls" - `let totalRolls = 560 + 190;`
Hint 2: Step 2: Create "rolls per box" - `let rollsPerBox = 20;`
Hint 3: Step 3: Calculate "boxes needed" - `let boxesNeeded = totalRolls / rollsPerBox;`
```

**Answer format:**
```javascript
let totalRolls = 560 + 190;
let rollsPerBox = 20;
let boxesNeeded = totalRolls / rollsPerBox;
console.log(`Total rolls: ${totalRolls}. Boxes needed: ${boxesNeeded}.`);

Output:
Total rolls: 750. Boxes needed: 37.5.
```

---

### Module 3: Conditions (All Parts) ❓

**Exercise example:**
- Creates: 2 variables to compare
- **Data count:** 2
- **Hints:** 2 (showing how to create the variables)
- **Answer:** Complete code with if/else + Output

**Hint format:**
```
Hint 1: Step 1: Create "children present" - `let childrenPresent = 18;`
Hint 2: Step 2: Create "minimum needed" - `let minimumNeeded = 15;`
```

**Answer format:**
```javascript
let childrenPresent = 18;
let minimumNeeded = 15;
if (childrenPresent > minimumNeeded) {
  console.log("We have enough helpers!");
} else {
  console.log("We need more helpers.");
}

Output:
We have enough helpers!
```

---

### Module 4: Logical Operators (AND/OR) 🔒

**Exercise example:**
- Creates: 2-3 boolean/condition variables
- **Data count:** 2-3
- **Hints:** 2-3 (showing how to create each variable)
- **Answer:** Complete code with && or || + Output

**Hint format:**
```
Hint 1: Step 1: Create "ingredient correct" - `let ingredientCorrect = true;`
Hint 2: Step 2: Create "enough quantity" - `let enoughQuantity = true;`
```

**Answer format:**
```javascript
let ingredientCorrect = true;
let enoughQuantity = true;
if (ingredientCorrect && enoughQuantity) {
  console.log("Ready to make popcorn!");
} else {
  console.log("Check ingredients or quantity.");
}

Output:
Ready to make popcorn!
```

---

### Module 5: Loops Part 1 - Basic Counting 🔁

**Exercise example:**
- Uses: loop range (1 to 10)
- **Data count:** 0 (just counting, no variables created)
- **Hints:** 1-2 (explaining the loop range/what we're counting)
- **Answer:** Complete code with loop + Output

**Hint format:**
```
Hint 1: Step 1: Set up a loop to count from 1 to 10 - `for (let i = 1; i <= 10; i++)`
```

**Answer format:**
```javascript
for (let machine = 1; machine <= 10; machine++) {
  console.log(`Machine ${machine}`);
}

Output:
Machine 1
Machine 2
Machine 3
...
Machine 10
```

---

### Module 5: Loops Part 2 - Addition & Multiplication ➕✖️

**Exercise example:**
- Creates: base amount, extra per iteration
- **Data count:** 2
- **Hints:** 2 (showing the two values being used)
- **Answer:** Complete code with loop and math + Output

**Hint format:**
```
Hint 1: Each machine starts with 5 oil containers
Hint 2: We add 3 backup containers per machine
```

**Answer format:**
```javascript
for (let container = 1; container <= 6; container++) {
  let totalContainers = container + 3;
  console.log(`Container ${container}: ${container} + 3 backup = ${totalContainers} containers`);
}

Output:
Container 1: 1 + 3 backup = 4 containers
Container 2: 2 + 3 backup = 5 containers
...
Container 6: 6 + 3 backup = 9 containers
```

---

### Module 5: Loops Part 3 - Subtraction & Division ➖➗

**Exercise example:**
- Creates: starting amount, amount used/divided
- **Data count:** 2
- **Hints:** 2 (showing the starting value and the operation value)
- **Answer:** Complete code with loop and math + Output

**Hint format:**
```
Hint 1: We start with 20 corn boxes
Hint 2: Each day uses 2 boxes
```

**Answer format:**
```javascript
for (let day = 1; day <= 5; day++) {
  let boxesUsed = day * 2;
  let boxesRemaining = 20 - boxesUsed;
  console.log(`Day ${day}: Used ${boxesUsed} boxes. ${boxesRemaining} boxes remain.`);
}

Output:
Day 1: Used 2 boxes. 18 boxes remain.
Day 2: Used 4 boxes. 16 boxes remain.
...
Day 5: Used 10 boxes. 10 boxes remain.
```

---

### Module 5: Loops Part 4 - Accumulators 📊

**Exercise example:**
- Creates: accumulator variable (outside loop), values being added
- **Data count:** 2-3
- **Hints:** 2-3 (showing the accumulator setup and what's being tracked)
- **Answer:** Complete code with accumulator + Output

**Hint format:**
```
Hint 1: Create a total tracker starting at 0 - `let totalCorn = 0;`
Hint 2: Each machine adds 25 corn boxes
```

**Answer format:**
```javascript
let totalCorn = 0;
for (let machine = 1; machine <= 10; machine++) {
  totalCorn = totalCorn + 25;
  console.log(`After machine ${machine}: ${totalCorn} total boxes`);
}

Output:
After machine 1: 25 total boxes
After machine 2: 50 total boxes
...
After machine 10: 250 total boxes
```

---

### Module 6: Loops + Conditions 🔄❓ (FUTURE)

**Exercise example:**
- Creates: variables + loop + conditional check
- **Data count:** 2-3 (the data being compared)
- **Hints:** 2-3 (showing the data, not the loop or if/else)
- **Answer:** Complete code with loop and conditions + Output

**Hint format:**
```
Hint 1: Minimum score needed is 70
Hint 2: Check each student's score
```

**Answer format:**
```javascript
let minimumScore = 70;
for (let student = 1; student <= 5; student++) {
  let score = getScore(student); // example
  if (score >= minimumScore) {
    console.log(`Student ${student}: Pass`);
  } else {
    console.log(`Student ${student}: Needs help`);
  }
}

Output:
Student 1: Pass
Student 2: Needs help
...
```

---

### Module 7-8: Pirate Adventures 🏴‍☠️ (FUTURE)

**Exercise example:**
- Review exercises combining multiple concepts
- **Data count:** Varies by exercise
- **Hints:** Based on data being created (could be 2-5)
- **Answer:** Complete code + Output

**Pattern:** Same as regular modules - count the data, create hints accordingly

---

### Module 9: Functions 🧩 (FUTURE)

**Exercise example:**
- Creates: function with parameters
- **Data count:** Number of parameters
- **Hints:** One per parameter explaining what it does
- **Answer:** Complete function definition + example call + Output

**Hint format:**
```
Hint 1: Create function parameter "name" for the person's name
Hint 2: Create function parameter "age" for the person's age
```

**Answer format:**
```javascript
function introduce(name, age) {
  console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
}

introduce("Sam", 11);

Output:
Hi, I'm Sam and I'm 11 years old.
```

---

### Module 10: Arrays 📋 (FUTURE)

**Exercise example:**
- Creates: array with items
- **Data count:** Could be 1 (the array) or count of items
- **Hints:** Show how to create the array and add items
- **Answer:** Complete code with array operations + Output

**Hint format:**
```
Hint 1: Create an empty array - `let fruits = [];`
Hint 2: Add items to the array - `fruits.push("apple");`
```

**Answer format:**
```javascript
let fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");
console.log(fruits);
console.log(`We have ${fruits.length} fruits.`);

Output:
["apple", "banana", "orange"]
We have 3 fruits.
```

---

### Module 11: Objects 📦 (FUTURE)

**Exercise example:**
- Creates: object with properties
- **Data count:** Number of properties
- **Hints:** One per property showing how to set it
- **Answer:** Complete object creation + Output

**Hint format:**
```
Hint 1: Set the name property - `robot.name = "Beep";`
Hint 2: Set the color property - `robot.color = "blue";`
Hint 3: Set the battery property - `robot.battery = 85;`
```

**Answer format:**
```javascript
let robot = {};
robot.name = "Beep";
robot.color = "blue";
robot.battery = 85;
console.log(`Robot ${robot.name} is ${robot.color} with ${robot.battery}% battery.`);

Output:
Robot Beep is blue with 85% battery.
```

---

### Module 12: Events ⚡ (FUTURE)

**Exercise example:**
- Creates: event listener with handler
- **Data count:** Elements being targeted + event types
- **Hints:** Show what element and what event
- **Answer:** Complete event listener code + description of what happens

**Hint format:**
```
Hint 1: Select the button element - `let button = document.getElementById("myButton");`
Hint 2: Add a click event listener
```

**Answer format:**
```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log("Button was clicked!");
});

Output (when button is clicked):
Button was clicked!
```

---

## SUMMARY

**The universal pattern across ALL modules:**

1. **Count the data** being created in the exercise
2. **Create hints** - One per piece of data
3. **Write answer** - Complete code + Output section

**No matter the module, no matter the complexity, this pattern stays the same!**

---

## QUICK REFERENCE

**Hints section format:**
```javascript
hints: [
  "Hint about data piece 1",
  "Hint about data piece 2",
  "Hint about data piece 3"
  // One per piece of data, no more!
]
```

**Answer section format:**
```javascript
answer: "complete working code here\n\nOutput:\nwhat they should see when they run it"
```

**Always include:**
- ✅ Complete working code
- ✅ Blank line after code (`\n\n`)
- ✅ "Output:" label
- ✅ Expected output

---

END OF GUIDE
