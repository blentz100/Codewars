/*
https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript

Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing 
the binary is 100001011 which is 267.

You can assume that the number is not negative.

*/

function reverseBits(n){
	let binary = n.toString(2);
	let answer = [];
  	let stringResult = "";
  	let finalAnswer = "";
  
	for (let x = binary.length -1; x >=  0; x--){
		answer.push(binary.charAt(x));
	}

	stringResult = answer.join('');

	finalAnswer = parseInt(stringResult,2);

	return finalAnswer;
}

console.log(reverseBits(417));
