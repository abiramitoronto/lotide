const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`   Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const without = function(arr1,arr2) {
  let outarr = arr1.filter(item => !arr2.includes(item));
  console.log(outarr);
};

without([1, 2, 3], [1]); // => [2, 3];
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"];
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
