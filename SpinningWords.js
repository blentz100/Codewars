/* Stop spinning my words
 * Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

*/

function spinWords(words){
let newArray = words.split(" ");
let answer = "";
let overFive = "";

for (let i = 0; i < newArray.length; i++){
	if (newArray[i].length < 5){
		answer += newArray[i] + " ";
	}
	else {
		for (let x = newArray[i].length - 1; x >=  0; x--){
		overFive += newArray[i].charAt(x);	
		}
		answer += overFive + " ";
		overFive = "";
	}
}

return answer.trim();
}

console.log(spinWords("Just kidding there is still one more"));
