import {isPalPermSol1} from "./../chapter_1/p1.4_palindrome_permutation.js";
import {isPalPermSol2} from "./../chapter_1/p1.4_palindrome_permutation.js";
import {isPalPermSol3} from "./../chapter_1/p1.4_palindrome_permutation.js";

describe("Validate sol1 identifies that the provided input is a permutation of a palindrom", () => {
	test("Sol1 returns true when string is permutation of a palindrom", () => {
		let str1 = "Tact Coa";
		expect(isPalPermSol1(str1)).toBeTruthy();
	});
});