function startCountdown(seconds) {
  const countdownElement = document.getElementById('countdown');
  let current = seconds;

  countdownElement.textContent = current;

  const interval = setInterval(() => {
      current--;
      countdownElement.textContent = current;

      if (current <= 0) {
          clearInterval(interval);
          countdownElement.textContent = "Time's up!";
      }
  }, 1000);
}

// Load data from localStorage or use default sample data
let data = JSON.parse(localStorage.getItem('tableData')) || [
  { Name: "Alice", Age: 25, Country: "USA" },
  { Name: "Bob", Age: 30, Country: "UK" },
  { Name: "Charlie", Age: 28, Country: "Canada" }
];

// Function to display the table
function displayTable() {
  if (data.length === 0) {
      document.getElementById('table-container').innerHTML = "<p>No data available.</p>";
      return;
  }
  const headers = Object.keys(data[0]);
  let table = '<table border="1" cellpadding="5" cellspacing="0"><thead><tr>';
  headers.forEach(header => {
      table += `<th>${header}</th>`;
  });
  table += '</tr></thead><tbody>';
  data.forEach(row => {
      table += '<tr>';
      headers.forEach(header => {
          table += `<td>${row[header]}</td>`;
      });
      table += '</tr>';
  });
  table += '</tbody></table>';
  document.getElementById('table-container').innerHTML = table;
}

// Initial table display
displayTable();

// Handle form submission
document.getElementById('add-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value, 10);
  const country = document.getElementById('country').value.trim();
  data.push({ Name: name, Age: age, Country: country });
  displayTable();
  this.reset();
});

// Save data to localStorage
document.getElementById('save_table').addEventListener('click', function() {
  localStorage.setItem('tableData', JSON.stringify(data));
  alert('Table data saved!');
});
