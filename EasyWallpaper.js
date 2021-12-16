//https://www.codewars.com/kata/567501aec64b81e252000003/train/javascript

function wallpaper(l, w, h) {
    console.log(arguments)
    let roomArea = l * w * h;
    console.log("roomArea: " + roomArea);
  
    //let roomAreaWithCushion = roomArea + (roomArea * .15)
    //console.log("roomAreaWithCushion: " + roomAreaWithCushion)
  
    oneRoll = 52 * .01 * 10
    console.log("oneRoll: " + oneRoll)
  
    let rolls = Math.ceil(roomAreaWithCushion / oneRoll)
    console.log("rolls = " + rolls)
  
    if (rolls < 20){
      return numbers[rolls];
    }
    else{
      return numbers[20];
    }
}


console.log(wallpaper(6.3,4.5, 3.29))
