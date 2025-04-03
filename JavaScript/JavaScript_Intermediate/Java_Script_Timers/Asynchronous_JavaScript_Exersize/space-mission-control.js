// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
let oneTimeTasks = [];  // array to store pending timeouts [1] [3]
let monitoringTaskId;
let countdownTimerId; // track the countdown interval [1]

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	oneTimeTasks.push({function: func, delay: delay});
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for (const oneTimeTask of oneTimeTasks)
		{
			setTimeout(oneTimeTask.function, oneTimeTask.delay);
		}
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	console.log("Starting continuous monitoring of space station parameters...");

	monitoringTaskId = setInterval(function (){
			console.log("Monitoring space station parameters...");

			/* Condition checks. */
			const oxygenLevel = Math.random() * (100 - 71) + 71; // Generates a random number between 71% and 100% -  simulates oxygen level percentage.
			let powerStatus = Math.random() > 0.1 ? "Stable" : "Critical"; // Mock-up power status.
			let communicationCheck = Math.random() > 0.05 ? "All systems go" : "Communication error"; // Mock-up communication system check.
			// Additional condition checks for oxygen level. [8]
			if (oxygenLevel < 78) {
				powerStatus = "Critical";
				communicationCheck = "Abort mission!";
			}
			// Print the status of the space station.
	

			console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`);
			if (communicationCheck === "Abort mission!") {
				alert("Mission aborted! Countdown stopped!");
				console.log("Mission aborted! Countdown stopped!");
				// Clear all active intervals and tasks [2][4][6]
				clearInterval(monitoringTaskId); // Stop monitoring [3]
				clearInterval(countdownTimerId); // Stop countdown [3]
				// Clear scheduled one-time tasks [1][3] [7]
				oneTimeTasks.forEach(clearTimeout);
				oneTimeTasks = []; 
			}
			}, 6000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskId);
	console.log("Continuous monitoring stopped.");
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	let timeLeft = duration;
	console.log(`Countdown started: ${timeLeft} seconds`);

	countdownTimerId = setInterval(function () {
			timeLeft--;
			console.log(`T-minus ${timeLeft} seconds`);

			if (timeLeft <= 0)
			{
				clearInterval(countdownTimerId);
				
				console.log("Liftoff! The rocket has successfully launched into space!");
			}
		},
		1000
	);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	startMonitoring(); // Starts monitoring space station conditions.
	addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
	addOneTimeTask(stopMonitoring, 10000); // Stops monitoring before the countdown.
	addOneTimeTask(function () {startCountdown(10);}, 15000); // Starts countdown after all preparations.

	runOneTimeTasks(); // Executes all scheduled one-time tasks.
}

scheduleMission(); // Starts the mission.
