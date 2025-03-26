window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

const ul = document.querySelector('#cars');
ul.addEventListener('click', function (event) {
    console.log(event.target.getAttribute('data-id'));
    console.log(event.target.dataset);
    console.log(event.target.dataset.id);
    console.log(event.target.dataset.year);
    console.log(event.target.dataset.model);
    console.log(event.target.dataset.condition);
    console.log(event.target.dataset.color);
});

console.log(`What is the main purpose of JavaScript events in browser-based applications?: To enhance user experience through interactive features.`);
console.log(`Which method is NOT recommended for adding event listeners in JavaScript?: Using inline event handlers in HTML attributes.`);
console.log(`What is the advantage of using addEventListener method over setting event properties directly in JavaScript?: It allows multiple event listeners to be added to the same element without overwriting existing ones.`);
console.log(`What is a common issue for new JavaScript developers when running a script?: Forgetting to wrap the code in a DOMContentLoaded event listener to ensure the DOM is fully loaded before executing the script.`);
console.log(`What does the event object contain when an event handler is triggered?: Information about the event, such as the type of event, the target element, and other relevant data.`);
console.log(`How can the default behavior of a form submission be prevented using JavaScript?: By calling event.preventDefault() in the event handler for the form submission event.`);
console.log(`What event fires when a user types a key and a full key sequence has been pressed?: The 'keydown' event.`);
console.log(`What method is used to dynamically add event listeners to multiple elements with similar patterns efficiently?: event delegation`);
console.log(`What property of the event object is used to identify the specific element that was clicked on when using event delegation?: event.target`);
console.log(`What prefix is used for custom data attributes in HTML elements?: data-`);