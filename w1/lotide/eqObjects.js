const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (typeof object1[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    }
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return Object.keys(object1).length === Object.keys(object2).length;
};

module.exports = eqObjects;

// const test1 = eqObjects({ a: { z: 1, g: {a:1, b:2, c:{a:1}} }, b: 2 }, { a: { z: 1, g: {a:1, b:2, c:{a:1}} }, b: 2 }); // => true
// const test2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
// const test3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
// console.log(test1);
// console.log(test2);
// console.log(test3);



// const eqObjects = function(object1, object2) {
//   for (let key in object1) {
//     if (Array.isArray(object1[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }

//   return Object.keys(object1).length === Object.keys(object2).length;
// };





