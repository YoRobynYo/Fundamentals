# MODULE 3 — CONDITIONS PART 5 — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 3 Conditions Part 5 — teaches multiple condition checks (else if) without any language-specific syntax
**Used by:** Any AI when generating Module 3 Part 5 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "flavour order" NOT flavourOrder
- The only exception is when a variable is being referred back to after already being introduced — still use the natural language description in quotes
- To display text AND a variable together, use a comma to separate them inside PRINT — e.g. PRINT "Get:", "ingredients needed"
- NEVER use + to join text and variables — concatenation has not been taught yet
- Keep ALL the warmth, stories, and Popcorn Factory theme — just remove the JS syntax
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

## HELPER BOX 1: WHEN YOU HAVE MORE THAN TWO OPTIONS 🍿

```html
<!-- Helper Box 1: When You Have More Than Two Options -->
<div class="helper-box">
  <h3 class="box-title">🍿 When You Have More Than Two Options 🍿</h3>

  <p>Welcome to the Ingredients Room at the Popcorn Factory! This is where we figure out
  which ingredients to grab based on the flavour someone ordered. The assistant explains:
  "We don't just make plain and buttery popcorn — we have LOTS of flavours!"</p>

  <h4 class="sub-title">Remember IF and ELSE?</h4>

  <p>In our last lesson, we learned how to check between two options using IF and ELSE.
  It works great when there are only two choices:</p>

  <div class="code-block">
    SET "flavour order" = "plain"<br><br>
    IF "flavour order" = "plain" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn only"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Get: Corn and butter"<br>
    END IF
  </div>
  <p class="output">Output: Get: Corn only</p>

  <p>This works perfectly for two flavours. But what happens when a customer orders
  "salty"? Or "cheese"? Or "caramel"? We can't just lump ALL those flavours into the
  ELSE part — they each need different ingredients!</p>

  <h4 class="sub-title">The Problem with Too Many IF Statements</h4>

  <p>You might think: "Why not just write lots of separate IF statements?" Let's try:</p>

  <div class="code-block">
    SET "flavour order" = "cheese"<br><br>
    IF "flavour order" = "plain" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn only"<br>
    END IF<br><br>
    IF "flavour order" = "buttery" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and butter"<br>
    END IF<br><br>
    IF "flavour order" = "cheese" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and cheese powder"<br>
    END IF
  </div>

  <p>This works, but it's messy. The computer has to check EVERY single IF, even after
  it already found the answer. There is a better way — and it's called an <strong>ELSE IF
  chain</strong>!</p>

  <p class="note">💡 <strong>Key idea:</strong> When you have more than two options,
  you need a way to check through several possibilities — one after another — until
  you find the right answer!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: THE ELSE IF CHAIN ✨

```html
<!-- Helper Box 2: The ELSE IF Chain -->
<div class="helper-box">
  <h3 class="box-title">✨ The ELSE IF Chain ✨</h3>

  <p>An <strong>ELSE IF chain</strong> lets you check through many different options,
  one at a time, in order. As soon as one matches, the computer runs that code and
  skips everything else. It's like a line of doors — you try each one until you find
  the one that opens!</p>

  <h4 class="sub-title">The Structure:</h4>

  <div class="code-block">
    IF [first condition] THEN<br>
    &nbsp;&nbsp;[do this if first condition is true]<br>
    ELSE IF [second condition] THEN<br>
    &nbsp;&nbsp;[do this if second condition is true]<br>
    ELSE IF [third condition] THEN<br>
    &nbsp;&nbsp;[do this if third condition is true]<br>
    ELSE<br>
    &nbsp;&nbsp;[do this if NONE of the above are true]<br>
    END IF
  </div>

  <h4 class="sub-title">How It Works — Step by Step:</h4>

  <ul class="indented-list">
    <li><strong>First:</strong> The computer checks the IF condition. Is it true? If yes, it runs that code and STOPS.</li>
    <li><strong>Second:</strong> If the first was false, it checks the first ELSE IF. Is this one true? If yes, it runs that code and STOPS.</li>
    <li><strong>Third:</strong> It keeps going down the chain, checking each ELSE IF in order.</li>
    <li><strong>Last:</strong> If NONE of the conditions are true, it runs whatever is in the ELSE part.</li>
  </ul>

  <h4 class="sub-title">Let's See It in Action:</h4>

  <div class="code-block">
    SET "flavour order" = "buttery"<br><br>
    IF "flavour order" = "plain" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn only"<br>
    ELSE IF "flavour order" = "buttery" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and butter"<br>
    ELSE IF "flavour order" = "salty" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and salt"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Unknown flavour"<br>
    END IF
  </div>
  <p class="output">Output: Get: Corn and butter</p>

  <p>Here's what happened: The computer checked "plain" — no match. Then it checked
  "buttery" — MATCH! It printed the ingredients and stopped. It never even looked at
  "salty" because it already found the answer.</p>

  <p class="note">💡 <strong>Important:</strong> The computer stops as soon as it finds
  a match. It does NOT check the rest of the chain!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: CHECK ORDER MATTERS! 🔍

