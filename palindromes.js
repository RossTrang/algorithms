var palindromes = function(str) {

  palStr = str.toLowerCase().replace(/[\W\_]/g,"");
  palArray = palStr.split(''); // Array.from(palStr);
  revStr = palArray.reverse().join('');
  
  if (palStr.localeCompare(revStr) === 0) return true;
  else return false;

}

module.exports = palindromes
