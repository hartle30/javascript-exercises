// My solution

const sumAll = function(num1, num2) {
    let minNum = Math.min(num1, num2);
    let maxNum = Math.max(num1, num2);
    let sum = 0
    if (typeof(num1) !== 'number' || typeof(num2) != 'number') {
        return 'ERROR';
    } else if (minNum < 0) {
        return 'ERROR';
    } else { 
        for (let i = minNum; i <= maxNum; i++) {
        sum += i;
        }
        return sum;
    }   
};

// Do not edit below this line
module.exports = sumAll;

/* Given solution - slight variation - better to test numbers first before executing any additional code

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;

/*