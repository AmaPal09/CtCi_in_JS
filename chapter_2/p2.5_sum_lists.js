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
								value >= 10 ? Math.floor(value/10) : 0);
	return result;
}


// Sol4 For Follow up
const sumListsSol4 = (head1, head2) => {
	let invertedLL1 = new LL.LinkedList();
	let invertedLL2 = new LL.LinkedList();

	invertedLL1.head = invertLL(head1);
	invertedLL2.head = invertLL(head2);

	let invertedResultLL = new LL.LinkedList();
	invertedResultLL.head = sumListsSol1(invertedLL1.head, invertedLL2.head);

	let resultLL = new LL.LinkedList();
	resultLL.head = invertLL(invertedResultLL.head);
	return resultLL.head;

}


//Invert linked list
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


module.exports = {
	sumListsSol1,
	sumListsSol2,
	sumListsSol3,
	sumListsSol4,
}
