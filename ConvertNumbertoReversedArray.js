//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
/*
 * Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number
within an array in reverse order.

Example:
 */



function digitize(n) {
  console.log("Inside digitize, n is: " + n);
  console.log("n is type: " + typeof n)
  let stringN = n.toString();
  console.log("stringN is type: " + typeof stringN);
  console.log("stringN is: " + stringN);
  
  let christinaArray = stringN.split("");
  console.log(christinaArray);
  
  let lindaSolution = christinaArray.reverse();
  console.log(lindaSolution);
  
  return lindaSolution;
  
}

digitize(348597);
