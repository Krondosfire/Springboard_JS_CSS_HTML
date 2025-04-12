window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

function greet() {};  // function declaration

const add = function(x, y) { // function expression
    return x + y;
};


const addArrow = (x, y) => {  // arrow function
    return x + y;
};

console.log(addArrow(4, 7)); // 11

[3, 67, 87, 5, 108, 99, 8, 12].reduce(function(max, currNum) {
    return Math.max(max, currNum);
});

const X = [3, 67, 87, 5, 108, 99, 8, 12].reduce((max, currNum) => {
    return Math.max(max, currNum);
}) 

console.log(X); // 108
