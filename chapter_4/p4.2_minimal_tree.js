/*
Minimal Tree
Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
*/

/*
Explaination:
*/

/*
Questions:
1)
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

	enqueue(val) {
		this._queue.push(val);
	}

	dequeue() {
		if (this.isEmpty()){
			return null;
		}
		else {
			return this._queue.shift();
		}
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		else {
			return this._queue.at(0);
		}
	}
}