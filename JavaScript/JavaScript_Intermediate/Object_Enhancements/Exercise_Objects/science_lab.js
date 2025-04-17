window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// Save the original console.log[4][5][6]
const originalConsoleLog = console.log;
// Override console.log
console.log = function(...args) {
// Call the original console.log for browser output
originalConsoleLog.apply(console, args);

    
  // Output to .agenda div [7][8]
  const agendaDiv = document.querySelector('.agenda');
  if (agendaDiv) {
    const message = args.map(arg => {
      if (typeof arg === 'object') {
        try {
          return JSON.stringify(arg, null, 2);
        } catch (e) {
          return '[object]';
        }
      }
      return String(arg);
    }).join(' ');
    agendaDiv.textContent += message + '\n';
  }
};

// Task 1: Compile Participant Details with Shorthand Property Names [1][2][3]
const name = "Dr. Ada";
const age = 34;
const studyField = "Quantum Computing";

const participant = {
  name,
  age,
  studyField
};

console.log(`Participant: ${name}, Age: ${age}, Study Field: ${studyField}`);

// Task 2: Implement a Shorthand Function for Participant Info [1][2][3]
const participantCopy = {
  ...participant,
  displayInfo ()
  {
    console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
  }
};

participantCopy.displayInfo();

// Task 3: Implement a Same Shorthand Arrow Function for Participant Info [1][2][3]
const participantAnotherCopy = {
  ...participant,
  displayInfo: () =>
  {
    console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
  }
};

participantAnotherCopy.displayInfo();

/*
* Observations:
* The arrow function does not have its own `this` context, so it cannot access the participant object properties using `this`.
* Instead, it inherits `this` from the enclosing scope, which in this case is the global scope, leading to undefined values for the properties.
*/

// Task 4: Using Computed Property Names [1][2][3]
function updateParticipantInfo (participant, key, value)
{
  return {
    ...participant,
    [key]: value
  };
}

const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "Quantum Computing Study");
console.log(updatedParticipant);