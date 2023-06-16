const assertEqual = require('./assertEqual');

const head = function(array) {
  return array ? array[0] : undefined;
};

module.exports = head;

