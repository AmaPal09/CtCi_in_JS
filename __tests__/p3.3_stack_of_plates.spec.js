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

	test("Test that get last stack returns the last stack in the set of stack", () => {
		console.log(bunchOfPlates.getLastStack()._stack);
		expect(bunchOfPlates.getLastStack()._stack).toEqual([12]);
		let test_stack = bunchOfPlates.pop();
		console.log(test_stack);
		let lastStack = bunchOfPlates.getLastStack();
		console.log(lastStack._stack);
		expect(bunchOfPlates.getLastStack()._stack).toEqual([8,9,10,11]);
	});
});