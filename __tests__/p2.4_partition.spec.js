import {ListNode} from "./../chapter_2/linkedList.js";
import {LinkedList} from "./../chapter_2/linkedList.js";
import {partitionSol1} from "./../chapter_2/p2.4_partition.js";

describe("Test for partition sol 1 ", ()=> {
	test("Linked list is partitioned with all nodes less than pivot before all nodes greater than pivot", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([3,5,8,5,10,2,1]);
			let ll2 = new LinkedList();
			ll2.head = partitionSol1(ll1.head, 5);
			let ll2Array = ll2.printList();
			expect(ll2Array).toEqual("3->2->1->5->8->5->10");
	});

	test("Linked list is partitioned with all nodes less than pivot before all nodes greater than pivot even when pivot value not in the linked list", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([6,3,1]);
			let ll2 = new LinkedList();
			ll2.head = partitionSol1(ll1.head, 2);
			let ll2Array = ll2.printList();
			expect(ll2Array).toEqual("1->6->3");
	});

	test("Linked list stays as is when pivot is smaller than any value in the linked list", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([2,4,3]);
			let ll2 = new LinkedList();
			ll2.head = partitionSol1(ll1.head, 1);
			let ll2Array = ll2.printList();
			expect(ll2Array).toEqual("2->4->3");
	});

	test("Linked list stays as is when pivot is greater than any value in the linked list", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([1,3,2]);
			let ll2 = new LinkedList();
			ll2.head = partitionSol1(ll1.head, 1);
			let ll2Array = ll2.printList();
			expect(ll2Array).toEqual("1->3->2");
	});
})

