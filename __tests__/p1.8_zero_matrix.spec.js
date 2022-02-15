import {zeroMatSol1} from "./../chapter_1/p1.8_zero_matrix.js";
import {zeroMatSol2} from "./../chapter_1/p1.8_zero_matrix.js";

describe("Validate sol1 returns a matrix with all 0s in the rows and columns containing a zero", () => {
	test("Sol1 returns input when input matrix is blank", () => {
		let mat = [];
		expect(zeroMatSol1(mat)).toEqual([]);
	});

	test("Sol1 returns input when input matrix contains empty row", () => {
		let mat = [[]];
		expect(zeroMatSol1(mat)).toEqual([[]]);
	});

	test("Sol1 returns empty matrix when input matrix is null", () => {
		let mat = null;
		expect(zeroMatSol1(mat)).toEqual([]);
	});

	test("Sol1 returns empty matrix when input matrix is undefined", () => {
		let mat = undefined;
		expect(zeroMatSol1(mat)).toEqual([]);
	});

	test("Sol1 returns input matrix when input matrix has no zero", () => {
		let mat = [[1], [2,3]];
		expect(zeroMatSol1(mat)).toEqual([[1], [2,3]]);
	});

	test("Sol1 returns zero matrix when input matrix has a zero", () => {
		let mat = [
					[1,2,3,4,5],
					[6,7,8,9,10],
					[11,12,0,14,15]
				];
		expect(zeroMatSol1(mat)).toEqual([
												[1,2,0,4,5],
												[6,7,0,9,10],
												[0,0,0,0,0]
											]);
	});
});

describe("Validate sol2 returns a matrix with all 0s in the rows and columns containing a zero", () => {
	test("Sol2 returns input when input matrix is blank", () => {
		let mat = [];
		expect(zeroMatSol2(mat)).toEqual([]);
	});

	test("Sol2 returns input when input matrix contains empty row", () => {
		let mat = [[]];
		expect(zeroMatSol2(mat)).toEqual([[]]);
	});

	test("Sol2 returns empty matrix when input matrix is null", () => {
		let mat = null;
		expect(zeroMatSol2(mat)).toEqual([]);
	});

	test("Sol2 returns empty matrix when input matrix is undefined", () => {
		let mat = undefined;
		expect(zeroMatSol2(mat)).toEqual([]);
	});

	test("Sol2 returns input matrix when input matrix has no zero", () => {
		let mat = [[1], [2,3]];
		expect(zeroMatSol2(mat)).toEqual([[1], [2,3]]);
	});

	test("Sol2 returns zero matrix when input matrix has a zero", () => {
		let mat = [
					[1,2,3,4,5],
					[6,7,8,9,10],
					[11,12,0,14,15]
				];
		expect(zeroMatSol2(mat)).toEqual([
												[1,2,0,4,5],
												[6,7,0,9,10],
												[0,0,0,0,0]
											]);
	});
});