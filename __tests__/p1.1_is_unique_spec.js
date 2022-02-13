import {isUniqueSol1} from "./../chapter_1/p1.1_is_unique.js"

describe("Validate sol1 for is unique problem", () => {
	test("Sol returns true when input has all unique chars", () => {
		let str1 = "abcd";
		expect(isUniqueSol1(str1)).toBeTruthy();
	});

	test("Sol returns false when input has non unique chars", () => {
		let str1 = "abca";
		expect(isUniqueSol1(str1)).toBeFalsy();
	});

	test("Sol returns true when input is blank", () => {
		let str1 = "";
		expect(isUniqueSol1(str1)).toBeTruthy();
	});

	test("Sol returns false when input is null/undefined", () => {
		let str1 = null;
		expect(isUniqueSol1(str1)).toBeFalsy();
	});

	test("Sol returns false when input is null/undefined", () => {
		let str1 = undefined;
		expect(isUniqueSol1(str1)).toBeFalsy();
	});

});