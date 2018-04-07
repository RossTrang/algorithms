//  https://www.freecodecamp.org/challenges/reverse-a-string
function reverseString(str) {
  strArr = Array.from(str);
  return strArr.reverse().join('');
}

reverseString('123! abc!')