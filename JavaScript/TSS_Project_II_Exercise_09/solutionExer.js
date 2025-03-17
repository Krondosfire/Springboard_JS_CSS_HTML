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
//console.log(encrypt("Seek the midnight shadow of romulus and remus. There, whisper the word 'aurelius' to the winds. The first to unveil it in our slack channel earns the key to the next quest.", 42));

function decrypt (encryptedMessage, shiftValue)
{
  let decryptedMessage = '';

  for (i = 0; i < encryptedMessage.length; i++){
    if ( (i+1) % 3 != 0) { // ignore random insertions
      const char = encryptedMessage[i].toLowerCase();
      const idx = alphabet.indexOf(char);
      if (idx >= 0) {
          let newIdx = idx - shiftValue;
          while (newIdx < 0) newIdx += alphabet.length; //  avoid negative indexes
          decryptedMessage += alphabet[newIdx % alphabet.length];
      } else {
        decryptedMessage += char;
      } 
    }
  }
  // My decryption code here
  return decryptedMessage;
  
}

//console.log(decrypt("Iufuab jlxuu cwytgdyjwxhj pixdqtoemr edv dheuckjbkzi nqdwt rhuzckqi.o Jmxuphua, wmxpyikfurh ujxxu gmeyhtj 'oqkxhucbyjkil' bjee jvxup mrydltip. aJxgu gvyphicj pjeq kxdlouyxb dyjy yid oekph gibgqsfa ysxoqdqdueb guqbhdfi fjxiu uaudo ujeq jzxum dhunqj agkfuinj.q", 42));

const enigma = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const ciphered = decrypt(enigma, 42);
const deciphered = encrypt(ciphered, 42);
console.log(`Decrypted Message: ${ciphered}`);
console.log(`Encrypted Message: ${deciphered}`);




