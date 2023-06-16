const letterPositions = function(sentence) {
  const results = {};
  const sentenceArray = sentence.split(" ").join("").split("");
  for (let index in sentenceArray) {
    if (!results[sentenceArray[index]]) {
      results[sentenceArray[index]] = [];
    }
    results[sentenceArray[index]].push(Number(index));
  }

  return results;
};

module.exports = letterPositions;
