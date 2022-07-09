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