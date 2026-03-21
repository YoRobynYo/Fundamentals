// ==========================================================
// MAIN APPLICATION SCRIPT (SINGLE SOURCE OF TRUTH)
// ==========================================================
document.addEventListener('DOMContentLoaded', function () {

  // ==========================================================
  // PAGE FLOW (Cover → Credits → Main Content)
  // ==========================================================
  document
    .querySelector('#cover-page-container .start-button')
    ?.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('cover-page-container').style.display = 'none';
      document.getElementById('credits-page').style.display = 'flex';
    });

  document
    .querySelector('#credits-page .start-button')
    ?.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('credits-page').style.display = 'none';
    });

		// ==========================================================
		//   PART 1: THE DATA
		// ==========================================================
		 

		const exerciseData = {
				 variables: {
					// EXERCISE 1: Classroom Introduction 👋
					"1-part-a": {
						hints: [
							"Use SET to create three variables: \"child name\", \"desk number\", and \"classroom number\".",
							"Use PRINT to display the introduction using commas to join the text and variables."
						],
						answer: "SET \"child name\" = \"Ben\"\nSET \"desk number\" = 7\nSET \"classroom number\" = 102\nPRINT \"My name is \", \"child name\"\nPRINT \"I sit at desk \", \"desk number\", \" in classroom \", \"classroom number\""
					},
					
					"1-part-b": {
						hints: [
							"Use SET to create three variables: \"teacher name\", \"subject\", and \"lesson number\".",
							"Remember that text values like \"Mrs Jones\" need quotes, but the number 1 does not.",
							"Use PRINT to display the message by joining the text and variables with commas."
						],
						answer: "SET \"teacher name\" = \"Mrs Jones\"\nSET \"subject\" = \"Fundamentals\"\nSET \"lesson number\" = 1\nPRINT \"My teacher is \", \"teacher name\", \" and this is \", \"subject\", \" lesson \", \"lesson number\""
					},
					
					// EXERCISE 2: Supply Cupboard Mapping 📦
					"2-part-a": {
						hints: [
							"Create four variables to store the items and their locations.",
							"Use PRINT to combine these variables into the descriptions of where the items are."
						],
						answer: "SET \"first item\" = \"Pencils\"\nSET \"first location\" = \"drawer 1\"\nSET \"second item\" = \"Paper\"\nSET \"second location\" = \"shelf 2\"\nPRINT \"first item\", \" are in \", \"first location\", \". \", \"second item\", \" is on \", \"second location\", \".\""
					},
					
					"2-part-b": {
						hints: [
							"Store the numbers for the shelf, drawer, and cabinet in three variables.",
							"Use PRINT to display the complete supply map using commas to separate each part."
						],
						answer: "SET \"shelf number\" = 3\nSET \"drawer number\" = 1\nSET \"cabinet number\" = 2\nPRINT \"Supply map — Shelf: \", \"shelf number\", \", Drawer: \", \"drawer number\", \", Cabinet: \", \"cabinet number\", \".\""
					},
					
					// EXERCISE 3: Student Directory 📚
					"3-part-a": {
						hints: [
							"Create variables for the child's name, age, and favourite subject.",
							"Use PRINT to display the student record with the correct labels."
						],
						answer: "SET \"first child name\" = \"Sarah\"\nSET \"first child age\" = 11\nSET \"first child favourite subject\" = \"Art\"\nPRINT \"Student: \", \"first child name\", \", Age: \", \"first child age\", \", Favourite subject: \", \"first child favourite subject\""
					},
					
					"3-part-b": {
						hints: [
							"Store the second child's name, grade, and hobby in variables.",
							"Use PRINT to output the formatted directory entry."
						],
						answer: "SET \"second child name\" = \"James\"\nSET \"second child grade\" = 6\nSET \"second child hobby\" = \"Football\"\nPRINT \"Student: \", \"second child name\", \", Grade: \", \"second child grade\", \", Hobby: \", \"second child hobby\""
					},
					
					// EXERCISE 4: Teacher Information 👨‍🏫
					"4-part-a": {
						hints: [
							"Set variables for the teacher's name, their subject, and the room number.",
							"Use PRINT to create the introductory sentence about the teacher."
						],
						answer: "SET \"teacher name\" = \"Mrs Jones\"\nSET \"subject taught\" = \"Maths\"\nSET \"room number\" = 12\nPRINT \"Teacher: \", \"teacher name\", \" teaches \", \"subject taught\", \" in room \", \"room number\", \".\""
					},
					
					"4-part-b": {
						hints: [
							"Create variables for the assistant's name, role, and availability.",
							"Use PRINT to display the formatted assistant information."
						],
						answer: "SET \"assistant name\" = \"Mr Smith\"\nSET \"role\" = \"Science support\"\nSET \"availability\" = \"Mornings\"\nPRINT \"Assistant: \", \"assistant name\", \", Role: \", \"role\", \", Available: \", \"availability\", \".\""
					},
					
					// EXERCISE 5: Daily Schedule ⏰
					"5-part-a": {
						hints: [
							"Store the subject, time, and teacher for the first period in variables.",
							"Use PRINT to output the schedule entry for period 1."
						],
						answer: "SET \"first period subject\" = \"Maths\"\nSET \"first period time\" = \"9am\"\nSET \"first period teacher\" = \"Mrs Jones\"\nPRINT \"Period 1: \", \"first period subject\", \" at \", \"first period time\", \" with \", \"first period teacher\", \".\""
					},
					
					"5-part-b": {
						hints: [
							"Create variables for the second period details and the special activity.",
							"Use PRINT to display the full schedule for the second period."
						],
						answer: "SET \"second period subject\" = \"Science\"\nSET \"second period time\" = \"10am\"\nSET \"special activity\" = \"Nature Walk\"\nPRINT \"Period 2: \", \"second period subject\", \" at \", \"second period time\", \". Today's activity: \", \"special activity\", \".\""
					}
				}, // updated March 2026

					operations: {
						// EXERCISE 1: Counting Pencils ✏️
						"1-part-a": {
							hints: [
								"Use SET to store the number of pencils on each shelf: \"first shelf pencils\" = 15 and \"second shelf pencils\" = 23.",
								"Use SET to calculate \"total pencils\" by adding the two shelf variables together.",
								"Use PRINT to display the counts and the total total, separated by commas."
							],
							answer: "SET \"first shelf pencils\" = 15\nSET \"second shelf pencils\" = 23\nSET \"total pencils\" = \"first shelf pencils\" + \"second shelf pencils\"\nPRINT \"Shelf 1 has \", \"first shelf pencils\", \" pencils. Shelf 2 has \", \"second shelf pencils\", \" pencils. Total: \", \"total pencils\", \" pencils.\""
						},
						"1-part-b": {
							hints: [
								"Use SET to create variables for \"first drawer pencils\" (12) and \"second drawer pencils\" (8).",
								"Create a variable for the \"total pencils\" from the shelves (38) to help calculate the final amount.",
								"Use SET to calculate the \"grand total\" by adding both drawers and the previous shelf total together.",
								"Use PRINT to display the drawer counts and the final grand total of 58 pencils."
							],
							answer: "SET \"first drawer pencils\" = 12\nSET \"second drawer pencils\" = 8\nSET \"shelf total\" = 38\nSET \"grand total\" = \"first drawer pencils\" + \"second drawer pencils\" + \"shelf total\"\nPRINT \"Drawer 1 has \", \"first drawer pencils\", \" pencils. Drawer 2 has \", \"second drawer pencils\", \" pencils. Grand total of all pencils: \", \"grand total\", \".\""
						},

						// EXERCISE 2: Supplies Used vs. Remaining 📝
						"2-part-a": {
							hints: [
								"Use SET to store the starting notebooks (50) and those used (12).",
								"Calculate \"notebooks left\" by subtracting the used amount from the start.",
								"PRINT the results using commas to join text and variables."
							],
							answer: "SET \"notebooks at start\" = 50\nSET \"notebooks used\" = 12\nSET \"notebooks left\" = \"notebooks at start\" - \"notebooks used\"\nPRINT \"Started with \", \"notebooks at start\", \" notebooks. Used \", \"notebooks used\", \" notebooks today. Remaining: \", \"notebooks left\", \" notebooks.\""
						},
						"2-part-b": {
							hints: [
								"Set variables for starting erasers (30) and those used (7).",
								"Calculate the remaining erasers using the subtraction operator (-).",
								"Output the message using PRINT to show that 23 erasers remain."
							],
							answer: "SET \"erasers at start\" = 30\nSET \"erasers used\" = 7\nSET \"erasers remaining\" = \"erasers at start\" - \"erasers used\"\nPRINT \"Started with \", \"erasers at start\", \" erasers. Used \", \"erasers used\", \" erasers today. Remaining: \", \"erasers remaining\", \" erasers.\""
						},

						// EXERCISE 3: Organising Into Boxes 📦
						"3-part-a": {
							hints: [
								"Use SET for \"total markers\" (48) and \"number of boxes\" (4).",
								"Calculate \"markers per box\" by dividing the total by the number of boxes.",
								"PRINT the final counts to show 12 markers per box."
							],
							answer: "SET \"total markers\" = 48\nSET \"number of boxes\" = 4\nSET \"markers per box\" = \"total markers\" / \"number of boxes\"\nPRINT \"We have \", \"total markers\", \" markers to put into \", \"number of boxes\", \" boxes. Each box gets: \", \"markers per box\", \" markers.\""
						},
						"3-part-b": {
							hints: [
								"Set variables for \"total crayons\" (60) and \"number of containers\" (5).",
								"Use the division operator (/) to find how many crayons go in each container.",
								"Display the results with PRINT to show there are 12 crayons per container."
							],
							answer: "SET \"total crayons\" = 60\nSET \"number of containers\" = 5\nSET \"crayons per container\" = \"total crayons\" / \"number of containers\"\nPRINT \"We have \", \"total crayons\", \" crayons to put into \", \"number of containers\", \" containers. Each container gets: \", \"crayons per container\", \" crayons.\""
						},

						// EXERCISE 4: Supplies for All Children 🎨
						"4-part-a": {
							hints: [
								"Set the \"number of children\" (20) and \"sheets per child\" (3).",
								"Calculate \"total sheets\" by multiplying these two variables together.",
								"Use PRINT to show that 60 sheets are needed in total."
							],
							answer: "SET \"number of children\" = 20\nSET \"sheets per child\" = 3\nSET \"total sheets\" = \"number of children\" * \"sheets per child\"\nPRINT \"We have \", \"number of children\", \" children. Each needs \", \"sheets per child\", \" sheets. Total sheets needed: \", \"total sheets\", \".\""
						},
						"4-part-b": {
							hints: [
								"Store the \"number of groups\" (5) and \"glue per group\" (2) in variables.",
								"Use the multiplication operator (*) to calculate the total glue sticks.",
								"PRINT the results to show 10 glue sticks are needed."
							],
							answer: "SET \"number of groups\" = 5\nSET \"glue per group\" = 2\nSET \"total glue sticks\" = \"number of groups\" * \"glue per group\"\nPRINT \"We have \", \"number of groups\", \" groups. Each needs \", \"glue per group\", \" glue sticks. Total glue sticks needed: \", \"total glue sticks\", \".\""
						},

						// EXERCISE 5: Complete Classroom Supply Planning 📊
						"5-part-a": {
							hints: [
								"Calculate \"total children\" by adding those present (18) and absent (2).",
								"Multiply the \"total children\" by \"pencils per child\" (2) to find \"pencils needed\".",
								"PRINT all the steps to show the final total of 40 pencils."
							],
							answer: "SET \"children present\" = 18\nSET \"children absent\" = 2\nSET \"total children\" = \"children present\" + \"children absent\"\nSET \"pencils per child\" = 2\nSET \"pencils needed\" = \"total children\" * \"pencils per child\"\nPRINT \"Present: \", \"children present\", \" children. Absent: \", \"children absent\", \" children. Total children: \", \"total children\", \". Each needs \", \"pencils per child\", \" pencils. Total pencils needed: \", \"pencils needed\", \".\""
						},
						"5-part-b": {
							hints: [
								"Find \"papers left\" by subtracting used papers (35) from those available (100).",
								"Divide the \"papers left\" by the \"number of boxes\" (5) to find \"papers per box\".",
								"Output the full plan to show there are 13 papers per box."
							],
							answer: "SET \"papers available\" = 100\nSET \"papers used\" = 35\nSET \"papers left\" = \"papers available\" - \"papers used\"\nSET \"boxes to fill\" = 5\nSET \"papers per box\" = \"papers left\" / \"boxes to fill\"\nPRINT \"Started with \", \"papers available\", \" papers. Used \", \"papers used\", \" papers. Papers left: \", \"papers left\", \". We have \", \"boxes to fill\", \" boxes. Papers per box: \", \"papers per box\", \".\""
						}
					},

					pirateAdventure: {
						// EXERCISE 1: Digging for Treasure ⛏️
						"1-part-a": {
							hints: [
								"Start by using `SET` to create two variables: `\"has shovel\"` (set it to true) and `\"steps from tree\"` (set it to 10).",
								"Now use an `IF` statement. Use `AND` to check if you have the shovel `AND` if you are at step 10.",
								"If both are true, use `PRINT` to say: \"⛏️ Perfect spot — start digging!\""
							],
							answer: "SET \"has shovel\" TO true\nSET \"steps from tree\" TO 10\nIF \"has shovel\" IS true AND \"steps from tree\" IS 10 THEN\n  PRINT \"⛏️ Perfect spot — start digging!\"\nENDIF"
						},
						"1-part-b": {
							hints: [
								"Set the `\"steps from tree\"` to 12 this time.",
								"Since 12 is not 10, your `IF` condition won't be true anymore.",
								"Add an `ELSE` part to your code to `PRINT`: \"📍 Wrong location — check your steps!\""
							],
							answer: "SET \"has shovel\" TO true\nSET \"steps from tree\" TO 12\nIF \"has shovel\" IS true AND \"steps from tree\" IS 10 THEN\n  PRINT \"⛏️ Perfect spot — start digging!\"\nELSE\n  PRINT \"📍 Wrong location — check your steps!\"\nENDIF"
						},

						// EXERCISE 2: Ancient Puzzle Stones 🪨
						"2-part-a": {
							hints: [
								"Use `SET` to pick a stone! For Part A, set `\"stone number\"` to 2.",
								"Use an `IF` statement with `OR` to see if the stone is 2 `OR` 3.",
								"If it's either one, `PRINT`: \"✅ Correct stone — passage opens!\""
							],
							answer: "SET \"stone number\" TO 2\nIF \"stone number\" IS 2 OR \"stone number\" IS 3 THEN\n  PRINT \"✅ Correct stone — passage opens!\"\nENDIF"
						},
						"2-part-b": {
							hints: [
								"This time, set `\"stone number\"` to 1.",
								"Stone 1 is a trap! Use an `IF` statement to check if the stone number is 1.",
								"If it is, `PRINT`: \"❌ Stone 1 triggers trap — careful!\""
							],
							answer: "SET \"stone number\" TO 1\nIF \"stone number\" IS 1 THEN\n  PRINT \"❌ Stone 1 triggers trap — careful!\"\nENDIF"
						},

						// EXERCISE 3: Jungle Path Choice 🌿
						"3-part-a": {
							hints: [
								"Set `\"has machete\"` to true and `\"is daylight\"` to false.",
								"Use the `OR` operator. The path is clear if you have a machete `OR` if it is daylight.",
								"If the condition is met, `PRINT`: \"🌿 Path clear — continue adventure!\""
							],
							answer: "SET \"has machete\" TO true\nSET \"is daylight\" TO false\nIF \"has machete\" IS true OR \"is daylight\" IS true THEN\n  PRINT \"🌿 Path clear — continue adventure!\"\nENDIF"
						},
						"3-part-b": {
							hints: [
								"Now set `\"has machete\"` to false but `\"is daylight\"` to true.",
								"The `OR` operator only needs ONE thing to be true to work. Is one of them still true?",
								"`PRINT` the same success message as before!"
							],
							answer: "SET \"has machete\" TO false\nSET \"is daylight\" TO true\nIF \"has machete\" IS true OR \"is daylight\" IS true THEN\n  PRINT \"🌿 Path clear — continue adventure!\"\nENDIF"
						},

						// EXERCISE 4: Cave Entrance 🕯️
						"4-part-a": {
							hints: [
								"Create two variables: `\"has torch\"` (true) and `\"cave flooded\"` (false).",
								"Use `AND` with `NOT`. You can enter if you have a torch `AND` the cave is `NOT` flooded.",
								"If safe, `PRINT`: \"🕯️ Cave safe — watch your step!\""
							],
							answer: "SET \"has torch\" TO true\nSET \"cave flooded\" TO false\nIF \"has torch\" IS true AND NOT \"cave flooded\" IS true THEN\n  PRINT \"🕯️ Cave safe — watch your step!\"\nENDIF"
						},
						"4-part-b": {
							hints: [
								"Set `\"cave flooded\"` to true. Oh no!",
								"Since the cave IS flooded, your `NOT \"cave flooded\"` check will fail.",
								"Use `ELSE` to `PRINT`: \"💧 Cannot enter — cave is flooded!\""
							],
							answer: "SET \"has torch\" TO true\nSET \"cave flooded\" TO true\nIF \"has torch\" IS true AND NOT \"cave flooded\" IS true THEN\n  PRINT \"🕯️ Cave safe — watch your step!\"\nELSE\n  PRINT \"💧 Cannot enter — cave is flooded!\"\nENDIF"
						},

						// EXERCISE 5: Treasure Chest 🏆
						"5-part-a": {
							hints: [
								"This is a big one! Set `\"has key\"` to true, `\"secret code\"` to 123, and `\"chest rusty\"` to false.",
								"Use parentheses `()` around your `OR` check like this: `(code IS 123 OR code IS 456)`.",
								"Check if you have the key `AND` the code is right `AND NOT` rusty. Then `PRINT`: \"🏆💎 TREASURE FOUND — YOU WIN!\""
							],
							answer: "SET \"has key\" TO true\nSET \"secret code\" TO 123\nSET \"chest rusty\" TO false\nIF \"has key\" IS true AND (\"secret code\" IS 123 OR \"secret code\" IS 456) AND NOT \"chest rusty\" IS true THEN\n  PRINT \"🏆💎 TREASURE FOUND — YOU WIN!\"\nENDIF"
						},
						"5-part-b": {
							hints: [
								"Set `\"chest rusty\"` to true. Rust makes it hard to open!",
								"Even with the key and code, if it's rusty, it won't open. Your `AND NOT \"chest rusty\"` check will fail.",
								"Use `ELSE` to `PRINT`: \"🔒 Still locked — chest is too rusty!\""
							],
							answer: "SET \"has key\" TO true\nSET \"secret code\" TO 123\nSET \"chest rusty\" TO true\nIF \"has key\" IS true AND (\"secret code\" IS 123 OR \"secret code\" IS 456) AND NOT \"chest rusty\" IS true THEN\n  PRINT \"🏆💎 TREASURE FOUND — YOU WIN!\"\nELSE\n  PRINT \"🔒 Still locked — chest is too rusty!\"\nENDIF"
						},

						// BONUS EXERCISE: Captain's Final Test 🥇
						"6-part-a": {
							hints: [
								"The ultimate pirate test! Set all four variables from the instructions.",
								"Use `AND` to join all four checks: age, mistakes, secret word, and challenges.",
								"If everything matches, `PRINT`: \"🏆🎉 GOLDEN CODER MEDAL EARNED! You mastered ALL conditions!\""
							],
							answer: "SET \"child age\" TO 9\nSET \"number of mistakes\" TO 2\nSET \"secret word\" TO \"treasure\"\nSET \"challenges completed\" TO 5\nIF \"child age\" >= 7 AND \"number of mistakes\" < 3 AND \"secret word\" IS \"treasure\" AND \"challenges completed\" IS 5 THEN\n  PRINT \"🏆🎉 GOLDEN CODER MEDAL EARNED! You mastered ALL conditions!\"\nENDIF"
						},
						"6-part-b": {
							hints: [
								"Change `\"number of mistakes\"` to 3. This is one mistake too many!",
								"Because you used `AND`, if even one thing is wrong, the whole check fails.",
								"Use `ELSE` to `PRINT`: \"⚓ Keep practising — review your conditions!\""
							],
							answer: "SET \"child age\" TO 9\nSET \"number of mistakes\" TO 3\nSET \"secret word\" TO \"treasure\"\nSET \"challenges completed\" TO 5\nIF \"child age\" >= 7 AND \"number of mistakes\" < 3 AND \"secret word\" IS \"treasure\" AND \"challenges completed\" IS 5 THEN\n  PRINT \"🏆🎉 GOLDEN CODER MEDAL EARNED! You mastered ALL conditions!\"\nELSE\n  PRINT \"⚓ Keep practising — review your conditions!\"\nENDIF"
						}
					},



					functions: {
							// "1-part-a": { hints: [], answer: "" },
							// "1-part-b": { hints: [], answer: "" }
					},

					arrays: {
							// "1-part-a": { hints: [], answer: "" },
							// "1-part-b": { hints: [], answer: "" }
					},

					objects: {
							// "1-part-a": { hints: [], answer: "" },
							// "1-part-b": { hints: [], answer: "" }
					},

					events: {
							// "1-part-a": { hints: [], answer: "" },
							// "1-part-b": { hints: [], answer: "" }
					}

			};







  // ==========================================================
  // HINT STATE
  // ==========================================================
  const hintProgress = {};

  // ==========================================================
  // CORE FUNCTIONS
  // ==========================================================
  function showHint(section, ex) { // Changed 'number' to 'ex' for clarity
    const data = exerciseData[section]?.[ex];
    if (!data) return;

    hintProgress[section] ??= {};
    hintProgress[section][ex] ??= 0;

    const hintDiv = document.getElementById(`${section}-hint${ex}`);
    const answerDiv = document.getElementById(`${section}-answer${ex}`);
    const progress = hintProgress[section][ex];

    if (progress < data.hints.length) {
      // *** THIS IS THE FIX FOR THE BACKTICK PROBLEM ***
      const formattedHint = data.hints[progress].replace(/`(.*?)`/g, '<code>$1</code>');
      
      // We now add the formatted hint
      hintDiv.innerHTML += `<strong>Hint ${progress + 1}:</strong> ${formattedHint}<br>`;
      hintProgress[section][ex]++;
    } else {
      answerDiv.textContent = data.answer;
      answerDiv.classList.add('show');
    }
  }

  function runCode(section, number) {
    const codeBox = document.getElementById(`${section}-ex${number}`);
    const output = document.getElementById(`${section}-output${number}`);
    if (!codeBox || !output) return;

    let captured = '';
    const oldLog = console.log;
    console.log = (...args) => {
      captured += args.join(' ') + '\n';
      oldLog(...args);
    };

    try {
      eval(codeBox.innerText);
      output.textContent = captured || 'Code ran but produced no output.';
    } catch (err) {
      output.textContent = err.message;
    }

    console.log = oldLog;
  }

  function resetExercise(section, number) {

		 // Initialize hintProgress[section] if it doesn't exist
		 // everytime a new section is added this will check
     hintProgress[section] ??= {};

    document.getElementById(`${section}-ex${number}`).innerText = '';
    document.getElementById(`${section}-hint${number}`).innerHTML = '';
    document.getElementById(`${section}-output${number}`).innerText = '';
    document.getElementById(`${section}-answer${number}`).innerText = '';
    hintProgress[section][number] = 0;
  }

  // ==========================================================
  // BUTTON WIRING
  // ==========================================================
  document.querySelectorAll('.hint-button').forEach(btn => {
    btn.addEventListener('click', () => {
      // We pass the string from data-ex, not a number
      showHint(btn.dataset.section, btn.dataset.ex);
    });
  });

  document.querySelectorAll('.run-button').forEach(btn => {
    btn.addEventListener('click', () => {
      // We pass the string from data-ex, not a number
      runCode(btn.dataset.section, btn.dataset.ex);
    });
  });

  document.querySelectorAll('.reset-button').forEach(btn => {
    btn.addEventListener('click', () => {
      // We pass the string from data-ex, not a number
      resetExercise(btn.dataset.section, btn.dataset.ex);
    });
  }); 
}); 
