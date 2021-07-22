/*https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".
*/
function longestConsec(strarr, k) {
    // your code\
  let reversedStrarr = strarr.reverse();
  let answer = "";
  let answerLength = 0;
  
  for(i = 0; i < reversedStrarr.length -1; i++){

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
