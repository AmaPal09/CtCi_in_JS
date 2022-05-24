import {removeDupsSol1} from "./../chapter_2/p2.1_remove_dups.js";
import {removeDupsSol2} from "./../chapter_2/p2.1_remove_dups.js";
import {ListNode} from "./../chapter_2/linkedList.js";
import {LinkedList} from "./../chapter_2/linkedList.js";


describe("Validate sol1 remove dups", () => {

	test("Validate Sol1 returns intersecting node when found", () => {
			let a1 = new ListNode(1);
			let b1 = new ListNode(2);
			let c1 = new ListNode(3);
			let d1 = new ListNode(2);
			let e1 = new ListNode(4);
			let f1 = new ListNode(3);
			console.log(a1);

			let g1 = new ListNode(1);
			let h1 = new ListNode(2);
			let i1 = new ListNode(3);
			let j1 = new ListNode(4);
			console.log(g1);

			removeDupsSol1(a1);
			expect(a1).toEqual(g1);
	});

	test("Validate Sol1 does not delete anything when no duplicates are found", () => {
			let k1 = new ListNode(1);
			let l1 = new ListNode(2);
			let m1 = new ListNode(3);
			let n1 = new ListNode(4);
			console.log(k1);

			let o1 = new ListNode(1);
			let p1 = new ListNode(2);
			let q1 = new ListNode(3);
			let r1 = new ListNode(4);
			console.log(o1)

			removeDupsSol1(k1);
			expect(k1).toEqual(o1);
	});


	test("Validate Sol1 for new class", () => {
			let a1 = new ListNode(1);
			let lla = new LinkedList(a1);
			lla.addMultiple([2,3,2,4,3]);
			console.log(lla.printList());

			let g1 = new ListNode(1);
			let llg = new LinkedList(g1);
			llg.addMultiple(2,3,4);
			console.log(llg.printList());

			removeDupsSol1(lla.head);
			expect(lla.head).toEqual(llg.head);
	});

	// test("Validate Sol1 does not delete anything when no duplicates are found", () => {
	// 		let k1 = new ListNode(1);
	// 		let l1 = new ListNode(2);
	// 		let m1 = new ListNode(3);
	// 		let n1 = new ListNode(4);
	// 		console.log(k1);

	// 		let o1 = new ListNode(1);
	// 		let p1 = new ListNode(2);
	// 		let q1 = new ListNode(3);
	// 		let r1 = new ListNode(4);
	// 		console.log(o1)

	// 		removeDupsSol1(k1);
	// 		expect(k1).toEqual(o1);
	// });
});


describe("Validate sol2 remove dups", () => {
	test("Validate Sol2 removes duplicates from linked list", () => {
			let a1 = new ListNode(1);
			let b1 = new ListNode(2);
			let c1 = new ListNode(3);
			let d1 = new ListNode(2);
			let e1 = new ListNode(4);
			let f1 = new ListNode(3);
			console.log(a1);

			let g1 = new ListNode(1);
			let h1 = new ListNode(2);
			let i1 = new ListNode(3);
			let j1 = new ListNode(4);
			console.log(g1);

			removeDupsSol2(a1);
			expect(a1).toEqual(g1);
	});

	test("Validate Sol2 does not delete anything when no duplicates are found", () => {
			let k1 = new ListNode(1);
			let l1 = new ListNode(2);
			let m1 = new ListNode(3);
			let n1 = new ListNode(4);
			console.log(k1);

			let o1 = new ListNode(1);
			let p1 = new ListNode(2);
			let q1 = new ListNode(3);
			let r1 = new ListNode(4);
			console.log(o1)

			removeDupsSol2(k1);
			expect(k1).toEqual(o1);
	});


	test("Validate Sol1 for new class", () => {
			let a1 = new ListNode(1);
			let lla = new LinkedList(a1);
			lla.addMultiple([2,3,2,4,3]);
			console.log(lla.printList());

			let g1 = new ListNode(1);
			let llg = new LinkedList(g1);
			llg.addMultiple(2,3,4);
			console.log(llg.printList());

			removeDupsSol2(lla.head);
			expect(lla.head).toEqual(llg.head);
	});

});