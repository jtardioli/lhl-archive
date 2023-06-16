# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jtardioli/lotide`

**Require it:**

`const _ = require('@jtardioli/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(array1, array2, expected)`: retruns boolean if arrays are equal

* `assertEqual(actual, expected)`: console logs an error if values are not equal

* `assertObjectsEqual(object1, object2)`: console logs error if objects are not equal

* `countLetters(sentence)`: returns an object with the count of how many times a given letters appears in the sentence

* `countOnly(allItems, itemsToCount)`: returns object that counts how many times inputed values appear in an array

* `eqArrays(array1,array2)`: returns boolean if arrays are equal

* `eqObjects(object1, object2)`: returns boolean if objects are equal

* `findKey(object, callback)`: returns the key for the value in the 
object that makes the callback return true

* `findKeyByValue(Object, Value)`: returns the key of the object that matches the value

* `flatten(array)`: flattens an arrray by removing its nesting

* `head(array)`: returns the first value in an array

* `letterPositions(sentece)`: returns an object with each letter as a 
key, the value is an array with the indices of where the letter appears in the sentence

* `map(array, callback)`: modifies each value in an array as specified by the callback

* `middle(array)`: returns the middle value of an array

* `tail(array)`: returns an array with the first value removed

* `takeUntil(data, callback)`: returns an array with all values before 
the callback returns true

* `takeUntil(source, itemToRemove)`: returns an array specified items removed

