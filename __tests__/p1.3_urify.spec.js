import {urlifySol1} from "./../chapter_1/p1.3_urify.js";
import {urlifySol2} from "./../chapter_1/p1.3_urify.js";

describe("Validate sol1 urlifys the provided input string", () => {
	test("Sol1 returns urlified string for the input string provided", () => {
		let str1 = "Mr John Smith    ";
		let tLength = 13;
		let url = urlifySol1(str1, tLength);
		console.log(url);
		expect(url.length).toBe(str1.length);
	});

	test("Sol1 discards trailing spaces of input string when urlifying it", () => {
		let str1 = "Mr John Smith      ";
		let tLength = 13;
		let url = urlifySol1(str1, tLength);
		console.log(url);
		expect(url[url.length-1]).toBe(str1[tLength-1]);
	});

	test("Sol1 discards blank input string when urlifying it", () => {
		let str1 = " ";
		let tLength = 1;
		let url = urlifySol1(str1, tLength);
		console.log(url);
		expect(url).toMatch("");
	});

	test("Sol1 string urlified correctly", () => {
		let str1 = "Mr John Smith    ";
		let tLength = 13;
		let url = urlifySol1(str1, tLength);
		console.log(url);
		expect(url).toMatch("Mr%20John%20Smith");
	});

	test("Sol1 discards null input string when urlifying it", () => {
		let str1 = null;
		let tLength = 1;
		let url = urlifySol1(str1, tLength);
		console.log(url);
		expect(url).toBe("");
	});

	test("Sol1 discards undefined input string when urlifying it", () => {
		let str1 = undefined;
		let tLength = 1;
		let url = urlifySol1(str1, tLength);
		console.log(url);
		expect(url).toBe("");
	});

	test("Sol1 discards empty input string when urlifying it", () => {
		let str1 = "";
		let tLength = 0;
		let url = urlifySol1(str1, tLength);
		console.log(url);
		expect(url).toBe("");
	});
});



describe("Validate sol2 urlifys the provided input string", () => {
	test("Sol2 returns urlified string for the input string provided", () => {
		let str2 = "Mr John Smith    ";
		let tLength = 13;
		let url = urlifySol2(str2, tLength);
		console.log(url);
		expect(url.length).toBe(str2.length);
	});

	test("Sol2 discards trailing spaces of input string when urlifying it", () => {
		let str2 = "Mr John Smith      ";
		let tLength = 13;
		let url = urlifySol2(str2, tLength);
		console.log(url);
		expect(url[url.length-1]).toBe(str2[tLength-1]);
	});

	test("Sol2 discards blank input string when urlifying it", () => {
		let str2 = " ";
		let tLength = 1;
		let url = urlifySol2(str2, tLength);
		console.log(url);
		expect(url).toMatch("");
	});

	test("Sol2 string urlified correctly", () => {
		let str2 = "Mr John Smith    ";
		let tLength = 13;
		let url = urlifySol2(str2, tLength);
		console.log(url);
		expect(url).toMatch("Mr%20John%20Smith");
	});

	test("Sol2 discards null input string when urlifying it", () => {
		let str2 = null;
		let tLength = 1;
		let url = urlifySol2(str2, tLength);
		console.log(url);
		expect(url).toBe("");
	});

	test("Sol2 discards undefined input string when urlifying it", () => {
		let str2 = undefined;
		let tLength = 1;
		let url = urlifySol2(str2, tLength);
		console.log(url);
		expect(url).toBe("");
	});

	test("Sol2 discards empty input string when urlifying it", () => {
		let str2 = "";
		let tLength = 0;
		let url = urlifySol2(str2, tLength);
		console.log(url);
		expect(url).toBe("");
	});
});