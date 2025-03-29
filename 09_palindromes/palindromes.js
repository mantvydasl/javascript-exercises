const palindromes = function (str) {
  let arr = str.split('');
  let arrReverse = arr.slice().reverse();
  return arr.every((value, index) => value === arrReverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
