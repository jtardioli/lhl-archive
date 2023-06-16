const maxProfit = (list) => {
  if (list.length <= 0) {
    return -1;
  }
  let possibleProfit = [];

  for (let i in list) {
    possibleProfit.push(list[i] - list[0]);
  }
  const max = Math.max(...possibleProfit);
  if (max > maxProfit(list.slice(1))) {
    return max;
  } else {
    return maxProfit(list.slice(1));
  }
    
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));