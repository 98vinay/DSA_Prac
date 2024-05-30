// problem link - https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let count = 0;
    let windowStart = 0;
    let windowSum = 0;

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];

        if (i >= k - 1) {
            if (windowSum / k >= threshold) {
                count++;
            }
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return count;
};