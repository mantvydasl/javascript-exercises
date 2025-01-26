const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * (5 / 9);
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = (9 / 5) * tempCelsius + 32;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
