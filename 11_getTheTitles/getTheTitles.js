// My solution

const getTheTitles = function(array) {
    return array.map(titles => `${titles.title}`);
};

/* Given solution - better name for map function and eliminates unnecessary template literal

const getTheTitles = function(array) {
    return array.map(book => book.title);
};

*/

// Do not edit below this line
module.exports = getTheTitles;
