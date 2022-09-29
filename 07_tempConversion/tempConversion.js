// My solution

const ftoc = function(fTemp) {
  let cTemp = ((fTemp - 32) * 5/9);
  return Math.round(cTemp * 10) / 10;
};

const ctof = function(cTemp) {
  let fTemp = (cTemp * (9/5)) + 32;
  return Math.round(fTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/* Given solution

const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};


module.exports = {
  ftoc,
  ctof
};

*/
