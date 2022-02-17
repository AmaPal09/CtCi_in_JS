/*
Palindrome
Implement function to check if a linked list is a palindrome
*/

/*
Explaination:
Store reversed verion of curr LL in another LL.
Compare the inpout LL with the reversed LL.
If both match, LL is a palindrome.
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

	sizeOfLL() {
		let curr = this.head;
		let count = 0;

		while (curr) {
			count++;
			curr = curr.next;
		}
		return count;
	}
}

const printLL = (head) => {
	let curr = head;
	let listArr = [];
	while (curr) {
		listArr.push(curr.val);
		curr = curr.next;
	}
	return console.log(listArr.join("->"));
}

//Helper function
const reverseLL = (node) => {
	let head = null;

	while(node != null) {
		let n = new ListNode(node.val);
		n.next = head;
		head = n;
		node = node.next;
	}
	return head;
}


//Helper function
const isEqualLL = (node1, node2) => {
	while (node1 !== null && node2 !== null) {
		if (node1.val !== node2.val) {
			// console.log("A1");
			return false;
		}
		// console.log(node1.val, node2.val);
		node1 = node1.next;
		node2 = node2.next;
	}

	// console.log(node1, node2);
	return node1 ===  null && node2 === null;
}

//Sol1
const palindromeSol1 = (head) => {
	if (head === null || head === undefined) {
		return false;
	}

	printLL(head);
	let rhead = reverseLL(head);
	printLL(rhead);
	return isEqualLL(head, rhead);
}

module.exports = {palindromeSol1, ListNode, LinkedList};