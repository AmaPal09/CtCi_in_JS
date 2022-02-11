/*
Sum Lists
You have two numbers represented by linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to cheat and just convert the linked list to an integer)
*/

/*
Explaination:
*/

/*
Questions:
1) Can the LL contain -ve numbers?
2) Can any of the 2 LLs be null?
*/

/*
Assumption:
1) LL contains only non -ve numbers
2) LL contains atleast 0 or null.
3) Both LL contain only numbers.
*/

/*
Example:
1)  + 1->2 => 1->2
2) 0 + 1->2 => 1->2
3) 1->2-3 + 4->5->6 => 5->7->9
4) 9->9 + 1 => 0->0->1
5) 9->9 + 9->9 => 8->9->1
*/

const LL = require("./linkedList.js");

//sol1
const sumListsSol1 = (inHead1, inHead2) => {
	//If only one linkedList contains a number
	if (inHead1 === null) {
		return inHead2;
	}
	if (inHead2 === null) {
		return inHead1;
	}

	//When both LinkedLists contain numbers
	let sumNode = null;
	let sumHead = null;
	let sumVal = 0;


	//Get the sum of the numbers
	while (inHead1 && inHead2) {
		sumVal = inHead1.data + inHead2.data + sumVal;
		if (sumNode) {
			sumNode.next = new LL.ListNode(sumVal);
			sumNode = sumNode.next;
		}
		else {
			console.log("else1")
			sumNode = new LL.ListNode(sumVal);
			sumHead = sumNode;
			// sumLL.head = sumNode;
		}
		inHead1 = inHead1.next;
		inHead2 = inHead2.next;
	}


	//If one linkedLists is smaller than the other linkedList
	if (inHead1 === null && inHead2 !== null) {
		sumNode.next = inHead1;
	}
	else if (inHead2 === null && inHead1 !== null) {
		sumNode.next = inHead2;
	}

	console.log(sumHead);
	return sumHead;
}

let num1 = new LL.ListNode(1);
let numLL1 = new LL.LinkedList(num1);
numLL1.add(2);
numLL1.add(3);
console.log(numLL1.printList());
let num2 = new LL.ListNode(4);
let numLL2 = new LL.LinkedList(num2);
numLL2.add(5);
numLL2.add(6);
console.log(numLL2.printList());

let resultLL = sumListsSol1(numLL1.head, numLL2.head);
// console.log(resultLL.printList());