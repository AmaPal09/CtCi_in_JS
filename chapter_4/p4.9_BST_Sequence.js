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


