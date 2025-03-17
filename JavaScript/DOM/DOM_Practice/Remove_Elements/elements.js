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


const h1 = document.querySelector('h1');
const li = document.querySelectorAll('li');
console.log(li);


const newAgenda = document.createElement('li');
console.log(newAgenda);
console.dir(newAgenda);
const c = newAgenda.textContent;
newAgenda.textContent = 'Secure the perimeter';
//newAgenda.textContent = c;
const d = newAgenda.classList.add('class');
console.log(newAgenda);





setInterval(function () {
    
    if(h1.classList.contains('large')) {
        h1.innerText = 'JAVOR';
    } else {
        h1.innerText = 'KRONDOSFIRE';
    }
    h1.classList.toggle('large');
    h1.classList.toggle('small');
    
}, 2000)

//li.classList.toggle('agenda');
//li.classList.toggle('test');

const boldText = document.createElement('b');
const ul = document.querySelector('ul');
console.log(ul);
boldText.textContent = "  DON'T FORGET TO CHECK THE WOODS!";
newAgenda.classList = 'agenda';
newAgenda.append(boldText);
boldText.classList = 'test';
const secondAgenda = document.createElement('li');
secondAgenda.textContent = "Deploy Camp";
secondAgenda.classList = 'class';

ul.append(newAgenda, secondAgenda);

const thirdAgenda = document.createElement('li');
thirdAgenda.textContent = "NAVIGATE TO THE TARGET.";
thirdAgenda.classList = 'agenda completed';
ul.prepend(thirdAgenda);

const newImg = document.createElement('img');
newImg.classList.add('preview');
newImg.setAttribute('src', 'https://microsite-vadoe-prod.s3.amazonaws.com/media/courseware/lesson/image/atom_BEsjA6b.png');
document.body.prepend(newImg);


// Remove - old method
//const removeMe = document.querySelector('#remove-me');

//ul.removeChild(removeMe);

// New method (doesn't work on IE)

const removeMe = document.querySelector('#remove-me');
removeMe.remove();

const r1 = document.querySelectorAll('h1');
console.log(r1);

r1[1].remove();