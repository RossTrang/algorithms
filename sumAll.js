var sumAll = function(...args) {
  
  var total = 0;
  
  for (var val in args) {
  	if (typeof(args[val]) !== "number" || args[val] < 0) { return "ERROR" }
  }

  args.sort(function (a, b) {
   	return a - b;
  })

  for (i = args[0]; i <= args[1]; i++) {
     total += i;
	}

  return total;
}

module.exports = sumAll
