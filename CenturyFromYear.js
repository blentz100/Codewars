//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  // Finish this :)
  
  let firstTwoDigits = 0;
  let lastTwoDigits = 0;
  
  let stringYear = String(year);
  console.log("stringYear: " + stringYear)
  console.log("typeof stringYear: " + typeof stringYear);
  
  lastTwoDigits = stringYear.slice(-2);
  console.log("lastTwoDigits: " + lastTwoDigits)
  
  firstTwoDigits = stringYear.slice(0,2);
  console.log("firstTwoDigits: " + firstTwoDigits)
  
  let lastTwoDigitsNumber = parseInt(lastTwoDigits, 10)
  console.log("lastTwoDigitsNumber : " + lastTwoDigitsNumber)
  console.log("typeof lastTwoDigitsNumber: " + typeof lastTwoDigitsNumber)
  
  let firstTwoDigitsNumber = parseInt(firstTwoDigits, 10)
  console.log("firstTwoDigitsNumber : " + firstTwoDigitsNumber)
  console.log("typeof firstTwoDigitsNumber: " + typeof firstTwoDigitsNumber)
  
  if(lastTwoDigitsNumber > 0){
    return firstTwoDigitsNumber + 1;
  }
  else{
    return firstTwoDigitsNumber;
  }
 
}

console.log(century(1705))
console.log('**********')
console.log('    ')
console.log('**********')
