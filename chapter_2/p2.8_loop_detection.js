/*
Loop Detection
Given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop (if one exist)
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
1) A -> B -> C -> D -> E -> C [same as the C earlier]
2) C
*/

class ListNode {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

function printLL(node) {
	let currNode = node;
	let printArray = [];
	while (currNode != null) {
		printArray.push(currNode.data);
		currNode = currNode.next;
	}
	return printArray.join("->");
}


const loopDetectionSol1 = (head) => {
	let slowPtr = head;
	let fastPtr = head;

	while (fastPtr != null && fastPtr.next != null) {
		slowPtr = slowPtr.next;
		fastPtr = fastPtr.next.next;
		if (slowPtr === fastPtr) {
			break;
		}
	}

	if (fastPtr === null || fastPtr.next === null) {
		return null;
	}

	slowPtr = head;

	while (slowPtr != fastPtr) {
		slowPtr = slowPtr.next;
		fastPtr = fastPtr.next;
	}

	return fastPtr;
}

let n1 = new ListNode("A");
let n2 = new ListNode("B");
let n3 = new ListNode("C");
let n4 = new ListNode("D");
let n5 = new ListNode("E");
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;
console.log(loopDetectionSol1(n1));

let m1 = new ListNode("a");
let m2 = new ListNode("b");
let m3 = new ListNode("c");
let m4 = new ListNode("d");
let m5 = new ListNode("e");
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
console.log(loopDetectionSol1(m1));