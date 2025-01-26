const removeFromArray = function(array, valueToRemove) {
    let indexToRemove = array.indexOf(valueToRemove);
    return array.splice(indexToRemove, indexToRemove);
};

// Do not edit below this line
module.exports = removeFromArray;
