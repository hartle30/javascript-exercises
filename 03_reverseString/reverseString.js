// My solution

const reverseString = function(string) {
    const stringArray = Array.from(string);
    const reverseStringArray = []
    let stringArrayLength = stringArray.length;
    for (let i = stringArrayLength - 1; i >= 0; i--) {
        reverseStringArray.push(stringArray[i])
    }
    return reverseStringArray.join('')
};

// Do not edit below this line
module.exports = reverseString;

// Given solution

//const reverseString = function(string) {
//    return string.split('').reverse().join('');
//   };
//   
//   module.exports = reverseString;
