console.log(`Ceasar's Party Guesst List`);
console.log(`*********STEP 0 - Create the guest list*********`);
const guestList = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
console.log(`*********STEP 1 - Add BRUTUS TO THE LIST*********`);
guestList.unshift("BRUTUS");
console.log(`Add Brutus to the begining: ${guestList}`); // Add Brutus to the beginning of the list
console.log(`Verify that Brutus was added to the beginning of the array: ${guestList[0]}`);

console.log(`*********STEP 2 - The arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.*********`);

guestList.push("AUGUSTUS", "LUCIA");
console.log(`Add Augustus and Lucia to the end: ${guestList}`); // Add Augustus and Lucia to the end of the list

console.log(`*********STEP 3 - Check if SPARTACUS is on the list and find out at which position.*********`);

const spartacusIndex = guestList.indexOf("SPARTACUS");
console.log(`spartacusIndex: ${spartacusIndex}`); //-1
console.log(`It seems that Spartacus wasn't invited!`); 

console.log(`*********STEP 4 - Remove CASSIUS from the list*********`);
guestList.splice(guestList.indexOf("CASSIUS"), 1);
console.log(`Remove Cassius from the list: ${guestList}`); // Remove Cassius from the list

console.log(`*********STEP 5 - Send a special invite to the three guests on the list.*********`);
console.log(`Extract three names into a new array: ${guestList.slice(0, 3)}`); // Extract three names into a new array

console.log(`*********STEP 6 - Sort the guest list in alphabetical order. However, Caesar wants his most honored guest (the one added first) to remain at the top of the list. *********`);
const honoredGuests = guestList.slice(0, 1); // Extracts honored guests.
console.log(`Extracted honored guests: ${honoredGuests}`); // Extracted honored guests.

const otherGuests = guestList.slice(1); // Extracts the rest of the guests.
console.log(`Extracted other guests: ${otherGuests}`); // Extracted other guests.

otherGuests.sort(); // Sorts the other guests.
console.log(`Sorted other guests: ${otherGuests}`); // Sorted other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays. 
console.log(`Sorted guests: ${sortedGuests}`); // Sorted guests.


console.log(`See the answer of the questions on index.html`);
    