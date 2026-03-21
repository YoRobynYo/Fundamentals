# EXERCISE BUILDER TEMPLATE & MASTER PROMPT
## For Fundamentals Course — Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Complete template and rules for building exercises

**This document contains:**
- ⚠️ Critical rules that MUST be followed
- 📋 Complete HTML template structure
- 📝 Step-by-step placeholder definitions
- ✅ Quality checklist
- 💡 Examples and patterns

> **IMPORTANT:** This is a Fundamentals course — ALL exercises must be 100% language-agnostic.
> No JavaScript, Python, or any real language syntax should appear anywhere.
> After completing Fundamentals 1 & 2, children will move into a language-specific course.
> The concepts they learn here will map directly to whichever language they choose.

---

# ⚠️ CRITICAL RULES — READ FIRST — NON-NEGOTIABLE ⚠️

**These rules override any other instructions or "improvements" you think of.**

---

## RULE 1: VARIABLE NAMING IN STEPS

### ✅ CORRECT — Natural Language in Quotes

```html
<li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "child name" and set its value to <code>"Ben"</code>.</li>
<li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "desk number" and set its value to <code>7</code>.</li>
<li><strong>Step 3:</strong>&nbsp;&nbsp;Create a variable named "bags at station" and set its value to <code>25</code>.</li>
```

**WHY:** Students must learn to convert natural language to a variable name themselves. This is a critical learning skill that applies to every language!

### ❌ WRONG — Giving Away the Variable Name

```html
<li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named <code>childName</code> and set its value to <code>"Ben"</code>.</li>
<li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named <code>deskNumber</code> and set its value to <code>7</code>.</li>
```

**This is WRONG!** You are doing the conversion for them. They learn nothing!

### The Pattern — ALWAYS Use This Format

```
Create a variable named "[natural language description]" and set its value to [value].
```

**Examples of natural language descriptions that children convert:**
- `"child name"` → child converts to: childName / child_name (depends on language chosen later)
- `"desk number"` → deskNumber / desk_number
- `"bags at station"` → bagsAtStation / bags_at_station
- `"total boxes needed"` → totalBoxesNeeded / total_boxes_needed
- `"machine status"` → machineStatus / machine_status

> **Note:** Naming conventions like camelCase or snake_case are NOT taught in Fundamentals. Students learn those when they pick a language. Here we only teach the concept of giving variables meaningful names.

### Exception — Referring to an Existing Variable

The ONLY time you reference a variable by name in steps is when referring back to one created in a previous step:

```html
<li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "total bags" and set its value to <code>100</code>.</li>
<li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "bags sold" and set its value to <code>35</code>.</li>
<li><strong>Step 3:</strong>&nbsp;&nbsp;Calculate "bags remaining" by subtracting "bags sold" from "total bags".</li>
```

When referencing back, keep the natural language description in quotes — still no real code syntax.

---

## RULE 2: EXERCISE 1 STEP 4 WORDING

### ✅ CORRECT Pattern — Exercise 1 Part A

The final step in Exercise 1 Part A MUST:
1. Use theme-specific wording (NOT generic)
2. Show the complete pseudocode example
3. Have NO introductory text before the code block

```html
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to check the headcount:
  <div class="code-example">
    <code>
      SET workersPresent = 18<br>
      SET maximumCapacity = 20<br>
      PRINT "Workers present: " + workersPresent<br>
      PRINT workersPresent < maximumCapacity
    </code>
  </div>
</li>
```

**Key elements:** theme-specific action ("check the headcount"), colon after the action, pseudocode block immediately after with no extra text.

### ❌ WRONG — Generic Wording

```html
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code in the code block below.</li>
```

Too generic! Use specific wording that matches the theme and task.

### ❌ WRONG — Extra Introductory Text Before Code

```html
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to check the headcount:
  <p>Here's the complete code:</p>   ← DELETE THIS LINE!
  <div class="code-example">
    <code>...</code>
  </div>
</li>
```

**NEVER add phrases like:**
- "Here's the complete code:"
- "Here's how it looks:"
- "The code should be:"
- "Here's the solution:"

The pseudocode speaks for itself. Just show it!

### ❌ WRONG — Real Language Syntax in the Code Example

