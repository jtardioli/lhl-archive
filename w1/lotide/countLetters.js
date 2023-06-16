const countLetters = function(sentence) {
  let result = {};
  const sentenceArray = sentence.split(" ").join("").split("");
  for (let item of sentenceArray) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }

  return result;
};

module.exports = countLetters;


