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

const power = function(a, b) {
  let total = a;
  for (let i = 1; i < b; i++) {
    total = a * total;
  };
  return total;
};

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

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
