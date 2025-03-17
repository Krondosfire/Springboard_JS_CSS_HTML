
console.log(`Caesar's Cipher Reloaded`);
console.log(`*********STEP 0 - initial code:*********`);

const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  console.log(`Best friend: ${friend} with shiftValue ${shiftValue}`);

  console.log(`*********STEP 1 - Create a function named encryptLetter that takes a letter and a shift value as parameters. Returns the encrypted version of the letter*********`);

  function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}
  
 console.log(`Latin Alphabet: ${alphabet}`);
 console.log(`Original letter:'B' becomes ${encryptLetter('B', 3)}`);
 console.log(`Original letter:'R' becomes ${encryptLetter('R', 3)}`);
 console.log(`Original letter:'U' becomes ${encryptLetter('U', 3)}`);
 console.log(`Original letter:'T' becomes ${encryptLetter('T', 3)}`);
 console.log(`Original letter:'U' becomes ${encryptLetter('U', 3)}`);
 console.log(`Original letter:'S' becomes ${encryptLetter('S', 3)}`);
 

console.log(`*********STEP 2 - Create a function named encryptMessage that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.*********`);

function encryptMessage (word, shift)
{
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
  //console.log(encryptedMessage);
}

console.log(`Encrypted form of the name 'BRUTUS' is:${encryptMessage('BRUTUS', 3)}`);

console.log(`*********STEP 3 - Create a function named decryptLetter that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.*********`);

function decryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter);
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

console.log(`Decrypted Letter 'e' to the original ${decryptLetter('e', 3)}`);
console.log(`Decrypted Letter 'u' to the original ${decryptLetter('u', 3)}`);
console.log(`Decrypted Letter 'x' to the original ${decryptLetter('x', 3)}`);
console.log(`Decrypted Letter 'w' to the original ${decryptLetter('w', 3)}`);
console.log(`Decrypted Letter 'x' to the original ${decryptLetter('x', 3)}`);
console.log(`Decrypted Letter 'v' to the original ${decryptLetter('v', 3)}`);

console.log(`*********STEP 4 - Create a function named decryptMessage that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.*********`);

function decryptMessage (word, shift)
{
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}

console.log(`Encrypted name 'euxwxv' decrypts back to: ${decryptMessage('euxwxv', 3)}`);






