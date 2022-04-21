/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  //标记法
  // while (head) {
  //   if (head.flag) return true
  //   head.flag = true
  //   head = head.next
  // }
  // return false

  //快慢指针
  let p1 = head
  let p2 = head
  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) {
      return true
    }
  }
  return false
};
// @lc code=end