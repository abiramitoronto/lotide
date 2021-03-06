//const assertEqual = require('../assertEqual');
//const tail = require('../tail');
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const _ = require('../index');
//const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });
},it("returns [] for ['5']", () => {
  assert.deepEqual(_.tail(['5']), []); 
}));