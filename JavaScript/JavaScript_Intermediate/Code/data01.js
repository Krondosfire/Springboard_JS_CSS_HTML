// Function to generate a dummy CSV file with numeric data
function generateDummyCSV(numRows, numCols, fileName = 'dummy_data.csv') {
    let csvContent = "";
  
    // Generate header row
    let headerRow = Array.from({ length: numCols }, (_, i) => `Column${i + 1}`).join(',');
    csvContent += headerRow + '\n';
  
    // Generate data rows
    for (let i = 0; i < numRows; i++) {
      let dataRow = Array.from({ length: numCols }, () => Math.random() * 100).join(','); // Numbers between 0 and 100
      csvContent += dataRow + '\n';
    }
  
    // Create a download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  
  // Function to perform descriptive statistics on the CSV data
  function analyzeCSVData(csvString) {
    // Parse CSV string into an array of arrays
    const rows = csvString.split('\n');
    const header = rows[0].split(',');
    const data = rows.slice(1).map(row => row.split(',').map(Number)); // Convert to numbers
  
    const numCols = header.length;
    const numRows = data.length;
  
    // Calculate statistics for each column
    const columnStats = {};
    for (let i = 0; i < numCols; i++) {
      const columnData = data.map(row => row[i]);
  
      // Calculate mean
      const sum = columnData.reduce((a, b) => a + b, 0);
      const mean = sum / numRows;
  
      // Calculate standard deviation
      const squaredDifferences = columnData.map(x => Math.pow(x - mean, 2));
      const variance = squaredDifferences.reduce((a, b) => a + b, 0) / numRows;
      const stdDev = Math.sqrt(variance);
  
      // Find min and max
      const min = Math.min(...columnData);
      const max = Math.max(...columnData);
  
      columnStats[header[i]] = {
        mean: mean,
        stdDev: stdDev,
        min: min,
        max: max,
        count: numRows
      };
    }
  
    return columnStats;
  }
  
  // Example usage:
  
  // 1. Generate the CSV file (this will trigger a download)
  generateDummyCSV(100, 5); // 100 rows, 5 columns
  
  // 2.  To analyze the generated data *without* user interaction (reading a file),
  //  you would need the CSV data as a string.  For a real-world scenario
  //  where a user uploads a CSV file, see the complete example below.
  // Since we just generated it, we can construct a string version immediately:
  
  function generateCSVString(numRows, numCols) {
      let csvContent = "";
  
      // Generate header row
      let headerRow = Array.from({ length: numCols }, (_, i) => `Column${i + 1}`).join(',');
      csvContent += headerRow + '\n';
  
      // Generate data rows
      for (let i = 0; i < numRows; i++) {
          let dataRow = Array.from({ length: numCols }, () => Math.random() * 100).join(','); // Numbers between 0 and 100
          csvContent += dataRow + '\n';
      }
      return csvContent;
  }
  
  const csvDataString = generateCSVString(100, 5);
  const stats = analyzeCSVData(csvDataString);
  console.log(stats); // Output descriptive statistics for each column
  
  // Complete Example with File Input (for reading from user upload)
  // Add an input element to your HTML: <input type="file" id="csvFileInput">
  
  document.getElementById('csvFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const csvString = e.target.result;
        const stats = analyzeCSVData(csvString);
        console.log(stats); // Output descriptive statistics for each column
      };
  
      reader.readAsText(file);
    }
  });
  