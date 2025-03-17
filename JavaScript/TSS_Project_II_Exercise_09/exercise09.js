const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Function to decrypt a message using Caesar cipher
function decrypt(message, shiftValue) {
  if (!message) return ''; // Return empty string if message is undefined or empty
  // ... rest of the function

  let decryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    const index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) {
      // If the character is not in the alphabet, append it as is
      decryptedMessage += char;
    } else {
      // Calculate the new index for decryption
      const newIndex =
        ((index - shiftValue + alphabet.length) % alphabet.length + alphabet.length) % alphabet.length;
      const decryptedChar = alphabet[newIndex];

      // Preserve the original case
      decryptedMessage += char === char.toUpperCase()
        ? alphabet[newIndex].toUpperCase()
        : alphabet[newIndex];
    }
  }

  return decryptedMessage;
}

// Provided encrypted text
const encryptedText =
  "Javor Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";

// Decrypting the text with a shift value of 42
const shiftValue = 42;
const decryptedText = decrypt(encryptedText, shiftValue);

console.log("Decrypted Text:", decryptedText);
