console.log(54 + 3);



console.log(36 / 2);
//NaN is a numeric value to represent something that is not a number
console.log(0 / 0);//NaN

console.log(1 + NaN); //NaN

console.log(1 / 0); // Infinity

console.log(-1 / 0);// -Infinity (Negative Infinity)

//In JS there are 0 and -0

// VARIABLES

// let someName = value; // 

let hens = 4;
let roosters = 3;
console.log(hens + roosters); //7

// A racoon killed a hen
hens = hens - 1;

console.log(hens); //3

// UNARY OPERATORS (++ ;  --)

let score = 0;
console.log(score = score + 10); //score=10
console.log(score += 1); //11

console.log(score -= 100); //-89
console.log(score = 150); // 150

let bonusMult = 5;
console.log(score *= bonusMult); //750

let counter = 0;
console.log(counter++); //unary operator equals incremention by 1
counter // 1
console.log(counter--);//0 decrements

// cons works just like let, except the value can't be changed

// Var it is become obsolete but still in use

var eggs = 12;

console.log(eggs); //12

// Work with Primitives
// Type of variables
//Boolean

console.log(true);  //true
console.log(false);  // false

console.log('true'); // not a boolean
console.log("true");  // not a boolean

// variable can change type but not recomended

let isAngry = false;
console.log(isAngry); // false
isAngry = 1239;
console.log(isAngry);   // 1239

// Strings

typeof "87"  // string

typeof 87 // number

let firstName = "Javor"; // "Javor"

let lastName = "Mladenoff"  //"Mladenoff"

console.log(firstName + lastName); // concatenation of two strings: "JavorMladenoff"

console.log(firstName + " " + lastName); // Concatenation to "Javor Mladenoff"

let fullName = firstName + " " + lastName // "Javor Mladenoff"
console.log(fullName);

console.log("hi" + 1); // "hi1"

console.log("hi" - "h");  // NaN

console.log("hi" / "h"); // NaN

// Indexes with strings

console.log("hello".length); // 5; property of a string

let mySong = "Surfin' USA";

console.log(mySong.length); // 11

console.log(mySong[0]); // "S" indexes

console.log(mySong[mySong.length - 1]);  // "A" access the last character in a string

// Methods

let msg = "Today is the day I get rich!"
console.log(msg.toUpperCase()); //"TODAY IS THE DAY I GET RICH!"

console.log(msg); //  "Today is the day I get rich!"

msg_loud = msg.toUpperCase();

console.log(msg_loud); //   "TODAY IS THE DAY I GET RICH!"

//  Methods: thing.method(arg)

let tvShow = "catdog";

console.log(tvShow.indexOf('cat'));  // 0
console.log(tvShow.indexOf('dog'));  // 3
console.log(tvShow.indexOf('z'));   // -1 (not found)

let str = "superduperloopercooper";
console.log(str);  //  "superduperloopercooper"

console.log(str.slice(0, 5));  // "super"
console.log(str.slice(5));  // "duperloopercooper"

console.log(str.slice(5, 7));  // "du"
console.log(str.slice(6, 9));   //  "uper"
console.log('$50.78'.slice(1))  // '50.78'

console.log('baseball is fun'.replace('fun', 'ok'));  // "baseball is ok"

console.log('ha ha ha'.replace('ha', 'meow'));  // "meow ha ha"

let userInput = "   TODD@gmail.com";
console.log(userInput);
let cleanedInput = userInput.trim().toLowerCase(); //"todd@gmail.com"
console.log(cleanedInput);
let park = "Yellowstone";
console.log(park);
const index = park.indexOf('Stone'); // -1  (not found)
console.log(index);
let warning = "GO AWAY!!";
console.log(warning);
let new_index = warning.indexOf('!'); // 7
console.log(new_index);
console.log('GARBAGE'.slice(2).replace("B", ''));  // 'RAGE'

// Running code from a file

// REPL - Read Evaluate Print Loop

alert("Another script!");

console.error("Error in the console!!!");

console.log(482 + 9838, "Test", false);

//I am this!`
console.log('I am this!');
console.log(`I'm this!`);
console.log("I'm this!");
console.log(`I can count up to ${9 + 587}`);
console.log('I can count up to 596');


let animal = "pig";

let sound = "kvik";

`${animal} makes ${sound} sound!`
console.log('pig makes kvik sound!');

//'pig makes function toUpperCase() { [native code] } sound!'
`${animal} makes ${sound.toUpperCase()} sound!`
console.log('pig makes KVIK sound!');
let item = "oranges";

let price = 2.45;

let quantity = 5;

let package = "bulk";

console.log(`You bought ${quantity} ${item} as a ${package} for the price of $${price * quantity}!`);
console.log('You bought 5 oranges as a bulk for the price of $12.25!');
const minAge = 21;
let yourAge = 19;

console.log(`You must be ${minAge} or older to enter. Come back in ${minAge - yourAge} years!`);
let a = "Null is intentional absence of any value!";
let b = "Undefined are variables that don't have an assigned value!";
console.log(a.toUpperCase());
console.log(b.toUpperCase());

// No one is logged in yet...
let loggedInUser = null; // value is explicitly nothing
console.log(loggedInUser);

// A user logs in...
loggedInUser = 'Javor Mladenoff';
console.log(loggedInUser);

let m = "MATH OBJECT";
let m1 = "Contains properties and methods for mathematical constants and functions."
console.log(`${m} --> ${m1.toUpperCase()}`);

console.log(Math.PI);
console.log(`Rounding a number (58.324799): ${Math.round(58.324799)}`);

console.log(`Absolute value (-58.324799): ${Math.abs(-58.324799)}`);

console.log(`Raises 15 to the 3th power: ${Math.pow(15, 3)}`);

console.log(`Removes the decimal (58.324799): ${Math.floor(58.324799)}`);

console.log(`Gives a random decimal between 0 and 1(non-inclusive): ${Math.random()}`);

console.log(`Gives a random decimal between 0 and 1(non-inclusive): ${Math.random(60)}`);

const step1 = Math.random();
const step2 = step1 * 100;
const step3 = Math.floor(step2);
console.log(`Random numbers between 1 and 100: ${step3}`);
console.log(`Random numbers between 1 and 100 + 1: ${step3 + 1}`);
console.log(`Random numbers between 1 and 100 + 2: ${Math.floor(step1 * 100) + 2}`);

// typeof

console.log(typeof 1976);
console.log(typeof m);
console.log(typeof true);
console.log(typeof null);

console.log(`parseInt & parseFloat --> parse strings into numbers, but be carefull for NaN!`);
console.log(`parseInt('24'): ${parseInt('24')}`);
console.log(`parseInt('24.987'): ${parseInt('24.987')} --> evaluates only the number portion of the string!`);
console.log(`parseInt('$78'): ${parseInt('$78')} --> it does not expect non-numeric value infront of the number!`);
console.log(`parseInt('45dayslater'): ${parseInt('45dayslater')} --> evaluates only the number portion of the string!`);
console.log(`parseFloat('24'): ${parseFloat('24')}`);
console.log(`parseFloat('49.33376'): ${parseFloat('49.33376')} --> evaluates the whole decimal number, it does not stop at the "."!`);
console.log(`parseFloat('I am 48 years old!'): ${parseFloat('I am 48 years old!')} --> That is messed up!`);

// Comparisons

