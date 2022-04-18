/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */

//最长公共前缀是指从第一个开始算起,以后的每个的字符串都在数组里面的
var longestCommonPrefix = function (strs) {

  const anyWord = strs[0];

  for (let i = 0; i < anyWord.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (anyWord[i] === strs[j][i]) continue;
      return anyWord.slice(0, i)
    }
  }

  return anyWord
}
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// @lc code=end