console.log(`The Secret Emblem of Ceasar's Invitation`);
console.log(`*********STEP 1 - Decipher the first clue*********`);
const emblemClue1 = "Eagle";
console.log(`Clue1: ${emblemClue1}`);
const emblemClue2 = "Laurel";
console.log(`Clue2: ${emblemClue2}`);
const emblemClue3 = 7;
console.log(`Clue3: ${emblemClue3}`);

let locationStart = "";

if (emblemClue1 === "Eagle")
{
  locationStart = "Forum";
  console.log(`The first location is: ${locationStart}`);
}
else if (emblemClue1 === "Lion")
{
  locationStart = "Colosseum";
    console.log(`The first location is: ${locationStart}`);
}
else
{
  locationStart = "Villa";
    console.log(`The first location is: ${locationStart}`);
};

console.log(`*********STEP 2 - Decipher the second clue*********`);

if (emblemClue2 === "Laurel" && locationStart === "Forum")
    {
      locationStart += " of Augustus";
      console.log(`The second location is: ${locationStart}`);
    }
    else if (emblemClue2 === "Grapes" || locationStart === "Villa")
    {
      locationStart += " of Pompey";
      console.log(`The second location is: ${locationStart}`);
    };

console.log(`*********STEP 3 - Decipher the third clue*********`);
switch (emblemClue3)
{
  case 7:
    locationStart += " North";
    console.log(`The complete location is: ${locationStart}`);
    break;
  case 3:
    locationStart += " South";
    console.log(`The complete location is: ${locationStart}`);
    break;
  case 9:
    locationStart += " East";
    console.log(`The complete location is: ${locationStart}`);
    break;
  case 4:
    locationStart += " West";
    console.log(`The complete location is: ${locationStart}`);
    break;
};


console.log(`See the answer of the question on index.html`);
    