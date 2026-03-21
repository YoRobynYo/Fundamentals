<!-- Module 6: LOOPS -->
<section class="page" id="loops-module">
  <h2 class="module-title">Module 6: Loops 🔄</h2>

  <!-- HELPER BOX 1: Understanding Loops -->
  <div class="helper-box">
    <h3 class="box-title">🔄 Understanding Loops 🔄</h3>

    <h4>What is a Loop?</h4>
    <p>A loop is a way to make your code repeat automatically. Instead of writing the same instruction 5 times, 10 times, or even 100 times, you write it ONCE and tell the computer how many times to repeat it!</p>

    <p>Imagine you need to check 20 desks to see if they're clean. Without a loop, you'd have to write the same code 20 times:</p>
    
    <div class="code-block">
      // Without a loop - you write it 20 separate times:<br>
      console.log("Check desk 1");<br>
      console.log("Check desk 2");<br>
      console.log("Check desk 3");<br>
      console.log("Check desk 4");<br>
      console.log("Check desk 5");<br>
      // ... and 15 more lines! This is exhausting!
    </div>

    <p>With a loop, you write it ONCE and the loop repeats it for you:</p>
    
    <div class="code-block">
      // With a loop - write it ONCE, it repeats 20 times:<br>
      for (let desk = 1; desk <= 20; desk++) {<br>
      &nbsp;&nbsp;console.log(`Check desk ${desk}`);<br>
      }
    </div>

    <p><strong>Why do we need loops?</strong> Loops save time, reduce mistakes, and make our code cleaner and easier to understand!</p>

    <h4>The Three Parts of a For Loop 🔢</h4>
    <p>Every <code>for</code> loop has three important parts:</p>
    
    <ul class="indented-list">
      <li><strong>Initialize:</strong> Where do we start? We create a variable and give it a starting value.</li>
      <li><strong>Condition:</strong> When do we stop? The loop keeps running as long as this condition is true.</li>
      <li><strong>Increment:</strong> How do we move forward? We change the variable each time the loop runs.</li>
    </ul>

    <div style="text-align: center; margin: 25px 0;">
      <img class="reminder-image" src="Images/loop-parts-diagram.jpg" alt="Diagram showing the three parts of a for loop">
    </div>

    <h4>Breaking Down the For Loop Syntax 💻</h4>
    <p>Let's look at a simple loop and understand each part:</p>

    <div class="code-block">
      for (let i = 1; i <= 5; i++) {<br>
      &nbsp;&nbsp;console.log(`Counting: ${i}`);<br>
      }
    </div>

    <ul class="indented-list">
      <li><code>let i = 1;</code> → <strong>Initialize:</strong> Start at 1. Create a variable called <code>i</code> and set it to 1. <em>This happens ONCE at the very beginning.</em></li>
      <li><code>i <= 5;</code> → <strong>Condition:</strong> Keep going while <code>i</code> is less than or equal to 5. <em>The loop checks this BEFORE each repetition. When this becomes false, the loop stops.</em></li>
      <li><code>i++</code> → <strong>Increment:</strong> Add 1 to <code>i</code> after each repetition. <em>This happens AFTER the code inside runs.</em> (<code>i++</code> is shorthand for <code>i = i + 1</code>)</li>
    </ul>

    <p><strong>What happens?</strong> The loop runs 5 times. First time: i = 1, second time: i = 2, third time: i = 3, fourth time: i = 4, fifth time: i = 5. Then it stops because 6 is NOT less than or equal to 5!</p>

    <h4>Demo: Counting Pencils in the Supply Cupboard ✏️</h4>
    <p>The teacher needs to count pencils in 6 boxes. Each box is numbered. Let's use a loop to check each box:</p>

    <div class="code-block">
      for (let box = 1; box <= 6; box++) {<br>
      &nbsp;&nbsp;console.log(`Checking box ${box} for pencils`);<br>
      }
    </div>

    <p><strong>Let's break down this loop:</strong></p>
    <ul class="indented-list">
      <li><code>let box = 1;</code> → <strong>Initialize:</strong> Start at box 1. <em>This happens ONCE at the very beginning.</em></li>
      <li><code>box <= 6;</code> → <strong>Condition:</strong> Keep going while <code>box</code> is less than or equal to 6. <em>The loop checks this BEFORE each repetition.</em></li>
      <li><code>box++</code> → <strong>Increment:</strong> Add 1 to <code>box</code> after each repetition. <em>This happens AFTER the code inside runs.</em></li>
    </ul>

    <p><strong>Output:</strong></p>
    <div class="code-block">
      Checking box 1 for pencils<br>
      Checking box 2 for pencils<br>
      Checking box 3 for pencils<br>
      Checking box 4 for pencils<br>
      Checking box 5 for pencils<br>
      Checking box 6 for pencils
    </div>

    <p><strong>💡 Classroom Tip:</strong> The loop variable (like <code>i</code> or <code>box</code>) automatically changes each time the loop runs. You don't have to update it manually — the increment part does it for you!</p>

    <h4>When Loops Become Essential 🚀</h4>
    <p>So far we've seen loops with small numbers like 5 or 6. But what happens when the numbers get BIG? That's when loops become absolutely essential!</p>

    <h4>Challenge 1: The 500 Pencil Organization 📦</h4>
    <p>The school supply room just received a delivery of <strong>500 pencils</strong>! They need to be packed into boxes, with <strong>5 pencils per box</strong>. That means we need to label <strong>100 boxes</strong>!</p>

    <p>Each box needs a label showing which pencils it contains:</p>
    <ul class="indented-list">
      <li>Box 1 has pencils 1-5</li>
      <li>Box 2 has pencils 6-10</li>
      <li>Box 3 has pencils 11-15</li>
      <li>... and so on, all the way to Box 100!</li>
    </ul>

    <p><strong>Could you do this without a loop?</strong> You'd have to write 100 separate console.log statements, calculating the pencil numbers for each box manually. That would take forever and you'd probably make mistakes!</p>

    <p><strong>With a loop, it's easy:</strong></p>

    <div class="code-block">
      for (let box = 1; box <= 100; box++) {<br>
      &nbsp;&nbsp;let firstPencil = (box - 1) * 5 + 1;<br>
      &nbsp;&nbsp;let lastPencil = box * 5;<br>
      &nbsp;&nbsp;console.log(`Box ${box} has pencils ${firstPencil}-${lastPencil}`);<br>
      }
    </div>

    <p><strong>Let's watch this loop work through the first few boxes:</strong></p>
    <ul class="indented-list">
      <li><strong>First time:</strong> box = 1 (1 <= 100? YES! Calculate: pencils 1-5, print message, then box becomes 2)</li>
      <li><strong>Second time:</strong> box = 2 (2 <= 100? YES! Calculate: pencils 6-10, print message, then box becomes 3)</li>
      <li><strong>Third time:</strong> box = 3 (3 <= 100? YES! Calculate: pencils 11-15, print message, then box becomes 4)</li>
      <li><strong>Fourth time:</strong> box = 4 (4 <= 100? YES! Calculate: pencils 16-20, print message, then box becomes 5)</li>
      <li>... this continues all the way to box = 100!</li>
      <li><strong>Check:</strong> box = 101 (101 <= 100? NO! Stop!)</li>
    </ul>

    <p>The loop handles all 100 boxes automatically! This is a <strong>perfect example of why we use <code>for</code> loops</strong> — when you know exactly how many times you need to repeat something.</p>

    <h4>Challenge 2: The 504 Cookie Delivery 🍪</h4>
    <p>The school cafeteria received <strong>504 cookies</strong> for a bake sale! They need to be packed into boxes with <strong>6 cookies per box</strong>. That's exactly <strong>84 boxes</strong> to organize!</p>

    <p>Each box needs to show which cookies it contains:</p>
    <ul class="indented-list">
      <li>Box 1 has cookies 1-6</li>
      <li>Box 2 has cookies 7-12</li>
      <li>Box 3 has cookies 13-18</li>
      <li>... all the way to Box 84 (which has cookies 499-504)!</li>
    </ul>

    <p><strong>Without a loop?</strong> Impossible! You'd spend hours writing and calculating.</p>

    <p><strong>With a loop:</strong></p>

    <div class="code-block">
      for (let box = 1; box <= 84; box++) {<br>
      &nbsp;&nbsp;let firstCookie = (box - 1) * 6 + 1;<br>
      &nbsp;&nbsp;let lastCookie = box * 6;<br>
      &nbsp;&nbsp;console.log(`Box ${box} has cookies ${firstCookie}-${lastCookie}`);<br>
      }
    </div>

    <p><strong>Let's watch the first few iterations:</strong></p>
    <ul class="indented-list">
      <li><strong>box = 1:</strong> Calculate cookies 1-6, print it, then box becomes 2</li>
      <li><strong>box = 2:</strong> Calculate cookies 7-12, print it, then box becomes 3</li>
      <li><strong>box = 3:</strong> Calculate cookies 13-18, print it, then box becomes 4</li>
      <li>... continues until box = 84</li>
      <li><strong>box = 84:</strong> Calculate cookies 499-504, print it, then box becomes 85</li>
      <li><strong>box = 85:</strong> (85 <= 84? NO! Loop stops)</li>
    </ul>

    <p><strong>🎯 Key Takeaway:</strong> Loops let you handle tasks that would be impossible to do manually. Whether it's 6 boxes or 600 boxes, the loop code stays simple — you just change the numbers!</p>

  </div>
  <!-- End of helper box 1 -->


  <!-- HELPER BOX 2: Variables and Math Operations in Loops -->
  <div class="helper-box">
    <h3 class="box-title">📦 Variables and Math Operations in Loops 🧮</h3>

    <h4>Variables Work Together With Loops!</h4>
    <p>Now that you understand how loops work, let's see how we can use variables to track information and perform math operations inside loops. This is where loops become really powerful!</p>

    <h4>Using the Loop Counter in Math Operations ➕➖✖️➗</h4>
    <p>The loop counter variable (like <code>i</code>) can be used in math! Let's look at different operations:</p>

    <h4>Example 1: Addition ➕</h4>
    <p>The teacher has sticker packs numbered 1, 2, 3, 4, and 5. Each student gets their sticker pack number PLUS 3 bonus stickers. How many total stickers does each student get?</p>

    <div class="code-block">
      for (let student = 1; student <= 5; student++) {<br>
      &nbsp;&nbsp;let totalStickers = student + 3;<br>
      &nbsp;&nbsp;console.log(`Student ${student} gets pack ${student} + 3 bonus = ${totalStickers} stickers`);<br>
      }
    </div>

    <p><strong>Let's break down this loop:</strong></p>
    <ul class="indented-list">
      <li><code>let student = 1;</code> → <strong>Initialize:</strong> Start with student 1. <em>This happens ONCE at the very beginning.</em></li>
      <li><code>student <= 5;</code> → <strong>Condition:</strong> Keep going while we have students 1 through 5. <em>The loop checks this BEFORE each repetition.</em></li>
      <li><code>student++</code> → <strong>Increment:</strong> Move to the next student number. <em>This happens AFTER the code inside runs.</em></li>
    </ul>

    <p><strong>Output:</strong></p>
    <div class="code-block">
      Student 1 gets pack 1 + 3 bonus = 4 stickers<br>
      Student 2 gets pack 2 + 3 bonus = 5 stickers<br>
      Student 3 gets pack 3 + 3 bonus = 6 stickers<br>
      Student 4 gets pack 4 + 3 bonus = 7 stickers<br>
      Student 5 gets pack 5 + 3 bonus = 8 stickers
    </div>

    <h4>Example 2: Multiplication ✖️</h4>
    <p>Each desk number gets 2 pencils. How many pencils does each desk get?</p>

    <div class="code-block">
      for (let desk = 1; desk <= 4; desk++) {<br>
      &nbsp;&nbsp;let pencils = desk * 2;<br>
      &nbsp;&nbsp;console.log(`Desk ${desk} gets ${pencils} pencils`);<br>
      }
    </div>

    <p><strong>Output:</strong></p>
    <div class="code-block">
      Desk 1 gets 2 pencils<br>
      Desk 2 gets 4 pencils<br>
      Desk 3 gets 6 pencils<br>
      Desk 4 gets 8 pencils
    </div>

    <h4>Example 3: Subtraction ➖</h4>
    <p>The supply cupboard starts with 10 erasers. Each student takes 1. How many are left after each student?</p>

    <div class="code-block">
      for (let student = 1; student <= 5; student++) {<br>
      &nbsp;&nbsp;let remaining = 10 - student;<br>
      &nbsp;&nbsp;console.log(`After student ${student}, ${remaining} erasers remain`);<br>
      }
    </div>

    <p><strong>Output:</strong></p>
    <div class="code-block">
      After student 1, 9 erasers remain<br>
      After student 2, 8 erasers remain<br>
      After student 3, 7 erasers remain<br>
      After student 4, 6 erasers remain<br>
      After student 5, 5 erasers remain
    </div>

    <h4>Example 4: Division ➗</h4>
    <p>The teacher has 24 crayons and wants to divide them equally among groups. How many crayons per group?</p>

    <div class="code-block">
      for (let groups = 1; groups <= 4; groups++) {<br>
      &nbsp;&nbsp;let crayonsPerGroup = 24 / groups;<br>
      &nbsp;&nbsp;console.log(`${groups} groups get ${crayonsPerGroup} crayons each`);<br>
      }
    </div>

    <p><strong>Output:</strong></p>
    <div class="code-block">
      1 groups get 24 crayons each<br>
      2 groups get 12 crayons each<br>
      3 groups get 8 crayons each<br>
      4 groups get 6 crayons each
    </div>

    <h4>Tracking Totals with Variables 📊</h4>
    <p>Sometimes we need a variable OUTSIDE the loop to keep track of a running total. Watch this:</p>

    <div class="code-block">
      let totalBooks = 0;<br>
      <br>
      for (let shelf = 1; shelf <= 4; shelf++) {<br>
      &nbsp;&nbsp;totalBooks = totalBooks + 5;<br>
      &nbsp;&nbsp;console.log(`Added 5 books from shelf ${shelf}. Total now: ${totalBooks}`);<br>
      }
    </div>

    <p><strong>What happens?</strong> We start with 0 books. Each time the loop runs, we add 5 more books. The variable <code>totalBooks</code> keeps growing: 5, then 10, then 15, then 20!</p>

    <h4>Demo: Calculating Weekly Homework Points 📝</h4>
    <p>Each day of the school week, students earn 10 points for completing homework. Let's track the total points over 5 days:</p>

    <div class="code-block">
      let totalPoints = 0;<br>
      <br>
      for (let day = 1; day <= 5; day++) {<br>
      &nbsp;&nbsp;totalPoints = totalPoints + 10;<br>
      &nbsp;&nbsp;console.log(`Day ${day}: Earned 10 points. Total: ${totalPoints} points`);<br>
      }
    </div>

    <p><strong>Output:</strong></p>
    <div class="code-block">
      Day 1: Earned 10 points. Total: 10 points<br>
      Day 2: Earned 10 points. Total: 20 points<br>
      Day 3: Earned 10 points. Total: 30 points<br>
      Day 4: Earned 10 points. Total: 40 points<br>
      Day 5: Earned 10 points. Total: 50 points
    </div>

    <p><strong>💡 Classroom Tip:</strong> When you need to track a total that builds up over time, create a variable BEFORE the loop starts, then update it INSIDE the loop. This is called an "accumulator" because it accumulates (collects) values!</p>
  </div>
  <!-- End of helper box 2 -->

</section>
<!-- End of Module 6: Loops -->
