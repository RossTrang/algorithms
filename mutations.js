//  https://www.freecodecamp.org/challenges/mutations
/*
- need to iterate through each character of second string
- .indexOf is case sensitive
*/
function mutation(arr) {
  
  str = arr[0].toLowerCase();
  pattern = arr[1].toLowerCase();
  
//   	for (i=0; i < pattern.length; i++) {
//      if (str.indexOf(pattern[i]) === -1) {arr = false; break;} else {arr = true;}
//    } 

    for (var character of pattern) {
      if (str.indexOf(character) === -1) {arr = false; break;} else {arr = true;}
//			if (str.search(character) === -1) {arr = false; break;} else {arr = true;}
//			if (str.includes(character) === false) {arr = false; break;} else {arr = true;}
   	}    
    
   return arr;
}

mutation(["floor", "for"]);
