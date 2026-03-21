# MODULE 3 — CONDITIONS PART 3 — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 3 Conditions Part 3 — teaches the concepts of 'at least' (>=) and 'at most' (<=) without any language-specific syntax
**Used by:** Any AI when generating Module 3 Part 3 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "child name" NOT childName
- The only exception is when a variable is being referred back to after already being introduced — still use the natural language description in quotes
- To display text AND a variable together, use a comma to separate them inside PRINT — e.g. PRINT "My name is", "child name"
- NEVER use + to join text and variables — concatenation has not been taught yet
- Keep ALL the warmth, stories, and factory theme — just remove any language-specific syntax
- HTML structure stays exactly the same — only the content inside changes

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.
>
> This rule protects children from being confused by things they have never seen before. It applies to every module, every exercise, and every helper box across the entire course.

**Examples of what this means in practice:**
- Concatenation with `+` has not been taught → do NOT use `+` to join text
- camelCase has not been taught → do NOT write camelCase variable names
- Arrays have not been taught → do NOT use `[ ]` for anything
- Functions have not been taught → do NOT use `( )` for anything other than context

---

## HELPER BOX 1: WHAT DOES "AT LEAST" MEAN? 🛡️

```html
<!-- Helper Box 1: What Does "At Least" Mean? -->
<div class="helper-box">
  <h3 class="box-title">🛡️ What Does "At Least" Mean? 🛡️</h3>

  <p>Imagine you're packing your bag for a field trip. Your teacher says,
  "You need to bring at least 2 water bottles." This means you can bring
  2, 3, 4, or more — but definitely not 0 or 1. "At least" means the
  number must be <strong>greater than or equal to</strong> a minimum amount.</p>

  <h4 class="sub-title">In Coding, We Check This With >=</h4>

  <p>The symbol <code>>=</code> means "greater than or equal to." It checks
  if a value meets or exceeds a minimum requirement.</p>

  <div class="code-example">
    <code>IF "water bottles" >= 2 THEN<br>&nbsp;&nbsp;PRINT "You have enough water!"<br>END IF</code>
  </div>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li><strong>IF</strong> — starts our condition check</li>
    <li><strong>"water bottles" >= 2</strong> — is the number of water bottles greater than or equal to 2?</li>
    <li><strong>THEN</strong> — if the answer is YES, do what comes next</li>
    <li><strong>PRINT "You have enough water!"</strong> — show this message</li>
    <li><strong>END IF</strong> — finishes the condition check</li>
  </ul>

  <h4 class="sub-title">Real Examples:</h4>

  <div class="code-example">
    <code>SET "safety guards in place" = 5<br>IF "safety guards in place" >= 3 THEN<br>&nbsp;&nbsp;PRINT "Machine is safe to operate"<br>END IF</code>
  </div>
  <p class="output">Output: Machine is safe to operate</p>

  <p class="note">💡 <strong>Remember:</strong> <code>>=</code> is like asking,
  "Do we have enough?" It's perfect for checking minimum requirements!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: WHAT DOES "AT MOST" MEAN? ⚖️

```html
<!-- Helper Box 2: What Does "At Most" Mean? -->
<div class="helper-box">
  <h3 class="box-title">⚖️ What Does "At Most" Mean? ⚖️</h3>

  <p>Now imagine the same field trip, but your teacher says, "You can bring
  at most 3 snacks." This means you can bring 0, 1, 2, or 3 — but
  definitely not 4 or more. "At most" means the number must be
  <strong>less than or equal to</strong> a maximum limit.</p>

  <h4 class="sub-title">In Coding, We Check This With <=</h4>

  <p>The symbol <code><=</code> means "less than or equal to." It checks
  if a value stays within or under a maximum limit.</p>

  <div class="code-example">
    <code>IF "snacks" <= 3 THEN<br>&nbsp;&nbsp;PRINT "You can bring your snacks!"<br>END IF</code>
  </div>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li><strong>IF</strong> — starts our condition check</li>
    <li><strong>"snacks" <= 3</strong> — is the number of snacks less than or equal to 3?</li>
    <li><strong>THEN</strong> — if the answer is YES, do what comes next</li>
    <li><strong>PRINT "You can bring your snacks!"</strong> — show this message</li>
    <li><strong>END IF</strong> — finishes the condition check</li>
  </ul>

  <h4 class="sub-title">Real Examples:</h4>

  <div class="code-example">
    <code>SET "gloves in storage box" = 12<br>IF "gloves in storage box" <= 15 THEN<br>&nbsp;&nbsp;PRINT "Storage box is not overfilled"<br>END IF</code>
  </div>
  <p class="output">Output: Storage box is not overfilled</p>

  <p class="note">💡 <strong>Remember:</strong> <code><=</code> is like asking,
  "Are we within the limit?" It's perfect for checking maximum capacities!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: COMBINING TEXT AND CONDITIONS IN OUTPUT 🖥️

