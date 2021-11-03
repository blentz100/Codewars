function rentalCarCost(d) {
  if(d < 3){
    //costs days * 40
    return (d * 40);
  }
  else if (d >= 3 && d < 7){
    //costs days *40 - 20
    return ((d * 40) - 20)
  }
  else {
    //cost is days * 40 -50
    return ((d *40) - 50)
  }
  
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));

