# MODULE 3 — CONDITIONS PART 4 — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 3 Conditions Part 4 — teaches how to check two conditions at once using AND
**Used by:** Any AI when generating Module 3 Part 4 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- IF/THEN/END IF replaces if(){}/if:
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "bags are ready" NOT bagsAreReady
- The only exception is when a variable is being referred back to after already being introduced — still use the natural language description in quotes
- To display text AND a variable together, use a comma to separate them inside PRINT — e.g. PRINT "Status:", "bags are ready"
- NEVER use + to join text and variables — concatenation has not been taught yet
- Keep ALL the warmth, stories, and factory theme — just remove the JS syntax
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

## HELPER BOX 1: WHAT IS AND? 🤔

```html
<!-- Helper Box 1: What is AND? -->
<div class="helper-box">
  <h3 class="box-title">🤔 What is AND? 🤔</h3>

  <p>Imagine you're getting ready to leave the house. Your mum says you need BOTH
  your coat AND your shoes before you can go outside. If you have your coat but no
  shoes — you wait. If you have shoes but no coat — you wait. You need BOTH
  things to be true!</p>

  <h4 class="sub-title">AND Means "Both Must Be True"</h4>

  <p>In coding, <strong>AND</strong> lets us check if two things are both true at
  the same time. It's like a safety gate — both conditions must pass for the gate
  to open!</p>

  <h4 class="sub-title">Let's See a Simple Example:</h4>

  <div class="code-block">
    SET "bags are ready" = TRUE<br>
    SET "boxes are ready" = TRUE<br><br>
    IF "bags are ready" AND "boxes are ready" THEN<br>
    &nbsp;&nbsp;PRINT "Green light - ready to start!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Red light - something needs fixing"<br>
    END IF
  </div>
  <p class="output">Output: Green light - ready to start!</p>

  <p><strong>Why?</strong> Because BOTH "bags are ready" AND "boxes are ready" are
  TRUE. The green light turns on!</p>

  <h4 class="sub-title">What If One Is False?</h4>

  <div class="code-block">
    SET "bags are ready" = TRUE<br>
    SET "boxes are ready" = FALSE<br><br>
    IF "bags are ready" AND "boxes are ready" THEN<br>
    &nbsp;&nbsp;PRINT "Green light - ready to start!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Red light - something needs fixing"<br>
    END IF
  </div>
  <p class="output">Output: Red light - something needs fixing</p>

  <p><strong>Why?</strong> Because even though bags are ready, boxes are NOT ready.
  Since AND requires BOTH to be true, we get the red light.</p>

  <p class="note">💡 <strong>Remember:</strong> AND is like a strict teacher who
  checks off TWO things on a list — both must be checked before you can proceed!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: USING AND IN REAL SITUATIONS 🏭

```html
<!-- Helper Box 2: Using AND in Real Situations -->
<div class="helper-box">
  <h3 class="box-title">🏭 Using AND in Real Situations 🏭</h3>

  <p>In the Popcorn Factory, many machines need two things checked before they can
  start. Let's look at how AND helps us make sure everything is safe and ready.</p>

  <h4 class="sub-title">Example 1: Safety Gear Check</h4>

  <p>Before children can help at a machine, they need BOTH safety gloves AND safety
  goggles. Let's check if a child is ready:</p>

  <div class="code-block">
    SET "child has gloves" = TRUE<br>
    SET "child has goggles" = TRUE<br><br>
    IF "child has gloves" AND "child has goggles" THEN<br>
    &nbsp;&nbsp;PRINT "Ready to help - stay safe!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Collect missing items first"<br>
    END IF
  </div>
  <p class="output">Output: Ready to help - stay safe!</p>

  <h4 class="sub-title">Example 2: Machine Supplies Check</h4>

  <p>Machine 7 needs BOTH enough corn kernels AND enough bags before it can start
  popping. Let's check:</p>

  <div class="code-block">
    SET "enough corn kernels" = TRUE<br>
    SET "enough bags" = FALSE<br><br>
    IF "enough corn kernels" AND "enough bags" THEN<br>
    &nbsp;&nbsp;PRINT "Machine 7 can start!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Machine 7 waiting for supplies"<br>
    END IF
  </div>
  <p class="output">Output: Machine 7 waiting for supplies</p>

  <p><strong>Why?</strong> We have enough corn kernels, but NOT enough bags. Both
  must be true for the machine to start, so it waits.</p>

  <h4 class="sub-title">Example 3: Quality Control Station</h4>

  <p>The quality check passes only if the weight is correct AND the seal is intact:</p>

  <div class="code-block">
    SET "weight is correct" = TRUE<br>
    SET "seal is intact" = TRUE<br><br>
    IF "weight is correct" AND "seal is intact" THEN<br>
    &nbsp;&nbsp;PRINT "Package approved!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Send package for review"<br>
    END IF
  </div>
  <p class="output">Output: Package approved!</p>

  <p class="note">💡 <strong>Tip:</strong> Think about all the things in your daily
  life that need TWO checks before you can proceed — like needing both your lunch
  AND your homework before you can leave for school!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: COMMON MISTAKES WITH AND 😅

