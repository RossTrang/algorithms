var removeFromArray = function(arr, ...args) {
  args.forEach(function (arg){
  	pos = arr.indexOf(arg);
  	if (pos !== -1) {arr.splice(pos, 1)}
	});
 
  return arr;
}

module.exports = removeFromArray


/* The concise method

var removeFromArray = function(...args) {
  const array = args[0]
	return array.filter(val => !args.includes(val))
}

*/