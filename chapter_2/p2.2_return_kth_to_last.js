/*
Return Kth to Last
Implement an algorithm to find the kth to last element of a singly linked list.
*/

/*
Explaination:
use 2 ptr.
ptr1 points to the head of the list
ptr2 at the kth element of the list
Now check if ptr2.next == null, then ptr2 is last element.
Hence ptr1 is kth to last element.
else jump both ptrs to their next ptrs.
*/

/*
Questions:
1) What to return if LL length is 3 and 4th to last element is asked for?
2) What is its an empty LL
3) What to return: the node or the val?
4)
*/

/*
Assumption:
1) Node is expect as return
2) Function is passed with the head of the LL
*/

/*
Example:
1) '' => ''
2) 'a'->'e'->'c'->'d'->'c'->'a', 4 => 'c'->'d'->'c'->'a'
*/


class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}


class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	//Add element at the end of the list
	add(elem) {
		let newNode = new ListNode(elem);

		if (this.head === null) {
			this.head = newNode;
		}
		else{
			let curr = this.head;
			while(curr.next != null) {
				curr = curr.next;
			}
			curr.next = newNode;
		}
	}

	//Print the entire list
	printList() {
		let currNode = this.head;
		let prtArr = []
		while(currNode !== null) {
			prtArr.push(currNode.val);
			currNode = currNode.next;
		}
		return console.log(prtArr.join("->"));
	}

	sizeOfList() {
		let currNode = 0;
		let ctr = 0;
		while (currNode != null) {
			ctr++;
			currNode = currNode.next;
		}
		return ctr;
	}
}


//Sol1
const kthToLastSol1 = (headNode, k) => {
	if ( headNode == null) {
		return headNode;
	}

	let ptr1 = headNode;
	let ptr2 = headNode;
	for(let i = 0; i < k; i++) {
		if (ptr2.next == null) {
			return console.log("k greater than length of linkedList")
		}
		ptr2 = ptr2.next;
	}

	while (ptr2 != null) {
		ptr1 = ptr1.next;
		ptr2 = ptr2.next;
	}

	return ptr1;
}

let n1 = new ListNode(1);
let ll1 = new LinkedList(n1);
console.log(kthToLastSol1(ll1.head, 4));
// 'a'->'e'->'c'->'d'->'c'->'a', 4 => 'c'->'d'->'c'->'a'
let n2 = new ListNode('a');
let ll2 = new LinkedList(n2);
ll2.add('e');
ll2.add('c');
ll2.add('d');
ll2.add('f');
ll2.add('x');
ll2.printList();
console.log(kthToLastSol1(ll2.head, 4));
let ll3 = new LinkedList();
console.log(kthToLastSol1(ll3.head, 0));