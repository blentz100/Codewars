function remove(incomingString){
  
  let newString = "";
  let counter = 0;
  
  for (let i = 0; i < incomingString.length; i++){
    if (incomingString[i] !== '!'){
      newString += incomingString[i];
    }
    else {
      //keep a running total of the bangs
      counter++;
    }
  }
  
  for (let j = 0; j < counter; j++){
    newString += "!"
  }
  console.log(newString);
  return newString;
}

console.log(remove("Hi! Hi!"))
