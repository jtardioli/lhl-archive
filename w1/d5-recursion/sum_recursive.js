const sumToOne = function(n) {
  // base case
  if (n === 1) {
    return 1;
  }


  // recursive case
  return n + sumToOne(n - 1);
};


console.log(sumToOne(10));