console.log(-2 > 1); // false
console.log(10 < 999);  // true
console.log(10 >= 10); // true
console.log(10 <= 10); // true
console.log(2 <= 10); // true
console.log(2 >= 7); // true
console.log(2 >= 5); // false
console.log(`hello >= hi:${"hello".length >= "hi".length}`); // true
console.log(`hello <= hi:${"hello".length <= "hi".length}`); // false
console.log(`a <= A:${"a" <= "A"}`); // false
console.log(`a >= A:${"a" >= "A"}`); // true
console.log(`a < A:${"a" < "A"}`); // false
console.log(`a > A:${"a" > "A"}`); // true
console.log(`a == A:${"a" == "A"}`); // false
console.log(`a === A:${"a" === "A"}`); // false
console.log(`a != A:${"a" != "A"}`); // true
console.log(`a >= b:${"a" >= "b"}`); //false
console.log(`a <= b:${"a" <= "b"}`); // false
console.log(`Javor >= Mladenoff:${"Javor" >= "Mladenoff"}`); // false
console.log(`Javor <= Mladenoff:${"Javor" <= "Mladenoff"}`); // true
console.log(`Javor == Mladenoff:${"Javor" == "Mladenoff"}`); // false
console.log(`Javor === Mladenoff:${"Javor" === "Mladenoff"}`); // false
console.log(`$ != &:${"$" != "&"}`); // true
console.log(`* >= &:${"*" >= "&"}`); // false
console.log(`@ >= %:${"@" >= "%"}`); // true
console.log(`B < a:${"B" < "a"}`);  // true
console.log(`B > a:${"B" > "a"}`);  // false
console.log(`a == a:${"a" == "a"}`); // true
console.log(`a === a:${"a" === "a"}`); // true
console.log(`a != a:${"a" != "a"}`); // false
console.log(`a !== a:${"a" !== "a"}`); // false 
console.log(`a == A:${"a" == "A"}`); // false
console.log(`a === A:${"a" === "A"}`); // false
console.log(`a != A:${"a" != "A"}`); // true
console.log(`a !== A:${"a" !== "A"}`); // true
console.log(`2 == 2:${2 == 2}`); // true
console.log(`2 === 2:${2 === 2}`); // true
console.log(`2 != 2:${2 != 2}`); // false
console.log(`2 !== 2:${2 !== 2}`); // false
console.log(`0 == "Javor":${0 == "Javor"}`); // false
console.log(`0 === "Javor":${0 === "Javor"}`); // false
console.log(`0 != " ":${0 != " "}`); // true
console.log(`0 !== " ":${0 !== " "}`); // true
console.log(`0 == " ":${0 == " "}`); // true
console.log(`0 === " ":${0 === " "}`); // false
console.log(`0 == "false":${0 == false}`); // true
console.log(`0 === "false":${0 === false}`); // false
console.log(`0 == "0":${0 == "0"}`); // true
console.log(`true == "false":${true == false}`); // false
console.log(`true === "false":${true === false}`); // false
console.log(`true == 1:${true == 1}`); // true
console.log(`true === 1:${true === 1}`); // true
console.log(`null == undefined:${null == undefined}`); // true
console.log(`null === undefined:${null === undefined}`); // false
console.log(`undefined == undefined:${undefined == undefined}`); // true
console.log(`undefined === undefined:${undefined === undefined}`); // true
console.log(`null == null:${null == null}`); // true
console.log(`null === null:${null === null}`); // true
console.log(`NaN == NaN:${NaN == NaN}`); // false
console.log(`NaN === NaN:${NaN === NaN}`); // false
console.log(`typeof NaN:${typeof NaN}`); // number
console.log(`typeof null:${typeof null}`); // object
console.log(`typeof undefined:${typeof undefined}`); // undefined
console.log(`typeof 0:${typeof 0}`); // number

// Conditional statements: if

if (1 === 1) {
    console.log("This is true!");
};

if (1 === 2) {
    console.log("This is true!");
};

let rating = 1;
if (rating === 5) {
    console.log("You are awesome!");
};

let num = 11;
if (num % 2 !== 0) {
    console.log("ODD NUMBER!");
};


// Else if conditional statement


if (rating === 5) {
    console.log("You are awesome!");
}

else if (rating == 4) {
    console.log("Meets the criteria!");
}

else if (rating == 3) {
    console.log("Needs Improvement!");
};




// Else conditional statement

if (rating === 5) {
    console.log("You are awesome!");
}

else if (rating == 4) {
    console.log("Meets the criteria!");
}

else if (rating == 3) {
    console.log("Needs Improvement!");
}
else {
    alert("Bye Sucker!!!");
    console.clear();
    console.log("YOU ARE FIRED!!!!");
};


// Example

let highScore = 1430;
let userScore = 1149;
console.log(`Current High Score: ${highScore} points`);
if (userScore >= highScore) {
    console.log(`You beat the high score by ${userScore - highScore} points!`);
    console.log(`New High Score: ${highScore = userScore} points`);
}
else {
    console.log(`You need ${highScore - userScore} more points to beat the high score of ${highScore} points!`);
}

// Nesting COnditional statements

let password = 'pass';

if (password.length >= 8) {
    if (password.indexOf(' ') === -1) {
        console.log("Password is good!");
    }
    else {
        console.log("Password cannot contain spaces!");
    }


}
else {
    console.log("Password is too short!");
};

// Truthy and Falsy values

let mystery = 0;
if (mystery) {
    console.log(`${mystery} is 'TRUTHY!'`);
}
else {
    console.log(`${mystery} is 'FALSY!'`);
};

let logInUser = 'Javor';

if (logInUser) {
    console.log(`Welcome back, ${logInUser}!`);
    alert(`Welcome back, ${logInUser}!`);
}
else {
    console.log("Please log in!");
    alert("Please log in!");
};

// Logical Operators: && (AND), || (OR), ! (NOT)

console.log(`true && true: ${true && true}`); // true
console.log(`true && false: ${true && false}`); // false
console.log(`false && true: ${false && true}`); // false
console.log(`false && false: ${false && false}`); // false
console.log(`true || true: ${true || true}`); // true
console.log(`true || false: ${true || false}`); // true
console.log(`false || true: ${false || true}`); // true
console.log(`false || false: ${false || false}`); // false
console.log(`!true: ${!true}`); // false
console.log(`!false: ${!false}`); // true
console.log(`1 <= 2 && 6===6: ${1 <= 2 && 6 === 6}`); // true
console.log(`1 <= 2 && 6===7: ${1 <= 2 && 6 === 7}`); // false
console.log(`1 <= 2 || 6===7: ${1 <= 2 || 6 === 7}`); // true
console.log(`1 <= 2 || 6===6: ${1 <= 2 || 6 === 6}`); // true
console.log(`"abc".length === 3 && 12+3 === 24: ${"abc".length === 3 && 12 + 3 === 24}`); // false
console.log(`"abc".length === 3 || 12+3 === 24: ${"abc".length === 3 || 12 + 3 === 24}`); // true
console.log(`"abc".length === 3 || 12+3 === 15: ${"abc".length === 3 || 12 + 3 === 15}`); // true
console.log(`"abc".length === 3 && 12+3 === 15: ${"abc".length === 3 && 12 + 3 === 15}`); // false
console.log(`!true: ${!true}`); // false
let passwd = 'jeep2020';
if (passwd.length >= 8 && passwd.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!!!");
}
else {
    console.log("INVALID PASSWORD!!!");
};


let digit = 13;

if (digit >= 1 && digit <= 10) {
    console.log("Number is between 1 and 10!!!");
}
else {
    console.log("Guess again! Number is NOT between 1 and 10!!!");
};


// OR (II)   - only one side needs to be true

console.log(`true || false: ${true || false}`); // true
console.log(`true || true: ${true || true}`); // true
console.log(`false || true: ${false || true}`); // true
console.log(`false || false: ${false || false}`); // false

console.log(`1 <= 2 || 6===7: ${1 <= 2 || 6 === 7}`); // true
console.log(`1 <= 2 || 6===6: ${1 <= 2 || 6 === 6}`); // true
console.log(`1 <= 2 || 6===7: ${1 <= 2 || 6 === 7}`); // true
console.log(`1 !== 1 || 10===10: ${1 !== 1 || 10 === 10}`); // true
console.log(`1 !== 1 || 10===10: ${1 !== 1 || 10 === 10}`); // false
console.log(`10/2 === 5 || null: ${10 / 2 === 5 || null}`); // true
console.log(`10/2 === 5 || undefined: ${10 / 2 === 5 || undefined}`); // true
console.log(`10/2 === 5 || false: ${10 / 2 === 5 || false}`); // true
console.log(`10/2 === 5 || true: ${10 / 2 === 5 || true}`); // true
console.log(`0 || undefined: ${0 || undefined}`); // undefined
console.log(`undefined || 0: ${undefined || 0}`); // 0
console.log(`undefined || undefined: ${undefined || undefined}`); // undefined
console.log(`undefined || 1: ${undefined || 1}`); // 1

let age = 48;
if (age < 6 || age > 65) {
    console.log("You get in for free!!!");
}
else {
    console.log("You need to pay!!!");
};

let color = 'green';
if (color === 'blue' || color === 'red' || color === 'green') {
    console.log(`You get a ${color} discount!!!`);
}
else {
    console.log("You pay full price!!!");
}


// NOT (!) - reverses the value of a boolean (true to false and vice versa)

console.log(`!null: ${!null}`); // true
console.log(`!undefined: ${!undefined}`); // true
console.log(`! (0 === 0): ${!(0 === 0)}`); // false
console.log(`! (0 !== 0): ${!(0 !== 0)}`); // true
console.log(`! (1 === 1): ${!(1 === 1)}`); // false
console.log(`! (1 !== 1): ${!(1 !== 1)}`); // true
console.log(`! (1 < 2): ${!(1 < 2)}`); // false
console.log(`! (1 > 2): ${!(1 > 2)}`); // true
console.log(`! (1 <= 2): ${!(1 <= 2)}`); // false
console.log(`! (1 >= 2): ${!(1 >= 2)}`); // true
console.log(`! (1 <= 1): ${!(1 <= 1)}`); // false
console.log(`! (1 >= 1): ${!(1 >= 1)}`); // false
console.log(`! (1 !== 1): ${!(1 !== 1)}`); // false
console.log(`! 45: ${!45}`); // false
console.log(`! "": ${! ""}`); // true

