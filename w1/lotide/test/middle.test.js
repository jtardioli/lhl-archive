const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('Empty array should return an empty array', () => {
    assert.deepEqual(middle([]), []);
  });
  it('1 item array should return empty array', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('2 item array should return empty array', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('2 item array should return empty array', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('return middle with array of odd length', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('return middle with array of even length', () => {
    assert.deepEqual(middle([1, 2, 3, 5]), [2, 3]);
  });
});


