import {ListNode} from "./../chapter_2/linkedList.js";
import {LinkedList} from "./../chapter_2/linkedList.js";
import {sumListsSol1} from "./../chapter_2/p2.5_sum_lists.js";
import {sumListsSol2} from "./../chapter_2/p2.5_sum_lists.js";
import {sumListsSol3} from "./../chapter_2/p2.5_sum_lists.js";
import {sumListsSol4} from "./../chapter_2/p2.5_sum_lists.js";

describe("Test for sum of linked list sol 1 ", ()=> {
	console.log("Test sol1");
	test("Sol1 returns head of linked list containing sum of the 2 inputs", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([1,2,3]);
			let ll2 = new LinkedList();
			ll2.addMultiple([3,2,1]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol1(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("4->4->4");
	});

	test("When one of the 2 inputs is null, Sol1 returns head of linked list containing sum which is equal to the non null linked list", () =>{
			let ll1 = new LinkedList();
			let ll2 = new LinkedList();
			ll2.addMultiple([3,2,1]);
			let ll2Array = ll2.printList();
			let ll3 = new LinkedList();
			ll3.head = sumListsSol1(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll2Array);
	});

	test("When one of the 2 inputs contains zero, Sol1 returns head of linked list containing sum which is equal to the non zero linked list", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([1,2,3]);
			let ll1Array = ll1.printList();
			let ll2 = new LinkedList();
			ll2.addMultiple([0]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol1(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll1Array);
	});

	test("Sol1 handles carry forwards exceding lenghts of the 2 numbers", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9]);
			// console.log(ll1.printList());
			let ll2 = new LinkedList();
			ll2.addMultiple([9,9]);
			// console.log(ll2.printList());
			let ll3 = new LinkedList();
			ll3.head = sumListsSol1(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("8->9->1");
	});

	test("When the 2 inputs are unequal in length, Sol1 handles handles carry forwards and returns head of linked list with the sum", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9,9]);
			let ll2 = new LinkedList();
			ll2.addMultiple([1]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol1(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("0->0->0->1");
	});
})


// ===================================================================
// ===================================================================
// ===================================================================
describe("Test for sum of linked list sol 2 ", ()=> {
	console.log("Test sol2");
	test("Sol2 returns head of linked list containing sum of the 2 inputs", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([1,2,3]);
			let ll2 = new LinkedList();
			ll2.addMultiple([3,2,1]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol2(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("4->4->4");
	});

	test("When one of the 2 inputs is null, Sol2 returns head of linked list containing sum which is equal to the non null linked list", () =>{
			let ll1 = new LinkedList();
			let ll2 = new LinkedList();
			ll2.addMultiple([3,2,1]);
			let ll2Array = ll2.printList();
			let ll3 = new LinkedList();
			ll3.head = sumListsSol2(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll2Array);
	});

	test("When one of the 2 inputs contains zero, Sol2 returns head of linked list containing sum which is equal to the non zero linked list", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([1,2,3]);
			let ll1Array = ll1.printList();
			let ll2 = new LinkedList();
			ll2.addMultiple([0]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol2(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll1Array);
	});

	test("Sol2 handles carry forwards exceding lenghts of the 2 numbers", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9]);
			// console.log(ll1.printList());
			let ll2 = new LinkedList();
			ll2.addMultiple([9,9]);
			// console.log(ll2.printList());
			let ll3 = new LinkedList();
			ll3.head = sumListsSol2(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("8->9->1");
	});

	test("When the 2 inputs are unequal in length, Sol2 handles handles carry forwards and returns head of linked list with the sum", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9,9]);
			let ll2 = new LinkedList();
			ll2.addMultiple([1]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol2(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("0->0->0->1");
	});
})


// ===================================================================
// ===================================================================
// ===================================================================
describe("Test for sum of linked list sol 3 ", ()=> {
	console.log("Test sol3");
	test("Sol3 returns head of linked list containing sum of the 2 inputs", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([1,2,3]);
			let ll2 = new LinkedList();
			ll2.addMultiple([3,2,1]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol3(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("4->4->4");
	});

	test("When one of the 2 inputs is null, Sol3 returns head of linked list containing sum which is equal to the non null linked list", () =>{
			let ll1 = new LinkedList();
			let ll2 = new LinkedList();
			ll2.addMultiple([3,2,1]);
			let ll2Array = ll2.printList();
			let ll3 = new LinkedList();
			ll3.head = sumListsSol3(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll2Array);
	});

	test("When one of the 2 inputs contains zero, Sol3 returns head of linked list containing sum which is equal to the non zero linked list", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([1,2,3]);
			let ll1Array = ll1.printList();
			let ll2 = new LinkedList();
			ll2.addMultiple([0]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol3(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll1Array);
	});

	test("Sol3 handles carry forwards exceding lenghts of the 2 numbers", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9]);
			// console.log(ll1.printList());
			let ll2 = new LinkedList();
			ll2.addMultiple([9,9]);
			// console.log(ll2.printList());
			let ll3 = new LinkedList();
			ll3.head = sumListsSol3(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("8->9->1");
	});

	test("When the 2 inputs are unequal in length, Sol3 handles handles carry forwards and returns head of linked list with the sum", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9,9]);
			let ll2 = new LinkedList();
			ll2.addMultiple([1]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol3(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("0->0->0->1");
	});
})


// ===================================================================
// ===================================================================
// ===================================================================
describe("Test for sum of linked list sol 4 ", ()=> {
	console.log("Test sol4");
	test("Sol4 returns head of linked list containing sum of the 2 inputs", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([3,2,1]);
			let ll2 = new LinkedList();
			ll2.addMultiple([1,2,3]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol4(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("4->4->4");
	});

	test("When one of the 2 inputs is null, Sol4 returns head of linked list containing sum which is equal to the non null linked list", () =>{
			let ll1 = new LinkedList();
			let ll2 = new LinkedList();
			ll2.addMultiple([1,2,3]);
			let ll2Array = ll2.printList();
			let ll3 = new LinkedList();
			ll3.head = sumListsSol4(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll2Array);
	});

	test("When one of the 2 inputs contains zero, Sol4 returns head of linked list containing sum which is equal to the non zero linked list", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([3,2,1]);
			let ll1Array = ll1.printList();
			let ll2 = new LinkedList();
			ll2.addMultiple([0]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol4(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual(ll1Array);
	});

	test("Sol4 handles carry forwards exceding lenghts of the 2 numbers", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9]);
			// console.log(ll1.printList());
			let ll2 = new LinkedList();
			ll2.addMultiple([9,9]);
			// console.log(ll2.printList());
			let ll3 = new LinkedList();
			ll3.head = sumListsSol4(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("1->9->8");
	});

	test("When the 2 inputs are unequal in length, Sol4 handles handles carry forwards and returns head of linked list with the sum", () =>{
			let ll1 = new LinkedList();
			ll1.addMultiple([9,9,9]);
			let ll2 = new LinkedList();
			ll2.addMultiple([1]);
			let ll3 = new LinkedList();
			ll3.head = sumListsSol4(ll1.head, ll2.head);
			let ll3Array = ll3.printList();
			expect(ll3Array).toEqual("1->0->0->0");
	});
})