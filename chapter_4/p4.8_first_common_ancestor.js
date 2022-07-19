/*
First Common Ancestor
Design an algorithm and write code to find the first common ancestor of
two nodes in a binary tree. Avoid storing additional nodes in a data structur.
NOTE: This is not necessarily a binary search tree.
*/

/*
Explaination:
Easiest Method is to use additional data structure and storing root to n1 and n2.

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

//Not an actual solution
// Find a path from root to n1 and store it in a DS
// Find a path from root to n2 and store it in another DS
// Traverse both DS until there is a mismatch. Return common element just before mismatch.

class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

let root;
let path1ToN1;
let path2ToN2;

function findLCA(n1, n2) {
	path1ToN1 = [];
	path2ToN2 = [];
	return findLCAWithRoot(root, n1, n2);
}

function findLCAWithRoot(root, n1, n2) {

	if (!findPath(root, n1, path1ToN1)|| !findPath(root, n2, path2ToN2)) {
		path1ToN1.length > 0 ? console.log("n1 present"): console.log("n1 missing");
		path2ToN2.length > 0 ? console.log("n2 present"): console.log("n2 missing");
		return -1;
	}

	let i;
	for (i = 0; i < path1ToN1.length && i < path2ToN2.length; i++) {
		if (path1ToN1[i] !== path2ToN2[i]) {
			break;
		}
	}
	return path1ToN1[i-1];

}

function findPath(root, n, path) {
	// console.log(root, n, path);
	if (root == null) {
		return false;
	}

	path.push(root.value);

	if (root.value == n) {
		return true;
	}

	if (root.left !== null && findPath(root.left, n, path)) {
		return true;
	}

	if (root.right !== null && findPath(root.right, n, path)) {
		return true;
	}

	//If node is not present in the subtree starting from  this root, then
	//remove the root from the path.
	path.pop();

	return false;
}
//					1
//				  /   \
//				 /	   \
//			    2		3
//			   / \ 	   / \
//			  4   5   6   7

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// console.log(root);
console.log("Common Ancestor for 4,5 = " + findLCA(4,5));
console.log("Common Ancestor for 4,6 = " + findLCA(4,6));
console.log("Common Ancestor for 3,4 = " + findLCA(3,4));
console.log("Common Ancestor for 2,4 = " + findLCA(2,4));

//Time complexity = O(n). Tree traversed twice
//Space 2 extra DSs used

