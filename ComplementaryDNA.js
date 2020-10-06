/*
 * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
*/
function DNAStrand(dna){

	let answer = "";

	for(x in dna) {
		console.log(dna[x]);
		if (dna[x] == "A"){
			answer+= "T";
		}

		if (dna[x] == "T"){
			answer+= "A";
		}
		if (dna[x] == "G"){
			answer+= "C";
		}
		if (dna[x] == "C"){
			answer+= "G";
		}
	}

	
	return answer;
}


console.log(DNAStrand("ATTGC"));
