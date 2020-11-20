/* parseInt() reloaded
 In this kata we want to convert a string into an integer. The strings simply
 represent the numbers in words.

Examples:

"one" => 1 "twenty" => 20 "two hundred forty-six" => 246 "seven hundred
eighty-three thousand nine hundred and nineteen" => 783919 Additional Notes:

The minimum number is "zero" (inclusively) The maximum number, which must be
supported is 1 million (inclusively) The "and" in e.g. "one hundred and
twenty-four" is optional, in some cases it's present and in others it's not All
tested numbers are valid, you don't need to validate them 
*/

function parseInt(incomingString){
	let modifiedString = incomingString.split(" ");
	console.log(modifiedString);	
	let answer = '';

	for (x = 0; x < modifiedString.length; x++){
		console.log(modifiedString[x]);
		switch (modifiedString[x]){
			case 'one':
				answer += '1';
				break;
			case 'two':
				answer += '2';
				break;
			case 'three':
				answer += '3';
				break;
			case 'four':
				answer += '4';
				break;
			case 'five':
				answer += '5';
				break;
			case 'six':
				answer += '6';
				break;
			case 'seven':
				answer += '7';
				break;
			case 'eight':
				answer += '8';
				break;
			case 'nine':
				answer += '9';
				break;
			case 'ten':
				answer += '10';
				break;
			case 'eleven':
				answer += '11';
				break;
			case 'twelve':
				answer += '12';
				break;
			case 'thirteen':
				answer += '13';
				break;
			case 'fourteen':
				answer += '14';
				break;
			case 'fifteen':
				answer += '15';
				break;
			case 'sixteen':
				answer += '16';
				break;
			case 'seventeen':
				answer += '17';
				break;
			case 'eighteen':
				answer += '18';
				break;
			case 'nineteen':
				answer += '19';
				break;
			case 'twenty':
				answer += '20';
				break;
		}


	}
	return answer;
}

console.log(parseInt('one hundred twenty'));
