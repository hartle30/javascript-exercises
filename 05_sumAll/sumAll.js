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