/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]],
      next = map[s[i + 1]];
    if (curr < next) num -= curr;
    else num += curr;
  }
  return num;
};

// var romanToInt = function(s) {
// 	let obj = {
// 			'I': 1,
// 			'V': 5,
// 			'X': 10,
// 			'L': 50,
// 			'C': 100,
// 			'D': 500,
// 			'M': 1000,
// 	}
// 	let arr = s.toString().split("")
// 	let res = 0;
// 	for(var i = 0; i < arr.length ; i++) {
// 			if(obj[arr[i]] >= (obj[arr[i+1]] || 0)){
// 					res += obj[arr[i]]
// 			}else{
// 					res += obj[arr[i+1]] - obj[arr[i]]
// 					i++
// 			}
// 	}
// 	return res
// };
// @lc code=end
