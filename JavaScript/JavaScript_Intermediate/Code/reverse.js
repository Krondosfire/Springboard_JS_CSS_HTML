//reverse a string
console.log(`***********Reverse a String**************`);
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(reverseString("Javor")); // Output: "rovaJ"
  
// Comppute the nth Fibonacci number
console.log(`***********Compute the nth Fibonacci number**************`);
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Example usage:
  console.log(fibonacci(12)); // Output: 144    

  // Find the missing number in an array
    console.log(`***********Find the missing number in an array**************`);

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
    
// Check if parentheses are balanced
console.log(`***********Check if parentheses are balanced**************`);
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

// Find the max and min in an array
console.log(`***********Find the max and min in an array**************`);

const arr1 = [70, 20, 90, 5, 42, 87, 254, 8, 56, 112, 2, 49];
console.log(`Array: ${arr1}`); // Output: [70, 20, 90, 5, 42, 87, 254, 8, 56, 112, 2, 49]
const minVal = Math.min(...arr1); // Find the min value

const maxVal = Math.max(...arr1); // Find the max value
console.log(`Min value: ${minVal}`); // Output: 2
console.log(`Max value: ${maxVal}`); // Output: 254

function findMin(arr1) {
    return Math.min(...arr1);
}
function findMax(arr1) {
    return Math.max(...arr1);
};

console.log(`Min value: ${findMin(arr1)}`); // Output: 2
console.log(`Max value: ${findMax(arr1)}`); // Output: 254


// Remove the duplicates from an array
console.log(`***********Remove the duplicates from an array**************`);

function removeDuplicates(arr) {
    return[...new Set(arr)];
}
const arr2 = [1, 4, 66, 8, 4, 23, 9, 11, 66, 12, 5, 9, 3, 82, 12, 9];
const uniqueArray = removeDuplicates(arr2);
console.log(`Array: ${arr2}`); // Output: [1, 4, 66, 8, 4, 23, 9, 11, 66, 12, 5, 9, 3, 82, 12, 9]
console.log(`Unique Array: ${uniqueArray}`); // Output: [1, 4, 66, 8, 23, 9, 11, 12, 5, 3, 82]

// Rotate an array by a given number of positions (circular shift)
console.log(`***********Rotate an array by a given number of positions (circular shift)**************`);
function rotateArr(arr, positions) {
    const len = arr.length;
    // Normalize positions to avoid unnecessary rotations
    positions = positions % len;

    // Handle negative positions (rotate left)
    if(positions < 0) {
        positions = len + positions;
    }
    // Rotate the array
    const rotatedArr = arr.slice(positions).concat(arr.slice(0, positions));
    return rotatedArr;
}

// Example usage:
const arr3 = [38, 8, 26, 111, 3, 8, 63];
console.log(`Array: ${arr3}`); // Output: [38, 8, 26, 111, 3, 8, 63]
// Rotate right by 2 positions
const rotateRight = rotateArr(arr3, 2);
console.log("Rotated right by 2 positions:", rotateRight); // Output: [26, 111, 3, 8, 63, 38, 8]
// Rotate left by 3 positions
const rotateLeft = rotateArr(arr3, -3);
console.log("Rotated left by 3 positions:", rotateLeft); // Output: [111, 3, 8, 63, 38, 8, 26]
// Example with positions greater than array length
const rotatedLarge = rotateArr(arr3, 10);
console.log("Rotated by 10 positions:", rotatedLarge); // Output: [8, 26, 111, 3, 8, 63, 38]

// 