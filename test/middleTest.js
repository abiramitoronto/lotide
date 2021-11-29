const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]),true); // => should PASS
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]),true); // => should PASS