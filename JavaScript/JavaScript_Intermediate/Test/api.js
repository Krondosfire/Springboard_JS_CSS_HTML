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
