window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// Helper function to log to console and to the agenda div [4][5][6]
function logOutput(message) {
    console.log(message);
    const agendaDiv = document.querySelector('.output');
    if (agendaDiv) {
        const p = document.createElement('p');
        p.textContent = message;
        agendaDiv.appendChild(p);
    }
}

// Task 1: Unveiling the Coordinates [1][2][3]
const coordinates = {x: 34, y: 42, z: 67};
const {x, y} = coordinates;
logOutput(`Coordinates found: x=${x}, y=${y}`);

// Task 2: The Map of Secrets [1][2][3]
const locations = {
    first: "Cave of Wonders",
    second: "Lake of Mystery",
    third: "Mount of Ages",
    fourth: "Desert of Shadows"
};
const {first, second, ...remaining} = locations;
logOutput(`Key locations: ${first}, ${second}`);

// Task 3: The Mysterious Door [1][2][3]
const doorCode = {
    upper: "Alpha",
    lower: "Omega"
};
const {upper, middle = remaining.third, lower} = doorCode;
logOutput(`Door code sequence: ${upper}, ${middle}, ${lower}`);

// Task 4: The Guardian's Riddle [1][2][3]
const riddle = {
    ancientWord: "Sphinx",
    modernWord: "Cat"
};
const {ancientWord: translation} = riddle;
logOutput(`The guardian says: ${translation}`);

// Task 5: The Array of Elements [1][2][3]
const elements = ["Fire", "Water", "Earth", "Air"];
const [firstElement, secondElement] = elements;
logOutput(`Essential elements: ${firstElement}, ${secondElement}`);

// Task 6: Skipping Stones [1][2][3]
const stones = [1, 2, 3, 4, 5, 6];
const [firstStone, , , , , sixthStone] = stones;
logOutput(`Extracted stones: ${firstStone}, ${sixthStone}`);

// Task 7: The Array of Shadows [1][2][3]
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visible, ...hiddenShadows] = shadows;
logOutput(`Visible shadow: ${visible}, Hidden shadows: ${hiddenShadows.join(", ")}`);

// Task 8: The Wise Function [1][2][3]
function revealPath ({direction, distance}) {
    logOutput(`Move ${distance} meters towards ${direction}.`);
}
revealPath({direction: "North", distance: 100});

// Task 9: The Scroll of Defaults [1][2][3]
function mixPotion ({ingredient1 = "Water", ingredient2 = "Fireflower"} = {}) {
    logOutput(`Mixing ${ingredient1} and ${ingredient2}`);
}
mixPotion({ingredient1: "Lavender"});

// Task 10: The Array Spell [1][2][3]
function castSpell ([ingredient1, ingredient2]) {
    logOutput(`Casting spell with ${ingredient1} and ${ingredient2}`);
}
castSpell(["Moonstone", "Unicorn Horn", "Sunflower"]);

// Task 11: The Nested Secret [1][2][3]
const nestedSecret = {outer: {inner: "The Final Key"}};
const {outer: {inner: finalKey}} = nestedSecret;
logOutput(`Unveiled secret: ${finalKey}`);

// Task 12: The Swap of Fate [1][2][3]
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneB, stoneA] = [stoneA, stoneB];
logOutput(`Stones swapped: A=${stoneA}, B=${stoneB}`);
