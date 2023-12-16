/*
    Given an integer N, count and return the number of digits present in the integer N.

    ex 1:   Input:  156
            Output: 3

    ex 2:   Input:  7
            Output: 1
*/
// Solution 1: Using loop
function countDigits(n) {
  let count = 0;
  if (n == 0) {
    return 1;
  }
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
}

// Solution 2: Using String
function countDigitsWithString(n) {
  return ("" + n).length;
}

//test
console.log(countDigits(156)); //3
console.log(countDigits(7)); //1
console.log(countDigits(0)); //1
console.log(countDigits(123456789)); //9
console.log(countDigits(1000000000)); //10

console.log(countDigitsWithString(156)); //3
console.log(countDigitsWithString(7)); //1
console.log(countDigitsWithString(0)); //1
console.log(countDigitsWithString(123456789)); //9
console.log(countDigitsWithString(1000000000)); //10
