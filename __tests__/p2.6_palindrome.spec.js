import {palindromeSol1} from "./../chapter_2/p2.6_palindrome.js";
import {palindromeSol2} from "./../chapter_2/p2.6_palindrome.js";
import {ListNode} from "./../chapter_2/p2.6_palindrome.js";
import {LinkedList} from "./../chapter_2/p2.6_palindrome.js";
import {printLL} from "./../chapter_2/p2.6_palindrome.js";


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

	test("Validate Sol1 returns false if the linked list head is null ", () => {
		let ll2 = new LinkedList();
		expect(palindromeSol1(ll2.head)).toBeFalsy();
	});

	test("Validate Sol1 returns false if the linked list head is null ", () => {
		let ll2 = new LinkedList();
		ll2.head = undefined;
		expect(palindromeSol1(ll2.head)).toBeFalsy();
	});
});


describe("Validate sol2 verifies if the linked list is a palindrome", () => {
	test("Validate Sol2 returns true if the linked list is a palindrome", () => {
		let head1 = new ListNode("a");
		let ll1 = new LinkedList(head1);
			ll1.add(1);
			ll1.add(0);
			ll1.add(1);
			ll1.add("a");
			expect(palindromeSol2(ll1.head)).toBeTruthy();
		});

	test("Validate Sol2 returns false if the linked list is a palindrome", () => {
		let head2 = new ListNode("a");
		let ll2 = new LinkedList(head2);
			ll2.add("b");
			ll2.add("c");
			ll2.add("d");
		expect(palindromeSol2(ll2.head)).toBeFalsy();
	});

	test("Validate Sol1 returns false if the linked list head is null ", () => {
		let ll2 = new LinkedList();
		expect(palindromeSol2(ll2.head)).toBeFalsy();
	});

	test("Validate Sol1 returns false if the linked list head is null ", () => {
		let ll2 = new LinkedList();
		ll2.head = undefined;
		expect(palindromeSol2(ll2.head)).toBeFalsy();
	});
});


describe("Validate printLL prints the linked list ", () => {
	test("Validate printLL", () => {
		let head1 = new ListNode("a");
		let ll1 = new LinkedList(head1);
			ll1.add(1);
			ll1.add(0);
			ll1.add(1);
			ll1.add("a");
			expect(printLL(ll1.head)).toMatch("a->1->0->1->a");
	});

	test("Validate printLL", () => {
		let ll1 = new LinkedList();
		expect(printLL(ll1.head)).toMatch("");
	});

	test("Validate printLL", () => {
		let head1 = new ListNode("a");
		let ll1 = new LinkedList(head1);
		expect(printLL(ll1.head)).toMatch("a");
	});
});


describe("Validate sizeOfLL prints the linked list ", () => {
	test("Validate sizeOfLL", () => {
		let head1 = new ListNode("a");
		let ll1 = new LinkedList(head1);
			ll1.add(1);
			ll1.add(0);
			ll1.add(1);
			ll1.add("a");
		let size = ll1.sizeOfLL();
			expect(size).toBe(5);
	});

	// test("Validate sizeOfLL", () => {
	// 	let n = new ListNode(null)
	// 	let ll1 = new LinkedList(n);
	// 	let size = ll1.sizeOfLL();
	// 	expect(size).toBe(0);
	// });

	test("Validate sizeOfLL", () => {
		let head1 = new ListNode("a");
		let ll1 = new LinkedList(head1);
		let size = ll1.sizeOfLL();
		expect(size).toBe(1);
	});
});