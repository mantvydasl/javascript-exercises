const removeFromArray = function(array, ...valuesToRemove) {
    for (const value of valuesToRemove) {
        let indexToRemove = array.indexOf(value);
        array.splice(indexToRemove, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
