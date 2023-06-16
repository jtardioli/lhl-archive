const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('check if count is correct', () => {
    assert.strictEqual(countLetters("aa bbb cccc ddddd")["a"], 2);
  });
});


