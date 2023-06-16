const camelCase = function (input) {
  let camelCase = "";
  input = input.split(" ");
  input.forEach((word, index) => {
    if (index !== 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    camelCase += word;
  });
  return camelCase.trim();
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
