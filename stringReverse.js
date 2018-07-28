//  https://www.freecodecamp.org/challenges/reverse-a-string
function reverseString(str) {
  
  var strArray =
  Array.from(str);
  // str.split(""); //MUST have delimiter. 'Empty' string splits on each character
  strArray.reverse();
  str = strArray.join(''); //if brackets empty () joined string will be comma delimited
  						   // similarly if using .toString
  return str;
}

reverseString("hello");