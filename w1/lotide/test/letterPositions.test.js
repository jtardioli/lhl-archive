const assert = require('chai').assert;
const letterPositions = require('../letterPositions');



describe('#letterPositions', () => {
  it("maps the letter to its index", () => {
    assert.deepEqual(letterPositions("hello")["h"], [0]);
    assert.deepEqual(letterPositions("hello")["e"], [1]);
    assert.deepEqual(letterPositions("hello")["l"], [2,3]);
    assert.deepEqual(letterPositions("hello")["o"], [4]);
  });

});


// assertArrayEqual(, true);
// assertArrayEqual(letterPositions("hello")["e"], [1], true);
// assertArrayEqual(letterPositions("hello")["l"], [2, 3], true);
// assertArrayEqual(letterPositions("hello")["o"], [4], true);