const palindromes = function (str) {
  let arr = str.toLowerCase().split('');
  let arrForward = [];
  for (let c of arr) {
    if (c.toLowerCase() != c.toUpperCase()) {
        arrForward.push(c);
    }
  }
  let arrReverse = arr.slice().reverse();
  return arr.every((value, index) => value === arrReverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
