function reverseBits (n) {
	console.log('Initial value n is: ' + n);


	let binary = n.toString(2)
	console.log("value of n (binary variable is): " + binary);

  	let answer = binary.split("").reverse().join("");
	console.log ("answer is: " + answer);


	return parseInt(answer,2) 
}

console.log(reverseBits(34));
