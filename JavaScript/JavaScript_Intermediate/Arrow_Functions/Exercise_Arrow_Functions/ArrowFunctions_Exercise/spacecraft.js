window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// Helper function to display outputs in HTML div elements [4][5][6]
const displayOutput = (message) => {
	const outputDiv = document.getElementById("output");
	const newDiv = document.createElement("div");
	newDiv.textContent = message;
	outputDiv.appendChild(newDiv);
};

/* Task 1: No Parameters: Activate Hyperdrive with Status Check */
let hyperdriveStatus = "inactive"; // Status of the hyperdrive

const activateHyperdrive = () => {
	if (hyperdriveStatus === "inactive") {
		hyperdriveStatus = "active"; // Update status to active
		displayOutput("Hyperdrive activated!");
        console.log(hyperdriveStatus);
	} else {
		displayOutput("Hyperdrive is already active!");
        
	}
};
activateHyperdrive(); // Activates the hyperdrive
activateHyperdrive(); // Attempts to activate again, but it's already active


/* Task 2: Implicit Return: Simulate Scanning for Lifeforms */
const scanForLife = () => {
	displayOutput("Scanning for lifeforms..."); // Simulate scanning process
    console.log("Scanning for lifeforms...");
    return "No lifeforms detected"; // Return result after scanning
   
};
displayOutput(scanForLife()); // Logs scanning simulation and result

/* Task 3: Implicit Return with Objects: Log Coordinates */
const currentCoordinates = () => ({
	RA: "14h 29m 43s", // Right Ascension
	Dec: "-62° 40' 46\"", // Declination
	Dist: "4.367 light-years" // Distance from Earth (e.g., Alpha Centauri)
});
const coordinates = currentCoordinates();
console.log('Current Coordinates:', coordinates);
displayOutput(
	`Current coordinates are: RA=${coordinates.RA}, Dec=${coordinates.Dec}, Dist=${coordinates.Dist}`
);

/* Task 4: Understanding `this`: Message from Home Base */
const spacecraft = {
	name: "Galactic Voyager",
	receiveMessage: function (message) { // Use a regular function instead of an arrow function
		displayOutput(`Message received: ${message}`);
		displayOutput(`This spacecraft is: ${this.name}`); // 'this' correctly refers to 'spacecraft'
        console.log('This spacecraft is', this.name);
	}
};
spacecraft.receiveMessage("Hello from Earth!");
console.log("Hello from Earth!");


/*
 * Observations:
 * The console.log statement prints "undefined" for `this.name` because arrow functions do not have their own `this` context.
 * Instead, they inherit `this` from the parent scope at the time they are defined.
 * In this case, `this` does not refer to the `spacecraft` object.
 */


