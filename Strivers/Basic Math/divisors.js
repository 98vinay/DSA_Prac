/*
Given a number N, print all its unique factors of N
*/

// JS solution
function printFactors(n) {
  let i = 1;
  while (i * i <= n) {
    if (n % i == 0) {
      console.log(i);
      if (i != n / i) {
        console.log(n / i);
      }
    }
    i++;
  }
}
