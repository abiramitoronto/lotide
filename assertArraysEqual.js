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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should FAIL
