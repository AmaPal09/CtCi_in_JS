/*
Remove Dups
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
how will you solve this problem if a temp burrer is not allowed
*/

/*
Explaination:
*/

/*
Questions:
1) What about nodes with " "?
*/

/*
Assumption:
1) Function is passed the head of the linked list.
2) Not a method on the LL class
*/

/*
Example:
1) 1->2->3->4->3->2->5 => 1->2->3->4->5
2) 'a'->'e'->'c'->'d'->'c'->'a' => 'a'->'e'->'c'->'d'
*/

class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	add(elem) {
		let node = new ListNode(elem);

		if (this.head === null) {
			this.head = node;
		}
		else {
			let curr = this.head;
			while (curr.next != null) {
				curr = curr.next;
			}
			curr.next = node;
		}
	}

	printList() {
		let curr = this.head;
		let prtArr = []
		while (curr != null) {
			prtArr.push(curr.val);
			curr = curr.next
		}
		return prtArr.join("->");
	}
}


//Sol1
const removeDupsSol1 = (headNode) => {
	let uniqueNodeVal = new Set();
	let currNode = headNode;
	let prevNode = null;

	while (currNode != null) {
		if (uniqueNodeVal.has(currNode.val)) {
			prevNode.next = currNode.next;
			currNode = currNode.next;
		}
		else {
			uniqueNodeVal.add(currNode.val);
			prevNode = currNode;
			currNode = currNode.next;
		}
	}
}
//Space - O(N) where N is unique elements of the LL
//Time - O(N) where N is length of the LL
let n1 = new ListNode(1);
ll1 = new LinkedList(n1);
ll1.add(2);
ll1.add(33);
ll1.add(99);
ll1.add(66);
ll1.add(55);
ll1.add(33);
ll1.add(77);
console.log(ll1.printList());
removeDupsSol1(n1);
console.log(ll1.printList());
let llEmpty = new LinkedList();
removeDupsSol1(llEmpty.head);
console.log(llEmpty.printList());


//Sol2
//Sol without use of buffer
const removeDupsSol2 = (headNode) => {
	let currNode = headNode;

	while (currNode != null) {
		let runnerNode = currNode;

		while(runnerNode.next != null) {
			if(runnerNode.next.val === currNode.val) {
				runnerNode.next = runnerNode.next.next
			}
			else {
				runnerNode = runnerNode.next
			}
		}
		currNode = currNode.next;
	}
}
let n2 = new ListNode(1);
ll2 = new LinkedList(n2);
ll2.add(2);
ll2.add(33);
ll2.add(99);
ll2.add(66);
ll2.add(55);
ll2.add(33);
ll2.add(77);
console.log(ll2.printList());
removeDupsSol1(n2);
console.log(ll2.printList());
removeDupsSol2(llEmpty.head);
console.log(llEmpty.printList());