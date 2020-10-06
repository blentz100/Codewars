/*
 * https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
 * Delete occurrences of an element if it occurs more than n times
 */


function deleteNth(arr,n){
  for (x = 0; x <  arr.length ; x++){
	console.log("At top of outer foor loop, arr["+ x + "] right now is: " + arr[x]);
	let totalOccurrences = 0;
	for (i = 0; i < arr.length; i++){
		console.log("      if arr[" + i + "] == arr [" + x + "]");
		if (arr[i] == arr[x]){
			totalOccurrences++;}
			if (totalOccurrences > n){
				arr.splice(i,1);
				totalOccurrences--;
				i--; //need to decrement to overcome the length getting messed up upon splicing
				console.log("      splice! New arr = " + arr);
			}
			console.log("      Bottom of inner loop. totalOccurences of: " + arr[x] + " is now: " + totalOccurrences);
		}
			console.log("       arr is: " + arr);
	}
	return arr;
}


console.log("Final arr is: " + deleteNth([19, 24, 19, 9, 18, 9, 18, 19, 24, 9, 19, 9, 19, 24, 19, 24, 24, 19, 24, 24, 18, 18, 18, 19, 24, 19, 18, 18, 24],1));
console.log("Expected  is: 19,24,9,18");
