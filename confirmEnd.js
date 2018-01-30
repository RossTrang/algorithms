/*  https://www.freecodecamp.org/challenges/confirm-the-ending
- DO NOT USE .endsWith()
- str.substr(-3) is treated as str.substr(str.length - 3)
*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  if (str.substr(-target.length) === target) return true; else return false;
  // str = str.substr(-target.length) === target ? true : false;
  // return str;
}

confirmEnding("Bastian", "ian");