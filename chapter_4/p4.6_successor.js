/*
Successor
Write an algorithm to find the "next" node (i.e., in-order successor)
of a given node in a binary search tree. You may assume that each node
has a link to its parent.
*/

/*
Explaination:
In a BST, in order successor is the next node in the order of traversal.
In-order successor of the last node (right most node) is null.


*/

/*
Questions:
1)
*/


/*
Example:
				20
			   /  \
			  /    \
			 8     22
			/ \
		   4  12
		   	  / \
		   	 10 14
1) In-order successor of 8 is 10
2) In-order successor of 10 is 12
3) In-order successor of 14 is 20.
4) In-order successor of 22 is null.
*/

//METHOD 1
/*
Assumption:
1) Every node has a parent pointer
2) Input node is tree node
3) Output node is a tree node.
*/

// 	If right subtree of the node is not null then the successor lies in
// the right subtree. So go to the right subtree and return the node
// with minimum value.
// 	If right subtree of the node is null, then successor is one of its
// ancestors. So travel up the tree using the parent pointer until
// there is node which is the left child of its parent.
// This parent node is the successor.

class TreeNodeWithParent {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = null;
	}
}

const inOrderSuccessor = (node) => {

	if (node.right != null) {
		let minNode = getMin(node.right);
		if (minNode != null) {
			return minNode.value;
		}
	}

	let parentSucc = getParentSuccessor(node, node.parent);
	if (parentSucc != null) {
		return parentSucc.value;
	}
	else {
		return null;
	}

}


const getParentSuccessor = (child, parent) => {
	if (parent == null) {
		return null;
	}

	while(parent != null) {
		console.log(child.value, parent.value);
		// console.log(parent.left.value);
		if (parent.left == child) {

			return parent;
		}
		child = parent;
		parent = parent.parent;
	}
}

const getMin = (node) => {
	while(node.left != null) {
		node = node.left;
	}

	return node;
}

let root = new TreeNodeWithParent(20);
let a1 = new TreeNodeWithParent(8);
let b1 = new TreeNodeWithParent(22);
root.left = a1;
root.right = b1;
a1.parent = root;
b1.parent = root;

let c1  = new TreeNodeWithParent(4);
let d1  = new TreeNodeWithParent(12);
a1.left = c1;
a1.right = d1;
c1.parent = a1;
d1.parent = a1;

let e1 = new TreeNodeWithParent(10);
let f1  = new TreeNodeWithParent(14);
d1.left = e1;
d1.right = f1;
e1.parent = d1;
f1.parent = d1;


// console.log(root);
// console.log(d1);
console.log("In-order successor of 8 is " + inOrderSuccessor(a1));
console.log("In-order successor of 10 is " + inOrderSuccessor(e1));
console.log("In-order successor of 14 is " + inOrderSuccessor(f1));
console.log("In-order successor of 22 is " + inOrderSuccessor(b1));

//Time complexity O(n) n is the height of the tree.
// Space 1 (no extra space used)



// Method 2
// Inorder successor without the parent.
// Assumption
// no parent property present on the tree node.
// Both the root of the tree and the node are provided.
// node is a part of the tree whose root is provided.

//Sol
//If right subtree is not null, then follow part of on method 1
//If right subtree is null,
//Start from the root of the tree, as seach through the tree.
// Travel down the tree. Store the root as the succ.
// if node's data is greater than the root, then
// go right, make the right node the root.
// else if node's data is smaller than the root, then  successor is the root,
// and make the left node the root.
class TreeNode {
	constructor(data) {
		this.value = data;
		this.left = null;
		this.right = null;
	}
}

const inOrderSuccessorSol2 = (root, node) => {

	if (node.right != null) {
		return getMin2(node.right);
	}

	let successor = null;
	while (root != null) {
		if (node.value < root.value) {
			successor = root;
			root = root.left;
		}
		else if (node.value > root.value) {
			root = root.right;
		}
		else  {
			break
		};
	}
	return successor;
}

const getMin2 = (node) => {
	while (node.left != null) {
		node = node.left;
	}
	return node;
}

//20, 8, 22, 4, 12, 10, 14
let r1 = new TreeNode(20);
r1.left = new TreeNode(8);
r1.right = new TreeNode(22);
r1.left.left = new TreeNode(4);
r1.left.right = new TreeNode(12);
r1.left.right.left = new TreeNode(10);
r1.left.right.right = new TreeNode(14);
console.log("In-order successor sol2 of 8 is " + inOrderSuccessorSol2(r1, r1.left).value);
console.log("In-order successor sol2 of 10 is " + inOrderSuccessorSol2(r1, r1.left.right.left).value);
console.log("In-order successor sol2 of 14 is " + inOrderSuccessorSol2(r1, r1.left.right.right).value);
console.log("In-order successor sol2 of 22 is " + inOrderSuccessorSol2(r1, r1.left.right.right).value);
