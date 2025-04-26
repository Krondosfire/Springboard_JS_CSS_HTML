// Filtering an Array
const numbers = [17, 5, 76, 19, 20, 40, 1];
console.log("Original Array:", numbers);
const filtered = numbers.filter(num => num > 10); // Keep only numbers greater than 10

console.log("Filtered Array:", filtered);

// Reducing an Array
console.log("******************Reducing an Array*********************");

const numbers1 = [9, 12, 87, 4, 50, 5, 487, 11];
console.log("Original Array:", numbers1);

const sumOfEvens = numbers1.reduce((acc, num) => {
  if(num % 2 === 0) {
    return acc + num; // Add only even numbers
  }
  return acc; // Ignore odd numbers
}, 0); // Initial accumulator value is 0)

console.log("Sum of Even Numbers:", sumOfEvens);

// General Filter function
console.log("******************General Filter function*********************");
// Keep strings with length > 4
const words = ["apple", "banana", "kiwi", "pear", "grape"];
console.log("Original Array:", words);
const longWords = words.filter(word => word.length > 4);
console.log("Words with length > 4:", longWords);

// General Reduce function
console.log("******************General Reduce function*********************");
// Concatenate only strings that start with 'h'
const strings = ["hello", "world", "hi", "there", "howdy"];
console.log("Original Array:", strings);
const hWords = strings.reduce((arr, word) => {
  if(word.startsWith('h')) arr.push(word); // Add only words starting with 'h'
  return arr; // Return the accumulator
}, []); // Initial accumulator is an empty array
console.log("Words starting with 'h':", hWords);

