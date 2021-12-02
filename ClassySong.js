//https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript

class Song {
  constructor(title, artist){
    this.title = title;
    this.artist = artist; 
    this.baseArray = [];
    this.madeupoutofthinair = 0;
  }
  
  howMany(listenerArray){
    let newListeners =0;
    for(let i=0; i < listenerArray.length; i++){
      if(this.baseArray.includes(listenerArray[i].toUpperCase())){
        console.log("this is a repeat person, do nothing");
      }
      else{
        this.baseArray.push(listenerArray[i].toUpperCase());
        newListeners += 1;
        }
    }
    return newListeners;
  }

}


let mySong = new Song('Amazing Grace', 'Aretha Franklin');

let listenerArray = ["Linda", "Marc", "Brendan", "Billy", "Charlie", "Christina"];
let listenerArray2 = ["Linda", "NewPerson1", "NewPerson2"];


mySong.howMany(listenerArray);
console.log(mySong.baseArray);

mySong.howMany(listenerArray2);
console.log(mySong.baseArray);

