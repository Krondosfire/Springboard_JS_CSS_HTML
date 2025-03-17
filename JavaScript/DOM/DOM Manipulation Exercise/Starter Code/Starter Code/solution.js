// Task 1
const a = document.getElementById('task1');
console.log(a);

a.innerText = "The old text was replaced using 'innerText'!";


// Task 2
const btn = document.getElementById("task2");
btn.innerHTML = "<button>SUBMIT</button>";

// Task 3

const bckgr = document.body;
bckgr.style.background = '#232323';

// Task 4

const items = document.querySelectorAll('.item');
for( let item of items) {
    item.style.border = '2px solid black';
}

// Task 5

 const link = document.getElementById("task5");
 link.href = "https://www.springboard.com/";

 // Task 6
 const newVal = document.getElementById("task6");
 newVal.value = "DOM Master";

// Task 7

const newClass = document.getElementById("task7");
newClass.classList.add("new-class");

// Task 8

const btn1 = document.createElement("button");
btn1.innerText = "Some Button";
const btn2 = document.getElementById('task8');
btn2.appendChild(btn1);

// Task 9

const removeX = document.getElementById("task9");
removeX.parentNode.removeChild(removeX);

console.log(`What is the main focus of the video "Introduction to DOM Manipulation"?:Exploring advanced CSS styling techniques.`);
console.log(`What is the primary difference between innerText and textContent in JavaScript DOM manipulation?: innerText retrieves all text content, including nested text, while textContent retrieves only the direct text content of an element.`);
console.log(`What does innerHTML allow you to do in JavaScript DOM manipulation?: Access and modify all the contents of a given element, including its HTML markup.`);
console.log(`How can styling be modified using JavaScript?: All of the above`);
console.log(`What happens if you try to modify the style property of multiple elements at once using querySelectorAll?: `);
console.log(`How can you achieve smoother color transitions for each letter in a text using JavaScript?:Apply a transition property to each letter's CSS style `);
console.log(`How can attributes be modified on HTML elements using JavaScript?: By directly accessing attributes using getAttribute and setAttribute.`);
console.log(`What is the difference between accessing attributes using getAttribute and directly accessing attributes like ID and value?: getAttribute retrieves attributes as strings, while direct access properties return values directly.`);
console.log(`What is the advantage of using classList over manipulating the className property directly?: classList provides additional methods like add, remove, toggle, and contains.`);
console.log(`How do you create a new HTML element using JavaScript?: Using createElement method`);
console.log(`Which method is used to remove an element from the DOM in modern JavaScript?: remove`);
console.log(`How can you find the parent element of a given HTML element using JavaScript?: Using parentElement property`);
console.log(`What is the relationship between nodes and elements in the Document Object Model (DOM)?: Every node is an element, but not every element is a node.`);

