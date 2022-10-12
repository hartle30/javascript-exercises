// Given Solution 

const caesar = function(string, shift) {
    return string
        .split('')
        .map(char => shiftChar(char, shift))
        .join('');
};

const codeSet = code => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
};

/* My attempted solution - I gave up for time's sake

const caesar = function(string, n) {
    const shiftValue = n
    const stringArray = Array.from(string);
    
    function toUnicode(letter) {
        return letter.charCodeAt();
    };

    const unicodeArray = stringArray.map(toUnicode);
    console.log(unicodeArray);
    
    const shiftedArray = unicodeArray.forEach((element, index) => {
            unicodeArray[index] = element + shiftValue;
        });

    /*function toChar(code) {
        return code.unicodeToChar();
    };

    const shiftedCharArray = shiftedArray.map(toChar);
    console.log(shiftedCharArray);
    

    const shiftedCharArray = shiftedArray.forEach((element) => {
        shiftedArray[element] = String.fromCharCode();
    });
    console.log(shiftedCharArray);
};

const shiftedArray = [99, 100, 101, 102];

const letters = ['a', 'b', 'c']

function toUnicode(letter) {
    return letter.charCodeAt();
};

const unicode = function(array) {
        array.map(toUnicode);
    };

console.log(unicode);

*/

// Do not edit below this line
module.exports = caesar;
