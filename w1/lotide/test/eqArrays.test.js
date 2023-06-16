const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// const test1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
// const test2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
// const test3 = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
// const test4 = eqArrays([[2, 3, [1,2,3]], [4]], [[2, 3, [1,2,3]], 4]); // => false
// const test5 = eqArrays([[2, 3, [1,2,3]], [4]], [[2, 3, [1,2,3]], [4]]); // => true
// assertEqual(test1,true);
// assertEqual(test2,false);
// assertEqual(test3,false);
// assertEqual(test4,false);
// assertEqual(test5,true);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 4, 3], [1, 2, 1]), false);
// assertEqual(eqArrays([1, 2, 1], [1, 1, 2]), false);
// assertEqual(eqArrays([1, 2, 1, 4], [1, 1, 2]), false);
