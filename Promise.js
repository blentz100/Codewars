/* A promise is a promise
 *
 * https://www.codewars.com/kata/5b61d6ef07a266d40b000097/train/javascript
 *
 * Create a resolved javascript Promise that will return 'Hello World!'.
 *
 * Help: https://javascript.info/promise-basics
*/


function promiseHelloWorld() {
let promise = new Promise(function(resolve, reject) {
  resolve("done");})
	return promise;

}


