//  https://www.freecodecamp.org/challenges/reverse-a-string
function reverseString(str) {
  return Array.from(str).reverse().join('');
}

reverseString('123! abc!')