let signedUser = '';
if (!signedUser) {
    console.log("WRONG PLACE! WRONG TIME!");
}
else {
    console.log(`Welcome back, ${signedUser}!`);
};

let flavor = 'lemon';
if (flavor !== 'vanilla' && flavor !== 'chocolate' && flavor !== 'strawberry') {
    console.log("Oups!That flavor is not on the menu!!!");
}
else {
    console.log(`Great choice! ${flavor} is on the menu!!!`);
};

// Precedence of logical operators
console.log(`AND (&&) has higher precedence than OR (||)`)
console.log(`NOT (!) has the highest precedence of all`)
console.log(`Parentheses () have the highest precedence of all`)
console.log(`Parentheses () can be used to override the default precedence`)
console.log(`Parentheses () can be used to group expressions`)
console.log(`Parentheses () can be used to clarify the order of evaluation`)
console.log(`Parentheses () can be used to make the code more readable`)

let x = 7;
x == 7 || x === 3 && x > 10; // true
console.log(`x == 7 || x === 3 && x > 10: ${x == 7 || x === 3 && x > 10} - && takes precedence over ||`); // true
console.log(`x == 7 || (x === 3 && x > 10): ${x == 7 || (x === 3 && x > 10)} - parentheses override precedence`); // true
console.log(`(x == 7 || x === 3) && x > 10: ${(x == 7 || x === 3) && x > 10} - parentheses override precedence`); // false
console.log(`x == 7 || x === 3 && x > 10: ${x == 7 || x === 3 && x > 10} - && takes precedence over ||`); // true
console.log(`x == 7 || (x === 3 && x > 10): ${x == 7 || (x === 3 && x > 10)} - parentheses override precedence`); // true
console.log(`(x == 7 || x === 3) && x > 10: ${(x == 7 || x === 3) && x > 10} - parentheses override precedence`); // false
console.log(`The logical order looks like this: !  &&  ||`);
// The logical order looks like this: !  &&  ||
console.log(`What is the result of the expression 7 - 3 * 2 + 5 = ${7 - 3 * 2 + 5}`); // 6
console.log(`Given the expression: 9/3+2*4= ${9 / 3 + 2 * 4}`); // 11

// SWITCH statement

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("INVALID DAY!!!");
};

if (day === 1) {
    console.log("Monday");
}
else if (day === 2) {
    console.log("Tuesday");
}
else if (day === 3) {
    console.log("Wednesday");
}
else if (day === 4) {
    console.log("Thursday");
}
else if (day === 5) {
    console.log("Friday");
}
else if (day === 6) {
    console.log("Saturday");
}
else if (day === 7) {
    console.log("Sunday");
}
else {
    console.log("INVALID DAY!!!");
};


let emoji = 'kiss';
switch (emoji) {
    case 'happy face':
    case 'sad face':
        console.log("yellow");
        break;
    case 'angry face':
        console.log("red");
        break;
    case 'lips':
    case 'kiss':
    case 'heart':
        console.log("red");
        break;
    default:
        console.log("INVALID EMOJI!!!");
};



// TERNARY OPERATOR
console.log(`Conditional operator: ? :`)
console.log(`condition ? expressionIfTrue : expressionIfFalse`)
console.log(`condition ? expressionIfTrue : expressionIfFalse`)
console.log(`condition ? expressionIfTrue : expressionIfFalse`)

let aroma = 'vanilla';

aroma === 'good' ? console.log("This is good aroma!") : console.log("This is bad aroma!");

if (aroma === 'good') {
    console.log("This is good aroma!");
}
else {
    console.log("This is bad aroma!");
};

let status1 = 'Online';

let paint1 = '';
if (status1 === 'Online') {
    paint1 = 'green';
}
else {
    paint1 = 'red';
};
let status2 = 'Offline';
let paint2 = status2 === 'Online' ? 'green' : 'red';
console.log(paint2); // red



// Arrays and objects

let shoplist = ['apples', 'bananas', 'oranges', 'grapes', 'pears'];
console.log(shoplist); // ['apples', 'bananas', 'oranges', 'grapes', 'pears']
console.log(shoplist[0]); // apples
console.log(shoplist[1]); // bananas   
console.log(shoplist[2]); // oranges
console.log(shoplist[3]); // grapes
console.log(shoplist[4]); // pears

// Arrays are indexed

let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
console.log(colors[0]); // red
console.log(colors[1]); // green    
console.log(colors[2]); // blue
console.log(colors[3]); // yellow
console.log(colors[4]); // purple
console.log(colors[5]); // orange
console.log(colors[6]); // pink
console.log(colors[7]); // brown
console.log(colors[8]); // black
console.log(colors[9]); // white
console.log(colors[10]); // undefined
console.log(colors[colors.length - 1]); // white  
console.log(colors[colors.length - 2]); // black

// Modifying arrays
console.log(`Modifying arrays`)
let animals = ['cat', 'dog', 'fish', 'bird', 'lizard'];
console.log(animals); // ['cat', 'dog', 'fish', 'bird', 'lizard']
console.log(` Change the last item lizard to turtle:${animals[4] = 'turtle'}`);
console.log(animals); // ['cat', 'dog', 'fish', 'bird', 'turtle']
console.log(` Change the first item cat to lion:${animals[0] = 'lion'}`);
console.log(animals); // ['lion', 'dog', 'fish', 'bird', 'turtle']
console.log(` Change the second item dog to wolf:${animals[1] = 'wolf'}`);
console.log(animals); // ['lion', 'wolf', 'fish', 'bird', 'turtle']
console.log(` Change the third item fish to shark:${animals[2] = 'shark'}`);
console.log(animals); // ['lion', 'wolf', 'shark', 'bird', 'turtle']
console.log(` Change the fourth item bird to eagle:${animals[3] = 'eagle'}`);
console.log(animals); // ['lion', 'wolf', 'shark', 'eagle', 'turtle']
console.log(` Add new item squirrel to the array:${animals[5] = 'squirrel'}`);
console.log(animals); // ['lion', 'wolf', 'shark', 'eagle', 'turtle', 'squirrel']
console.log(` Add new item monkey to the array:${animals[6] = 'monkey'}`);
console.log(animals); // ['lion', 'wolf', 'shark', 'eagle', 'turtle', 'squirrel', 'monkey']
console.log(` Another way to add new item giraffe to the array:${animals[animals.length] = 'giraffe'}`);
console.log(animals); // ['lion', 'wolf', 'shark', 'eagle', 'turtle', 'squirrel', 'monkey', 'giraffe']
console.log(` Another way to add new item elephant to the array:${animals.push('elephant')}`);
console.log(animals); // ['lion', 'wolf', 'shark', 'eagle', 'turtle', 'squirrel', 'monkey', 'giraffe', 'elephant']

// Array Methods: push - add to end; pop - remove from end; unshift - add to beginning; shift - remove from beginning; 
console.log(`Array Methods: push - add to end; pop - remove from end; unshift - add to beginning; shift - remove from beginning; `)

