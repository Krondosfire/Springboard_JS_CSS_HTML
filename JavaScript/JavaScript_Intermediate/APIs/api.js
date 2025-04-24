window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// AJAX with Axios

console.log(`*************************AJAX with Axios**********************`);

console.log(axios);

// https://swapi.co/api/planets/
const response = axios.get('https://swapi.co/api/planets/');
console.log(response);
