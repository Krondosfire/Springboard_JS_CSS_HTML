window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

console.log(`****************Destructuring******************`);

const teaOrder = {
    variety : 'oolong',
    teaName : 'winter sprout',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine : true,
    quantity : 3
};

// const {price, quantity, teaName} = teaOrder;

// console.log("Destructuring an object properties {price, quantity, teaName}:", price, quantity, teaName);
const {origin} = teaOrder;
console.log("Destructuring another parameter {origin} of the original object:", origin);
const { price, quantity, teaName, ...others } = teaOrder;
console.log("Destructuring an object properties using the rest operator {price, quantity, teaName, ...others}:", others);

const newTea = {...teaOrder};
console.log("Use of spread operator in the same object:", newTea);

// More destructuring objects

console.log(`************More destructuring objects*****************`);

const { brewTemp = 175 } = teaOrder;
console.log("declaring a new parameter of the existing object {brewTemp}:", brewTemp);
console.log(teaOrder);

const {teaName : chai} = teaOrder;
console.log("Renaming a parameter of an object using destructuring:", chai);

const { brewTemp : temp = 175 } = teaOrder;
console.log("Use destructuring to rename a parameter and set default value for that parameter:", temp);

function checkout(chai) {
    const {quantity, price} = chai;
    return quantity * price;
};

console.log(checkout(teaOrder));

// Array destructuring

console.log(`***************Array Destructuring************************`);

const students = [
    {name: 'Eddie', gpa: 4.6},
    {name: 'Monica', gpa: 4.4},
    {name: 'Velin', gpa: 4.8},
    {name: 'Stefan', gpa: 3.2},
    {name: 'Victor', gpa: 3.9},
    {name: 'Velislava', gpa: 3.8},
    {name: 'Anna', gpa: 4.0},
    {name: 'Valentin', gpa: 2.8}
];

const [topStudent] = students;
console.log(topStudent);

const [ first, second, ...losers] = students;
console.log(losers);

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Bulgaria'];

function awardMedal([gold, silver, bronze]) {
    return {gold, silver, bronze};
};

console.log(awardMedal(longJumpResults));
console.log(awardMedal(swimMeetResults));
