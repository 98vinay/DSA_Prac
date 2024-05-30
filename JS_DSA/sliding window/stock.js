//problem link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} prices
 * @return {number}
*/
```
    1. find two days where you can buy and sell the stock to get the maximum profit.
    2. if the price of the stock on the right day is greater than the left day, then calculate the profit and update the maxProfit.
    3. if the price of the stock on the right day is less than the left day, then update the left day to the right day.
    4. return the maxProfit.
```

var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit,profit);
        }
        else {
            left = right;
        }
        right++;
    }

    return maxProfit;
};
