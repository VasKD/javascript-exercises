const removeFromArray = function(array, number, ...rest) {
    let valuesToRemove = [number, ...rest];
    // filter through the array in one pass by keeping all the elements
    // that are NOT in valuesToRemove
    return array.filter(item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
