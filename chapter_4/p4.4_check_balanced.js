/*
Check Balanced
Implement a function to check if a binary tree is balanced.
For the purposes of this question, s balanced tree is defined to
be a tree such that the heights of the two subtrees of any node
never differ by more than one.
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

class bst {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if(value < this.value) {
			if (this.left === null) {
				this.left = new bst(value);
			}
			else {
				this.left.insert(value);
			}
		}
		else {
			if (this.right === null) {
				this.right = new bst(value);
			}
			else {
				this.right.insert(value);
			}
		}
	}
}

const checkIfBalanced = (bst) => {
	if(bst.left === null && bst.right !== null) {
		if (bst.right.left !== null || bst.right.right !== null){
			return false;
		}
	}

	if (bst.left !== null && bst.right === null) {
		if (bst.left.left !== null || bst.left.right !== null) {
			return false;
		}
	}

	let ans = true;
	if (bst.left !== null) {
		ans = ans && checkIfBalanced(bst.left);
	}
	if (bst.right !==  null) {
		ans = ans && checkIfBalanced(bst.right);
	}
	return ans;
}

let tree1 = new bst(1);
tree1.insert(2);
tree1.insert(3);
tree1.insert(4);
console.log(checkIfBalanced(tree1), false);

let tree2 = new bst(4);
tree2.insert(2);
tree2.insert(6);
tree2.insert(1);
tree2.insert(3);
tree2.insert(5);
tree2.insert(7);
console.log(checkIfBalanced(tree2), true);