// Mathematical Operations with Matrices
console.log("******************Mathematical Operations with Matrices*********************");
// Matrix Addition
function addMatrices(A, B) {
  if(A.length !== B.length || A[0].length !== B[0].length) {
    throw new Error("Matrices must have the same dimensions!");
  }
  return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

// Example:
const A = [[1, 2, 8],[4, 5, 9], [6, 12, 7]];
console.log("Matrix A:", A);
console.log("Matrix A dimensions:", A.length, "x", A[0].length);
const B = [[9, 8, 44],[6, 5, 62], [16, 8, 95]];
console.log("Matrix B:", B);
console.log("Matrix B dimensions:", B.length, "x", B[0].length);
console.log("Matrix A + B:", addMatrices(A, B)); // 

// Matrix Subtraction
console.log("******************Matrix Subtraction*********************");
function subtractMatrices(A, B) {
  if(A.length !== B.length || A[0].length !== B[0].length) {
    throw new Error("Matrices must have the same dimensions!");
  }
  return A.map((row, i) => row.map((val, j) => val - B[i][j]));
}

  
// Example:
console.log("Matrix A - B:", subtractMatrices(A, B)); // [[-8, -6, -36], [-2, 0, -53], [-10, 4, -88]]

// Matrix Multiplication
console.log("******************Matrix Multiplication*********************");

function multiplyMatrices(A, B) {
  if(A[0].length !== B.length) {
    throw new Error("Number of columns of A must equal number of rows of B!");
  }
  const result = [];
  for (let i = 0; i < A.length; i ++) {
    result[i] = [];
    for(let j = 0; j < B[0].length; j ++) {
      let sum = 0;
      for(let k=0; k < A[0].length; k ++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

// Example:
const C = [[2, 45, 52, 6, 112], [9, 87, 328, 89, 1]];
console.log("Matrix C:", C);
const D = [[54, 2],[76, 115],[92, 3], [32, 4], [41, 251]];
console.log("Matrix D:", D);
console.log("Matrix C * D:", multiplyMatrices(C, D)); // [[  0,  0], [  0,  0]]

// Matrix Transpose
console.log("******************Matrix Transpose*********************");
function transponseMatrix(A) {
  return A[0].map((_, colIndex) => A.map(row => row[colIndex]));
}

// Example:
console.log("Transponse of Matrix D:", transponseMatrix(D)); // [[54, 76, 92, 32, 41], [2, 115, 3, 4, 251]]
console.log("Transponse of Matrix C:", transponseMatrix(C)); // [[2, 9], [45, 87], [52, 328], [6, 89], [112, 1]]
console.log("Transponse of Matrix A:", transponseMatrix(A)); // [[1, 4, 6], [2, 5, 12], [8, 9, 7]]
console.log("Transponse of Matrix B:", transponseMatrix(B)); // [[9, 6, 16], [8, 5, 8], [44, 62, 95]]


// Matrix Determinant
console.log("******************Matrix Determinant*********************");
function determinant(A) {
  if(A.length !== A[0].length) {
    throw new Error("Matrix must be square!");
  }
  if(A.length === 1) return A[0][0];
  if(A.length === 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];
  
  let det = 0;
  for(let i = 0; i < A.length; i++) {
    const subMatrix = A.slice(1).map(row => row.filter((_, j) => j !== i));
    det += ((i % 2 === 0 ? 1 : -1) * A[0][i] * determinant(subMatrix));
  }
  return det;
}
// Example:
const E = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Matrix E:", E);  
console.log("Determinant of Matrix E:", determinant(E)); // 0

// Matrix Inverse
console.log("******************Matrix Inverse*********************");
function inverseMatrix(A) {
  if(A.length !== A[0].length) {
    throw new Error("Matrix must be square!");
  }
  const n = A.length;
  const identity = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  
  for(let i = 0; i < n; i++) {
    let pivot = A[i][i];
    if(pivot === 0) {
      for(let j = i + 1; j < n; j++) {
        if(A[j][i] !== 0) {
          [A[i], A[j]] = [A[j], A[i]];
          [identity[i], identity[j]] = [identity[j], identity[i]];
          pivot = A[i][i];
          break;
        }
      }
    }
    if(pivot === 0) throw new Error("Matrix is singular and cannot be inverted!");
    
    for(let j = 0; j < n; j++) {
      A[i][j] /= pivot;
      identity[i][j] /= pivot;
    }
    
    for(let j = 0; j < n; j++) {
      if(j !== i) {
        const factor = A[j][i];
        for(let k = 0; k < n; k++) {
          A[j][k] -= factor * A[i][k];
          identity[j][k] -= factor * identity[i][k];
        }
      }
    }
  }
  
  return identity;
}
// Example:
const F = [[4, 7], [2, 6]];
console.log("Matrix F:", F);
console.log("Inverse of Matrix F:", inverseMatrix(F)); // [[ 0.6, -0.7], [-0.2, 0.4]]
console.log("Inverse of Matrix A:", inverseMatrix(A)); // [[-0.5, 0.5, 0.5], [0.5, -1, 1], [0.5, 1, -1]]
console.log("Inverse of Matrix B:", inverseMatrix(B)); // [[-0.5, 0.5, 0.5], [0.5, -1, 1], [0.5, 1, -1]]
//console.log("Inverse of Matrix C:", inverseMatrix(C)); // [[-0.5, 0.5, 0.5], [0.5, -1, 1], [0.5, 1, -1]]
//console.log("Inverse of Matrix D:", inverseMatrix(D)); // [[-0.5, 0.5, 0.5], [0.5, -1, 1], [0.5, 1, -1]]
//console.log("Inverse of Matrix E:", inverseMatrix(E)); // [[-0.5, 0.5, 0.5], [0.5, -1, 1], [0.5, 1, -1]]

// Matrix Rank
console.log("******************Matrix Rank*********************");

function rankMatrix(A) {
  const n = A.length;
  const m = A[0].length;
  let rank = m;
  
  for(let i = 0; i < rank; i++) {
    if(A[i][i] !== 0) {
      for(let j = i + 1; j < n; j++) {
        const factor = A[j][i] / A[i][i];
        for(let k = i; k < m; k++) {
          A[j][k] -= factor * A[i][k];
        }
      }
    } else {
      let reduce = true;
      for(let j = i + 1; j < n; j++) {
        if(A[j][i] !== 0) {
          [A[i], A[j]] = [A[j], A[i]];
          reduce = false;
          break;
        }
      }
      if(reduce) {
        rank--;
        for(let j = 0; j < n; j++) {
          A[j][i] = A[j][rank];
        }
      }
    }
  }
  
  return rank;
}
// Example:
const G = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Matrix G:", G);
console.log("Rank of Matrix G:", rankMatrix(G)); // 2
console.log("Rank of Matrix A:", rankMatrix(A)); // 3
console.log("Rank of Matrix B:", rankMatrix(B)); // 3
//console.log("Rank of Matrix C:", rankMatrix(C)); // 3
console.log("Rank of Matrix D:", rankMatrix(D)); // 3
console.log("Rank of Matrix E:", rankMatrix(E)); // 3
console.log("Rank of Matrix F:", rankMatrix(F)); // 2

// Matrix Eigenvalues
console.log("******************Matrix Eigenvalues*********************");
function eigenvaluesMatrix(A) {
  const n = A.length;
  const eigenvalues = [];
  
  for(let i = 0; i < n; i++) {
    let sum = 0;
    for(let j = 0; j < n; j++) {
      sum += A[i][j];
    }
    eigenvalues.push(sum);
  }
  
  return eigenvalues;
}
// Example:
const H = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Matrix H:", H);
console.log("Eigenvalues of Matrix H:", eigenvaluesMatrix(H)); // [6, 15, 24]
console.log("Eigenvalues of Matrix A:", eigenvaluesMatrix(A)); // [11, 18, 25]
console.log("Eigenvalues of Matrix B:", eigenvaluesMatrix(B)); // [11, 18, 25]
console.log("Eigenvalues of Matrix C:", eigenvaluesMatrix(C)); // [11, 18, 25]
console.log("Eigenvalues of Matrix D:", eigenvaluesMatrix(D)); // [11, 18, 25]
console.log("Eigenvalues of Matrix E:", eigenvaluesMatrix(E)); // [11, 18, 25]
console.log("Eigenvalues of Matrix F:", eigenvaluesMatrix(F)); // [11, 18, 25]
console.log("Eigenvalues of Matrix G:", eigenvaluesMatrix(G)); // [11, 18, 25]

// Square root each element in a matrix
console.log("******************Square root each element in a matrix*********************");
function mapMatrix(matrix, fn) {
  return matrix.map(row => row.map(fn));
}
// Example:
const sqrRtA = mapMatrix(A, Math.sqrt);
const sqrRtB = mapMatrix(B, Math.sqrt);

const matrix = [[1, 4, 9], [16, 36, 25]];
const sqrRtMatrix = mapMatrix(matrix, Math.sqrt);
console.log("Square root of Matrix:", sqrRtMatrix); // [[1, 2, 3], [4, 6, 5]]
console.log("Square root of Matrix A:", sqrRtA); // 
console.log("Square root of Matrix B:", sqrRtB); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


// Multiply a matrix by a vector
console.log("******************Multiply a matrix by a vector*********************");
function multiplyMatrixVector(matrix, vector) {
  if(matrix[0].length !== vector.length) {
    throw new Error("Number of columns of matrix must equal number of rows of vector!");
  }
  return matrix.map(row => row.reduce((sum, val, i) => sum + val * vector[i], 0));
}
// Example:
const vector = [1, 2, 3];
console.log("Vector:", vector);
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Matrix 1:", matrix1);
const result1 = multiplyMatrixVector(matrix1, vector);
console.log("Result of multiplying Matrix by Vector:", result1); // [14, 32, 50]

const matrix2 = [[2, 7, 9, 87, 21], [34, 11, 24, 6, 9],[32, 86, 9, 2, 5],[16, 32, 64, 128, 256]];
console.log("Matrix 2:", matrix2);
const vector2 = [11, 32, 3, 145, 58];
console.log("Vector 2:", vector2);
const result2 = multiplyMatrixVector(matrix2, vector2);
console.log("Result of multiplying Matrix 2 by Vector 2:", result2); // [14, 32, 50]

// Iterations over array elements and performing actions
console.log("******************Iterations over array elements and performing actions*********************");
// forEach - for side effects like printing

const arr2 = [82, 64, 128, 256, 4, 3];
console.log("Original Array arr2:", arr2);
arr2.forEach(element => {
  console.log("Prints each element of arr2",element); // Prints each element
});

// map - for transforming elements
const arr3 = [9, 76, 628, 72, 9, 12];
const doubled = arr3.map(element => element * 2); // Doubles each element
console.log("Original Array arr3:", arr3);
console.log("Doubled Array:", doubled); // [18, 152, 1256, 144, 18, 24]

// classic for loop - for custom logic
console.log("******************classic for loop - for custom logic*********************");
const arr4 = [24, 61, 8, 17, 291, 7];
console.log("Original Array arr4:", arr4);
for(let i=0; i < arr4.length; i ++) {
  console.log(`Index ${i}: Value ${arr4[i]}`); // Prints index and value

}

// for...of - for iterating over elements
console.log("******************for...of - for iterating over elements*********************");
const arr5 = [9, 8, 387, 1, 993, 21, 7, 34, 921, 223, 1];
console.log("Original Array arr5:", arr5);
for(const value of arr5) {
  console.log("Value:", value); // Prints each value
}

// Transform and print elements
console.log("******************Transform and print elements*********************");
const arr6 = [45, 7, 2, 555, 821, 71, 20, 3, 914, 821, 63];
console.log("Original Array arr6:", arr6);
arr6.forEach(element => {
  const squared = element * element; // Square each element
  console.log(`Element: ${element}, Squared: ${squared}`); // Prints element and its square
});

