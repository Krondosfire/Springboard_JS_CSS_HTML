window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

const planets = [
	{name: "Mercury", temperature: 440, distance: 0.39},
	{name: "Venus", temperature: 737, distance: 0.72},
	{name: "Earth", temperature: 288, distance: 1},
	{name: "Mars", temperature: 253, distance: 1.5},
	{name: "Jupiter", temperature: 163, distance: 5.2},
	{name: "Saturn", temperature: 133, distance: 9.58},
	{name: "Uranus", temperature: 78, distance: 19.22},
	{name: "Neptune", temperature: 73, distance: 30.05}
];
console.log(planets);

// Filter habitable planets based on given criteria: [1][2][3]
const habitablePlanets = planets.filter(function (planet){
		return planet.temperature >= 253 && planet.temperature <= 323 &&
		       planet.distance >= 0.75 && planet.distance <= 1.5;
	}
);

console.log(habitablePlanets);

// Append the output to the HTML element with id 'output' [4][5][6]
const outputDiv = document.getElementById("output");
        habitablePlanets.forEach(function(planet) {
            const paragraph = document.createElement("p");
            paragraph.textContent = `Name: ${planet.name}, Temperature: ${planet.temperature} K, Distance from Sun: ${planet.distance} AU`;
            outputDiv.appendChild(paragraph);
        });