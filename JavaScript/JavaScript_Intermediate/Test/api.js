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


// function main() {
//     var i = 4;
//     var d = 4.0;
//     var s = "HackerRank";
//     // Declare second integer, double, and String variables.
//     var i2;
//     var d2;
//     var s2;
//     // Read and save an integer, double, and String to your variables.
//     s2 = readLine();
//     i2 = parseInt(readLine());
//     d2 = parseFloat(readLine());
    
//     // Print the sum of both integer variables on a new line.
//     console.log(i + i2);

//     // Print the sum of the double variables on a new line.
//     console.log((d + d2).toFixed(1));
// // Concatenate and print the String variables on a new line
//     console.log(s + s2);
//     // The 's' variable above should be printed first.
// }
// console.log(main()); // Output: 8, 8.0, HackerRankHelloWorld

// function flippingMatrix(matrix) {
//     const n = matrix.length / 2; // Size of the submatrix
//     let sum = 0;

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             // Calculate the maximum value from the four possible positions
//             sum += Math.max(
//                 matrix[i][j],
//                 matrix[i][2 * n - 1 - j],
//                 matrix[2 * n - 1 - i][j],
//                 matrix[2 * n - 1 - i][2 * n - 1 - j]
//             );
            
//         }
//     }
//     return sum;
// }
// console.log(flippingMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); // Output: 68
// console.log(flippingMatrix([[1, 2], [3, 4]])); // Output: 4
// console.log(flippingMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: 15
// console.log(flippingMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); // Output: 68

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

  // Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
  // Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

  function gridChallenge(grid) {
    // Sort each row alphabetically
    const sortedGrid = grid.map(row => {
        return row.split('').sort().join('')
  });

  const numRows = sortedGrid.length;
  if(numRows === 0) return 'YES'; // Edge case for empty grid

    // Check if columns are in ascending order
const numCols = sortedGrid[0].length;

    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows -1; row++) {
            if (sortedGrid[row][col] > sortedGrid[row + 1][col]) {
                return 'NO';
            }
        }
    }
    return 'YES';
  }

// Example usage:
console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])); // Output: YES

// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer.

// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

// For example, the super digit of 9875 will be calculated as:

// 	super_digit(9875)   	9+8+7+5 = 29 
// 	super_digit(29) 	2 + 9 = 11
// 	super_digit(11)		1 + 1 = 2
// 	super_digit(2)		= 2  

function superDigit(n, k) {
    let sum = 0;
    for(const c of n) {
        sum += parseInt(c, 10);
    }
    sum *= k;
    return sum === 0 ? 0 : sum % 9 === 0 ? 9 : sum % 9;
}
// Example usage:
console.log(superDigit("9875", 4)); // Output: 8


// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. 
// Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.
// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

