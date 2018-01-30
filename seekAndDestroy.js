
function destroyer(arr) {

    for (i=1; i < arguments.length; i++)
      arr = arr.filter(arrElement => arrElement !== arguments[i]);
      
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
