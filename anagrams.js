/*
 * https://www.codewars.com/kata/523a86aa4230ebb5420001e1
 *
 * Where my anagrams at?
96222488% of 5,10916,525 of 50,911sandbochs JavaScript TRAIN AGAINNEXT KATA
Details Solutions Forks (13) Discourse (319) Collect| What is an anagram? Well,
two words are anagrams of each other if they both contain the same letters. For
example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false Write a function that will find all the anagrams of a
word from a list. You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are
none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer',
'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams (word, words){
	console.log ("word is: " + word + "  words is: " + words);
	console.log(" ");	

	let answer = [];
	let newWordArray = word.split("");
	newWordArray.sort();
	let newWord = newWordArray.join("");

	for(let i=0; i<words.length; i++){
		console.log("top of the for loop");
		console.log(words[i]);

		let newArray = words[i].split("");
		console.log("newArray is: " + newArray);
		newArray.sort();
		console.log("newArray sorted is: " + newArray);
		let newString = newArray.join("");
		console.log("newString is: " + newString);
		if (newWord == newString){
			answer.push(words[i]);
			console.log("got inside if");
		}
	}
	console.log("Solution is: " + answer);
return answer;
}


console.log(anagrams('abba', ['aabb','abcd','bbaa','dada']));
//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
//console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));


