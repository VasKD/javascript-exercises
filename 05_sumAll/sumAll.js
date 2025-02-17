const sumAll = function(num1, num2) {
    let sum = 0;
    let numOfInts = 0;

    // return error if inputs are non-integers
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    
    // check if larger number is first and adjust if not
    if (num1 < num2){
        numOfInts = (num2 - num1) + 1;
    } else {
        numOfInts = (num1 - num2) + 1; 
    }
    
    let average = (num1 + num2) / 2;
    sum = average * numOfInts;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
