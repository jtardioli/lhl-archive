

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  const middleIndex = (array.length - 1) / 2;
  if (array.length % 2 === 0) {
    const middleIndex1 = Math.floor(middleIndex);
    const middleIndex2 = Math.ceil(middleIndex);
    middleArray.push(array[middleIndex1], array[middleIndex2]);
  } else {
    middleArray.push(array[middleIndex]);
  }
  return middleArray;
};

module.exports = middle;

