<!-- HELPER BOX 1: Subtraction in Loops -->
<div class="helper-box">
  <h3 class="box-title">➖ Subtraction in Loops ➖</h3>

  <h4>Building on Parts 1 and 2</h4>
  <p>You've mastered counting with loops (Part 1) and doing addition and multiplication inside loops (Part 2). Now let's learn SUBTRACTION! This is useful when supplies are being used up, consumed, or running low during production.</p>

  <h4>Quick Color System Reminder 🎨</h4>
  <p>Remember: 🔵 BLUE PATH = loop continues (condition is TRUE), 🔴 RED PATH = loop stops (condition is FALSE)</p>

  <h4>Corn Supply Going Down 🌽</h4>
  <p>The Grand Hall storage starts with 20 corn boxes. Each day of production, 2 corn boxes get used up. How many boxes remain after each day?</p>

  <p>Without a loop, you'd calculate each day manually:</p>

  <div class="code-block">
    // Without a loop - calculate each day separately:<br>
    let day1Remaining = 20 - 2;<br>
    console.log(`Day 1: ${day1Remaining} boxes remain`);<br>
    <br>
    let day2Remaining = 20 - 4;<br>
    console.log(`Day 2: ${day2Remaining} boxes remain`);<br>
    <br>
    let day3Remaining = 20 - 6;<br>
    console.log(`Day 3: ${day3Remaining} boxes remain`);<br>
    <br>
    // ... this takes forever for 5 days!
  </div>

  <p>With a loop, it's automatic:</p>

  <div class="code-block">
    // With a loop - write it ONCE, calculates all days:<br>
    for (let day = 1; day <= 5; day++) {<br>
    &nbsp;&nbsp;let boxesUsed = day * 2;<br>
    &nbsp;&nbsp;let boxesRemaining = 20 - boxesUsed;<br>
    &nbsp;&nbsp;console.log(`Day ${day}: Used ${boxesUsed} boxes. ${boxesRemaining} remain.`);<br>
    }
  </div>

  <p><strong>Let's break this down:</strong></p>
  <ul class="indented-list">
    <li><code>let day = 1;</code> → <strong>Initialize:</strong> Start at day 1</li>
    <li><code>day <= 5;</code> → <strong>Condition:</strong> Keep going while day ≤ 5 (🔵 = continue, 🔴 = stop)</li>
    <li><code>day++</code> → <strong>Increment:</strong> Add 1 to day after each loop</li>
    <li><code>let boxesUsed = day * 2;</code> → Calculate how many boxes used (multiply first!)</li>
    <li><code>let boxesRemaining = 20 - boxesUsed;</code> → <strong>Subtract</strong> to find what's left</li>
  </ul>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    Day 1: Used 2 boxes. 18 remain.<br>
    Day 2: Used 4 boxes. 16 remain.<br>
    Day 3: Used 6 boxes. 14 remain.<br>
    Day 4: Used 8 boxes. 12 remain.<br>
    Day 5: Used 10 boxes. 10 remain.
  </div>

  <h4>Simple Subtraction Example 🛢️</h4>
  <p>Oil containers are simpler - each shift uses just 1 container. Starting with 30 containers, how many remain after each shift?</p>

  <div class="code-block">
    // Each shift uses 1 container<br>
    for (let shift = 1; shift <= 6; shift++) {<br>
    &nbsp;&nbsp;let containersLeft = 30 - shift;<br>
    &nbsp;&nbsp;console.log(`Shift ${shift}: ${containersLeft} containers remain`);<br>
    }
  </div>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    Shift 1: 29 containers remain<br>
    Shift 2: 28 containers remain<br>
    Shift 3: 27 containers remain<br>
    Shift 4: 26 containers remain<br>
    Shift 5: 25 containers remain<br>
    Shift 6: 24 containers remain
  </div>

  <p><strong>💡 Factory Tip:</strong> Subtraction in loops is perfect for tracking supplies that decrease over time. The loop counts up (1, 2, 3...) but the supplies count DOWN!</p>
</div>
<!-- End of helper box 1 -->

