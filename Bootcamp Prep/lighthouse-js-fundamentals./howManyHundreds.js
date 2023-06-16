const howManyHundreds = (num) => {
  let hundreds;
  if (num / 100 >= 1) {
    hundreds = (num - (num % 100)) / 100;
  } else {
    hundreds = 0;
  }
  return hundreds;
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
