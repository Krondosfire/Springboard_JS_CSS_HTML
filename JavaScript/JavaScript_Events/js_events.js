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

