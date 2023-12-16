/*
    There is a song concert going to happen in the city. The price of each ticket is equal to the number obtained after reversing the bits of a given 32 bits unsigned integer

Sample Input 1 :
2
0
12

Sample Output 1:
0
805306368
Explanation For Sample Input 1 :
For the first test case :
Since the given number N = 0 is represented as 00000000000000000000000000000000 in its binary representation. So after reversing the bits, it will become 00000000000000000000000000000000 which is equal to 0 only. So the output is 0.     
For the second test case :
Since the given number N = 12 is represented as 00000000000000000000000000001100 in its binary representation. So after reversing the bits, it will become 0110000000000000000000000000000, which is equal to 805306368 only. So the output is 805306368.
*/

//Js Solution
function reverseBits(n) {
  if (n === 0) {
    return 0;
  }

  let bin = n.toString(2).padStart(32, 0);
  return parseInt(bin.split("").reverse().join(""), 2);
}

console.log(reverseBits(12)); // 805306368
console.log(reverseBits(0)); // 0

//python solution
/*
def reverseBits(n):
    # Write your code here.
    if(n == 0):
        return 0
    binaryRep = str(bin(n))[2:].zfill(32)
    return int(binaryRep[::-1],2)
*/
