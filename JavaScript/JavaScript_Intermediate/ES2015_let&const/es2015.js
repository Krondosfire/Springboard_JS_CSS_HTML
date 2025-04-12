window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

let mood = 'fantastic';
function getMood(num) {
    let mood = 'meh';
    if(num < 3) {
        let mood = 'bad';
        console.log(mood);
    }
    return mood;
}

console.log(getMood(2)); // bad
console.log(mood); // fantastic

const myCats = [];
console.log(myCats); // []
myCats.push(`Rijo`);
console.log(myCats); // [ 'Rijo' ]
myCats.push(`Inka`);
console.log(myCats); // [ 'Rijo', 'Inka' ]
myCats.push(`Topa`);
console.log(myCats); // [ 'Rijo', 'Inka', 'Topa' ]
myCats.pop(`Rijo`);
console.log(myCats); // [ 'Rijo', 'Inka' ]

const PI = 3.14;
if(true) {
    const PI = 4.56;
    console.log(PI); // 4.56

};
console.log(PI); // 3.14

console.log(`What is a major improvement that let and const offer compared to var?: `);
console.log(`What is the behavior of variables declared with var inside a function?: They are scoped to the function.`);
console.log(`Which keyword allows variables to be block-scoped in JavaScript?: let`);
console.log(`What is the main difference between let and const when declaring variables in JavaScript?:`);
console.log(`How do variables declared with var behave regarding hoisting in JavaScript?: Their declarations are hoisted to the top of their scope.`);
console.log(`What major improvement does let offer compared to var in JavaScript?: It cannot be re-declared in the same scope.`);
console.log(`What is a key characteristic of variables declared with const in JavaScript?: They cannot be mutated for primitive types.`);
console.log(`What is the recommended approach for choosing between var, let, and const in JavaScript?: Use const as the default choice, resorting to let only when necessary.`);
