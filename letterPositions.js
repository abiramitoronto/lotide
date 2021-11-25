const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`   Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  const arrT = Array(arr2);
  if (arr1.length === arrT.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arrT[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let test = String(sentence);
  let n = test.length;
  for (let i = 0; i < n; i++) {
    if (test[i] !== ' ') {
      if (results[test[i]]) {
        results[test[i]].push(i);
      } else {
        results[test[i]] = [i];
      }
    }
  }
  // logic to update results here
  console.log(results);
  return results;
};

letterPositions("lighthouse in the lab");
assertArraysEqual(letterPositions("hello".e,[1]));
