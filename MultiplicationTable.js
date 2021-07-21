//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
//
//
function multiTable(number) {
  // good for luck
  
  let myString = '';
  
  for(i = 1; i <= 10; i++){
    let product = i * number;
    //this is a nice way to catch the last line issue from Christina
    //we learned you could put ternary operators in template literals
    myString += `${i} * ${number} = ${product}${i<10 ? '\n': ''}` 
  }
  
  //This is an ugly way to catch printing out the last line with no newline
  //product = 10 * number;
  //myString += `10 * ${number} = ${product}` 
  return myString;
}