```
// WRONG - JavaScript syntax
let workersPresent = 18;
console.log(`Workers: ${workersPresent}`);

# WRONG - Python syntax
workers_present = 18
print(f"Workers: {workers_present}")
```

**This course is LANGUAGE-AGNOSTIC. NEVER use real language syntax in any exercise. Always use pseudocode (see Rule 5 for pseudocode standards).**

### Theme-Specific Wording Examples by Module

**Module 1 — Variables (Classroom):**
- "Now create the code to introduce yourself:"
- "Now write the code to organise the supplies:"

**Module 2 — Operators (Factory):**
- "Now calculate the total supplies:"
- "Now write the code to count the remaining items:"

**Module 3 — Conditions (Factory):**
- "Now write the code to check the headcount:"
- "Now write the code to see if we have enough supplies:"

**Module 4 — Logical Operators (Factory):**
- "Now write the code to check if BOTH conditions are met:"

**Module 5 — Loops (Factory):**
- "Now write the code to count the corn boxes:"

---

## RULE 3: EXERCISES 2–5 FINAL STEP WORDING

For Exercises 2, 3, 4, and 5 (ALL Parts A and B), the final step MUST reference the specific task from Steps 1–3. NO pseudocode examples.

```html
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to [specific task from above] in the code block below.</li>
```

### ✅ CORRECT Examples

```html
<!-- Loops Part 1 Exercise 2 -->
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to count corn boxes for machines 1 through 10 in the code block below.</li>

<!-- Conditions Part 2 Exercise 4 -->
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to check if bags at station is not equal to minimum needed in the code block below.</li>
```

### ❌ WRONG Examples

```html
<!-- Too generic -->
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now try and write the code in the code block below.</li>

<!-- Exercises 2-5 NEVER show pseudocode examples -->
<li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to count the machines:
  <div class="code-example">...</div>   ← DELETE THIS! Only Ex 1 Part A shows code!
</li>
```

---

## RULE 4: DO NOT CHANGE WHAT IS ALREADY CORRECT

If you are given a spec file that already has:
- ✅ Variable names in natural language with quotes
- ✅ Exercise 1 with theme-specific wording and pseudocode
- ✅ Exercises 2–5 with task-specific "Now write the code to..." wording

**DO NOT:**
- ❌ "Fix" correct natural language variable names to code syntax
- ❌ "Improve" the wording
- ❌ Add extra introductory text
- ❌ Change anything that is already correct

**Your job is to BUILD what the spec says, not to improve what you think could be better!**

---

## RULE 5: PSEUDOCODE STANDARDS

> This is the most important rule for the Fundamentals course.
> All code examples MUST use pseudocode — not JavaScript, Python, or any real language.
> Pseudocode is readable, logic-focused, and language-agnostic.

### Pseudocode Keywords to Use

| Concept | Keyword | Example |
|---|---|---|
| Variables | `SET` | `SET "child name" = "Ben"` |
| Output | `PRINT` | `PRINT "Hello", "child name"` |
| Output with text | `PRINT` with commas | `PRINT "Workers present:", "workers present"` |
| Conditions | `IF / THEN / END IF` | `IF score > 10 THEN ... END IF` |
| Loops | `FOR / FROM / TO / DO / END FOR` | `FOR i FROM 1 TO 10 DO ... END FOR` |
| Logic | `AND / OR / NOT` | `IF a > 1 AND b < 5 THEN` |

### How to Display Text and Variables Together

Use a **comma** to separate text and variable names inside a PRINT statement. This is the standard pseudocode approach used in education worldwide — it avoids introducing concatenation (`+`) before it has been taught.

```
SET "workers present" = 18
SET "maximum capacity" = 20
PRINT "Workers present:", "workers present"
PRINT "Maximum capacity:", "maximum capacity"
```

**NEVER use `+` to join text and variables** — concatenation has not been taught in Fundamentals.

### ✅ CORRECT — Pseudocode Example

```
SET "workers present" = 18
SET "maximum capacity" = 20
PRINT "Workers present:", "workers present"
PRINT "Maximum capacity:", "maximum capacity"
```

### ❌ WRONG — Real Language Examples

```
// JavaScript — NEVER use this in Fundamentals
let workersPresent = 18;
console.log(`Workers: ${workersPresent}`);

# Python — NEVER use this in Fundamentals
workers_present = 18
print(f"Workers: {workers_present}")
```

