/*
    Armstrong Number - A number is called Armstrong number if it is equal to the sum of the length power of its own digits.
*/

// JS solution
function isArmStrong(n) {
  let temp = n;
  let sum = 0;
  let len = n.toString().length;

  while (n > 0) {
    let p = n % 10;
    sum += Math.pow(p, len);
    n = Math.floor(n / 10);
  }

  return sum === temp;
}

console.log(isArmStrong(153)); // true
console.log(isArmStrong(123)); // false
console.log(isArmStrong(1634)); // true
console.log(isArmStrong(54748)); // true
