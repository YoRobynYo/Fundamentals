# MODULE 1 — VARIABLES — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 1 Variables — teaches concepts without any language-specific syntax
**Used by:** Any AI when generating Module 1 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "child name" NOT childName
- The only exception is when a variable is being referred back to after already being introduced — still use the natural
language description in quotes
- To display text AND a variable together, use a comma to separate them inside PRINT — e.g. PRINT "My name is", "child
name"
- NEVER use + to join text and variables — concatenation has not been taught yet
- Keep ALL the warmth, stories, and classroom theme — just remove the JS syntax
- HTML structure stays exactly the same — only the content inside changes

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any
exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.
>
> This rule protects children from being confused by things they have never seen before. It applies to every module,
every exercise, and every helper box across the entire course.

**Examples of what this means in practice:**
- Concatenation with `+` has not been taught → do NOT use `+` to join text
- camelCase has not been taught → do NOT write camelCase variable names
- Arrays have not been taught → do NOT use `[ ]` for anything
- Functions have not been taught → do NOT use `( )` for anything other than context

---

## HELPER BOX 1: WHAT IS A VARIABLE? 📦

```html
<!-- Helper Box 1: What is a Variable? -->
<div class="helper-box">
  <h3 class="box-title">📦 What is a Variable? 📦</h3>

  <p>Imagine you have a special labeled box sitting on your desk. You can put something
    inside it, read what's in it, and even swap it out for something new. That's exactly
    what a variable is — a labeled box that your program uses to remember information!</p>

  <h4 class="sub-title">Variables Remember Things For You</h4>

  <p>When your program is running, it needs to remember things — like someone's name,
    a score, or how many items are left. Instead of writing the same information over and
    over, you store it once in a variable and use the label whenever you need it.</p>

  <h4 class="sub-title">Every Variable Has Two Parts:</h4>

  <ul class="indented-list">
    <li><strong>A name</strong> — the label on your box, so you know what's inside</li>
    <li><strong>A value</strong> — the actual information stored inside the box</li>
  </ul>

  <h4 class="sub-title">Here is how we write it — using plain English commands called pseudocode:</h4>

  <div class="code-block">
    SET "child name" = "Ben"<br>
    SET "desk number" = 7<br>
    SET "classroom number" = 102
  </div>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li><strong>SET</strong> — tells the computer we are creating a variable and giving it a value</li>
    <li><strong>"child name"</strong> — the label (name) of our box, written in plain English</li>
    <li><strong>= "Ben"</strong> — the value we are storing inside the box</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> The label should always describe what's
    inside — just like you'd write "pencils" on a pencil box, not "stuff"!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: STORING DIFFERENT TYPES OF INFORMATION ✨

```html
<!-- Helper Box 2: Storing Different Types of Information -->
<div class="helper-box">
  <h3 class="box-title">✨ Storing Different Types of Information ✨</h3>

  <p>Variables can store different kinds of information. The two most common types
    you will use are <strong>text</strong> and <strong>numbers</strong>.</p>

  <h4 class="sub-title">Text Values (called Strings)</h4>

  <p>When you want to store words or sentences, you wrap them in quotes.
    This tells the computer "this is text, not a command!"</p>

  <div class="code-block">
    SET "child name" = "Ben"<br>
    SET "teacher name" = "Mrs Jones"<br>
    SET "favourite subject" = "Art"
  </div>

  <h4 class="sub-title">Number Values</h4>

  <p>When you want to store a number you can calculate with, you write it without quotes.</p>

  <div class="code-block">
    SET "desk number" = 7<br>
    SET "classroom number" = 102<br>
    SET "number of children" = 25
  </div>

  <h4 class="sub-title">The Important Difference — Numbers vs Text</h4>

  <p>Here is why this matters. Look what happens when we try to do maths:</p>

  <h5 class="sub-sub-title">Numbers (no quotes around the value) — works correctly:</h5>
  <div class="code-block">
    SET "children in class" = 25<br>
    SET "children absent" = 3<br>
    SET "children present" = "children in class" - "children absent"<br>
    PRINT "children present"
  </div>
  <p class="output">Output: 22 ✅</p>

  <h5 class="sub-sub-title">Text (with quotes around the value) — cannot do maths:</h5>
  <div class="code-block">
    SET "children in class" = "25"<br>
    SET "children absent" = "3"<br>
    SET "children present" = "children in class" - "children absent"<br>
    PRINT "children present"
  </div>
  <p class="output">Output: ERROR ❌ (cannot subtract text!)</p>

  <p class="note">💡 <strong>Remember:</strong> Numbers do not need quotes around the value.
    Text always needs matching quotes around the value!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: NAMING YOUR VARIABLES ✨