let topSongs = ['Money', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You'];
console.log(topSongs); // ['Money', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']
console.log(`Add new song to the end of the array using "push"-method: ${topSongs.push('Keeper of the Seven Keys')}`);
console.log(topSongs); // ['Money', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You', 'Keeper of the Seven Keys']
console.log(`Add new song to the end of the array using "push"-method: ${topSongs.push('The Final Countdown')}`);
console.log(topSongs); // ['Money', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You', 'Keeper of the Seven Keys', 'The Final Countdown']

// pop - remove from end
console.log(`Remove last song from the end of the array using "pop"-method: ${topSongs.pop()}`);
console.log(topSongs); // ['Money', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You', 'Keeper of the Seven Keys']

console.log(`Remove last song from the end of the array using "pop"-method and then store that value in variable: ${topSongs.pop()}`);
const nextSong = topSongs.pop();
console.log(`The new variable is const nextSong = topSongs.pop(): ${nextSong}`); // ['Money', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']
console.log(topSongs); // ['Money', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']

// Shift - remove from beginning; Unshift - add to beginning
console.log(`Remove first song from the beginning of the array using "shift"-method: ${topSongs.shift()}`);
console.log(topSongs); // ['Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('The Final Countdown')}`);
console.log(topSongs); // ['The Final Countdown', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('Money')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('Fear Of The Dark')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('The Trooper')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('Freak On The Leash')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('The Sound Of Silence')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('Master Of Puppets')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('One')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('Fade To Black')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('Seek And Destroy')}`);
console.log(`Add new song to the beginning of the array using "unshift"-method: ${topSongs.unshift('Creeping Death')}`);
console.log(topSongs); // ['Fear Of The Dark', 'Money', 'The Final Countdown', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']
console.log(topSongs); // ['Money', 'The Final Countdown', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']
console.log(`Remove first song from the beginning of the array using "shift"-method: ${topSongs.shift()}`);
console.log(topSongs); // ['The Final Countdown', 'Unforgiven', "The Tale That Wasn't Right", 'Money For Nothing', 'Nearly Lost You']

// Concat - merge arrays
console.log(`Concat - merge arrays`)
let fruits = ['apples', 'bananas', 'oranges', 'grapes', 'pears', 'kiwi', 'mango', 'pineapple', 'peach', 'plum'];
let vegetables = ['carrot', 'broccoli', 'spinach', 'potato', 'onion', 'cabbage', 'cauliflower', 'celery', 'bell pepper', 'zucchini'];
console.log(fruits); // ['apples', 'bananas', 'oranges', 'grapes', 'pears', 'kiwi', 'mango', 'pineapple', 'peach', 'plum']
console.log(`Add new array of vegetables to the existing array of fruits using "concat"-method: ${fruits.concat(vegetables)}`);
console.log(`Switch the order of arrays: ${vegetables.concat(fruits)}`); // 
console.log(vegetables); // ['carrot', 'broccoli', 'spinach', 'potato', 'onion', 'cabbage', 'cauliflower', 'celery', 'bell pepper', 'zucchini']
let meats = ['chicken', 'beef', 'pork', 'fish', 'turkey', 'lamb', 'duck', 'goose', 'rabbit', 'venison'];
console.log(`Create a new array 'meats': ${meats}`);
let food = fruits.concat(vegetables, meats);
console.log(`Add new array of meats to the existing array of fruits and vegetables using "concat"-method: ${food}`);
console.log(`Switch the order of arrays: ${meats.concat(fruits, vegetables)}`); //
console.log(`Switch the order of arrays: ${vegetables.concat(fruits, meats)}`); //
console.log(`Switch the order of arrays: ${fruits.concat(meats, vegetables)}`); //

//includes - check if an array contains a value; indexOf - check the index of a value in an array
console.log(`includes - check if an array contains a value; indexOf - check the index of a value in an array`)

let ingredients = ['flour', 'sugar', 'eggs', 'milk', 'butter', 'baking powder', 'vanilla extract', 'salt'];
console.log(`New array named 'ingredients':${ingredients}`); // ['flour', 'sugar', 'eggs', 'milk', 'butter', 'baking powder', 'vanilla extract', 'salt']
console.log(`Check if the array contains 'sugar' using "includes"-method: ${ingredients.includes('sugar')}`); // true
console.log(`Check if the array contains 'honey' using "includes"-method: ${ingredients.includes('honey')}`); // false
console.log(`Check if the array contains 'milk' using "includes"-method after the 5th element: ${ingredients.includes('milk', 5)}`); // false
console.log(`Check if the array contains 'milk' using "includes"-method before the 5th element: ${ingredients.includes('milk', 4)}`); // true
console.log(`Check if the array contains 'salt' using "includes"-method before the 4th element: ${ingredients.includes('salt', 3)}`); // true   
console.log(`Check if the array contains 'salt' using "includes"-method after the 3rd element: ${ingredients.includes('salt', 4)}`); // false

if (ingredients.includes('sugar')) {
    console.log("Sugar is on the list!");
}
else {
    console.log("Sugar is NOT on the list!");
};

console.log(`Check the index of 'sugar' in the array using "indexOf"-method: ${ingredients.indexOf('sugar')}`); // 1
console.log(`Check the index of 'milk' in the array using "indexOf"-method: ${ingredients.indexOf('milk')}`); // 3
console.log(`Check the index of 'honey' in the array using "indexOf"-method: ${ingredients.indexOf('honey')}`); // -1
console.log(`Check the index of 'eggs' in the array using "indexOf"-method: ${ingredients.indexOf('eggs')}`); // 2
console.log(`Check the index of 'butter' in the array using "indexOf"-method after the 3rd element: ${ingredients.indexOf('butter', 3)}`); // 4
console.log(`Check the index of 'butter' in the array using "indexOf"-method before the 4th element: ${ingredients.indexOf('butter', 3)}`); // 4        
console.log(`Check the index of 'water' in the array using "indexOf"-method before the 5th element: ${ingredients.indexOf('water', 4)}`); // -1
console.log(`Check the index of 'water' in the array using "indexOf"-method after the 4th element: ${ingredients.indexOf('water', 5)}`); // -1
console.log(`Check the index of 'water' in the array using "indexOf"-method after the 3rd element: ${ingredients.indexOf('water', 4)}`); // -1
console.log(`Check the index of 'water' in the array using "indexOf"-method before the 3rd element: ${ingredients.indexOf('water', 2)}`); // -1
console.log(`Check the index of 'honey' in the array using "indexOf"-method before the 2nd element: ${ingredients.indexOf('honey', 1)}`); // -1
console.log(`Check the index of 'honey' in the array using "indexOf"-method after the 1st element: ${ingredients.indexOf('honey', 2)}`); // -1
console.log(`Check the index of 'honey' in the array using "indexOf"-method after the 0th element: ${ingredients.indexOf('honey', 1)}`); // -1
console.log(`Check the index of 'sugar' in the array using "indexOf"-method before the 1st element: ${ingredients.indexOf('sugar', 0)}`); // 1
console.log(`Check the index of 'sugar' in the array using "indexOf"-method after the 0th element: ${ingredients.indexOf('sugar', 0)}`); // 1

// reverse - reverse the order of the array; join - join the elements of the array into a string
console.log(`reverse - reverse the order of the array; join - join the elements of the array into a string`)
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(`Reverse the order of the array using "reverse"-method: ${letters.reverse()}`); // ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
console.log(`It changes the order of the elements in the original array: ${letters}`); // ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

let names = ['Javor', 'Emiloff', 'Mladenoff'];
console.log(names); // ['Javor', 'Emiloff', 'Mladenoff']
console.log(`Join the elements of the array into a string using "join"-method: ${names.join(', ')}`); // Javor, Emiloff, Mladenoff
console.log(`Join the elements of the array into a string using "join"-method: ${names.join(' ')}`); // Javor Emiloff Mladenoff
console.log(`Join the elements of the array into a string using "join"-method: ${names.join(' - ')}`); // Javor - Emiloff - Mladenoff
console.log(`Join the elements of the array into a string using "join"-method: ${names.join(' + ')}`); // Javor + Emiloff + Mladenoff
console.log(`Join the elements of the array into a string using "join"-method: ${names.join(' + ')}`); // Javor + Emiloff + Mladenoff
console.log(`Join the elements of the array into a string using "join"-method: ${names.join(' + ')}`); // Javor + Emiloff + Mladenoff
console.log(`Join the elements of the array into a string using "join"-method: ${names.join(' + ')}`); // Javor + Emiloff + Mladenoff

// Slice - extract a part of the array;
console.log(`Slice - extract a part of the array;`)
let animals1 = ['shark', 'salmon', 'lobster', 'crocodile', 'turtle', 'octopus', 'whale', 'cat', 'dog', 'bird', 'lizard'];
console.log(`animals: ${animals1}`); // ['shark', 'dog', 'salmon', 'bird', 'lizard', 'lobster', 'crocodile', 'turtle', 'octopus', 'whale', 'cat']
let swimmers = animals1.slice(0, 5);
console.log(`Extract the first 5 elements of the array using "slice"-method: ${swimmers}`); // ['shark', 'dog', 'salmon', 'bird', 'lizard']
console.log(`Extract the elements in the middle of the array using "slice"-method: ${animals1.slice(6, 8)}`); // ['whale', 'cat']
console.log(`Extract the last 5 elements of the array using "slice"-method: ${animals1.slice(5, 11)}`); // ['lobster', 'crocodile', 'turtle', 'octopus', 'whale']
console.log(`Extract the last 5 elements of the array using "slice"-method: ${animals1.slice(-5)}`); // ['lobster', 'crocodile', 'turtle', 'octopus', 'whale']

// Splice - add or remove elements from the array
console.log(`Splice - add or remove elements from the array`);

animals1.splice(1, 0, 'dolphin', 'seal', 'sea lion');
console.log(`Add 3 elements to the array using "splice"-method: ${animals1}`); // ['shark', 'dolphin', 'seal', 'sea lion', 'dog', 'salmon', 'bird', 'lizard', 'lobster', 'crocodile', 'turtle', 'octopus', 'whale', 'cat']
console.log(`Delete 2 elements ( sea lion and salmon)to the array using "splice"-method: ${animals1.splice(3, 2)}`); // ['dog', 'salmon']
console.log(`The new array looks like this: ${animals1}`); // ['shark', 'dolphin', 'seal', 'sea lion', 'bird', 'lizard', 'lobster', 'crocodile', 'turtle', 'octopus', 'whale', 'cat']
console.log(`Add 2 elements ( frog and cockroachn)to the array using "splice"-method: ${animals1.splice(3, 0, 'frog', 'cockroach')}`); // ['frog', 'cockroach']
console.log(`The new array looks like this: ${animals1}`); // ['shark', 'dolphin', 'seal', 'frog', 'cockroach', 'sea lion', 'bird', 'lizard', 'lobster', 'crocodile', 'turtle', 'octopus', 'whale', 'cat']
console.log(`Replace some lower case elements with upper case elements using "splice"-method: ${animals1.splice(3, 2, 'FROG', 'COCKROACH')}`); // ['frog', 'cockroach']
console.log(`The new array looks like this: ${animals1}`); // ['shark', 'dolphin', 'seal', 'FROG', 'COCKROACH', 'sea lion', 'bird', 'lizard', 'lobster', 'crocodile', 'turtle', 'octopus', 'whale', 'cat']

// sort - sort the array
console.log(`sort - sort the array`)
let numbers = [3, 5, 1, 4, 2];
console.log(numbers); // [3, 5, 1, 4, 2]
console.log(`Sort the array using "sort"-method: ${numbers.sort()}`); // [1, 2, 3, 4, 5]
console.log(`Sort the array using "sort"-method: ${numbers.sort((a, b) => a - b)}`); // [1, 2, 3, 4, 5]
console.log(`Sort the array using "sort"-method: ${numbers.sort((a, b) => b - a)}`); // [5, 4, 3, 2, 1]
console.log(`Sort the array using "sort"-method: ${numbers.sort((a, b) => a - b).reverse()}`); // [5, 4, 3, 2, 1]
console.log(`Sort the array using "sort"-method: ${numbers.sort((a, b) => b - a).reverse()}`); // [1, 2, 3, 4, 5]

let people = ['Javor', 'Pepa', 'Velin', 'Stephan', 'Eddy'];
console.log(people); // ['Javor', 'Pepa', 'Velin', 'Stephan', 'Eddy']
console.log(`Sort the array using "sort"-method: ${people.sort()}`); // ['Eddy', 'Javor', 'Pepa', 'Stephan', 'Velin']
console.log(`Sort the array using "sort"-method in reverse: ${people.sort().reverse()}`); // ['Velin', 'Stephan', 'Pepa', 'Javor', 'Eddy']
console.log(`It mutates the array: ${people}`); // ['Eddy', 'Javor', 'Pepa', 'Stephan', 'Velin']

let numbers1 = [35, 10, 9999, 874, 12, 2, 763498, 890765, 64, 76908, 9932];
console.log(numbers1); // [35, 10, 9999, 874, 12, 2, 763498, 890765, 64, 76908, 9932]
console.log(`Sort the array using "sort"-method: ${numbers1.sort()}`); // [10, 12, 2, 35, 64, 763498, 76908, 890765, 9932, 9999]
console.log(`Sort method in JS converts numbers to strings and sorts them based on UTF-16 code values`);
console.log(`A common approach to sorting an array of numbers in ascending order using the array.sort method is to pass a compare function to the array.sort method to define the sorting logic!`);

// Reference Types

console.log(`Reference Types`);
console.log(`Reference types are objects`);
console.log(`Reference types are arrays`);
console.log(`Reference types are functions`);
console.log(`Primitive types are stored in the stack`);
console.log(`Reference types are stored in the heap`);
console.log(`Primitive types are copied by value`);
console.log(`Reference types are copied by reference`);
console.log(`Primitive types are immutable`);
console.log(`Reference types are mutable`);
console.log(`Primitive types are compared by value`);
console.log(`Reference types are compared by reference`);
console.log(`Value Type Variables`);
console.log(`Value Type Variables are stored in the stack`);
console.log(`Value Type Variables are copied by value`);
console.log(`Value Type Variables are immutable`);
console.log(`Value Type Variables are compared by value`);
let x1 = 10;
let y1 = x1;
console.log(`x1 = ${x1}`); // 10
console.log(`y1 = ${y1}`); // 10
y1 = 20;
console.log(`x1 = ${x1}`); // 10
console.log(`y1 = ${y1}`); // 20
console.log(`Variables that store primitive types store the actual values!`);
console.log(`Primitive types are stored as actual values, while arrays are stored as references in memory!`);

// Using const with arrays
console.log(`Using const with arrays`);

let x2 = 34;
x2 += 5;
console.log(`x2 = ${x2}`); // 39
console.log(`Variables declared with const are not immutable!`);
const city = 'Sofia';
console.log(`city = ${city}`); // Sofia
console.log(`Variables declared with const are immutable!`);
//city = 'Plovdiv';
//console.log(`city = ${city}`); // TypeError: Assignment to constant variable

const city1 = ['Sofia', 'Plovdiv', 'Varna', 'Burgas'];
console.log(`city1 = ${city1}`); // Sofia, Plovdiv, Varna, Burgas
city1.push('Ruse');
console.log(`city1 = ${city1}`); // Sofia, Plovdiv, Varna, Burgas, Ruse
city1.pop();
console.log(`city1 = ${city1}`); // Sofia, Plovdiv, Varna, Burgas
city1.shift();
console.log(`city1 = ${city1}`); // Plovdiv, Varna, Burgas
city1.unshift('Sofia');
console.log(`city1 = ${city1}`); // Sofia, Plovdiv, Varna, Burgas
city1[0] = 'Plovdiv';

console.log(`What happens when declare an array using const in JS?: The array reference cannot be changed, but you can modify the array elements!`);
console.log(`Why is const commonly used when declaring array variables in JS?: To prevent the array reference from being changed!`);

// Nested Arrays
console.log(`Nested Arrays`);
const animalPairs = [['shark', ['orca', 'dolphin']], ['whale', 'octopus'], ['seal', 'sea lion']];
console.log(`animalPairs = ${animalPairs}`); // shark, dolphin, whale, octopus, seal, sea lion
console.log(`animalPairs[0] = ${animalPairs[0]}`); // shark, dolphin
console.log(`animalPairs[1] = ${animalPairs[1]}`); // whale, octopus
console.log(`animalPairs[2] = ${animalPairs[2]}`); // seal, sea lion
console.log(`animalPairs[0][0] = ${animalPairs[0][0]}`); // shark
console.log(`animalPairs[0][1] = ${animalPairs[0][1]}`); // dolphin
console.log(`animalPairs[1][0] = ${animalPairs[1][0]}`); // whale
console.log(`animalPairs[1][1] = ${animalPairs[1][1]}`); // octopus
console.log(`animalPairs[2][0] = ${animalPairs[2][0]}`); // seal
console.log(`animalPairs[2][1] = ${animalPairs[2][1]}`); // sea lion
animalPairs[0][1] = 'orca';
console.log(`animalPairs: ${animalPairs}`); // shark, orca, whale, octopus, seal, sea lion


console.log(`animalPairs: ${animalPairs}`); // shark, orca, dolphin, whale, octopus, seal, sea lion 
console.log(`animalPairs[0][1]: ${animalPairs[0][1]}`); // orca, dolphin
console.log(`animalPairs[0][1][0]: ${animalPairs[0][1][0]}`); // orca
console.log(`animalPairs[0][1][1]: ${animalPairs[0][1][1]}`); // dolphin

console.log(`What is a nested array in JS?: An array that contains other arrays as elements!`);
console.log(`Common scenario use case for nested arrays in JS?: To represent a matrix or a table of data!Also modeling board games like chess or tic-tac-toe!`);
alert(`CLEAR THE CONSOLE BEFORE MOVE TO THE NEXT SECTION!!!!`);
console.clear();

//OBJECTS
console.log(`OBJECTS:`);
console.log(`Objects are collections of properties`);
console.log(`Objects are collections of key-value pairs`);
console.log(`Objects are collections of name-value pairs`);
console.log(`Use a custom key to access the data, rather using an index!`);
console.log(`Objects are mutable`);
console.log(`What is the primary purpose of using objects in JS?: To store and organize data in a structured way! In other words, to create collections of key-value pairs!`);
console.log(`What is a key-value pair in the context of JS objects?: A pair of associated values where one acts as the key, and the other as the value!`);

// Create an object
console.log(`Create an object`);

const fitBitData = {
    totalSteps: 308700,
    totalMiles: 211.2,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '7:13'

};
console.log(`Object = fitBitData: ${fitBitData}`); // {totalSteps: 308700, totalMiles: 211.2, avgCalorieBurn: 5755, workoutsThisWeek: '5 of 7', avgGoodSleep: '7:13'}
console.log(`Object = fitBitData: ${fitBitData.totalSteps}`); // 308700
console.log(`Object = fitBitData: ${fitBitData.totalMiles}`); // 211.2  
console.log(`Object = fitBitData: ${fitBitData.avgCalorieBurn}`); // 5755
console.log(`Object = fitBitData: ${fitBitData.workoutsThisWeek}`); // 5 of 7
console.log(`Object = fitBitData: ${fitBitData.avgGoodSleep}`); // 7:13
console.log(fitBitData); // {totalSteps: 308700, totalMiles: 211.2, avgCalorieBurn: 5755, workoutsThisWeek: '5 of 7', avgGoodSleep: '7:13'}


console.log(`ALL VALID KEYS IN JS ARE AUTOMATICALLY CONVERTED TO STRINGS! THE ONLY EXCEPTION IS SYMBOLS!`);
console.log(`Keys in JS objects are always strings!`);
console.log(`Keys in JS objects are always strings, even if they are not enclosed in quotes!`);
console.log(`Which of the following is the primary syntax for defining a new object in JS?: Curly braces!{}`);
console.log(`How can you access a property in a JS object that uses the dot syntax?: By using the dot operator followed by the property name!`);

//Accessing the data
console.log(`Accessing the data`);

const numObject = {
    100: 'one hundred',
    16: 'sixteen'
};

console.log(numObject); // {100: 'one hundred', 16: 'sixteen'}
console.log(numObject[100]); // one hundred
console.log(numObject[16]); // sixteen
console.log(numObject['100']); // one hundred
console.log(numObject['16']); // sixteen


const palette = {
    red: '#F00',
    green: '#0F0',
    blue: '#00F',
    black: '#000',
    white: '#FFF',
    yellow: '#FF0'
};

console.log(palette); // {red: '#F00', green: '#0F0', blue: '#00F', black: '#000', white: '#FFF'}
console.log(palette.red); // #F00
console.log(palette.green); // #0F0
console.log(palette.blue); // #00F
console.log(palette.black); // #000
console.log(palette.white); // #FFF
console.log(palette['red']); // #F00
console.log(palette['green']); // #0F0
console.log(palette['blue']); // #00F
console.log(palette['black']); // #000
console.log(palette['white']); // #FFF
console.log(palette['yellow']); // #FF0


let mysterycolor = 'yellow';
console.log(palette[mysterycolor]); // #FF0
console.log(palette['yellow']); // #FF0
console.log(palette.yellow); // #FF0
console.log(`palette["bl" + "ue"]: ${palette["bl" + "ue"]}`); // #00F
console.log(`palette["re" + "d"]: ${palette["re" + "d"]}`); // #F00
console.log(`palette["g" + "reen"]: ${palette["g" + "reen"]}`); // #0F0
console.log(`palette["bl" + "ack"]: ${palette["bl" + "ack"]}`); // #000
console.log(`palette["wh" + "ite"]: ${palette["wh" + "ite"]}`); // #FFF
console.log(`palette["ye" + "llow"]: ${palette["ye" + "llow"]}`); // #FF0

console.log(`What happens when you attempt to use a number or a Boolean as a key in a JS object?: The key is automatically converted to a string!`);
console.log(`Which notation is est suited for accessing object properties with dynamic values, such as variables?: Bracket notation!`);


// Updating and Adding Properties
console.log(`Updating and Adding Properties`);

const userReviwes = {};
userReviwes['queenBee49'] = 5.0;
console.log(`userReviwes['queenBee49'] = 5.0: ${userReviwes['queenBee49']}`); // 5.0
console.log(userReviwes); // {queenBee49: 5.0}
userReviwes.mrSmith78 = 4.5;
console.log(`userReviwes.mrSmith78 = 4.5: ${userReviwes.mrSmith78}`); // 4.5
console.log(userReviwes); // {queenBee49: 5.0, mrSmith78: 4.5}

userReviwes['queenBee49'] += 3;
console.log(`userReviwes['queenBee49'] += 3: ${userReviwes['queenBee49']}`); // 8.0
console.log(userReviwes); // {queenBee49: 8.0, mrSmith78: 4.5}  
userReviwes.mrSmith78 += 2;
console.log(`userReviwes.mrSmith78 += 2: ${userReviwes.mrSmith78}`); // 6.5
console.log(userReviwes); // {queenBee49: 8.0, mrSmith78: 6.5}
userReviwes.Luger = 4.0;
console.log(`userReviwes['Luger'] = 4.0: ${userReviwes['Luger']}`); // 4.0
console.log(userReviwes); // {queenBee49: 8.0, mrSmith78: 6.5, Luger: 4.0}
userReviwes['Luger'] += 1;
console.log(`userReviews['Luger'] += 1: ${userReviwes['Luger']}`); // 5.0

console.log(`What is the syntax for adding a new property to an object and assigning it a value in JS?: Using the equal (=) sign = notation.`);
console.log(`Which of the following operations can be used to increment the value of a property in an object?: Using the increment unary operator ++. `);


// Nested arrays & Objects
console.log(`Netsed Arrays & Objects`);

const student = {
    firstName: 'Javor',
    lastName: 'Mladenoff',
    strengths: ['Math', 'Chemistry'],
    exams: {
        midterm: 99.7,
        final: 99.8
    }
};
console.log(`Creating a new object 'student': ${student}`);
console.log(student);
const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(`Average Grade of the student: ${avg}`);

console.log(`To access the element of the array like Chemistry (student.strengths[1]): ${student.strengths[1]}`);

// Another example
console.log(`Another example: shoppingCart`)

const shoppingCart = [
    {
        product: 'Bread',
        price: 2.43,
        quantity: 1
    },
    {
        product: 'Yogurt',
        price: 4.82,
        quantity: 3
    },
    {
        product: 'Milk',
        price: 2.65,
        quantity: 2
    }
];
console.log(shoppingCart);

console.log(`Next example 'game' that demonstrates the usage of arrays to build up an JS Object!`);

const game = {
    player1: {
        username: 'Krondosfire',
        alias: "X"
    },
    player2: {
        username: "Inka",
        alias: "O"
    },
    board: [
        ['0', null, 'X'],
        ['X', '0', 'X'],
        [null, '0', 'X']
    ]
};

console.log(game);

console.log(`Which of the following is an example of a valid JS object with nested data structures?: {name: 'John', age: 30, hobbies: ['reading', 'painting', cooking'], address: {street: '123 Main Str', city: Examplecity}} `);

console.log(`What is the advantage of using nested data structures (objects inside objects or arrays inside objects) in JS?: It improves code readability and organization and allows to create complex data structures!`);

// Objects and Reference Types
console.log(`Objects and Reference Types`);

const palette2 = palette; // Both palette and palette2 point to the same object
console.log(`Objects 'palette' and 'palette2' points to the same reference! This way both object are updated with the same key!`)

palette2.green = '#0f0';
console.log(palette);
console.log(palette2);
console.log(`What is the main characteristic of reference types, such as objects and arrays, in JS?: They reference and point to the values stored in memory`);
console.log(`Why do programmers often use const with reference types, like objects and arrays, in JS?: const ensures that the variables can't be reassigned to a different data type, but we are free to modify the object keys or array values within!`);


// Array & Object Equality
console.log(`Array and Object Equality`);

let nums = [1, 2, 3];
console.log(`Create a new array 'nums': ${nums}`);
let unknown = [1, 2, 3];
console.log(`Create another array that is identical to nums - unknown:${unknown}`);
console.log(`If nums === unknown:${nums === unknown}`);

let moreNums = nums;
console.log(`Each array refers to a different address in memory, so nums is not equal to unknown. But if we define a new array based on the nums: moreNums = nums - now both arrays point to the same memory address!: ${moreNums}`);
console.log(`Then nums === moreNums: ${nums === moreNums}`);

// Another example

console.log(`Another Example:`);

const userN = {
    username: "Krondosfire1976",
    email: 'j.mladenoff@gmail.com',
    notifications: []

};

console.log(`New object 'userN' has been created: ${userN}`);
console.log(userN);
if (userN.notifications.length === 0) {
    console.log('NO NEW NOTIFICATIONS!');
};

console.log(`Which of the following is true when comparing reference types? (Arrays and Objects): Even if Arraya and Objects have the same values, comparing them will yield "false" since we comparing references, not values! `);
console.log(`How can two arrays be made equal in JS when comparing them using triple equals or double equals?: They must containe identical values then converted to a string and compared!`);

alert(`CLEAR THE CONSOLE BEFORE MOVE TO THE NEXT SECTION!!!!`);
console.clear();

console.log(`LOOPS!!!!`);

console.log(`Why is looping considered a key piece in any programming language, like JS?: To allow code to run multiple times for variuos scenarios and conditions, such as going through a set of data!`);
console.log(`What is the main purpose of a game loop?: To keep the game running as long as the user wants to play or until a certain condition set by the programmer is met!`);

// FOR LOOPS
console.log(`FOR loops:`);

for (let i = 1; i <= 10; i += 3) {
    console.log('HELLO:', i);

};

for (let y = 1; y <= 20; y++) {
    console.log(`${y}x${y} = ${y * y}`);
};

for (z = 200; z >= 0; z -= 25) {
    console.log(z);
};

console.log(`What is the main purpose of a for loop in JS?: To enable code to run repeatedly a specified number of times.`);
console.log(`What are three main components of a for loop's syntax in JS?: Variable initialization, logical condition, and update of the variable.`);

// Infinite loops:

console.log(`Infinite loops:`);

console.log(`What is an infinite loop in JS?: A loop that never terminates or stops!`);
console.log(`What can happen if you run code that contains an infinite loop in a web browser?: The browser will become unresponsive, and the system might slow down.`);

// for loops and arrays
console.log(`for loops and arrays:`);

const examScores = [97, 65, 77, 98, 53, 61];
console.log(`Create a new array - examScores: ${examScores}`);
for (let j = 0; j < examScores.length; j++) {
    console.log(j, examScores[j]);
};

const myStudents = [
    {
        firstName: 'Javor',
        grade: 94
    },
    {
        firstName: 'Stefan',
        grade: 98
    },
    {
        firstName: 'Velin',
        grade: 87
    },
    {
        firstName: 'Ivan',
        grade: 56
    },
    {
        firstName: 'Martin',
        grade: 51
    }
];

for (let k = 0; k < myStudents.length; k++) {
    let studentNew = myStudents[k];
    console.log(studentNew);
    console.log(`${studentNew.firstName} scored ${studentNew.grade}`);

};

const word = 'stressed';
let reverseWord = "";
for (let l = word.length - 1; l >= 0; l--) {
    console.log(word[l]);
    reverseWord += word[l];

};
console.log(reverseWord);

let total = 0;
for (let m = 0; m < myStudents.length; m++) {
    let studentNew1 = myStudents[m];
    total += studentNew1.grade;
};

console.log(total);
console.log(`Average score of the students: ${total / myStudents.length} points.`);

console.log(`In the context of for loops and arrays, how do you access individual elements in an array?: By generating an index variable(e.g., l), starting at 0 and using it to access elements by their index!`);
console.log(`What is the purpose of using a loop to calculate the average of a set of values in an array?: To calculate the sum of all values in the array!`);

// Nested loops
console.log(`Nested Loops:`);

for (let c = 1; c <= 10; c++) {
    console.log('Outer Loop:', c);
    for (let d = 10; d >= 0; d -= 2) {
        console.log('  Inner Loop:', d);
    }
}

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;
for (let e = 0; e < gameBoard.length; e++) {
    let row = gameBoard[e];
    console.log(row);
    for (let f = 0; f < row.length; f++) {
        console.log(row[f]);
        totalScore += row[f];
        console.log(`TotalScore:${totalScore}`);
    }
};

console.log(`When using nested for loops, what is the purpose of the outer loop?: To iterate through the rows or subarrayas in the dataset!`);
console.log(`In the context of nested loops, why should variable names be chosen carefully to avoid conflicts?: To prevent possible variable scope issues and to clearly show which index belongs to which loop.`);

// While Loops:
console.log(`While Loops:`);

let g = 0;
while (g <= 10) {
    console.log(g);
    g++;
};

console.log(`What is the primary difference between a for loop and a while loop in JS?: While loops use a condition to determine whether to continue running, whereas for loops use a fixed range!`);
console.log(`When using a while loop, what happens when the condition provided in the loop is no longer true?: The loop terminates, and any code outside the loop runs.`);

const target = Math.floor(Math.random() * 10);
console.log(target);
let guess = Math.floor(Math.random() * 10);
console.log(guess);

while (guess !== target) {
    console.log(`Target: ${target}. Guess: ${guess}.`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}. Guess: ${guess}.`);
console.log(`CONGRATS! YOU HAVE MANAGED TO STOP THE LOOP!`);

console.log(`What is the characteristic of while loops that makes them suitable for scenarios like the guessing game described in the video?: While loops allow for uncertainty in the number of iterations.`);
console.log(`What is the purpose of a loop that repeatedly prompts the user for input in a program or game like the guessing game dscribed in the video?: To provide a way for the user to interact with the program or game.`);

//Break Keyword
console.log(`Break Keyword:`);

for (let h = 0; h < 25; h++) {
    console.log(h);
    if (h === 19) {
        break;
    }
}

while (true) {
    if (target === guess) break;
    console.log(`Target: ${target}. Guess: ${guess}.`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}. Guess: ${guess}.`);
console.log(`CONGRATS! YOU HAVE MANAGED TO STOP THE LOOP!`);

console.log(`What is the purpose of the 'break' keyword in JS?: To break out of the current loop and stop its execution.`);
console.log(`'Break' keyword can be used in for and while loops. Which of the following is a reason why 'break' is less commonly used in a 'for' loop?: A 'for' loop allows for complex mathematical operations on elements!`);

//for ... off loop
console.log(`for ... off loop:`);
console.log(` for (variable of iterable) {statement}`);
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (let j = 0; j < subreddits.length; j++) {
    console.log(subreddits[j]);
}
console.log(`Instead use for ... of loop:`);
for (let sub of subreddits) {
    console.log(sub);
}
for (let char of "neprotivokonstitucionstvayte") {
    console.log(char.toUpperCase());
}

console.log(`What is the primary advantage of using the 'for ... of' loop in JS when iterating over arrays or strings?: It requires less code and provides a cleaner, mkre readable syntax!`);
console.log(`Which of the following is an example of an iterable in JS that can be used with 'for ... of' loop?: Arrays and strings`);

console.log(`Comparing for and for ... of loops:`);

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

console.log(`New Array 'Magic Square': ${magicSquare}`);

for (let k = 0; k < magicSquare.length; k++) {
    let row1 = magicSquare[k];
    let sum1 = 0;
    for (let l = 0; l < row1.length; l++) {
        sum1 += row1[l];
    }
    console.log(`${row1} summed to ${sum1}`);

}

console.log(`The same output but using 'for ... of' loop:`);

for (let row2 of magicSquare) {
    let sum2 = 0;
    for (let num1 of row2) {
        sum2 += num1;
    }
    console.log(`${row2} summed to ${sum2}`);
}

console.log(`Disadvantages of using 'for ... of' loop:`);

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

console.log(`Using a regular for loop:`);

for (q = 0; q < words1.length; q++) {
    console.log(words1[q], words2[q]);
}

console.log(`In which situation would it be more advantageous to use a 'for ... of' loop instead of a traditional 'for' loop in JS?: When working with a two-dimensional array and summing the elements in each row.`);
console.log(`Why might you prefer to use a traditional 'for' loop instead of 'for ... of' loop in JS when iterating over two arrays, such as 'words1' and 'words2', and printing corresponding elements from both arrays?: A 'for ... of' loop does not provide access to indices!`);


console.log(`'for ... of' with objects:`);

console.log(`Set up an object 'movieReviews':`);

const movieReviews1 = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
};
console.log(movieReviews1);

