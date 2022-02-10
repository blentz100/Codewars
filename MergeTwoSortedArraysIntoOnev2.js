https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
  
  //loop through arr2 and add all non duplicates to arr1
  for(let i = 0; i < arr2.length; i++ ){
    console.log(arr2[i]);
    
    //checking for duplicates
    if(arr1.includes(arr2[i]) == false){
      arr1.push(arr2[i]);
    }
  }
  
  console.log(arr1)
  
  //sorting the merged array before returning it
  return arr1.sort(function(a,b){
    console.log("***********")
    console.log('a is: ' + a)
    console.log('b is: ' + b)
    return a-b
  
  });
}

let arr1 = [1, 3, 5, 7, 9, 11, 12];
let arr2 = [1, 2, 3, 4, 5, 10, 12];
console.log(mergeArrays(arr1, arr2));


