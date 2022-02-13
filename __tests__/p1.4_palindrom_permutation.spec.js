import {isPalPermSol1} from "./../chapter_1/p1.4_palindrome_permutation.js";
import {isPalPermSol2} from "./../chapter_1/p1.4_palindrome_permutation.js";
import {isPalPermSol3} from "./../chapter_1/p1.4_palindrome_permutation.js";

describe("Validate sol1 identifies that the provided input is a permutation of a palindrom", () => {
	test("Sol1 returns true when string is permutation of a palindrom", () => {
		let str1 = "Tact Coa";
		expect(isPalPermSol1(str1)).toBeTruthy();
	});

	test("Sol1 returns false when string is not a permutation of a palindrom", () => {
		let str1 = "Tact boa";
		expect(isPalPermSol1(str1)).toBeFalsy();
	});

	test("Sol1 returns true when string is permutation of a palindrom", () => {
		let str1 = "a11a";
		expect(isPalPermSol1(str1)).toBeTruthy();
	});

	test("Sol1 returns true when string is just one char", () => {
		let str1 = "a";
		expect(isPalPermSol1(str1)).toBeTruthy();
	});

	test("Sol1 returns true when string is just one char", () => {
		let str1 = " ";
		expect(isPalPermSol1(str1)).toBeTruthy();
	});

	test("Sol1 returns fasle when string is empty", () => {
		let str1 = "";
		expect(isPalPermSol1(str1)).toBeFalsy();
	});

	test("Sol1 returns false when string is null", () => {
		let str1 = null;
		expect(isPalPermSol1(str1)).toBeFalsy();
	});

	test("Sol1 returns false when string is undefined", () => {
		let str1 = undefined;
		expect(isPalPermSol1(str1)).toBeFalsy();
	});
});



describe("Validate sol2 identifies that the provided input is a permutation of a palindrom", () => {
	test("Sol2 returns true when string is permutation of a palindrom", () => {
		let str2 = "Tact Coa";
		expect(isPalPermSol2(str2)).toBeTruthy();
	});

	test("Sol2 returns false when string is not a permutation of a palindrom", () => {
		let str2 = "Tact boa";
		expect(isPalPermSol2(str2)).toBeFalsy();
	});

	test("Sol2 returns true when string is permutation of a palindrom", () => {
		let str2 = "a11a";
		expect(isPalPermSol2(str2)).toBeTruthy();
	});

	test("Sol2 returns true when string is just one char", () => {
		let str2 = "a";
		expect(isPalPermSol2(str2)).toBeTruthy();
	});

	test("Sol2 returns true when string is just one char", () => {
		let str2 = " ";
		expect(isPalPermSol2(str2)).toBeTruthy();
	});

	test("Sol2 returns fasle when string is empty", () => {
		let str2 = "";
		expect(isPalPermSol2(str2)).toBeFalsy();
	});

	test("Sol2 returns false when string is null", () => {
		let str2 = null;
		expect(isPalPermSol2(str2)).toBeFalsy();
	});

	test("Sol2 returns false when string is undefined", () => {
		let str2 = undefined;
		expect(isPalPermSol2(str2)).toBeFalsy();
	});
});



describe("Validate sol3 identifies that the provided input is a permutation of a palindrom", () => {
	test("Sol3 returns true when string is permutation of a palindrom", () => {
		let str3 = "Tact Coa";
		expect(isPalPermSol3(str3)).toBeTruthy();
	});

	test("Sol3 returns false when string is not a permutation of a palindrom", () => {
		let str3 = "Tact boa";
		expect(isPalPermSol3(str3)).toBeFalsy();
	});

	test("Sol3 returns true when string is permutation of a palindrom", () => {
		let str3 = "a11a";
		expect(isPalPermSol3(str3)).toBeTruthy();
	});

	test("Sol3 returns true when string is just one char", () => {
		let str3 = "a";
		expect(isPalPermSol3(str3)).toBeTruthy();
	});

	test("Sol3 returns true when string is just one char", () => {
		let str3 = " ";
		expect(isPalPermSol3(str3)).toBeTruthy();
	});

	test("Sol3 returns fasle when string is empty", () => {
		let str3 = "";
		expect(isPalPermSol3(str3)).toBeFalsy();
	});

	test("Sol3 returns false when string is null", () => {
		let str3 = null;
		expect(isPalPermSol3(str3)).toBeFalsy();
	});

	test("Sol3 returns false when string is undefined", () => {
		let str3 = undefined;
		expect(isPalPermSol3(str3)).toBeFalsy();
	});
});