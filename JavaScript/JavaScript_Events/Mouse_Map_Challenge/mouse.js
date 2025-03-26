window.addEventListener('load', function(){
    console.log(`Content is Fully Loaded!`);
});

function bodyColor(color) {
    document.body.style.backgroundColor = color;
};


const btn = document.querySelector('#beige');
btn.ondblclick = function() {
    bodyColor('beige');
};


console.log(`addEventListener`);
const orangeBtn = document.querySelector('#orange');
orangeBtn.addEventListener('click', function() {
    bodyColor('orange');
});

document.addEventListener('mousemove', function(ev) {
    
    const r = Math.round(ev.pageX * 255/ window.innerWidth);
    const g = Math.round((ev.pageX + ev.pageY) * 255 / (window.innerWidth + window.innerHeight));
    const b = Math.round(ev.pageY * 255/ window.innerHeight);
    const color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
    console.log(color);

});


console.log(`WTF?!`);
