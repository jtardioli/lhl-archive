"use strict";

/* Question 04

Write a function which creates and returns a promise.

Its job will be similar to that of Question 01:
> Run a given (callback) function after a delay.

However:
- if the given callback returns a falsy value, the promise should fail (reject)
  the string "Falsy value retrieved" should be sent through to the reject function
- if the given callback returns a truthy value, the promise should pass (resolve)
  the return value of the executed callback should be sent through to the resolve function

*/

const doShortlyExpectingTruthy = function(callback, delay, data) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const call = callback(data);
      if (!call) {
        //reject
        reject("Falsy value retrieved");
      } else {
        // resolve
        resolve(call);
  
      }
    }, delay);

    
  });
  return p;
};


// Don't change below:
module.exports = { doShortlyExpectingTruthy };

