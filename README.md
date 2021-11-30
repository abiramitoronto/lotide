# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install abiramitoronto/lotide`

**Require it:**

`const _ = require('abiramitoronto/lotide');`

**Call it:**
`const results = _.head([1, 2, 3]) // => 1`
`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.middle([1, 2, 3]) // => 2`
`const results = _.eqArrays([1, 2, 3],[1, 2, 3]) // => true`

## Documentation

The following functions are currently implemented:

* `head(...)`: This function will return head of an Array.
* `tail(...)`: This function will return tail of an Array.
* `middle(...)`: This function will return middle of an Array. 
* `eqArrays(...)`: This function will return true when both the arrays are equal.