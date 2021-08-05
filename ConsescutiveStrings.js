/*https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
You are given an array(list) strarr of strings and an integer k. Your task is to
return the first longest string consisting of k consecutive strings taken in the
array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]


Example #2 we came up with during office hours to help figure out how to solve for k, not 
just when k is 2.

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 3
treefolingtrashy
folingtrashblue
trashyblueabcdef
blueabcdefuvwxyz

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".
*/
function longestConsec(strarr, k) {
  // We are reversing the strarr because it allows us to more easily keep track
  // of the first longest concatenated string. This may or may not work when
  // when get the k variable working, but leave it here for now, it works when
  // assume k is 2.
  let reversedStrarr = strarr.reverse();
  let answer = "";
  let answerLength = 0;
 
  
  for(i = 0; i < reversedStrarr.length -1; i++){
    //We thought that putting a 2nd for loop in here might be a good idea to
    //incorporate the k variable in to the solution, didn't have time to
    //explore, but next time start here.
    let newString = (reversedStrarr[i+1] + reversedStrarr[i] );
    console.log(newString + " length is: " + newString.length);
    
    if (newString.length >= answerLength){
      answerLength = newString.length;
      answer = newString;
    }
    console.log('answer is: ' + answer);
    return answer;
  }
}
longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],2);
