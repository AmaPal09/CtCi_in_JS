//Basic linked List

class ListNode {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	//Return size of the linkedList
	size_of_LL() {
		let count = 0;
		let currNode = this.head;
		while(currNode) {
			count ++ ;
			currNode = currNode.next;
		}
		this.sz = count;
		return count;
	}

	//clear this linkedList
	clear() {
		this.head = null;
	}

	// get the last node of the linkedList
	getLast() {
		let currNode = this.head;
		if (currNode) {
			while(currNode.next) {
				currNode = currNode.next
			}
		}
		return currNode;
	}

	getFirst() {
		return this.head;
	}

	//Add element at the end of the list
	add(elem) {
		let newNode = new ListNode(elem);

		//if list is empty make the new node the head
		if (this.head == null){
			this.head = newNode;
		}
		else {
			let currNode = this.head;

			while(currNode.next) {
				currNode = currNode.next;
			}
			currNode.next = newNode
		}
		// this.size ++;
	}

	//insert element at the position index of the list
	insertAt(elem, index) {
		if (index < 0 || index > this.size_of_LL()) {
			return console.log("Please enter valid index");
		}

		let newNode = new ListNode(elem);

		//add element to the first index
		if (index == 0) {
			newNode.next = this.head;
			this.head = newNode;
		}
		else {
			let currNode = this.head;
			let prevNode;
			let ctr = 0;

			while(ctr < index) {
				prevNode = currNode;
				currNode = currNode.next;
				ctr++;
			}

			//add the element here.
			prevNode.next = newNode;
			newNode.next = currNode;
		}
		// this.size++;
	}

	insertAfter(prevNode, elem) {
		if (prevNode == null) {
			return console.log("Please enter a valid node");
		}

		let newNode = new ListNode(elem);

		newNode.next = prevNode.next;
		prevNode.next = newNode;
	}

	//Remove node from the index provided
	removeFromIndex(index) {
		if (index < 0 || index > this.size_of_LL()) {
			return console.log("Please enter a valid index");
		}

		let currNode = this.head
		let prevNode = currNode;

		if (index == 0) {
			this.head = this.head.next;
		}
		else {
			let ctr = 0;
			while (ctr < index) {
				prevNode = currNode;
				currNode = currNode.next;
				ctr++;
			}
			prevNode.next = currNode.next;
		}
		// this.size -- ;

		return currNode.data;
	}

	//Remove node with data matching the element
	removeElement(elem) {
		let currNode = this.head;
		let prevNode = null;

		while (currNode != null) {
			if (currNode.data === elem) {
				//Element matches the head, so move head to the next node
				if (prevNode == null) {
					this.head = currNode.next;
				}
				else {
					prevNode.next = currNode.next;
				}
				// this.size --
				return currNode.data;
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
		//No node matching element founc
		return -1;
	}

	//Get index of the given lement
	indexOf(elem) {
		let ctr = 0;
		let currNode = this.head;

		while (currNode != null) {
			//element if found
			if (currNode.data === elem) {
				return ctr;
			}
			ctr++;
			currNode = currNode.next;
		}
		//element not found in the linked list
		return -1;
	}

	//Print the linked list
	printList() {
		let currNode = this.head;
		let printArr = []
		while(currNode != null) {
			printArr.push(currNode.data);
			currNode = currNode.next;
		}
		return printArr.join("->");
	}
}



// let node1 = new ListNode(1);
// let ll1 = new LinkedList(node1);

// ll1.add(2);
// console.log(ll1.printList());
// ll1.add(4);
// console.log(ll1.printList());
// ll1.add(6);
// console.log(ll1.printList());
// ll1.insertAt(0,0);
// console.log(ll1.printList());
// ll1.insertAt(3,3);
// console.log(ll1.printList());
// ll1.insertAfter(ll1.head.next.next.next.next,5);
// console.log(ll1.printList());
// ll1.removeFromIndex(5);
// console.log(ll1.printList());
// ll1.removeElement(1);
// console.log(ll1.printList());
// console.log(ll1.indexOf(4));
// console.log(ll1.getFirst());
// console.log(ll1.getLast());
// console.log(ll1.size_of_LL());
// ll1.clear();
// console.log(ll1.printList());


module.exports = { ListNode, LinkedList};