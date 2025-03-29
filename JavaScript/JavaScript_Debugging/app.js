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

// console.log(`IAM BEFORE THE ERROR!`);
// throw "I AM THE ERROR!"; // This will throw an error and stop the execution of the code
// console.log(`IAM AFTER THE ERROR!`);
// // This line of code will not execute because the error was thrown above and not caught.


try {
    throw "I AM THE ERROR!"; // This will throw an error and stop the execution of the code
} catch (error) {
    console.log(`Caught an error: ${error}`); // This will catch the error and log it to the console
}
console.log(`IAM AFTER THE ERROR!`);
// This line of code will still execute because the error was caught in the catch block above.
// The code continues to run as expected after the error was caught.

console.log(`Throw an Error Object`);

try {
    throw new Error("I AM AN ERROR OBJECT!"); // This will throw an error object and stop the execution of the code
} catch (error) {
    console.log(`Caught an error: ${error.message}`); // This will catch the error object and log its message to the console
    console.dir(error); // This will log the entire error object to the console, providing more information about the error
    console.log(`What kind of error?: ${error.name}`); // This will log the name of the error to the console (e.g. "Error")
    console.log(`What is the message?: ${error.message}`); // This will log the message of the error to the console (e.g. "I AM AN ERROR OBJECT!")
    console.log(`Where did it happen?: ${error.stack}`); // This will log the stack trace of the error to the console, showing where the error occurred in the code

}


try {
    throw new TypeError("Sucks! Another Error!"); // This will throw an error object and stop the execution of the code
} catch (error) {
    console.log(`Caught an error: ${error.message}`); // This will catch the error object and log its message to the console
    console.dir(error); // This will log the entire error object to the console, providing more information about the error
    console.log(`What kind of error?: ${error.name}`); // This will log the name of the error to the console (e.g. "Error")
    console.log(`What is the message?: ${error.message}`); // This will log the message of the error to the console (e.g. "I AM AN ERROR OBJECT!")
    console.log(`Where did it happen?: ${error.stack}`); // This will log the stack trace of the error to the console, showing where the error occurred in the code

}

function UserExeption(message) {
    this.message = message; // Set the message property of the error object to the provided message
    this.name = "UserExeption"; // Set the name property of the error object to "UserExeption"

}

function getMonthName(mo) {
    if(typeof mo !== 'number') { // Check if the input is not a number
        throw new UserExeption(`Invalid Input: ${mo}. Please provide a valid month number.`); // If not, throw a custom error object with a message
    }
    mo = mo - 1; // Adjust the month number to be zero-based (e.g. January is 0, February is 1, etc.)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // Array of month names
    if(months[mo] !== undefined) { // Check if the month number is valid (i.e. within the range of 0-11)
        return months[mo]; // If valid, return the corresponding month name from the array
    } else { // If the month number is not valid (e.g. less than 1 or greater than 12)
        throw new UserExeption(`Invalid Month Number: ${mo + 1}. Please provide a number between 1 and 12.`); // If not, throw a custom error object with a message
    }
}
getMonthName(10); // This will return "October" because 10 corresponds to October (0-based index)
console.log(getMonthName(10)); // This will log "October" to the console because 10 corresponds to October (0-based index)

try {
    const myMonth = 15; // Set the month number to 15 (which is invalid)
    const monthName = getMonthName(myMonth); // Call the getMonthName function with the invalid month number
} catch (error) { // Catch any errors that were thrown in the try block
    monthName = "Unknown"; // Set the month name to "Unknown" if there was an error
    console.error(`Caught an error: ${error.message}`); // Log the error message to the console
} // This will log the error message to the console if there was an error in the try block

console.log(`What is the purpose of debugging in computer programming?: Locating and fixing coding errors`);
console.log(`What is a common type of error in JavaScript caused by typing something incorrect that the language does not understand?: Syntax Error`);
console.log(`What information in an error message is particularly useful for locating errors in larger codebases?: File name and line number`);
console.log(`What is a recommended approach for debugging when encountering silent bugs in code?:Making and testing assumptions`);
console.log(`What is one of the main advantages of using the JavaScript Debugger tool mentioned in the video?: It allows for efficient debugging by stepping through code line by line`);
console.log(`What is a common issue when comparing arrays and objects in JavaScript?: JavaScript compares arrays and objects based on their memory references`);
console.log(`What is the importance of planning code before writing it, as emphasized in the video?: Planning code simplifies the coding process`);
console.log(`What keyword in JavaScript is used for error handling to prevent the code from crashing?: try/catch`);
console.log(`Which keyword ensures that a piece of code runs regardless of whether an error was thrown or caught?: finally`);
console.log(`When might a developer choose to throw a custom error in JavaScript?: When they anticipate specific issues and want to provide informative feedback`);




