/*
Zero Matrix
Write an algorithm sich that if an element in an MxN jmatrix is 0, its entire row and column are set to 0;
*/

/*
Explaination:

*/

/*
Questions:
*/

/*
Assumption
All elements in the matrix are numeric
*/

/*
Example:
1) [] -> []
2) [[]] -> []
3) [[1], [2,3]] -> [[1], [2,3]]
4) [
	[1,2,3,4,5],
	[6,7,8,9,10],
	[11,12,0,14,15]
]  -> [
	[1,2,0,4,5],
	[6,7,0,9,10],
	[0,0,0,0,0]
]
*/

// Sol1
const zeroMatSol1 = (inMatrix) => {
	if (inMatrix.length === 0) {
		return inMatrix;
	}

	let rowCount = inMatrix.length;
	let rowOneLen = inMatrix[0].length;
	for (let row = 0; row < rowCount; row++) {
		if((rowOneLen !== inMatrix[row].length) || (row.length === 0)) {
			return inMatrix;
		}
	}

	let zeroRows = Array(rowCount).fill(false);
	let zeroCols = Array(rowOneLen).fill(false);

	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < rowOneLen; j++) {
			if (inMatrix[i][j] === 0) {
				zeroRows[i] = true;
				zeroCols[j] = true;
			}
		}
	}

	//Zerofy rows
	for(let i =0; i<rowCount; i++) {
		if (zeroRows[i]) {
			for (let j = 0; j < rowOneLen; j++) {
				inMatrix[i][j] = 0;
			}
		}
	}

	//Zerofy cols
	for(let i =0; i<rowOneLen; i++) {
		if (zeroCols[i]) {
			for (let j = 0; j < rowCount; j++) {
				inMatrix[j][i] = 0;
			}
		}
	}

	return inMatrix;
}
console.log(zeroMatSol1([[1,2,3,4,5],[6,7,8,9,10],[11,12,0,14,15]]));
