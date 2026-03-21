# MODULE 3 — CONDITIONS PART 2 — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 3 Conditions Part 2 — teaches exact matching checks without any language-specific syntax
**Used by:** Any AI when generating Module 3 Part 2 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- IF / THEN / END IF is used for conditions
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "bag position" NOT bagPosition
- The only exception is when a variable is being referred back to after already being introduced — still use the natural language description in quotes
- To display text AND a variable together, use a comma to separate them inside PRINT — e.g. PRINT "Position:", "bag position"
- NEVER use + to join text and variables — concatenation has not been taught yet
- Keep ALL the warmth, stories, and factory theme — just remove any language-specific syntax
- HTML structure stays exactly the same — only the content inside changes

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.
>
> This rule protects students from being confused by things they have never seen before. It applies to every module, every exercise, and every helper box across the entire course.

**Examples of what this means in practice:**
- Concatenation with `+` has not been taught → do NOT use `+` to join text
- camelCase has not been taught → do NOT write camelCase variable names
- Arrays have not been taught → do NOT use `[ ]` for anything
- Functions have not been taught → do NOT use `( )` for anything other than context
- OR / AND operators have not been taught in Part 1 → do NOT use them until they are taught here

---

## HELPER BOX 1: WHAT IS EXACT MATCHING? 🎯

