window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

console.log(mythicalCreatures);

// Find the first water creature [1][2][3]
const firstWaterCreature = mythicalCreatures.find(function (creature){
		return creature.type === "Water";
	}
);
console.log(firstWaterCreature.name);

// Find the index of Griffin [1][2][3]
const griffinIndex = mythicalCreatures.findIndex(function (creature){
		return creature.name === "Griffin";
	}
);
console.log(griffinIndex);

// Find the creature last seen in Enchanted Forest [1][2][3]
const enchantedForestCreature = mythicalCreatures.find(function (creature){
		return creature.lastSeen === "Enchanted Forest";
	}
);
console.log(enchantedForestCreature.name);



// Append the output for 'firstWaterCreature' to 'output_01' [4][5][6]
const outputDiv01 = document.getElementById("output_01");
const firstWCreatureParagraph = document.createElement("p");
firstWCreatureParagraph.textContent = `Name: ${firstWaterCreature.name}, Last Seen: ${firstWaterCreature.lastSeen}`;
outputDiv01.appendChild(firstWCreatureParagraph);

// Append the output for 'griffinIndex' to 'output_02' [4][5][6]
  const outputDiv02 = document.getElementById("output_02");
const griffinIndexParagraph = document.createElement("p");
griffinIndexParagraph.textContent = `Griffin Index: ${griffinIndex}`;
outputDiv02.appendChild(griffinIndexParagraph);

// Append the output for 'enchantedForestCreature' to 'output_03' [4][5][6]
const outputDiv03 = document.getElementById("output_03");
const enchantedForestParagraph = document.createElement("p");
enchantedForestParagraph.textContent = `Name: ${enchantedForestCreature.name}, Last Seen: ${enchantedForestCreature.lastSeen}`;
outputDiv03.appendChild(enchantedForestParagraph);