/*  https://www.freecodecamp.org/challenges/title-case-a-sentence
- convert string.toLowerCase() & split(" ") into array
- iterate thru, changing charAt(0).toUpperCase
- reconstitute string and return
*/
function titleCase(str) {
/*  
  str = str.toLowerCase();
  var strArray = str.split(" ");

      strArray.forEach(function(word, index) {
      capLetter = word.charAt(0).toUpperCase();
      word = word.replace(word.charAt(0), capLetter);
      strArray[index] = word;
      });
*/
// The following function uses cascading (chaining methods) to achieve the same result:

  var strArray = str.split(" ");
  strArray.forEach(function(word, index) {
    strArray[index] = word.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });

  str = strArray.join(" ");
  
  console.log(str);//return str;
}

titleCase("I'm a liTtLe TEA pot");
