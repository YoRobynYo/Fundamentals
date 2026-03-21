# MODULE 2 — OPERATORS — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 2 Operators — teaches concepts without any language-specific syntax
**Used by:** Any AI when generating Module 2 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "total pencils" NOT totalPencils
- The only exception is when a variable is being referred back to after already being introduced — still use the natural language description in quotes
- To display text AND a variable together, use a comma to separate them inside PRINT — e.g. PRINT "Total pencils:", "total pencils"
- NEVER use + to join text and variables — concatenation has not been taught yet
- Keep ALL the warmth, stories, and classroom theme — just remove the JS syntax
- HTML structure stays exactly the same — only the content inside changes

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.
>
> This rule protects children from being confused by things they have never seen before. It applies to every module, every exercise, and every helper box across the entire course.

**Examples of what this means in practice:**
- camelCase has not been taught → do NOT write camelCase variable names
- Arrays have not been taught → do NOT use `[ ]` for anything
- Functions have not been taught → do NOT use `( )` for anything other than context

---

## HELPER BOX 1: ADDITION (+) ➕

```html
<!-- Helper Box 1: Addition (+) -->
<div class="helper-box">
  <h3 class="box-title">➕ Addition (+) ➕</h3>

  <p>Welcome back! Yesterday we learned how to store information using variables. Today, we're going to use MATHSS to do calculations! The first and most common operator is <strong>addition</strong>, which we use to add numbers together.</p>

  <h4 class="sub-title">Counting Totals</h4>

  <p>Imagine you have pencils in two different places and you want to know the total. You can store the amount from each place in a variable, then add them up!</p>

  <h4 class="sub-title">Here is how we write it using pseudocode:</h4>

  <div class="code-block">
    SET "pencils on shelf" = 15<br>
    SET "pencils in drawer" = 10<br>
    SET "total pencils" = "pencils on shelf" + "pencils in drawer"<br>
    PRINT "Total pencils:", "total pencils"
  </div>
  <p class="output">Output: Total pencils: 25</p>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li>We <strong>SET</strong> two variables to hold the number of pencils in each location.</li>
    <li>We create a new variable, "total pencils", to store the result.</li>
    <li>We use the <strong>+</strong> sign to add the values of the first two variables together.</li>
    <li>Finally, we <strong>PRINT</strong> the result to see the total!</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> You can only add numbers! If you try to add text (also called strings), you might get an error or a very strange result.</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: SUBTRACTION (-) ➖

```html
<!-- Helper Box 2: Subtraction (-) -->
<div class="helper-box">
  <h3 class="box-title">➖ Subtraction (-) ➖</h3>

  <p>Great! Now that we can add things, let's learn how to take them away. <strong>Subtraction</strong> is how we find out what's left after something has been used or removed.</p>

  <h4 class="sub-title">Calculating What's Left</h4>

  <p>Let's say you start the day with a big stack of notebooks. Throughout the day, children use some of them. How do you know how many are left? You subtract!</p>

  <h4 class="sub-title">Here is how we write it using pseudocode:</h4>

  <div class="code-block">
    SET "notebooks at start" = 50<br>
    SET "notebooks used" = 12<br>
    SET "notebooks left" = "notebooks at start" - "notebooks used"<br>
    PRINT "Notebooks remaining:", "notebooks left"
  </div>
  <p class="output">Output: Notebooks remaining: 38</p>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li>We <strong>SET</strong> a variable for the starting amount and another for the amount used.</li>
    <li>We create a "notebooks left" variable to hold the answer.</li>
    <li>We use the <strong>-</strong> sign to subtract the "notebooks used" from the "notebooks at start".</li>
    <li>We <strong>PRINT</strong> the result to see how many are left.</li>
  </ul>

  <p class="note">💡 <strong>Tip:</strong> The order matters in subtraction! Make sure you always start with the total amount and subtract the smaller part from it.</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: MULTIPLICATION (×) ✖️

