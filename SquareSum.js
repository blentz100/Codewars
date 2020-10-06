/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/

function squareSum(numbers){
	let answer = 0;

	for (i = 0; i < numbers.length; i++){
	answer += numbers[i]*numbers[i];
	}
return answer;

}

console.log(squareSum([0,3,4,5]));