**Using real language syntax locks children into one language. Use pseudocode ONLY.**

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.
>
> This rule protects children from being confused by things they have never seen before. It applies to every module, every exercise, and every helper box across the entire course.

**Examples of what this means in practice:**
- Concatenation with `+` has not been taught → do NOT use `+` to join text and variables
- camelCase has not been taught → do NOT write camelCase variable names
- Arrays have not been taught → do NOT use `[ ]` for anything
- Functions have not been taught → do NOT use `( )` for anything other than context
- Any operator or keyword not yet covered in a helper box → do NOT use it

**The simple test:** *"Has this been taught in a helper box yet?"*
- YES → you can use it
- NO → **STOP and check with the user before proceeding**

> ⚠️ Rule 6 requires human judgement — only the course creator knows exactly what has been taught so far. Do NOT make this decision yourself. Always confer with the user.

---

# PART 1: THE COMPLETE EXERCISE TEMPLATE

This is the exact HTML structure that MUST be followed for every exercise.
Variable parts are marked with `[PLACEHOLDER_NAME]`.

```html
<!-- Exercise [NUMBER]: [TITLE] [EMOJI] -->
<div class="exercise-box">
  <h3 class="exercise-title">Exercise [NUMBER]: [TITLE] [EMOJI]</h3>

  <p>[EXERCISE_INTRODUCTION]</p>

  <!-- Part A -->
  <div style="text-align: center;">
    <img class="reminder-image" src="Images/[IMAGE_FILENAME].jpg" alt="[IMAGE_ALT_TEXT]">
  </div>

  <h4 class="sub-title">Part A: [PART_A_TITLE]</h4>

  <p>[PART_A_PARAGRAPH]</p>

  <ul class="indented-list">
    <li><strong>Step 1:</strong>&nbsp;&nbsp;[STEP_1_INSTRUCTION]</li>
    <li><strong>Step 2:</strong>&nbsp;&nbsp;[STEP_2_INSTRUCTION]</li>
    <li><strong>Step 3:</strong>&nbsp;&nbsp;[STEP_3_INSTRUCTION]</li>
    <li><strong>Step 4:</strong>&nbsp;&nbsp;[STEP_4_INSTRUCTION_TEXT]:
      <div class="code-example">
        <code>[COMPLETE_PSEUDOCODE_ANSWER]</code>
      </div>
    </li>
  </ul>

  <label for="[SECTION_NAME]-ex[NUMBER]-part-a" class="code-label">Add your code in the code block below</label>
  <div class="code-block" contenteditable="true" id="[SECTION_NAME]-ex[NUMBER]-part-a"></div>

  <div class="exercise-buttons">
    <button class="hint-button" data-section="[SECTION_NAME]" data-ex="[NUMBER]-part-a">Hint</button>
    <button class="run-button" data-section="[SECTION_NAME]" data-ex="[NUMBER]-part-a">Run My Code</button>
    <button class="reset-button" data-section="[SECTION_NAME]" data-ex="[NUMBER]-part-a">Reset My Code</button>
  </div>

  <p class="hint" id="[SECTION_NAME]-hint[NUMBER]-part-a"></p>
  <pre class="output-block" id="[SECTION_NAME]-output[NUMBER]-part-a"></pre>
  <pre class="answer-block" id="[SECTION_NAME]-answer[NUMBER]-part-a"></pre>

  <!-- Part B -->
  <h4 class="sub-title">Part B: [PART_B_TITLE]</h4>

  <p>[PART_B_TRANSITION]</p>
  <p>[PART_B_PARAGRAPH]</p>

  <ul class="indented-list">
    <li><strong>Step 1:</strong>&nbsp;&nbsp;[STEP_1_INSTRUCTION]</li>
    <li><strong>Step 2:</strong>&nbsp;&nbsp;[STEP_2_INSTRUCTION]</li>
    <li><strong>Step 3:</strong>&nbsp;&nbsp;[STEP_3_INSTRUCTION]</li>
    <li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to [specific task referencing Steps 1-3] in the code block below.</li>
  </ul>

  <label for="[SECTION_NAME]-ex[NUMBER]-part-b" class="code-label">Add your code in the code block below</label>
  <div class="code-block" contenteditable="true" id="[SECTION_NAME]-ex[NUMBER]-part-b"></div>

  <div class="exercise-buttons">
    <button class="hint-button" data-section="[SECTION_NAME]" data-ex="[NUMBER]-part-b">Hint</button>
    <button class="run-button" data-section="[SECTION_NAME]" data-ex="[NUMBER]-part-b">Run My Code</button>
    <button class="reset-button" data-section="[SECTION_NAME]" data-ex="[NUMBER]-part-b">Reset My Code</button>
  </div>

  <p class="hint" id="[SECTION_NAME]-hint[NUMBER]-part-b"></p>
  <pre class="output-block" id="[SECTION_NAME]-output[NUMBER]-part-b"></pre>
  <pre class="answer-block" id="[SECTION_NAME]-answer[NUMBER]-part-b"></pre>
</div>
<!-- End of exercise [NUMBER] -->
```

