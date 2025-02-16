const reverseString = function(text) {
    string = "";
    // split string into characters
    textArray = text.split("");

    // iterate through array backwards and add to string to obtain reverse string
    for (let i = textArray.length - 1; i > -1; i--){
        string += textArray[i];
    }
    
    return string;
};

// Do not edit below this line
module.exports = reverseString;
