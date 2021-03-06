/*
Delete Middle Node
Implement an algorith to delete a node in the middle (ie., any node but the first and the last node, not necessarily the exact middle) of a singly linked list, given only access to that node
*/

/*
Explaination:
*/

/*
Questions:
1) What to return if LL length is 3 and 4th to last element is asked for?
2) What if its an empty LL
3) What to return: the node or the val?
*/

/*
Assumption:
1) Function is passed with just the middle node that is to be deleted
2) Nothing is returned
*/

/*
Example:
1) '' => ''
2) (1->2->3->4->5->6) Input(node 6) => (1->2->3->4->5->6)
3) ('a'->'e'->'c'->'d') Input(node c) => ('a'->'e'->'c'->'d')
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

	add(elem) {
		let newNode = new ListNode(elem);

		let currNode = this.head;
		if (this.head == null) {
			this.head = newNode;
		}
		else {
			while(currNode.next != null) {
				currNode = currNode.next;
			}
			currNode.next = newNode;
		}
	}

	printLL() {
		let currNode = this.head;
		let prtArr = [];
		while (currNode != null) {
			prtArr.push(currNode.val);
			currNode = currNode.next;
		}
		return console.log(prtArr.join("->"));
	}
}


//Sol1
const delMiddleNodeSol1 = (midNode) => {
	if (midNode && midNode.next) {
		midNode.val = midNode.next.val;
		midNode.next = midNode.next.next;
	}
}

module.exports = {
	delMiddleNodeSol1,
	ListNode,
	LinkedList
}