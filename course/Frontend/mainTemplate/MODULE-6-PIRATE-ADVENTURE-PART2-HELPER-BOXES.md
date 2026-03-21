# MODULE 6 — PIRATE ADVENTURE PART 2 — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper boxes for Module 6 Pirate Adventure Part 2 — teaches concepts without any language-specific syntax
**Used by:** Any AI when generating Module 6 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- Variable names in ALL code examples must use natural language in quotes — e.g. "child name"
- To display text AND a variable together, use a comma to separate them inside PRINT
- NEVER use + to join text and variables — concatenation has not been taught yet
- RULE 6: Never use what hasn't been taught (e.g. no ELSE, use IF NOT instead)
- HTML structure stays exactly the same — only the content inside changes

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
>
> This rule protects children from being confused by things they have never seen before.

---

## HELPER BOX 1: WELCOME TO TREASURE ISLAND! 🏝️

```html
<!-- Helper Box 1: Welcome to Treasure Island! -->
<div class="helper-box">
  <h3 class="box-title">🏝️ Welcome to Treasure Island! 🏝️</h3>

  <p>Congratulations, young coder! You've proven yourself on the pirate ship. Now you've arrived at Treasure Island, where the real adventure begins! The treasure is buried somewhere on this island, but finding it will take ALL your coding skills combined.</p>

  <h4 class="sub-title">The Ultimate Challenge</h4>

  <p>On Treasure Island, you'll need to use everything you've learned:</p>
  <ul class="indented-list">
    <li><strong>AND</strong> and <strong>OR</strong> together in one decision</li>
    <li><strong>NOT</strong> to check what something isn't</li>
    <li><strong>Parentheses ( )</strong> to group conditions correctly</li>
    <li>All the comparison operators at once!</li>
  </ul>

  <p class="note">💡 <strong>Challenge:</strong> The gold is waiting — are you ready? 🗺️</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: COMBINING AND & OR TOGETHER 🧩

```html
<!-- Helper Box 2: Combining AND & OR Together -->
<div class="helper-box">
  <h3 class="box-title">🧩 Combining AND & OR Together 🧩</h3>

  <p>Sometimes you need to check a mix of conditions. "You can open the chest if you have the key AND the code is 123 OR 456." The trick is that AND and OR work together.</p>

  <h4 class="sub-title">How it works:</h4>

  <div class="code-block">
    SET "has key" = true<br>
    SET "secret code" = 123<br><br>
    IF "has key" AND ("secret code" = 123 OR "secret code" = 456) THEN<br>
    &nbsp;&nbsp;PRINT "🏆 Chest opens!"<br>
    IF NOT<br>
    &nbsp;&nbsp;PRINT "🔒 Still locked"<br>
    END IF
  </div>

  <p><strong>Breaking it down:</strong> The parentheses <strong>( )</strong> group the OR check so it happens together before combining with AND. Without them, the computer might get confused about which conditions go together!</p>

  <p class="note">💡 <strong>Remember:</strong> Parentheses are like labels that say "do this part first"!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: CHECKING EXACT VALUES WITH = ⚖️

