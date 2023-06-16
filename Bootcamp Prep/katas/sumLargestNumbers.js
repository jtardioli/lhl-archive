const sumLargestNumbers = (data) => {
  let largest1 = 0;
  let largest2 = 0;
  for (num of data) {
    if (num > largest1) {
      largest2 = largest1;
      largest1 = num;
    } else if (num <= largest1 && num > largest2) {
      largest2 = num;
    }
  }

  sum = largest1 + largest2;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
