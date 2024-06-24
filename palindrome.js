/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

//   let end = str.length - 1;

//   for(let i=0; i<str.length/2;i++){
//     if(str[i] !== str[end]) return false
//     end--
    
// }
// return true 

return str.toLowerCase().replace(/[.,?:;\/()! _-]/g, '') == str.replace(/[.,?:;!\/() _-]/g, '').toLowerCase().split('').reverse().join('');


}


module.exports = isPalindrome;
