import {removeDupsSol1} from "./../chapter_2/p2.1_remove_dups.js";
import {removeDupsSol2} from "./../chapter_2/p2.1_remove_dups.js";
import {ListNode} from "./../chapter_2/linkedList.js";
import {LinkedList} from "./../chapter_2/linkedList.js";


describe("Validate sol1 remove dups", () => {
	test("Validate Sol1 returns intersecting node when found", () => {
			let n1 = new ListNode(1);
			let ll1 = new LinkedList(n1);
			ll1.add(2);
			ll1.add(33);
			ll1.add(99);
			ll1.add(66);
			ll1.add(55);
			ll1.add(33);
			ll1.add(77);
			console.log(ll1.printList());
			removeDupsSol1(n1);
			let n2 = new ListNode(1);
			let ll2 = new LinkedList(2);
			ll2.add(99);
			ll2.add(66);
			ll2.add(55);
			ll2.add(77);
			expect(removeDupsSol1(llEmpty.head)).toEqual(ll2);
	});

	// test("Validate Sol1 returns null when no intersecting node found", () => {
	// 		let q1 = new ListNode(4);
	// 		let q2 = new ListNode(6);
	// 		let q3 = new ListNode(7);
	// 		let q4 = new ListNode(2);
	// 		let q5 = new ListNode(1);
	// 		q1.next = q2;
	// 		q2.next = q3;
	// 		q3.next = q4;
	// 		q4.next = q5;
	// 		console.log(printLL(q1));
	// 		let p1 = new ListNode(3);
	// 		let p2 = new ListNode(1);
	// 		let p3 = new ListNode(5);
	// 		let p4 = new ListNode(9);
	// 		let p5 = new ListNode(7);
	// 		let p6 = new ListNode(2);
	// 		let p7 = new ListNode(1);
	// 		p1.next = p2;
	// 		p2.next = p3;
	// 		p3.next = p4;
	// 		p4.next = p5;
	// 		p5.next = p6;
	// 		p6.next = p7;
	// 		console.log(printLL(p1));
	// 		expect(intersectionSol1(p1, q1)).toBe(null);
	// });

	// test("Validate Sol1 returns null when no intersecting node found", () => {
	// 		let q1 = new ListNode(4);
	// 		let q2 = new ListNode(6);
	// 		let q3 = new ListNode(7);
	// 		let q4 = new ListNode(2);
	// 		let q5 = new ListNode(1);
	// 		q1.next = q2;
	// 		q2.next = q3;
	// 		q3.next = q4;
	// 		q4.next = q5;
	// 		console.log(printLL(q1));
	// 		let p1 = new ListNode(null);
	// 		console.log(printLL(p1));
	// 		expect(intersectionSol1(p1, q1)).toBe(null);
	// });
});
