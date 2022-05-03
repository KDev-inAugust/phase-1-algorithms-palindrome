function isPalindrome(word) {
  // Write your algorithm here
  let stringLength = word.length;
  console.log('string length =' + stringLength)
    let forward=[];
    let backwards=[];
    //dealing with an odd length string with common middle letter 
    if(stringLength%2===1){
        let adjustedIndex=stringLength-1;
        adjustedIndex=adjustedIndex/2;
          for (x=adjustedIndex; x>0; x--){
          forward.push(word[x-1]);
          }
          for (x=stringLength-1; x>adjustedIndex; x--){
            backwards.push(word[x]);
          }
          
      }

    if (stringLength%2===0){
        let adjustedIndex=stringLength/2;

          for(x=adjustedIndex; x>0; x--){
            forward.push(word[x-1]);
          }
          for (x=stringLength; x>adjustedIndex; x--){
            backwards.push(word[x-1]);
          }
        }
  console.log(forward);
  console.log(backwards.reverse());
            
  let answer = !!(forward.toString()===backwards.toString());
 return answer;
}


isPalindrome('racecar')


/* 
  Add your pseudocode here
  use the .length method to find the length of the string
  begin comparing values from inside to outside using array notation
  figure out how to deal with the the middle charachter by knowing
  that if the string length is odd then the middle must be "in common"
  with the two sides. for odd - length-1 divived by 2 then write comparison
  from front to back and back to front. using the number of the even sides
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

//-----------test stuff
/* let string = "racecar";
let length = string.length;
console.log("racecar"[length-1]);


if (length%2===1){
console.log('its equal to 1')
} */

