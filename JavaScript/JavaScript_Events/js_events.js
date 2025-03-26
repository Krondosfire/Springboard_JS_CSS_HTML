window.addEventListener('load', function(){
    console.log(`Content is Fully Loaded!`);
});
console.log(`What is an event?`);
console.log(`DOM events are "actions" that occur as a result of something the user or the browser does.`);
console.log(`CLICK event`);
console.log(`1st method - Inline within the HTML tag`);
// function bodyColorTeal() {
//     document.body.style.backgroundColor = 'teal';
// }

// function bodyColorOrchid() {
//     document.body.style.backgroundColor = 'orchid';
// }

function bodyColor(color) {
    document.body.style.backgroundColor = color;
}


const btn = document.querySelector('#beige');
btn.ondblclick = function() {
    bodyColor('beige');
};


console.log(`addEventListener`);
const orangeBtn = document.querySelector('#orange');
orangeBtn.addEventListener('click', function() {
    bodyColor('orange');
});

console.log(`Load Events`);

document.addEventListener('DOMContentLoaded', function() {
    alert('DOM Content Loaded!')
    const btn1 = document.querySelector('#click');
    btn1.addEventListener('click', function() {
        console.log('Clicked!');
    });
});

console.log(`Event Object`);

const p = document.querySelector('p');
p.addEventListener('click', function(e) {
    console.log(e.pageX);
});

p.addEventListener('mousedown', function(e) {
    console.log(e.type);
});

p.addEventListener('mouseup', function(cactus) {
    console.log(cactus.type);
});