function minimumBribes(q) {
    let bribes = 0;
    const n = q.length;
    for(let i = n - 1; i >= 0; i--) {
        if(q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        const start = Math.max(0, q[i] - 2);
        for(let j = start; j < i; j++) {
            if(q[j] > q[i]) {
                bribes++;
            }
        }
    }
    console.log(bribes);
}

// Example usage:
console.log(minimumBribes([2, 1, 5, 3, 4])); // Output: 3
console.log(minimumBribes([2, 5, 1, 3, 4])); // Output: Too chaotic


// Suppose there is a circle. There are N petrol pumps on that circle. Petrol pumps are numbered 0 to (N-1)(both inclusive).
// You have two pieces of information corresponding to each of the petrol pump: (1) the amount of petrol that particular petrol pump will give, and (2)
// the distance from that petrol pump to the next petrol pump. Initially, you have a tank of infinite capacity carrying no petrol.
// You can start the tour at any of the petrol pumps. Calculate the first point from where the truck will be able to complete the circle.
// Consider that the truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.
// Input format: The first line will contain the value of N. The next N lines will contain a pair of integers each, i.e. the amount of petrol that 
// petrol pump will give and the distance between that petrol pump and the next petrol pump.
// Constraints: 1<=N<=10^5, 1<=amount of petrol, distance<=10^9.
// Output format: An integer which will be the smallest index of the petrol pump from which we can start the tour. 
function truckTour(petrolpumps) {
    let total_tank = 0;
    let curr_tank = 0;
    let start_index = 0;

    for (let i = 0; i < petrolpumps.length; i++) {
        const petrol = petrolpumps[i][0];
        const distance = petrolpumps[i][1];
        total_tank += petrol - distance;
        curr_tank += petrol - distance;

        // If at any point current tank is negative, 
        // we cannot start from start_index, so move start_index to next pump
        if (curr_tank < 0) {
            start_index = i + 1;
            curr_tank = 0;
        }
    }

    // If total petrol is less than total distance, not possible (problem guarantees possible)
    return start_index;
}

// Example usage:
console.log(truckTour([[4, 6], [6, 5], [7, 3], [4, 5]])); // Output: 1
console.log(truckTour([[1, 5], [10, 3], [3, 4]])); // Output: 1
console.log(truckTour([[1, 2], [2, 3], [3, 4]])); // Output: 0
console.log(truckTour([[1, 1], [2, 2], [3, 3]])); // Output: 0




// function processData02(input) {
//     let lines = input.trim().split('\n');
//     let t = parseInt(lines[0]);
//     let idx = 1;
//     for (let test = 0; test < t; test++) {
//         let n = parseInt(lines[idx++]);
//         let a = lines[idx++].split(' ').map(Number);

//         a.sort((a, b) => a - b);

//         let mid = Math.floor((n - 1) / 2); // Correct middle index

//         // Swap the middle and last element
//         let temp = a[mid];
//         a[mid] = a[n - 1];
//         a[n - 1] = temp;

//         // Reverse the subarray from mid+1 to n-1 (inclusive)
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
// console.log(processData02("5\n1 2 3 4 5 6 7")); // Output: 1 2 3 4 5 6 7
// console.log(processData02("2\n1 2")); // Output: 2 1
// console.log(processData02("6\n1 2 3 4 5 6")); // Output: 1 2 3 5 4 6
// console.log(processData02("4\n1 2 3 4")); // Output: 1 2 4 3


// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. 
// Either head pointer may be null meaning that the corresponding list is empty.

// Example
//  headA refers to 1 --> 3 --> 7 --> NULL
//  headB refers to 1 --> 2 --> NULL

// The new list is 1 --> 2 --> 3 --> 7 --> NULL

// Function Description

// Complete the mergeLists function in the editor below.

// mergeLists has the following parameters:

// * SinglyLinkedListNode pointer headA: a reference to the head of a list
// * SinglyLinkedListNode pointer headB: a reference to the head of a list
// Returns

// * SinglyLinkedListNode pointer: a reference to the head of the merged list
// Input Format:
// The first line contains an integer t, the number of test cases.
// The format for each test case is as follows:
// The first line contains an integer n, the length of the first linked list.
// The next n lines contain an integer each, the elements of the linked list.
// The next line contains an integer m, the length of the second linked list.
// The next m lines contain an integer each, the elements of the second linked list.

// Constraints
// 1 <= t <= 10
// 1 <= n, m <= 1000
// 1 <= list[i] <= 1000, where list[i] is the i-th element of the list.

// ---- Utility Classes ----
class SinglyLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
}

// ---- Print Function ----
function printSinglyLinkedList(node, sep = " ") {
    let output = [];
    while (node != null) {
        output.push(node.data);
        node = node.next;
    }
    console.log(output.join(sep));
}

// ---- Merge Function ----
function mergeLists(head1, head2) {
    let dummy = new SinglyLinkedListNode(0);
    let current = dummy;

    while (head1 !== null && head2 !== null) {
        if (head1.data <= head2.data) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next;
    }
    current.next = head1 !== null ? head1 : head2;
    return dummy.next;
}

// ---- Main Function ----
function mainBrowser(inputString) {
    let inputLines = inputString.trim().split('\n');
    let currentLine = 0;
    function readLine() {
        return inputLines[currentLine++];
    }

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);
        let llist1 = new SinglyLinkedList();
        for (let i = 0; i < llist1Count; i++) {
            llist1.insertNode(parseInt(readLine(), 10));
        }

        const llist2Count = parseInt(readLine(), 10);
        let llist2 = new SinglyLinkedList();
        for (let i = 0; i < llist2Count; i++) {
            llist2.insertNode(parseInt(readLine(), 10));
        }

        let llist3 = mergeLists(llist1.head, llist2.head);
        printSinglyLinkedList(llist3, " ");
    }
}

// Example usage:
let head1 = new SinglyLinkedListNode(1);
head1.next = new SinglyLinkedListNode(3);
head1.next.next = new SinglyLinkedListNode(7);
let head2 = new SinglyLinkedListNode(1);
head2.next = new SinglyLinkedListNode(2);
let mergedHead = mergeLists(head1, head2);
console.log(mergedHead); // Output: 1 -> 1 -> 2 -> 3 -> 7 -> NULL
const inputString = `2
3
1
3
7
2
1
2
3
4
5
6
7
3
2
4
`;

