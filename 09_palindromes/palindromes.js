const palindromes = function (str) {
  let arr = str.toLowerCase().split('');
  let arrReverse = arr.slice().reverse();
  return arr.every((value, index) => value === arrReverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
