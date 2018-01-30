/*  https://www.freecodecamp.org/challenges/where-do-i-belong
- sort the array into ascending order
- compare existing values to num
- return index of matching or closest higher value
- return lastIndex+1 if num highest number
*/
function getIndexToIns(arr, num) {
  
  arr.sort(function(a,b) {
  	return a - b;
  });

  numIndex = arr.findIndex(function(element) { 
  	return element >= num;
  });
  
  if (numIndex === -1) {numIndex = arr.length;}

  return numIndex;
}

getIndexToIns([10, 20, 30, 40, 50], 60);
