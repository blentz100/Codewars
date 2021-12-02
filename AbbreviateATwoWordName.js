/*
 * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript
 *
 * Write a function to convert a name into initials. This kata strictly takes
 * two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/


function abbrevName(name){

  let nameArray = name.split("");
  console.log(nameArray);
  
  let spaceIndex = nameArray.indexOf(" ");
  console.log(spaceIndex);

  let answer = nameArray[0] + "." + nameArray[spaceIndex +1]
    // code away
  return (answer.toUpperCase())
}

console.log(abbrevName('Sam Harris'))
