import {ThreeInOne} from "./../chapter_3/p3.1_three_in_one.js";

describe("Validate ThreeInOne holds three stacks with 3 sets of commands in one array", () => {
	let tio = new ThreeInOne();


	test("Validate values added in the top stack", () => {
			tio.pushTop('1a');
			console.log(tio.container);
			expect(tio.container).toEqual(['1a'])
			tio.pushTop('1b');
			expect(tio.container).toEqual(['1b', '1a']);
			tio.pushTop('1c');
			expect(tio.container).toEqual(['1c', '1b', '1a']);
	});

	// expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a', '3c', '3b', '3a',])

	test("Validate values added in the middle stack", () => {
			tio.pushMid('2a');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2a'])
			tio.pushMid('2b');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2b', '2a']);
			tio.pushMid('2c');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a']);
			console.log(tio.container);
	});


	test("Validate values added in the middle stack", () => {
			tio.pushBottom('3a');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a', '3a',])
			tio.pushBottom('3b');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a', '3b', '3a']);
			tio.pushBottom('3c');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a','3c', '3b', '3a']);
			console.log(tio.container);
	});
});



describe("Validate middle stack in ThreeInOne functions even when other 2 stacks are not filled", () => {
	let tio = new ThreeInOne();
	test("Validate values added in the middle stack", () => {
			tio.pushMid('2a');
			expect(tio.container).toEqual(['2a'])
			tio.pushMid('2b');
			expect(tio.container).toEqual(['2b', '2a']);
			tio.pushMid('2c');
			expect(tio.container).toEqual(['2c', '2b', '2a']);
			console.log(tio.container);
			expect(tio.middleTop).toEqual(0);
			expect(tio.middleBottom).toEqual(3);
	});
});



describe("Validate bottom stack in ThreeInOne functions even when other 2 stacks are not filled", () => {
	let tio = new ThreeInOne();
	test("Validate values added in the middle stack", () => {
			tio.pushBottom('3a');
			expect(tio.container).toEqual([ '3a',])
			tio.pushBottom('3b');
			expect(tio.container).toEqual([ '3b', '3a']);
			tio.pushBottom('3c');
			expect(tio.container).toEqual(['3c', '3b', '3a']);
			console.log(tio.container);
			expect(tio.middleTop).toEqual(0);
			expect(tio.middleBottom).toEqual(0);
	});
});