```html
<!-- Helper Box 3: Naming Your Variables -->
<div class="helper-box">
  <h3 class="box-title">✨ Naming Your Variables ✨</h3>

  <p>Choosing good names for your variables is one of the most important skills
    in coding. A good name tells anyone reading your code exactly what that variable holds
    — without needing any explanation!</p>

  <h4 class="sub-title">The Golden Rule of Variable Names:</h4>

  <p>Your variable name should describe what is inside the box — clearly and simply.</p>

  <h4 class="sub-title">Good Names vs Bad Names:</h4>

  <div class="code-block">
    SET "child name" = "Ben" ✅ (clear — it's a child's name)<br>
    SET "x" = "Ben" ❌ (what is x? we have no idea!)<br><br>
    SET "number of children" = 25 ✅ (clear — it's a count of students)<br>
    SET "n" = 25 ❌ (n tells us nothing useful)
  </div>

  <h4 class="sub-title">In These Exercises:</h4>

  <p>When you see a description like <strong>"child name"</strong> or
    <strong>"desk number"</strong> in the steps, it is written in plain English on purpose.
    Your job is to turn that description into a proper variable name — removing the spaces
    and joining the words together.
  </p>

  <p>For example:</p>
  <ul class="indented-list">
    <li>"child name" → you turn this into a variable name</li>
    <li>"desk number" → you turn this into a variable name</li>
    <li>"classroom number" → you turn this into a variable name</li>
  </ul>

  <p>The exact way you join the words together (whether you use capitals or underscores)
    depends on which language you are using — and you will learn that when you start your
    language course. For now, just focus on choosing clear, descriptive names!</p>

  <p class="note">💡 <strong>Tip:</strong> If someone else reads your variable name and
    immediately understands what it holds — you've chosen a great name!</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## HELPER BOX 4: DISPLAYING INFORMATION 🖥️

```html
<!-- Helper Box 4: Displaying Information -->
<div class="helper-box">
  <h3 class="box-title">🖥️ Displaying Information 🖥️</h3>

  <p>Storing information in a variable is useful — but at some point you want to
    actually SEE it! Every language has a way to display information on the screen.
    In our pseudocode, we use <strong>PRINT</strong>.</p>

  <h4 class="sub-title">Displaying a Single Variable:</h4>

  <div class="code-block">
    SET "child name" = "Ben"<br>
    PRINT "child name"
  </div>
  <p class="output">Output: Ben</p>

  <h4 class="sub-title">Displaying a Message with a Variable:</h4>

  <p>Most of the time you want to combine your own words WITH the value stored in a
    variable. Use a <strong>comma</strong> to separate each piece — the computer will
    print them one after the other:</p>

  <div class="code-block">
    SET "child name" = "Ben"<br>
    PRINT "My name is", "child name"
  </div>
  <p class="output">Output: My name is Ben</p>

  <h4 class="sub-title">More Examples:</h4>

  <div class="code-block">
    SET "book title" = "The Magic Tree House"<br>
    PRINT "Reading:", "book title"
  </div>
  <p class="output">Output: Reading: The Magic Tree House</p>

  <div class="code-block">
    SET "quiz score" = 95<br>
    PRINT "Score:", "quiz score"
  </div>
  <p class="output">Output: Score: 95</p>

  <div class="code-block">
    SET "favourite subject" = "Science"<br>
    PRINT "Favourite subject:", "favourite subject"
  </div>
  <p class="output">Output: Favourite subject: Science</p>

  <p class="note">💡 <strong>Note:</strong> The exact way you display information
    will look slightly different depending on which language you use later —
    but the idea is always exactly the same!</p>
</div>
<!-- End of Helper Box 4 -->
```

---

## HELPER BOX 5: THE POWER OF A VARIABLE — CHANGE IT ONCE! 💡

```html
<!-- Helper Box 5: The Power of a Variable -->
<div class="helper-box">
  <h3 class="box-title">💡 The Power of a Variable: Change It Once!</h3>

  <p>Here is where variables really start to show their superpower. Because your
    program always reads the variable's label — not the value directly — you only
    ever need to change the value in ONE place and everything updates automatically!</p>

  <h4 class="sub-title">Let's See This in Action:</h4>

  <p>Imagine you are updating the daily schedule for your class.
    You set the activity once and use it in multiple messages:</p>

  <div class="code-block">
    SET "activity" = "Art"<br>
    PRINT "Today's activity is", "activity"<br>
    PRINT "Don't forget your", "activity", "supplies!"<br>
    PRINT "See you in", "activity", "class!"
  </div>

  <p class="output">Output:<br>
    Today's activity is Art<br>
    Don't forget your Art supplies!<br>
    See you in Art class!</p>

  <p>Later, the teacher changes the activity. You only need to update
    <strong>one line</strong> — and every message changes automatically:
  </p>

  <div class="code-block">
    SET "activity" = "Science"<br>
    PRINT "Afternoon update:", "activity", "lab today!"<br>
    PRINT "Wear your", "activity", "goggles!"
  </div>

  <p class="output">Output:<br>
    Afternoon update: Science lab today!<br>
    Wear your Science goggles!</p>

  <p>If you had written "Art" directly into every message instead of using a variable,
    you would have to find and change every single line. With a variable — one change
    and you're done. <strong>That's the real power of variables!</strong></p>

  <p>This month our class is carrying out tasks between the classroom and the Popcorn
    Factory! Sometimes the things we are asked to do will be in the classroom, sometimes
    we will be visiting the Popcorn Factory! 🍿<br><br>
    While carrying out these tasks we will be learning the fundamentals one step at a time
    — reading the Helper Boxes, studying the Examples, and then completing the Exercises.
    Let's get started!</p>
</div>
<!-- End of Helper Box 5 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in
quotes e.g. "child name" NOT childName
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER add template literal instructions (backticks, ${} etc) — that is JS specific
- NEVER introduce a concept, symbol, or syntax that has not already been taught in a previous helper box — Rule 6
- Keep the classroom theme, the warm friendly tone, and the encouraging language
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode

---

END OF MODULE 1 VARIABLES HELPER BOXES