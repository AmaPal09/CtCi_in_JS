import {oneAwaySol1} from "./../chapter_1/p1.5_one_away.js";

describe("Validate sol1 identifies whether the strings are 1 edit away", () => {
	test("Sol1 returns true when strings are 1 replacement away", () => {
		let str1 = "pale";
		let str2 = "bale";
		expect(oneAwaySol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns true when strings are 1 insertion away", () => {
		let str1 = "pale";
		let str2 = "paale";
		expect(oneAwaySol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns true when strings are 1 insertion away", () => {
		let str1 = "";
		let str2 = "p";
		expect(oneAwaySol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns true when strings are 1 deletion away", () => {
		let str1 = "pale";
		let str2 = "ple";
		expect(oneAwaySol1(str1, str2)).toBeTruthy();
	});

	test("Sol1 returns false when strings are more than 1 change away", () => {
		let str1 = "pale";
		let str2 = "bales";
		expect(oneAwaySol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when atleast one string is null", () => {
		let str1 = null;
		let str2 = "pale";
		expect(oneAwaySol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when atleast one string is undefined", () => {
		let str1 = "pale";
		let str2 = undefined;
		expect(oneAwaySol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when both strings are undefined", () => {
		let str1 = undefined;
		let str2 = undefined;
		expect(oneAwaySol1(str1, str2)).toBeFalsy();
	});

	test("Sol1 returns false when both strings are null", () => {
		let str1 = null;
		let str2 = null;
		expect(oneAwaySol1(str1, str2)).toBeFalsy();
	});
});