for (let movie of Object.keys(movieReviews1)) {
    console.log(movie, movieReviews1[movie]);
};

const ratings = Object.values(movieReviews1);
console.log(`Ratings: ${ratings}`);
let total1 = 0;
for (let rate of ratings) {
    total1 += rate;
};
total1 /= ratings.length;
console.log(`Average ratings: ${total1}`);

console.log(`When iterating over an object in JS, what methods can be used to access its keys and values for iteration?: Object.keys() and Object.values()`);
console.log(`What is the purpose of using Object.keys and Object.values when iterating over an object in JS?: To extract either the keys or the values from an object!`);

// Functions
console.log(`FUNCTIONS:`);

function signCard() {
    console.log(`Javor E. Mladenoff`);
    console.log(`Software Developer`);
    console.log(`Bel Air, MD 21015`);
}
signCard();

for (let w = 0; w <= 25; w++) {
    signCard();
}

console.log(`What is a function in JS?: A reusable procedure that contains a chunk of code.`);
console.log(`What are the two essential steps in working with functions in JS?: Define the function and execute it!`);

// DICE Roll Function
console.log(`DICE Roll Function:`);

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

rollDie();

function throwDice() {
    for (let u = 1; u <= 6; u++) {
        rollDie();
    };
};

throwDice();

