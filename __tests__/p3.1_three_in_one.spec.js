import {ThreeInOne} from "./../chapter_3/p3.1_three_in_one.js";

describe("Validate ThreeInOne holds three stacks with 3 sets of commands", () => {
	test("Validate adds new vals to corresponding methods", () => {
			let tio = new ThreeInOne();
			tio.pushTop('1a');
			tio.pushTop('1b');
			tio.pushTop('1c');
			tio.pushMid('2a');
			tio.pushMid('2b');
			tio.pushMid('2c');
			tio.pushBottom('3a');
			tio.pushBottom('3b');
			tio.pushBottom('3c');
			expect(tio.container).toBe(['1a', '1b', '1c', '2a', '2b', '2c', '3a', '3b', '3c',])
	});
});