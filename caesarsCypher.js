// https://www.freecodecamp.org/challenges/caesars-cipher
// - str.charCodeAt(i) need to iterate through characters of string // str.length or convert to array?
// - write the returned .fromCharCode character to an object
// - alphanumerics need to shift 13 points A=N. non-alphanumerics should not be transformed
// - UTF-16 values? A=65, B=66...M=77, N=78 need logic to wrap 2nd half of alphabet N=A (78=65)

function rot13(str) { // LBH QVQ VG!
  
	var decoded = '';
      
	for(var character in str) { 
		let charCode = str.charCodeAt(character);       //console.log(charCode);
		if (charCode >=65 && charCode <=77) {charCode += 13;}   //charCode = charCode + 13
		else if (charCode >=78 && charCode <=90) {charCode -= 13;}   //console.log(charCode);
		decoded = (decoded + String.fromCharCode(charCode));     //console.log(decoded);
	}
	console.log(decoded);
	return decoded;
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');