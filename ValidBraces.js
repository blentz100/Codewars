/* Valid Braces
 * https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/java
 *
 * Write a function that takes a string of braces, and determines 
 * if the order of the braces is valid. It should return true if 
 * the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces 
new characters: brackets [], and curly braces {}. Thanks to 
@arnedag for the idea!

All input strings will be nonempty, and will only consist of 
parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?

A string of braces is considered valid if all braces are 
matched with the correct brace.

Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

convert string to array
iterate thru array
push all open chars onto openstack
then test for matchs with any closing chars
if a closing char comess up and doesnt match with the top
of the stack, then return false


*/

function validBraces(braces){

	let stack = braces.split('');
	let openStack = [];
	for (i=0; i < stack.length; i++){
		if (stack[i] == '[' || stack[i] == '{' || stack[i] == '(' ){
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
	if ((openChar == '{' && closeChar == '}') ||
	    (openChar == '(' && closeChar == ')') ||
	    (openChar == '[' && closeChar == ']')){
		return true;
	}
	else {	return false;}
}
console.log(validBraces("(})"));

