# MODULE 7 - FUNCTIONS PART 1 - EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Spec file for AI to generate all Module 7 Functions Part 1 exercises

**SETTING:** 🏫 Classroom
**THEME:** Learning the shape of a function — write it, call it, then slowly add branches

---

## TEACHING PHILOSOPHY — READ THIS FIRST

The goal of Part 1 is NOT to overwhelm children with new content.
The goal is to make the FORMAT of a function feel completely natural.

- Exercises 1-3: Learn the shape. FUNCTION → instructions → END FUNCTION → CALL
- Exercises 4-5: Add one branch. Same shape — but now with a parameter.

By Exercise 5 the child has not been pushed — they have grown the tree naturally.
Every exercise uses familiar classroom variables from Module 1.
No new concepts other than FUNCTION, END FUNCTION, CALL, and parameters.

---

## EXERCISE 1: My First Function 👋

**SECTION NAME:** functions
**EXERCISE NUMBER:** 1
**EMOJI:** 👋

**SCENARIO:** Write your very first function! It introduces you to the class with just your name.

**VARIABLES TO USE:**
- Part A: "child name"
- Part B: "child name"

**CONCEPT:** The shape of a function — FUNCTION, one instruction inside, END FUNCTION, CALL.

**PART A FOCUS:** Create a variable named "child name" set to "David". Write a function called "introduce me" that prints the child name. Call the function.
**PART B FOCUS:** Change "child name" to "Samantha". Write the same function and call it again.

**EXPECTED OUTPUT PART A:**
```
My name is David
```
**EXPECTED OUTPUT PART B:**
```
My name is Samantha
```

---

## EXERCISE 2: My Desk 🪑

**SECTION NAME:** functions
**EXERCISE NUMBER:** 2
**EMOJI:** 🪑

**SCENARIO:** Now add more information to your function — your name AND your desk number.

**VARIABLES TO USE:**
- Part A: "child name", "desk number"
- Part B: "child name", "desk number"

**CONCEPT:** Same function shape — but now with two variables inside. The shape stays the same, the content grows.

**PART A FOCUS:** Create variables "child name" set to "David" and "desk number" set to 5. Write a function called "show my desk" that prints both. Call the function.
**PART B FOCUS:** Change "child name" to "Gabrielle" and "desk number" to 12. Write the same function and call it.

**EXPECTED OUTPUT PART A:**
```
My name is David
I sit at desk 5
```
**EXPECTED OUTPUT PART B:**
```
My name is Gabrielle
I sit at desk 12
```

---

## EXERCISE 3: My Classroom 🏫

**SECTION NAME:** functions
**EXERCISE NUMBER:** 3
**EMOJI:** 🏫

**SCENARIO:** Now the full classroom introduction — name, desk, and classroom all together.

**VARIABLES TO USE:**
- Part A: "child name", "desk number", "classroom"
- Part B: "child name", "desk number", "classroom"

**CONCEPT:** Same function shape — now three variables inside. Children are now completely comfortable with the format.

**PART A FOCUS:** Create variables "child name" set to "David", "desk number" set to 5, "classroom" set to "Room 3". Write a function called "introduce myself" that prints all three. Call the function.
**PART B FOCUS:** Change "child name" to "Samantha", "desk number" to 8, "classroom" to "Room 5". Write the same function and call it.

**EXPECTED OUTPUT PART A:**
```
My name is David
I sit at desk 5
My classroom is Room 3
```
**EXPECTED OUTPUT PART B:**
```
My name is Samantha
I sit at desk 8
My classroom is Room 5
```

---

## EXERCISE 4: Introducing Anyone 🙋

**SECTION NAME:** functions
**EXERCISE NUMBER:** 4
**EMOJI:** 🙋

**SCENARIO:** The same introduction function — but now it works for ANY child, not just one. This is the first branch — a parameter!

**VARIABLES TO USE:**
- Part A: "child name" as a parameter
- Part B: "child name" as a parameter

**CONCEPT:** Same function shape — but now "child name" is passed in as a parameter instead of set inside. One new branch on the tree.

**PART A FOCUS:** Write a function called "greet child" that takes "child name" as a parameter and prints a greeting. Call it with "David", then call it again with "Samantha".
**PART B FOCUS:** Call the same function with "Gabrielle" then with a name of the child's choice.

**EXPECTED OUTPUT PART A:**
```
Hello David, welcome to class!
Hello Samantha, welcome to class!
```
**EXPECTED OUTPUT PART B:**
```
Hello Gabrielle, welcome to class!
Hello [child's own name], welcome to class!
```

---

## EXERCISE 5: The Full Introduction 🌟

**SECTION NAME:** functions
**EXERCISE NUMBER:** 5
**EMOJI:** 🌟

**SCENARIO:** The complete classroom introduction — now with TWO parameters. Another branch added to the tree!

**VARIABLES TO USE:**
- Part A: "child name", "desk number" as parameters. "school name" outside the function.
- Part B: "child name", "desk number" as parameters. "school name" outside the function.

**CONCEPT:** Two parameters passed in, one variable living outside the function. The full tree — outside variable, parameters, function, call.

**PART A FOCUS:** Set "school name" to "Greenfield Primary" outside the function. Write a function called "full introduction" that takes "child name" and "desk number" as parameters and prints all three pieces of information. Call it with David at desk 5, then Samantha at desk 8.
**PART B FOCUS:** Keep "school name" as "Greenfield Primary". Call the same function with Gabrielle at desk 3, then with the child's own name and desk number.

**EXPECTED OUTPUT PART A:**
```
School: Greenfield Primary
My name is David
I sit at desk 5
School: Greenfield Primary
My name is Samantha
I sit at desk 8
```
**EXPECTED OUTPUT PART B:**
```
School: Greenfield Primary
My name is Gabrielle
I sit at desk 3
School: Greenfield Primary
My name is [child's own name]
I sit at desk [child's own desk number]
```

---

## NARRATIVE CONTEXT

**Opening for Module 7 Part 1:**
"You have learned so much — variables, operators, conditions, loops. Now it is time to learn one of the most powerful tools in coding: functions! A function lets you write a set of instructions once and use them as many times as you like. Let us start with something familiar and build from there!"

**Exercise Flow:**
1. The shape — write your first function with one variable
2. Growing the inside — add a second variable, same shape
3. Full comfort — three variables, same shape, completely natural
4. First branch — same shape but now with a parameter
5. Another branch — two parameters and an outside variable working together

**Closing:**
"Brilliant work! You have just learned one of the most important concepts in all of coding. You can write a function, call it, pass information into it, and use variables inside and outside it. You are thinking like a real coder now!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "functions"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Function names use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — FUNCTION, END FUNCTION, CALL — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] IDs follow pattern: functions-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="functions"
- [ ] Exercise 1 Part A shows pseudocode in code-example div
- [ ] Exercise 1 Part B shows pseudocode in code-example div
- [ ] Exercises 2-5 Part B Step 4 references specific task — no pseudocode shown
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6)
- [ ] British English throughout
- [ ] Names used: David, Samantha, Gabrielle
- [ ] School name: Greenfield Primary

---

END OF MODULE 7 PART 1 SPECIFICATIONS
