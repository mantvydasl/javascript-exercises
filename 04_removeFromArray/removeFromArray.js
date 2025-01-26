const removeFromArray = function(array, ...valuesToRemove) {
    let indexToRemove = array.indexOf(valueToRemove);
    array.splice(indexToRemove, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
