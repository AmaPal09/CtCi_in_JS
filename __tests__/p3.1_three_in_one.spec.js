import {ThreeInOne} from "./../chapter_3/p3.1_three_in_one.js";

describe("Validate ThreeInOne holds three stacks with 3 sets of commands in one array", () => {
	console.log("Test 3 in 1 stack");
	let tio = new ThreeInOne();


	test("Validate values added in the top stack", () => {
			console.log("Test top push for 3 in 1 stack");

			tio.pushTop('1a');
			expect(tio.container).toEqual(['1a'])
			tio.pushTop('1b');
			expect(tio.container).toEqual(['1b', '1a']);
			tio.pushTop('1c');
			expect(tio.container).toEqual(['1c', '1b', '1a']);

			expect(tio.middleTop).toEqual(3);
			expect(tio.middleBottom).toEqual(3);
	});

	// expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a', '3c', '3b', '3a',])

	test("Validate values added in the middle stack", () => {
			console.log("Test top push for 3 in 1 stack");

			tio.pushMid('2a');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2a'])
			tio.pushMid('2b');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2b', '2a']);
			tio.pushMid('2c');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a']);

			expect(tio.middleTop).toEqual(3);
			expect(tio.middleBottom).toEqual(6);
	});

	test("Validate values added in the bottom stack", () => {
			console.log("Test top push for 3 in 1 stack");

			tio.pushBottom('3a');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a', '3a',])
			tio.pushBottom('3b');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a', '3b', '3a']);
			tio.pushBottom('3c');
			expect(tio.container).toEqual(['1c', '1b', '1a', '2c', '2b', '2a','3c', '3b', '3a']);

			expect(tio.middleTop).toEqual(3);
			expect(tio.middleBottom).toEqual(6);
	});

	test("Validate values popped correctly the top stack", () => {
			console.log("test pop top");
			console.log(tio.container);

			let poppedVal = tio.popTop();
			console.log("Poped val is", poppedVal);
			console.log("Middle top is", tio.middleTop);
			console.log("Middle bottom is", tio.middleBottom);
			expect(poppedVal).toEqual('1c');
			expect(tio.middleTop).toEqual(2);
			expect(tio.middleBottom).toEqual(5);

			console.log(tio.container);

			poppedVal = tio.popTop();
			console.log("Poped val is", poppedVal);
			console.log("Middle top is", tio.middleTop);
			console.log("Middle bottom is", tio.middleBottom);
			expect(poppedVal).toEqual('1b');
			expect(tio.middleTop).toEqual(1);
			expect(tio.middleBottom).toEqual(4);
	});

	test("Validate isEmptyTop returns whether top stack is empty or not", () => {
			console.log("test isEmpty");
			console.log(tio.container);
			console.log(tio.isEmptyTop());

			expect(tio.isEmptyTop()).toBeFalsy();

			let poppedVal = tio.popTop();
			console.log("Poped val is", poppedVal);
			expect(tio.middleTop).toEqual(0);
			expect(tio.middleBottom).toEqual(3);
			expect(poppedVal).toEqual('1a');

			poppedVal = tio.popTop();
			expect(poppedVal).toEqual(undefined);
			console.log(tio.container);
	});



	test("Validate values popped correctly from the middle stack", () => {
			tio.pushTop('1a');
			tio.pushTop('1b');
			tio.pushTop('1c');
			console.log("test pop middle");
			console.log(tio.container);

			let poppedVal = tio.popMiddle();
			console.log("Poped val is", poppedVal);
			console.log("Middle top is", tio.middleTop);
			console.log("Middle bottom is", tio.middleBottom);
			expect(poppedVal).toEqual('2c');
			expect(tio.middleTop).toEqual(3);
			expect(tio.middleBottom).toEqual(5);

			console.log(tio.container);

			poppedVal = tio.popMiddle();
			console.log("Poped val is", poppedVal);
			console.log("Middle top is", tio.middleTop);
			console.log("Middle bottom is", tio.middleBottom);
			expect(poppedVal).toEqual('2b');
			expect(tio.middleTop).toEqual(3);
			expect(tio.middleBottom).toEqual(4);
	});

	test("Validate isEmptyMiddle returns whether middle stack is empty or not", () => {
			console.log("test isEmptyMiddle");
			console.log(tio.container);
			console.log(tio.isEmptyMiddle());

			expect(tio.isEmptyMiddle()).toBeFalsy();

			let poppedVal = tio.popMiddle();
			console.log("Poped val is", poppedVal);
			console.log("Middle top is", tio.middleTop);
			console.log("Middle bottom is", tio.middleBottom);
			expect(poppedVal).toEqual('2a');
			expect(tio.middleTop).toEqual(3);
			expect(tio.middleBottom).toEqual(3);

			expect(tio.isEmptyMiddle()).toBeTruthy();

			poppedVal = tio.popMiddle();
			expect(poppedVal).toEqual(undefined);
			console.log(tio.container);
	});

	// tio.pushMid('2a');
	// tio.pushMid('2b');
	// tio.pushMid('2c');
});


// describe("Validate top stack in ThreeInOne functions even when other 2 stacks are not filled", () => {
// 	let tio = new ThreeInOne();
// 	test("Validate values added in the middle stack", () => {
// 			tio.pushTop('1a');
// 			expect(tio.container).toEqual(['1a'])
// 			tio.pushTop('1b');
// 			expect(tio.container).toEqual(['1b', '1a']);
// 			tio.pushTop('1c');
// 			expect(tio.container).toEqual(['1c', '1b', '1a']);
// 			console.log(tio.container);
// 			expect(tio.middleTop).toEqual(3);
// 			expect(tio.middleBottom).toEqual(3);
// 	});
// });


// describe("Validate middle stack in ThreeInOne functions even when other 2 stacks are not filled", () => {
// 	let tio = new ThreeInOne();
// 	test("Validate values added in the middle stack", () => {
// 			tio.pushMid('2a');
// 			expect(tio.container).toEqual(['2a'])
// 			tio.pushMid('2b');
// 			expect(tio.container).toEqual(['2b', '2a']);
// 			tio.pushMid('2c');
// 			expect(tio.container).toEqual(['2c', '2b', '2a']);
// 			console.log(tio.container);
// 			expect(tio.middleTop).toEqual(0);
// 			expect(tio.middleBottom).toEqual(3);
// 	});
// });



// describe("Validate bottom stack in ThreeInOne functions even when other 2 stacks are not filled", () => {
// 	let tio = new ThreeInOne();
// 	test("Validate values added in the middle stack", () => {
// 			tio.pushBottom('3a');
// 			expect(tio.container).toEqual([ '3a',])
// 			tio.pushBottom('3b');
// 			expect(tio.container).toEqual([ '3b', '3a']);
// 			tio.pushBottom('3c');
// 			expect(tio.container).toEqual(['3c', '3b', '3a']);
// 			console.log(tio.container);
// 			expect(tio.middleTop).toEqual(0);
// 			expect(tio.middleBottom).toEqual(0);
// 	});
// });