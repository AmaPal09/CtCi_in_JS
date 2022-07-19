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



