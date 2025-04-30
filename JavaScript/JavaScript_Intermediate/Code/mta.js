// Simple CSV parser
function parseCSV(text) {
    const [headerLine, ...lines] = text.trim().split('\n');
    const headers = headerLine.split(',').map(h => h.trim());
    return lines.map(line => {
      const values = line.split(',').map(v => v.trim());
      return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
    });
  }

  // Remove duplicates by key function
  function removeDuplicates(arr, keyFn) {
    const seen = new Set();
    return arr.filter(item => {
      const key = keyFn(item);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  // Group by key
  function groupBy(arr, keyFn) {
    return arr.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }

  // Moving average calculator
  function movingAverage(arr, field, windowSize) {
    return arr.map((item, idx, src) => {
      const window = src.slice(Math.max(0, idx - windowSize + 1), idx + 1);
      const avg = window.reduce((sum, row) => sum + Number(row[field] || 0), 0) / window.length;
      return { ...item, [`${field}_movingAvg`]: avg };
    });
  }

  // Running total calculator
  function runningTotal(arr, field) {
    let total = 0;
    return arr.map(item => {
      total += Number(item[field] || 0);
      return { ...item, [`${field}_runningTotal`]: total };
    });
  }

  document.getElementById('csvFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
      const csvText = evt.target.result;
      let data = parseCSV(csvText);

      // --- Extract: Select columns of interest
      data = data.map(row => ({
        Date: row['Date'],
        SubwayRidership: Number(row['Subways: Total Estimated Ridership']),
        SubwayPctPrePandemic: Number(row['Subways: % of Comparable Pre-Pandemic Day']),
        BusRidership: Number(row['Buses: Total Estimated Ridership']),
        BusPctPrePandemic: Number(row['Buses: % of Comparable Pre-Pandemic Day']),
        LIRRRidership: Number(row['LIRR: Total Estimated Ridership']),
        LIRRPctPrePandemic: Number(row['LIRR: % of Comparable Pre-Pandemic Day']),
        MetroNorthRidership: Number(row['Metro-North: Total Estimated Ridership']),
        MetroNorthPctPrePandemic: Number(row['Metro-North: % of Comparable Pre-Pandemic Day']),
        AccessARidePctPrePandemic: Number(row['Access-A-Ride: % of Comparable Pre-Pandemic Day']),
        BridgesTunnelsTraffic: Number(row['Bridges and Tunnels: Total Traffic']),
        BridgesTunnelsPctPrePandemic: Number(row['Bridges and Tunnels: % of Comparable Pre-Pandemic Day']),
        StatenIslandRailwayRidership: Number(row['Staten Island Railway: Total Estimated Ridership']),
        StatenIslandRailwayPctPrePandemic: Number(row['Staten Island Railway: % of Comparable Pre-Pandemic Day'])
      }));

      // --- Filter example: Dates after 2021-01-01
      const filtered = data.filter(row => new Date(row.Date) >= new Date('2021-01-01'));

      // --- Sort by Date ascending
      const sorted = [...filtered].sort((a, b) => new Date(a.Date) - new Date(b.Date));

      // --- Group/Aggregate: Sum Subway Ridership by Year
      const groupedByYear = groupBy(sorted, row => new Date(row.Date).getFullYear());
      const aggregated = Object.entries(groupedByYear).map(([year, rows]) => ({
        year,
        totalSubwayRidership: rows.reduce((sum, r) => sum + r.SubwayRidership, 0),
        averageBusPctPrePandemic: rows.reduce((sum, r) => sum + r.BusPctPrePandemic, 0) / rows.length
      }));

      // --- Count rows
      const rowCount = data.length;

      // --- Rank years by total subway ridership descending
      const ranked = [...aggregated]
        .sort((a, b) => b.totalSubwayRidership - a.totalSubwayRidership)
        .map((row, idx) => ({ ...row, rank: idx + 1 }));

      // --- Moving average of Subway Ridership (window 7 days)
      const movingAvg = movingAverage(sorted, 'SubwayRidership', 7);

      // --- Running total of Subway Ridership
      const withRunningTotal = runningTotal(sorted, 'SubwayRidership');

      // --- Remove duplicates by Date
      const deduped = removeDuplicates(data, row => row.Date);

      // --- Output results
      const outputContainer = document.getElementById('output');
outputContainer.innerHTML = ''; // Clear previous output

function createSection(title, content) {
  const section = document.createElement('section');
  section.style.marginBottom = '20px';

  const heading = document.createElement('h3');
  heading.textContent = title;
  heading.style.borderBottom = '1px solid #ccc';
  heading.style.paddingBottom = '5px';

  const pre = document.createElement('pre');
  pre.textContent = content;
  pre.style.background = '#f9f9f9';
  pre.style.padding = '10px';
  pre.style.border = '1px solid #ddd';
  pre.style.overflowX = 'auto';

  section.appendChild(heading);
  section.appendChild(pre);
  return section;
}

outputContainer.appendChild(createSection('Sample Extracted Data', JSON.stringify(data.slice(0, 3), null, 2)));
outputContainer.appendChild(createSection('Filtered Data', JSON.stringify(filtered.slice(0, 3), null, 2)));
outputContainer.appendChild(createSection('Sorted Data', JSON.stringify(sorted.slice(0, 3), null, 2)));
outputContainer.appendChild(createSection('Aggregated by Year', JSON.stringify(aggregated, null, 2)));
outputContainer.appendChild(createSection('Row Count', rowCount.toString()));
outputContainer.appendChild(createSection('Ranked Years', JSON.stringify(ranked, null, 2)));
outputContainer.appendChild(createSection('7-day Moving Average (Subway Ridership)', JSON.stringify(movingAvg.slice(0, 7), null, 2)));
outputContainer.appendChild(createSection('Running Total (Subway Ridership)', JSON.stringify(withRunningTotal.slice(0, 7), null, 2)));
outputContainer.appendChild(createSection('Deduplicated Data Sample', JSON.stringify(deduped.slice(0, 3), null, 2)));

      console.log({
        data, filtered, sorted, aggregated, rowCount, ranked, movingAvg, withRunningTotal, deduped
      });
    };
    reader.readAsText(file);
  });