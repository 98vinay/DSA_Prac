/*
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0
    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1:
    Input: x = 123
    Output: 321

    Example 2:
    Input: x = -123
    Output: -321
*/

// JS solution
function reverse(x) {
  let rev = 0;
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x > 0) {
    let p = x % 10;
    rev = rev * 10 + p;
    x = Math.floor(x / 10);
  }

  if (rev > Math.pow(2, 31) - 1) {
    return 0;
  }

  return rev * sign;
}
