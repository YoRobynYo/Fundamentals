# JAVASCRIPT CONNECTION SPECIFICATION

**Companion Document:** See JS-HINTS-PATTERN-GUIDE.md for guidance on creating hints and answers.

## How JavaScript Connects to HTML Exercises

---

## OVERVIEW

This document explains how the JavaScript file (`setupModules.js`) connects to the HTML exercises and how to properly update the exercise data when adding new modules or exercises.

**CRITICAL:** This is the SINGLE SOURCE OF TRUTH for all exercise hints and answers. When you update exercise content in HTML, you MUST also update the corresponding data in this JavaScript file.

---

## FILE LOCATION

**JavaScript File:** `setupModules.js` (or similar - located in the scripts folder)

This ONE file contains ALL exercise data for the ENTIRE course.

---

## STRUCTURE OVERVIEW

The JavaScript file has THREE main parts:

1. **Page Flow** - Handles cover page and credits page navigation
2. **Exercise Data** - Contains all hints and answers for every exercise (THE IMPORTANT PART!)
3. **Core Functions** - `showHint()`, `runCode()`, `resetExercise()` (DON'T MODIFY THESE!)

---

## EXERCISE DATA STRUCTURE

### The Main Object

All exercise data lives in ONE object called `exerciseData`:

```javascript
const exerciseData = {
  variables: {
    "1-part-a": { hints: [...], answer: "..." },
    "1-part-b": { hints: [...], answer: "..." },
    "2-part-a": { hints: [...], answer: "..." },
    // ... more exercises
  },
  
  operations: {
    "1-part-a": { hints: [...], answer: "..." },
    // ... more exercises
  },
  
  // ... more modules
};
```

### Naming Convention

**Module Section Names:**
- `variables` (Module 1)
- `operations` (Module 2)
- `conditions` (Module 3 - all parts use same section name)
- `logicalOperators` (Module 4)
- `loops` (Module 5)
- `functions` (future)
- `arrays` (future)

**Exercise Keys:**
- Format: `"exercise-part"`
- Example: `"1-part-a"`, `"1-part-b"`, `"2-part-a"`, `"2-part-b"`
- Always lowercase
- Always use hyphens (not underscores)
- Always include "part-a" and "part-b"

### Data for Each Exercise

Each exercise part needs:

```javascript
"1-part-a": {
  hints: [
    "Hint 1 text here",
    "Hint 2 text here",
    "Hint 3 text here",
    // ... up to 6-7 hints
    "Final hint before answer"
  ],
  answer: "complete code answer here"
}
```

---

## HINTS ARRAY RULES

### Number of Hints

- **Rule:** One hint per piece of data being created
- **See:** JS-HINTS-PATTERN-GUIDE.md for detailed examples
- **Range:** Typically 2-5 hints depending on exercise complexity

### Hint Format

**DO:**
- ✅ Start each hint with the step number: `"Step 1: ..."`
- ✅ Show the actual code: `"Step 1: Create a variable - \`let name = \"value\";\`"`
- ✅ Use backticks around code: `` `let x = 5;` ``
- ✅ Escape backticks in strings: `` \`code here\` ``
- ✅ Add helpful reminders: `"Remember: Text needs quotes!"`

**DON'T:**
- ❌ Give vague hints: "Think about what comes next"
- ❌ Skip step numbers
- ❌ Forget to escape backticks
- ❌ Write hints that don't match the HTML steps

### Example Hints Array

```javascript
hints: [
  "Step 1: Create a variable named \"bags\" and set it to 25.",
  "Step 2: Create a variable named \"boxes\" and set it to 10.",
  "Step 3: Calculate total - \`let total = bags + boxes;\`",
  "Step 4: Use template literal - \`console.log(\\`Total: ${total}\\`);\`",
  "Remember: Use ${} to insert variables into template literals!"
]
```

---

## ANSWER STRING RULES

### Format

- **Single string** with `\n` for line breaks
- **Complete, working code** that matches the exercise solution
- **Exact match** to what students should write

### Example Answer

```javascript
answer: "let bags = 25;\nlet boxes = 10;\nlet total = bags + boxes;\nconsole.log(`Total: ${total}`);"
```

**This represents:**
```javascript
let bags = 25;
let boxes = 10;
let total = bags + boxes;
console.log(`Total: ${total}`);
```

### Special Characters

- **New line:** `\n`
- **Template literal backticks:** `` \` `` (escaped)
- **Quote inside string:** `\"` (escaped)
- **Variables in template literals:** `${variableName}` (NOT escaped)

---

## HTML CONNECTION

### Button Attributes

Every exercise has three buttons in HTML:

```html
<button class="hint-button" data-section="variables" data-ex="1-part-a">Hint</button>
<button class="run-button" data-section="variables" data-ex="1-part-a">Run My Code</button>
<button class="reset-button" data-section="variables" data-ex="1-part-a">Reset My Code</button>
```

**CRITICAL ATTRIBUTES:**
- `data-section` → Must match the section name in exerciseData (e.g., "variables")
- `data-ex` → Must match the exercise key in exerciseData (e.g., "1-part-a")

### HTML Element IDs

The JavaScript looks for these IDs:

```html
<!-- Code block where student writes code -->
<div id="variables-ex1-part-a" contenteditable="true"></div>

<!-- Where hints appear -->
<p id="variables-hint1-part-a"></p>

<!-- Where code output appears -->
<pre id="variables-output1-part-a"></pre>

<!-- Where answer appears -->
<pre id="variables-answer1-part-a"></pre>
```

**ID Pattern:** `${section}-${type}${exercise}`

Examples:
- `variables-ex1-part-a` (code block)
- `variables-hint1-part-a` (hints)
- `variables-output1-part-a` (output)
- `variables-answer1-part-a` (answer)

---

## ADDING NEW MODULES

### Step 1: Add Section to exerciseData

```javascript
const exerciseData = {
  variables: { /* ... */ },
  operations: { /* ... */ },
  
  // NEW MODULE HERE
  loops: {
    "1-part-a": {
      hints: [
        "Step 1: Create a for loop that counts from 1 to 5",
        "Step 2: Use \`for (let i = 1; i <= 5; i++)\`",
        "Step 3: Inside loop use \`console.log(\\`Bag ${i}\\`);\`",
        "Remember: i++ means add 1 each time!"
      ],
      answer: "for (let i = 1; i <= 5; i++) {\n  console.log(`Bag ${i}`);\n}"
    },
    "1-part-b": {
      hints: [ /* ... */ ],
      answer: "..."
    }
    // ... all exercises for this module
  }
};
```

### Step 2: Verify HTML Matches

Make sure ALL these match:

**HTML buttons:**
```html
data-section="loops"
data-ex="1-part-a"
```

**HTML element IDs:**
```html
id="loops-ex1-part-a"
id="loops-hint1-part-a"
id="loops-output1-part-a"
id="loops-answer1-part-a"
```

**JavaScript section name:**
```javascript
loops: { "1-part-a": { ... } }
```

---

## UPDATING EXISTING EXERCISES

### When HTML Changes

If you update an exercise in HTML, you MUST update the JavaScript:

**HTML Changed:**
```html
<li><strong>Step 1:</strong> Create a variable named "cornBoxes" and set it to 20.</li>
```

**Update JS hints:**
```javascript
hints: [
  "Step 1: Create cornBoxes - \`let cornBoxes = 20;\`",  // Updated!
  // ... rest of hints
]
```

**Update JS answer:**
```javascript
answer: "let cornBoxes = 20;\n// ... rest of answer"  // Updated!
```

---

## COMMON MISTAKES TO AVOID

### ❌ WRONG: Mismatched section names
```javascript
// JavaScript
logicaloperators: { ... }  // lowercase, no camel case

// HTML
data-section="logical-operators"  // has hyphen
```

### ✅ CORRECT: Matching names
```javascript
// JavaScript
logicalOperators: { ... }  // camelCase

// HTML
data-section="logicalOperators"  // exact match
```

---

### ❌ WRONG: Wrong exercise key format
```javascript
"exercise1-partA": { ... }  // capital A, wrong format
```

### ✅ CORRECT: Proper format
```javascript
"1-part-a": { ... }  // all lowercase, number first
```

---

### ❌ WRONG: Not escaping backticks
```javascript
hints: [
  "Use `let x = 5;` to create a variable"  // breaks the code!
]
```

### ✅ CORRECT: Escaped backticks
```javascript
hints: [
  "Use \\`let x = 5;\\` to create a variable"  // works!
]
```

---

### ❌ WRONG: Answer without line breaks
```javascript
answer: "let x = 5; let y = 10; console.log(x + y);"  // all one line
```

### ✅ CORRECT: Answer with proper formatting
```javascript
answer: "let x = 5;\nlet y = 10;\nconsole.log(x + y);"  // proper lines
```

---

## TESTING CHECKLIST

After adding/updating exercises, verify:

- [ ] Section name in JS matches `data-section` in HTML
- [ ] Exercise key in JS matches `data-ex` in HTML
- [ ] All HTML IDs follow the pattern: `${section}-${type}${exercise}`
- [ ] Hints array has 5-7 items
- [ ] Each hint starts with "Step X:"
- [ ] Backticks are escaped in hints: `\``
- [ ] Answer string uses `\n` for line breaks
- [ ] Answer code is complete and correct
- [ ] Hint button shows hints one at a time
- [ ] Final hint reveals the answer
- [ ] Run button executes the code
- [ ] Reset button clears everything

---

## REFERENCE: CURRENT MODULE SECTIONS

As of March 2026:

```javascript
const exerciseData = {
  variables: { /* 5 exercises × 2 parts = 10 entries */ },
  operations: { /* 5 exercises × 2 parts = 10 entries */ },
  conditions: { /* ALL Conditions parts use same section */ },
  logicalOperators: { /* 10 entries (2 parts × 2 parts) */ },
  loops: { /* Will have 4 parts × 5 exercises × 2 = 40 entries */ },
  
  // Future modules (currently empty):
  functions: {},
  arrays: {},
  objects: {},
  events: {}
};
```

---

## WHEN THINGS BREAK

### Hint button does nothing
- **Check:** Does `data-section` match the JavaScript section name?
- **Check:** Does `data-ex` match the exercise key?
- **Check:** Is the hints array empty?

### Answer shows immediately
- **Check:** Are there enough hints? (needs 5-7)
- **Check:** Is hintProgress being reset properly?

### Code doesn't run
- **Check:** Does the code block have the correct ID?
- **Check:** Is `contenteditable="true"` set on the code block?

### Output shows "undefined"
- **Check:** Does the answer code actually have `console.log()`?
- **Check:** Is the code syntactically correct?

---

## FINAL REMINDERS

1. **ONE source of truth** - All data lives in `setupModules.js`
2. **Match everything** - Section names, exercise keys, HTML IDs must all align
3. **Escape backticks** - Use `\`` in hint strings
4. **Line breaks** - Use `\n` in answer strings
5. **Test everything** - Click all three buttons for every exercise
6. **Stay consistent** - Follow the naming patterns exactly

**When in doubt:** Look at the existing `variables` section as a reference - it's complete and correct!

---

END OF SPECIFICATION