<!-- HELPER BOX 2: Division in Loops -->
<div class="helper-box">
  <h3 class="box-title">➗ Division in Loops ➗</h3>

  <h4>Sharing Supplies Equally</h4>
  <p>Division helps us distribute supplies fairly! When we have 24 flavor packets to share among different numbers of machines, division tells us how many each machine gets.</p>

  <h4>Flavor Packets Distribution 🍬</h4>
  <p>The Grand Hall has 24 flavor packets. How many packets does each machine get when we have 1, 2, 3, or 4 machines running?</p>

  <div class="code-block">
    // Divide 24 packets among different numbers of machines<br>
    for (let machines = 1; machines <= 4; machines++) {<br>
    &nbsp;&nbsp;let packetsEach = 24 / machines;<br>
    &nbsp;&nbsp;console.log(`${machines} machines: Each gets ${packetsEach} packets`);<br>
    }
  </div>

  <p><strong>Let's break this down:</strong></p>
  <ul class="indented-list">
    <li><code>let machines = 1;</code> → <strong>Initialize:</strong> Start with 1 machine</li>
    <li><code>machines <= 4;</code> → <strong>Condition:</strong> Keep going while machines ≤ 4 (🔵 = continue, 🔴 = stop)</li>
    <li><code>machines++</code> → <strong>Increment:</strong> Add 1 to machines after each loop</li>
    <li><code>let packetsEach = 24 / machines;</code> → <strong>Division:</strong> Split 24 packets equally</li>
  </ul>

  <p><strong>Following the paths:</strong></p>
  <ul class="indented-list">
    <li>machines = 1: Is 1 ≤ 4? YES! 🔵 → 24 ÷ 1 = 24 → Print → machines becomes 2</li>
    <li>machines = 2: Is 2 ≤ 4? YES! 🔵 → 24 ÷ 2 = 12 → Print → machines becomes 3</li>
    <li>machines = 3: Is 3 ≤ 4? YES! 🔵 → 24 ÷ 3 = 8 → Print → machines becomes 4</li>
    <li>machines = 4: Is 4 ≤ 4? YES! 🔵 → 24 ÷ 4 = 6 → Print → machines becomes 5</li>
    <li>machines = 5: Is 5 ≤ 4? NO! 🔴 → STOP!</li>
  </ul>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    1 machines: Each gets 24 packets<br>
    2 machines: Each gets 12 packets<br>
    3 machines: Each gets 8 packets<br>
    4 machines: Each gets 6 packets
  </div>

  <h4>Organizing Bags onto Shelves 📦</h4>
  <p>The packaging area has 36 popcorn bags to organize onto storage shelves. How many bags per shelf when we have 1, 2, 3, 4, or 6 shelves?</p>

  <div class="code-block">
    // Divide 36 bags among different numbers of shelves<br>
    for (let shelves = 1; shelves <= 6; shelves++) {<br>
    &nbsp;&nbsp;let bagsPerShelf = 36 / shelves;<br>
    &nbsp;&nbsp;console.log(`${shelves} shelves: ${bagsPerShelf} bags per shelf`);<br>
    }
  </div>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    1 shelves: 36 bags per shelf<br>
    2 shelves: 18 bags per shelf<br>
    3 shelves: 12 bags per shelf<br>
    4 shelves: 9 bags per shelf<br>
    6 shelves: 6 bags per shelf
  </div>

  <h4>Combining Subtraction and Division 🔢</h4>
  <p>Sometimes we use both! We have 40 salt packets to share among 5 machines. After each machine gets their share, how many packets remain?</p>

  <div class="code-block">
    let totalSalt = 40;<br>
    let machines = 5;<br>
    let saltPerMachine = totalSalt / machines;<br>
    <br>
    for (let machine = 1; machine <= machines; machine++) {<br>
    &nbsp;&nbsp;let saltGiven = machine * saltPerMachine;<br>
    &nbsp;&nbsp;let saltLeft = totalSalt - saltGiven;<br>
    &nbsp;&nbsp;console.log(`After machine ${machine}: ${saltGiven} given, ${saltLeft} left`);<br>
    }
  </div>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    After machine 1: 8 given, 32 left<br>
    After machine 2: 16 given, 24 left<br>
    After machine 3: 24 given, 16 left<br>
    After machine 4: 32 given, 8 left<br>
    After machine 5: 40 given, 0 left
  </div>

  <p><strong>💡 Factory Tip:</strong> Division in loops helps distribute supplies equally across machines. We can combine it with subtraction and multiplication to track complex production scenarios!</p>
</div>
<!-- End of helper box 2 -->
