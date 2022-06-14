import {Stack} from "./../chapter_3/p3.3_stack_of_plates.js";
import {setOfStacks} from "./../chapter_3/p3.3_stack_of_plates.js";

describe("Test setOfStacks", () => {
	let bunchOfPlates = new setOfStacks(4);

	test("Test push function creates new stacks of length equal to capacity", () => {
		for(let i = 0; i < 13; i++){
			bunchOfPlates.push(i)
		}
		// console.log(bunchOfPlates._stackSet);
		expect(bunchOfPlates._stackSet.length).toEqual(4)

		for(let i =0; i< bunchOfPlates._stackSet.length;i++) {
			expect(bunchOfPlates._stackSet[i].size()).toBeLessThanOrEqual(4);
		}

		for(let i =0; i< bunchOfPlates._stackSet.length;i++) {
			expect(bunchOfPlates._stackSet[i].size()).not.toBeGreaterThan(4);
		}
	});
});



describe("Validate getLastStack", () => {
	let bunchOfPlates = new setOfStacks(4);
	for(let i = 0; i < 13; i++){
		bunchOfPlates.push(i)
	}
	test("Test that get last stack returns the last stack in the set of stack", () => {
		expect(bunchOfPlates.getLastStack()._stack).toEqual([12]);
		let test_stack = bunchOfPlates.pop();
		let lastStack = bunchOfPlates.getLastStack();
		expect(bunchOfPlates.getLastStack()._stack).toEqual([8,9,10,11]);
	});
});


describe("Validate isEmpty", () => {
	let bunchOfPlates = new setOfStacks(4);
	for(let i = 0; i < 12; i++){
		bunchOfPlates.push(i)
	}
	test("Test that isEmpty returns falls if set of stacks is not empty", () => {
		bunchOfPlates.pop();
		expect(bunchOfPlates.isEmpty()).toBeFalsy();
	});

	test("Test that isEmpty returns true if set of stack is empty", () => {
		for(let i = 0; i < 11; i++){
			bunchOfPlates.pop();
		}
		expect(bunchOfPlates.isEmpty()).toBeTruthy();
	});
});



describe("Validate peek", () => {
	let bunchOfPlates = new setOfStacks(4);
	test("Test that peek returns the last value in the stack.", () => {
		bunchOfPlates.push(1);
		expect(bunchOfPlates.peek()).toEqual(1);
	});

	test("Test that peek returns non when the stack is empty", ()=> {
		bunchOfPlates.pop();
		expect(bunchOfPlates.peek()).toEqual(null);
	});
});