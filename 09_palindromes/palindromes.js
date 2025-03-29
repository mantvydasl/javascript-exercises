const palindromes = function (str) {
  let arr = str.toLowerCase().split('');
  let arrForward = [];
  for (let c of arr) {
    if (c.toLowerCase() != c.toUpperCase() || !isNaN(parseInt(c, 10))) {
        arrForward.push(c);
    }
  }
  let arrReverse = arrForward.slice().reverse();
  return arrForward.every((value, index) => value === arrReverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
