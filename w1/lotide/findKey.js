const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
