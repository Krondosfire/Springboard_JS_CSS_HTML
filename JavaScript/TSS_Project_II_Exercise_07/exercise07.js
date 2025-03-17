
console.log(`Meeting Again with Caesar's Best Friend`);
console.log(`*********STEP 0 - initial code:*********`);

const friend = "BRUTUS";
const shiftValue = 3;
  console.log(`Best friend: ${friend} with shiftValue ${shiftValue}`);

  console.log(`*********STEP 1 - Recall the Latin alphabet variable from the previous exercise.*********`);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  console.log(`The alphabet: ${alphabet.toUpperCase()}`);
  

console.log(`*********STEP 2 - Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.*********`);

let encryptedName = "";

        for (let a = 0; a < friend.length; a++) {
          const currentLetter = friend[a];
          console.log(`Current Letter: ${currentLetter}`);
          const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
          console.log(`Current Index: ${currentIndex}`);
          const newIndex = (currentIndex + shiftValue) % alphabet.length;
          console.log(`New Index: ${newIndex}`);
          //console.log(`New Letter: ${encryptedName}`);
          encryptedName += alphabet[newIndex].toUpperCase();
          console.log(`Encoding: ${encryptedName}`);
        }
console.log(`Real Name: ${friend} --> Ecrypted Name: ${encryptedName}`);
console.log(`See the answer of the questions on index.html`);
    