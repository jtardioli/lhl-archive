const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('returns array without inputed value', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});


