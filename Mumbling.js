/*
 * Mumbling
 * https://www.codewars.com/dashboard
 * This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {

let answer = "";
let word = "";


for (i = 0; i < s.length; i++){
	console.log("Outer Loop, loop# " + i);
	let letter = s.charAt(i);
	word = s.charAt(i).toUpperCase() + letter.repeat(i).toLowerCase();
	answer = answer +  word + "-";
	console.log("   word is:" + word);
	console.log("   answer is: " + answer);
}
answer = answer.slice(0, answer.length-1);

return answer;
}

console.log(accum("cwAt"));
