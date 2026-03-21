# MODULE 7 - FUNCTIONS PART 1 - HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper box content for Module 7 Functions Part 1
**Setting:** 🏫 Classroom — using familiar variables from Module 1

---

## HELPER BOX 1: From Variables to Functions

**Title:** 🧠 From Variables to Functions

You already know variables. You have been using them since Module 1!

```
SET "child name" = "David"
SET "desk number" = 5
```

A variable stores a piece of information. Simple!

Now meet a **function**. A function is a named container for instructions. You write the instructions once, give them a name, and use that name whenever you need them to run.

Here is a simple function:

```
FUNCTION "show name"
  PRINT "My name is ", "child name"
END FUNCTION
```

To make it run, you **call** it:

```
CALL "show name"
```

Now here is the interesting part — what if we want the function to work with DIFFERENT information each time? We use a **parameter**!

A parameter is information you pass INTO the function when you call it:

```
FUNCTION "show name" ("child name")
  PRINT "My name is ", "child name"
END FUNCTION

CALL "show name" ("David")
CALL "show name" ("Samantha")
```

Output:
```
My name is David
My name is Samantha
```

One function — works for everyone! 🎉

---

## HELPER BOX 2: The Function Tree 🌳

**Title:** 🌳 The Function Tree — Seeing How It All Fits

Variables can live in different places — and that changes what they can do!

**A variable OUTSIDE a function** — available everywhere:
```
SET "classroom" = "Room 3"

FUNCTION "show class"
  PRINT "Welcome to ", "classroom"
END FUNCTION

CALL "show class"
```

**A variable INSIDE a function** — only lives while the function runs:
```
FUNCTION "show class"
  SET "classroom" = "Room 3"
  PRINT "Welcome to ", "classroom"
END FUNCTION

CALL "show class"
```

**A variable passed in as a PARAMETER** — information given to the function each time:
```
FUNCTION "show class" ("classroom")
  PRINT "Welcome to ", "classroom"
END FUNCTION

CALL "show class" ("Room 3")
CALL "show class" ("Room 5")
```

Now here is everything working together:

```
SET "school name" = "Greenfield Primary"

FUNCTION "introduce child" ("child name", "desk number")
  PRINT "School: ", "school name"
  PRINT "My name is ", "child name"
  PRINT "I sit at desk ", "desk number"
END FUNCTION

CALL "introduce child" ("David", 5)
CALL "introduce child" ("Samantha", 12)
CALL "introduce child" ("Gabrielle", 7)
```

Output:
```
School: Greenfield Primary
My name is David
I sit at desk 5
School: Greenfield Primary
My name is Samantha
I sit at desk 12
School: Greenfield Primary
My name is Gabrielle
I sit at desk 7
```

- `"school name"` lives OUTSIDE — available everywhere
- `"child name"` and `"desk number"` are PARAMETERS — passed in each time
- The function runs THREE times with different information

Write once. Use anywhere. That is the power of functions! 🚀

---

## NOTES FOR PIPELINE

- Setting: Classroom 🏫
- Uses familiar Module 1 variables: "child name", "desk number", "classroom"
- Pseudocode keywords introduced: FUNCTION, END FUNCTION, CALL
- Helper Box 1: variables → function → call → parameter — complete journey in one box
- Helper Box 2: where variables live — outside, inside, parameter — the full tree
- Exercises 1-3: no parameters — just FUNCTION, END FUNCTION, CALL
- Exercises 4-5: introduce parameters
- Never use real language syntax (no def, function(), arrow functions etc)
- British English throughout
- Names used: David, Samantha, Gabrielle
- School name: Greenfield Primary
