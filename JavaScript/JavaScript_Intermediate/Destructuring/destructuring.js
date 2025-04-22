window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

console.log(`****************Destructuring******************`);

const teaOrder = {
    variety : 'oolong',
    teaName : 'winter sprout',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine : true,
    quantity : 3
};

// const {price, quantity, teaName} = teaOrder;

// console.log("Destructuring an object properties {price, quantity, teaName}:", price, quantity, teaName);
const {origin} = teaOrder;
console.log("Destructuring another parameter {origin} of the original object:", origin);
const { price, quantity, teaName, ...others } = teaOrder;
console.log("Destructuring an object properties using the rest operator {price, quantity, teaName, ...others}:", others);

const newTea = {...teaOrder};
console.log("Use of spread operator in the same object:", newTea);

// More destructuring objects

console.log(`************More destructuring objects*****************`);

const { brewTemp = 175 } = teaOrder;
console.log("declaring a new parameter of the existing object {brewTemp}:", brewTemp);
console.log(teaOrder);

const {teaName : chai} = teaOrder;
console.log("Renaming a parameter of an object using destructuring:", chai);

const { brewTemp : temp = 175 } = teaOrder;
console.log("Use destructuring to rename a parameter and set default value for that parameter:", temp);

function checkout(chai) {
    const {quantity, price} = chai;
    return quantity * price;
};

console.log(checkout(teaOrder));

// Array destructuring

console.log(`***************Array Destructuring************************`);

const students = [
    {name: 'Eddie', gpa: 4.6},
    {name: 'Monica', gpa: 4.4},
    {name: 'Velin', gpa: 4.8},
    {name: 'Stefan', gpa: 3.2},
    {name: 'Victor', gpa: 3.9},
    {name: 'Velislava', gpa: 3.8},
    {name: 'Anna', gpa: 4.0},
    {name: 'Valentin', gpa: 2.8}
];

const [topStudent] = students;
console.log(topStudent);

const [ first, second, ...losers] = students;
console.log(losers);

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Bulgaria'];

function awardMedal([gold, silver, bronze]) {
    return {gold, silver, bronze};
};

console.log(awardMedal(longJumpResults));
console.log(awardMedal(swimMeetResults));

// Nested destructuring
console.log(`******************************Nested Destructuring***********************************`);

const movie = {
    Title: 'Amadeus',
    Year: '1984',
    Rated: {
        rating: 'R',
        advisory: 'Rated R for brief nudity'
    },
    Released: '19 Sep 1984',
    Runtime: '160 min',
    Genres: ['Biography', 'Drama', 'History', 'Music'],
    Director: 'Milos Forman',
    Writer: 'Peter Shaffer (original stage play), Peter Shaffer (original screenplay)',
    Actors: 'F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice',
    Plot: "Antonio Salieri believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his piety.",
    Language: 'English, Italian, Latin, German',
    Versions: [
        {version: 'Original Release', runtime: 161},
        {version: "Director's cut", runtime: 180}
    ],
    Country: 'USA, France, Czechoslovakia, Italy',
    Awards: 'Won 8 Oscars. Another 33 wins & 14 nominations',
    Poster: 'https://m.media-amazon.com/images/M/',
    Ratings: [
        {Source: 'Internet Movie Database', Value: '8.3/10'},
        {Source: 'Rotten Tomatoes', Value: '93%'},
        {Source: 'Metacritic', Value: '88/100'}
    ],
    imdbVotes: '346,056',
    imdbID: 'tt0086879',
    Type: 'movie',
    DVD: '16 Dec 1997',
    BoxOffice: 'N/A',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
};

// const {Rated: {rating, advisory}} = movie;
// console.log("rating:", rating,"; advisory:", advisory);
const {Rated: {rating, advisory: note}} = movie;
console.log("Rename advisory to note:", note);

// const {Ratings: [imdb]} = movie;
// console.log("imdb:",imdb);
const {Ratings: [ , imdb]} = movie;
console.log("imdb:",imdb);

const {Ratings: [ , {Value}]} = movie;
console.log("Value:", Value);

const {
    Ratings: [
        {Value: imdbRating},
        {Value: rtRating},
        {Value: metaRating}
    ],
    Versions: [{runtime: originalRunTime}, {runtime: directorCut}]
} = movie;

console.log("Values of imdbRating:", imdbRating, "rtRating:", rtRating, "metaRating:", metaRating);
console.log("Display runtimes - Original Version:", originalRunTime, "Director's cut:", directorCut);



console.log('**************************Destructuring Swap*******************************************');

let delicious = 'Mayonnaise';
let disgusting = 'Wipped Cream';
// let tempVar = delicious;
// delicious = disgusting;
// disgusting = tempVar;



// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

//console.log(both);

[disgusting, delicious] = [delicious, disgusting];

console.log("Swap variables: delicious =", delicious, "; disgusting =", disgusting);


console.log(`What is one of the main benefits of using object destructuring in JavaScript?: It simplifies the process of extracting values from objects.`);
console.log(`When using array destructuring in JavaScript, what determines the value assigned to each variable?: The position of elements in the array.`);
console.log(`What happens if you attempt to destructure a property that does not exist in the object?: The variable is assigned a value of undefined.`);
console.log(`In array destructuring, how can you collect all remaining elements into a new variable?: Use the ... operator before the variable name.`);
console.log(`What is one of the primary advantages of using default values in destructuring assignments?: It prevents the assignment of undefined to variables without a matching property.`);
console.log(`What is one use case for destructuring in JavaScript?: Simplifying code`);
console.log(`What is a potential advantage of nested destructuring?: Handling complex data structures`);
console.log(`How can destructuring be useful when working with functions in JavaScript?: Simplifying parameter lists`);
console.log(`What is one benefit of using destructuring to swap variables?: Avoiding the need for a temporary variable`);
console.log(`Which of the following is NOT a feature of destructuring in JavaScript?: Sorting arrays`);
