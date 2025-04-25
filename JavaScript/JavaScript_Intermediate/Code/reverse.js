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
