const LL = require("./linkedList.js");

/*
Partition
Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: The partition element x can appera anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing in the example below indicates the partition. Yes, the output below is one of many value outputs!)
*/

/*
Explaination:
*/

/*
Questions:
*/

/*
Assumption:
*/

/*
Example:
1) '3->5->8->5->10->2->1' [partition = 5] => '3->1->2 -> 10->5->5->8'
*/

//Sol1
const partitionSol1 = (headNode, partition) => {
	let leftHead = null;
	let leftTail = null;
	let rightHead = null;
	let rightTail = null;

	while (headNode != null) {
		let headVal = headNode.data;
		if (headVal < partition) {
			if (leftHead === null) {
				leftHead = new LL.ListNode(headVal);
				leftTail = leftHead;
			}
			else {
				leftTail.next = new LL.ListNode(headVal);
				leftTail = leftTail.next;
			}
		}
		else {
			if (rightHead === null) {
				rightHead = new LL.ListNode(headVal);
				rightTail = rightHead;
			}
			else {
				rightTail.next = new LL.ListNode(headVal);
				rightTail = rightTail.next;
			}
		}
		headNode = headNode.next;
	}
	leftTail.next = rightHead;

	return leftHead;
}


let a = new LL.ListNode(3);
let b = new LL.ListNode(5);
let c = new LL.ListNode(8);
let d = new LL.ListNode(5);
let e = new LL.ListNode(10);
let f = new LL.ListNode(2);
let g = new LL.ListNode(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
let resultNode = partitionSol1(a, 5);
console.log(a);
console.log(resultNode);
// '3->5->8->5->10->2->1' [partition = 5] => '3->1->2 -> 10->5->5->8'




