/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  //head -> [1,2,3,4,5]
  let prev = null;
  while (head) {
    let temp = head.next; // temp -> [2,3,4,5]  [3,4,5]  [4,5]       [5]         null
    head.next = prev; //     head -> [1]        [2,1]    [3,2,1]     [4,3,2,1]   [5,4,3,2,1]
    prev = head; //          prev -> [1]        [2,1]    [3,2,1]     [4,3,2,1]   [5,4,3,2,1]
    head = temp; //          head -> [2,3,4,5]  [3,4,5]  [4,5]       [5]         null
  }
  return prev;
};
// @lc code=end
