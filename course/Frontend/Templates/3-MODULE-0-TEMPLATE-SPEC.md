# SPEC FILE TEMPLATE
## For Fundamentals Course — Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Master template for writing exercise spec files — ALL spec files must follow this structure exactly
**Used by:** Any AI when generating exercises from a spec file

---

## IMPORTANT RULES FOR WRITING SPEC FILES

- NEVER write variable names in camelCase or snake_case — always use natural language in quotes e.g. "child name" NOT childName
- NEVER mention template literals, console.log, backticks, or any language-specific syntax
- NEVER use the word "programming" — this is a fundamentals course for everyone
- NEVER reference console, terminal, or any language-specific tools
- The CONCEPT field describes what the child is learning — not how it works in any language
- The VARIABLES TO USE field lists natural language descriptions only — the child converts them
- The EXPECTED OUTPUT field shows what the child should see printed — written in plain English
- The QUALITY CHECKLIST checks for pseudocode — not real code
- Rule 6 always applies — never reference something that hasn't been taught in a helper box yet

---

## THE SPEC FILE STRUCTURE

Every spec file must follow this exact structure:

```markdown
# module [NUMBER] - [TOPIC] - exercise specifications
## [SUBTITLE]

**Created:** [DATE]
**Purpose:** [PURPOSE — no mention of "test", this is the real thing]

**SETTING:** [WHERE the exercises take place]
**THEME:** [WHAT the exercises are about]

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-[X]-[TOPIC]-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE [NUMBER]: [TITLE] [EMOJI]

**SECTION NAME:** [section name in lowercase]
**EXERCISE NUMBER:** [number]
**EMOJI:** [single emoji]

**SCENARIO:** [1 sentence describing the real-world scenario — no code language]

**VARIABLES TO USE:**
- Part A: "[natural language]", "[natural language]", "[natural language]"
- Part B: "[natural language]", "[natural language]", "[natural language]"

**CONCEPT:** [What the child is learning — described in plain English, no syntax]

**PART A FOCUS:** [What Part A is about in plain English]
**PART B FOCUS:** [What Part B is about in plain English]

**IMAGE:** [filename].jpg
**ALT TEXT:** "[plain English description — no mention of console or language tools]"

**EXPECTED OUTPUT PART A:** "[What gets printed — written naturally]"
**EXPECTED OUTPUT PART B:** "[What gets printed — written naturally]"

---

## NARRATIVE CONTEXT

**Opening:**
"[Welcome/intro sentence — no mention of programming or any language]"

**Exercise Flow:**
1. [What exercise 1 teaches]
2. [What exercise 2 teaches]
3. [What exercise 3 teaches]
4. [What exercise 4 teaches]
5. [What exercise 5 teaches]

**Closing:**
"[Closing sentence celebrating what was learned and what comes next]"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name matches exactly
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET and PRINT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses `<code>` tags (not `<highlight>`)
- [ ] IDs follow pattern: [section]-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="[section]"
- [ ] Image filename and alt text match spec
- [ ] Empty hint/output/answer containers present
- [ ] Part A Step 4 shows complete pseudocode answer
- [ ] Part B Step 4 references the specific task — no pseudocode shown
- [ ] Expected outputs match the spec
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6)

---

## TEST RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________

---

END OF SPEC FILE TEMPLATE
```

---

# HOW THE SPEC TEMPLATE WORKS IN PRACTICE

Below is MODULE-1-VARIABLES-SPECS.md rewritten using this template.
This is the gold standard example of a correct spec file.

---