---

## CRITICAL: HOW PARAGRAPHS CONNECT TO STEPS

The Part A and Part B paragraphs must contain ALL the data needed to build the steps. Every number or value in a step must appear in the paragraph first.

### ❌ BAD EXAMPLE — Vague Paragraph

**Paragraph:** "We need to check if there are bags at the station."

**Steps:**
- Step 1: Create a variable named "bags at station" and set it to 25.
- Step 2: Create a variable named "minimum needed" and set it to 20.

**PROBLEM:** Where did "25" and "20" come from? They weren't in the paragraph!

### ✅ GOOD EXAMPLE — Complete Paragraph

**Paragraph:** "We need to check if there are bags at the station. We currently have 25 bags ready. The minimum we need to start production is 20 bags. Let's check if we have enough."

**Steps:**
- Step 1: Create a variable named "bags at station" and set its value to 25.
- Step 2: Create a variable named "minimum needed" and set its value to 20.
- Step 3: Use PRINT to check if "bags at station" is greater than or equal to "minimum needed".

**CORRECT:** All the data (25, 20, what to check) is in the paragraph first!

### The Rule

**Paragraphs → Variable names and values → Steps**

If a number or value appears in the steps, it MUST appear in the paragraph first!

---

# PART 2: PLACEHOLDER DEFINITIONS

### [NUMBER]
The exercise number (1, 2, 3, 4, or 5).

**Example:** `1`, `2`, `3`

---

### [TITLE]
A short, descriptive title for the exercise (2–5 words). Describes what the exercise is about and matches the theme.

**Examples:**
- "Classroom Introduction"
- "Great Hall Headcount"
- "Counting Pencils"

---

### [EMOJI]
A single emoji that represents the exercise theme.

**Examples:**
- 👋 introductions
- 👥 headcount
- ✏️ school supplies
- 🌽 factory/corn

---

### [EXERCISE_INTRODUCTION]
A 1–2 sentence paragraph that sets the scene and explains what the child will be doing. Should be engaging and relevant to the theme.

**Example:** "Welcome to the Grand Hall! Before production begins, we need to count how many workers are present and make sure we have enough space for everyone."

---

### [IMAGE_FILENAME]
The filename of the reminder image (without path).

This is flexible — the course creator decides:
- One image per exercise (Part A and Part B)
- One image per module only
- No image at all
- Additional images added at a later date

Current default: `first-steps-console.jpg` — but this may change per module.

⚠️ Do NOT assume an image is required. Always check the spec file for the current module — if no image is specified, leave the image tag out entirely.

---

### [IMAGE_ALT_TEXT]
Descriptive alt text for the reminder image.

⚠️ Only include alt text if an image has been specified in the spec file.

Can be customised per module:
- "First steps using output"
- "Using comparison operators"
- "Using logical operators in conditions"

---

### [PART_A_TITLE]
A short title for Part A (2–4 words).

**Examples:**
- "Introduce Yourself"
- "Check the Headcount"
- "Count the Pencils"
- "First Five Machines"

---

### [PART_A_PARAGRAPH]
The scenario paragraph for Part A. Must be 2–4 sentences and contain ALL variable names (in natural language) and ALL values/numbers used in the steps.

