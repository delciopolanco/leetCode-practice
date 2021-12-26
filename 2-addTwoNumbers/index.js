/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addListNode = function (list, val) {
  if (list === null) {
    list = new ListNode(val);
    return list;
  }

  list.next = addListNode(list.next, val);
  return list;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var sum1 = 0;
  var sum2 = 0;
  var increment = l1.val + l2.val;
  var residual = 0;

  if (increment >= 10) {
    increment = Number(
      String(increment).substring(
        String(increment).length,
        String(increment).length - 1
      )
    );
    residual = Number(
      String(l1.val + l2.val).substring(0, String(l1.val + l2.val).length - 1)
    );
  }

  var result = new ListNode(increment);
  var previous = null;

  l1 = l1.next;
  l2 = l2.next;

  while (l1 != null || l2 != null || residual) {
    sum1 = l1 && l1.val ? l1.val : 0;
    l1 = l1 && l1.next != null ? l1.next : null;

    sum2 = l2 && l2.val ? l2.val : 0;
    l2 = l2 && l2.next != null ? l2.next : null;

    increment = sum1 + sum2 + residual;
    residual = 0;

    if (increment >= 10) {
      previous = addListNode(
        previous,
        Number(
          String(increment).substring(
            String(increment).length,
            String(increment).length - 1
          )
        )
      );
      residual = Number(
        String(increment).substring(0, String(increment).length - 1)
      );
    } else {
      previous = addListNode(previous, increment);
    }

    if (l1 === null && l2 === null) {
      if (residual) {
        previous = addListNode(previous, residual);
      }

      result.next = previous;
      return result;
    }
  }

  return result;
};

// 1-----------------------------

// var l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// var l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// 2-----------------------------

// var l1 = new ListNode(0);
// var l2 = new ListNode(0);

// 3-----------------------------

// var l1 = new ListNode(9);
// l1.next = new ListNode(9);
// l1.next.next = new ListNode(9);
// l1.next.next.next = new ListNode(9);
// l1.next.next.next.next = new ListNode(9);
// l1.next.next.next.next.next = new ListNode(9);
// l1.next.next.next.next.next.next = new ListNode(9);

// var l2 = new ListNode(9);
// l2.next = new ListNode(9);
// l2.next.next = new ListNode(9);
// l2.next.next.next = new ListNode(9);

// 4-----------------------------

// var l1 = new ListNode(5);
// var l2 = new ListNode(5);

// 5-----------------------------

var l1 = new ListNode(6);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);
l1.next.next.next = new ListNode(0);
l1.next.next.next.next = new ListNode(4);
l1.next.next.next.next.next = new ListNode(4);
l1.next.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next.next = new ListNode(4);
l1.next.next.next.next.next.next.next.next = new ListNode(1);

var l2 = new ListNode(3);
l2.next = new ListNode(8);
l2.next.next = new ListNode(8);
l2.next.next.next = new ListNode(0);
l2.next.next.next.next = new ListNode(3);
l2.next.next.next.next.next = new ListNode(0);
l2.next.next.next.next.next.next = new ListNode(1);
l2.next.next.next.next.next.next.next = new ListNode(4);
l2.next.next.next.next.next.next.next.next = new ListNode(8);

console.log(addTwoNumbers(l1, l2));
