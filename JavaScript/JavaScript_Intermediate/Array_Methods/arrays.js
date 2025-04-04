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


