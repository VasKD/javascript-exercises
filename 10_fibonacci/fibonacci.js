const fibonacci = function(num) {
    // make sure input is a number
    num = parseInt(num);

    // address edge cases
    if (num < 0) {
        return "OOPS"
    } else   if (num == 0){
        return 0;
    } else if (num <= 2) {
        return 1;
    }

    let sum = 0;
    let sequence = [1, 1];

    // work through the sequence until the desired number is acquired
    for (let i = 1; sequence.length < num; i++) {
        sum = sequence[i] + sequence[i - 1];
        sequence.push(sum);
    }
    return sum;
};


// Do not edit below this line
module.exports = fibonacci;
