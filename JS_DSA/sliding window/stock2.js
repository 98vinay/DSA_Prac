// problem link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} prices
 * @return {number}
 * */

var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            maxProfit += prices[right] - prices[left];
             left++;
        }
        else {
            left = right;
        }
        right++;
    }

    return maxProfit;
};

