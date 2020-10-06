/*Dubstep
 *
 * https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
 *
 * Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

 *
 *
  */

function songDecoder(song){
	let wub = "WUB";

	answer = song;

	if(answer.indexOf(wub) == -1){
		return answer;
	}
	
	for (x = 0; x < 100; x++){
	console.log("At Top of For Loop, round number: " + x);
	console.log("Original Input is: " + song);
	wubIndex = answer.indexOf(wub);
	console.log("wubIndex is: " + wubIndex);
	let startString = answer.slice(0, wubIndex);
	console.log("startString is: " + startString);
	let endString = answer.slice(wubIndex + 3);
	console.log("endString is: " + endString);
	if(startString.endsWith(" ")){
		answer = startString + endString;
	}

	else{
	answer = (startString + " " + endString);
	}
	console.log("answer is: " + answer);
	console.log(" ");
	if (answer.indexOf(wub) == -1){

	console.log("answer.length is: " + answer.length);
	if(answer.startsWith(" ")){
		answer = answer.slice(1, answer.length );	
	}

	if(answer.endsWith(" ")){
		answer = answer.slice(0, answer.length -1);	
	}
	
		return answer;
	}

	}
}


console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

