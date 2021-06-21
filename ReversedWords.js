// Reversed words challenge for Front End Office Hours on 6/21/2021
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e


function reverseWords(str){
	console.log("Got inside the reverseWords function, and str is now equal to : " + str);

	let myArray = str.split("");

	let myReversedArray = myArray.reverse();

	console.log(myReversedArray.join(""));



  return str; // reverse those words
}

console.log(reverseWords("Today is Prime Day!"));
