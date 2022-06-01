/**
 * 
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
示例 2：

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
 
 */
var canPartition = function(nums) {
  var sum = nums.reduce((a, b) => a + b, 0);
  
  if (sum % 2 !== 0) {
      return false;
  }
  
  var half = sum / 2; 
  
  var dp = [];

  dp[0] = true;
  
  for (var index = 0; index < nums.length; ++ index) {
      var num = nums[index];
      
      for (var i = half; i >= num; -- i) {
          dp[i] = dp[i] || dp[i - num];
      }
  }
 
  return dp[half] || false;
};


console.log(canPartition([1,5,5,11]))