```html
<!-- Helper Box 3: Checking Exact Values with = -->
<div class="helper-box">
  <h3 class="box-title">⚖️ Checking Exact Values with = ⚖️</h3>

  <p>On Treasure Island, you often need exact matches. The map says exactly 10 steps from the palm tree. The stone must be exactly number 2.</p>

  <h4 class="sub-title">Exact Matches:</h4>

  <div class="code-block">
    SET "steps from tree" = 10<br><br>
    IF "steps from tree" = 10 THEN<br>
    &nbsp;&nbsp;PRINT "⛏️ Exactly at the X — start digging!"<br>
    IF NOT<br>
    &nbsp;&nbsp;PRINT "📍 Wrong spot — measure again!"<br>
    END IF
  </div>

  <p class="note">💡 <strong>Key Insight:</strong> = checks if two things are exactly the same — not greater than, not less than, exactly equal.</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## HELPER BOX 4: CHECKING WHAT SOMETHING IS NOT ❌

```html
<!-- Helper Box 4: Checking What Something Is Not -->
<div class="helper-box">
  <h3 class="box-title">❌ Checking What Something Is Not ❌</h3>

  <p>Sometimes you need to check what something is NOT. "The treasure is NOT behind stone 1." That's when we can use <strong>NOT</strong> combined with our comparison.</p>

  <h4 class="sub-title">Using NOT:</h4>

  <div class="code-block">
    SET "stone number" = 2<br><br>
    IF NOT ("stone number" = 1) THEN<br>
    &nbsp;&nbsp;PRINT "✅ Safe — not the trap stone!"<br>
    IF NOT<br>
    &nbsp;&nbsp;PRINT "❌ Stone 1 triggers a trap!"<br>
    END IF
  </div>

  <p class="note">💡 <strong>Remember:</strong> NOT flips the answer. If "stone number" = 1 is false, then NOT makes it true!</p>
</div>
<!-- End of Helper Box 4 -->
```

---

## HELPER BOX 5: THE ULTIMATE TREASURE CHECK 🏆

```html
<!-- Helper Box 5: The Ultimate Treasure Check -->
<div class="helper-box">
  <h3 class="box-title">🏆 THE ULTIMATE TREASURE CHECK 🏆</h3>

  <p>The final treasure chest checks EVERYTHING at once — age, items, weather, secret word, and code — all in one condition!</p>

  <h4 class="sub-title">The Master Code:</h4>

  <div class="code-block">
    SET "child age" = 9<br>
    SET "has map" = true<br>
    SET "has compass" = true<br>
    SET "storm coming" = false<br>
    SET "secret word" = "treasure"<br>
    SET "code" = 123<br><br>
    IF ("child age" > 8) AND ("has map" AND "has compass") AND NOT "storm coming" AND NOT ("secret word" = "parrot") AND ("code" = 123 OR "code" = 456) THEN<br>
    &nbsp;&nbsp;PRINT "🏆🎉 YOU FOUND THE TREASURE!"<br>
    IF NOT<br>
    &nbsp;&nbsp;PRINT "Keep trying — check each condition!"<br>
    END IF
  </div>

  <p><strong>Analysis:</strong> This checks FIVE things at once, using <strong>></strong>, <strong>AND</strong>, <strong>NOT</strong>, and <strong>OR</strong> together with parentheses!</p>
</div>
<!-- End of Helper Box 5 -->
```

---

## HELPER BOX 6: CAPTAIN'S FINAL TIP — READ CAREFULLY 📖

```html
<!-- Helper Box 6: Captain's Final Tip -->
<div class="helper-box">
  <h3 class="box-title">📖 Captain's Final Tip — Read Carefully 📖</h3>

  <p>The Captain's puzzles often hide small but important details. One word can change everything!</p>

  <h4 class="sub-title">Key Differences to Remember:</h4>

  <ul class="indented-list">
    <li><strong>"Greater than 8"</strong> means > 8 (9 or more, NOT 8)</li>
    <li><strong>"Fewer than 3"</strong> means < 3 (0, 1, 2 — NOT 3)</li>
    <li><strong>"NOT equal to 'parrot'"</strong> means NOT ("secret word" = "parrot")</li>
    <li><strong>"AND"</strong> means BOTH must be true</li>
    <li><strong>"OR"</strong> means at least ONE must be true</li>
  </ul>

  <p class="note">💡 <strong>Final Challenge:</strong> Read each exercise twice. Every word matters! Good luck on Treasure Island! 🏴‍☠️💎</p>
</div>
<!-- End of Helper Box 6 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- Variable names in ALL code examples must use natural language in quotes e.g. "child name"
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER use ELSE — use IF NOT as shown in the examples
- Target age is 10-12 years old — keep it simple, clear and fun
- Every concept should be explained with a real-world analogy first, then the pseudocode

---

END OF MODULE 6 PIRATE ADVENTURE PART 2 HELPER BOXES
