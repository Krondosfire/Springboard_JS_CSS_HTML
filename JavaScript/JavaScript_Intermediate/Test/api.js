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

function processData(inputString) {
    console.log("1 st row of code");
    console.log(inputString);
}
console.log(processData("Hello, World!")); // Output: Hello, World!
//console.log(processData(inputString)); // Output: Hello, World!

// function permutData(input) {
//     let lines = input.trim().split('\n');
//     let t = parseInt(lines[0]);
//     let idx = 1;
    
//     for(let test = 0; test < t; test++) {
//         let n = parseInt(lines[idx++]);
//         let a = lines[idx++].split(' ').map(Number);

//         a.sort((a, b) => a - b);

//         let mid = Math.floor(n / 2);

//         // Swap the middle and last element
//         let temp = a[mid];
//         a[mid] = a[n - 1];
//         a[n - 1] = temp;

//         // Reverse the subarray from mid+1 to n-2 (inclusive)
//         let left = mid + 1;
//         let right = n - 2;
//         while (left < right) {
//             temp = a[left];
//             a[left] = a[right];
//             a[right] = temp;
//             left++;
//             right--;
//         }

//         console.log(a.join(' '));
//     }
// }
// console.log(permutData("5\n1 2 3 4 5 6 7"));// Output: 1 2 3 4 5 6 7
// console.log(permutData("2\n1 2")); // Output: 2 1
// console.log(permutData("6\n1 2 3 4 5 6")); // Output: 1 2 3 5 4 6

// console.log(permutData("4\n1 2 3 4")); // Output: 1 2 4 3
// console.log(permutData("3\n1 2 3")); // Output: 1 3 2

function towerBreaker(n, m) {  // If all towers have height 1, no moves can be made, so Player 2 wins.
    // If the number of towers is even, Player 2 can always mirror Player 1's moves and win.
    // Otherwise, Player 1 can win.
    if(m === 1 || n % 2 === 0) {
        return 2; // Player 2 wins if m is 1 or n is even
    } else {
        return 1; // Player 1 wins if m > 1 and n is odd
    }
}
console.log(towerBreaker(3, 2)); // Output: 1

function caesarCipher(s, k) {
    // Normalize k to avoid unnecessary rotations
    k = k % 26;
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char >= 'a' && char <= 'z') {
            // Lowercase letter
            let code = ((char.charCodeAt(0) - 97 + k) % 26) + 97;
            result += String.fromCharCode(code);
        } else if (char >= 'A' && char <= 'Z') {
            // Uppercase letter
            let code = ((char.charCodeAt(0) - 65 + k) % 26) + 65;
            result += String.fromCharCode(code);
        } else {
            // Non-alphabetic character
            result += char;
        }
    }

    return result;
}
console.log(caesarCipher("Hello, World!", 3)); // Output: "Khoor, Zruog!"
console.log(caesarCipher("abcXYZ", 3)); // Output: "defABC"
console.log(caesarCipher("xyz", 3)); // Output: "abc"

function palindromeIndex(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Check if skipping the left character makes a palindrome
            if (isPalindrome(s, left + 1, right)) {
                return left;
            }
            // Check if skipping the right character makes a palindrome
            if (isPalindrome(s, left, right - 1)) {
                return right;
            }
            // No single removal can make it a palindrome
            return -1;
        }
        left++;
        right--;
    }
    // The string is already a palindrome
    return -1;
}

function isPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}
console.log(palindromeIndex("abca")); // Output: 1
console.log(palindromeIndex("racecar")); // Output: -1
console.log(palindromeIndex("abcde")); // Output: -1
console.log(palindromeIndex("a")); // Output: -1


function main() {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank";
    // Declare second integer, double, and String variables.
    var i2;
    var d2;
    var s2;
    // Read and save an integer, double, and String to your variables.
    i2 = parseInt(readLine());
    d2 = parseFloat(readLine());
    s2 = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + i2);

    // Print the sum of the double variables on a new line.
    console.log((d + d2).toFixed(1));
// Concatenate and print the String variables on a new line
    console.log(s + s2);
    // The 's' variable above should be printed first.
}
console.log(main()); // Output: 8, 8.0, HackerRankHelloWorld

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

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Example usage:
  console.log(fibonacci(12)); // Output: 144    

  function findMissingNumber(arr) {
    const n = arr.length + 1; // since one number is missing
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
const arr = [1, 2, 4, 5, 6]; // missing number is 3
console.log(findMissingNumber(arr)); // Output: 3

// Merge two sorted linked lists
console.log(`***********Merge two sorted linked lists**************`);
   
// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
}
}
// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
let dummy = new ListNode(0);
let current = dummy;

while (l1 !== null && l2 !== null) {
    if(l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
    } else {
        current.next = l2;
        l2 = l2.next;
    }
    current = current.next;
}
// Attach the remaining nodes, if any
current.next = l1 !== null ? l1 : l2;
return dummy.next;
}

// Helper function to create a linked list from an array
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for ( let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}


// Helper function to print linked list as array
function listToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Example usage:
let l1 = arrayToList([1, 3, 5]);
let l2 = arrayToList([2, 4, 6]);
let merged = mergeTwoLists(l1, l2);
console.log(listToArray(merged)); // Output: [1, 2, 3, 4, 5, 6]

function isBalanacedParentheses(str) {
    let stack = [];
    for (let char of str) {
        if ( char === '(') {
            stack.push(char);
        } else if(char === ')') {
            if(stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
// Example usage:
console.log(isBalanacedParentheses("(())")); // Output: true
console.log(isBalanacedParentheses("(()")); // Output: false
console.log(isBalanacedParentheses("())(")); // Output: false
console.log(isBalanacedParentheses("()()()")); // Output: true

// Running total calculator
function runningTotal(arr, field) {
    let total = 0;
    return arr.map(item => {
      total += Number(item[field] || 0);
      return { ...item, [`${field}_runningTotal`]: total };
    });
  }

  // Moving average calculator
  function movingAverage(arr, field, windowSize) {
    return arr.map((item, idx, src) => {
      const window = src.slice(Math.max(0, idx - windowSize + 1), idx + 1);
      const avg = window.reduce((sum, row) => sum + Number(row[field] || 0), 0) / window.length;
      return { ...item, [`${field}_movingAvg`]: avg };
    });
  }

  function groupBy(arr, keyFn) {
    return arr.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }

  function removeDuplicates(arr, keyFn) {
    const seen = new Set();
    return arr.filter(item => {
      const key = keyFn(item);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  // Simple CSV parser
function parseCSV(text) {
    const [headerLine, ...lines] = text.trim().split('\n');
    const headers = headerLine.split(',').map(h => h.trim());
    return lines.map(line => {
      const values = line.split(',').map(v => v.trim());
      return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
    });
  }