/*
In this little assignment you are given a string of space 
separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, 
and highest number is first.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

*/

function highAndLow(numbers) {
	
	var newArray = Array.from(numbers.split(' '),Number);
	
	//Not 100% sure how this syntax works, but it's taken from the MDN page above 
	//it addresses the issue where the sort() method doesn't "properly" sort
	//arrays of numbers.
	newArray.sort(compareNumbers);
	

	let low = newArray[0];
	let high = newArray[newArray.length - 1];
	return (high.toString() + " " + low.toString());

};

function compareNumbers(a, b) {
  return a - b;
}

console.log(highAndLow("1 100 9 3 4 -5"));