```html
<!-- Helper Box 1: What is Exact Matching? -->
<div class="helper-box">
  <h3 class="box-title">🎯 What is Exact Matching? 🎯</h3>

  <p>Sometimes at the factory, we need to check if something is <strong>exactly</strong>
  right — not just close, but perfect. Imagine you're checking if a key fits a lock.
  Either it fits exactly, or it doesn't. There's no "almost fits"!</p>

  <h4 class="sub-title">Exact Matching in Coding</h4>

  <p>In coding, we use conditions to check if two things are exactly the same.
  We ask a question: "Is this value EXACTLY equal to that value?" The answer is
  always either <strong>true</strong> (yes, they match) or <strong>false</strong>
  (no, they don't match).</p>

  <h4 class="sub-title">Checking Text Values</h4>

  <p>Let's say we're checking if a bag is positioned exactly under the machine's chute.
  We have two text values to compare:</p>

  <div class="code-block">
    SET "bag position" = "under chute"<br>
    SET "correct position" = "under chute"<br>
    <br>
    IF "bag position" = "correct position" THEN<br>
    &nbsp;&nbsp;PRINT "Perfect! Bag is in the correct position."<br>
    END IF
  </div>

  <p class="output">Output: Perfect! Bag is in the correct position.</p>

  <h4 class="sub-title">The Key Idea</h4>

  <p>When you use the <strong>=</strong> symbol between two values in a condition,
  you're asking: "Are these two things exactly the same?" The computer checks
  character by character (for text) or value by value (for numbers).</p>

  <p class="note">💡 <strong>Remember:</strong> "under chute" matches "under chute"
  exactly — same letters, same spaces, same everything. But "under chute" does
  NOT match "Under Chute" because capital letters are different!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: CHECKING IF THINGS ARE EQUAL ✅

```html
<!-- Helper Box 2: Checking if Things Are Equal -->
<div class="helper-box">
  <h3 class="box-title">✅ Checking if Things Are Equal ✅</h3>

  <p>At Station One, we often need to verify that things match exactly before
  we start the machines. Let's look at how we write these checks in pseudocode.</p>

  <h4 class="sub-title">The Pattern for Equality Checks</h4>

  <p>Every equality check follows this pattern:</p>

  <div class="code-block">
    IF [first value] = [second value] THEN<br>
    &nbsp;&nbsp;[What to do if they match]<br>
    END IF
  </div>

  <h4 class="sub-title">Real Factory Example: Box Number Check</h4>

  <p>We need to check if a supply box has the correct number for our station:</p>

  <div class="code-block">
    SET "box number" = 5<br>
    SET "station number" = 5<br>
    <br>
    IF "box number" = "station number" THEN<br>
    &nbsp;&nbsp;PRINT "Correct box! This belongs to Station 5."<br>
    END IF
  </div>

  <p class="output">Output: Correct box! This belongs to Station 5.</p>

  <h4 class="sub-title">What If They Don't Match?</h4>

  <p>When the values don't match, the computer simply skips whatever is inside
  the IF block. It doesn't show an error — it just moves on to the next line
  of code.</p>

  <div class="code-block">
    SET "box number" = 3<br>
    SET "station number" = 5<br>
    <br>
    IF "box number" = "station number" THEN<br>
    &nbsp;&nbsp;PRINT "Correct box!"<br>
    END IF<br>
    PRINT "Check complete."
  </div>

  <p class="output">Output: Check complete.</p>
  <p>(The "Correct box!" message doesn't appear because 3 is not equal to 5.)</p>

  <p class="note">💡 <strong>Tip:</strong> Think of the IF statement like a security
  guard checking ID cards. If the ID matches exactly, you're allowed in. If not,
  you just don't get in — no drama, no error!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: CHECKING IF THINGS ARE NOT EQUAL ❌

```html
<!-- Helper Box 3: Checking if Things Are Not Equal -->
<div class="helper-box">
  <h3 class="box-title">❌ Checking if Things Are Not Equal ❌</h3>

  <p>Sometimes we need to check the opposite — are these two things
  <strong>different</strong>? This is just as important as checking if they match!</p>

  <h4 class="sub-title">Using NOT EQUAL</h4>

  <p>We use the <strong>≠</strong> symbol (or sometimes <strong>!=</strong>) to
  check if two values are NOT equal. In pseudocode, we write it like this:</p>

  <div class="code-block">
    IF [first value] ≠ [second value] THEN<br>
    &nbsp;&nbsp;[What to do if they are different]<br>
    END IF
  </div>

  <h4 class="sub-title">Real Factory Example: Wrong Tool Detection</h4>

  <p>Let's check if someone brought the wrong tool to our station:</p>

  <div class="code-block">
    SET "tool type" = "tongs"<br>
    SET "correct tool" = "scoop"<br>
    <br>
    IF "tool type" ≠ "correct tool" THEN<br>
    &nbsp;&nbsp;PRINT "Wrong tool! Please get the scoop."<br>
    END IF
  </div>

  <p class="output">Output: Wrong tool! Please get the scoop.</p>

  <h4 class="sub-title">The Logic Behind It</h4>

  <p>The condition <code>"tool type" ≠ "correct tool"</code> asks: "Are these
  two things different?" Since "tongs" is different from "scoop", the answer is
  <strong>true</strong>, so the code inside the IF block runs.</p>

  <p>If we had the correct tool:</p>

  <div class="code-block">
    SET "tool type" = "scoop"<br>
    SET "correct tool" = "scoop"<br>
    <br>
    IF "tool type" ≠ "correct tool" THEN<br>
    &nbsp;&nbsp;PRINT "Wrong tool! Please get the scoop."<br>
    END IF<br>
    PRINT "Tool check complete."
  </div>

  <p class="output">Output: Tool check complete.</p>
  <p>(The warning doesn't appear because "scoop" equals "scoop".)</p>

  <p class="note">💡 <strong>Remember:</strong> <code>≠</code> means "not equal to".
  It's the opposite of <code>=</code>. Use it when you want to catch mistakes or
  problems!</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## HELPER BOX 4: TRUE AND FALSE — THE ANSWERS TO YOUR QUESTIONS 🤔

```html
<!-- Helper Box 4: True and False -->
<div class="helper-box">
  <h3 class="box-title">🤔 True and False: The Answers to Your Questions 🤔</h3>

  <p>When you ask a condition question like "Is the bag position correct?", the
  computer always answers with one of two words: <strong>true</strong> or
  <strong>false</strong>.</p>

  <h4 class="sub-title">What Do True and False Mean?</h4>

  <ul class="indented-list">
    <li><strong>true</strong> — means "YES, the condition is correct"</li>
    <li><strong>false</strong> — means "NO, the condition is not correct"</li>
  </ul>

  <h4 class="sub-title">Seeing True and False in Action</h4>

  <p>We can actually PRINT the result of a condition to see true or false:</p>

  <div class="code-block">
    SET "light colour" = "red"<br>
    SET "expected colour" = "red"<br>
    <br>
    PRINT "Is the light colour correct?", "light colour" = "expected colour"
  </div>

  <p class="output">Output: Is the light colour correct? true</p>

  <p>Now let's try with a different light colour:</p>

  <div class="code-block">
    SET "light colour" = "green"<br>
    SET "expected colour" = "red"<br>
    <br>
    PRINT "Is the light colour correct?", "light colour" = "expected colour"
  </div>

  <p class="output">Output: Is the light colour correct? false</p>

  <h4 class="sub-title">Why This Matters</h4>

  <p>Understanding true and false is crucial because conditions make decisions
  based on these answers. Later, you'll use conditions to control what your
  program does: "If true, do this. If false, do that."</p>

  <p class="note">💡 <strong>Think of it like this:</strong> true and false are
  the computer's way of saying "Yes" or "No" to your questions. Every condition
  you write is asking a yes/no question!</p>
</div>
<!-- End of Helper Box 4 -->
```

---

## HELPER BOX 5: COMBINING CHECKS WITH AND 🔗

```html
<!-- Helper Box 5: Combining Checks with AND -->
<div class="helper-box">
  <h3 class="box-title">🔗 Combining Checks with AND 🔗</h3>

  <p>Sometimes one check isn't enough. At the factory, we might need
  <strong>two things to both be true</strong> before we can proceed. That's
  where <strong>AND</strong> comes in!</p>

  <h4 class="sub-title">The AND Operator</h4>

  <p>AND lets you combine two conditions. The code only runs if
  <strong>both</strong> conditions are true.</p>

  <div class="code-block">
    IF [condition 1] AND [condition 2] THEN<br>
    &nbsp;&nbsp;[This only runs if BOTH are true]<br>
    END IF
  </div>

  <h4 class="sub-title">Factory Example: Bag Position AND Power On</h4>

  <p>We can't start the machine unless the bag is in position AND the power is on:</p>

  <div class="code-block">
    SET "bag position" = "under chute"<br>
    SET "power status" = "on"<br>
    <br>
    IF "bag position" = "under chute" AND "power status" = "on" THEN<br>
    &nbsp;&nbsp;PRINT "Ready to start! Bag is in position and power is on."<br>
    END IF
  </div>

  <p class="output">Output: Ready to start! Bag is in position and power is on.</p>

  <h4 class="sub-title">What If One Condition Is False?</h4>

  <p>If either condition is false, nothing inside the IF block runs:</p>

  <div class="code-block">
    SET "bag position" = "under chute"<br>
    SET "power status" = "off"<br>
    <br>
    IF "bag position" = "under chute" AND "power status" = "on" THEN<br>
    &nbsp;&nbsp;PRINT "Ready to start!"<br>
    END IF<br>
    PRINT "Check complete."
  </div>

  <p class="output">Output: Check complete.</p>
  <p>(The "Ready to start!" message doesn't appear because power is off.)</p>

  <h4 class="sub-title">The AND Truth Table</h4>

  <p>Here's how AND works with different combinations:</p>
  <ul class="indented-list">
    <li>true AND true = <strong>true</strong> ✅</li>
    <li>true AND false = <strong>false</strong> ❌</li>
    <li>false AND true = <strong>false</strong> ❌</li>
    <li>false AND false = <strong>false</strong> ❌</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> AND is strict! Both conditions must
  be true. Think of it like needing both keys to open a safe — one key isn't enough!</p>
</div>
<!-- End of Helper Box 5 -->
```

---

## HELPER BOX 6: COMBINING CHECKS WITH OR 🔀

```html
<!-- Helper Box 6: Combining Checks with OR -->
<div class="helper-box">
  <h3 class="box-title">🔀 Combining Checks with OR 🔀</h3>

  <p>What if we need <strong>at least one</strong> of two things to be true?
  That's what <strong>OR</strong> is for! OR is less strict than AND — it's
  happy if just one condition is true.</p>

  <h4 class="sub-title">The OR Operator</h4>

  <p>OR lets you combine two conditions. The code runs if
  <strong>at least one</strong> condition is true.</p>

  <div class="code-block">
    IF [condition 1] OR [condition 2] THEN<br>
    &nbsp;&nbsp;[This runs if EITHER or BOTH are true]<br>
    END IF
  </div>

  <h4 class="sub-title">Factory Example: Warning Lights</h4>

  <p>The machine has two warning lights — red for overheating, yellow for low supplies.
  We want an alert if EITHER light is on:</p>

  <div class="code-block">
    SET "red light" = "on"<br>
    SET "yellow light" = "off"<br>
    <br>
    IF "red light" = "on" OR "yellow light" = "on" THEN<br>
    &nbsp;&nbsp;PRINT "Warning! Check the machine."<br>
    END IF
  </div>

  <p class="output">Output: Warning! Check the machine.</p>

  <h4 class="sub-title">Both Conditions True</h4>

  <p>OR also works if both conditions are true:</p>

  <div class="code-block">
    SET "red light" = "on"<br>
    SET "yellow light" = "on"<br>
    <br>
    IF "red light" = "on" OR "yellow light" = "on" THEN<br>
    &nbsp;&nbsp;PRINT "Warning! Check the machine."<br>
    END IF
  </div>

  <p class="output">Output: Warning! Check the machine.</p>

  <h4 class="sub-title">Neither Condition True</h4>

  <p>Only when BOTH conditions are false does OR return false:</p>

  <div class="code-block">
    SET "red light" = "off"<br>
    SET "yellow light" = "off"<br>
    <br>
    IF "red light" = "on" OR "yellow light" = "on" THEN<br>
    &nbsp;&nbsp;PRINT "Warning! Check the machine."<br>
    END IF<br>
    PRINT "All systems normal."
  </div>

  <p class="output">Output: All systems normal.</p>

  <h4 class="sub-title">The OR Truth Table</h4>

  <p>Here's how OR works with different combinations:</p>
  <ul class="indented-list">
    <li>true OR true = <strong>true</strong> ✅</li>
    <li>true OR false = <strong>true</strong> ✅</li>
    <li>false OR true = <strong>true</strong> ✅</li>
    <li>false OR false = <strong>false</strong> ❌</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> OR is flexible! It just needs one
  condition to be true. Think of it like having two doors to a room — you can enter
  through either door!</p>
</div>
<!-- End of Helper Box 6 -->
```

---

## HELPER BOX 7: BUILDING COMPLETE CHECKS — PUTTING IT ALL TOGETHER 🏗️

```html
<!-- Helper Box 7: Building Complete Checks -->
<div class="helper-box">
  <h3 class="box-title">🏗️ Building Complete Checks: Putting It All Together 🏗️</h3>

  <p>Now that you know how to check equality, inequality, and combine conditions
  with AND/OR, let's see how we build complete safety checks at the factory.</p>

  <h4 class="sub-title">Step-by-Step Safety Check</h4>

  <p>Before starting any machine, we perform a complete check. Here's a realistic
  factory example:</p>

  <div class="code-block">
    SET "bag position" = "under chute"<br>
    SET "power status" = "on"<br>
    SET "safety guard" = "closed"<br>
    <br>
    PRINT "=== MACHINE SAFETY CHECK ==="<br>
    PRINT "Bag position:", "bag position"<br>
    PRINT "Power status:", "power status"<br>
    PRINT "Safety guard:", "safety guard"<br>
    PRINT ""<br>
    <br>
    IF "bag position" = "under chute" AND "power status" = "on" AND "safety guard" = "closed" THEN<br>
    &nbsp;&nbsp;PRINT "ALL CHECKS PASSED: Machine ready to start."<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "SAFETY ALERT: Machine cannot start. Check all systems."<br>
    END IF
  </div>

  <p class="output">Output:<br>
  === MACHINE SAFETY CHECK ===<br>
  Bag position: under chute<br>
  Power status: on<br>
  Safety guard: closed<br>
  <br>
  ALL CHECKS PASSED: Machine ready to start.</p>

  <h4 class="sub-title">What is ELSE?</h4>

  <p>ELSE is the "otherwise" part of an IF statement. It means: "If the condition
  is false, do this instead."</p>

  <div class="code-block">
    IF [condition] THEN<br>
    &nbsp;&nbsp;[Do this if true]<br>
    ELSE<br>
    &nbsp;&nbsp;[Do this if false]<br>
    END IF
  </div>

  <h4 class="sub-title">Building Your Own Checks</h4>

  <p>Now you can build complete checks by:</p>
  <ol class="indented-list">
    <li>Creating variables for all the things you need to check</li>
    <li>Writing a condition that combines all the important checks</li>
    <li>Using ELSE to handle what happens when something is wrong</li>
  </ol>

  <p>This is exactly what factory workers do every day — and now you can too!</p>

  <p class="note">💡 <strong>You've learned:</strong> equality checks (=
  ), inequality checks (≠), combining conditions (AND/OR), and handling
  both outcomes (IF/ELSE). These are the building blocks of all decision-making
  in coding!</p>
</div>
<!-- End of Helper Box 7 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER replace IF/THEN/END IF with any real language syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "bag position" NOT bagPosition
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER add template literal instructions (backticks, ${} etc) — that is JS specific
- NEVER introduce a concept, symbol, or syntax that has not already been taught in a previous helper box — Rule 6
- Keep the factory theme, the warm friendly tone, and the encouraging language
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode
- Use the source file themes: bag positioning, box numbers, status lights, tools, power panels

---

END OF MODULE 3 PART 2 CONDITIONS HELPER BOXES