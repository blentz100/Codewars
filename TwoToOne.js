/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

Take 2 strings s1 and s2 including only letters from ato z. 
Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
	var newString = "";

	//Iterate over first string, adding new characters to new string
	for (var i = 0; i < s1.length; i++){
		//console.log(s1.charAt(i));
		if (newString.indexOf(s1.charAt(i)) == -1){
			newString += (s1.charAt(i));
		}
	}

	//Iterate over second string, adding new characters to new string
	for (var i = 0; i < s2.length; i++){
		//console.log(s2.charAt(i));
		if (newString.indexOf(s2.charAt(i)) == -1){
			newString += (s2.charAt(i));
		}
	}

	//Call sortString to get the string sorted
	sortedNewString = sortString(newString);

	return sortedNewString;;
}

//Convert string to array, sort, then return to string.
var sortString = function(text) {
    	return text.split('').sort().join('');
};


longest("xyaabbbccccdefww","xxxxyyyyabklmopq");
