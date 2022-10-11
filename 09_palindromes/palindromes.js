// My solution

const palindromes = function (string) {
    const lowerCaseString = string.toLowerCase();
    const stringWithoutPunc = lowerCaseString
        .replace(/[!@#$%^&*()_+-=\;',./{}|:"<>?']/g, '')
        .replace(/\s{2, }/g, '')
        .split(' ').join('');
    console.log(stringWithoutPunc)
    const reverseString = function(stringWithoutPunc) {
        return stringWithoutPunc.split('').reverse().join('');
    };
    const stringInReverse = (reverseString(stringWithoutPunc));
    if(stringWithoutPunc === stringInReverse) {
        return true;
    } return false;
};

/* Given solution - NEED TO RESEARCH REGULAR EXPRESSION USAGE

const palindromes = function(string) {
    processedString = string.toLowerCase().replace(/[^a-z]/g, '');
    return(
        processedString
            .split('')
            .reverse()
            .join('') == processedString
    );
};

*/

// Do not edit below this line
module.exports = palindromes;
