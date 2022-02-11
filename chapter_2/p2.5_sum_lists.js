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
6) 1 + 9->9 => 0->0->1
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
	let sumVal = 0
	let sumCarry = 0;


	//Get the sum of the numbers
	while (inHead1 || inHead2) {
		if (inHead1 && inHead2) {
			sumVal = inHead1.data + inHead2.data + sumCarry;
			inHead1 = inHead1.next;
			inHead2 = inHead2.next;
		}
		//If one linkedLists is smaller than the other linkedList
		else if (inHead1 === null && inHead2 !== null) {
			sumVal = inHead2.data + sumCarry;
			inHead2 = inHead2.next;
		}
		else if (inHead2 === null && inHead1 !== null) {
			sumVal = inHead1.data + sumCarry;
			inHead1 = inHead1.next;
		}

		//Split the sum in sum & carry if sum has 2 digits
		if (sumVal > 9) {
			sumCarry = Math.floor(sumVal/10);
			sumVal = sumVal % 10;
		}else {
			sumCarry = 0
		}

		//Add sum to the next node
		if (sumNode) {
			sumNode.next = new LL.ListNode(sumVal);
			sumNode = sumNode.next;
		}
		//If this is the digit in the units place, then add sum as the head
		else {
			// console.log("else1")
			sumNode = new LL.ListNode(sumVal);
			sumHead = sumNode;
			// sumLL.head = sumNode;
		}
	}

	//If after sum of both LLs are completed, if there is a carry remaining,
	if (sumCarry > 0) {
		sumNode.next = new LL.ListNode(sumCarry);
	}

	// console.log(sumHead);
	return sumHead;
}
console.log("Test1")
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
let resultLL1 = new LL.LinkedList(sumListsSol1(numLL1.head, numLL2.head));
console.log(resultLL1.printList());

console.log("Test 2");
let numLL3 = new LL.LinkedList();
console.log(numLL3.printList());
let num4 = new LL.ListNode(1);
let numLL4 = new LL.LinkedList(num4);
numLL4.add(2)
console.log(numLL4.printList());
let resultLL2 = new LL.LinkedList(sumListsSol1(numLL3.head, numLL4.head));
console.log(resultLL2.printList());

console.log("Test 3");
let num5 = new LL.ListNode(0);
let numLL5 = new LL.LinkedList(num5);
console.log(numLL5.printList());
let num6 = new LL.ListNode(1);
let numLL6 = new LL.LinkedList(num6);
numLL6.add(2)
console.log(numLL6.printList());
let resultLL3 = new LL.LinkedList(sumListsSol1(numLL5.head, numLL6.head));
console.log(resultLL3.printList());

console.log("Test 4");
let num7 = new LL.ListNode(9);
let numLL7 = new LL.LinkedList(num7);
numLL7.add(9);
console.log(numLL7.printList());
let num8 = new LL.ListNode(1);
let numLL8 = new LL.LinkedList(num8);
console.log(numLL8.printList());
let resultLL4 = new LL.LinkedList(sumListsSol1(numLL7.head, numLL8.head));
console.log(resultLL4.printList());

console.log("Test 5");
let num9 = new LL.ListNode(9);
let numLL9 = new LL.LinkedList(num9);
numLL9.add(9);
console.log(numLL9.printList());
let num10 = new LL.ListNode(9);
let numLL10 = new LL.LinkedList(num10);
numLL10.add(9);
console.log(numLL10.printList());
let resultLL5 = new LL.LinkedList(sumListsSol1(numLL9.head, numLL10.head));
console.log(resultLL5.printList());

console.log("Test 6");
let num11 = new LL.ListNode(1);
let numLL11 = new LL.LinkedList(num11);
console.log(numLL11.printList());
let num12 = new LL.ListNode(9);
let numLL12 = new LL.LinkedList(num12);
numLL12.add(9);
console.log(numLL12.printList());
let resultLL6 = new LL.LinkedList(sumListsSol1(numLL11.head, numLL12.head));
console.log(resultLL6.printList());
// 6) 1 + 9->9 => 0->0->1