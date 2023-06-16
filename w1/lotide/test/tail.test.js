const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe('#tail', () => {
  it('ensure we get back two elements', () => {
    assert.strictEqual(result.length, 2);
  });
  it('ensure first element is "Lighthouse"', () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it('ensure second element is "Labs"', () => {
    assert.strictEqual(result[1], "Labs");
  });
  it('single element should return nothing', () => {
    assert.strictEqual(tail(["hi"]).length, 0);
  });
  it('empty array should return nothing', () => {
    assert.strictEqual(tail([]).length, 0);
  });
});



// // My Tests
// assertEqual(tail(["hi"]).length, 0); // ensure we get back two elements
// assertEqual(tail([]).length, 0); // ensure we get back two elements
