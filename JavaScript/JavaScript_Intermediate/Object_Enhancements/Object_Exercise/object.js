window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// Object Property Shorthand

console.log("***********Object Property Shorthand***************");

function makePerson(first, last, age) {
    return {
        first: first,
        last: last,
        age: age,
        isAlive: true
    };
}

console.log("New function 'makePerson()' with parameters 'Javor', 'Mladenoff', '49':", makePerson("Javor", "Mladenoff", 49));

// Shorthand for the above function:

function makeIndividual(first, last, age) {
    return {
        first, last, age,
        isAlive: true
    };
};

console.log("Shorthand to represent the previous function:", makeIndividual('Javor', 'Mladenoff', 49));



// Shorthand methods
console.log(`*****************Shorthand Methods*********************`);

const mathStuff = {
    x: 200,
    add: function(a, b) {
        return a + b;
    },
    square: function(a) {
        return a * a;
    },
    divide: function(a, b) {
        return a / b;
    }

};

console.log("Create a new object 'mathStuff' that includes three functions. First function is add():", mathStuff.add(68, 42));
console.log("square():", mathStuff.square(81));
console.log("divide():", mathStuff.divide(1024, 8));


const mathFuncs = {
    x: 200,
    add(a, b) {
        return a + b;
    },
    square(a) {
        return a * a;
    },
    divide(a, b) {
        return a / b;
    }

};

console.log("Create a shorthand on object 'mathStuff' named 'mathFuncs'. First function is add(68, 42):", mathFuncs.add(68, 42));
console.log("square(81):", mathFuncs.square(81));
console.log("divide(1024, 8):", mathFuncs.divide(1024, 8));

// Computed property names

console.log("*********************Computed Property Names*****************************");

const color = {
    periwinkle: '9c88ff',
    '9c88ff': 'periwinkle'
};

function makeColor(name, hex) {
    const color1 = {};
    color1[name] = hex;
    color1[hex] = name;
    return color1;
};

console.log("ES5:", makeColor('navy', "9b77ff"));

function makeNewColor(name, hex) {
    return {
        [name] : hex,
        [hex] : name
    };
};

console.log("ES2015:", makeNewColor('navy', '9b77ff'));

console.log(`What is the purpose of using shorthand property names in JavaScript object literals?: To avoid typing variable names multiple times.`);
console.log(`Which of the following statements best describes shorthand methods in JavaScript object literals?: They facilitate the concise declaration of object methods directly within the object literal.`);
console.log(`What is the key feature of computed property names in JavaScript object literals?: They allow for the creation of dynamic property names based on variable values.`);
console.log(`What is the primary benefit of using shorthand property names in JavaScript object literals?: Enhanced code readability and reduced redundancy in object creation.`);
console.log(`Which of the following statements accurately describes the usage of arrow functions in computed property names within JavaScript object literals?: Arrow functions are not suitable for use within computed property names due to limitations in property assignment syntax.`);
