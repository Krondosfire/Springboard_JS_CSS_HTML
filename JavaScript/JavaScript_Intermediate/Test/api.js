window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

function plusMinus(arr) {
    const n = arr.length;
    let pos = 0, neg = 0, zero = 0;
    for (let i = 0; i < n; i++) {
        if(arr[i] > 0) pos++;
    else if(arr[i] < 0) neg++;
    else zero++;
}
console.log((pos / n).toFixed(6));
console.log((neg / n).toFixed(6));
console.log((zero / n).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

function minMax(arr) {
    arr.sort((a, b) => a - b);
    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);

    let maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);

    console.log(minSum + " " + maxSum);
}
console.log(minMax([1, 2, 3, 4, 5]));

function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2)); // Extract the hour part

    const rest = s.slice(2, 8); // Extract the rest of the string (minutes, seconds, and AM/PM)
    const ampm = s.slice(8,10); // Extract AM/PM

    if(ampm ==="AM") {
        if(hour === 12) hour = 0; // Convert 12 AM to 00
    } else { // PM case
        if(hour !== 12) hour += 12; // Convert PM hour to 24-hour format
        }

        // Format the hour to always be two digits
        const hourStr = hour.toString().padStart(2, '0');
        return hourStr + rest; // Return the formatted time
    }
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:00:00PM"));
console.log(timeConversion("01:00:00AM"));

function findMedian(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Find the middle index
    const mid = Math.floor(arr.length / 2);

    // Since the problem usually expects an odd-length array,
    // the median is the middle element after sorting
    return arr[mid];
}
console.log(findMedian([1, 2, 3, 4, 5])); // Output: 3

function lonelyInteger(a) {
    return a.reduce((acc, num) => acc ^ num, 0); // XOR all elements
// The result will be the lonely integer
}
console.log(lonelyInteger([1, 2, 3, 2, 1])); // Output: 3
console.log(lonelyInteger([4, 5, 4, 5, 6])); // Output: 6

function diagonalDifference(arr) {
    let primarySum = 0;
    let secondarySum = 0;
    const n = arr.length;

    for(let i = 0; i < n; i++) {
        primarySum += arr[i][i]; // Sum of primary diagonal
        secondarySum += arr[i][n - 1 - i]; // Sum of secondary diagonal
    }
    return Math.abs(primarySum - secondarySum); // Return the absolute difference
}
console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: 0
console.log(diagonalDifference([[10, 2], [13, 4]])); // Output: 7


function countingSort(arr) {
    let freq = Array(100).fill(0); // Initialize frequency array of 100 zeros

    for(let i = 0; i < arr.length; i++) {
        freq[arr[i]]++; // Increment the frequency of the element
    }
    return freq;
}

console.log(countingSort([1, 1, 3, 2, 1, 4])); // Output: [0, 3, 1, 1, 1, 0, ..., 0]
console.log(countingSort([4, 3, 2, 1, 0])); // Output: [1, 1, 1, 1, 1, ..., 0]
console.log(countingSort([0, 0, 0, 0, 0])); // Output: [5, 0, ..., 0]
console.log(countingSort([99, 99, 99, 99, 99])); // Output: [0, ..., 5]

function flippingMatrix(matrix) {
    const n = matrix.length / 2; // Size of the submatrix
    let sum = 0;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            // Calculate the maximum value from the four possible positions
            sum += Math.max(
                matrix[i][j],
                matrix[i][2 * n - 1 - j],
                matrix[2 * n - 1 - i][j],
                matrix[2 * n - 1 - i][2 * n - 1 - j]
            );
            
        }
    }
    return sum;
}
console.log(flippingMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); // Output: 68
console.log(flippingMatrix([[1, 2], [3, 4]])); // Output: 4
console.log(flippingMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: 15
console.log(flippingMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); // Output: 68
