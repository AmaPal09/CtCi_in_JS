import {intersectionSol1} from "./../chapter_2/p2.7_intersection.js";
import {ListNode} from "./../chapter_2/p2.7_intersection.js";
import {LinkedList} from "./../chapter_2/p2.7_intersection.js";
import {printLL} from "./../chapter_2/p2.7_intersection.js";


describe("Validate sol1 returns intersecting node", () => {
	test("Validate Sol1 returns intersecting node when found", () => {
			let n1 = new ListNode(3);
			let n2 = new ListNode(1);
			let n3 = new ListNode(5);
			let n4 = new ListNode(9);
			let n5 = new ListNode(7);
			let n6 = new ListNode(2);
			let n7 = new ListNode(1);
			n1.next = n2;
			n2.next = n3;
			n3.next = n4;
			n4.next = n5;
			n5.next = n6;
			n6.next = n7;
			console.log(printLL(n1));
			let m1 = new ListNode(4);
			let m2 = new ListNode(6);
			m1.next = m2;
			m2.next = n5;
			console.log(printLL(m1));
			expect(intersectionSol1(n1, m1)).toBe(n5);
	});

	test("Validate Sol1 returns null when no intersecting node found", () => {
			let q1 = new ListNode(4);
			let q2 = new ListNode(6);
			let q3 = new ListNode(7);
			let q4 = new ListNode(2);
			let q5 = new ListNode(1);
			q1.next = q2;
			q2.next = q3;
			q3.next = q4;
			q4.next = q5;
			console.log(printLL(q1));
			let p1 = new ListNode(3);
			let p2 = new ListNode(1);
			let p3 = new ListNode(5);
			let p4 = new ListNode(9);
			let p5 = new ListNode(7);
			let p6 = new ListNode(2);
			let p7 = new ListNode(1);
			p1.next = p2;
			p2.next = p3;
			p3.next = p4;
			p4.next = p5;
			p5.next = p6;
			p6.next = p7;
			console.log(printLL(p1));
			expect(intersectionSol1(p1, q1)).toBe(null);
	});

	test("Validate Sol1 returns null when no intersecting node found", () => {
			let q1 = new ListNode(4);
			let q2 = new ListNode(6);
			let q3 = new ListNode(7);
			let q4 = new ListNode(2);
			let q5 = new ListNode(1);
			q1.next = q2;
			q2.next = q3;
			q3.next = q4;
			q4.next = q5;
			console.log(printLL(q1));
			let p1 = new ListNode(null);
			console.log(printLL(p1));
			expect(intersectionSol1(p1, q1)).toBe(null);
	});
});
