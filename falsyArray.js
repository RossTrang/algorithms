//  https://www.freecodecamp.org/challenges/falsy-bouncer
/* THIS TOOK WAY TOO LONG - THE ANSWER WAS IN THE FIRST LINES OF
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	"Return true to keep the element, false otherwise"
	.filter has 'built-in' check for truth !!!
*/
function bouncer(arr) {
  
  arr = arr.filter(Boolean);

//  arr = arr.filter(function(element) {
//          return element;
//  });  
  
  return arr;
}

bouncer([7, "ate", "", false, 9, NaN, undefined, null]);