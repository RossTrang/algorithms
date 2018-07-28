//   https://www.freecodecamp.org/challenges/slasher-flick
// using .splice we must pass a deleteValue(=howMany) greater than 0, or
// it will expect a value to add to the array.

function slasher(arr, howMany) {
  
  if (howMany > 0) {arr.splice(0, howMany);} //else {return arr;}
  
  return arr;
}

slasher([1, 2, 3], 2);
