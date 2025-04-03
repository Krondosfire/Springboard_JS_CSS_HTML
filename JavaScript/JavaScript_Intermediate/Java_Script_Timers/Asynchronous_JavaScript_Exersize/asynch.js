window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

function greet() {
    console.log("Hi! You are shitting in the wrong place!");

}
console.log(greet());

function someText() {
    console.log(`This is just stupid!`);
}
function repeatThreeTimes(fn) {
    fn();
    fn();
    fn();
}

console.log(repeatThreeTimes(greet));
console.log(repeatThreeTimes(someText));
console.log(repeatThreeTimes(greet, someText));

function repeat(num, fn) {
    for (let i = 0; i < num; i++) {
        fn();
    }
}
console.log(repeat(5, greet));
console.log(repeat(3, someText));
// console.log(repeat(3, repeatThreeTimes(greet)));


// Functions in Variables

let fns = [greet, someText];
console.log(`fns = ${fns}`);
console.log(`fns[0]() = ${fns[0]()}`);
console.log(`fns[1]() = ${fns[1]()}`);

const myFunc = function add(x, y) {
    return x + y;
};

console.log(`myFunc = ${myFunc}`);
console.log(`myFunc(2, 3) = ${myFunc(2, 3)}`);
console.log(`myFunc(5, 87) = ${myFunc(5, 87)}`);

// Returning Functions

function
    add(x) {
        return function (y) {
            return x + y;
        };
    };

console.log(`add(2)(3) = ${add(2)(3)}`);
console.log(`add(5)(87) = ${add(5)(87)}`);

function giveBirth(){
    console.log("I am giving birth to a new function!");
    return function cry(){
        console.log("I am the new function!");
        return "WAAAHHHHH!";
    };
};
console.log(`giveBirth() = ${giveBirth()}`);
console.log(`giveBirth()() = ${giveBirth()()}`);
console.log(`add()() = ${add()()}`);

const fns1 = giveBirth();
console.log(`fns1 = ${fns1}`);
console.log(`fns1() = ${fns1()}`);

function makeMultiplyFunc(number) {
    return function mult(x) {
        return x * number;
    };
};
console.log(`makeMultiplyFunc(2) = ${makeMultiplyFunc(2)}`);
console.log(`makeMultiplyFunc(2)(3) = ${makeMultiplyFunc(2)(3)}`);

const quad = makeMultiplyFunc(4);
console.log(`quad = ${quad}`);
console.log(`quad(3) = ${quad(3)}`);
console.log(`quad(5) = ${quad(5)}`);
console.log(`quad(10) = ${quad(10)}`);

const double = makeMultiplyFunc(2);
console.log(`double = ${double}`);
console.log(`double(3) = ${double(3)}`);
console.log(`double(5) = ${double(5)}`);
console.log(`double(10) = ${double(10)}`);
console.log(`double(100) = ${double(100)}`);

// Single Thread

// console.log(`Run the greet function ${greet()}`);
// alert("Hello! I am blocking the next tread!");
// console.log(`Run the someText function ${someText()}`);

// Set Timeout  Interval

console.log(`greet() = ${greet()}`);
setTimeout(someText, 10000);

const id = setInterval(someText, 5000);
console.log(clearInterval(id));

// Visualizing SetTimeOut

// Anonimous Functions

greet();
setTimeout(function () {
    someText();
    someText();
    someText();
}, 4000);
greet();


setTimeout(function () {
    console.log(`This`);
    console.log(`is`);
    console.log(`a`);
    console.log(`test`);
}, 4000);

function doTwice(func) {
    func();
    func(); // Call the function again
};

doTwice(greet);
doTwice(someText);
doTwice(function () {
    console.log(`This is a test!`);
    console.log(`It is a fake!`);
});

const printOne = function() {
    console.log(1);
};

console.log(printOne());

console.log(`In JavaScript, what is a characteristic of functions that distinguishes them from some other programming languages?: Functions are treated as first-class citizens, similar to other data types.`);
console.log(`What can developers do with functions in JavaScript?: Pass them as arguments to other functions, return them from functions, and store them in variables.`);
console.log(`What is a characteristic of JavaScript that distinguishes it from some other programming languages?: JavaScript is single-threaded, meaning it can only execute one operation at a time.`);
console.log(`What happens if a long-running operation, such as an alert, blocks the thread in JavaScript?: The thread waits until the long-running operation completes before proceeding.`);
console.log(`What JavaScript function can be used to delay the execution of code by a certain number of milliseconds?: setTimeout`);
console.log(`What role does the browser play when setTimeout is used in JavaScript?: It keeps track of the delay and executes the code after the specified time.`);
console.log(`What is the purpose of using anonymous functions in JavaScript?:To pass functions as arguments to other functions.`);
console.log(`What happens behind the scenes when an anonymous function is passed to setTimeout in JavaScript?: The browser keeps track of the delay and executes the function after the specified time.`);



















