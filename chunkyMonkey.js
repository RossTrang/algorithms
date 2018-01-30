/*  https://www.freecodecamp.org/challenges/chunky-monkey
- i < arr.length / size gives us the correct number of subarrays to create
- i < size would create too many when size=4, but not enough when size=2
- arr.slice(startIndex, endIndex) endIndex=index position, not how many indexes to cut
-  e.g. (0*4, 0*4+4) = (0, 4); (1*4, 1*4+4) = (4, 8)
*/
function chunkArrayInGroups(arr, size) {
  
  var newArray = [];
  
  for (i=0; i < arr.length/size; i++) {
    arrSlice = arr.slice(i*size, i*size+size);
    newArray.push(arrSlice);  
  }
  
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
