import {ListNode} from "./../chapter_2/p2.3_delete_middle_node.js";
import {LinkedList} from "./../chapter_2/p2.3_delete_middle_node.js";
import {delMiddleNodeSol1} from "./../chapter_2/p2.3_delete_middle_node.js";

describe("Test sol deleting middle node", () => {
	test("If node requested for deletion is last node, then it is not deleted", ()=> {
		let n1 = new ListNode(1);
		let ll1 = new LinkedList(n1);
		ll1.add(2);
		ll1.add(3);
		delMiddleNodeSol1(ll1.head.next.next);
		let n2 = new ListNode(1);
		let ll2 = new LinkedList(n2);
		ll2.add(2);
		ll2.add(3);
		expect(ll1).toEqual(ll2)
	});

	test("When middle node requested for deletion, it is deleted", ()=> {
		let n1 = new ListNode(1);
		let ll1 = new LinkedList(n1);
		ll1.add(2);
		ll1.add(3);
		ll1.add(4);
		ll1.add(5);

		let n2 = new ListNode(1)
		let ll2 = new LinkedList(n2);
		ll2.add(2);
		ll2.add(4);
		ll2.add(5);

		delMiddleNodeSol1(ll1.head.next.next);

		expect(ll1).toEqual(ll2);
	})
})