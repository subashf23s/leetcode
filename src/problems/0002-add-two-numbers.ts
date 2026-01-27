class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null) {
    this.val = val;
    this.next = next;
  }
}
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const resultNode = new ListNode(0, null);
  do {
    let firstValue = 0,
      secondValue = 0;
    let stop = l1?.next !== null || l2?.next !== null;
    if (!stop) {
      if (l1?.next) {
        firstValue = l1.val;
        l1 = l1.next;
      }
      if (l2?.next) {
        secondValue = l2.val;
        l2 = l2.next;
      }
    }
  } while (!stop);
  return resultNode;
}
export const executeAddTwoNumbers = () => {
  const list1a = new ListNode(1, null);
  const list1b = new ListNode(2, list1a);
  const list1c = new ListNode(3, list1b);
  const list1 = new ListNode(4, list1c);
  const list2a = new ListNode(1, null);
  const list2b = new ListNode(2, list2a);
  const list2c = new ListNode(3, list2b);
  const list2 = new ListNode(4, list2c);

  console.log(addTwoNumbers(list1, list2));
};