```html
<!-- Helper Box 3: Multiplication (×) -->
<div class="helper-box">
  <h3 class="box-title">✖️ Multiplication (×) ✖️</h3>

  <p>What if you need to calculate something that happens over and over again? Instead of adding the same number repeatedly, we can use a shortcut: <strong>multiplication</strong>!</p>

  <h4 class="sub-title">Calculating for Groups</h4>

  <p>Imagine every child in the class needs 3 sheets of paper for an art project. If there are 20 children, you could add 3 twenty times... or you could just multiply!</p>

  <h4 class="sub-title">Here is how we write it using pseudocode:</h4>

  <div class="code-block">
    SET "number of children" = 20<br>
    SET "sheets per child" = 3<br>
    SET "total sheets needed" = "number of children" × "sheets per child"<br>
    PRINT "Total sheets needed:", "total sheets needed"
  </div>
  <p class="output">Output: Total sheets needed: 60</p>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li>We <strong>SET</strong> variables for the number of children and the sheets each one needs.</li>
    <li>We create a "total sheets needed" variable for the result.</li>
    <li>We use the <strong>×</strong> sign to multiply the two numbers.</li>
    <li>We <strong>PRINT</strong> the result to see the total needed for the whole class.</li>
  </ul>

  <p class="note">💡 <strong>Note:</strong> In many coding languages, the multiplication sign is an asterisk (<code>*</code>), but we use the <code>×</code> symbol in our pseudocode because it's easier to read!</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## HELPER BOX 4: DIVISION (/) ➗

```html
<!-- Helper Box 4: Division (/) -->
<div class="helper-box">
  <h3 class="box-title">➗ Division (/) ➗</h3>

  <p>The last of our main operators is <strong>division</strong>. We use it when we want to share or split a total amount into equal groups.</p>

  <h4 class="sub-title">Splitting Things Equally</h4>

  <p>You have a big pile of 48 markers, and you want to split them evenly into 4 storage boxes. How many markers go in each box? Division gives us the answer!</p>

  <h4 class="sub-title">Here is how we write it using pseudocode:</h4>

  <div class="code-block">
    SET "total markers" = 48<br>
    SET "number of boxes" = 4<br>
    SET "markers per box" = "total markers" / "number of boxes"<br>
    PRINT "Markers per box:", "markers per box"
  </div>
  <p class="output">Output: Markers per box: 12</p>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li>We <strong>SET</strong> variables for the total number of markers and the number of boxes.</li>
    <li>We create a "markers per box" variable to store the answer.</li>
    <li>We use the <strong>/</strong> sign to divide the total markers by the number of boxes.</li>
    <li>We <strong>PRINT</strong> the result to see how many go in each box.</li>
  </ul>

  <p class="note">💡 <strong>Watch out:</strong> Division can sometimes result in fractions or decimals! For now, all our exercises will divide into perfect whole numbers.</p>
</div>
<!-- End of Helper Box 4 -->
```

---

## HELPER BOX 5: FIELD TRIP TIME! 🍿

```html
<!-- Helper Box 5: Field Trip Time! -->
<div class="helper-box">
  <h3 class="box-title">🍿 Field Trip Time! 🍿</h3>

  <p>Excellent work! You can now add, subtract, multiply, and divide using operators. You have all the basic math skills you need to solve all sorts of interesting problems.</p>

  <p>And that's perfect timing, because tomorrow is a very special day...</p>

  <h4 class="sub-title">We're going on a field trip to the Popcorn Factory!</h4>

  <p>You'll get to see how popcorn is made, from counting the corn kernels to checking the machines. And you'll use everything you've learned about variables and operators to help the factory manager with real production tasks!</p>

  <p>Get ready to put your new coding skills to the test in a real-world setting. It's going to be a lot of fun!</p>

  <p class="note">💡 Next up: We'll learn how to make decisions in our code by comparing values. See you at the factory!</p>
</div>
<!-- End of Helper Box 5 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "total pencils" NOT totalPencils
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER add template literal instructions (backticks, ${} etc) — that is JS specific
- NEVER introduce a concept, symbol, or syntax that has not already been taught in a previous helper box — Rule 6
- Keep the classroom theme, the warm friendly tone, and the encouraging language
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode

---

END OF MODULE 2 OPERATORS HELPER BOXES