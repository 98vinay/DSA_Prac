/*
    Check whether a given number ’n’ is a palindrome number.
    Example:
    Input: 'n' = 51415
    Output: true
    Explanation: On reversing, 51415 gives 51415.
*/

//Js solution

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

//python solution
// n=int(input())
// temp = n
// r=0
// while(n > 0) :
//     p = n % 10;
//     r = r*10 + p
//     n = n // 10

// if(r == temp):
//     print("true")
// else:
//     print("false")
