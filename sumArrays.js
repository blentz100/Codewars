// Sum Numbers
function sum (numbers) {
  //console.log("numbers is: " + numbers)
  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++){
    //console.log(numbers[i])
    sumOfNumbers = sumOfNumbers + numbers[i];
    // first iteration of the for loop
    // 0         =      0       +.   1
    
    // second iteration of the for loop
    //  1        =      1       +.   5.2
    
    // third iteration
    // 6.2     =.      6.2.   +       4
  
  } 
  console.log(numbers[0] + numbers[numbers.length - 4]);
  return sumOfNumbers;
}
console.log(sum([1, 5.2, 4, 0, -1]));