```html
<!-- Helper Box 3: Combining Text and Conditions in Output -->
<div class="helper-box">
  <h3 class="box-title">🖥️ Combining Text and Conditions in Output 🖥️</h3>

  <p>When we check conditions, we often want to show the result with some
  helpful text. We can combine our own words with the result of a condition
  check using commas in our PRINT statement.</p>

  <h4 class="sub-title">Showing the Result of a Check:</h4>

  <div class="code-example">
    <code>SET "workers present" = 18<br>SET "maximum capacity" = 20<br>PRINT "Station is under capacity:", "workers present" <= "maximum capacity"</code>
  </div>
  <p class="output">Output: Station is under capacity: true</p>

  <p>The condition <code>"workers present" <= "maximum capacity"</code> checks
  if 18 is less than or equal to 20 — which is true. The PRINT statement shows
  our text first, then the result (true or false) of the check.</p>

  <h4 class="sub-title">More Examples:</h4>

  <div class="code-example">
    <code>SET "goggles available" = 10<br>SET "children at station" = 8<br>PRINT "Enough goggles for everyone:", "goggles available" >= "children at station"</code>
  </div>
  <p class="output">Output: Enough goggles for everyone: true</p>

  <div class="code-example">
    <code>SET "temperature" = 150<br>SET "maximum safe temperature" = 175<br>PRINT "Machine temperature is safe:", "temperature" <= "maximum safe temperature"</code>
  </div>
  <p class="output">Output: Machine temperature is safe: true</p>

  <p class="note">💡 <strong>Tip:</strong> Showing true/false results helps us
  quickly see whether our safety checks passed or failed!</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## HELPER BOX 4: REAL-WORLD SAFETY CHECKS IN THE FACTORY 🏭

```html
<!-- Helper Box 4: Real-World Safety Checks in the Factory -->
<div class="helper-box">
  <h3 class="box-title">🏭 Real-World Safety Checks in the Factory 🏭</h3>

  <p>In our Popcorn Factory, we use conditions with >= and <= every day to
  keep everyone safe. Let's look at some real examples from the factory floor!</p>

  <h4 class="sub-title">Example 1: Safety Guard Position</h4>

  <p>Every machine has a safety guard that must be in the correct position
  before the machine can start. The guard position must be at least position 5
  (greater than or equal to 5).</p>

  <div class="code-example">
    <code>SET "guard position" = 7<br>SET "minimum safe position" = 5<br>PRINT "Guard position is safe:", "guard position" >= "minimum safe position"</code>
  </div>
  <p class="output">Output: Guard position is safe: true</p>

  <h4 class="sub-title">Example 2: Storage Box Capacity</h4>

  <p>We have special boxes for storing safety gloves. Each box can hold at most
  20 pairs of gloves (less than or equal to 20). We must check before adding more!</p>

  <div class="code-example">
    <code>SET "gloves in box" = 18<br>SET "maximum box capacity" = 20<br>PRINT "Can add more gloves:", "gloves in box" < "maximum box capacity"</code>
  </div>
  <p class="output">Output: Can add more gloves: true</p>

  <h4 class="sub-title">Why These Checks Matter:</h4>

  <ul class="indented-list">
    <li><strong>Safety first:</strong> Machines only run when all safety checks pass</li>
    <li><strong>Efficiency:</strong> We know exactly when we need more supplies</li>
    <li><strong>Prevention:</strong> We catch problems before they become dangerous</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> In the factory, conditions with
  >= and <= help us maintain safe working conditions for everyone!</p>
</div>
<!-- End of Helper Box 4 -->
```

---

## HELPER BOX 5: PRACTICING WITH MINIMUMS AND MAXIMUMS 💡

```html
<!-- Helper Box 5: Practicing with Minimums and Maximums -->
<div class="helper-box">
  <h3 class="box-title">💡 Practicing with Minimums and Maximums 💡</h3>

  <p>Let's practice using both >= and <= together! Many factory checks involve
  making sure we have <strong>at least</strong> the minimum required, but
  <strong>at most</strong> the maximum allowed.</p>

  <h4 class="sub-title">Example: Helper Check</h4>

  <p>At each machine station, we need at least 2 helpers, but at most 5 people
  total for safety. Let's check if Station 3 is properly staffed:</p>

  <div class="code-example">
    <code>SET "helpers at station" = 3<br>SET "minimum helpers needed" = 2<br>SET "people at station" = 4<br>SET "maximum allowed" = 5<br><br>PRINT "Enough helpers:", "helpers at station" >= "minimum helpers needed"<br>PRINT "Not too crowded:", "people at station" <= "maximum allowed"</code>
  </div>
  <p class="output">Output:<br>Enough helpers: true<br>Not too crowded: true</p>

  <h4 class="sub-title">The Complete Safety Check Pattern:</h4>

  <p>When doing safety checks, we often need to verify multiple conditions.
  We check each requirement separately to make sure everything passes.</p>

  <div class="code-example">
    <code>SET "safety glasses" = 8<br>SET "children at machine" = 6<br>SET "machine temperature" = 160<br>SET "maximum temperature" = 175<br><br>PRINT "Check 1 - Enough glasses:", "safety glasses" >= "children at machine"<br>PRINT "Check 2 - Temperature safe:", "machine temperature" <= "maximum temperature"</code>
  </div>
  <p class="output">Output:<br>Check 1 - Enough glasses: true<br>Check 2 - Temperature safe: true</p>

  <p class="note">💡 <strong>You're doing great!</strong> You now know how to
  check both minimum requirements (>=) and maximum limits (<=). These are
  essential skills for keeping our factory running safely and efficiently!</p>

  <p>In our next module, we'll learn how to check <strong>multiple conditions
  at the same time</strong> using logical operators like AND and OR. This will
  make our safety checks even more powerful!</p>
</div>
<!-- End of Helper Box 5 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "child name" NOT childName
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER add template literal instructions (backticks, ${} etc) — that is JS specific
- NEVER introduce a concept, symbol, or syntax that has not already been taught in a previous helper box — Rule 6
- Keep the factory theme, the warm friendly tone, and the encouraging language
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode
- Use the >= and <= operators exactly as shown — these are the focus of Part 3

---

END OF MODULE 3 CONDITIONS PART 3 HELPER BOXES