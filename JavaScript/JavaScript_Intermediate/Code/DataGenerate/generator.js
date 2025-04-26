function generateSampleCSV(numRows, numCols, fileName = 'sample.csv') {
  let csvContent = "";

  // Generate header
  let headerRow = Array.from({ length: numCols }, (_, i) => `Column${i + 1}`).join(',');
  csvContent += headerRow + '\n';

  // Generate numeric data rows
  for (let i = 0; i < numRows; i++) {
    let row = Array.from({ length: numCols }, () => (Math.random() * 100).toFixed(2)).join(',');
    csvContent += row + '\n';
  }

  // Create and trigger download
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