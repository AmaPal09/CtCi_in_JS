import {Stack} from "./../chapter_3/p3.2_Stack_min.js";
import {minStack} from "./../chapter_3/p3.2_Stack_min.js";

describe("Test minStack returns min val in the stack", ()=> {
	console.log("Test minStack");

	test("Test minStack has minimun value as null when stack is empty", ()=> {
		let mini1 = new minStack();
		expect(mini1._min).toEqual(null);
	});

	test("minStack will always return minimum value in the stack even if other values are added on the top", ()=> {
		let mini1 = new minStack();
		mini1.push(1);
		expect(mini1._min).toEqual(1);
		mini1.push(3);
		expect(mini1._min).toEqual(1);
		mini1.push(5);
		expect(mini1._min).toEqual(1);
	});

	test("minStack will always return minimum value when new minimum values are added to the stack ", ()=> {
		let mini1 = new minStack();
		mini1.push(8);
		expect(mini1._min).toEqual(8);
		mini1.push(6);
		expect(mini1._min).toEqual(6);
		mini1.push(3);
		expect(mini1._min).toEqual(3);
		mini1.push(5);
		expect(mini1._min).toEqual(3);
	});

	test("minStack will always return minimum value even when values are popped from the stack ", ()=> {
		let mini1 = new minStack();
		mini1.push(8);
		expect(mini1._min).toEqual(8);
		mini1.push(6);
		expect(mini1._min).toEqual(6);
		mini1.push(3);
		expect(mini1._min).toEqual(3);
		mini1.push(5);
		expect(mini1._min).toEqual(3);
		mini1.pop();
		expect(mini1._min).toEqual(3);
		mini1.pop();
		expect(mini1._min).toEqual(6);
		mini1.pop();
		expect(mini1._min).toEqual(8);
	});

});