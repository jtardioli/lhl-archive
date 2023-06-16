const takeUntil = require('../takeUntil');
const assert = require('chai').assert;



describe('#takeUntil', () => {
  it('cuts array after condition is met', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, (x) => x < 0);
    assert.deepEqual(results1,[1, 2, 5, 7, 2]);
  });
});

