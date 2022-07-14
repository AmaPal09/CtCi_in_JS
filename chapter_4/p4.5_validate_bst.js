/*
Validate BST
Implement a function to check if a binary tree is a binary search tree
*/

/*
Explaination:
Binary Search Tree
node.left.data <= node.data < node.right
all left nodes must be less than or equal the node all right nodes
must be greater than the node.

Approach 1
Min, Max.
Each node is bigger than all its left nodes and smaller than its right
 nodes. We pass min and max values and progressively norrow the range
for min and max.
Start with, root and min=null and max=null.
Check left value to be less than max=root and check right to be greater
than min=root.
Move through the tree progressively and keep updating the max (for left
node) and min (for right node) for each left and right node. When any
node fails, stop and return false.
*/

/*
Questions:
1)
*/

/*
Assumption:
1) There are no duplicates present.
*/

/*
Example:
1)
*/

class BinaryTree {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

let bst1r = new BinaryTree(5);
let bst1a = new BinaryTree(4);
let bst1b = new BinaryTree(6);
let bst1c = new BinaryTree(1);
let bst1d = new BinaryTree(100);
bst1r.left =  bst1a;
bst1r.right =  bst1b;
bst1a.left =  bst1c;
bst1a.right =  bst1d;

const ValidateBST = (root) => {
	return checkForBST(root, null, null);
}

const checkForBST = (root, min, max) => {
	if(root === null) {
		return true;
	}

	if((min != null && root.value <= min) || (max != null && root.value >= max)) {
		return false;
	}

	if (!(checkForBST(root.left, min, root.value)) || !(checkForBST(root.right, root.value, max)) ) {
		return false;
	}
	return true;
}

console.log(ValidateBST(bst1r), false);
//Time complexity = O(n)
//Space O(log n) because of recursion on a balanced tree. Total, O(log N)
// recurrsive calls on the tree until its depth is reached.


//HANDLING DUPLICATES
//Duplicates can only be on the left side. That is left node can be less
// than or equal to the parent. Right is always greater than parent.
const ValidateBSTWithDups = (root) => {
	return checkForBSTWithDups(root, null, null);
}

const checkForBSTWithDups = (root, min, max) => {
	if (root === null) {
		return true;
	}
	// console.log(root.value, min, max);
	if ((max!== null && root.value > max) || (min !== null && root.value <= min)) {
		return false;
	}

	if ( !(checkForBSTWithDups(root.left, min, root.value)) ||  !(checkForBSTWithDups(root.right, root.value, max)) ) {
		return false;
	}

	return true;
}

let bst2r = new BinaryTree(7);
let bst2a = new BinaryTree(4);
let bst2b = new BinaryTree(8);
let bst2c = new BinaryTree(4);
let bst2d = new BinaryTree(6);
bst2r.left =  bst2a;
bst2r.right =  bst2b;
bst2a.left =  bst2c;
bst2a.right =  bst2d;
console.log(ValidateBSTWithDups(bst2r), true);

let bst3r = new BinaryTree(5);
let bst3a = new BinaryTree(4);
let bst3b = new BinaryTree(6);
let bst3c = new BinaryTree(1);
let bst3d = new BinaryTree(4);
bst3r.left =  bst3a;
bst3r.right =  bst3b;
bst3a.left =  bst3c;
bst3a.right =  bst3d;
console.log(ValidateBSTWithDups(bst3r), false);