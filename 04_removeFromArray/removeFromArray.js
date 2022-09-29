const removeFromArray = function(filterArray, ...args) {
    const filteredArray = filterArray.filter(array => !args.includes(array));
    return filteredArray
    }

// Do not edit below this line
module.exports = removeFromArray;
