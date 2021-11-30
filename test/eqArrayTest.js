//const assertEqual = require('../assertEqual');
//const eqArrays = require('../eqArrays');
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assert = require('chai').assert;
const _ = require('../index');
//const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] & [1, 2, 3]", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
},it("returns true for ['5'] & ['5']", () => {
  assert.strictEqual(_.eqArrays(['5'], ['5']),true); 
}));