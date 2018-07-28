/*  https://www.freecodecamp.org/challenges/truncate-a-string
- 3 scenarios
- num equal or greater than string.length = return string
- num under or equal 3 = return number of characters + ellipses
- num greater than 3 but less than string.length = return number of characters
	inclusive of ellipses.
*/
function truncateString(str, num) {
  
//  if (num > 3 && num < str.length) {str = str.substr(0, num - 3) + "...";}
//    else if (num < 3) {str = str.substr(0, num) + "...";}

  if (num > 3 && num < str.length) {str = str.slice(0, num - 3) + "...";}
    else if (num < 3) {str = str.slice(0, num) + "...";}
  
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 9);