**Example:** "Before we can start any work at Station One, we need to make sure the supplies have arrived. We have 25 bags at the station right now. The minimum we need to start production is 20 bags. Let's check if we have enough!"

---

### [STEP_X_INSTRUCTION]
Individual step instructions — FOLLOW THE CRITICAL RULES!

**For creating variables:**
```
Create a variable named "[natural language]" and set its value to [value].
```

**For calculations:**
```
Calculate "[result name]" by [operation description using natural language variable names].
```

**For output:**
```
Use PRINT to display [what to show/compare].
```

**Examples:**
- `Create a variable named "children present" and set its value to 18.`
- `Create a variable named "maximum capacity" and set its value to 20.`
- `Calculate "bags remaining" by subtracting "bags sold" from "total bags".`
- `Use PRINT to check if "children present" is less than "maximum capacity".`

---

### [STEP_4_INSTRUCTION_TEXT]
**FOR EXERCISE 1 PART A ONLY:** Theme-specific wording before the pseudocode example.

**Format:** `Now [theme-specific action]:`

**Examples:**
- `Now write the code to check the headcount:`
- `Now create the code to verify the supplies:`
- `Now write the code to count the boxes:`

**Remember:** NO extra text like "Here's the complete code:" — just the action and a colon!

---

### [COMPLETE_PSEUDOCODE_ANSWER]
**FOR EXERCISE 1 PART A ONLY:** The complete pseudocode solution.

**Rules:**
- Must use pseudocode only — no real language syntax
- Must match exactly what the steps describe
- Use `SET` for variables, `PRINT` for output, `IF`/`FOR` for logic
- Use `<br>` tags for line breaks in HTML

**Example:**
```html
<code>SET workersPresent = 18<br>SET maximumCapacity = 20<br>PRINT "Workers present: " + workersPresent<br>PRINT workersPresent < maximumCapacity</code>
```

---

### [PART_B_TRANSITION]
A 1-sentence link from Part A to Part B. Acknowledges Part A success and introduces Part B scenario.

**Examples:**
- "Great! That check passed. Now let's verify another station."
- "Perfect! Now let's check a different scenario."
- "Excellent work! But what if the numbers were different?"

---

### [PART_B_TITLE]
A short title for Part B (2–4 words).

**Examples:**
- "Different Numbers"
- "Another Station"
- "Checking Again"

---

### [PART_B_PARAGRAPH]
The scenario paragraph for Part B. Similar to Part A but a different scenario/numbers. Must contain ALL variable names and values for Part B steps (2–4 sentences).

---

### [SECTION_NAME]
The section name for this module. Must match exactly between HTML and the course runner.

**Current section names:**
- `variables` (Module 1)
- `operations` (Module 2)
- `conditions` (Module 3 — all parts)
- `logicalOperators` (Module 4 — both parts)
- `loops` (Module 5 — all parts)

---

# PART 3: EXAMPLE EXERCISE

Here is a complete example showing all pieces working together. Notice: pseudocode only, natural language variable names, no real language syntax anywhere.

