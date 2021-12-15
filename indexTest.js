const assert = require('assert');
const Rooster = require('../index');

// describe a rooster
describe('Rooster', () => {
  // for announce at dawn
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {

      // setup
  const expected = 'cock-a-doodle-doo!';
      //exercise
  const actual = Rooster.announceDawn();
      //verify
assert.equal(actual, expected);

    });
  });
  // for time at dawn
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {

      // setup
  const inputNumber = 20;
  const expected = '20';
      //exercise
  const actual = Rooster.timeAtDawn(inputNumber);
      //verify
assert.strictEqual(actual, expected);

    });
  
  it('throws an error if passed a number less than 0', () => {

      // setup
  const inputNumber = -5;
  const expected = RangeError;
      //verify
assert.throws(() => {
Rooster.timeAtDawn(inputNumber)
}
, expected);

    });
  it('throws an error if passed a number less than 0', () => {

      // setup
  const inputNumber = 25;
  const expected = RangeError;
      //verify
assert.throws(() => {
  // exercise
Rooster.timeAtDawn(inputNumber)
}
, expected);

    });
});
});
