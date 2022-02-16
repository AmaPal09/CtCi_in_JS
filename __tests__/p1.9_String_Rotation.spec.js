import {strRotSol1} from "./../chapter_1/p1.9_String_Rotation.js";

describe("Validate sol1 returns a if the input strings are rotations of each other", () => {
	test("Sol1 returns false when either of the 2 inputs is null", () => {
		let str1 = null;
		let str2 = "Waterbottle";
		expect(strRotSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when either of the 2 inputs is undefined", () => {
		let str1 = "Waterbottle";
		let str2 = undefined;
		expect(strRotSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when both the inputs null", () => {
		let str1 = null;
		let str2 = null;
		expect(strRotSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when both the inputs undefined", () => {
		let str1 = undefined;
		let str2 = undefined;
		expect(strRotSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false one input is blank and the other is not ", () => {
		let str1 = " ";
		let str2 = "a";
		expect(strRotSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns when both strings are the same", () => {
		let str1 = " ";
		let str2 = " ";
		expect(strRotSol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns false when both strings are of different length", () => {
		let str1 = "aaba";
		let str2 = "aab";
		expect(strRotSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns truth when both strings are of rotations of each other", () => {
		let str1 = "waterbottle";
		let str2 = "erbottlewat";
		expect(strRotSol1(str1, str2)).toBeTruthy();
	});
});