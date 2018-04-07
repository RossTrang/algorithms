var repeatString = function(str, times) {
	result = "";
	if (times < 0)  {result = "ERROR"} else {
		for (var i = 0; i < times; i++) {
		result += str
	}};
	return result
}

module.exports = repeatString
