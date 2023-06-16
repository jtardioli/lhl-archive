const calculateChange = function (total, cash) {
  let totalChange = cash - total;
  let changeObject = {};
  let changeArray = [
    ["twentyDollars", 0],
    ["tenDollars", 0],
    ["fiveDollars", 0],
    ["twoDollars", 0],
    ["oneDollar", 0],
    ["quarter", 0],
    ["dime", 0],
    ["nickel", 0],
    ["penny", 0],
  ];
  console.log(changeArray[0][0]);

  while (totalChange > 0) {
    if (totalChange >= 2000) {
      changeArray[0][1]++;
      totalChange -= 2000;
    } else if (totalChange >= 1000) {
      changeArray[1][1]++;
      totalChange -= 1000;
    } else if (totalChange >= 500) {
      changeArray[2][1]++;
      totalChange -= 500;
    } else if (totalChange >= 200) {
      changeArray[3][1]++;
      totalChange -= 200;
    } else if (totalChange >= 100) {
      changeArray[4][1]++;
      totalChange -= 100;
    } else if (totalChange >= 25) {
      changeArray[5][1]++;
      totalChange -= 25;
    } else if (totalChange >= 10) {
      changeArray[6][1]++;
      totalChange -= 10;
    } else if (totalChange >= 5) {
      changeArray[7][1]++;
      totalChange -= 5;
    } else if (totalChange >= 1) {
      changeArray[8][1]++;
      totalChange -= 1;
    }
  }
  for (bill of changeArray) {
    if (bill[1] > 0) {
      changeObject[bill[0]] = bill[1];
    }
  }

  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