mainBrowser(inputString);


// A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from 
// the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added 
// to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

// A basic queue has the following operations:

// * Enqueue: add a new element to the end of the queue.
// * Dequeue: remove the element from the front of the queue and return it.
// In this challenge, you must first implement a queue using two stacks. Then process q queries, where each query is one of the following 3 types:

// 1 x: Enqueue element x into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.
// Input Format:
// The first line contains a single integer, q, denoting the number of queries.
// Each line i of the q subsequent lines contains a single query in the form described in the problem statement above. 
// All three queries start with an integer denoting the query type, but only query 1 is followed by an additional space-separated value, x, 
// denoting the value to be enqueued.
// Constraints:
// 1 <= q <= 10^5
// 1 <= type <= 3
// 1 <= |x| <= 10^9
// It is guaranteed that a valid answer always exists for each query of type 3.

function processData03(input) {
    const lines = input.trim().split('\n');
    const q = parseInt(lines[0]);
    const inStack = [];
    const outStack = [];
    let idx = 1;

    for(let i = 0; i < q; i++) {
        const [type, value] = lines[idx++].split(' ');
        if(type === '1') {
            inStack.push(Number(value));
        } else if(type === '2') {
            if(outStack.length === 0) {
                while(inStack.length) {
                    outStack.push(inStack.pop());
                }
            }
            outStack.pop();
        } else if(type === '3') {
            if(outStack.length === 0) {
                while(inStack.length) {
                    outStack.push(inStack.pop());
                }
            }
            console.log(outStack[outStack.length - 1]);
        }
    }
}


// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a 
//     closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().
    
//     A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced 
//     because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, 
//     (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].
    
//     By this logic, we say a sequence of brackets is balanced if the following conditions are met:
    
//     It contains no unmatched brackets.
//     The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
//     Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. 
//     Otherwise, return NO.
    
//     Function Description:
    
//     Complete the function isBalanced in the editor below.
    
//     isBalanced has the following parameter(s):
    
//     string s: a string of brackets
//     Returns:
    
//     string: either YES or NO
//     Input Format:
    
//     The first line contains a single integer n, the number of strings.
//     Each of the next n lines contains a single string s, a sequence of brackets.
    
//     Constraints:
//     1 <= n <= 10^3
//     1 <= |s| <= 10^3, where |s| is the length of the sequence.
//     All chracters in the sequences ∈ { {, }, (, ), [, ] }.


