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
			let n2 = new ListNode(1);
			let ll2 = new LinkedList(n2);
			ll2.add(2);
			ll2.add(33);
			ll2.add(99);
			ll2.add(66);
			ll2.add(55);
			ll2.add(77);

			expect(removeDupsSol1(n1)).toEqual(ll2.head);
			let n3 = new ListNode(1);
			let ll3 = new LinkedList(n3);
			ll3.add(99);
			ll3.add(66);
			ll3.add(55);
			ll3.add(77);
			let n4 = new ListNode(1);
			let ll4 = new LinkedList(n4);
			ll4.add(99);
			ll4.add(66);
			ll4.add(55);
			ll4.add(77);
			expect(removeDupsSol1(ll3.head)).toEqual(ll4.head);
	});
});