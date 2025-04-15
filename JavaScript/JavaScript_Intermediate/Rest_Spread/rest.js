window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// arguments
console.log(`arguments`);


function max() {
    console.log(arguments);
};

console.log(max());

console.log(max(8,35,92,12,7));

function sum() {
    const args = Array.from(arguments);
    return args.reduce((sum, val) => {
        return sum + val;
    });
};

//arguments is not an actual array, it is an "array-like-object". It has a length property and can be accessed at a specific index, but does not have build in array methods like map, filter, etc.

console.log(sum(5, 3, 6));

const max1 = function() {
    const args = Array.from(arguments);
    return args.reduce((max, currVal) => {
        return currVal > max ? currVal : max;
    }, 0);
};

console.log('Maximum value from 5, 9, 80, 62, 1, 35 is:', max1(5, 9, 80, 62, 1, 35));

console.log('No initial value or max1():', max1());

// rest operator
console.log(`rest operator`);

function sumRest(...nums) {
    return nums.reduce((sum, n) => sum + n);
};

console.log('Using the rest operator inside a function: sumRest(3, 5, 2):', sumRest(3, 5, 2));
console.log('Using the rest operator inside a function: sumRest(4273, 50912, 22, 8, 9994, 842, 9122226):', sumRest(4273, 50912, 22, 8, 9994, 842, 9122226));

const sumAll = (...values) => {
    if(!values.length) return 'Nothing!';
    return values.reduce((sum, n) => sum + n);
};

console.log('The same function as sumRest(), but represented as arrow function: sumAll(54, 8, 87, 46) = ', sumAll(54, 8, 87, 46));
console.log('The same function as sumRest(), but represented as arrow function: sumAll() = ', sumAll());

function makeFamily(parent1, parent2, ...kids) {
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : "Not Yet!"
    };
}

console.log("Call the function makeFamily('Pepa', 'Javor')", makeFamily('Pepa', 'Javor'));


const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type);
};

console.log("Create a new arrow function that filters the array by type. In this case: filterByType('string', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined)", filterByType('string', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined));
console.log("Create a new arrow function that filters the array by type. In this case: filterByType('boolean', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined)", filterByType('boolean', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined));
console.log("Create a new arrow function that filters the array by type. In this case: filterByType('number', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined)", filterByType('number', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined));
console.log("Create a new arrow function that filters the array by type. In this case: filterByType('integer', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined)", filterByType('integer', 17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined));


// spread operator
console.log(`spread operator`);

const nums = [23, 5, 0.8, 75, 28, 265, 8];
console.log("Math.max(nums):",Math.max(nums));
console.log("Math.max(...nums):",Math.max(...nums));

const XY = [17, 5, 1976, true, false, 49, 'hello', 0, 'luck', 'pocker', undefined];

console.log("Use filterByType('number', ...XY):", filterByType('number', ...XY));
console.log("Use filterByType('string', ...XY):", filterByType('string', ...XY));
console.log("Use filterByType('boolean', ...XY):", filterByType('boolean', ...XY));

// Spread array literals
console.log(`Spread array literals`);

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];
console.log("New const named 'palette'", palette);

const paletteCopy = palette.slice(); // it creates a copy of the 'palettes' array
const paletteAnotherWayToCopy = [ ...palette ];
console.log("paletteCopy:", paletteCopy);
console.log("Copy the elements from the 'palette' array with spread operator like [...palette] - paletteAnotherWayToCopy:", paletteAnotherWayToCopy);
const paletteCopyAndAdd = [...palette, 'navy blue', 'brick red'];
console.log("use the spread operator to clone the 'palette' array and add two new elements to this array - paletteCopyAndAdd:", paletteCopyAndAdd);

const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallow root'];
const coffees = ['guatemala red cat', 'snow leopard blend'];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];
console.log("allTeas array elements:", allTeas);

const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Gray'];
console.log("withCaffeine array:", withCaffeine);

const vowels = 'aeiou';
const vowelArr = [...vowels];
console.log("Create const vowels = 'aeiou', then use spread to spread them into a new array - vowelArr:", vowelArr);


// spread with objects

console.log(`********Spread with Objects********`);

const tea = {
    type: 'oolong',
    name: 'winter sprout',
    origin: 'taiwan'
};

console.log(`!!!!Objects are not considered iterable in JavaScript!!!!!!`);

const teaCopied = {...tea};
console.log("Copy the tea object and create a new object - teaCopied:", teaCopied);

const teaTin = {...tea, price: 22.86 };
console.log("Create a new object by copying the tea object and add new element to the new object - price:", teaTin);

const newTea = {...tea, name: 'golden frost'};
console.log("Example of new object based on copy of existing one, but one of the property values has been updated:", newTea);

const teaData = {
    steepTime: '30s',
    brewTemp: 175
};

const fullTea = {...tea, ...teaData};
console.log("Combine properties from two objects into a new object - fullTea:", fullTea);

// spread and deep copies
console.log(`***************SPREAD and DEEP COPIES*********************`);

const shoppingCart = [
    {
        name: 'honey orchid',
        quantity: 2,
        price: 13.5
    },
    {
        name: 'african solstice',
        quantity: 4,
        price: 25.99
    }
];

const cartCopy = [...shoppingCart];
console.log("Create a new array of objects named shoppingCart:", shoppingCart);

console.log("Copy that array into a new one named cartCopy:", cartCopy);

console.log("Compare both arrays: cartCopy === shoppingCart:", cartCopy === shoppingCart);

console.log("Access the first object of the shoppingCart: shoppingCart[0]:", shoppingCart[0]);
console.log("Access the first object from cartCopy array: cartCopy[0]:", cartCopy[0]);
console.log("Compare the two accessed objects from both arrays: cartCopy[0] === shoppingCart[0]:", cartCopy[0] === shoppingCart[0]);

console.log("Update the quantity property of the object cartCopy[0]: cartCopy[0].quantity  = 99:", cartCopy[0].quantity = 99);
console.log("Check the status of cartCopy:", cartCopy);
console.log("Changing the quantity in cartCopy updates the same property in shoppingCart:", shoppingCart);


console.log(`What is the main purpose of the rest operator in JavaScript?: To spread individual arguments into an array.`);
console.log(`What is one of the primary purposes of using the spread operator in JavaScript array literals?: To spread elements of an array into separate function arguments.`);
console.log(`How does the spread operator differ from the rest operator?: it is not the second option or third`);
console.log(`What happens if you try to spread an array into a new object in JavaScript?: Each element of the array becomes a key-value pair in the object.`);
console.log(`In JavaScript, what happens if you try to use the rest operator in a function parameter list, but it's not the last parameter?: It throws a syntax error.`);
console.log(`What is the outcome of spreading a string into an array using the spread operator in JavaScript?: The string is converted into an array of characters.`);
console.log(`What is the purpose of using the spread operator in JavaScript?: To combine or spread elements of an array or an object.`);
console.log(`What happens when you use the spread operator to copy an array with nested objects in JavaScript?: It only creates shallow copies of the top-level array.`);
console.log(`When executing a function with the spread operator, what does it do?: It spreads individual elements of an array as separate arguments.`);
console.log(`What is one limitation of using the spread operator for copying nested data structures in JavaScript?: It maintains references to nested objects, resulting in shallow copies.`);


