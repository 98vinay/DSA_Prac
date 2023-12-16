/*
    Reverse a number - Given a number, reverse it.

    e.g. 1234 -> 4321
    e.g. 100 -> 1
*/

// JS solution
function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    let p = n % 10;
    rev = rev * 10 + p;
    n = Math.floor(n / 10);
  }

  return rev;
}

let n = 1234;
console.log(reverseNumber(n)); // 4321
console.log(reverseNumber(100)); // 1
