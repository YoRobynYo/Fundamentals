<!-- HELPER BOX: Accumulators - Variables Outside Loops -->
<div class="helper-box">
  <h3 class="box-title">📊 Accumulators: Tracking Running Totals 📊</h3>

  <h4>Building on Parts 1, 2, and 3</h4>
  <p>You've mastered counting (Part 1), addition and multiplication (Part 2), and subtraction and division (Part 3). Now you're ready for one of the MOST POWERFUL patterns in programming: the <strong>accumulator</strong>!</p>

  <h4>What's an Accumulator? 🤔</h4>
  <p>An accumulator is a variable that <strong>lives OUTSIDE the loop</strong> and keeps track of a running total. Think of it like a bucket that collects water - each time the loop runs, we add more to the bucket!</p>

  <h4>Variables Inside vs Outside Loops</h4>
  <p><strong>Variables INSIDE loops:</strong> Created fresh each time the loop runs, then disappear. Perfect for temporary calculations.</p>

  <div class="code-block">
    for (let day = 1; day <= 3; day++) {<br>
    &nbsp;&nbsp;let boxes = day * 2; // Created fresh each loop!<br>
    &nbsp;&nbsp;console.log(`Day ${day}: ${boxes} boxes`);<br>
    }<br>
    // boxes doesn't exist here - it was inside the loop!
  </div>

  <p><strong>Variables OUTSIDE loops (accumulators):</strong> Created once BEFORE the loop, updated INSIDE the loop, and REMEMBER their value between loops!</p>

  <div class="code-block">
    let totalBoxes = 0; // Created BEFORE the loop<br>
    <br>
    for (let day = 1; day <= 3; day++) {<br>
    &nbsp;&nbsp;totalBoxes = totalBoxes + 5; // Update the total<br>
    &nbsp;&nbsp;console.log(`Day ${day}: Total now ${totalBoxes}`);<br>
    }<br>
    // totalBoxes still exists here - it's 15!
  </div>

  <h4>The Accumulator Pattern 🔄</h4>
  <p>Here's the pattern you'll use over and over:</p>

  <ol class="indented-list">
    <li><strong>Create the accumulator BEFORE the loop:</strong> <code>let total = 0;</code></li>
    <li><strong>Update it INSIDE the loop:</strong> <code>total = total + amount;</code></li>
    <li><strong>Print the running total:</strong> <code>console.log(total);</code></li>
  </ol>

  <h4>Real Example: Tracking Corn Deliveries 🌽</h4>
  <p>The Grand Hall receives corn box deliveries. Each delivery brings 5 boxes. We need to track how many total boxes we have after each delivery.</p>

  <p><strong>Without an accumulator (doesn't work!):</strong></p>

  <div class="code-block">
    for (let delivery = 1; delivery <= 4; delivery++) {<br>
    &nbsp;&nbsp;let total = 5; // This resets to 5 every time!<br>
    &nbsp;&nbsp;console.log(`Delivery ${delivery}: Total ${total}`);<br>
    }
  </div>

  <p><strong>Output:</strong> (WRONG - total never builds up!)</p>
  <div class="code-block">
    Delivery 1: Total 5<br>
    Delivery 2: Total 5<br>
    Delivery 3: Total 5<br>
    Delivery 4: Total 5
  </div>

  <p><strong>With an accumulator (correct!):</strong></p>

  <div class="code-block">
    let totalCorn = 0; // Start at 0 BEFORE the loop<br>
    <br>
    for (let delivery = 1; delivery <= 4; delivery++) {<br>
    &nbsp;&nbsp;totalCorn = totalCorn + 5; // Add to the running total<br>
    &nbsp;&nbsp;console.log(`Delivery ${delivery}: Total now ${totalCorn} boxes`);<br>
    }
  </div>

  <p><strong>What happens step by step:</strong></p>
  <ul class="indented-list">
    <li>Before loop: totalCorn = 0</li>
    <li>Delivery 1: totalCorn = 0 + 5 = 5 → Print "Total now 5"</li>
    <li>Delivery 2: totalCorn = 5 + 5 = 10 → Print "Total now 10"</li>
    <li>Delivery 3: totalCorn = 10 + 5 = 15 → Print "Total now 15"</li>
    <li>Delivery 4: totalCorn = 15 + 5 = 20 → Print "Total now 20"</li>
  </ul>

  <p><strong>Output:</strong> (CORRECT - total builds up!)</p>
  <div class="code-block">
    Delivery 1: Total now 5 boxes<br>
    Delivery 2: Total now 10 boxes<br>
    Delivery 3: Total now 15 boxes<br>
    Delivery 4: Total now 20 boxes
  </div>

  <h4>Understanding the Magic 🎨</h4>
  <p>The key is: <code>totalCorn = totalCorn + 5;</code></p>

  <p>This might look strange at first! Here's what it means:</p>
  <ul class="indented-list">
    <li><strong>Right side first:</strong> Get the CURRENT value of totalCorn, add 5</li>
    <li><strong>Then left side:</strong> Store the NEW value back into totalCorn</li>
    <li><strong>Result:</strong> totalCorn increases by 5 each time!</li>
  </ul>

  <p>Think of it like a bank account: "My new balance = my old balance + deposit"</p>

  <h4>Another Example: Tracking Production 📦</h4>
  <p>Each day, the factory completes 7 batches of popcorn. Let's track the total batches completed over 5 days.</p>

  <div class="code-block">
    let totalBatches = 0; // Start with 0 batches completed<br>
    <br>
    for (let day = 1; day <= 5; day++) {<br>
    &nbsp;&nbsp;totalBatches = totalBatches + 7; // Add 7 more batches<br>
    &nbsp;&nbsp;console.log(`Day ${day}: Completed 7 batches. Total: ${totalBatches}`);<br>
    }
  </div>

  <p><strong>Output:</strong></p>
  <div class="code-block">
    Day 1: Completed 7 batches. Total: 7<br>
    Day 2: Completed 7 batches. Total: 14<br>
    Day 3: Completed 7 batches. Total: 21<br>
    Day 4: Completed 7 batches. Total: 28<br>
    Day 5: Completed 7 batches. Total: 35
  </div>

  <h4>The Accumulator Checklist ✓</h4>
  <p>Every time you use an accumulator, check these steps:</p>
  <ol class="indented-list">
    <li>✓ Variable created BEFORE the loop</li>
    <li>✓ Variable starts at 0 (usually)</li>
    <li>✓ Variable updated INSIDE the loop</li>
    <li>✓ Pattern: <code>total = total + amount</code></li>
    <li>✓ Variable still exists AFTER the loop</li>
  </ol>

  <h4>Why Accumulators Matter 💡</h4>
  <p>Accumulators are EVERYWHERE in real programming:</p>
  <ul class="indented-list">
    <li>Counting total sales in a store</li>
    <li>Adding up test scores to find an average</li>
    <li>Tracking inventory as items arrive</li>
    <li>Building up points in a game</li>
    <li>Calculating totals in spreadsheets</li>
  </ul>

  <p><strong>💡 Factory Tip:</strong> The loop does the REPEATING automatically (like Parts 1-3), but now we're COLLECTING results into a running total. The accumulator REMEMBERS everything from all the previous loops!</p>
</div>
<!-- End of helper box -->
