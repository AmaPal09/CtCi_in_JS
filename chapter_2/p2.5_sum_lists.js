/*
Sum Lists
You have two numbers represented by linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to cheat and just convert the linked list to an integer)
*/

/*
Explaination:
Sol3 --> Recursive sol for problem
FOLLOW UP
Invert both LLs and then add using first solution
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
			sumNode = new LL.ListNode(sumVal);
			sumHead = sumNode;
		}
	}

	//If after sum of both LLs are completed, if there is a carry remaining,
	if (sumCarry > 0) {
		sumNode.next = new LL.ListNode(sumCarry);
	}

	return sumHead;
}
// console.log("Test1")
// let num1 = new LL.ListNode(1);
// let numLL1 = new LL.LinkedList(num1);
// numLL1.add(2);
// numLL1.add(3);
// console.log(numLL1.printList());
// let num2 = new LL.ListNode(4);
// let numLL2 = new LL.LinkedList(num2);
// numLL2.add(5);
// numLL2.add(6);
// console.log(numLL2.printList());
// let resultLL1 = new LL.LinkedList(sumListsSol1(numLL1.head, numLL2.head));
// console.log(resultLL1.printList());

// console.log("Test 2");
// let numLL3 = new LL.LinkedList();
// console.log(numLL3.printList());
// let num4 = new LL.ListNode(1);
// let numLL4 = new LL.LinkedList(num4);
// numLL4.add(2)
// console.log(numLL4.printList());
// let resultLL2 = new LL.LinkedList(sumListsSol1(numLL3.head, numLL4.head));
// console.log(resultLL2.printList());

// console.log("Test 3");
// let num5 = new LL.ListNode(0);
// let numLL5 = new LL.LinkedList(num5);
// console.log(numLL5.printList());
// let num6 = new LL.ListNode(1);
// let numLL6 = new LL.LinkedList(num6);
// numLL6.add(2)
// console.log(numLL6.printList());
// let resultLL3 = new LL.LinkedList(sumListsSol1(numLL5.head, numLL6.head));
// console.log(resultLL3.printList());

// console.log("Test 4");
// let num7 = new LL.ListNode(9);
// let numLL7 = new LL.LinkedList(num7);
// numLL7.add(9);
// console.log(numLL7.printList());
// let num8 = new LL.ListNode(1);
// let numLL8 = new LL.LinkedList(num8);
// console.log(numLL8.printList());
// let resultLL4 = new LL.LinkedList(sumListsSol1(numLL7.head, numLL8.head));
// console.log(resultLL4.printList());

// console.log("Test 5");
// let num9 = new LL.ListNode(9);
// let numLL9 = new LL.LinkedList(num9);
// numLL9.add(9);
// console.log(numLL9.printList());
// let num10 = new LL.ListNode(9);
// let numLL10 = new LL.LinkedList(num10);
// numLL10.add(9);
// console.log(numLL10.printList());
// let resultLL5 = new LL.LinkedList(sumListsSol1(numLL9.head, numLL10.head));
// console.log(resultLL5.printList());

// console.log("Test 6");
// let num11 = new LL.ListNode(1);
// let numLL11 = new LL.LinkedList(num11);
// console.log(numLL11.printList());
// let num12 = new LL.ListNode(9);
// let numLL12 = new LL.LinkedList(num12);
// numLL12.add(9);
// console.log(numLL12.printList());
// let resultLL6 = new LL.LinkedList(sumListsSol1(numLL11.head, numLL12.head));
// console.log(resultLL6.printList());




//sol2 Using LL
const sumListsSol2 = (inHead1, inHead2) => {
	//If only one linkedList contains a number
	if (inHead1 === null) {
		return inHead2;
	}
	if (inHead2 === null) {
		return inHead1;
	}

	//When both LinkedLists contain numbers
	let sumNode = null;
	let sumLL = null;
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
			sumNode = new LL.ListNode(sumVal);
			sumLL = new LL.LinkedList();
			sumLL.head = sumNode;
		}
	}

	//If after sum of both LLs are completed, if there is a carry remaining,
	if (sumCarry > 0) {
		sumNode.next = new LL.ListNode(sumCarry);
	}

	return sumLL.head;
}
// console.log("Test1b")
// let num1b = new LL.ListNode(1);
// let numLL1b = new LL.LinkedList(num1b);
// numLL1b.add(2);
// numLL1b.add(3);
// console.log(numLL1b.printList());
// let num2b = new LL.ListNode(4);
// let numLL2b = new LL.LinkedList(num2b);
// numLL2b.add(5);
// numLL2b.add(6);
// console.log(numLL2b.printList());
// let resultLL1b = sumListsSol2(numLL1b.head, numLL2b.head);
// console.log(resultLL1b.printList());

// console.log("Test 2b");
// let numLL3b = new LL.LinkedList();
// console.log(numLL3b.printList());
// let num4b = new LL.ListNode(1);
// let numLL4b = new LL.LinkedList(num4b);
// numLL4b.add(2)
// console.log(numLL4b.printList());
// let resultLL2b = new LL.LinkedList(sumListsSol1(numLL3b.head, numLL4b.head));
// console.log(resultLL2b.printList());

// console.log("Test 3b");
// let num5b = new LL.ListNode(0);
// let numLL5b = new LL.LinkedList(num5b);
// console.log(numLL5b.printList());
// let num6b = new LL.ListNode(1);
// let numLL6b = new LL.LinkedList(num6b);
// numLL6b.add(2)
// console.log(numLL6b.printList());
// let resultLL3b = new LL.LinkedList(sumListsSol1(numLL5b.head, numLL6b.head));
// console.log(resultLL3b.printList());

// console.log("Test 4b");
// let num7b = new LL.ListNode(9);
// let numLL7b = new LL.LinkedList(num7b);
// numLL7b.add(9);
// console.log(numLL7b.printList());
// let num8b = new LL.ListNode(1);
// let numLL8b = new LL.LinkedList(num8b);
// console.log(numLL8b.printList());
// let resultLL4b = new LL.LinkedList(sumListsSol1(numLL7b.head, numLL8b.head));
// console.log(resultLL4b.printList());

// console.log("Test 5b");
// let num9b = new LL.ListNode(9);
// let numLL9b = new LL.LinkedList(num9b);
// numLL9b.add(9);
// console.log(numLL9b.printList());
// let num10b = new LL.ListNode(9);
// let numLL10b = new LL.LinkedList(num10b);
// numLL10b.add(9);
// console.log(numLL10b.printList());
// let resultLL5b = new LL.LinkedList(sumListsSol1(numLL9b.head, numLL10b.head));
// console.log(resultLL5b.printList());

// console.log("Test 6b");
// let num11b = new LL.ListNode(1);
// let numLL11b = new LL.LinkedList(num11b);
// console.log(numLL11b.printList());
// let num12b = new LL.ListNode(9);
// let numLL12b = new LL.LinkedList(num12b);
// numLL12b.add(9);
// console.log(numLL12b.printList());
// let resultLL6b = new LL.LinkedList(sumListsSol1(numLL11b.head, numLL12b.head));
// console.log(resultLL6b.printList());


//Sol3
const sumListsSol3 = (head1, head2, carry = 0) => {
	if (!head1 && !head2 && carry===0 ) {
		return null;
	}

	let value = carry;
	if (head1 !== null) {
		value += head1.data;
	}
	if (head2 !== null) {
		value += head2.data;
	}

	let result = new LL.ListNode(value % 10);

	//recurse through the function
	result.next = sumListsSol3( head1 ? head1.next : null,
								head2 ? head2.next : null,
								value > 10 ? Math.floor(value/10) : 0);
	return result;
}
// console.log("Test1c")
// let num1c = new LL.ListNode(1);
// let numLL1c = new LL.LinkedList(num1c);
// numLL1c.add(2);
// numLL1c.add(3);
// console.log(numLL1c.printList());
// let num2c = new LL.ListNode(4);
// let numLL2c = new LL.LinkedList(num2c);
// numLL2c.add(5);
// numLL2c.add(6);
// console.log(numLL2c.printList());
// let resultLL1c = sumListsSol2(numLL1c.head, numLL2c.head);
// console.log(resultLL1c.printList());

// console.log("Test 4c");
// let num7c = new LL.ListNode(9);
// let numLL7c = new LL.LinkedList(num7c);
// numLL7c.add(9);
// console.log(numLL7c.printList());
// let num8c = new LL.ListNode(1);
// let numLL8c = new LL.LinkedList(num8c);
// console.log(numLL8c.printList());
// let resultLL4c = sumListsSol2(numLL7c.head, numLL8c.head);
// console.log(resultLL4c.printList());


// Sol4 For Follow up
const invertLL = (head) => {
	let curr = head;
	let prev = null;
	let temp;


	while (curr) {
		temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
	}
	return prev;
}
console.log("Test invert")
let a = new LL.ListNode(1);
let b = new LL.ListNode(2);
let c = new LL.ListNode(3);
a.next = b;
b.next = c;
// console.log(invertLL(a));

console.log("Test1d")
let num1d = new LL.ListNode(1);
let numLL1d = new LL.LinkedList(num1d);
numLL1d.add(2);
numLL1d.add(3);
console.log(numLL1d.printList());
let num2d = new LL.ListNode(4);
let numLL2d = new LL.LinkedList(num2d);
numLL2d.add(5);
numLL2d.add(6);
console.log(numLL2d.printList());
let resultInverted1d = sumListsSol1(invertLL(numLL1d.head), invertLL(numLL2d.head));
console.log(resultInverted1d);
let resultLL1d = new LL.LinkedList(invertLL(resultInverted1d));
console.log(resultLL1d.printList());

console.log("Test 4d");
let num7d = new LL.ListNode(8);
let numLL7d = new LL.LinkedList(num7d);
numLL7d.add(0);
console.log(numLL7d.printList());
let num8d = new LL.ListNode(1);
let numLL8d = new LL.LinkedList(num8d);
numLL8d.add(2);
console.log(numLL8d.printList());
let resultInverted4d = sumListsSol1(invertLL(numLL7d.head), invertLL(numLL8d.head));
console.log(resultInverted4d);
let resultLL4d = new LL.LinkedList(invertLL(resultInverted4d));
console.log(resultLL4d.printList());

module.exports = {
	sumListsSol1,
	sumListsSol2,
}
