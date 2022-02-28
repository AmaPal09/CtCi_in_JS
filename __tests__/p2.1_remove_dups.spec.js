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
			removeDupsSol1(n1);
			let n2 = new ListNode(1);
			let ll2 = new LinkedList(2);
			ll2.add(99);
			ll2.add(66);
			ll2.add(55);
			ll2.add(77);
			expect(removeDupsSol1(llEmpty.head)).toEqual(ll2);
	});
});