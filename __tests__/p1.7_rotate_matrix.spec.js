import {rotateMatrixSol1} from "./../chapter_1/p1.7_rotate_matrix.js";

describe("Validate sol1 rotates provided matrix ", () => {
	test("Sol1 returns rotated matrix", () => {
		let mat = [[1]];
		expect(rotateMatrixSol1(mat)).toEqual([[1]]);
	});

	test("Sol1 returns rotated matrix", () => {
		let mat = [[]];
		expect(rotateMatrixSol1(mat)).toEqual([[]]);
	});

	test("Sol1 returns rotated matrix", () => {
		let mat = [[ , ], [ , ]];
		expect(rotateMatrixSol1(mat)).toEqual([[ , ], [ , ]]);
	});

	test("Sol1 returns rotated matrix", () => {
		let mat = [[1,2,3], [4,5,6], [7,8,9]];
		expect(rotateMatrixSol1(mat)).toEqual([[7,4,1], [8,5,2], [9,6,3]]);
	});

	test("Sol1 returns rotated matrix", () => {
		let mat = [];
		expect(rotateMatrixSol1(mat)).toEqual([]);
	});

	test("Sol1 returns null rotated matrix", () => {
		let mat = [[1], [2,3]];
		expect(rotateMatrixSol1(mat)).toEqual([[1], [2,3]]);
	});

	test("Sol1 returns null when input matrix is null", () => {
		let mat = null;
		expect(rotateMatrixSol1(mat)).toEqual(null);
	});

	test("Sol1 returns undefined when input matrix is undefined", () => {
		let mat = undefined;
		expect(rotateMatrixSol1(mat)).toEqual(undefined);
	});

});
