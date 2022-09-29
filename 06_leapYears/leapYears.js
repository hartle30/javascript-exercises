// My solution

const leapYears = function(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } return false;
}

// Do not edit below this line
module.exports = leapYears;

/* Given solution - much more concise

const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

module.exports = leapYears;

/*