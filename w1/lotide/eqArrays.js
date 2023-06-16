const eqArrays = (array1, array2) => {
  // check if arrays are the same length
  if (array1.length !== array2.length) {
    
    return false;
  }
  for (let i in array1) {
    // check if index i is an array
  
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      // if it is loop through it, if it returns false then return false for enrtire function
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else {
      // check if one is an array but not both
      const item1IsArray = Array.isArray(array1[i]);
      const item2isArray = Array.isArray(array2[i]);
      if (
        (item1IsArray || item2isArray) &&
        !(item1IsArray && item2isArray)) {
        return false;
      }
      if (array1[i] !== array2[i]) {
        return false;
      }

    }
    
  }
  return true;
};

module.exports = eqArrays;

// const eqArrays = (array1, array2) => {
//   if (array1.length === array2.length) {
//     for (let i = 0; i <= array1.length; i++) {
//       if (!(array1[i] === array2[i])) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };


