//https://www.codewars.com/kata/5899642f6e1b25935d000161/solutions/javascript/me/best_practice

function mergeArrays(arr1, arr2) {
  let newArray = arr1.concat(arr2)
  console.log(newArray)
  
  //Not 100% sure how this works, but I found it at
  //https://www.w3schools.com/jsref/jsref_sort.asp
  //and it seems to work, figure out later
  newArray.sort(function(a, b){return a-b});
  console.log(newArray);
  
  //filter
  //const answer = newArray.filter(num => num * 3 > 27);
  
  let answerArray = [];
  for(let i = 0; i < newArray.length; i++){
    if(!answerArray.includes(newArray[i])){
      answerArray.push(newArray[i]);
    }
  }
  console.log(answerArray)  
  return answerArray;
}

let incomingArr1 = [1, 3, 5, 7, 9, 1];

let incomingArr2 = [10, 8, 6, 4, 2];
mergeArrays(incomingArr1, incomingArr2);
