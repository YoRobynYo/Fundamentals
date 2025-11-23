// ==========================================================
// === START OF THE ONE AND ONLY DOMContentLoaded LISTENER ===
// ==========================================================
document.addEventListener('DOMContentLoaded', function() {
    // --- Part 1: Cover Page Logic ---
    const startButton = document.querySelector('.start-button');
    const coverPage = document.getElementById('cover-page-container');
    const mainContent = document.getElementById('main-content');
    
    if (startButton && coverPage && mainContent) {
        startButton.addEventListener('click', function(e) {
            e.preventDefault();
            coverPage.style.transition = 'opacity 0.7s ease-out';
            coverPage.style.opacity = '0';
            setTimeout(() => {
                coverPage.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 0.7s ease-in';
                requestAnimationFrame(() => {
                    mainContent.style.opacity = '1';
                });
            }, 700);
        });
    }


    // =================================================================
    // PART 1: THE DATA
    // =================================================================
    
		const exerciseData = {
						variables: {
						1: { // This one remains the same as your version
								hints: [
										"Start by creating a variable for the batch number. For example: `let batchNumber = 1;`",
										"Next, create a variable for the flavor, like `let popcornFlavor = 'Caramel';`",
										"Finally, create a variable for the number of bags ready.",
										"Use a template literal (`) to combine them all in a `console.log`."
								],
								answer: "let batchNumber = 1;\nlet popcornFlavor = \"Caramel\";\nlet bagsReady = 50;\nconsole.log(`Batch ${batchNumber}: ${bagsReady} bags of ${popcornFlavor} popcorn are ready!`);"
						},
						2: { // UPDATED Exercise 2
								hints: [
										"First, create a variable named `conveyorSpeed` and give it a text value, like `\"Medium\"`.",
										"Next, create a variable named `machineStatus` and set its value to `\"ON\"`.",
										"Use `console.log()` with a template literal (`) to print the full status report."
								],
								answer: "let conveyorSpeed = \"Medium\";\nlet machineStatus = \"ON\";\nconsole.log(`Conveyor speed is: ${conveyorSpeed}. Machine status is: ${machineStatus}.`);"
						},
						3: { // New "Label Printing Task"
								hints: [
										"Create a variable named `totalLabels`.",
										"Set it equal to the math problem: `5 + 10 + 12 + 4 + 2`.",
										"Create a second variable, `labelStatus`, and set it to `\"Ready\"`.",
										"Use `console.log()` to print the values of your two new variables."
								],
								answer: "let totalLabels = 5 + 10 + 12 + 4 + 2;\nlet labelPrinterStatus = \"Ready\";\nconsole.log(`Total labels to print: ${totalLabels}. Printer status: ${labelStatus}.`);"
						},
            4: {
								hints: [
										"For values that should not change, it's best practice to use `const`. Create `MINIMUM_SALT_LEVEL` and `MAXIMUM_SALT_LEVEL` this way.",
										"Next, create the `currentSaltLevel` variable and set it to `92`.", // <-- The new, simpler hint
										"Use `console.log()` and a template literal (`) to create the final report string, showing all three values."
								],
								answer: "const MINIMUM_SALT_LEVEL = 85;\nconst MAXIMUM_SALT_LEVEL = 95;\nconst currentSaltLevel = 92;\nconsole.log(`Salt Level Check - Min: ${MINIMUM_SALT_LEVEL}%, Max: ${MAXIMUM_SALT_LEVEL}%, Current: ${currentSaltLevel}%.`);"
						},
            5: {
                hints: [
                    "This is a test of the factory's emergency broadcast system.",
                    "Use `console.log()` to print a message.",
                    "The message should be a string created with backticks (`).",
                    "For now, just write the text: `Factory closing in 5 minutes!`"
                ],
                answer: "console.log(`Factory closing in 5 minutes!`);"
            },
            6: {
						hints: [
								"First, create a variable named `popperStatus` using `let` and set its initial value to `\"Warming Up\"`.",
								"Right after that, use `console.log()` to print the initial status.",
								"On a new line, update the `popperStatus` variable to its new value: `\"Popping Corn\"`. Remember not to use the word `let` this time!",
								"Finally, use another `console.log()` to print the new, updated status."
						],
						answer: "let popperStatus = \"Warming Up\";\nconsole.log(`Machine status: ${popperStatus}...`);\npopperStatus = \"Popping Corn\";\nconsole.log(`Update! Machine status is now: ${popperStatus}!`);"
				},
        },
        loops: {
            1: { hints: ["Use a for loop that runs 3 times."], answer: "for(let i=1;i<=3;i++){\n  console.log(\"Checking bag...\");\n}" },
            2: { hints: ["Start i at 5 and count down with i--"], answer: "for(let i=5;i>=1;i--){\n  console.log(i);\n}" }
        },
        functions: {
            1: { hints: ["Define greetWorker(name) and console.log inside."], answer: "function greetWorker(name){\n  console.log(\"Hello, \"+name+\"!\");\n}\ngreetWorker(\"Oliver\");" },
            2: { hints: ["Return the sum of two numbers."], answer: "function add(a,b){\n  return a+b;\n}\nconsole.log(add(5,7));" }
        },
        arrays: {
            1: { hints: ["Use index 24 for the 25th item."], answer: "console.log(supervisorsChecklist[24]);", setup: "let supervisorsChecklist=Array.from({length:30},(_,i)=>\"Item \"+(i+1));" }
        },
        objects: {
            1: { hints: ["Create toolBox object with hammer, screwdriver, tapeMeasure."], answer: "let toolBox={\n  hammer:\"Claw hammer\",\n  screwdriver:\"Phillips screwdriver\",\n  tapeMeasure:\"25ft tape\"\n};\nconsole.log(toolBox.screwdriver);" }
        }
    };

    const hintProgress = {};

    // =================================================================
    // PART 2: THE FUNCTIONS
    // =================================================================
    
		function showHint(section, number) {
        const data = exerciseData[section][number];
        if (!data) {
            console.error("Hint Error: No data found for this exercise.");
            return;
        }
        if (!hintProgress[section]) hintProgress[section] = {};
        if (!hintProgress[section][number]) hintProgress[section][number] = 0;
        
        const progress = hintProgress[section][number];
        const hintDiv = document.getElementById(`${section}-hint${number}`);
        const answerDiv = document.getElementById(`${section}-answer${number}`);
        
        if (!hintDiv || !answerDiv) {
            console.error("Hint Error: Could not find the hint or answer div for this exercise.");
            return;
        }
        
        // This logic simply shows the next hint from the list we wrote in exerciseData.
        if (progress < data.hints.length) {
            hintDiv.innerHTML += `<strong>Hint ${progress + 1}:</strong> ${data.hints[progress]}<br>`;
            hintProgress[section][number]++;
        } 
        // If all hints are used, offer the answer.
        else if (progress === data.hints.length) {
            hintDiv.innerHTML += `<strong>All hints used! Click again for the answer.</strong><br>`;
            hintProgress[section][number]++;
        } 
        // Finally, show the answer.
        else {
            answerDiv.textContent = data.answer;
            answerDiv.classList.add('show'); // This adds the 'show' class
        }
    }

    function runCode(section, number) {
        const codeBox = document.getElementById(`${section}-ex${number}`);
        const output = document.getElementById(`${section}-output${number}`);
        
        if (!codeBox || !output) {
            console.error("Couldn't find code box or output for", section, number);
            return;
        }
        
				const userCode = codeBox.textContent;
        output.textContent = 'Running your code...\n\n';
        
        const oldLog = console.log;
        let capturedOutput = '';
        console.log = (...args) => {
            capturedOutput += args.map(String).join(' ') + '\n';
            oldLog.apply(console, args);
        };
        
        try {
            const setup = exerciseData[section][number]?.setup || '';
            eval(setup + '\n' + userCode);
            if (capturedOutput) {
                output.textContent += capturedOutput;
            } else if (output.textContent.trim() === 'Running your code...') {
                output.textContent += 'Code ran successfully, but nothing was printed. (Try using console.log)';
            }
        } catch (err) {
            output.textContent += `An error occurred: ${err.message}`;
        } finally {
            console.log = oldLog;
        }
    }

		// =================================================================
    // === Add The resetExercise FUNCTION ===
    // =================================================================
    
		function resetExercise(section, number) {
        const codeBox = document.getElementById(`${section}-ex${number}`);
        const hintDiv = document.getElementById(`${section}-hint${number}`);
        const output = document.getElementById(`${section}-output${number}`);
        const answerDiv = document.getElementById(`${section}-answer${number}`);

        if (codeBox) {
						codeBox.textContent = ''; 
						codeBox.classList.add('placeholder'); // Add this line
				}
        if (hintDiv) {
            hintDiv.innerHTML = '';
        }
        if (output) {
            output.textContent = '';
        }
        if (answerDiv) {
            answerDiv.textContent = '';
            answerDiv.classList.remove('show');
        }
        
        if (hintProgress[section] && hintProgress[section][number]) {
            hintProgress[section][number] = 0;
        }
    }

    // ======================================================
    // === Part 3: Event Listeners for Exercise Buttons ===
    // ======================================================
    document.querySelectorAll('.hint-button').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            const exNumber = button.dataset.ex;
            showHint(section, exNumber);
        });
    });

    document.querySelectorAll('.run-button').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            const exNumber = button.dataset.ex; 
            runCode(section, exNumber);
        });
    });

		document.querySelectorAll('.reset-button').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            const exNumber = button.dataset.ex;
            resetExercise(section, exNumber);
        });
    });
});