const snakeCase = function (input) {
  input = input.split(" ");
  let newString = "";
  input.forEach((word, index) => {
    newString += word;
    if (index < input.length - 1) {
      newString += "_";
    }
  });
  return newString;
};
console.log(snakeCase("this is a string"));
