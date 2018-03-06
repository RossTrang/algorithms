// SumAll - take 2 integers and return the sum of the range inclusive

function sumAll(arg1, arg2) {
  total = 0;
    for (i = arg1; i <= arg2; i++) {
      total += i;
    }
  return total;
}


sumAll(1, 9)