/* https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

This article helped explain the 'this' keyword. https://javascript.info/object-methods
I was missing that. That's how the original string gets accessed withing the 
toJadenCase function. That took a while to figure out.

This article helped with the capilization https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods

*/


String.prototype.toJadenCase = function (){
	let answer = this.split(" "); 
	answer = answer.map(toUpper);
	answer = answer.join(" ");
	return answer;	
};

function toUpper (value, index, array){
	//console.log("value is: " + value);
	//console.log("index is: " + index);
	//console.log("array is " + array);
	//console.log("value.charAt(0) is: " +  value.charAt(0));
	//console.log("value.charAt(0).toUpperCase() is: " +  value.charAt(0).toUpperCase());
	//console.log("value has a type of: " + typeof value);
	//console.log("value at this point is: " + value);

	let firstLetter = value.slice(0,1);
	//console.log("firstLetter is: " + firstLetter);

	let capitalizedValue = value.replace(firstLetter, firstLetter.toUpperCase());
	//console.log("capitalizedValue  is: " + capitalizedValue);

	value = capitalizedValue;
	//console.log("After assigned capitalizedValue to value, value is: " + value);


	return value;
	
}



var str = "how can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); 


