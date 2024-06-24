/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


function countVowels(str) {
    // Your code here
    let capsAndLower = ['A', 'E', 'I', 'O', 'U','a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for(let i=0; i<str.length; i++){
      for(let j=0; j<capsAndLower.length; j++){
        if(str[i] === capsAndLower[j]) count++;
    }
    }
 return count
}

//another solution
function countVowels(str) {
  let count = 0;
  
  for(let i=0;i<str.length;i++){
    if(str[i]=='A' || str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'||str[i]=='a' || str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u') 
      count++
  }

  return count

}
 
// countVowels('EaSiEr')

module.exports = countVowels;