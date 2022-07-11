/*
List of depths
Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
*/

/*
Explaination:
*/

/*
Questions:
1) How should the linked lists be returned. Would a list of lists work?
*/

/*
Assumption:
1)
*/

/*
Example:
1)
*/

class Queue {
	constructor() {
		this._queue = [];
	}

	size() {
		return this._queue.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	enqueue(value) {
		this._queue.push(value);
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		else {
			return this._queue.at(0);
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		else {
			return this._queue.shift();
		}
	}
}


class ListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	size_of_LL() {
		let countLL = 0;
		let currNode = this.head;
		while(currNode) {
			countLL ++ ;
			currNode = currNode.next;
		}

		return countLL;
	}

	clearLL() {
		this.head = null;
	}

	getLast() {
		let currNode = this.head;
		if (!currNode) {
			return null;
		}

		while(currNode.next) {
			currNode = currNode.next;
		}
		return currNode;

	}

	getFist() {
		return this.head;
	}

	add(elem) {
		if (this.head === null) {
			this.head = new ListNode(elem);
			return this.head.data;
		}

		let currNode = this.head;
		while(currNode.next) {
			currNode = currNode.next;
		}

		currNode.next = new ListNode(elem);
		return currNode.next.data;
	}

	addMultiple(elemArray) {
		for(let i = 0; i < elemArray.length; i++) {
			this.add(elemArray[i]);
		}
	}

	insertAt(elem, index) {
		if (index < 0 || index > this.size_of_LL()) {
			console.log("error in index");
			return null;
		}

		let newNode = new ListNode(elem);
		if (index == 0) {
			newNode.next = this.head;
			this.head = newNode;
		}
		else {
			let ctr = 0;
			let currNode = this.head;
			let prevNode;
			while(ctr < index) {
				prevNode = currNode;
				currNode = currNode.next;
				ctr ++;
			}
			prevNode.next = newNode;
			newNode.next = currNode;
		}
	}

	insertAfter(prevNode, elem) {
		if(index < 0 || index > this.size_of_LL()){
			console.log("Please enter a valid index");
			return null;
		}
		let newNode = new ListNode(elem);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
	}

	removeFromIndex(index) {
		if(index < 0 || index > this.size_of_LL()) {
			console.log("Please enter valid index");
		}

		let currNode = this.head;
		let prevNode = currNode;

		if (index = 0) {
			this.head = this.head.next;
		}
		else {
			let ctr = 0;
			while(ctr < index ) {
				prevNode = currNode;
				currNode = currNode.next;
				ctr++;
			}
			prevNode.next = currNode.next;
		}

		return currNode.data;
	}

	removeElement(elem) {
		let currNode = this.head;
		let prevNode = null;

		while(currNode != null) {
			if(currNode.data === elem) {
				if(prevNode === null) {
					this.head = currNode.next;
				}
				else {
					prevNode.next = currNode.next;
				}

				return currNode.data;
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
		return -1;
	}

	indexOf(elem) {
		let ctr = 0;
		let currNode = this.head;

		while(currNode != null) {
			if(currNode.data === elem) {
				return ctr;
			}
			ctr++;
			currNode = currNode.next;
		}
		return -1;
	}

	printList() {
		let currNode = this.head;
		let printArr;
		while(currNode != null) {
			printArr.push(currNode.data);
			currNode = currNode.next;
		}
		return printArr.join("->");
	}
}


class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	};

	insert(value) {
		if(value < this.value) {
			if(this.left === null) {
				this.left = new BST(value);
			}
			else {
				this.left.insert(value);
			}
		} else {
			if(this.right === null) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
	};

	printLevelOrder() {
		let level = [];
		let q = new Queue();
		let nextQ = new Queue();
		let currNode;

		q.enqueue(this);
		while(!q.isEmpty()) {
			currNode = q.dequeue();
			level.push(currNode.value);
		}

		if (currNode.left !== null) {
			nextQ.enqueue(currNode.left);
		}
		if (currNode.right !== null) {
			nextQ.enqueue(currNode.right);
		}
		if (q.isEmpty()) {
			console.log(level.join(','));
			level = [];
			q = nextQ;
			nextQ = new Queue();
		}
	}
};

const listOfDepths = (bst) => {
	let listOfLists = [];
	let list = null;
	let newNode;
	let q = new Queue();
	let nextQ = new Queue();
	let currNode = bst;

	q.enqueue(currNode);
	while(!q.isEmpty()){
		currNode = q.dequeue();
		newNode = new LinkedList(currNode.value);
		newNode.next = list;
		list = newNode;
		if(currNode.left !== null) {
			nextQ.enqueue(currNode.left);
		}
		if(currNode.right !== null) {
			nextQ.enqueue(currNode.right);
		}
		if(q.isEmpty()) {
			listOfLists.push(list);
			list = null;
			q = nextQ;
			nextQ = new Queue();
		}
	}

	return listOfLists;
}

let tree1 = new BST(4);
tree1.insert(2);
tree1.insert(6);
tree1.insert(1);
tree1.insert(3);
tree1.insert(5);
tree1.insert(7);

console.log(listOfDepths(tree1));
