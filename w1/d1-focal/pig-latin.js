let args = process.argv;
args = args.slice(2);
const pigLatin = (args) => {
  let pigLatinArray = [];
  // loop over every word
  for (word of args) {
    let reverseString = "";
    wordArray = word.split("");
    // Loop over ever letter of the word in reverse order
    for (let i = wordArray.length - 1; i > 0; i--) {
      //add the letter to the new string
      reverseString += wordArray[i];
    }
    // add the "ay"
    reverseString += "ay";
    // add translated word to new array
    pigLatinArray.push(reverseString);
  }
  // create new string
  let pigLatinString = "";
  pigLatinArray.forEach((word, index) => {
    pigLatinString += word;
    if (index < pigLatinArray.length - 1) {
      pigLatinString += " ";
    }
  });
  return pigLatinString;
};

console.log(pigLatin(args));
