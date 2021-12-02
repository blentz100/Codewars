//https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript
/*
 * Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose' mountMoose.artist => 'The Snazzy Moose' You
will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The
output should be how many new listeners the song gained on that day out of all
listeners. Names should be treated in a case-insensitive manner, i.e. "John" is
the same as "john".

Example const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// These are all new since they are the first listeners.

// day 2
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Luke and Amanda are new, john already listened to it the previous day
Also if the same person listened to it more than once a day it should only count
them once.

Example const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
mountMoose.howMany(['John', 'joHN', 'carl']); => 2 Good luck!

*/
class Song {
  constructor(title, artist){
    this.title = title;
    this.artist = artist; 
    this.baseArray = [];
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

