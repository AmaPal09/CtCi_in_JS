import {loopDetectionSol1} from "./../chapter_2/p2.8_loop_detection.js";
import {printLL} from "./../chapter_2/p2.8_loop_detection.js";
import {ListNode} from "./../chapter_2/p2.8_loop_detection.js";


describe("Validate sol1 returns starting node of the loop in the linked", () => {
	test("Validate Sol1 returns starting node when loop is found", () => {
			let n1 = new ListNode("A");
			let n2 = new ListNode("B");
			let n3 = new ListNode("C");
			let n4 = new ListNode("D");
			let n5 = new ListNode("E");
			n1.next = n2;
			n2.next = n3;
			n3.next = n4;
			n4.next = n5;
			n5.next = n3;
			console.log(printLL(n1));
			expect(loopDetectionSol1(n1)).toBe(n3);
	});

	test("Validate Sol1 returns starting node when loop is found", () => {
			let m1 = new ListNode("a");
			let m2 = new ListNode("b");
			let m3 = new ListNode("c");
			let m4 = new ListNode("d");
			let m5 = new ListNode("e");
			m1.next = m2;
			m2.next = m3;
			m3.next = m4;
			m4.next = m5;
			console.log(printLL(m1));
			expect(loopDetectionSol1(m1)).toBe(null);
	});
});
