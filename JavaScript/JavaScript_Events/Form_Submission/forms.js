window.addEventListener('load', function(){
    console.log(`Content is Fully Loaded!`);
});

console.log(`To stop the default behavior of an event - use the event.preventDefault() method.`);
const form = document.querySelector('#form');
form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    alert('Your Text Has Been Submitted!');
});

document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Navigation out of this page is disabled!");
});

document.querySelector('input[type="checkbox"]').addEventListener('click', function(ev) {
    ev.preventDefault();
    alert(`This Option is Unavailable!`);
});


const formText = document.querySelector('#textform');
const textInput = document.querySelector('input[name="customtext"');
const colorInput = document.querySelector('input[name="color"');
const fontSizeInput = document.querySelector('input[name="fontsize"');
const output = document.querySelector('#output');

formText.addEventListener('submit', function(ev) {
    ev.preventDefault();
    const genText = makeText(textInput.value, colorInput.value, fontSizeInput.value);
    output.appendChild(genText);
});

function makeText(text, color, size) {
    const outp = document.createElement('h2');
    outp.innerText = text;
    outp.style.color = color;
    outp.style.fontSize = size + 'px';
    return outp;
}