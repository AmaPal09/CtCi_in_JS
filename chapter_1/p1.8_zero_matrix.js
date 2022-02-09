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

//Sol2 Refactored sol1-
//Helper function
const getIndexOfZeros = (inMat) => {


		let rowIndicesWithZero = Array(inMat.length).fill(false);
		let colIndicesWithZero = Array(inMat[0].length).fill(false);

	for (let i = 0; i < inMat.length; i++) {
		for (let j = 0; j < inMat[0].length; j++) {
			if (inMat[i][j] === 0) {
				rowIndicesWithZero[i] = true;
				colIndicesWithZero[j] = true;
			}
		}
	}
	return {
		rowIndicesWithzero: rowIndicesWithZero,
		colIndicesWithzero: colIndicesWithZero
	};
}


//Helper function
const zerofyRowElement = (inMat, rowNum) => {
	for (let j = 0; j < inMat[rowNum].length; j++) {
		inMat[rowNum][j] = 0;
	}
}


//Helper function
const zerofyRow = (inMat, rowsWithZero) => {
	for (let i = 0; i < rowsWithZero.length; i++) {
		if (rowsWithZero[i]) {
			zerofyRowElement(inMat, i);
		}
	}
}


//Helper function
const zerofyColElement = (inMat, colNum) => {
	for (let i = 0; i < inMat.length; i++) {
		inMat[i][colNum] = 0;
	}
}


//Helper function
const zerofyCol = (inMat, colsWithZero) => {
	for (let j = 0; j < colsWithZero.length; j++) {
		if (colsWithZero[j]) {
			zerofyColElement(inMat, j);
		}
	}
}


const zeroMatSol2 = (inMatrix) => {
	if (inMatrix.length === 0 ) {
		return inMatrix;
	}

	for (let i = 0; i < inMatrix.length; i++) {
		if (inMatrix[0].length !== inMatrix[i].length) {
			return inMatrix;
		}
	}

	let indexOfZeros = getIndexOfZeros(inMatrix);
	zerofyRow(inMatrix, indexOfZeros.rowIndicesWithzero);
	zerofyCol(inMatrix, indexOfZeros.colIndicesWithzero);

	return inMatrix;
}
console.log(zeroMatSol2([[1,2,3,4,5],[6,7,8,9,10],[11,12,0,14,15]]));
