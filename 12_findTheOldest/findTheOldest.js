const findTheOldest = function(people) {
    // find the people without a death year and set it to the current year
    people = people.filter(person => person.yearOfDeath === undefined ? person.yearOfDeath = new Date().getFullYear() : person);
    // compare each of the ages and return the oldest
    const oldest = people.reduce((largest, current) => (current.yearOfDeath - current.yearOfBirth > largest.yearOfDeath - largest.yearOfBirth ? current : largest), people[0]);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
