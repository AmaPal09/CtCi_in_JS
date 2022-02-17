import {palindromeSol1} from "./../chapter_2/p2.6_palindrome.js";
import {ListNode} from "./../chapter_2/p2.6_palindrome.js";
import {LinkedList} from "./../chapter_2/p2.6_palindrome.js";

describe("Validate sol1 verifies if the linked list is a palindrome", () => {
	test("Validate Sol1 returns true if the linked list is a palindrome", () => {
		let head1 = new ListNode("a");
		let ll1 = new LinkedList(head1);
			ll1.add(1);
			ll1.add(0);
			ll1.add(1);
			ll1.add("a");
			expect(palindromeSol1(ll1.head)).toBeTruthy();
		});

	test("Validate Sol1 returns false if the linked list is a palindrome", () => {
		let head2 = new ListNode("a");
		let ll2 = new LinkedList(head2);
			ll2.add("b");
			ll2.add("c");
			ll2.add("d");
		expect(palindromeSol1(ll2.head)).toBeFalsy();
	});
});