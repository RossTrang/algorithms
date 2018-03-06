// tempConversion - Temp conversion F -> C and vice-versa

function ftoc(tempf) {
  tempc = 5 / 9 * (tempf - 32);
  return Math.floor(tempc);
}

ftoc(100)


function ctof(tempc) {
  tempf = 9 / 5 * tempc + 32;
  return Math.floor(tempf);
}

ctof(40)