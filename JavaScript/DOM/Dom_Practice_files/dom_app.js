// getElementsByTagName accepts a string which is the name of an element in the DOM.
console.log(`getElementsByTagName accepts a string which is the name of an element in the DOM.`);
console.log(`It returns a list of all of the elements that match the string passed to the function.`);

console.log(`What do we get back?`);
console.log(`This function returns an HTMLCollection. It looks a lot like an array that can be access it at a specific index or use a for loop.`);

const imgs=document.getElementsByTagName('img');
console.log(`Put all img tags into a variable:${imgs}`);
console.log(imgs);
console.log(`Accessing the elements by index:${imgs.length}`);
console.log(imgs.length);
console.log(`getElementsByClassName`);
console.log(`getElementsByClassName accepts a string which is the name of an element in the DOM`);
console.log(`It returns a list of all of the elements that have a class attribute, which matches the string passed to the function.`);

console.log(`querySelector accepts a string which is a valid CSS selector.`);
console.log(`It returns the first element that matches the CSS selector passed to the function.`);


console.log(`What is the DOM primarily used for in JS?: Manipulating HTML and CSS using JavaScript.`);
console.log(`What does the DOM represent in JS memory?: A model of the content on the webpage`);
console.log(`Which method is used to retrieve an HTML element based on its ID in JS?: getElementById`);
console.log(`What is the role of the document object in the DOM?: It provides access to the DOM elements and their properties`);
console.log(`Which method is used to retrieve an element based on its ID in the DOM?: getElementById`);
console.log(`What does the document.getElementsByTagName method return when invoked?: An HTML collection`);
console.log(`Which method can be used to select elements based on their class name?: getElementsByClassName`);
console.log(`What is the primary advantage of using the querySelector method?: It only returns the first matching element`);
console.log(`Which type of object does the querySelectorAll method return?: Array-like object`);
console.log(`How can you select all h2 elements with the class "section-heading" using querySelector?: document.querySelectorAll('h2.section-heading')`);

// innerText
console.log(`innerText`);
console.log(`const h1 = document.querySelector('h1');`);
console.log(`h1.innerText = "New Text Here!"`);
console.log(`const p = document.querySelector('p')`);
console.log(`p.innerText`);
console.log(`const ol = document.getElementsByTagName('ol')[0]`);
console.log(`const i = document.querySelector('i')`);
console.log(`i.innerText`);
console.log(`const caps = i.innerText.toUpperCase()`);
console.log(`caps`);
function solveTask1()
{
    const h1 = document.getElementsByTagName('h1');
	h1.innerText = "Changed using 'innerText'.";
    const cp = h1.innerText.toUpperCase();
    h1.innerText = cp;
    console.log(cp);
}



