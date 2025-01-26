const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number" ||
        num1 < 0 || num2 < 0
    ) {
        return "ERROR";
    }
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
