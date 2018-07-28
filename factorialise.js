//  https://www.freecodecamp.org/challenges/factorialize-a-number
function factorialize(num) {
/*  
  var count = num;                  // for needs to loop the number of times passed by (num)
  
  for (var i = 1; i < count; i++) { 
    num = num * i;                  // but num is always increasing
  }									// using multiplication assignment // num *= i;
*/  
  
  if (num === 0) {return 1;} else {num *= factorialize(num-1);} //Using recursion

  return num;
}

factorialize(5);

// My initial attempts followed the below quite closely
// but I couldn't get that I needed to use 'num' as the
// for loop counter :(

/*
for (a = 1;num >= 1; num--) {
a = num * a;
  }
  return a;
*/