console.log(`What does the Math.floor(Math.random() * 6) expression do in the rollDie function?: It generates random integer between 0 and 5.`);
console.log(`In the throwDice function, what is the purpose of calling rollDice six times?: It simulates rolling a single die six times.`);

// Arguments
console.log(`Arguments:`);

function throwDice(numRolls) {
    for (let u = 1; u <= numRolls; u++) {
        rollDie();
    };
};

throwDice(4);
throwDice(2);
console.log(`What are 'arguments' in the context of JS functions?: They are the inputs to a function when it is called.`);
console.log(`What is the purpose of defining parameters in a JS function?: To customize the behavior of the function by accepting inputs.`);

// Functions with multiple arguments
console.log(`Functions with multiple arguments:`);

console.log(`Example of function that squares the input:`);

function square(num3) {
    console.log(`Squared value of the input ${num3} is ${num3 * num3}`);
}

square(12);

console.log(`Example of function with two parameters:`);

function sum(p, o) {
    console.log(`The sum of ${p} and ${o} is ${p + o}`);

}

sum(82, 36);

function division(s, w) {
    console.log(`The division of ${s} by ${w} is ${s / w}`);
}

division(81, 9);
console.log(`In the context of JS functions, what is the difference between a 'parameter' and an 'argument?: Parameters are the variable names defined within a function, while arguments are the values passed into the function when it is called.`);
console.log(`In a JS function with multiple parameters, what determines the order in which arguments are assigned to the parameters?: The order in which the arguments are passed when calling the function.`);

