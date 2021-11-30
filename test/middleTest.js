//const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');
//const middle = require('../middle');
//assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]),true); // => should PASS
//assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]),true); // => should PASS

const assert = require('chai').assert;
const _ = require('../index');
//const middle   = require('../middle');

describe("#tail", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
},it("returns [2, 3] for [1, 2, 3, 4]", () => {
  assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]); 
}));