/*
    palindrome - Given a number, check if it is a palindrome or not.

    e.g. 12321 -> true
    e.g. 123 -> false
*/

// JS solution
function isPalindrome(n) {
  let temp = n;
  let rev = 0;

  while (n > 0) {
    let p = n % 10;
    rev = rev * 10 + p;
    n = Math.floor(n / 10);
  }

  return rev === temp;
}

console.log(isPalindrome(1223221)); // true
console.log(isPalindrome(123)); // false
