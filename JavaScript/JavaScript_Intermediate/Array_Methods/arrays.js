window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

console.log(`Function declaration`);
function holler() {
    console.log(`Hi! You called me!`);
};

console.log(`Function expression`);

const whisper = function () {
    console.log(`Psst! You are in trouble!!`);
};

console.log(whisper);
console.log(whisper());

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function power(x, y) {
    return x ** y;
};


console.log(`Put the functions in an array:`);

const mathFunctions = [add, subtract, multiply, divide, power];
console.log(mathFunctions);

console.log(`Call the functions in the array:`);
console.log(mathFunctions[3](2, 3)); // divide

setTimeout(whisper, 4000); // 4 seconds

function doMath(a, b, mathFunction) {
    return mathFunction(a, b);
};

doMath(2, 3, add); // 5
doMath(2, 3, subtract); // -1
doMath(2, 3, multiply); // 6
doMath(2, 3, divide); // 0.6666666666666666
console.log(doMath(6, 5, multiply)); // 30
console.log(doMath(87, 21, divide)); // 4.142857142857143
console.log(doMath(221, 39, subtract)); // 182

doMath(21, 3, function (x, y) {
    console.log(x ** y);
}); 

function doAllMath(a, b, mathFunctions) {
    for (let func of mathFunctions) {
        console.log(func(a, b));
    }
};

doAllMath(24, 87, mathFunctions); // 111, -63, 2088, 0.27586206896551724


// forEach() method

console.log(`forEach() method`);

console.log(`Let's create an array of colors:`);

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];

colors.forEach(console.log); // prints each color in the array

colors.forEach(function(val) {
    console.log(val.toUpperCase()); // prints each color in uppercase
}
);

function yell(val, i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, the color is ${caps}`);
};

colors.forEach(yell); // prints each color in uppercase with index

const prices = [10.50, 20.84, 30.59, 40.02, 50.71, 60.66, 70.03, 80.97, 90.26, 100.06];
let total = 0;
prices.forEach(function(price) {
    total += price;
});
console.log(`Total: $${total}`); // prints total price

console.log(`The same result but with a for loop:`);
let total1 = 0;
for (let price of prices) {
    total1 += price;
};
console.log(`Total: $${total1}`); // prints total price

console.log(`Build Our Own forEach() method`);

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

  myForEach(colors, function(color, i) {
    console.log(color.toUpperCase(), 'at index of:', i);   
});

// map() method
console.log(`map() method`);

const numbers = [23, 86, 65, 98, 125, 2, 476, 16, 3];
const negatives = numbers.map(function(num) {
    return num * -1;
});

numbers; // prints original array
console.log(numbers); // prints original array
console.log(negatives); // prints new array with negative numbers

const todos = [
    {
        id: 1,
        text: 'Change the oil!',
        priority: 'High'
    },
    {
        id: 2,
        text: 'Check the tires!',
        priority: 'Medium'
    },
    {
        id: 3,
        text: 'Replace the windshield!',
        priority: 'Medium'
    },
    {
        id: 4,
        text: 'Change the windshield wipers!',
        priority: 'Low'
    },
    {
        id: 5,
        text: 'Change the air filter!',
        priority: 'Low'
    },
    {
        id: 6,
        text: 'Check the brakes!',
        priority: 'High'
    },
    {
        id: 7,
        text: 'Troubleshoot 4WD Service Light',
        priority: 'Medium'
    },
    {
        id: 8,
        text: 'Check the drive belt!',
        priority: 'High'
    },
    {
        id: 9,
        text: 'Check the fluids!',
        priority: 'Low'
    },
    {
        id: 10,
        text: 'Check the weel alignment!',
        priority: 'Low'
    }
];

const todoText = todos.map(function(todo) {
     return todo.text;
});

console.log(todos); // prints original array
console.log(todoText); // prints new array with todo text


const links = Array.from(document.querySelectorAll('a'));
//Array.from(links); // converts NodeList to Array
//console.log(Array.from(links)); // prints array of links

const urls = links.map(function(a) {
    return a.href;
});

console.log(urls); // prints array of urls

// writing map() method
console.log(`Writing our own map() method`);

function myMap(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i ++) {
        const val = callback(array[i], i, array);
        mappedArray.push(val);
    }
    return mappedArray;
}

const priorityMap = myMap(todos, function(todo) {
    return todo.priority;
});

console.log(priorityMap); // prints array of priorities

const repeatedStrings = myMap(['cat', 'Fibonachi', 'edge', 'parameter', 'solenoid', 'travel'], function(str, idx) {
    return str.repeat(idx);
});

console.log(repeatedStrings); // prints array of repeated strings

// filter() method
console.log(`filter() method`);

const words = ['immunoelectrophoretically', 'rotavator', 'crankshaft', 'psychophysicotherapeutics', 'squirrelled', 'crypt', 'uncopyrightable', 'cysts', 'pseudopseudohypoparathyroidism', 'unimaginatively'];

const longWords = words.filter(function(word) {
    // if (word.length >=20) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return word.length >= 20; // returns true or false
});
console.log(words); // prints original array
console.log(longWords); // prints array of long words

const xWords = words.filter(function(w) {
    return w[0] === 'u' || w[0] === 'c';
});

console.log(xWords); // prints array of words that start with u or c

const isVowel = function(char) {
    return 'aeiou'.indexOf(char) !== -1;
};

const containsVowel = function(word) {
    for (let char of word) {
        if(isVowel(char)) return true;
    }
    return false;
};

const haveVowels = words.filter(containsVowel); // returns words that contain vowels
const noVowels = words.filter(function(word) {
    return !containsVowel(word); // returns words that do not contain vowels
});

console.log(haveVowels); // prints array of words that contain vowels
console.log(noVowels); // prints array of words that do not contain vowels
// Create own filter()
console.log(`Create own filter()`);


function myFilter(array, callback) {
    const filteredArray = [];
    for(let i = 0; i < array.length; i ++) {
        if(callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
     }
        return filteredArray;
}

const shorWord = myFilter(words, function(word) {
    return word.length <= 6;
});

console.log(shorWord); // prints array of short words

const everyOtherWord = myFilter(words, function(word, i) {
    return i % 2 === 0; // returns every other word
});

console.log(everyOtherWord); // prints array of every other word
