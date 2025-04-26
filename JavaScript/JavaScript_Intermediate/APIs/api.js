window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// AJAX with Axios

console.log(`*************************AJAX with Axios**********************`);

// console.log(axios);

// https://swapi.info/api/planets

// console.log(response);
// console.log(axios);

// Async/Await with Axios
console.log(`*************************Async/Await with Axios**********************`);

console.log(`AJAX requests are asynchronous`);



async function getData() {
    const response = await axios.get('https://swapi.info/api/planets');
    for (let planet of response.data) {
        console.log(planet.name);
    }

}

getData();
console.log(getData());


async function getRandomDog() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(res.data);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
}

console.log(getRandomDog());

async function getDogByBreed(breed) {
   try {const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
} catch (error) {
    console.log(error)
    alert("BREED NOT FOUND!");
    getRandomDog();
}
}
// console.log(getDogByBreed('bulldog'));
const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener("submit", function (error) {
    error.preventDefault();
    getDogByBreed(input.value);
    input.value = '';
})

