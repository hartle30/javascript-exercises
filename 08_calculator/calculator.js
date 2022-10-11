const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

// My solution

const power = function(a, b) {
  let total = a;
  for (let i = 1; i < b; i++) {
    total = a * total;
  };
  return total;
};

/* Give solution

const power = function(a, b) {
  return Math.pow(a, b);
};

*/

// My solution

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    let total = a;
    for (let i = a; i >= 2; i--) {
      total *= (i - 1);
    };
  return total;
  };
};

/* Given solution

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
