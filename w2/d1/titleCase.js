const titleCase = (sentence) => {
  const sentenceArray = sentence.split(' ');
  const newArray = [];
  for (let word of sentenceArray) {
    const firstLetterUpper = word.charAt(0).toUpperCase();
    const restOfWordLower = word.slice(1).toLowerCase();
    const newWord = firstLetterUpper + restOfWordLower;
    newArray.push(newWord);
   
  }
  return newArray.join(' ');
};

console.log(titleCase("this is an example")); //should return "This Is An Example"
console.log(titleCase("test")); //should return "Test"
console.log(titleCase("i r cool")); //should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); //should return "What Happens Here"
console.log(titleCase("")); //should return ""
console.log(titleCase("A")); //should return "A"
