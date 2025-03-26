 window.addEventListener('load', function () {
     console.log(`Content is Fully Loaded!`);
 });

console.log(`Cookie is a small text file stored on your computer by the web browser. It is used to remember information about the user, such as login information, preferences, and other data. Cookies are sent to the server with each request and can be used to track user behavior on the website.`);
console.log(`Cookies are saved in name = value pairs`);

console.log(navigator.cookieEnabled);

document.cookie = 'firsName = Javor; expires=Wed, 31 Dec 2025 23:59:59 GMT; path=/';
document.cookie = 'lastName = Mladenoff; expires=Wed, 31 Dec 2025 23:59:59 GMT; path=/';
console.log(document.cookie);
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const submitBtn = document.querySelector('#submitBtn');
const cookieBtn = document.querySelector('#cookiesBtn');

submitBtn.addEventListener('click', () => {
        setCookie('firstName', firstName.value, 365);
        setCookie('lastName', lastName.value, 365);
        setCookie('email', email.value, 365);
        setCookie('age', age.value, 365);
    });

cookieBtn.addEventListener('click', () => {
    firstName.value = getCookie('firstName');
    lastName.value = getCookie('lastName');
    email.value = getCookie('email');
    age.value = getCookie('age');
});

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;


};

setCookie('email', 'j.mladenoff@gmail.com', 365);
console.log(document.cookie);

function deleteCookie(name) {
    setCookie(name, null, null);
}

deleteCookie('email');
deleteCookie('firsName');
console.log(document.cookie);
setCookie('firsName', 'Javor', 365);
setCookie('citi', 'Sofia', 365);
setCookie('email', 'javormladenoff@gmail.com', 365);
setCookie('age', '48', 365);
console.log(getCookie('firsName'));
console.log(getCookie('lastName'));
console.log(getCookie('age'));
console.log(getCookie('citi'));
console.log(getCookie('email'));

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split('; ');
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) === 0) {
           result = element.substring(name.length + 1);
        }
    })
    return result;
};


console.log(`What is the main purpose of localStorage?: To store data in a browser`);
console.log(`Which method is used to add an item to localStorage?: localStorage.setItem()`);
console.log(`What method is used to convert a JavaScript object into a JSON string for storing in localStorage?: JSON.stringify()`);
console.log(`What method is used to add a cookie in JavaScript?: document.cookie`);
