/*  https://www.freecodecamp.org/challenges/title-case-a-sentence
- convert string.toLowerCase() & split(" ") into array
- iterate thru, changing charAt(0).toUpperCase
- reconstitute string and return
*/
function titleCase(str) {
  
  str = str.toLowerCase();
  var strArray = str.split(" ");
  //var capArray = [];

  // capArray =
  // strArray.map(capitalise); // elements undefined
  // Array.from(strArray, capitalise); // elements undefined

  //  function capitalise() {
      strArray.forEach(function(word, index) {
      capLetter = word.charAt(0).toUpperCase();
      word = word.replace(word.charAt(0), capLetter);
      //capArray.push(word);
      strArray[index] = word;
      });
  //  };

  //str = capArray.join(" ");
  str = strArray.join(" ");
  
  return str;
}

titleCase("I'm a liTtLe TEA pot");
