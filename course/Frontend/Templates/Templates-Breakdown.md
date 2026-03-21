<!-- 
===========================================
TEMPLATE FOR NEW ACTIVE MODULE:
===========================================
<div class="topic-item">
  <a href="#MODULE-ID-HERE" class="scroll-link">##. Module Title 🎯</a>
  <p>Module description goes here...</p>
</div>

===========================================
TEMPLATE FOR COMING SOON MODULE:
===========================================
<div class="topic-item">
  <h3>##. Module Title 🎯 (Coming Soon)</h3>
  <p>Module description goes here...</p>
</div>
-->

<!-- Snippets 

Option 2: Create a Snippets File


# Module Templates

## Active Module
```html

  ##. Title 🎯
  Description...

```

## Coming Soon Module
```html

  ##. Title 🎯 (Coming Soon)
  Description...

``` 
-->

<!-- VS code snippet 

Option 3: VS Code Snippet (Most Powerful)

If you use VS Code, create a custom snippet:

    Cmd + Shift + P → "Configure User Snippets"
    Choose "html.json"
    Add:


{
  "Active Module": {
    "prefix": "module-active",
    "body": [
      "<div class=\"topic-item\">",
      "  <a href=\"#${1:module-id}\" class=\"scroll-link\">${2:##}. ${3:Title} ${4:🎯}</a>",
      "  <p>${5:Description}</p>",
      "</div>"
    ]
  },
  "Coming Soon Module": {
    "prefix": "module-soon",
    "body": [
      "<div class=\"topic-item\">",
      "  <h3>${1:##}. ${2:Title} ${3:🎯} (Coming Soon)</h3>",
      "  <p>${4:Description}</p>",
      "</div>"
    ]
  }
}

-->

<!-- 

/course/Frontend/
├── templates/
│   ├── MODULE_TEMPLATES.html
│   └── README.md

// File 1: /course/Frontend/templates/MODULE_TEMPLATES.html


<!-- ============================================ -->
<!-- ROADMAP MODULE TEMPLATES                     -->
<!-- Copy & paste these into your roadmap section -->
<!-- ============================================ -->

<!-- ============================================ -->
<!-- TEMPLATE 1: ACTIVE MODULE (clickable link)   -->
<!-- ============================================ -->

<!-- 
<div class="topic-item">
  <a href="#MODULE-ID-HERE" class="scroll-link">##. Module Title 🎯</a>
  <p>Module description goes here. Explain what students will learn and practice.</p>
</div>

<!-- EXAMPLE USAGE: 
<div class="topic-item">
  <a href="#arrays-module" class="scroll-link">17. Arrays 📚</a>
  <p>Learn how to store multiple items in a single variable, like a playlist of songs or a shopping list!</p>
</div>

-->


<!-- ============================================ -->
<!-- TEMPLATE 2: COMING SOON MODULE               -->
<!-- ============================================ -->

<!-- 
<div class="topic-item">
  <h3>##. Module Title 🎯 (Coming Soon)</h3>
  <p>Module description goes here. Explain what students will learn and practice.</p>
</div>

<!-- EXAMPLE USAGE: 
<div class="topic-item">
  <h3>17. Arrays 📚 (Coming Soon)</h3>
  <p>Learn how to store multiple items in a single variable, like a playlist of songs or a shopping list!</p>
</div>

--> 


<!-- ============================================ -->
<!-- INSTRUCTIONS:                                -->
<!-- 1. Copy the template you need                -->
<!-- 2. Replace ##. with the module number        -->
<!-- 3. Replace "Module Title" with your title    -->
<!-- 4. Replace 🎯 with appropriate emoji         -->
<!-- 5. Replace MODULE-ID-HERE with id (for links)-->
<!-- 6. Write your description                    -->
<!-- 7. Paste into your roadmap section           -->
<!-- ============================================ -->

<!-- EMOJI SUGGESTIONS: -->
<!-- 📦 Variables, 🔢 Numbers, 🔁 Loops, 🧩 Functions -->
<!-- 📚 Arrays, 🗂️ Objects, ⚡ Events, 🎨 Styling -->
<!-- 🚀 Advanced, 🎯 Practice, 🏴‍☠️ Adventure, 💎 Treasure -->


<!-- File 2: /course/Frontend/templates/README.md

# Course Module Templates

## Quick Start

1. Open `MODULE_TEMPLATES.html`
2. Copy the template you need
3. Fill in the blanks
4. Paste into your course HTML

## Template Types

### Active Module
Use this for modules that are ready and clickable.
- Has green border
- Clickable link with arrow →
- Hover effects (blue color, lift animation)

### Coming Soon Module
Use this for future modules.
- Has green border
- Not clickable
- Same visual style but no hover effects

## Styling Notes

Both templates automatically get:
- ✅ Green left border (10px)
- ✅ Padding and spacing
- ✅ Consistent font (1.7rem, weight 600)
- ✅ Light grey color (`var(--text-medium)`)

Active modules also get:
- Arrow (→) that animates on hover
- Blue color on hover
- Lift animation
- Shadow effect

## Adding New Modules

Just wrap in `<div class="topic-item">` and the CSS handles the rest!

-->

<!-- 
ok so ai puts forward ...
To use it:

    Create those two files
    When you need a new module, open MODULE_TEMPLATES.html
    Copy, fill in, paste!

Want me to also create a FULL_MODULE_TEMPLATE.html that includes the complete module structure (not just the roadmap item, but the actual module section with helper boxes, exercises, etc.)? 📁 ... I have this now ... just save for the moment 

-->


<!-- 

we can update this another time 

File 1: /course/Frontend/templates/ROADMAP_TEMPLATES.html (The roadmap item templates I showed you above)

File 2: /course/Frontend/templates/FULL_MODULE_TEMPLATES.html

This one would have complete module structure templates including:

    Module intro section
    Helper boxes
    Exercise boxes
    Code blocks
    Ending boxes

Want me to create the FULL_MODULE_TEMPLATES.html with complete module structures you can copy/paste?

Or do you have a different naming preference? Like:

    QUICK_ADD_MODULES.html
    MODULE_BUILDER.html
    COPY_PASTE_TEMPLATES.html

-->


