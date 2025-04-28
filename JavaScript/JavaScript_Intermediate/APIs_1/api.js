window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// Axios POST request
console.log(`*************************Axios POST request**********************`);


async function getUsers() {
    const apiKey = 'reqres-free-v1'; // Replace with your actual key
    const res = await axios.get('https://reqres.in/api/users', {
      headers: {
        'x-api-key': apiKey
      }
    });
    console.log(res.data);
  }
  
  getUsers();

  async function createUsers() {
    const apiKey = 'reqres-free-v1'; // Replace with your actual key
    const userData = {
        name: "Javor Mladenoff",
        job: "Developer"
    };
    const res = await axios.post(
        'https://reqres.in/api/users',
        userData, // This is the request body
        {
            headers: {
                'x-api-key': apiKey
            }
        }
    );
    console.log(res.data);
}

createUsers();



console.log(`What does API stand for?: Application Program Interface`);
console.log(`Which keyword is used to declare a function as asynchronous in JavaScript?: async`);
console.log(`What is the purpose of using Axios in JavaScript?: To simplify making HTTP requests`);
console.log(`Which JavaScript library is built on top of Fetch API?: Axios`);
console.log(`What is the purpose of using the 'await' keyword in an async function?: To wait for a promise to resolve`);
console.log(`What does Axios provide to handle errors in requests?: catch block for error handling`);
console.log(`What method in Axios is used to make a POST request?: axios.post`);
console.log(`What parameter can be used in Axios to add data to the query string of a GET request?: params`);
console.log(`How does Axios handle asynchronous requests in JavaScript?: async/await syntax`);
console.log(`Which HTTP status code indicates that a resource was successfully created in response to a POST request?: 201`);

  
  