```html
<!-- Helper Box 3: Check Order Matters! -->
<div class="helper-box">
  <h3 class="box-title">🔍 Check Order Matters! 🔍</h3>

  <p>Here is something really important about ELSE IF chains: the order you put your
  conditions in matters. The computer always checks from top to bottom, and it stops at
  the first match it finds.</p>

  <h4 class="sub-title">Think of It Like a Queue at the Factory</h4>

  <p>Imagine three workers standing in line to grab ingredients. The first worker checks
  if they know the flavour. If yes, they grab the bag and go. If not, the second worker
  tries. The third worker only gets a chance if both workers before them didn't match.</p>

  <h4 class="sub-title">Why Order Matters — An Example:</h4>

  <p>Let's say you want to check if a flavour is premium or not. Watch what happens if
  we put the checks in the wrong order:</p>

  <div class="code-block">
    SET "flavour order" = "chocolate"<br><br>
    IF "flavour order" = "chocolate" THEN<br>
    &nbsp;&nbsp;PRINT "This is a chocolate flavour"<br>
    ELSE IF "flavour order" = "chocolate" OR "flavour order" = "caramel" THEN<br>
    &nbsp;&nbsp;PRINT "This is a premium flavour"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Regular flavour"<br>
    END IF
  </div>

  <p>The first check catches "chocolate" — so it never reaches the second check that
  would have said "premium." The computer stopped too early!</p>

  <h4 class="sub-title">The Rule:</h4>

  <p>Always put your <strong>most specific checks first</strong> and your
  <strong>more general checks later</strong>. Think about which situations need to be
  caught before others.</p>

  <p>For our popcorn flavours, we check each specific flavour one at a time — that way
  each flavour gets exactly the right ingredients!</p>

  <p class="note">💡 <strong>Tip:</strong> Before writing your ELSE IF chain, list out
  all the possibilities and think about the best order to check them!</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## HELPER BOX 4: THE DEFAULT CASE — CATCHING EVERYTHING ELSE 📦

```html
<!-- Helper Box 4: The Default Case — Catching Everything Else -->
<div class="helper-box">
  <h3 class="box-title">📦 The Default Case — Catching Everything Else 📦</h3>

  <p>What happens when someone orders a flavour we have never heard of? Or types it
  wrong? That's where the final <strong>ELSE</strong> comes in — it's called the
  <strong>default case</strong>.</p>

  <h4 class="sub-title">The Safety Net</h4>

  <p>The ELSE at the end of an ELSE IF chain is like a safety net. If NONE of the
  specific conditions above it matched, the ELSE catches everything that's left.</p>

  <div class="code-block">
    SET "flavour order" = "rainbow"<br><br>
    IF "flavour order" = "plain" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn only"<br>
    ELSE IF "flavour order" = "buttery" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and butter"<br>
    ELSE IF "flavour order" = "salty" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and salt"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Unknown flavour — please check the menu!"<br>
    END IF
  </div>
  <p class="output">Output: Unknown flavour — please check the menu!</p>

  <h4 class="sub-title">When to Use ELSE</h4>

  <ul class="indented-list">
    <li><strong>Use ELSE</strong> when you want to handle any situation that doesn't match your specific checks — like wrong input, unknown options, or errors</li>
    <li><strong>Skip ELSE</strong> when you only care about certain specific options and don't need to do anything for the rest</li>
  </ul>

  <h4 class="sub-title">In These Exercises:</h4>

  <p>In Part A, you will check for two specific flavours — plain and buttery. In Part B,
  you will add a third flavour — salty. Each check gives the correct ingredients for
  that flavour. The ELSE catches anything that isn't one of your known flavours!</p>

  <p class="note">💡 <strong>Think of it this way:</strong> IF and ELSE IF catch the
  specific things you know about. ELSE catches everything else — the surprises,
  the mistakes, and the unknowns!</p>
