function countBy(x, n) {
  var solutionArray = [];
  var newX = x;
  for(let i = 0; i < n; i++){
    solutionArray.push(newX);
    newX = x + newX;
  }
  return solutionArray;
}
