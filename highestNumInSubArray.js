/*  https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays
- find number of sub-arrays and iterate through each // nested for?
- use Math.max to find highest value of each      // DOT-DOT-DOT !!!!
- write new array
*/
function largestOfFour(arr) {
  // You can do this!
  var highestNums = [];
  
  arr.forEach(function(subArray) {
      highest = Math.max(...subArray); //console.log(highest);
      highestNums.push(highest);
  });

  return highestNums;//console.log(highestNums);//
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
