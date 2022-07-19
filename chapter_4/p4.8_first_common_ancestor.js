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

//Not an actual solution uses extra DS
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
console.log("Common Ancestor for 2,8 = " + findLCA(2,8));

//Time complexity = O(n). Tree traversed twice
//Space 2 extra DSs used


// Sol1
// Explanation
// Start traversal from root, if n1 or n2 matches the root then root is
// the LCA. The assumption here is that both the nodes are present in the
// tree.
// If root does not match the either of the nodes then recure for left and
// right subtrees.
// Node that has one key present in its left subtree and other is present
// in its right subtree is the LCA
// If both nodes are present in the left subtrees, then it also has the LCA,
// else LCA is in the right subtree.

// *** ASSUMPTION ***
// Both the nodes are present in the tree.
// Values for n1 and n2 are provided not actual nodes

// root = null;

function findLCASol2(n1, n2) {
	return findLCAWithRootSol2(root, n1, n2);
}

function findLCAWithRootSol2(node, n1, n2) {
	if (node == null) {
		return null;
	}

	if (node.value == n1 || node.value == n2) {
		return node;
	}

	let lcaLeftSub = findLCAWithRootSol2(node.left, n1, n2);
	let lcaRightSub = findLCAWithRootSol2(node.right, n1,n2);

	if (lcaLeftSub != null && lcaRightSub != null) {
		return node;
	}

	return lcaLeftSub != null ? lcaLeftSub : lcaRightSub;

}

console.log("Common Ancestor with Sol2 for 4,5 = " + findLCASol2(4,5).value);
console.log("Common Ancestor with Sol2 for 4,6 = " + findLCASol2(4,6).value);
console.log("Common Ancestor with Sol2 for 3,4 = " + findLCASol2(3,4).value);
console.log("Common Ancestor with Sol2 for 2,4 = " + findLCASol2(2,4).value);
console.log("Common Ancestor with Sol2 for 2,8 = " + findLCASol2(2,8).value);
//Time Complexity O(n)
// Issue: Assumption that both the nodes are present.


