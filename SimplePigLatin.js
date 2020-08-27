function pigIt(str){
	let pigLatinString = "";
	let chunks = str.split(" ");
	for (x of chunks){
		//test for punctuation
		if (x == "!" || x == "?" || x =="."){
			pigLatinString += x;
		}
		//for everything else, change it to piglatin
		else{
		//use substringmethod to segment out the two parts of the chunk	
		pigLatinString += (x.substring(1) +  x.substring(0,1) + 'ay ');
		}
	}
	return pigLatinString.trimRight();
}

console.log(pigIt('Pig latin is cool'));




