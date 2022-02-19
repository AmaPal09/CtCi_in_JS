/*
Intersection
Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
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

	add(node) {
		let nNode = new ListNode(node);

		if(this.head == null) {
			this.head = nNode;
		}
		else {
			let curr = this.head;
			while(curr.next) {
				curr = curr.next;
			}
			curr.next = nNode;
		}
	}
}

const printLL = (head) => {
	let curr = head;
	let listArr = [];
	while (curr) {
		listArr.push(curr.val);
		curr = curr.next;
	}
	return listArr.join("->");
}


//class Result
class Result {
	constructor(node, size) {
		this.tail = node;
		this.size = size;
	}
}


//Helper function
const getLengthNSize = (head) => {
	if (head == null) {
		return null;
	}

	let size = 1;
	let curr = head;

	while(curr.next != null) {
		size++;
		curr = curr.next;
	}

	return new Result(curr, size);
}


const getKthNode = (head, k) => {
	let curr = head;
	while (k > 0 && curr != null ) {
		curr = curr.next;
		k--;
	}

	return curr;
}


//Sol1
const intersectionSol1 = (head1, head2) => {
	if (head1 == null || head2 == null) {
		return null;
	}

	let curr1 = head1;
	let curr2 = head2;

	let result1 = getLengthNSize(head1);
	let result2 = getLengthNSize(head2);


	if (result1.tail != result2.tail) {
		return null;
	}

	let shorter = result1.size < result2.size ? head1 : head2;
	let longer = result1.size < result2.size ? head2: head1;

	longer = getKthNode(longer, Math.abs(result1.size - result2.size));


	while (longer != shorter) {
		shorter = shorter.next;
		longer = longer.next;
	}

	return longer;
}

let p1 = new ListNode(3);
let p2 = new ListNode(1);
let p3 = new ListNode(5);
let p4 = new ListNode(9);
let p5 = new ListNode(7);
let p6 = new ListNode(2);
let p7 = new ListNode(1);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
p5.next = p6;
p6.next = p7;
console.log(printLL(p1));
let q1 = new ListNode(4);
let q2 = new ListNode(6);
let q3 = new ListNode(7);
let q4 = new ListNode(2);
let q5 = new ListNode(1);
q1.next = q2;
q2.next = q3;
q3.next = q4;
q4.next = q5;
console.log(printLL(q1));
console.log(intersectionSol1(p1, q1));

module.exports = {intersectionSol1, ListNode, LinkedList, printLL};