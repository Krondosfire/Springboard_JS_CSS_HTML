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
