//  https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string
/*
- split the string into an array
- find the number of elements produced
- iterate thru to find element lengths
- return length of longest    // Prior step to store longest?
*/

function findLongestWord(str) {
  
  myArray = str.split(" "); // don't use Array.from as we need words NOT characters
  str = "";

  /*  for (index = 0; index < myArray.length; index++) {
    if (myArray[index].length > str.length)
      str = myArray[index];
  }  */

  myArray.forEach(function(word) {
    if (word.length > str.length) str = word;
  });  
   
  return str.length;
  
  // Using Math.max (which frankly makes more sense!)
  /*  myArray.forEach(function(word) {
        str = Math.max(str, word.length);
      });
  
  return str;  */
}

findLongestWord("The quick brown fox jumped over the lazy dog");

  // str = myArray.reduce(function(firstWord, secondWord) {
  // return firstWord.length > secondWord.length ? firstWord : secondWord;
  // })

// It makes sense but you have to think long & hard about it!