</div>
<!-- End of Helper Box 4 -->
```

---

## HELPER BOX 5: BUILDING A flavour CHECKER — PUTTING IT ALL TOGETHER 🎯

```html
<!-- Helper Box 5: Building a Flavour Checker — Putting It All Together -->
<div class="helper-box">
  <h3 class="box-title">🎯 Building a Flavour Checker — Putting It All Together 🎯</h3>

  <p>Now let's build a complete flavour checker for the Ingredients Room! This is exactly
  what you will be doing in the exercises. The assistant needs a system that takes a
  flavour order and tells the worker exactly which ingredients to grab.</p>

  <h4 class="sub-title">Starting Simple — Two Flavours (Part A):</h4>

  <div class="code-block">
    SET "flavour order" = "plain"<br><br>
    IF "flavour order" = "plain" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn only"<br>
    ELSE IF "flavour order" = "buttery" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and butter"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Unknown flavour"<br>
    END IF
  </div>
  <p class="output">Output: Get: Corn only</p>

  <h4 class="sub-title">Adding More Flavours (Part B):</h4>

  <p>Now let's add "salty" to the list. We just add another ELSE IF before the ELSE:</p>

  <div class="code-block">
    SET "flavour order" = "salty"<br><br>
    IF "flavour order" = "plain" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn only"<br>
    ELSE IF "flavour order" = "buttery" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and butter"<br>
    ELSE IF "flavour order" = "salty" THEN<br>
    &nbsp;&nbsp;PRINT "Get: Corn and salt"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Unknown flavour"<br>
    END IF
  </div>
  <p class="output">Output: Get: Corn and salt</p>

  <h4 class="sub-title">The Pattern You Will Use:</h4>

  <p>In every exercise, you will follow this same pattern:</p>

  <ul class="indented-list">
    <li><strong>Part A:</strong> Check for two flavours — an IF and one ELSE IF, plus an ELSE for unknown flavours</li>
    <li><strong>Part B:</strong> Add a third flavour — one more ELSE IF inserted before the ELSE</li>
  </ul>

  <h4 class="sub-title">Quick Checklist Before You Start:</h4>

  <ul class="indented-list">
    <li>SET your variable with the flavour name</li>
    <li>Write IF for the first flavour, then ELSE IF for each additional flavour</li>
    <li>Each check PRINTs the correct ingredients</li>
    <li>End with ELSE for any unknown flavours</li>
    <li>Don't forget END IF at the end!</li>
  </ul>

  <p>The Ingredients Room has many sections — basic flavours, sweet flavours, savory
  flavours, premium flavours, and even ice cream flavours! Each section uses the same
  ELSE IF pattern, just with different flavour names and ingredients. You'll get lots
  of practice building these chains. Let's get started!</p>
</div>
<!-- End of Helper Box 5 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "flavour order" NOT flavourOrder
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER add template literal instructions (backticks, ${} etc) — that is JS specific
- NEVER introduce a concept, symbol, or syntax that has not already been taught in a previous helper box — Rule 6
- Use ELSE IF for the multiple check structure (this is standard pseudocode)
- Use IF / THEN / ELSE IF / ELSE / END IF as the keyword structure
- Keep the Popcorn Factory theme, the warm friendly tone, and the encouraging language
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode

---

END OF MODULE 3 PART 5 CONDITIONS HELPER BOXES