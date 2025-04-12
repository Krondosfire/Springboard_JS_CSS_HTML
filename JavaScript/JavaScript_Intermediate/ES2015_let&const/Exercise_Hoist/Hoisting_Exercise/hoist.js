window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

/* Task 1: Declare a Destination Variable */
let destination = "Ancient Egypt";
const destination01 = `Destination: ${destination}`;
console.log(destination01);

/* Task 2: Change the Destination */
destination = "Medieval Europe";
const destination02 = `New Destination: ${destination}`;
console.log(destination02);

/* Task 3: Declare a Constant Travel Date */
const travelDate = "2024-03-15";
console.log(`Travel Date: ${travelDate}`);
/*
 * Observations:
 * The above attempt to reassign a new value to "travelDate" will result in a TypeError.
 * This is because "const" declarations are read-only and cannot be reassigned after their initial assignment.
 */

/* Task 4: Experiment with Variable Hoisting */
var timeMachineModel;
const tMM01 = `Time Machine Model: ${timeMachineModel}`;
console.log(tMM01);

var timeMachineModel = "T-800";
const tMM02 = `Time Machine Model: ${timeMachineModel}`;
console.log(tMM02);

/*
 * Observations:
 * The console.log statement prints "undefined" instead of throwing a ReferenceError.
 * This is due to variable hoisting, where variable declarations (but not initializations) are hoisted or lifted to the top of their scope.
 * In this case, "timeMachineModel" is declared with "var", so its declaration is hoisted to the top of its scope.
 * However, its assignment occurs after the console.log statement, explaining why it logs "undefined".
 */


// Append the output for 'Destination' to 'output_01' [4][5][6]
const outputDiv01 = document.getElementById("output_01");
const outputDestination01 = document.createElement("p");
outputDestination01.textContent = destination01;
outputDiv01.appendChild(outputDestination01);

// Append the output for 'New Destination' to 'output_02' [4][5][6]
const outputDiv02 = document.getElementById("output_02");
const outputDestination02 = document.createElement("p");
outputDestination02.textContent = destination02;
outputDiv02.appendChild(outputDestination02);

// Append the output for 'Travel Date' to 'output_03' [4][5][6]
const outputDiv03 = document.getElementById("output_03");
const outputTravelDate = document.createElement("p");
outputTravelDate.textContent = travelDate;
outputDiv03.appendChild(outputTravelDate);

// Append the output for 'Time Machine Model' to 'output_04' [4][5][6]
const outputDiv04 = document.getElementById("output_04");
const outputTimeMachine01 = document.createElement("p");
outputTimeMachine01.textContent = tMM01;
outputDiv04.appendChild(outputTimeMachine01);

// Append the output for 'Time Machine Model' to 'output_04' [4][5][6]
const outputDiv05 = document.getElementById("output_05");
const outputTimeMachine02 = document.createElement("p");
outputTimeMachine02.textContent = tMM02;
outputDiv05.appendChild(outputTimeMachine02);