const repeatString = function(text, repeatNum) {
    string = "";
    if (repeatNum == 0) {
        return string;
    } else if (repeatNum < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeatNum; i++) {
        string += text;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
