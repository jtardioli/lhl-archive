const joinList = (list) => {
  if (!list) {
    return "";
  }
  let newString = "";
  list.forEach((word, index) => {
    newString += word;
    if (index < list.length - 1) {
      newString += ", ";
    }
  });
  return newString;
};

const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving",
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
