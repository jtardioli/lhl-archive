const { should } = require("chai");
const common = require("mocha/lib/interfaces/common");

const transpose = function(matrix) {
  let outerMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let innerMatrix = [];
    for (let column of matrix) {
      innerMatrix.push(column[i]);
    }
    outerMatrix.push(innerMatrix);
  }
  return outerMatrix;
};
 
 
// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));