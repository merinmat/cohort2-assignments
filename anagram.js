/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  let counter1 = {};
  let counter2 = {};

 for(let val of str1.toUpperCase()){
  counter1[val] = (counter1[val] || 0) + 1;
 }

 for(let val of str2.toUpperCase()){
  counter2[val] = (counter2[val] || 0) + 1;
 }
 
 for(let key in counter1){
  if(counter1[key] !== counter2[key]) return false
 }
 return true

}

// isAnagram('Debit Card', 'Bad Credit')


module.exports = isAnagram;
