const without = (source, itemsToRemove) => {
  const filteredArray = source.filter((item, index) => {
    return !itemsToRemove.includes(item);
  });
  return filteredArray;
};

module.exports = without;