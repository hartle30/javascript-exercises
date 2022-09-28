// My solution

const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else if (num === 0) {
        return '';
    }else {
    let newString = string;    
    for (let i = 1; i < num; i++) {
        newString = newString.concat(string);
        }
        return newString
    }
}

// Given Solution - much more concise

// const repeatString = function(word, times) {
//    if (times < 0) return 'ERROR';
//    let string = '';
//    for (let i = 0; i < times; i++) {
//      string += word;
//    }
//    return string;
//  };
  
  module.exports = repeatString;
// Do not edit below this line
module.exports = repeatString;
