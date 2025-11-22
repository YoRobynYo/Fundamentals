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
            1: {
                hints: [
                    "Start by creating a variable for the batch number. For example: `let batchNumber = 1;`",
                    "Next, create a variable for the flavor, like `let popcornFlavor = 'Caramel';`",
                    "Finally, create a variable for the number of bags ready.",
                    "Use a template literal (`) to combine them all in a `console.log`."
                ],
                answer: "let batchNumber = 1;\nlet popcornFlavor = \"Caramel\";\nlet bagsReady = 50;\nconsole.log(`Batch ${batchNumber}: ${bagsReady} bags of ${popcornFlavor} popcorn are ready!`);"
            },
            2: {
                hints: [
                    "Create a variable for `conveyorSpeed` and give it a number value.",
                    "Create a variable for `machineStatus` and give it a text value, like 'ON' or 'OFF'.",
                    "Use a template literal (`) and `console.log` to print the status message."
                ],
                answer: "let conveyorSpeed = 5;\nlet machineStatus = \"ON\";\nconsole.log(`Conveyor speed is ${conveyorSpeed} m/s. Machine status: ${machineStatus}.`);"
            },
            3: {
                hints: [
                    "Create a variable named `saltLevel` and set it to a percentage, like `95`.",
                    "Create another variable named `sugarLevel` and set it to a different percentage.",
                    "Use a template literal to report the levels, like `Salt: 95%, Sugar: 80%`."
                ],
                answer: "let saltLevel = 95;\nlet sugarLevel = 80;\nconsole.log(`Ingredient Levels Report - Salt: ${saltLevel}%, Sugar: ${sugarLevel}%.`);"
            },
            4: {
                hints: [
                    "Create a variable for the `workerName`.",
                    "Create a variable for the `stationNumber`.",
                    "Create a variable for `bagsPacked` by that worker.",
                    "Combine them all into a single report using a template literal and `console.log`."
                ],
                answer: "let workerName = \"Maria\";\nlet stationNumber = 3;\nlet bagsPacked = 120;\nconsole.log(`Station ${stationNumber} Report: ${workerName} has packed ${bagsPacked} bags.`);"
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
                    "First, create a variable `minutesLeft` and set it to `5`.",
                    "Now, use `console.log` and a template literal (`) to create the broadcast message.",
                    "This time, use the `${...}` placeholder to put your `minutesLeft` variable inside the message.",
                    "The final code should look like: `console.log(`Factory closing in ${minutesLeft} minutes!`);`"
                ],
                answer: "let minutesLeft = 5;\nconsole.log(`Factory closing in ${minutesLeft} minutes!`);"
            }
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