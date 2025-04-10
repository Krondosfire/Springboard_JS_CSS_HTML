window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

const movies = [
	{title: "Inception", director: "Christopher Nolan", yearReleased: 2010},
	{title: "Interstellar", director: "Christopher Nolan", yearReleased: 2014},
	{title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", yearReleased: 1999},
	{title: "Blade Runner 2049", director: "Denis Villeneuve", yearReleased: 2017},
	{title: "The Martian", director: "Ridley Scott", yearReleased: 2015},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014},
	{title: "Arrival", director: "Denis Villeneuve", yearReleased: 2016},
	{title: "Eternal Sunshine of the Spotless Mind", director: "Michel Gondry", yearReleased: 2004},
	{title: "Minority Report", director: "Steven Spielberg", yearReleased: 2002},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014},
	{title: "Some Title", director: "Sam Scot", yearReleased: 2019},
	{title: "Another Title", director: "All Bundy", yearReleased: 1985},
	{title: "Different Title", director: "John Doe", yearReleased: 2024}
];
console.log(movies);

// Array to store result with indices less than 10
const filteredResults = [];

// Use forEach to iterate and filter indices [1][2][3]
movies.forEach(function (movie, index)
               {
	              if(index < 10) {
					filteredResults.push(`Index ${index}: ${movie.title}`);
				  }
               });
console.log({filteredResults}); // Output the filtered array [2][3]

// Append the output to the HTML element with id 'output' [4][5][6]
const outputDiv = document.getElementById("output");
filteredResults.forEach(result => {
	const paragraph = document.createElement("p");
	paragraph.textContent = result;
	outputDiv.appendChild(paragraph);
});