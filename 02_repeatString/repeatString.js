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
// Do not edit below this line
module.exports = repeatString;
