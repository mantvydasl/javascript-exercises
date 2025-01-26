const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * (5 / 9);
  return parseFloat(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = (9 / 5) * tempCelsius + 32;
  return parseFloat(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
