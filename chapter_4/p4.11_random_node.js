/*
RANDOM NODE
You are implementing a binary dearch tree class from scrathch, which, in
addition to insert, find and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen.
Design and implement an algorithm for getRandomNOde() and explain how you would
build the rest of the methods.
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


class Node
{
    constructor(data)
    {
        this.data=data;
        this.left=this.right=null;
        this.children = 0;
    }
}

// This is used to fill children counts.
function getElements(root)
{
    if (root == null)
        return 0;
    return getElements(root.left) +
        getElements(root.right) + 1;
}

// Inserts Children count for each node
function insertChildrenCount(root)
{
    if (root == null)
        return null;

    root.children = getElements(root) - 1;
    root.left = insertChildrenCount(root.left);
    root.right = insertChildrenCount(root.right);
    return root;
}

// returns number of children for root
function children(root)
{
    if (root == null)
        return 0;
    return root.children + 1;
}

// Helper Function to return a random node
function randomNodeUtil(root,count)
{
    if (root == null)
        return 0;

    if (count == children(root.left))
        return root.data;

    if (count < children(root.left))
        return randomNodeUtil(root.left, count);

    return randomNodeUtil(root.right,
         count - children(root.left) - 1);
}

// Returns Random node
function randomNode(root)
{
    let count =  Math.floor(Math.random() *
                     (root.children + 1));
    return randomNodeUtil(root, count);
}

// Driver Code
// Creating Above Tree
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.right = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

insertChildrenCount(root);

let range = 10;
while (range) {
	console.log("Random node = " + randomNode(root));
	range --;
}


//********************************************************************
// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 		this.childrenCount = 0;
// 	}
// }

// function getElements(root) {
// 	if (root == null) {
// 		return 0;
// 	}
// 	return getElements(root.left) + getElements(root.right) + 1;
// }


// function insertChildrenCount(root) {
// 	if (root == null) {
// 		return null;
// 	}
// 	root.childrenCount = getElements(root)-1
// 	root.left = insertChildrenCount(root.left);
// 	root.right = insertChildrenCount(root.right);
// 	return root;
//  }

// function giveChildrenCount(root) {
// 	if (root == null) {
// 		return null;
// 	}
// 	return root.childrenCount + 1;
// }

// function randomNodeUtil(root, count) {
// 	if (root == null) {
// 		return 0;
// 	}
// 	if (count == giveChildrenCount(root.left)) {
// 		return root.value;
// 	}
// 	if (count < giveChildrenCount(root.left)) {
// 		return randomNodeUtil(root.left, count);
// 	}
// 	return randomNodeUtil(root.right, count- giveChildrenCount(root.left)-1);
// }

// function randomNode(root) {
// 	let count = Math.floor(Math.random() * (root.childrenCount) + 1);
// 	return randomNodeUtil(root, count);
// }


// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.left.right = new Node(40);
// root.left.right = new Node(50);
// root.right.left = new Node(60);
// root.right.right = new Node(70);

// insertChildrenCount(root);

// let range = 10;
// while (range) {
// 	console.log("Random node = " + randomNode(root));
// 	range --;
// }
// console.log("Random node = " + randomNode(root));


//********************************************************************
// class TreeNode {
// 	constructor (value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 		this.size = 0;
// 	}

// 	insertInOrder(value) {
// 		if(value < this.value) {
// 			if(!this.left) {
// 				this.left = new TreeNode(value);
// 			}
// 			else {
// 				this.left.insertInOrder(value);
// 			}
// 		}
// 		else {
// 			if (!this.right) {
// 				this.right = new TreeNode(value);
// 			}
// 			else {
// 				this.right.insertInOrder(value);
// 			}
// 		}
// 	}

// 	getIthNode(index) {
// 		let leftSide = 0;
// 		if (this.left == null) {
// 			leftSide = 0;
// 		}
// 		else {
// 			leftSide = this.left.size;
// 		}

// 		if (index < leftSide) {
// 			return this.left.getIthNode(index);
// 		}
// 		else {
// 			return this.right.getIthNode(index - (leftSide + 1) );
// 		}
// 	}
// }

// class BinarySearchTree {
// 	constructor() {
// 		this.root = null;
// 		this.size++;
// 	}

// 	insertInOrder(value) {
// 		if (!this.root) {
// 			this.root = new TreeNode(value);
// 		}
// 		else {
// 			this.root.insertInOrder(value);
// 			this.size++
// 		}
// 	}

// 	getRandomNode() {
// 		if (!this.root) {
// 			return null;
// 		}
// 		const index = Math.floor(Math.random() * this.size);
// 		return this.root.getIthNode(index);
// 	}
// }

// const bst = new BinarySearchTree();
// const arr1 = [20,30,10,15,35, 17, 5, 3, 7];
// arr1.forEach(a1 => bst.insertInOrder(a1));
// let range = 10;
// let string = "";
// while (range) {
// 	string += bst.getRandomNode().value + '';
// 	range --;
// }
// console.log(string);