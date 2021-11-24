const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`   Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(toCount) {

  const obj = {};

  for (const letters of toCount) {
    if (obj[letters]) {
      obj[letters] += 1;
    } else {
      obj[letters] = 1;
    }
  }
  console.log(obj);
  return obj;

};
let result = countLetters("Letters");
assertEqual(result["L"],1);
