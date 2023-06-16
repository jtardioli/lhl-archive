const conditionalSum = (numsArray, condition) => {
  let newArray = [];
  let sum = 0;
  if (condition === "odd") {
    for (const num of numsArray) {
      if (num % 2 !== 0) {
        newArray.push(num);
      }
    }
  }

  if (condition === "even") {
    for (const num of numsArray) {
      if (num % 2 === 0) {
        newArray.push(num);
      }
    }
  }

  for (const num of newArray) {
    sum += num;
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
