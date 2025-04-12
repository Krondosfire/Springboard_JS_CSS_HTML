window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});


// find() method and findIndex() method
console.log(`find() method and findIndex() method`);

const scores = [0, 0, 0, 0, 0, 0, 0, 0, 2, 55, 56, 59, 69, 73, 73,74, 75, 79, 83, 88, 91,93];

let points = scores.find(function(score) {
    return score > 75;
});

console.log(`The first score greater than 75 is ${points}`);

let evenScore = scores.find(function(score) {
    return score !== 0 && score % 2 === 0;
});

console.log(`The first even score is ${evenScore}`);


const evenScores = scores.filter(function(score) {
    return score % 2 === 0;
});

console.log(`The even scores are ${evenScores}`);

const firstEven = scores.findIndex(function(score) {
    return score !== 0 && score % 2 === 0;
});

console.log(`The first even score is at index ${firstEven}`);
console.log(`The first even score is ${scores[firstEven]}`);


function partition(array, pivot) {
    const pivotIdx = array.findIndex(function(element) {
        return element > pivot;
    });
    const left = array.slice(0, pivotIdx);
    const right = array.slice(pivotIdx);
    return [left, right];
};

console.log(partition(scores, 0)); // 0 is the pivot value
console.log(partition(scores, 75)); // 75 is the pivot value


// Creating own find() method and own findIndex() method
console.log(`Creating own find() method and own findIndex() method`);

function myFind(array, callback) {
    for(let i = 0; i < array.length; i ++) {
       if (callback(array[i], i, array) === true) return array[i];
    }
    return 'Nothing found!';
};

const Y = myFind(scores, function(score) {
    return score > 100;
});

console.log(`The first score greater than 100 is ${Y}`);

function myFindIndex(array, callback) {
    for(let i = 0; i < array.length; i ++) {
       if (callback(array[i], i, array) === true) return i;
    }
    return -1;
};

const W = myFindIndex(scores, function(score) {
    return score !== 0 && score % 2 === 0;
});

console.log(`The first even score is at index ${W}`);

//Quiz

console.log(`Which of the following best describes a callback function in JavaScript?: A function that accepts another function as an argument`);
console.log(`What is the primary purpose of the forEach method in JavaScript?: To loop over elements of an array and perform a function on each`);
console.log(`What distinguishes the custom 'myForEach' function from the built-in 'forEach' method in JavaScript?: myForEach' returns a value while 'forEach' always returns undefined`);
console.log(`What does the map method do when applied to an array?: It iterates through the array, executing a callback function on each element, and returns a new array.`);
console.log(`How does the custom implementation of the map method differ from the built-in map method?: The custom method mutates the original array, while the built-in method creates a new array.`);
console.log(`What is the main purpose of the filter method when applied to an array?: It creates a new array containing elements that pass a provided test implemented by a callback function.`);
console.log(`How does the filter method differ from the map method when applied to an array?: It creates a new array containing elements that pass a provided test implemented by a callback function.`);
console.log(`What is the main purpose of the find method when applied to an array?: It returns the first matching element based on a provided callback function.`);
console.log(`What does the findIndex method return when applied to an array?: It returns the index of the first matching element based on a provided callback function.`);
console.log(`How does the custom implementation of the filter method differ from the built-in filter method?: The custom method mutates the original array, while the built-in method creates a new array.`);

console.log(`What is the primary focus of ES2015 as mentioned in the video?: Making developers' lives easier`);
console.log(`What is ECMAScript?: Making developers' lives easier`);
console.log(`Who proposed the standardization of ECMAScript during the browser wars?: Netscape`);
console.log(`What role does ECMA International play in the development of ECMAScript?: Writing specifications for information systems`);
console.log(`How do browsers typically implement new ECMAScript features?: By adhering to the rules specified in ECMAScript documents`);
