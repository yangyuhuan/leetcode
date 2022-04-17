/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = Math.abs(x);
  let reverseNum = num.toString().split("").reverse().join("");
  let res = x > 0 ? reverseNum : -reverseNum;
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);
  if (res < min || res > max) {
    return 0;
  }
  return res;
};

// var reverse = function(x) {
// 	const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
// 	return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
// };
// @lc code=end
