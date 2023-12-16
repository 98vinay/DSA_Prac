/*
    You are given a number ’n’.
    Find the number of digits of ‘n’ that evenly divide ‘n’.

    Input: ‘n’ = 336
    Output: 3
    Explanation:
    336 is divisible by both ‘3’ and ‘6’. Since ‘3’ occurs twice it is counted two times.
*/

// JS solution
function countDigits(n) {
  let count = 0;
  let temp = n;
  while (n > 0) {
    let p = n % 10;
    if (temp % p === 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }

  return count;
}

let n = 660;

console.log(countDigits(n));

// Java solution

/*
    public static int countDigits(int n){
        // Write your code here.
        int count = 0;
        int temp = n;

        while (n > 0) {
            int p = n % 10;
            if(p!=0 && temp % p == 0) {
                count++;
            }
            n = n/10;
        }

        return count;
    }
*/

// Python solution

/*
    def countDigits(n):
        count = 0
        temp = n

        while n > 0:
            p = n % 10
            if p != 0 and temp % p == 0:
                count += 1
            n = n // 10

        return count
*/
