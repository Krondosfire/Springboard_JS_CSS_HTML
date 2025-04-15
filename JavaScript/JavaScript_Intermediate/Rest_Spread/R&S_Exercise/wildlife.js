window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

/* Task 1: Track Animal Sightings */
function logAnimalSightings(...animals) {
	const message = `Animal Sightings: ${animals}`;
	
	// Log to the console
	console.log(message);
	
	// Log to the HTML div [4][5][6]
	const outputDiv = document.querySelector('#output');
	const paragraph = document.createElement('p');
	paragraph.textContent = message;
	outputDiv.appendChild(paragraph);
  }

  // Call the function
  logAnimalSightings("Elephant", "Rhino", "Tiger");

/* Task 2: Merge Habitat Areas */
// Function to log output in both console and HTML
function logOutput(message) {
	// Log to the console
	console.log(message);

	// Log to the HTML div [4][5][6]
	const outputDiv = document.getElementById('output');
	const paragraph = document.createElement('p');
	paragraph.textContent = message;
	outputDiv.appendChild(paragraph);
  }

  // Combine Habitat Areas
  const forestHabitats = ["Forest A", "Forest B"];
  const savannahHabitats = ["Savannah C", "Savannah D"];
  const combinedHabitats = [...forestHabitats, ...savannahHabitats];
  
  // Log the result
  logOutput(`Combined Habitats: ${combinedHabitats}`);


/* Task 3: Update Conservation Status */
    const rhinoStatus = {
      population: 500,
      status: "Endangered"
    };
    const updatedRhinoStatus = {
      ...rhinoStatus,
      population: 520,
      status: "Vulnerable"
    };

    // Log the result [7]
    logOutput(`Updated Rhino Status: ${JSON.stringify(updatedRhinoStatus)}`);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
  };
  const lionGeneticProfile = {
	...lionProfile,
	genetics: "Diverse"
  };

  // Log results [7]
  logOutput(`Original Lion Profile: ${JSON.stringify(lionProfile)}`);
  logOutput(`Lion Genetic Profile: ${JSON.stringify(lionGeneticProfile)}`);
/*
 * Observations:
 * Modifying a property in the copied object does not affect the original object because the spread operator creates a shallow copy of the object.
 * This means top-level properties are duplicated and assigned new memory space.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
	  herbivores: "Abundant",
	  carnivores: "Sufficient"
	}
  };

  const updatedEcosystemHealth = {
	...ecosystemHealth,
	foodSupply: { ...ecosystemHealth.foodSupply, herbivores: "Plentiful" }
  };

  // Log results
  logOutput(`Original Ecosystem Health: ${JSON.stringify(ecosystemHealth)}`);
  logOutput(`Updated Ecosystem Health: ${JSON.stringify(updatedEcosystemHealth)}`);