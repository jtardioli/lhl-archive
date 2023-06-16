const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../namerInverter');

describe('nameInverter', function() {
  it('input "" should output ""', () => {
    assert.equal(nameInverter(''), '');
  });
  it('return a single name when passed a single name', () => {
    assert.equal(nameInverter('Josh'), 'Josh');
  });
  it('return a single name when passed a single name with extra spaces', () => {
    assert.equal(nameInverter(' Josh '), 'Josh');
  });
  it('return a last-name, first-name when passed a first and last-name', () => {
    assert.equal(nameInverter('Joshua Tardioli'), 'Tardioli Joshua');
  });
  it('Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names', () => {
    assert.equal(nameInverter(' Joshua Tardioli '), 'Tardioli Joshua');
  });
  it('return a last-name, first-name when passed a first and last-name', () => {
    assert.equal(nameInverter('Dr. Charles'), 'Dr. Charles');
  });
  it('return a last-name, first-name when passed a first and last-name', () => {
    assert.equal(nameInverter('Mrs. Charles'), 'Mrs. Charles');
  });
  it('return a honorific last-name, first-name when passed honorific first-name last-name', () => {
    assert.equal(nameInverter('Dr. Charles Bob'), 'Dr. Bob Charles');
  });
  it('return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the wordse', () => {
    assert.equal(nameInverter(' Dr. Charles Bob '), 'Dr. Bob Charles');
  });
  it('throw an error when name is undefined', () => {
    assert.equal(nameInverter(), 'throw Error');
  });
});