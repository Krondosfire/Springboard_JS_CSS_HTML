const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getRandomLetter() {  // A function that helps with inserting a random letter after every two processed letters (4).
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  
  function encrypt(message, shiftValue) {
    let encryptedMessage = '';
    let charCount = 0;
  
    for (const char of message) {  // The for...of loop iterates over iterable objects like strings, arrays, or sets, providing direct access to individual elements (5).
      // Handle non-alphabet characters directly(1)
      const lowerChar = char.toLowerCase();
      const idx = alphabet.indexOf(lowerChar); //This method is used to find the position of a character in a string. If the character is not found, indexOf() returns -1. (1)
      
      if (idx >= 0) {
        // Calculate new index with shift
        const newIdx = (idx + shiftValue) % alphabet.length; // The remainder operator is used to calculate circular indices, ensuring that values stay within a defined range (3).  
        const encrypted = alphabet[newIdx];
        
        // Preserve original case
        encryptedMessage += char === char.toUpperCase() // It converts a string to uppercase. The comparison char === char.toUpperCase() determines whether the character was originally uppercase (2).
          ? encrypted.toUpperCase() 
          : encrypted;
      } else {
        encryptedMessage += char;
      }
  
      // Insert random letter after every 2 original characters
      if (++charCount % 2 === 0) {  // The Math.random() function generates a random number between 0 and 1. It is scaled to select a random index from the alphabet string (4).
        encryptedMessage += getRandomLetter(); //Strings can be concatenated using the + operator or .concat() method (6). 
      }
    }
  
    return encryptedMessage;
  }




function decrypt(encryptedMessage, shiftValue) {
    let decryptedMessage = '';
    // Convert to string and handle null/undefined input.The String() function is used to safely convert the input to a string, handling null and undefined values(7)
    const safeMessage = String(encryptedMessage || '');
  
    for (let i = 0; i < safeMessage.length; i++) {
      if ((i + 1) % 3 !== 0) { // Skip every third character
        const originalChar = safeMessage[i];
        
        // Guard against empty/undefined characters. 
        if (typeof originalChar !== 'string' || originalChar === '') {
          decryptedMessage += originalChar || '';
          continue;
        }
  
        // Safe case check using optional chaining. The toLowerCase() and toUpperCase() methods are used for case conversion in the decryption process(8, 10).
        const isUpperCase = originalChar?.toUpperCase() === originalChar;
        const lowerChar = originalChar.toLowerCase();
        const idx = alphabet.indexOf(lowerChar); //The indexOf() method is used to find the position of characters in the alphabet string(10)
  
        if (idx >= 0) {
          let newIdx = idx - shiftValue;
          while (newIdx < 0) newIdx += alphabet.length;
          const decryptedChar = alphabet[newIdx % alphabet.length]; //The modulus (%) operator is used for circular shifting within the alphabet, ensuring the index stays within bounds(7)
          decryptedMessage += isUpperCase ? decryptedChar.toUpperCase() : decryptedChar; // The ?. operator is used for safe property access, preventing errors when accessing properties of potentially undefined objects(9, 11).
        } else {
          decryptedMessage += originalChar; // Preserve non-alphabet characters
        }
      }
    }
    return decryptedMessage;
  }
  


const enigma = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const ciphered = decrypt(enigma, 42);
const deciphered = encrypt(ciphered, 42);
console.log(`Decrypted Message: ${ciphered}`);
console.log(`Encrypted Message: ${deciphered}`);