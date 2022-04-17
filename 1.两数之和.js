/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let res = nums[i];
    if (map.has(res)) return [map.get(res), i];
    map.set(target - res, i);
  }
};
// @lc code=end
