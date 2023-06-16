const takeUntil = (data, callback) => {
  let newArray = [];
  for (let item of data) {
    if (callback(item)) {
      return newArray;
    }
    newArray.push(item);
  }
};
module.exports = takeUntil;

