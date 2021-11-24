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

const middle = function(arr) {
  let midArr = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return midArr;
  } else if (arr.length % 2 === 0) {
    midArr.push(arr.length / 2);
    midArr.push((arr.length / 2) + 1);
  } else if (arr.length % 2 === 1) {
    midArr.push(Math.floor(arr.length / 2) + 1);
  }
  console.log(arr + " " + midArr);
  return midArr;
};

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]),true); // => should PASS
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]),true); // => should PASS


