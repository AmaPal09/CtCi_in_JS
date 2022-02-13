import {isUniqueSol1} from "./../chapter_1/p1.1_is_unique.js"
import {isUniqueSol2} from "./../chapter_1/p1.1_is_unique.js"

describe("Validate sol1 for is unique problem", () => {
	test("Sol1 returns true when input has all unique chars", () => {
		let str1 = "abcd";
		expect(isUniqueSol1(str1)).toBeTruthy();
	});

	test("Sol1 returns false when input has non unique chars", () => {
		let str1 = "abca";
		expect(isUniqueSol1(str1)).toBeFalsy();
	});

	test("Sol1 returns true when input contains 1 blank", () => {
		let str1 = " ";
		expect(isUniqueSol1(str1)).toBeTruthy();
	});

	test("Sol1 returns false when input contains multiple blanks", () => {
		let str1 = "   ";
		expect(isUniqueSol1(str1)).toBeFalsy();
	});

	test("Sol1 returns false when input is null", () => {
		let str1 = null;
		expect(isUniqueSol1(str1)).toBeFalsy();
	});

	test("Sol1 returns false when input is undefined", () => {
		let str1 = undefined;
		expect(isUniqueSol1(str1)).toBeFalsy();
	});

	test("Sol1 returns false when input is empty", () => {
		let str1 = "";
		expect(isUniqueSol1(str1)).toBeFalsy();
	});
});



describe("Validate sol2 for is unique problem", () => {
	test("Sol2 returns true when input has all unique chars", () => {
		let str1 = "abcd";
		expect(isUniqueSol2(str1)).toBeTruthy();
	});

	test("Sol2 returns false when input has non unique chars", () => {
		let str1 = "abca";
		expect(isUniqueSol2(str1)).toBeFalsy();
	});

	test("Sol2 returns true when input contains 1 blank", () => {
		let str1 = " ";
		expect(isUniqueSol2(str1)).toBeTruthy();
	});

	test("Sol2 returns false when input contains multiple blanks", () => {
		let str1 = "   ";
		expect(isUniqueSol2(str1)).toBeFalsy();
	});

	test("Sol2 returns false when input is null", () => {
		let str1 = null;
		expect(isUniqueSol2(str1)).toBeFalsy();
	});

	test("Sol2 returns false when input is undefined", () => {
		let str1 = undefined;
		expect(isUniqueSol2(str1)).toBeFalsy();
	});

	test("Sol2 returns false when input is empty", () => {
		let str1 = "";
		expect(isUniqueSol2(str1)).toBeFalsy();
	});


	test("Sol2 returns false when input has more than 128 chars", () => {
		let str1 = "1234567890 abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*()-=_+[]{}|;:,./<>?`~ 1234567890 abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*()-=_+[]{}|;:,./<>?`~";
		expect(isUniqueSol2(str1)).toBeFalsy();
	});

});