// Return statement
console.log(`RETURN statement:`);
console.log(`Define new function 'sum1':`);
function sum1(p, o) {
    return p + o;
}

console.log(`The sum1 function returns a value that is captured by some declared variable:`);

const valReturn = sum1(67, 49);

console.log(`The result of the function is now stored in 'valReturn': ${valReturn}`);

console.log(`What is the main difference between printing a value to the console and returning a value from a function in JS?: Printing to the console displays a value in the console only, while returning a value allows you to capture the value in a variable for further use.`);

console.log(`The RETURN statement ends function execution AND specifies the volume to be returned by that function!`);

console.log(`What happens to the execution of a JS function when a return statement is encountered?: The function execution stops immediately and returns the values in the return statement or undefined if no value is returned. The code after the return statement is skipped.`);
console.log(`What is the main advantage of using a return statement in a JS function?: A return statement stops the function and 'captures' the value in the return statement.`);

// Function Challenge 1 - password validator
console.log(`Function Challenge 1 - password validator`);
const username = 'javorM76';
const password2 = 'javor17';
function isValidPassword(password2, username) {
    if (password2.length < 8) {
        return false;
    }
    if (password2.indexOf(' ') !== -1) {
        return false;
    }
    if (password2.indexOf(username) !== -1) {
        return false;
    }
    return true;
}
console.log(`isValidPassword test result: ${isValidPassword('javor17', 'javorM76')}`);
//const username1 = 'Javor179';
//const password1 = 'aJavor42';
console.log(`isValidPassword1 function is the same as isValidPassword function, just shorter`);

