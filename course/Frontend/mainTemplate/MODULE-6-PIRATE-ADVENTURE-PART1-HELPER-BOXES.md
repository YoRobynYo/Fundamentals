# MODULE 6 — PIRATE ADVENTURE PART 1 — HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Updated:** March 2026
**Purpose:** Helper boxes for Module 6 Pirate Adventure Part 1 — reviews conditions and logical operators
**Used by:** Any AI when generating Module 6 helper box HTML

---

## HELPER BOX 1: WELCOME ABOARD THE JOLLY CODER! ⚓

**TOPIC:** Introduction to pirate adventure and using conditions on a ship.

**EXPLANATION:** Ahoy, young coders! Captain Condition and First Mate Function need your help on their pirate ship! You've learned all about conditions and logical operators in the factory — now it's time to use your skills on the high seas!

**DECISION EXAMPLES:**
- IF the storm is coming, THEN batten down the hatches!
- IF you spot land, THEN shout "Land ho!"
- ELSE IF you see another ship, THEN raise the flag!
- ELSE keep sailing straight ahead.

**CHALLENGE:** Ready to set sail? Solve these 5 pirate ship challenges to prove you're ready for the treasure hunt! 🗺️

---

## HELPER BOX 2: PIRATE CODING TOOLS — AND, OR, NOT 🏴‍☠️

**TOPIC:** The three logical operators for making pirate decisions.

**AND OPERATOR:** Both conditions must be true.
- Think of AND like needing BOTH a map AND a compass to find treasure
- If you're missing either one, you're lost!

```
SET "has map" = true
SET "has compass" = true

IF "has map" AND "has compass" THEN
    PRINT "Let's find that treasure!"
ELSE
    PRINT "Need both map and compass first!"
END IF
```

**OR OPERATOR:** At least one condition must be true.
- OR is like spotting land — you might see it with your eyes OR through a telescope
- Either way works!

```
SET "see with eyes" = true
SET "see with telescope" = false

IF "see with eyes" OR "see with telescope" THEN
    PRINT "Land ho! Head that way!"
ELSE
    PRINT "No land in sight — keep sailing"
END IF
```

**NOT OPERATOR:** The opposite of the condition.
- NOT flips things around
- If it's NOT stormy weather, we can set sail!

```
SET "stormy weather" = false

IF NOT "stormy weather" THEN
    PRINT "Clear skies — full sails ahead!"
ELSE
    PRINT "Too dangerous — stay in port"
END IF
```

**KEY TAKEAWAY:** These three tools work together to help you make all kinds of pirate decisions!

---

## HELPER BOX 3: ELSE IF — MULTIPLE CHOICES LIKE DIFFERENT ISLANDS 🏝️

**TOPIC:** Using ELSE IF for multiple decision paths.

**EXPLANATION:** Sometimes you have more than two choices. A treasure map might have three possible locations — the cave, the palm tree, or the waterfall. That's when we use ELSE IF!

**CODE EXAMPLE:**
```
SET "map clue" = "palm tree"

IF "map clue" = "cave" THEN
    PRINT "Search near the caves!"
ELSE IF "map clue" = "palm tree" THEN
    PRINT "Look by the palm trees!"
ELSE IF "map clue" = "waterfall" THEN
    PRINT "Check behind the waterfall!"
ELSE
    PRINT "Clue not recognized — keep searching!"
END IF
```

**HOW IT WORKS:** The computer checks each condition in order:
- First: Is it the cave? No — move to next
- Second: Is it the palm tree? YES — stop checking and do that!
- The waterfall and else never get checked because we already found our match

**TIP:** Order matters! Put your most likely or most important checks first.

---

## HELPER BOX 4: COMPARISON OPERATORS ON THE SHIP ⚖️

**TOPIC:** Comparison operators for checking values.

**OPERATOR LIST:**
- `>` — Greater than (older than 8?)
- `<` — Less than (fewer than 3 mistakes?)
- `>=` — Greater than or equal (8 or older?)
- `<=` — Less than or equal (3 or fewer mistakes?)
- `=` — Equal to (exactly 10 steps?)
- `!=` — Not equal to (word is NOT "parrot"?)

**PIRATE SHIP EXAMPLES:**
```
SET "child age" = 9
SET "steps from tree" = 10
SET "secret word" = "treasure"

IF "child age" >= 8 THEN
    PRINT "Old enough to climb the rigging!"
END IF

IF "steps from tree" = 10 THEN
    PRINT "Exactly at the X — start digging!"
END IF

IF "secret word" != "parrot" THEN
    PRINT "That's not the password — try again!"
END IF
```

**KEY INSIGHT:** Comparisons give us true or false — perfect for using with AND, OR, and NOT!

---

## HELPER BOX 5: COMBINING IT ALL — REAL PIRATE DECISIONS 🎯

**TOPIC:** Combining multiple logical operators in one decision.

**SCENARIO:** Real pirate decisions combine multiple tools. You might need to check age AND permission, OR have a backup plan, AND make sure it's NOT stormy!

**BOARDING EXAMPLE:**
```
SET "child age" = 9
SET "has permission" = true
SET "stormy weather" = false

IF ("child age" >= 8 AND "has permission") AND NOT "stormy weather" THEN
    PRINT "All clear — climb aboard, matey!"
ELSE
    PRINT "Not today — check conditions and try again"
END IF
```

**ANALYSIS:** This checks THREE things at once:
1. Is child age >= 8? (9 is — true)
2. Does child have permission? (true)
3. Is it NOT stormy? (false is stormy? No — so NOT stormy is true!)

All three are true — so we can board! 🏴‍☠️

**PARENTHESES TIP:** Use parentheses ( ) to group your conditions, just like in maths. They help the computer understand which checks go together!

```
IF ("child age" >= 8 AND "has permission") OR "captain says yes" THEN
    PRINT "You can come aboard!"
END IF
```

This says: You can board if (you're old enough AND have permission) OR if the captain says yes (even if the other two are false).

---

**END OF MODULE 6 PIRATE ADVENTURE PART 1 HELPER BOXES**
```

## **How to Save This as a File:**

1. **Copy everything** from the first `#` to the last line (excluding these instructions)
2. **Open a text editor** (Notepad, TextEdit, VS Code, etc.)
3. **Paste the content**
4. **Save as** `MODULE-6-PIRATE-ADVENTURE-PART-1-HELPER-BOX.md`
   - Make sure to use `.md` extension
   - Save with UTF-8 encoding if given the option

