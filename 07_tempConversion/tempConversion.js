const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (9 / 5) * tempFahrenheit + 32;
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = (tempCelsius - 32) * (5 / 9);
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
