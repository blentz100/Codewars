/* Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double
 * Cola" drink vending machine; there are no other people in the queue. The
 * first one in the queue (Sheldon) buys a can, drinks it and doubles! The
 * resulting two Sheldons go to the end of the queue. Then the next in the queue
 * (Leonard) buys a can, drinks it and gets to the end of the queue as two
 * Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like
this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny Write a program
that will return the name of the person who will drink the n-th cola.
*/
//Maybe do some kind of a dictionary solution
//
//

function whoIsNext(names,r){
	let innerIndex = 0;
	for(let outerIndex = 0; outerIndex < r; outerIndex++){
		innerIndex = 0;	
		
		if outerIndex > names.length
	}
}





/*
function whoIsNext(names, r){
	while( r >= 1){
		if (r == 1){
			return names[0];
		}
		else {
			let temp = names.shift();
			names.push(temp);
			names.push(temp);
			//console.log(names);
		}
		r--;
	}
}*/

whoIsNext(["sam", "john"], 6 ); 
/*
function whoIsNext(names, r){
	while( r >= 1){
		if (r == 1){
			return names[0];
		}
		else {
			let temp = names.shift();
			names.push(temp);
			names.push(temp);
			//console.log(names);
		}
		r--;
	}
}
*/


// == "Penny"
//whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"
