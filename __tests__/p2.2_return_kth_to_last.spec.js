import {ListNode} from "./../chapter_2/linkedList.js";
import {LinkedList} from "./../chapter_2/linkedList.js";
import {kthToLastSol1} from "./../chapter_2/p2.2_return_kth_to_last.js";
// import {kthToLastSol2} from "./../chapter_2/p2.2_return_kth_to_last.js";

describe("Test for kth to last sol1", ()=> {
	test("Error returned when k is greater than length of the linked list", () =>{
			let n1 = new ListNode(1);
			let ll1 = new LinkedList(n1);

			expect(kthToLastSol1(ll1.head,4)).toBe("k greater than length of linkedList");
	});

	test("kth node returned when k is smaller than the linked list", () =>{
			let n1 = new ListNode(1);
			let ll1 = new LinkedList(n1);
			ll1.addMultiple([2,3,4,5]);

			let n2 = new ListNode(4);
			let ll2 = new LinkedList(n2);
			ll2.add(5)
			expect(kthToLastSol1(ll1.head,2)).toEqual(ll2.head);
	});
})