# MODULE 3 — CONDITIONS PART 1 — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 3 Conditions Part 1 — teaches comparison concepts without any language-specific syntax
**Used by:** Any AI when generating Module 3 Part 1 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- IF / THEN / END IF replaces if ( ) { } / if :
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "children present" NOT childrenPresent
- The only exception is when a variable is being referred back to after already being introduced — still use the natural language description in quotes
- To display text AND a variable together, use a comma to separate them inside PRINT — e.g. PRINT "We have", "children present"
- NEVER use + to join text and variables — concatenation has not been taught yet
- Keep ALL the warmth, stories, and factory theme — just remove the language syntax
- HTML structure stays exactly the same — only the content inside changes

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.
>
> This rule protects students from being confused by things they have never seen before. It applies to every module, every exercise, and every helper box across the entire course.

**Examples of what this means in practice:**
- Logical operators (AND, OR, NOT) have not been taught → do NOT use them yet
- ELSE has not been taught → do NOT use it in Part 1
- == or === have not been taught → only use > and < for now
- Any operator or keyword not yet covered in a helper box → do NOT use it

---

## HELPER BOX 1: WHAT IS A CONDITION? ⚖️

```html
<!-- Helper Box 1: What is a Condition? -->
<div class="helper-box">
  <h3 class="box-title">⚖️ What is a Condition? ⚖️</h3>

  <p>Imagine you're a safety inspector at the Popcorn Factory. Before any machine can start, you need to check certain things: "Are there enough workers?" "Is the machine safe?" "Do we have enough supplies?"</p>

  <p>Each of these checks is a <strong>condition</strong> — a question that can only be answered with <strong>true</strong> (yes) or <strong>false</strong> (no).</p>

  <h4 class="sub-title">Conditions Help Us Make Decisions</h4>

  <p>In coding, conditions work exactly the same way. We ask a question about our information, and the computer answers true or false. Based on that answer, our program can make decisions.</p>

  <h4 class="sub-title">Examples of Conditions in the Factory:</h4>

  <ul class="indented-list">
    <li>"Are there more than 15 children present?" → true or false</li>
    <li>"Is the number of vests less than the number of children?" → true or false</li>
    <li>"Are there zero boxes at the station?" → true or false</li>
  </ul>

  <h4 class="sub-title">In Pseudocode It Looks Like This:</h4>

  <div class="code-block">
    SET "children present" = 18<br>
    SET "minimum required" = 15<br>
    PRINT "children present" > "minimum required"
  </div>

  <p class="output">Output: true</p>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li><strong>SET</strong> — creates our variables with their values</li>
    <li><strong>PRINT</strong> — displays the result of our check</li>
    <li><strong>></strong> — the "greater than" symbol asks: "Is the first number bigger than the second?"</li>
    <li><strong>true</strong> — the computer's answer: "Yes, 18 is greater than 15"</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> Conditions don't change your information — they just check it and tell you true or false!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: COMPARISON OPERATORS — THE GREATER THAN SIGN ➡️

```html
<!-- Helper Box 2: Comparison Operators — The Greater Than Sign -->
<div class="helper-box">
  <h3 class="box-title">➡️ Comparison Operators: The Greater Than Sign ➡️</h3>

  <p>The greater than sign (>) is one of the most useful tools in coding. It compares two numbers and tells you if the first one is bigger.</p>

  <h4 class="sub-title">Think of It Like a Balance Scale:</h4>

  <p>Put one number on the left side of the scale and another on the right. If the left side goes down, that number is greater!</p>

  <h4 class="sub-title">Examples:</h4>

  <div class="code-block">
    PRINT 10 > 5      → true  (10 is bigger than 5)<br>
    PRINT 3 > 8       → false (3 is NOT bigger than 8)<br>
    PRINT 7 > 7       → false (they're equal, not greater)
  </div>

  <h4 class="sub-title">Using It With Variables:</h4>

  <p>In the factory, we use this to check if we have enough of something:</p>

  <div class="code-block">
    SET "vests available" = 25<br>
    SET "children present" = 18<br>
    PRINT "vests available" > "children present"
  </div>

  <p class="output">Output: true</p>

  <p>This tells us: "Do we have more vests than children?" → Yes, we do!</p>

  <h4 class="sub-title">Real Factory Checks:</h4>

  <ul class="indented-list">
    <li>"bags at station" > "minimum needed" → Do we have enough bags?</li>
    <li>"stations ready" > "stations needed" → Are there extra stations?</li>
    <li>"safety score" > "passing score" → Did we pass the safety check?</li>
  </ul>

  <p class="note">💡 <strong>Tip:</strong> The greater than sign (>) always points to the smaller number — like an arrow saying "this side is bigger!"</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: COMPARISON OPERATORS — THE LESS THAN SIGN ⬅️

```html
<!-- Helper Box 3: Comparison Operators — The Less Than Sign -->
<div class="helper-box">
  <h3 class="box-title">⬅️ Comparison Operators: The Less Than Sign ⬅️</h3>

  <p>The less than sign (<) does the opposite of greater than. It checks if the first number is smaller than the second.</p>

  <h4 class="sub-title">Back to Our Balance Scale:</h4>

  <p>This time, if the left side goes up, that number is less (smaller)!</p>

  <h4 class="sub-title">Examples:</h4>

  <div class="code-block">
    PRINT 5 < 10      → true  (5 is smaller than 10)<br>
    PRINT 8 < 3       → false (8 is NOT smaller than 3)<br>
    PRINT 7 < 7       → false (they're equal, not less)
  </div>

  <h4 class="sub-title">Using It With Variables:</h4>

  <p>In the factory, we use this to check if we're under a limit or have a shortage:</p>

  <div class="code-block">
    SET "children present" = 18<br>
    SET "maximum capacity" = 30<br>
    PRINT "children present" < "maximum capacity"
  </div>

  <p class="output">Output: true</p>

  <p>This tells us: "Are there fewer children than the maximum allowed?" → Yes, we're safely under capacity!</p>

  <h4 class="sub-title">Real Factory Checks:</h4>

  <ul class="indented-list">
    <li>"clipboards" < "stations needed" → Do we have a clipboard shortage?</li>
    <li>"temperature" < "maximum safe" → Is the machine too hot?</li>
    <li>"boxes at station" < "boxes needed" → Do we need more boxes delivered?</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> < points to the smaller number — the "pointy end" always aims at the smaller value!</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## HELPER BOX 4: PUTTING IT TOGETHER — CHECKING FACTORY CONDITIONS 🏭

```html
<!-- Helper Box 4: Putting It Together — Checking Factory Conditions -->
<div class="helper-box">
  <h3 class="box-title">🏭 Putting It Together: Checking Factory Conditions 🏭</h3>

  <p>Now let's see how these comparison operators work in real Popcorn Factory situations. Remember: every check gives us true or false!</p>

  <h4 class="sub-title">Example 1: Headcount Check</h4>

  <p>We need at least 15 children to run the production line, but no more than 30 for safety.</p>

  <div class="code-block">
    SET "children present" = 18<br>
    SET "minimum required" = 15<br>
    SET "maximum capacity" = 30<br>
    <br>
    PRINT "Checking minimum:", "children present" > "minimum required"<br>
    PRINT "Checking maximum:", "children present" < "maximum capacity"
  </div>

  <p class="output">Output:<br>
    Checking minimum: true<br>
    Checking maximum: true</p>

  <p>Both checks pass! We have enough children (18 > 15) and we're under the limit (18 < 30).</p>

  <h4 class="sub-title">Example 2: Safety Gear Check</h4>

  <p>Each child needs a safety vest. Do we have enough?</p>

  <div class="code-block">
    SET "vests available" = 25<br>
    SET "children present" = 18<br>
    <br>
    PRINT "Vest check:", "vests available" > "children present"
  </div>

  <p class="output">Output: Vest check: true</p>

  <p>Yes! 25 vests is more than 18 children. Everyone gets a vest!</p>

  <h4 class="sub-title">Example 3: Station Shortage Check</h4>

  <p>Each work station needs a clipboard. Do we have enough clipboards?</p>

  <div class="code-block">
    SET "clipboards" = 6<br>
    SET "stations needed" = 8<br>
    <br>
    PRINT "Shortage?", "clipboards" < "stations needed"
  </div>

  <p class="output">Output: Shortage? true</p>

  <p>Uh oh! 6 clipboards is less than 8 stations. We have a shortage!</p>

  <p class="note">💡 <strong>Factory Tip:</strong> Good factory managers check conditions BEFORE starting production — that's exactly what we're learning to do!</p>
</div>
<!-- End of Helper Box 4 -->
```

---

## HELPER BOX 5: MAKING DECISIONS WITH CONDITIONS 🤔

```html
<!-- Helper Box 5: Making Decisions With Conditions -->
<div class="helper-box">
  <h3 class="box-title">🤔 Making Decisions With Conditions 🤔</h3>

  <p>Knowing if something is true or false is useful — but the real power comes when we use that answer to make decisions!</p>

  <h4 class="sub-title">Introducing: IF / THEN / END IF</h4>

  <p>This is how we tell the computer: "IF this condition is true, THEN do something."</p>

  <h4 class="sub-title">The Basic Structure:</h4>

  <div class="code-block">
    IF [condition] THEN<br>
    &nbsp;&nbsp;[do something]<br>
    END IF
  </div>

  <h4 class="sub-title">A Simple Factory Example:</h4>

  <div class="code-block">
    SET "children present" = 18<br>
    SET "minimum required" = 15<br>
    <br>
    IF "children present" > "minimum required" THEN<br>
    &nbsp;&nbsp;PRINT "Production can begin!"<br>
    END IF
  </div>

  <p class="output">Output: Production can begin!</p>

  <p>Since 18 > 15 is true, the PRINT statement runs.</p>

  <h4 class="sub-title">What If the Condition is False?</h4>

  <div class="code-block">
    SET "children present" = 10<br>
    SET "minimum required" = 15<br>
    <br>
    IF "children present" > "minimum required" THEN<br>
    &nbsp;&nbsp;PRINT "Production can begin!"<br>
    END IF<br>
    <br>
    PRINT "Headcount check complete."
  </div>

  <p class="output">Output: Headcount check complete.</p>

  <p>Since 10 > 15 is false, the first PRINT is skipped. Only the last PRINT runs.</p>

  <h4 class="sub-title">Why This Matters in the Factory:</h4>

  <ul class="indented-list">
    <li>IF we have enough bags, THEN start the machine</li>
    <li>IF we're under capacity, THEN allow more children in</li>
    <li>IF we have a shortage, THEN request more supplies</li>
  </ul>

  <p class="note">💡 <strong>Coming Soon:</strong> In the next module, we'll learn ELSE — what to do when the condition is false. For now, we're focusing on checking if things are true!</p>
</div>
<!-- End of Helper Box 5 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "children present" NOT childrenPresent
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER add template literal instructions (backticks, ${} etc) — that is JS specific
- NEVER introduce a concept, symbol, or syntax that has not already been taught in a previous helper box — Rule 6
- For Part 1, ONLY use > and < operators — no ==, !=, >=, <= yet
- Only show IF/THEN/END IF structure — no ELSE yet
- Keep the factory theme, the warm friendly tone, and the encouraging language
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results (true/false)
- Every concept should be explained with a real-world analogy first, then the pseudocode

---

END OF MODULE 3 CONDITIONS PART 1 HELPER BOXES