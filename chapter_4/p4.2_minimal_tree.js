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


class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if(value < this.value) {
			if (this.left === null) {
				this.left = new BST(value);
			}
			else{
				this.left.insert(value);
			}
		}
		else {
			if (this.right === null) {
				this.right = new BST(value);
			}
			else{
				this.right.insert(value);
			}
		}
	}

	printInLevelOrder() {
		let level = [];
		let q = new Queue();
		let nextQ = new Queue();
		let currNode;

		q.enqueue(this);
		while(!q.isEmpty()) {
			currNode = q.dequeue();
			level.push(currNode.value);

			if (currNode.left !== null) {
				nextQ.enqueue(currNode.left);
			}

			if (currNode.right !== null) {
				nextQ.enqueue(currNode.right);
			}

			if (q.isEmpty()){
				console.log(level.join(','));
				level = [];
				q = nextQ;
				nextQ = new Queue();
			}

		}
	}
}

// [1,2,3,4,5,6,7]
// let bst1 = new BST();
// bst1.insert(4);
// bst1.insert(2);
// bst1.insert(6);
// bst1.insert(1);
// bst1.insert(3);
// bst1.insert(5);
// bst1.insert(7);

// bst1.printInLevelOrder();


const minimal_tree = (sorted_array) => {
	// if (sorted_array.length === 0) {
	// 	return null;
	// }

	let bst = new BST();
	let q = new Queue();
	let currArray;
	q.enqueue(sorted_array);

	while(!q.isEmpty()) {
		currArray = q.dequeue();
		bst.insert(currArray[Math.floor(currArray.length/2)]);
		if(currArray.slice(0, Math.floor(currArray.length/2)).length > 0) {
			q.enqueue(currArray.slice(0, Math.floor(currArray.length/2)));
		}
		if(currArray.slice(Math.floor(currArray.length/2)+1).length > 0) {
			q.enqueue(currArray.slice(Math.floor(currArray.length/2 + 1)));
		}
	}

	return bst;
}

let arr1 = [1,2,3,4,5,6];
let tree1 = minimal_tree(arr1);
tree1.printInLevelOrder();

let arr2 = [1,2,3,4,5,6,7];
let tree2 = minimal_tree(arr2);
tree2.printInLevelOrder();

let arr3 = [2,3,6];
let tree3 = minimal_tree(arr3);
tree3.printInLevelOrder();

let arr4 = [];
let tree4 = minimal_tree(arr4);
tree4.printInLevelOrder();