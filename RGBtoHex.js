/*https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
 * RGB to Hex Conversion
 *
 * The rgb function is incomplete. Complete it so that passing in 
 * RGB decimal values will result in a hexadecimal representation 
 * being returned. Valid decimal values for RGB are 0 - 255. 
 * Any values that fall out of that range must 
 * be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the 
shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

Psuedocode
Loop thru arguments
- put them all in the range of 0 - 255
- round to nearest whole number
- convert to Hex with toString(16)
- pad them with leading 0 if needed
*/

function rgb(r, g, b){
	let answer = "";

	for (let i = 0; i < arguments.length; i++){
		if (arguments[i] < 0){arguments[i] = 0;}
		if (arguments[i] > 255) {arguments[i] = 255;}
		arguments[i] = Math.round(arguments[i]);
		arguments[i] = arguments[i].toString(16);
		arguments[i] = arguments[i].padStart(2, '0');
		answer += arguments[i];
		
	}

	return answer.toUpperCase();

}

console.log(rgb(232,54,5));

