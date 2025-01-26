const sumAll = function(num1, num2) {
    const start = num1 < num2 ? num1 : num2;
    const end   = num1 > num2 ? num1 : num2;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
