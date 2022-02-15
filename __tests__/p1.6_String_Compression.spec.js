import {strCompressSol1} from "./../chapter_1/p1.6_String_Compression.js";
import {strCompressSol2} from "./../chapter_1/p1.6_String_Compression.js";

describe("Validate sol1 compresses ", () => {
	test("Sol1 returns empty string when input string is empty", () => {
		let str1 = "";
		expect(strCompressSol1(str1)).toMatch("");
	});

	test("Sol1 returns empty string when input string is null", () => {
		let str1 = null;
		expect(strCompressSol1(str1)).toMatch("");
	});

	test("Sol1 returns empty string when input string is undefined", () => {
		let str1 = undefined;
		expect(strCompressSol1(str1)).toMatch("");
	});

	test("Sol1 returns compressed string when compressed string is smaller than input string", () => {
		let str1 = "aabcccccaaa";
		expect(strCompressSol1(str1)).toMatch("a2b1c5a3");
	});

	test("Sol1 returns input string when compressed string is bigger than input strings", () => {
		let str1 = "abcd";
		expect(strCompressSol1(str1)).toMatch("abcd");
	});

	test("Sol1 returns input string when compressed string is bigger than input strings", () => {
		let str1 = "aaAAAbCCcccaaAAA";
		expect(strCompressSol1(str1)).toMatch("a2A3b1C2c3a2A3");
	});
});


describe("Validate sol2 compresses ", () => {
	test("Sol2 returns empty string when input string is empty", () => {
		let str2 = "";
		expect(strCompressSol2(str2)).toMatch("");
	});

	test("Sol2 returns empty string when input string is null", () => {
		let str2 = null;
		expect(strCompressSol2(str2)).toMatch("");
	});

	test("Sol2 returns empty string when input string is undefined", () => {
		let str2 = undefined;
		expect(strCompressSol2(str2)).toMatch("");
	});

	test("Sol2 returns compressed string when compressed string is smaller than input string", () => {
		let str2 = "aabcccccaaa";
		expect(strCompressSol2(str2)).toMatch("a2b1c5a3");
	});

	test("Sol2 returns input string when compressed string is bigger than input strings", () => {
		let str2 = "abcd";
		expect(strCompressSol2(str2)).toMatch("abcd");
	});

	test("Sol2 returns input string when compressed string is bigger than input strings", () => {
		let str2 = "aaAAAbCCcccaaAAA";
		expect(strCompressSol2(str2)).toMatch("a2A3b1C2c3a2A3");
	});
});