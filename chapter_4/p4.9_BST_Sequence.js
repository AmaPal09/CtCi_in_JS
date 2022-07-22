/*
BST Sequence
A binary search tree was created by tracersing through an array from left
to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.
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
Given node/root will always be the first element. As first element add to
the BST will become the root, root is the first element.
The all elements less than root added to the left and all elements bigger than
the root added to the right. Order of adding them does not matter. But these
2 subtrees now become individual nodes for which we need to obtain the BST sequence.
As sequence on the same element does not matter, that is
			1
		   / \
		  2   3
will result in {1,2,3} or {1,3,2}.
So we need to weave all possible options for that level.
*/


class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new TreeNode(value);
		if (!this.root) {
			this.root = newNode;
		}
		else {
			this.addNode(this.root, newNode);
		}
	}
	addNode(node, newNode) {
		if (newNode.value < node.value) {
			if (!node.left) {
				node.left = newNode;
			}
			else {
				this.addNode(node.left, newNode);
			}
		}
		else if (newNode.value > node.value) {
			if (!node.right) {
				node.right = newNode;
			}
			else {
				this.addNode(node.right, newNode);
			}
		}
	}

}

let tree1 = new BST();
tree1.insert(2);
tree1.insert(1);
tree1.insert(3);
console.log(tree1);

let tree2 = new BST();
tree2.insert(50);
tree2.insert(20);
tree2.insert(60);
tree2.insert(10);
tree2.insert(25);
tree2.insert(70);
tree2.insert(5);
tree2.insert(15);
tree2.insert(65);
tree2.insert(80);
// console.log(tree2);


function allSequences(node) {
	let result = [];

	if (!node) {
		result.push([]);
		return result;
	}

	let prefix = [];
	prefix.push(node.value);
	// console.log(1, prefix);
	//Recurse through left and right subtrees
	let leftSeq = allSequences(node.left);
	let rightSeq = allSequences(node.right);
	// console.log(2, leftSeq, rightSeq);

	//Weave together each list from the left and the right
	for (let left of leftSeq) {
		for (let right of rightSeq) {
			const weaved = [];
			// console.log(left, right, weaved, prefix);
			weaveLists(left, right, weaved, prefix);
			// console.log(left, right, weaved, prefix);
			result.push(...weaved);
			// console.log(result);
		}
	}

	return result;
}

function weaveLists(first, second, results, prefix) {
	//If either of the lists is empty, add remainder of the other list
	//to a cloned prefix and store the results.
	if(first.length == 0 || second.length == 0) {
		// console.log(4, first, second, results,prefix);
		const tempResult = prefix.slice(0);
		tempResult.push(...first);
		tempResult.push(...second);
		results.push(tempResult);
		return ;
	}

	//Recurr with head of the first added to the prefix. Removing the head
	// will damange first, so we'll need to put it back where we found it
	// afterwards.
	let tempHeadFirst = first.shift();
	prefix.push(tempHeadFirst);
	weaveLists(first, second, results, prefix);
	prefix.pop();
	first.unshift(tempHeadFirst);

	//Recurr with head of the second added to the prefix. Removing the head
	// will damange second, so we'll need to put it back where we found it
	// afterwards.
	let tempHeadSecond = second.shift();
	prefix.push(tempHeadSecond);
	weaveLists(first, second, results, prefix);
	prefix.pop();
	second.unshift(tempHeadSecond);
}


// const allSequences = node => {
//   const result = [];

//   if (!node) {
//     result.push([])
//     return result;
//   }
//   const prefix = [];
//   prefix.push(node.value);
//   console.log(1, prefix);
//   /* Recurse on left and right subtrees. */
//   const leftSeq = allSequences(node.left);
//   const rightSeq = allSequences(node.right);
//   console.log(2, leftSeq, rightSeq);
//   Weave together each list from the left and right sides.
//   for (let left of leftSeq) {
//     for (let right of rightSeq) {
//       const weaved = [];
//       console.log(left, right, weaved, prefix);
//       weaveLists(left, right, weaved, prefix);
//       console.log(left, right, weaved, prefix);
//       result.push(...weaved);
//       console.log(result);
//     }
//   }
//   return result
// }



console.log(allSequences(tree1.root));
// console.log(allSequences(tree2.root));
let tree3 = new BST();
tree3.insert(20);
tree3.insert(10);
tree3.insert(30);
tree3.insert(5);
tree3.insert(15);
tree3.insert(25);
console.log(allSequences(tree3.root));