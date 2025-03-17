const agenda = document.querySelectorAll('li');
function toggleAgendas() {
    

    for (let li of agenda) {
        li.classList.toggle('completed');
    }
}


console.log(agenda);
const agenda2 = agenda[2];
console.log(agenda2);
console.log(`'setAttribute('class')' - this will override the class`);
console.log(`'className'-this will give a string representation of the class`);
console.log(`'classList' - this will give an array-like object to add, remove or toggle classes`);
console.log(`An easier way to interact with classes on an element is to use the .classList method`);
console.log(agenda2.classList);
agenda2.classList.add('test');
console.log(`The 'toggle' method of 'classList' switches given class ON & OFF`);
