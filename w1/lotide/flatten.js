const flatten = (array) => {
  let flattenedArray = [];
  const flattenInner = (array) => {
    // Loop through every item of the array
    array.forEach((item, index) => {
      // if the item is an array recurse with that array
      if (Array.isArray(item)) {
        return flattenInner(item);
      } else {
        // otherwise push the item into the new array
        flattenedArray.push(item);
        // console.log(index, array.length - 1, item);
        // console.log(flattenedArray);
        // once the end of the array is reached return the final array
        if (index === array.length - 1) {
          //console.log("right before", flattenedArray);
          return flattenedArray;
        }
      }
    });
  };
  flattenInner(array);
  return flattenedArray;
};

module.exports = flatten;

