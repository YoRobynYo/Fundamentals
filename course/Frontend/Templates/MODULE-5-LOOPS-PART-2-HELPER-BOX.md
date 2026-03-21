<!-- HELPER BOX 1: Addition and Multiplication in Loops -->
<div class="helper-box">
  <h3 class="box-title">🧮 Addition and Multiplication in Loops 🧮</h3>

  <h4>Building on What You Learned</h4>
  <p>In Part 1, you mastered counting with loops. You learned how loops repeat code automatically and how the loop counter changes each time. Now we're going to use that counter to DO MATH! This is where loops become really powerful.</p>

  <h4>Addition in Loops ➕</h4>
  <p>Sometimes we need to add extra items to what we're counting. For example, each machine gets its number PLUS 2 backup oil containers. Let's see how this works:</p>

  <div class="code-block">
    // Each machine gets its number + 2 backup containers<br>
    for (let machine = 1; machine <= 5; machine++) {<br>
    &nbsp;&nbsp;let totalContainers = machine + 2;<br>
    &nbsp;&nbsp;console.log(`Machine ${machine}: ${machine} + 2 backup = ${totalContainers} containers`);<br>
    }
  </div>

  <p><strong>What happens:</strong> The loop counts 1, 2, 3, 4, 5 (like Part 1), but NOW we calculate something with each number!</p>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    Machine 1: 1 + 2 backup = 3 containers<br>
    Machine 2: 2 + 2 backup = 4 containers<br>
    Machine 3: 3 + 2 backup = 5 containers<br>
    Machine 4: 4 + 2 backup = 6 containers<br>
    Machine 5: 5 + 2 backup = 7 containers
  </div>

  <h4>Multiplication in Loops ✖️</h4>
  <p>Sometimes each machine needs multiple items. If each station gets 2 flavor packets per station number, we multiply! Station 1 gets 1 × 2 = 2 packets. Station 2 gets 2 × 2 = 4 packets:</p>

  <div class="code-block">
    // Each station gets station number × 2 flavor packets<br>
    for (let station = 1; station <= 5; station++) {<br>
    &nbsp;&nbsp;let packets = station * 2;<br>
    &nbsp;&nbsp;console.log(`Station ${station} gets ${packets} flavor packets`);<br>
    }
  </div>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    Station 1 gets 2 flavor packets<br>
    Station 2 gets 4 flavor packets<br>
    Station 3 gets 6 flavor packets<br>
    Station 4 gets 8 flavor packets<br>
    Station 5 gets 10 flavor packets
  </div>

  <h4>Combining Operations 🔢</h4>
  <p>We can multiply THEN add! Each machine gets (machine number × 2) corn boxes, PLUS 3 extra boxes for backup. Machine 1 gets (1 × 2) + 3 = 5 boxes. Machine 2 gets (2 × 2) + 3 = 7 boxes:</p>

  <div class="code-block">
    // Calculate base amount, then add extra<br>
    for (let machine = 1; machine <= 4; machine++) {<br>
    &nbsp;&nbsp;let baseBoxes = machine * 2;<br>
    &nbsp;&nbsp;let totalBoxes = baseBoxes + 3;<br>
    &nbsp;&nbsp;console.log(`Machine ${machine}: (${machine} × 2) + 3 = ${totalBoxes} boxes`);<br>
    }
  </div>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    Machine 1: (1 × 2) + 3 = 5 boxes<br>
    Machine 2: (2 × 2) + 3 = 7 boxes<br>
    Machine 3: (3 × 2) + 3 = 9 boxes<br>
    Machine 4: (4 × 2) + 3 = 11 boxes
  </div>

  <h4>Understanding Variables Inside Loops 📦</h4>
  <p>Notice we create variables INSIDE the loop (like <code>totalContainers</code>, <code>packets</code>, <code>baseBoxes</code>). These variables are created fresh each time the loop runs. They're perfect for storing our calculations!</p>

  <p><strong>The Pattern:</strong></p>
  <ul class="indented-list">
    <li>Loop counter changes: 1, 2, 3, 4, 5...</li>
    <li>We use it in math: <code>machine + 2</code> or <code>station * 2</code></li>
    <li>Store result in a variable: <code>let total = machine + 2;</code></li>
    <li>Print the result: <code>console.log(...)</code></li>
  </ul>

  <p><strong>💡 Factory Tip:</strong> The loop does the counting automatically (just like Part 1), and now we're doing math with each number as it counts!</p>
</div>
<!-- End of helper box 1 -->
