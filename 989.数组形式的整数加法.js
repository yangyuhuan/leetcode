/* 
*989. 数组形式的整数加法
整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。

例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

示例 1：

输入：num = [1,2,0,0], k = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
示例 2：

输入：num = [2,7,4], k = 181
输出：[4,5,5]
解释：274 + 181 = 455
示例 3：

输入：num = [2,1,5], k = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021

*/

const num= [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
const k = 516

var addToArrayForm = function(A, K) {
  const res = []
    //从个位开始计算, carry存储前一次计算是否超过10,超过的话再本次计算中需加1
  let i = A.length - 1, carry = 0

  while (i >=0 || K != 0) {
      //获取num,k的相同位数的数值
      const x = i >= 0 ? A[i] : 0  
      const y = K != 0 ? K % 10 : 0

      const sum = x + y + carry
      //获取本次计算结果
      res.push(sum % 10)
      carry = Math.floor(sum / 10)

      i--
      //每循环k都要整除10一次
      K = Math.floor(K / 10)
      console.log(i,K,carry)
  }
  //最后一步如果最后一位计算超过10了,必须向前push 1 ---[2,1,5] 806  这个例子
  if (carry) res.push(carry)
  return res.reverse()
};



console.log('----',addToArrayForm([2,1,5], 806))