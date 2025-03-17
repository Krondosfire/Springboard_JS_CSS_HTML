const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    const index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) {
      // If character is not in the alphabet, append it as is
      encryptedMessage += char;
    } else {
      // Shift the character and preserve case
      const newIndex = (index + shiftValue) % alphabet.length;
      const encryptedChar = alphabet[newIndex];
      encryptedMessage += char === char.toUpperCase()
        ? encryptedChar.toUpperCase()
        : encryptedChar;
    }
  }

  return encryptedMessage;
  
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    const char = encryptedMessage[i];
    const index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) {
      // If character is not in the alphabet, append it as is
      decryptedMessage += char;
    } else {
      // Reverse the shift and preserve case
      const newIndex =
        ((index - shiftValue + alphabet.length) % alphabet.length + alphabet.length) % alphabet.length;
      const decryptedChar = alphabet[newIndex];
      decryptedMessage += char === char.toUpperCase()
        ? decryptedChar.toUpperCase()
        : decryptedChar;
    }
  }

  return decryptedMessage;
}

// Example usage:
const message = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const shiftValue = 42;

const decrypted = decrypt(message, shiftValue);
console.log("Decrypted:", decrypted);
const encrypted = encrypt(decrypted, shiftValue);
console.log("Encrypted:", encrypted);



