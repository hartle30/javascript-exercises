/* My original solution - I couldnt figure out how to find age for somebody still living

const findTheOldest = function(array) {
    const oldest = array.sort(function(a, b) {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
    });
    return oldest[0];
};

*/

// Given Solution

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    } 
    return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;
