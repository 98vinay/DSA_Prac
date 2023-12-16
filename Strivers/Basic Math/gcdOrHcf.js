/*
    GCD or HCF of two numbers is the largest number that divides both of them.
*/

// JS solution

function gcd(a, b) {
  while (b != 0) {
    let rem = b % a;
    if (rem == 0) {
      return a;
    }
    b = a;
    a = rem;
  }
  return a;
}

//optimized solution
function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log(gcd(15, 20)); // 5
