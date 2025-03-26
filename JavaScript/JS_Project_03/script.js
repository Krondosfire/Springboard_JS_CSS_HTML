document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form and the container where memes will be displayed
    const memeForm = document.getElementById('memeForm');
    const memeContainer = document.getElementById('memeContainer');

    // Add a submit event listener to the form (2)
    memeForm.addEventListener('submit', function(e) {
        // Prevent the default form submission behavior
        e.preventDefault();
        
        // Get the values from the input fields (2)
        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        const imageUrl = document.getElementById('imageUrl').value;

        // Check if all fields are filled (2)
        if (topText && bottomText && imageUrl) {
            // Create a new meme with the provided information
            createMeme(topText, bottomText, imageUrl);
            // Reset the form fields after successful submission (5)
            memeForm.reset();
        }
    });

    // Function to create and add a new meme to the page (3)
    function createMeme(topText, bottomText, imageUrl) {
        // Create a container div for the meme
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');

        // Create an image element for the meme (3)
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Meme Image';
        // Handle image loading errors
        img.onerror = function() {
            alert('Error loading image. Please check the URL and try again.');
            memeDiv.remove();
        };

        // Create a div for the top text (4)
        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add('meme-text', 'top-text');
        topTextDiv.textContent = topText;

        // Create a div for the bottom text (4)
        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('meme-text', 'bottom-text');
        bottomTextDiv.textContent = bottomText;

        // Create a delete button for the meme (4)
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        // Add click event listener to remove the meme when delete button is clicked (6)
        deleteBtn.addEventListener('click', function() {
            memeDiv.remove();
        });

        // Assemble the meme by appending all elements to the meme container (6)
        memeDiv.appendChild(img);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeDiv.appendChild(deleteBtn);

        // Add the new meme to the top of the meme container (6)
        memeContainer.prepend(memeDiv);
    }
});

console.log("Meme generator script loaded successfully.");

console.log(`*******************************************************************`);

console.log(`REFERENCES`);
console.log(`1. How to build a meme generator with Java Script, https://codepen.io/dcode-software/pen/OJgJdQw `);
console.log(`2. JavaScript Form Validation, https://www.w3schools.com/js/js_validation.asp`);
console.log(`3. Stuck, trying to append meme for my meme generator, https://stackoverflow.com/questions/73198508/stuck-trying-to-append-a-meme-for-my-meme-generator`);
console.log(`4. Mhowitt/meme_generator,https://github.com/Mhowitt/meme_generator`);
console.log(`5. Client-side form validation, https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation`);
console.log(`6. A simple meme generator, Sean Oliver, https://github.com/seanoliver/meme-gen`);
console.log(`7. Developing a Meme Generator with Java Script, CSS and HTML, https://followedapp.com/meme-generator/`);
console.log(`8. Data Validation - How to Check the User Input, https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/`);
console.log(`9. Meme Generator using JavaScript, https://codingtorque.com/meme-generator-using-javascript/`);
