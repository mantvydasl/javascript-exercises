const removeFromArray = function(array, ...valuesToRemove) {
    let indexToRemove;
    for (const value of valuesToRemove) {
        indexToRemove = array.indexOf(value);
        while (indexToRemove !== -1) {
            array.splice(indexToRemove, 1);
            indexToRemove = array.indexOf(value);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
