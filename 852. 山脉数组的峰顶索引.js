/*
852. 山脉数组的峰顶索引
符合下列属性的数组 arr 称为 山脉数组 ：
arr.length >= 3
存在 i（0 < i < arr.length - 1）使得：
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。

 

示例 1：

输入：arr = [0,1,0]
输出：1
示例 2：

输入：arr = [0,2,1,0]
输出：1
示例 3：

输入：arr = [0,10,5,2]
输出：1
示例 4：

输入：arr = [3,4,5,1]
输出：2
示例 5：

输入：arr = [24,69,100,99,79,78,67,36,26,19]
输出：2 */


var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1; // 0,3
  let ans = 0
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    console.log(left, right, mid) // 2,3,
    console.log(arr[mid], arr[mid + 1])

    if (arr[mid] > arr[mid + 1]) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
    console.log(ans)
  }
  return ans
};


console.log(peakIndexInMountainArray([40, 48, 61, 75, 100, 99, 98, 39, 30, 10]))