const numberOfVowels = function (data) {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let numberOfVowels = 0;
  for (let letter of data) {
    if (vowelsArray.includes(letter)) {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
