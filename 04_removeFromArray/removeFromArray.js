const removeFromArray = function(array, ...valuesToRemove) {
    let indexToRemove;
    for (const value of valuesToRemove) {
        indexToRemove = array.indexOf(value);
        array.splice(indexToRemove, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
