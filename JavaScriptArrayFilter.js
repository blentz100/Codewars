//https://www.codewars.com/kata/514a6336889283a3d2000001/solutions/javascript/me/best_practice

function getEvenNumbers(numbersArray){
  // filter out the odd numbers  
  let filteredArray = numbersArray.filter(number => number % 2 == 0)
  return filteredArray;
}

console.log(getEvenNumbers([2,4,5,6]));
