/*125. 验证回文串
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。


示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //1.过滤掉没用的空格或者字符
  var validatedS = s.toLocaleLowerCase().match(/[a-z0-9]+/g)
  if (!validatedS) true
  //2.转成字符串
  var str = (validatedS || []).join("")
  //3.将字符串,转数组后反转
  var reversedS = str.split("").reverse().join("")
  //判断是不是回文串
  return str == reversedS
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))