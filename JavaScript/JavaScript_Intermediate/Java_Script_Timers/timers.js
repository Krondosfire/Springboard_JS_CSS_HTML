window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

function greet() {
    console.log("Hi! You are shitting in the wrong place!");

}
console.log(greet());

function someText() {
    console.log(`This is just stupid!`);
}
function repeatThreeTimes(fn) {
    fn();
    fn();
    fn();
}

console.log(repeatThreeTimes(greet));
console.log(repeatThreeTimes(someText));
console.log(repeatThreeTimes(greet, someText));

function repeat(num, fn) {
    for (let i = 0; i < num; i++) {
        fn();
    }
}
console.log(repeat(5, greet));
console.log(repeat(3, someText));
// console.log(repeat(3, repeatThreeTimes(greet)));



