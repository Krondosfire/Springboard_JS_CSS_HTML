window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

function hasEnoughFundsToBuy(price, qty, balance) {
    const subtotal = price * qty;
    if(subtotal <= balance) {
        return 'You have enough funds to buy this item.';
    }
    return 'Sorry! You do not have enough funds to buy this item.';
};

console.log(`price = 10, qty = 2, balance = 25: ${hasEnoughFundsToBuy(10, 2, 25)}`); // You have enough funds to buy this item.
console.log(`price = 10, qty = 3, balance = 25: ${hasEnoughFundsToBuy(10, 3, 25)}`); // Sorry! You do not have enough funds to buy this item.


let grades = [99,98,76,54,66,90,81,59];
let sum = 0;
for (let i = 0; i < grades.length; i++){
    
    sum += grades[i];
    console.log(`i : ${i}`);
    console.log(`grades[i] : ${grades[i]}`);
    console.log(`sum : ${sum}`);
}
let average = sum / grades.length;
console.log(`The average of the grades is: ${average}`); // The average of the grades is: 77.875

console.log(`Try & Catch Example`);
try {
    functionThatDoesNotExist(); // This will throw an error because the function is not defined
} catch {
    console.log(`An error occurred! It seems that the function you are trying to call does not exist.`);

}
console.log(`This line of code will still execute after the error was caught.`);
// This line of code will still execute after the error was caught.
// This is because the error was caught and handled gracefully by the catch block.

console.log(`Try & Catch Example without Error Message`);
try {
    25 + 47; // This will not throw an error because it's a valid operation
} catch {
    console.log(`An error occurred!`); // This will not execute because there was no error
}
console.log(`This line of code will still execute after the try block.`);
// This line of code will still execute after the try block.
// This is because there was no error in the try block, so the catch block was not executed.
// The code continues to run as expected.

console.log(`Try & Catch Example with Error Message`);
try {
    functionSomethingInvalid(); // This will not throw an error because it's a valid operation
} catch(error){
    console.log(`An error occurred!`); // This will execute because there was  error
    console.log(error); // This will log the error message to the console, providing more information about what went wrong.
} // This will execute because there was an error in the try block.
console.log(`This line of code will still execute after the try block.`);

try {
    undefined.pop(); // This will not throw an error because it's a valid operation
} catch(error){
    console.log(`An error occurred!`); // This will execute because there was  error
    console.log(error); // This will log the error message to the console, providing more information about what went wrong.
} // This will execute because there was an error in the try block.
console.log(`This line of code will still execute after the try block.`);


try {
    undefined.pop(); // This will not throw an error because it's a valid operation
    let msg = "Test Message!"; // This will not throw an error because it's a valid operation
} catch(error){
    console.log(`An error occurred!`); // This will execute because there was  error
    console.log(error); // This will log the error message to the console, providing more information about what went wrong.
    let msg = "This is a local variable inside the catch block.";
} // This will execute because there was an error in the try block.

console.log(`This line of code will still execute after the try block.`);

function displayInitials(user) {
    let firstNameLetter = user.firstName[0].toUpperCase(); // Get the first letter of the first name and convert it to uppercase
    let lastNameLetter = user.lastName[0].toUpperCase(); // Get the first letter of the last name and convert it to uppercase
    // Return the initials as a string in the format "FL" (e.g. "John Doe" -> "JD")
    return `Hello ${user.firstName}. ${user.lastName}., your initials are: ${firstNameLetter}.${lastNameLetter}.`;
}

displayInitials({ firstName: 'Javor', lastName: 'Mladenoff' }); // This will return "Hello John Doe, your initials are: JD"
console.log(displayInitials({ firstName: 'Javor', lastName: 'Mladenoff' })); // This will return "Hello Javor Mladenoff, your initials are: JM"


function displayInitials_01(user) {
    let firstNameLetter; // Declare a variable to store the first letter of the first name
    let lastNameLetter; // Declare a variable to store the first letter of the last name
    try{
    let firstNameLetter = user.firstName[0].toUpperCase(); // Get the first letter of the first name and convert it to uppercase
    let lastNameLetter = user.lastName[0].toUpperCase(); // Get the first letter of the last name and convert it to uppercase
    } catch(error){
        console.log(`Error Message: ${error}`); // Log the error message to the console
        return `INVALID INPUT`; // Return an error message if there was an error
    }
    // Return the initials as a string in the format "FL" (e.g. "John Doe" -> "JD")
    return `Hello ${user.firstName}. ${user.lastName}., your initials are: ${firstNameLetter}.${lastNameLetter}.`;
}

displayInitials_01({ firstName: 'Javor'}); // This will return "Hello John Doe, your initials are: JD"
console.log(displayInitials_01({ firstName: 'Javor'})); // This will return "Hello Javor Mladenoff, your initials are: JM"

try {
    undefinedLike.pop(); // This will not throw an error because it's a valid operation
    let msg = "Test Message!"; // This will not throw an error because it's a valid operation
} catch(error){
    console.log(`An error occurred!`); // This will execute because there was  error
    console.log(error); // This will log the error message to the console, providing more information about what went wrong.
    let msg = "This is a local variable inside the catch block.";
} // This will execute because there was an error in the try block.
finally {
    // This block of code will always execute, regardless of whether an error was thrown or not
    console.log(`This is the finally block. It always executes after the try and catch blocks.`);
    // You can use this block to perform cleanup operations or log messages to the console.
} // This will execute regardless of whether there was an error in the try block or not.



// try {
//     console.log(`INSIDE TRY`);
//     undefined.pop(); // This will throw an error because undefined does not have a pop method
// } finally {
//     console.log(`INSIDE FINALLY`);
//     // This block of code will always execute, regardless of whether an error was thrown or not
// }
// console.log(`OUTSIDE TRY & FINALLY`);

try {
    console.log(`INSIDE TRY`);
} finally {
    console.log(`INSIDE FINALLY`);
    // This block of code will always execute, regardless of whether an error was thrown or not
}
console.log(`OUTSIDE TRY & FINALLY`);

