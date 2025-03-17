const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function encrypt(message, shiftValue) {
  let encryptedMessage = '';
  let charCount = 0;

  for (const char of message) {
    // Handle non-alphabet characters directly
    const lowerChar = char.toLowerCase();
    const idx = alphabet.indexOf(lowerChar);
    
    if (idx >= 0) {
      // Calculate new index with shift
      const newIdx = (idx + shiftValue) % alphabet.length;
      const encrypted = alphabet[newIdx];
      
      // Preserve original case
      encryptedMessage += char === char.toUpperCase() 
        ? encrypted.toUpperCase() 
        : encrypted;
    } else {
      encryptedMessage += char;
    }

    // Insert random letter after every 2 original characters
    if (++charCount % 2 === 0) {
      encryptedMessage += getRandomLetter();
    }
  }

  return encryptedMessage;
}


function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = '';

  for (let i = 0; i < encryptedMessage.length; i++) {
    if ((i + 1) % 3 !== 0) { // Skip every third character (random insertions)
      const originalChar = encryptedMessage[i];
      const lowerChar = originalChar.toLowerCase();
      const idx = alphabet.indexOf(lowerChar);

      if (idx >= 0) {
        // Calculate new index with shift correction
        let newIdx = idx - shiftValue;
        while (newIdx < 0) newIdx += alphabet.length;
        
        // Preserve original case
        const decryptedChar = alphabet[newIdx % alphabet.length];
        decryptedMessage += originalChar === originalChar.toUpperCase()
          ? decryptedChar.toUpperCase()
          : decryptedChar;
      } else {
        // Non-alphabet characters remain unchanged
        decryptedMessage += originalChar;
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
