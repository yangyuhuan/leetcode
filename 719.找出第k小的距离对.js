

 /**
  *719.  找出第 k 小的距离对
  *给定一个整数数组，返回所有数对之间的第 k 个最小距离。一对 (A, B) 的距离被定义为 A 和 B 之间的绝对差值。*
  *输入：
  *    nums = [1,3,1]
  *    k = 1
  *    输出：0
  *    解释：
  *    所有数对如下：
  *    (1,3) -> 2
  *    (1,1) -> 0
  *    (3,1) -> 2
  *    因此第 1 个最小距离的数对是 (1,1)，它们之间的距离为 0。*
  *@param {number[]} nums
  *@param {number} k
  *@return {number}
  *
  * **/

const smallestDistancePair = function (nums, k) {
//现将 nums 进行排序
nums.sort((a, b) => a - b);

//然后获取 nums 中差值，最小值 0 ，最大值 maxDiff 为最大值减去最小值
let n = nums.length;
let l = 0;
let r = nums[n - 1] - nums[0];
while (l < r) {
let mid = l + ((r - l) >> 1);
    let count = getDiffCount(nums, mid);
    //如果count 大于等于目标值，说明右边部分可以抛弃，最左二分
    if (count >= k) r = mid;
    else l = mid + 1;
}

return l;
};

//双指针遍历数组，累计 nums 中差值小于等于 diff 的数量 count
const getDiffCount = function (nums, target) {
let l = 0,
count = 0;
for (let r = 1; r < nums.length; r++) {
while (nums[r] - nums[l] > target) l++;
count += r - l;
}
return count;
};

时间复杂度：O(nlog(n))
空间复杂度：O(1)

console.log(smallestDistancePair([1, 3, 1], 1));