```html
<!-- Helper Box 3: Common Mistakes with AND -->
<div class="helper-box">
  <h3 class="box-title">😅 Common Mistakes with AND 😅</h3>

  <p>Everyone makes mistakes when learning something new! Let's look at some common
  mistakes children make when using AND, so you can avoid them.</p>

  <h4 class="sub-title">Mistake 1: Forgetting Both Must Be True</h4>

  <p>Some children think AND means "if either one is true." That's actually OR (which
  we'll learn next!). AND means BOTH must be true:</p>

  <div class="code-block">
    SET "bags are ready" = TRUE<br>
    SET "boxes are ready" = FALSE<br><br>
    IF "bags are ready" AND "boxes are ready" THEN<br>
    &nbsp;&nbsp;PRINT "Ready!"  ← This will NOT print!<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Not ready"  ← This WILL print<br>
    END IF
  </div>

  <h4 class="sub-title">Mistake 2: Wrong Order in the IF Statement</h4>

  <p>The AND keyword goes BETWEEN the two conditions:</p>

  <p class="output">✅ Correct: IF "condition 1" AND "condition 2" THEN<br>
  ❌ Wrong: IF AND "condition 1" "condition 2" THEN<br>
  ❌ Wrong: IF "condition 1" "condition 2" AND THEN</p>

  <h4 class="sub-title">Mistake 3: Using AND When You Mean OR</h4>

  <p>Imagine you're checking if a machine is broken. It's broken if it makes a loud
  noise OR if it smokes. You don't need BOTH — either one means it's broken. That's
  OR, not AND!</p>

  <div class="code-block">
    SET "machine makes loud noise" = TRUE<br>
    SET "machine smokes" = FALSE<br><br>
    IF "machine makes loud noise" OR "machine smokes" THEN<br>
    &nbsp;&nbsp;PRINT "Machine needs repair!"  ← This prints because ONE is true<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Machine is working fine"<br>
    END IF
  </div>

  <h4 class="sub-title">Mistake 4: Forgetting the ELSE</h4>

  <p>Always think about what should happen when BOTH conditions are NOT true. The ELSE
  part handles that situation:</p>

  <div class="code-block">
    IF "bags are ready" AND "boxes are ready" THEN<br>
    &nbsp;&nbsp;PRINT "All set!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Need to fix something"  ← Don't forget this part!<br>
    END IF
  </div>

  <p class="note">💡 <strong>Remember:</strong> Before using AND, ask yourself: "Do
  I need BOTH things to be true, or is just ONE enough?" If both → use AND. If just
  one → that's OR (coming next!).</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "bags are ready" NOT bagsAreReady
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER add template literal instructions (backticks, ${} etc) — that is JS specific
- NEVER introduce a concept, symbol, or syntax that has not already been taught in a previous helper box — Rule 6
- Keep the factory theme, the warm friendly tone, and the encouraging language
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode
- All code examples must use natural language variable descriptions in quotes

---

END OF MODULE 3 PART 4 CONDITIONS HELPER BOXES