```html
<!-- Exercise 1: Great Hall Headcount 👥 -->
<div class="exercise-box">
  <h3 class="exercise-title">Exercise 1: Great Hall Headcount 👥</h3>

  <p>Welcome to the Grand Hall! Before production begins, we need to count how many workers are present and make sure we have enough space for everyone.</p>

  <!-- Part A -->
  <div style="text-align: center;">
    <img class="reminder-image" src="Images/first-steps-console.jpg" alt="Using output to display information">
  </div>

  <h4 class="sub-title">Part A: Checking Today's Headcount</h4>

  <p>Today we have 18 workers who came to work at the Grand Hall. The maximum capacity for safety reasons is 20 workers. We need to check if we're under the maximum capacity so production can safely begin.</p>

  <ul class="indented-list">
    <li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "workers present" and set its value to <code>18</code>.</li>
    <li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "maximum capacity" and set its value to <code>20</code>.</li>
    <li><strong>Step 3:</strong>&nbsp;&nbsp;Use PRINT to display both values.</li>
    <li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to check the headcount:
      <div class="code-example">
        <code>SET workersPresent = 18<br>SET maximumCapacity = 20<br>PRINT "Workers present: " + workersPresent<br>PRINT workersPresent < maximumCapacity</code>
      </div>
    </li>
  </ul>

  <label for="conditions-ex1-part-a" class="code-label">Add your code in the code block below</label>
  <div class="code-block" contenteditable="true" id="conditions-ex1-part-a"></div>

  <div class="exercise-buttons">
    <button class="hint-button" data-section="conditions" data-ex="1-part-a">Hint</button>
    <button class="run-button" data-section="conditions" data-ex="1-part-a">Run My Code</button>
    <button class="reset-button" data-section="conditions" data-ex="1-part-a">Reset My Code</button>
  </div>

  <p class="hint" id="conditions-hint1-part-a"></p>
  <pre class="output-block" id="conditions-output1-part-a"></pre>
  <pre class="answer-block" id="conditions-answer1-part-a"></pre>

  <!-- Part B -->
  <h4 class="sub-title">Part B: Checking Tomorrow's Headcount</h4>

  <p>Perfect! Today we are safely under capacity.</p>

  <p>Tomorrow we are expecting more workers — 22 are scheduled to arrive. The maximum capacity is still 20 workers. Let's check if we'll be over capacity tomorrow.</p>

  <ul class="indented-list">
    <li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "workers present" and set its value to <code>22</code>.</li>
    <li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "maximum capacity" and set its value to <code>20</code>.</li>
    <li><strong>Step 3:</strong>&nbsp;&nbsp;Use PRINT to display both values.</li>
    <li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to check tomorrow's headcount in the code block below.</li>
  </ul>

  <label for="conditions-ex1-part-b" class="code-label">Add your code for Part B below</label>
  <div class="code-block" contenteditable="true" id="conditions-ex1-part-b"></div>

  <div class="exercise-buttons">
    <button class="hint-button" data-section="conditions" data-ex="1-part-b">Hint</button>
    <button class="run-button" data-section="conditions" data-ex="1-part-b">Run My Code</button>
    <button class="reset-button" data-section="conditions" data-ex="1-part-b">Reset My Code</button>
  </div>

  <p class="hint" id="conditions-hint1-part-b"></p>
  <pre class="output-block" id="conditions-output1-part-b"></pre>
  <pre class="answer-block" id="conditions-answer1-part-b"></pre>
</div>
<!-- End of exercise 1 -->
```

---

# PART 4: QUALITY CHECKLIST

Before submitting any exercise, verify all of the following:

### Language-Agnostic Check — MOST IMPORTANT
- [ ] Zero real language syntax anywhere (no `let`, `var`, `const`, `console.log`, `print()`, `def`, etc.)
- [ ] All code examples use pseudocode only (`SET`, `PRINT`, `IF`, `FOR`)
- [ ] Variable names in steps use natural language in quotes, not code syntax
- [ ] No naming convention rules mentioned (no camelCase, no snake_case)
- [ ] `PRINT` used instead of `console.log()` or `print()`

### Structure
- [ ] Exercise box has correct class: `exercise-box`
- [ ] Title has correct class: `exercise-title`
- [ ] Sub-titles have correct class: `sub-title`
- [ ] Lists use correct class: `indented-list`
- [ ] All IDs follow pattern: `[section]-[type][number]-part-[a/b]`

### Content Quality
- [ ] Exercise introduction is engaging and clear
- [ ] Part A paragraph contains ALL data for the steps
- [ ] Part B paragraph contains ALL data for the steps
- [ ] Steps are clear and build logically
- [ ] Exercise 1 Part A shows pseudocode with theme-specific wording
- [ ] Exercises 2–5 reference specific task: "Now write the code to [task] in the code block below"
- [ ] NO introductory text before pseudocode examples
- [ ] Part B transition acknowledges Part A and introduces Part B

### Technical Accuracy
- [ ] All button `data-section` attributes match the section name
- [ ] All button `data-ex` attributes match the exercise-part pattern
- [ ] All element IDs are unique and follow the naming pattern
- [ ] Pseudocode in Ex 1 Part A matches exactly what the steps describe

### Consistency
- [ ] Theme (classroom/factory) is consistent throughout
- [ ] Emoji is appropriate for the exercise
- [ ] Tone matches target age group (10–12 years old)
- [ ] No jargon or overly technical language

---

## END OF TEMPLATE MASTER
