//https://www.codewars.com/kata/563e320cee5dddcf77000158/
//This code was written as a group effort during Promineo Tech
//Front End Developer Office Hours on 7/2/21
//Thank you to all who contributed. If you would like to add your
//name as credit to the code, please submit a pull request

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
 
  //We need to loop through the array to get each of the elements in the array
  //so we can add them together, 
  //and then divide by the total number elements
  let sum = 0;
  console.log("we are in the getAverage function");
  for(let i = 0; i < marks.length; i++){
    console.log("we are in the loop");
    sum = sum + marks[i];
  }
  console.log("inside getAverage, sum is: " + sum);
  
  let unroundedAnswer = sum /marks.length;
  
  let roundedAnswer =  Math.floor(unroundedAnswer);
  
  return roundedAnswer;
}

let grades = [70,80,90,60];
getAverage(grades);
