window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

function greet() {};  // function declaration

const add = function(x, y) { // function expression
    return x + y;
};


const addArrow = (x, y) => {  // arrow function
    return x + y;
};

console.log(addArrow(4, 7)); // 11

[3, 67, 87, 5, 108, 99, 8, 12].reduce(function(max, currNum) {
    return Math.max(max, currNum);
});

const X = [3, 67, 87, 5, 108, 99, 8, 12].reduce((max, currNum) => {
    return Math.max(max, currNum);
}) 

console.log(X); // 108


const Y = [1, 2, 3, 4, 5].forEach((num) => {
    console.log(num * 10);
}); // 10, 20, 30, 40, 50

const greetArrow = () => {
    console.log(`Hello`);
};
console.log(greetArrow()); // Hello

const Z = [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0); // 2, 4, 6
console.log(Z); // [2, 4, 6]
console.log(`Hello World`); // Hello World

const double = (num) => num * 2; // 2 * 2 = 4
console.log(double(2)); // 4

const W = [1, 23, 43, 42, 50, 6, 7, 81].map((num) => {
    if( num % 2 === 0) {
        return 'even';
    }
    return 'odd';
});
console.log(W); // ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']

const W1 = [1, 23, 43, 42, 50, 6, 7, 81].map((num) => (num % 2 === 0 ? 'even' : 'odd'));
console.log(W1); // ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']


const dailyRainTotals = [[1.2, 0.35, 2.2], [1.7, 0.6, 0.1], [2.5, 0.9, 1.8]];
const Rain = dailyRainTotals.map((hourlyRainTotals) => {
    return hourlyRainTotals.reduce((sum, inchesOfRain) => {
        return sum + inchesOfRain;
    });
}); // [3.85, 2.4, 5.2]
console.log(dailyRainTotals); // [[1.2, 0.35, 2.2], [1.7, 0.6, 0.1], [2.5, 0.9, 1.8]]
console.log(Rain); // [3.85, 2.4, 5.2]


// Arrow Functions Gotchas

const makeMath = (num) => {
    return {
        square: num * num,
        double: num * 2
    };
};

console.log(makeMath(5)); // {square: 25, double: 10}

const makeMath1 = (num) => ({
    square: num * num,
    double: num * 2
});

console.log(makeMath1(15)); // {square: 225, double: 30}

const cat = {
    name: 'Inka',
    sound: function() {
        return `${this.name} says meow`;
    }
};

console.log(cat.sound()); // Inka says meow

const cat1 = {
    name: 'Rijo',
    sound: () => {
        return `${this.name} says Miyauu!!!!`;
    }
};

console.log(cat1.sound()); // undefined says Miyauu!!!!

console.log(`What is one of the key advantages of using arrow functions in JavaScript?: They reduce the amount of code...`);
console.log(`Which of the following is NOT a requirement for using an implicit return in arrow functions?: `);
console.log(`What is the primary reason for avoiding arrow functions when defining methods in JavaScript objects?:Arrow functions do not have...`);
console.log(`Which syntax feature of arrow functions can be particularly confusing when attempting to return an object literal?: Including curly braces for the...`);
console.log(`Which tool can be used to convert modern JavaScript syntax, such as arrow functions, into browser-compatible code?: Babel`);


