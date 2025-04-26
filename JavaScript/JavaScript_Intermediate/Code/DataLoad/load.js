document.getElementById('excelFileInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    const data = e.target.result;
    const cleanedData = parseTSVAndClean(data);
    console.log("Cleaned Data:");
    console.table(cleanedData);

    const stats = computeStats(cleanedData);
    displayStatsInConsole(stats);
  };

  reader.onerror = function(e) {
    console.error("Error reading file!", e);
  };

  reader.readAsText(file);
});

// Parse and clean tab-separated values
function parseTSVAndClean(tsvData) {
  const lines = tsvData
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (lines.length === 0) return [];

  const headers = lines[0].split('\t').map(h => h.trim());
  const cleanedRows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t').map(v => v.trim());
    const cleanedValues = values.map(val => {
      if (val === '') return null;
      const num = Number(val);
      return isNaN(num) ? val : num;
    });
    if (cleanedValues.every(v => v === null || v === '')) continue;
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = cleanedValues[idx] !== undefined ? cleanedValues[idx] : null;
    });
    cleanedRows.push(obj);
  }

  return cleanedRows;
}

// Compute mean, median, standard deviation for each numeric column
function computeStats(data) {
  if (!data.length) return {};

  const headers = Object.keys(data[0]);
  const stats = {};

  headers.forEach(header => {
    // Extract numeric values, ignoring nulls and non-numbers
    const nums = data
      .map(row => row[header])
      .filter(val => typeof val === "number" && !isNaN(val));

    if (nums.length === 0) return; // Skip non-numeric columns

    // Mean
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;

    // Median
    const sorted = nums.slice().sort((a, b) => a - b);
    let median;
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      median = sorted[mid];
    }

    // Standard deviation (sample)
    const variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (nums.length - 1);
    const stddev = Math.sqrt(variance);

    stats[header] = {
      count: nums.length,
      mean: mean,
      median: median,
      stddev: stddev
    };
  });

  return stats;
}

// Display stats in the console in a readable format
function displayStatsInConsole(stats) {
  if (!stats || Object.keys(stats).length === 0) {
    console.log("No numeric columns found for statistics.");
    return;
  }
  console.log("Descriptive Statistics (per numeric column):");
  Object.entries(stats).forEach(([col, s]) => {
    console.log(
      `Column: ${col}\n  Count: ${s.count}\n  Mean: ${s.mean}\n  Median: ${s.median}\n  StdDev: ${s.stddev}\n`
    );
  });
  // Also show as a table for convenience
  console.table(stats);
}