
//Given
const friend = "BRUTUS";
const shiftValue = 3;
console.log(friend, shiftValue);

// Step 1

const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet);

// Step 2

const firstLetter = friend[0];

console.log(firstLetter);

const index = alphabet.indexOf(firstLetter.toLowerCase());

console.log(index);

// Q1: "B" is the second letter from alphabet, but the result shows 1 instead of 2. Why? Because in JS the first position in a string is alocated to 0. Example: a --> 0, b --> 1, c --> 3, so on.

// Step 3

const new_index = index + shiftValue;
console.log(new_index);
const encryptFirstLetter = alphabet[new_index];
console.log(encryptFirstLetter);

// Q2: Continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?
// A2: The modulus operator, %, helps us wrap around the alphabet. If we try to access an index beyond the length of our alphabet, the modulus operator ensures that the result wraps around starting from 0. 
// For instance, accessing the 28th position (which doesn't exist) would give us an index of 2, corresponding to the third letter, "c". This operator ensures we always get a valid index within the bounds of the alphabet.

const alphabetLength = alphabet.length;


// Step 5
const newerIndex = (index + shiftValue) % alphabetLength;
console.log(newerIndex);
const encryptedFirstLetter = alphabet[newerIndex];
console.log(encryptedFirstLetter);

// Step 6: Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. 
// Extract the first 3 characters from the encrypted message using the slice method. (Assume that the encrypted message is "EUXWXV".)

const encryptedMessage = "EUXWXV";
console.log(encryptedMessage);
const teaserMessage = encryptedMessage.slice(0, 3);
console.log(teaserMessage);



