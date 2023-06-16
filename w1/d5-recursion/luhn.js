const luhn = (number) => {
  const arr = number.toString().split('').reverse();
  // sum of odd places from the number in reverse
  let sumOfOddPlaces = 0;
  for (let i = 0; i < arr.length; i += 2) {
    sumOfOddPlaces += Number(arr[i]);
     
  }

  // get the array of even numbers
  let evenArray = [];
  for (let i = 1; i < arr.length; i += 2) {
    evenArray.push(arr[i]);
  }
  // double all the even numbers
  let evenArrayDoubled = evenArray.map((x) => {
    return (x * 2).toString();
  });
  // sum the doubled numbers, splitting the values if they are over 10
  let sumEvenDouble = 0;
  for (number of evenArrayDoubled) {
    if (number.length === 1) {
      sumEvenDouble += Number(number);
    } else {
      // the split
      let half1 = Number(number[0]);
      let half2 = Number(number[1]);
      sumEvenDouble += half1 + half2;
    }
  }
  if ((sumOfOddPlaces + sumEvenDouble) % 10 === 0) {
    return true;
  } else  {
    return false;
  }
  
};

console.log(luhn(4847352989263094));