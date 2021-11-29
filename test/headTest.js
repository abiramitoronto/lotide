// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');
const head = require('../head');
// FUNCTION HEAD


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