function isBalanced(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    for(let i = 0; i < s.length; i++) {
        const c = s[i];
        if(c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[c]) {
                return "NO";
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}

// Example usage:
console.log(isBalanced("{[()]}")); // Output: YES
console.log(isBalanced("{[(])}"));// Output: NO

// Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal 
// to the target value. Example: k = 1, arr=[1,2,3,4]
// There are three values that differ by k=1:2-1=1, 3-2=1, and 4-3=1. Return 3.
// Function description: Complete the pairs function below. Pairs has the following parameter(s):
// * int k: an integer, the target value;
// *int arr[n]: an array of integers.
// Returns: int: the number of pairs that satisfy the criterion.
// Input Format: The first line contains two space-separated integers n and k, the size of arr and the target value.
// The second line contains n space-separated integers of the array arr.
// Constraints:
// 2 <= n <= 10^5
// 0 <= k <= 10^9
// 0 < arr[i] <2^31 - 1
// each integer arr[i] will be unique.

function pairs(k, arr) {
    const set = new Set(arr);
    let count = 0;
    for(let num of arr) {
        if(set.has(num + k)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(pairs(1, [1, 2, 3, 4])); // Output: 3

console.log(pairs(2, [1, 3, 5, 7])); // Output: 3
console.log(pairs(3, [1, 4, 7, 10])); // Output: 3
console.log(pairs(0, [1, 2, 3, 4])); // Output: 0
console.log(pairs(1, [1, 2, 3, 4])); // Output: 3
console.log(pairs(2, [9, 3, 5, 7])); // Output: 2
console.log(pairs(3, [1, 4, 7, 10])); // Output: 3
console.log(pairs(4, [1, 5, 9, 13])); // Output: 3

// Objective
// In this challenge, you will work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video.

// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

// Example
// mealCoast = 100
// tipPercent = 15
// taxPercent = 8

// A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value 123 and return from the function.

// Function Description
// Complete the solve function in the editor below.

// solve has the following parameters:

// int meal_cost: the cost of food before tip and tax
// int tip_percent: the tip percentage
// int tax_percent: the tax percentage
// Returns The function returns nothing. Print the calculated value, rounded to the nearest integer.

// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result.

// Input Format

// There are 3 lines of numeric input:
// The first line has a double, mealCoast (the cost of the meal before tax and tip).
// The second line has an integer, tipPercent (the percentage of mealCoast being added as tip).
// The third line has an integer,  taxPercent(the percentage of meal Coast being added as tax).

function solve(meal_cost, tip_percent, tax_percent) {
    const tip = meal_cost * (tip_percent / 100);
    const tax = meal_cost * (tax_percent / 100);
    const totalCost = meal_cost + tip + tax;
    console.log(Math.round(totalCost));
}

// Example usage:
console.log(solve(100, 15, 8)); // Output: 123

console.log(solve(50, 10, 5)); // Output: 58

// Task
// Given an integer, n, perform the following conditional actions:

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

// Input Format

// A single line containing a positive integer, n.

// Constraints
// 1 <= n <= 100
//let inputString = '';
let currentLine = 0;
function readLine() {
    return inputString[currentLine++];
}
function main() {
    const n = parseInt(readLine().trim(), 10);

    if (n % 2 === 1) {
        console.log("Weird");
    } else if (n >= 2 && n <= 5) {
        console.log("Not Weird");
    } else if (n >= 6 && n <= 20) {
        console.log("Weird");
    } else {
        console.log("Not Weird");
    }
}

// Example usage:
console.log(main(3)); // Output: Weird
console.log(main(4)); // Output: Not Weird
console.log(main(6)); // Output: Weird
console.log(main(22)); // Output: Not Weird

// Implement a simple text editor. The editor initially contains an empty string, . Perform  operations of the following 4 types:

// 1. append(W) - Append string S to the end of .
// 2. delete(k) - Delete the last S characters of .
// 3. print k-th - Print the  character of S.
// 4. undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.

// Input Format

// The first line contains an integer, Q, denoting the number of operations.
// Each line i of the Q subsequent lines (where 0 <= i < Q) defines an operation to be performed. 
// Each operation starts with a single integer, t (where t e{1,2,3,4}), denoting a type of operation as defined in the Problem Statement above. 
// If the operation requires an argument, t is followed by its space-separated argument. For example, if t = 1 and W="abcd", line i will be 1 abcd.
// Constraints
// 1 <= Q <= 10^6
// 1 <=k <= |S|
// The sum of the lengths of all W in the input <= 10^6.
// The sum of k over all delete operations <=2*10^6.
// All input characters are lowercase English letters.
// It is guaranteed that the sequence of operations given as input is possible to perform.

function processData04(input) {
    const lines = input.split('\n');
    const Q = parseInt(lines[0], 10);
    let S = '';
    const stack = [];
    
    for (let i = 1; i <= Q; i++) {
        const line = lines[i] ? lines[i].trim() : '';
        if (line === '') continue;
        
        const parts = line.split(' ');
        const op = parseInt(parts[0], 10);
        
        switch (op) {
            case 1: {
                const W = parts.slice(1).join(' ');
                stack.push(S);
                S += W;
                break;
            }
            case 2: {
                const k = parseInt(parts[1], 10);
                stack.push(S);
                S = S.slice(0, S.length - k);
                break;
            }
            case 3: {
                const k = parseInt(parts[1], 10);
                console.log(S[k - 1]);
                break;
            }
            case 4: {
                if (stack.length > 0) {
                    S = stack.pop();
                }
                break;
            }
        }
    }
}

// Example usage:
console.log(processData04("8\n1 abc\n1 def\n3 2\n2 3\n1 xyz\n3 4\n4\n3 2")); // Output: b, d, c
console.log(processData04("5\n1 ab\n1 cd\n3 2\n2 2\n3 1")); // Output: b, a
console.log(processData04("4\n1 hello\n3 1\n2 2\n3 1")); // Output: h, l
console.log(processData04("6\n1 abc\n1 def\n3 2\n2 3\n1 xyz\n3 4")); // Output: b, d, c


// You have an infinite number of 4 types of lego blocks of sizes given as (depth x height x width):

// d	h	w
// 1	1	1
// 1	1	2
// 1	1	3
// 1	1	4
// Using these blocks, you want to make a wall of height n and widthm . Features of the wall are:

// - The wall should not have any holes in it.
// - The wall you build should be one solid structure, so there should not be a straight vertical break across all rows of bricks.
// - The bricks must be laid horizontally.

// How many ways can the wall be built?

// Example
// n = 2
// m = 3


// The height is 2 and the width is 3. There are 9 valid permutations in all.
// Function Description

// Complete the legoBlocks function in the editor below.

// legoBlocks has the following parameter(s):

// int n: the height of the wall
// int m: the width of the wall
// Returns
// - int: the number of valid wall formations modulo (10^9 + 7)

// Input Format

// The first line contains the number of test cases t.

// Each of the next t lines contains two space-separated integers n and m.

// Constraints
// 1 <= t <= 100
// 1 <= n,m <= 1000

function legoBlocks(n, m) {
    const MOD = 1000000007n;

    // Step 1: ways to build a single row of width w
    const row_ways = Array(m + 1).fill(0n);
    row_ways[0] = 1n;
    for (let w = 1; w <= m; w++) {
        for (let brick = 1; brick <= 4; brick++) {
            if (w - brick >= 0) row_ways[w] = (row_ways[w] + row_ways[w - brick]) % MOD;
        }
    }

    // Step 2: all possible walls (not necessarily solid)
    const all_walls = Array(m + 1).fill(0n);
    all_walls[0] = 1n;
    for (let w = 1; w <= m; w++) {
        all_walls[w] = powmod(row_ways[w], BigInt(n), MOD);
    }

    // Step 3: Inclusion-Exclusion for solid walls
    const solid = Array(m + 1).fill(0n);
    solid[0] = 1n;
    for (let w = 1; w <= m; w++) {
        let temp = all_walls[w];
        for (let k = 1; k < w; k++) {
            temp = (temp - (solid[k] * all_walls[w - k]) % MOD + MOD) % MOD;
        }
        solid[w] = temp;
    }
    return Number(solid[m]);

    // Fast modular exponentiation with BigInt
    function powmod(a, b, mod) {
        let res = 1n;
        let base = a % mod;
        while (b > 0) {
            if (b % 2n === 1n) res = (res * base) % mod;
            base = (base * base) % mod;
            b = b / 2n;
        }
        return res;
    }
}



// Example usage:
console.log(legoBlocks(2, 3)); // Output: 9
console.log(legoBlocks(1, 1)); // Output: 1
console.log(legoBlocks(2, 2)); // Output: 4
console.log(legoBlocks(3, 3)); // Output: 27
console.log(legoBlocks(4, 4)); // Output: 256
console.log(legoBlocks(5, 5)); // Output: 3125

// Jesse loves cookies and wants the sweetness of some cookies to be greater than value k. 
// To do this, two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:
// sweetness =(1 * Least sweet cookie + 2 * 2nd least sweet cookie).
// This occurs until all the cookies have a sweetness >= k.
// Given the sweetness of a number of cookies, determine the minimum number of operations required. If it is not possible, return -1.
// Example: k = 9; A = [2,7,3,6,4,6]
// The smallest values are 2,3.
// Remove them then return 2 + 2 * 3 = 8 to the array. Now A = [8,7,6,4,6].
// Remove 4,6 and return 4 + 6 * 2 = 16 to the array. Now A = [16,8,7,6].
// Remove 6,7, return 6 + 2 * 7 = 20 and A = [20,16,8,7].
// Finally, remove 8,7 and return 7 + 2 * 8 = 23 to A. Now A = [23,20,16].
// All values are >= k = 9 so the process stops after 4 iterations. Return 4.
// Function Description:
// Complete the cookies function in the editor below.
// cookies has the following parameters:
// int k: the threshold value
// int A[n]: an array of sweetness values
// Returns:
// int: the number of iterations required or 
// Input Format:
// The first line has two space-separated integers,  and , the size of  and the minimum required sweetness respectively.
// The next line contains  space-separated integers, .
// Constraints:
// 1 <= n <= 10^6
// 0 <= k <= 10^9
// 0 <= A[i] <= 10^6

class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    push(val) {
        this.heap.push(val);
        this._siftUp();
    }
    pop() {
        if (this.size() === 0) return undefined;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this._siftDown();
        }
        return min;
    }
    _siftUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }
    _siftDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;
            if (leftChildIdx < length) {
                if (this.heap[leftChildIdx] < element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                if (
                    (swap === null && this.heap[rightChildIdx] < element) ||
                    (swap !== null && this.heap[rightChildIdx] < this.heap[leftChildIdx])
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}

function cookies(k, A) {
    const heap = new MinHeap();
    for (let x of A) heap.push(x);

    let ops = 0;
    while (heap.size() > 1 && heap.peek() < k) {
        let least = heap.pop();
        let second = heap.pop();
        let combined = least + 2 * second;
        heap.push(combined);
        ops++;
    }
    return heap.peek() >= k ? ops : -1;
}

// Example usage:
console.log(cookies(9, [2, 7, 3, 6, 4, 6])); // Output: 4
console.log(cookies(10, [1, 2, 3, 4])); // Output: 3
console.log(cookies(5, [1, 1, 1, 1])); // Output: -1

// Consider an undirected graph where each edge weighs 6 units. Each of the nodes is labeled consecutively from 1 to n.
// You will be given a number of queries. For each query, you will be given a list of edges describing an undirected graph.
// After you create a representation of the graph, you must determine and report the shortest distance to each of the other nodes from a given starting position using
// the breadth-first search algorithm(BFS). Return an array of distances from the start node in node number order. If a node is unreachable, 
// return -1 for that node.
// Example: n = 5 // number of nodes; m = 3 // number of edges; edges = [1,2],[1,3],[3,4]; s = 1 // starting node. 
// All distances are from the start node 1. Outputs are calculated for distances to nodes 2 through 5: [6,6,12,-1]. Each edge is 6 units, 
// and the unreachable node 5 has the required return distance of -1.
// Function Description:
// Complete the bfs function in the editor below. If a node is unreachable, its distance is -1.
// BFS has the following parameters:
// int n: the number of nodes;
// int m: the number of edges;
// int edges[m][2]: start and end nodes for edges;
// int s: the node to start traversals from.
// Returns:
// The first line contains an integer q, the number of queries. Each of the following q sets of lines has the following format:
// * The first line contains two space-separated integers n and m, the number of nodes and edges in the graph;
// * Each line i of the m subsequent lines contains two space-separated integers, u and v, that describe an edge between nodes u and v;
// * The last line contains a single integer, s, the node number to start from.
// Constraints:
// 1 <= q <= 10
// 2 <= n <= 1000
// 1 <= m <= (n*(n-1))/2
// 1 <= u,v,s <= n

function bfs(n, m, edges, s) {
    // Build adjacency list
    const adj = Array.from({length: n + 1}, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Initialize distances and queue
    const dist = Array(n + 1).fill(-1);
    const visited = Array(n + 1).fill(false);
    const queue = [];

    dist[s] = 0;
    visited[s] = true;
    queue.push(s);

    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                dist[neighbor] = dist[node] + 6;
                queue.push(neighbor);
            }
        }
    }

    // Collect results, skipping the start node
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i !== s) result.push(dist[i]);
    }
    return result;
}

// Example usage:
console.log(bfs(5, 3, [[1, 2], [1, 3], [3, 4]], 1)); // Output: [6, 6, 12, -1]
console.log(bfs(4, 2, [[1, 2], [2, 3]], 1)); // Output: [6, 12, -1]
console.log(bfs(6, 5, [[1, 2], [1, 3], [2, 4], [3, 5], [4, 6]], 1)); // Output: [6, 12, 18, -1]
console.log(bfs(3, 2, [[1, 2], [2, 3]], 1)); // Output: [6, 12]
console.log(bfs(7, 6, [[1, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7]], 1)); // Output: [6, 12, 18, -1, -1]


// Task:
// Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. 
// The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; if a negative argument is passed as , 
// the constructor should set age to 0 and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:
// 1. yearPasses() should increase the age instance variable by 1.
// 2. amIOld() should perform the following conditional actions:
// * If age < 13, print You are young..
// * If age >= 13 and age < 18, print You are a teenager..
// * Otherwise, print You are old..
// To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. 
// The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!
// Note: Do not remove or alter the stub code in the editor.
// Input Format:
// Input is handled for you by the stub code in the editor.
// The first line contains an integer, T (the number of test cases), and the T subsequent lines each contain an integer denoting the age of a Person instance.
// Constraints:
// 1 <= T <= 4;
// -5 <= age <=30

function Person(initialAge) {
    if(initialAge < 0) {
        this.age = 0;
        console.log("Age is not valid, setting age to 0.");
    } else {
        this.age = initialAge;
    }

    this.amIOld = function() {
        if(this.age < 13) {
            console.log("You are young.");
        } else if(this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        }else {
            console.log("You are old.");
        }
    };
    this.yearPasses = function() {
        this.age += 1;
    };
}

// Complete the preOrder function in the editor below, which has 1 parameter: a pointer to the root of a binary tree. 
// It must print the values in the tree's preorder traversal as a single line of space-separated values.
// Input Format:
// Our test code passes the root node of a binary tree to the preOrder function.
// Constraints:
// 1 <= Nodes in the tree <= 500

function preOrder(root) {
    // Helper function to traverse and collect the values
    function traverse(node, result) {
        if(node === null) return;
        result.push(node.data); // Visit the root
        traverse(node.left, result); // Traverse left subtree
        traverse(node.right, result); // Traverse right subtree
    }
    const result = [];
    traverse(root, result);
    console.log(result.join(' '));
}

// Huffman coding assigns variable length codewords to fixed length input characters based on their frequencies. 
// More frequent characters are assigned shorter codewords and less frequent characters are assigned longer codewords. 
// All edges along the path to a character contain a code digit. If they are on the left side of the tree, they will be a 0 (zero). 
// If on the right, they'll be a 1 (one). Only the leaves will contain a letter and its frequency count. 
// All other nodes will contain a null instead of a character, and the count of the frequency of all of it and its descendant characters.

// For instance, consider the string ABRACADABRA. There are a total of 11 characters in the string. 
// This number should match the count in the ultimately determined root of the tree. Our frequencies are A = 5, B = 2, R = 2, C = 1 and D = 1. 
// The two smallest frequencies are for C and D, both equal to 1, so we'll create a tree with them. 
// The root node will contain the sum of the counts of its descendants, in this case 1 + 1 = 2. 
// The left node will be the first character encountered, C, and the right will contain D. 
// Next we have 3 items with a character count of 2: the tree we just created, the character B and the character R. 
// The tree came first, so it will go on the left of our new root node. B will go on the right. 
// Repeat until the tree is complete, then fill in the 1's and 0's for the edges. 
// Input characters are only present in the leaves. Internal nodes have a character value of ϕ (NULL). 
// We can determine that our values for characters are:

// A - 0
// B - 111
// C - 1100
// D - 1101
// R - 10
// Our Huffman encoded string is:

// A B    R  A C     A D     A B    R  A
// 0 111 10 0 1100 0 1101 0 111 10 0
// or
// 01111001100011010111100
// To avoid ambiguity, Huffman encoding is a prefix free encoding technique. No codeword appears as a prefix of any other codeword.
// To decode the encoded string, follow the zeros and ones to a leaf and return the character there.
// You are given pointer to the root of the Huffman tree and a binary coded string to decode. You need to print the decoded string.
// Function Description:
// Complete the function decode_huff in the editor below. It must return the decoded string.
// decode_huff has the following parameters:
// * root: a reference to the root node of the Huffman tree
// * s: a Huffman encoded string
// Input Format:
// There is one line of input containing the plain string, s. Background code creates the Huffman tree then passes the 
// head node and the encoded string to the function.
// Constraints:
// 1 <= |s| <= 25
function processdata05(input) {
    console.log(input);
}

function decode_huff(root, s) {
    let result = '';
    let node = root;
    for(let i = 0; i < s.length; i++) {
        node = s[i] === '0' ? node.left : node.right;
        if(node.left && !node.right) { // Leaf node
            result += node.data;
        node = root; // Reset to root for next character
        }
    }
    console.log(result);
}
    
// There is a given list of strings where each string contains only lowercase letters from a - j, inclusive. 
// The set of strings is said to be a GOOD SET if no string is a prefix of another string. 
// In this case, print GOOD SET. Otherwise, print BAD SET on the first line followed by the string being checked.
// Note If two strings are identical, they are prefixes of each other.
// Example: words = ['abcd', 'bcd', 'abcde', 'bcde']
// Here 'abcd' is a prefix of 'abcde' and 'bcd' is a prefix of 'bcde'. Since 'abcde' is tested first, print
// BAD SET  
// abcde
// words = ['ab','bc','cd']
// No string is a prefix of another so print
// GOOD SET 
// Function Description:
// Complete the noPrefix function in the editor below.
// noPrefix has the following parameter(s):
// - string words[n]: an array of strings
// Prints:
// - string(s): either GOOD SET or BAD SET on one line followed by the word on the next line. No return value is expected.
// Input Format:
// First line contains n, the size of words[].
// Then next  lines each contain a string, words[i].
// Constraints:
// 1 <= n <= 10^5
// 1 <= the length of words[i] <= 60
// All letters in words[i] are in the range 'a' through 'j', inclusive.

function noPrefix(words) {
    // Trie node definition
    class TrieNode {
        constructor() {
            this.children = {};
            this.isEnd = false;
        }
    }
    const root = new TrieNode();
    for(const word of words) {
        let node = root;
        let isPrefix = false;

        for(let i = 0; i < word.length; i++) {
            const ch = word[i];
            if(!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];

            // If we reach a node that is already marked as end, it means the current word is a prefix of an existing word
            if(node.isEnd) {
                isPrefix = true;
                break;
            }
        }
        // If afterinserting, the current node has children, this word is a prefix of a previous word
        if(node.isEnd || Object.keys(node.children).length > 0 || isPrefix) {
            console.log("BAD SET");
            console.log(word);
            return;
        }
        node.isEnd = true; // Mark the end of the word
    }
    console.log('GOOD SET');
}

function main1() {
    const n = parseInt(readLine().trim(), 10);
    const words = [];
    for (let i = 0; i < n; i++) {
        words.push(readLine().trim());
    }
    noPrefix(words);
}
// Example usage:
console.log(noPrefix(['abcd', 'bcd', 'abcde', 'bcde'])); // Output: BAD SET, abcde
console.log(noPrefix(['ab', 'bc', 'cd'])); // Output: GOOD SET
console.log(noPrefix(['a', 'ab', 'abc'])); // Output: BAD SET, abc
console.log(noPrefix(['abc', 'def', 'ghij'])); // Output: GOOD SET
console.log(noPrefix(['a', 'aa', 'aaa'])); // Output: BAD SET, aaa
console.log(noPrefix(['a', 'b', 'c', 'd'])); // Output: GOOD SET
console.log(noPrefix(['abc', 'abcd', 'abcde'])); // Output: BAD SET, abcde
console.log(noPrefix(['a', 'b', 'c', 'd', 'e'])); // Output: GOOD SET


// Example usage:
console.log(noPrefix(['abcd', 'bcd', 'abcde', 'bcde'])); // Output: BAD SET, abcde
console.log(noPrefix(['ab', 'bc', 'cd'])); // Output: GOOD SET
console.log(noPrefix(['a', 'ab', 'abc'])); // Output: BAD SET, abc
console.log(noPrefix(['abc', 'def', 'ghij'])); // Output: GOOD SET
console.log(noPrefix(['a', 'aa', 'aaa'])); // Output: BAD SET, aaa
console.log(noPrefix(['a', 'b', 'c', 'd'])); // Output: GOOD SET
console.log(noPrefix(['abc', 'abcd', 'abcde'])); // Output: BAD SET, abcde

// Task:
// Given an integer, n, print its first 10 multiples. Each multiple n x i (where 1 <= i <= 10) should be printed on a new line in the form: n x i = result.
// Example:
// n = 3
// The printout should look like this:

// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30
// Input Format:
// A single integer, n.
// Constraints:
// 2 <= n <= 20

// process.stdin.resume();
 // process.stdin.setEncoding('utf-8');

let inputString1 = '';
let currentLine1 = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString1 += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString1 = inputString1.split('\n');

//     main2();
// });

function readLine1() {
    return inputString1[currentLine1++];
}



function main2() {
    const n = parseInt(readLine1().trim(), 10);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

// Example usage:
console.log(main(3)); // Output: 3 x 1 = 3, 3 x 2 = 6, ..., 3 x 10 = 30
console.log(main(5)); // Output: 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50
console.log(main(10)); // Output: 10 x 1 = 10, 10 x 2 = 20, ..., 10 x 10 = 100
console.log(main(15)); // Output: 15 x 1 = 15, 15 x 2 = 30, ..., 15 x 10 = 150
console.log(main(20)); // Output: 20 x 1 = 20, 20 x 2 = 40, ..., 20 x 10 = 200
console.log(main(2)); // Output: 2 x 1 = 2, 2 x 2 = 4, ..., 2 x 10 = 20
console.log(main(8)); // Output: 8 x 1 = 8, 8 x 2 = 16, ..., 8 x 10 = 80
console.log(main(12)); // Output: 12 x 1 = 12, 12 x 2 = 24, ..., 12 x 10 = 120

// Task:
// Given a string, S, of length N that is indexed from 0 to N - 1, print its even-indexed and odd-indexed characters as 2 space-separated 
// strings on a single line (see the Sample below for more detail).
// Note: 0 is considered to be an even index.
// Example:
// s = adbecf
// Print abc def
// Input Format:
// The first line contains an integer, T (the number of test cases).
// Each line i of the T subsequent lines contain a string, S.
// Constraints:
// 1 <= T <= 10
// 2 <= length of S <= 10000

// 

// function processData(input) {
//     const lines = input.split('\n');
//     const T = parseInt(lines[0], 10);
//     for (let i = 1; i <= T; i++) {
//         const s = lines[i];
//         let even = '';
//         let odd = '';
//         for (let j = 0; j < s.length; j++) {
//             if (j % 2 === 0) {
//                 even += s[j];
//             } else {
//                 odd += s[j];
//             }
//         }
//         console.log(`${even} ${odd}`);
//     }
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });
