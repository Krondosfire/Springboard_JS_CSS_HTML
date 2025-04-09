window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const map = users.map(function(user) {
    return user.firstName + " " + user.lastName + " has " + user.points + " points";
});

console.log(map); // Output: Array of strings with user information
const newUsers = users.map(function (user)
                           {
	                           return {
		                           fullName: `${user.firstName} ${user.lastName}`,
		                           membershipStatus: user.points > 100 ? "Premium" : "Standard"
	                           };
                           });

console.log(newUsers);
// Output: Array of objects with fullName and membershipStatus properties