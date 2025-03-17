const input = document.querySelector('input');
console.log(input);

input.getAttribute('type');
console.log(input.getAttribute('type'));
console.log(input.getAttribute('placeholder'));

const imgs = document.querySelectorAll('img');

for (let img of imgs) {
    console.log(img.getAttribute('src'))
}


input.setAttribute('placeholder', 'Acknowledge Here');
input.setAttribute('type', 'text');


const src = imgs[0].getAttribute('src');
for (let img of imgs) {
    img.setAttribute('src', src);
}

const quote = document.querySelector('blockquote');
quote.setAttribute('class', 'section-title');

const form = document.querySelector('#muffin-form');
console.log(form.id);

const form1 = document.querySelector('form input');
console.log(form1);
let a = input.value;
a = "Javor Mladenoff";
input.value = a;
console.log(a);

const range = document.querySelector('input[type="range');
console.log(range);
let b = range.value;
b = '1';
range.value = b;
console.log(b);




