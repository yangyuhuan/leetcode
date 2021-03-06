/*
给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

你需要返回给定数组中的重要翻转对的数量。

示例 1:

输入: [1,3,2,3,1]
输出: 2
示例 2:

输入: [2,4,3,5,1]
输出: 3
注意:

给定数组的长度不会超过50000。
输入数组中的所有数字都在32位整数的表示范围内。

*/



//方法一:暴力解题
// function reversePairs(nums){
//   let count = 0
//   for(var i = 0; i < arr.length; i++) {
//    for(var j = i +1; j < arr.length; j++){
//     if(nums[i] > nums[j] * 2){
//       count += 1
//     }
//    }
//   }
//   return count
// }

//时间复杂度:O(N^2)
//空间复杂度:O(N)

//方法二:归并法
function reversePairs(nums){

  let count = 0;

  //合并数组
  const mergeArr = (left, right) =>{
    let i = 0; j = 0;
    while(i < left.length && j < right.length){
      if(left[i]/2 > right[j]){
        count +=left.length -i
        j++
      }else{
        i++
      }
    }
    return [...left, ...right].sort((a,b)=> a-b)
  }

  //实现归并的方法
  const divide = (arr) => {
    if(arr.length <= 1) return arr
    let mid = arr.length >> 1
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return mergeArr(divide(left),divide(right))
  }
  divide(nums)
  return count
}

//时间复杂度:O(nlog)
//空间复杂度 :O(N)

const arr = [2,4,3,5,1]
console.log(reversePairs(arr))