/*  https://www.theodinproject.com/lessons/fundamentals-part-3
Add7 - Take the given number, add 7, return product
Multiply - Multiply 2 given numbers, return product
Capitalize - Capitalize the first character of a string given in any case
lastLetter - return last character of a string
*/

function add7(number) {
	console.log(number + 7);
}

function multiply(number1, number2) {
	console.log(number1 * number2);
}

function capitalize(string) {
	string = string.toLowerCase();
	capLetter = string.charAt(0).toUpperCase();
      string = string.replace(string.charAt(0), capLetter);
      console.log(string);
}

function lastLetter(string) {
	console.log(string.charAt(string.length - 1));
}

add7(3);
multiply(3, 9);
capitalize("capiTalIZe");
lastLetter("Ross");