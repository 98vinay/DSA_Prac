// problem link : https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let s = new Set();
    let j = 0;
    for(let i=0;i<nums.length;i++) {
        if(s.has(nums[i])) return true;
        s.add(nums[i]);

        if(s.size > k)  {
            s.delete(nums[j]);
            j++;
        }
    }

    return false;
};