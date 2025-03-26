window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

document.addEventListener("DOMContentLoaded", () => {
    // Step 2: Get elements from the DOM
    const boxContainer = document.getElementById("box-container");
    const newBoxButton = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");
  
    // Step 3: Create variables for box color and counter for box ID
    let boxColor = "black"; // Default color
    let boxCounter = 1;
  
    // Step 4: Control form submission to set a new color
    colorForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
      const newColor = colorInput.value.trim();
      if (newColor) {
        boxColor = newColor; // Update the global box color
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
          box.style.backgroundColor = boxColor; // Update existing boxes' color
        });
        colorInput.value = ""; // Clear the input field
      }
    });
  
    // Step 5: Function to add a new box
    function addNewBox() {
      const box = document.createElement("div"); // Create a new div element
      box.className = "box";
      box.style.backgroundColor = boxColor;
      box.textContent = boxCounter; // Display the ID as content
      box.dataset.id = boxCounter; // Store the ID in a data attribute
      boxCounter++; // Increment the counter for unique IDs
      boxContainer.appendChild(box);
    }
  
    // Step 6: Add a new box when the "New Box" button is clicked 
    newBoxButton.addEventListener("click", addNewBox);
  
    // Step 7: Remove a box on double-click
document.addEventListener("dblclick", function(event) { // Listens for double-click events and removes the target element if it’s a .box
    if (event.target.classList.contains("box")) {
      event.target.remove();
    }
  });
  
  // Step 8: Display a box's page coordinates on hover
  document.addEventListener("mouseover", function(event) { 
    if (event.target.classList.contains("box")) {
      const rect = event.target.getBoundingClientRect(); // Get page coordinates of a hovered element.
      const coordinates = `(${Math.round(rect.left)}, ${Math.round(rect.top)})`;
      event.target.textContent = coordinates;
    }
  });
  
  // Step 9: Display a box's ID back when the mouse leaves
  document.addEventListener("mouseout", function(event) {  // Retrieves and displays the stored ID from data-id when the mouse leaves.
    if (event.target.classList.contains("box")) {
      event.target.textContent = event.target.dataset.id;
    }
  });
  
  // Step 10: Create a new box when the "N" key is pressed
  document.addEventListener("keydown", function(event) { // Listens for N key presses and ensures it doesn’t interfere with typing in the input field.
    if (
      (event.key === "N" || event.key === "n") &&
      document.activeElement !== colorInput
    ) {
      addNewBox();
    }
  });

})
