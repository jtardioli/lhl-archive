const urlEncode = function (text) {
  text = text.trim();
  newString = "";
  for (letter of text) {
    if (letter === " ") {
      newString += "%20";
    } else {
      newString += letter;
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
