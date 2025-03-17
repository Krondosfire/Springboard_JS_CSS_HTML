console.log("STEP 1: Generate a decimal number between \n0 (inclusive) and 1 (exclusive) using \nJavaScript's Math functions.");
console.log("*********************************************");
const a = Math.random(); // Generates a random number between 0 and 1
console.log(`The generated random number is: ${a}`);

console.log("*********************************************");
console.log("STEP 2: Determine the desired range of numbers for the secret shift value, which is between 3 and 33.");
console.log("*********************************************");
console.log("QUESTION 1: Why did we add 1 to the difference between 33 and 3?");
console.log("ANSWER: To make sure that both endpoints of the range \n(3 <> 33) are included. => 31 possible numbers.");
console.log("*********************************************");
const b = 33-3+1; // range of the random shift value between 3 and 33
console.log(`Define desired range for the secret shift value. \nRange:  ${b}`);

console.log("*********************************************");
console.log("STEP 3: Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.");
console.log("*********************************************");
console.log("QUESTION 2: How does a * b help us get a number within our desired range?");
console.log("ANSWER: sets the range[0; value of b). This way the decimal will fit the range.");
console.log("*********************************************");
const c = a * b;  // sets the range[0; value of b)
console.log(`Adjusted value that fits into that range: ${c}`);

console.log("*********************************************");
console.log("STEP 4: Round down the decimal number obtained in Step 3 to get a whole integer.");
console.log("*********************************************");
console.log("QUESTION 3: Why do we use the Math.floor() function instead of other rounding methods like Math.round()?");
console.log("ANSWER: Math.floor() function removes the decimal part of the number leaving only the integer. \nMath.round() function rounds the number to the nearest \nvalue lower or higher. For example \nMath.round(5.6) --> 6, but Math.round(5.4) --> 5");
console.log("*********************************************");
const d = Math.floor(c) // converts decimals to integers for the interval (0; b-1)
console.log(`Round the adjusted value: ${d}`);

console.log("*********************************************");
console.log("STEP 5: Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.");
console.log("*********************************************");
console.log("QUESTION 4: How does adding 3 to d-constant ensure that our final e-constant is between 3 and 33?");
console.log("ANSWER: d => falls into the interval 0 and b-1. Adding 3 to this interval shifts the range up --> new interval 3 and 33 inclusive.");
console.log("*********************************************");
const e = d + 3 
console.log(`Shift the range --> value between 3 and 33: ${e}`);
console.log("*********************************************");
console.log("*************BRUTUS HAPPY!*******************");