/* Valid Parentheses
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript 

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

*/

function validParentheses(parens){

	let stack = parens.split('');
	let openStack = [];
	for (i=0; i < stack.length; i++){
		if (stack[i] == '(' ){
			openStack.push(stack[i]);
		}
		else if (match(openStack[openStack.length -1], stack[i])){
			openStack.pop();
		}
		else {
			return false;
		}
	}
	if (openStack.length == 0){return true;}
	else {return false;}
}

function match(openChar, closeChar){
	if ( openChar == '(' && closeChar == ')'){
		return true;
	}
	else {	return false;}
}
console.log("() => true " + validBraces("()"));
console.log(")(())) => false " + validBraces(")(()))"));
console.log("( => false" + validBraces("("));
console.log("(())((()())()) => true" + validBraces("(())((()())())"));
