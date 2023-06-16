const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe('#countOnly', () => {
  it('checks number of the counted value is correct', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('checks uncounted value is undefined', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
});



