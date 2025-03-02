const palindromes = function (str) {
    // convert the string to lower case, 
    // split letters into an array and filter out invalid characters
    let arr = str.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char));

    // return comparison original with reversed string
    return arr.join('') === arr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
