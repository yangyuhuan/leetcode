/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const results = [];

  // 小于三个数字，直接返回[]
  if (nums.length < 3) return results;

  // 进行升序排序，由于知道整个问题至少需要 o (n ^ 2)时间，因此我们可以进行 o (NlogN)排序操作
  nums = nums.sort((a, b) => a - b);

  let target = 0;
  //nums.lemght- 2是因为至少有一个数为正数，i的索引0~ num.length-2之间
  for (let i = 0; i < nums.length - 2; i++) {
    // i代表我们排序集中最左边的数字。一旦这个数字达到0，就没有必要再进一步了，因为正数不能和为负数
    if (nums[i] > target) break;

    // 我们不希望重复，所以跳过我们已经看到的数字
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // j代表i和k之间的中间元素。当i和k固定在它们的位置时，我们将通过数组增加这个值。每次通过数组，我们将递减k，最后递增i 直到j和k相遇。
    let j = i + 1;

    // k代表最右边的元素
    let k = nums.length - 1;

    /* 总结我们的设置，我们有’我’开始,从最后开始，在两者之间奔跑。注意‘ i’由外部 for 循环控制，移动速度最慢。与此同时，j 和 k 会轮流靠近对方我们在下面设置一些逻辑，一旦它们碰撞，我就会增加然后我们重复这个过程。*/

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      // 如果我们找到目标总和，增量“ j”和减量“ k”用于其他潜在的组合，其中“ i”是锚
      if (sum === target) {
        // 存储有效的3个数据
        results.push([nums[i], nums[j], nums[k]]);

        //这很重要！我们需要继续增加“ j”和减少“ k”，只要这些值被复制。换句话说，我们要跳过我们已经看到的值。否则，输入数组[-2,0,0,2,2]将导致[-2,0,2] ，[-2,0,2]
        // (i'm not a fan of this part because we're doing a while loop as we're
        // already inside of another while loop...)
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // 最后，我们需要向前和向后移动，到下一个独特的元素。前一个 while 循环不会处理这个
        j++;
        k--;

        // 如果总和太小，增加“ j”以接近目标
      } else if (sum < target) {
        j++;

        // 如果总数太大，会减少到接近目标的程度
      } else {
        // (sum > target)
        k--;
      }
    }
  }

  return results;
}
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -4]));
