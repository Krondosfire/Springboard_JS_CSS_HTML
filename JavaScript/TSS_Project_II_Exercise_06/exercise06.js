





console.log(`Ceasar's Party Guesst List`);
console.log(`*********STEP 0 - initial guest directory:*********`);

const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };
  console.log(guests);




console.log(`*********STEP 1 - Add "BRUTUS" to the guest directory. He's a "Senator" from "Rome", prefers "Vegan" food, and in the past, he has gifted Caesar a "Silver Dagger" and a "Marble Bust".*********`);

guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  };
  


console.log(`Add Brutus to the directory: ${guests}`); 
console.log(guests);

console.log(`*********STEP 2 - Update CICERO's past gifts to include a "Golden Lyre".*********`);
guests.CICERO.pastGifts.push("Golden Lyre");

console.log(`Update Cicero's gifts: ${guests.CICERO.pastGifts}`); 

console.log(`*********STEP 3 - Retrieve the region of "ANTONY".*********`);
const antonyRegion = guests.ANTONY.region;

console.log(`Antony's region: ${guests.ANTONY.region}`); 


console.log(`*********STEP 4 - Due to unforeseen political events, "CICERO" needs to be discreetly removed from the guest list.*********`);

delete guests.CICERO;


console.log(`Remove Cicero from the list: ${guests}`); 
console.log(guests);

console.log(`*********STEP 5 - Assign ANTONY's profile to a new variable named generalProfile. Then, using this new variable, change the region of ANTONY to "Egypt".*********`);
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

console.log(`Antony got promoted to a general and assigned to Egypt region:${guests.ANTONY}`);
console.log(guests.ANTONY);
console.log(guests);




console.log(`See the answer of the questions on index.html`);
    