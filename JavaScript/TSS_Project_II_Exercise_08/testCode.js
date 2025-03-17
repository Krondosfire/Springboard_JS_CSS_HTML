const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// General function to process letters (used for both encryption and decryption)
function processLetter(letter, shift, operation) {
  const lowerLetter = letter.toLowerCase();
  const index = alphabet.indexOf(lowerLetter);

  // Return unchanged if the character is not in the alphabet
  if (index === -1) return letter;

  // Calculate the new index based on the operation (1 for encryption, -1 for decryption)
  const newIndex = (index + operation * shift + alphabet.length) % alphabet.length;
  const processedChar = alphabet[newIndex];

  // Preserve original case
  return letter === letter.toUpperCase() ? processedChar.toUpperCase() : processedChar;
}

// General function to process messages (used for both encryption and decryption)
function processMessage(word, shift, operation) {
  let resultMessage = "";
  for (let i = 0; i < word.length; i++) {
    resultMessage += processLetter(word[i], shift, operation);
  }
  return resultMessage;
}
console.log(processMessage('BRUTUS', 3, 1));

// Encryption function
function encryptMessage(word, shift) {
  return processMessage(word, shift, 1); // Operation = 1 for encryption
}
console.log(`The function encryptMessage() transforms the name 'BRUTUS' into ${encryptMessage('BRUTUS', 3)}`);
// Decryption function
function decryptMessage(word, shift) {
  return processMessage(word, shift, -1); // Operation = -1 for decryption
}
console.log(`The function decryptMessage() transforms the name 'EUXWXV' back to ${decryptMessage('EUXWXV', 3)}`);
// Example usage
const friend = "BRUTUS";
const shiftValue = 3;

const encrypted = encryptMessage(friend, shiftValue);
console.log(encrypted); // Outputs: "EUXWXV"

const decrypted = decryptMessage(encrypted, shiftValue);
console.log(decrypted); // Outputs: "BRUTUS"