function isValidPassword1(password1, username1) {
    if (password1.length < 8 || password1.indexOf(' ') !== -1 || password1.indexOf(username1) !== -1) {
        return false;
    }
    return true;
}

console.log(`isValidPassword1 test result: ${isValidPassword1('JavorMLalabin42', 'JavorML')}`);

console.log(`isValidPassword2 function:`);

function isValidPassword2(password1, username1) {
    const tooShort = password1.length < 8;
    const hasSpace = password1.indexOf(' ') !== -1;
    const tooSimilar = password1.indexOf(username1) !== -1;
    if (tooShort || hasSpace || tooSimilar) return false;
    return true;
}

console.log(`isValidPassword2 test result: ${isValidPassword2('alabin42', 'Javor')}`);


function isValidPassword3(password1, username1) {
    const tooShort = password1.length < 8;
    const hasSpace = password1.indexOf(' ') !== -1;
    const tooSimilar = password1.indexOf(username1) !== -1;
    if (!tooShort && !hasSpace && !tooSimilar) return true;
    return false;
}


console.log(`isValidPassword3 test result: ${isValidPassword3('alabin 42', 'JavorML')}`);


function isValidPassword4(password1, username1) {
    const tooShort = password1.length < 8;
    const hasSpace = password1.indexOf(' ') !== -1;
    const tooSimilar = password1.indexOf(username1) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;

}


console.log(`isValidPassword4 test result: ${isValidPassword4('alabin42', 'JavorML')}`);

console.log(`Which of the following statements accurately describes the behavior of the isValidPassword function in the provided example?: The function returns true if the password meets all of the given requirements.`);
console.log(`In the 'passwordValidator' video is checked the correct length of the password with const tooShort = password.length < 8; How would we change this to accept a password between 6 and 12 characters in length?`);
console.log(`Answer: const correctLength = (password.length >= 6 && password.length <= 12);`);


// Function Challenge 2 - Average
console.log(`Function Challenge 2 - Average`);
function average(arr) {
    let total2 = 0;
    for(let num4 of arr) {
        total2 += num4;
    }
    let result1 = total2 / arr.length;
    return result1;
}

console.log(`Create function average.`);
console.log(`The average of 0 and 50 is ${average([0, 50])}`);
console.log(`The average of 45, 38, 98,72,12 is ${average([45, 38, 98,72,12])}`);

console.log(`What is the main purpose of writing a JavaScript function called average in the Function Challenge 2 example?: To calculate the average value of all the numbers in the array`);
console.log(`How does the provided JS function calculate the average of an array of numbers?: It uses a for ... of loop to add all the numbers and divides the total by the array length.`);

// Function Challenge 3 - Pangrams
console.log(`Function Challenge 3 - Pangrams`);

function isPangram(phrase) {
    let normPhrase = phrase.toLowerCase();
    for(let letter of 'abcdefghiklmnopqrstuvwxyz'){
        //console.log(letter);
        
        if(normPhrase.indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
}

console.log(`Check to see the new function isPangram is working ${isPangram('Javor Mladenoff')}`);

console.log(`Check to see if 'The five boxing wizards jump quickly' is a pangram: ${isPangram('The five boxing wizards jump quickly')}`);
console.log(`Check to see if 'The Five Boxing Wizards Jump quicklY' is a pangram: ${isPangram('The Five Boxing Wizards Jump quicklY')}`);
console.log(`Check to see if 'The five boxing wizards jump quick' is a pangram: ${isPangram('The five boxing wizards jump quick')}`);

function isPangram1(phrase1) {
    let normPhrase1 = phrase1.toLowerCase();
    for(let letter1 of 'abcdefghiklmnopqrstuvwxyz'){
        if(!normPhrase1.includes(letter1)) {
            return false;
        }
    }
    return true;
}

console.log(`Check to see the new function isPangram1 is working ${isPangram1('Javor Mladenoff')}`);

console.log(`Check to see if 'The five boxing wizards jump quickly' is a pangram: ${isPangram1('The five boxing wizards jump quickly')}`);
console.log(`Check to see if 'The Five Boxing Wizards Jump quicklY' is a pangram: ${isPangram1('The Five Boxing Wizards Jump quicklY')}`);
console.log(`Check to see if 'The five boxing wizards jump quick' is a pangram: ${isPangram1('The five boxing wizards jump quick')}`);

console.log(`What is the main objective of writing a JavaScript function called isPangram in the "Function Challenge 3, Pangrams" video?: To identify whether a given sentence contains every letter of the English alphabet at least once.`);
console.log(`In the provided JavaScript function to check for pangrams, how does it account for letter casings in the input sentence?: It converts the input sentence to uppercase and checks against uppercase alphabet letters.`);

// Function Challenge 4 - Get Playing Card
console.log(`Function Challenge 4 - Get Playing Card!`);

function getCard() {
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K' ];
    const cardIdx = Math.floor(Math.random() * values.length);
    const card =  values[cardIdx];

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suitsIdx = Math.floor(Math.random() * suits.length);
    const typeSuit = suits[suitsIdx];
    return {card: card, typeSuit: typeSuit};
    

}

console.log(`Test if the getCard function is working - 1st: ${getCard()}`);
console.log(`Test if the getCard function is working - 2nd: ${getCard()}`);
console.log(`Test if the getCard function is working - 3rd: ${getCard()}`);
console.log(`Test if the getCard function is working - 4th: ${getCard()}`);
console.log(`Test if the getCard function is working - 5th: ${getCard()}`);
console.log(`Test the getCard function with added suits for the card - 1st: ${getCard()}`);
console.log(`Test the getCard function with added suits for the card - 2nd: ${getCard()}`);
console.log(`Test the getCard function with added suits for the card - 3rd: ${getCard()}`);
console.log(`Test the getCard function with added suits for the card - 4th: ${getCard()}`);
console.log(`Test the getCard function with added suits for the card - 5th: ${getCard()}`);

console.log(`Modifying existing getCard function by creating another function that picks random element from an array. The name of the new function is pick.`);

function pick(arr1) {
    const idx2 = Math.floor(Math.random() * arr1.length);
    return arr1[idx2];
}

function getCard1() {
    const values1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K' ];
    const pickCard = pick(values1);

    const suits1 = ['clubs', 'spades', 'hearts', 'diamonds'];
    const typeSuit1 = pick(suits1);
    return {card: pickCard, typeSuit: typeSuit1};
}


console.log(`In the "Function Challenge 4, Get Playing Card" video, what is the main objective of writing the JavaScript function getCard?: To select a random value from a predefined list of values and a random suit from a predefined list of suits, and return them as an object.`);
console.log(`In the provided JavaScript code for generating playing cards, consider the function "pick()": function pick(arr) { const idx = Math.floor(Math.random() * arr.length); return arr[idx]; } Why do we need to call Math.floor() in addition to Math.random()?: To round DOWN the result of (Math.random() * arr.length) to the next whole integer.`);



