import {checkPermSol1} from "./../chapter_1/p1.2_check_permutation.js"
import {checkPermSol2} from "./../chapter_1/p1.2_check_permutation.js"
import {checkPermSol3} from "./../chapter_1/p1.2_check_permutation.js"

describe("Validate sol1 to see if it can identify strings that are permutations of each other", () => {

	test("Sol1 returns true when strings 1 & 2 are permutations of each other", () => {
		let str1 = "dog";
		let str2 = "god";
		expect(checkPermSol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns false when strings 1 & 2 have all same characters but different lenght ", () => {
		let str1 = "dog";
		let str2 = "god ";
		expect(checkPermSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when one of the 2 strings is empty and the other is not", () => {
		let str1 = "";
		let str2 = " ";
		expect(checkPermSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns true when both the strings are empty", () => {
		let str1 = "";
		let str2 = "";
		expect(checkPermSol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns true when both the strings contain same number of blanks", () => {
		let str1 = "  ";
		let str2 = "  ";
		expect(checkPermSol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns false when both the strings contain different number of blanks", () => {
		let str1 = "  ";
		let str2 = " ";
		expect(checkPermSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when both the strings contain same characters in different numbers", () => {
		let str1 = "aba";
		let str2 = "ab";
		expect(checkPermSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when one of the strings is null", () => {
		let str1 = null;
		let str2 = "ab";
		expect(checkPermSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when both the strings contain same characters in different numbers", () => {
		let str1 = "abaaa";
		let str2 = "abcaa";
		expect(checkPermSol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when one of the strings is undefined", () => {
		let str1 = undefined;
		let str2 = "ab";
		expect(checkPermSol1(str1, str2)).toBeFalsy();
	});
});


describe("Validate sol1 to see if it can identify strings that are permutations of each other", () => {

	test("Sol2 returns true when strings 1 & 2 are permutations of each other", () => {
		let str1 = "dog";
		let str2 = "god";
		expect(checkPermSol2(str1, str2)).toBeTruthy();
	});

	test("Sol2 returns false when strings 1 & 2 have all same characters but different lenght ", () => {
		let str1 = "dog";
		let str2 = "god ";
		expect(checkPermSol2(str1, str2)).toBeFalsy();
	});

	test("Sol2 returns false when one of the 2 strings is empty and the other is not", () => {
		let str1 = "";
		let str2 = " ";
		expect(checkPermSol2(str1, str2)).toBeFalsy();
	});

	test("Sol2 returns true when both the strings are empty", () => {
		let str1 = "";
		let str2 = "";
		expect(checkPermSol2(str1, str2)).toBeTruthy();
	});

	test("Sol2 returns true when both the strings contain same number of blanks", () => {
		let str1 = "  ";
		let str2 = "  ";
		expect(checkPermSol2(str1, str2)).toBeTruthy();
	});

	test("Sol2 returns false when both the strings contain different number of blanks", () => {
		let str1 = "  ";
		let str2 = " ";
		expect(checkPermSol2(str1, str2)).toBeFalsy();
	});

	test("Sol2 returns false when both the strings contain same characters in different numbers", () => {
		let str1 = "aba";
		let str2 = "ab";
		expect(checkPermSol2(str1, str2)).toBeFalsy();
	});

	test("Sol2 returns false when one of the strings is null", () => {
		let str1 = null;
		let str2 = "ab";
		expect(checkPermSol2(str1, str2)).toBeFalsy();
	});

	test("Sol2 returns false when both the strings contain same characters in different numbers", () => {
		let str1 = "abaaa";
		let str2 = "abcaa";
		expect(checkPermSol2(str1, str2)).toBeFalsy();
	});

	test("Sol2 returns false when one of the strings is undefined", () => {
		let str1 = undefined;
		let str2 = "ab";
		expect(checkPermSol2(str1, str2)).toBeFalsy();
	});
});


describe("Validate sol3 to see if it can identify strings that are permutations of each other", () => {

	test("Sol3 returns true when strings 1 & 2 are permutations of each other", () => {
		let str1 = "dog";
		let str2 = "god";
		expect(checkPermSol3(str1, str2)).toBeTruthy();
	});

	test("Sol3 returns false when strings 1 & 2 have all same characters but different lenght ", () => {
		let str1 = "dog";
		let str2 = "god ";
		expect(checkPermSol3(str1, str2)).toBeFalsy();
	});

	test("Sol3 returns false when one of the 2 strings is empty and the other is not", () => {
		let str1 = "";
		let str2 = " ";
		expect(checkPermSol3(str1, str2)).toBeFalsy();
	});

	test("Sol3 returns true when both the strings are empty", () => {
		let str1 = "";
		let str2 = "";
		expect(checkPermSol3(str1, str2)).toBeTruthy();
	});

	test("Sol3 returns true when both the strings contain same number of blanks", () => {
		let str1 = "  ";
		let str2 = "  ";
		expect(checkPermSol3(str1, str2)).toBeTruthy();
	})

	test("Sol3 returns false when both the strings contain different number of blanks", () => {
		let str1 = "  ";
		let str2 = " ";
		expect(checkPermSol3(str1, str2)).toBeFalsy();
	});

	test("Sol3 returns false when both the strings contain same characters in different numbers", () => {
		let str1 = "aba";
		let str2 = "ab";
		expect(checkPermSol3(str1, str2)).toBeFalsy();
	});

	test("Sol3 returns false when one of the strings is null", () => {
		let str1 = null;
		let str2 = "ab";
		expect(checkPermSol3(str1, str2)).toBeFalsy();
	});

	test("Sol3 returns false when both the strings contain same characters in different numbers", () => {
		let str1 = "abaaa";
		let str2 = "abcaa";
		expect(checkPermSol3(str1, str2)).toBeFalsy();
	});

	test("Sol3 returns false when one of the strings is undefined", () => {
		let str1 = undefined;
		let str2 = "ab";
		expect(checkPermSol3(str1, str2)).toBeFalsy();
	});
});
