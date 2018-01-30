/*  https://www.freecodecamp.org/challenges/check-for-palindromes
- convert str.toLowerCase
- remove non-alphanumerics
- create reversed string    // need to covert to array?
- compare                   // use sort comparison feature? Need new array element
*/
function palindrome(str) {
  
  palStr = str.toLowerCase();
  palStr = palStr.replace(/[\W\_]/g,""); // return palStr;
  palArray = palStr.split(''); // Array.from(palStr);
  palArray.reverse();
  revStr = palArray.join(''); // return revStr;
  
  if (palStr.localeCompare(revStr) === 0) return true;
  else return false;

}

palindrome("A man, a plan, a canal. _Panama");
