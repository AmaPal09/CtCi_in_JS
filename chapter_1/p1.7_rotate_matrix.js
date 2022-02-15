/*
Rotate Matrix
Given an image represented by an N X N matrix, where each pixel on the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

/*
Explaination:
Easiest way of implementing the rotations is rotation in layers.
Perform circular rotation.
Move top -> temp var
Move left -> top
Move bottom -> left
Move right -> bottom
Move temp -> right
*/

/*
Questions:
*/

/*
Assumption:
The outer array always contains atleast one array inside.
*/

/*
Example:
1) [[1]] -> [[1]]
2) [[]] -> [[]]
3) [[ , ], [ , ]] -> [[ , ], [ , ]]
4) [[1,2,3], [4,5,6], [7,8,9]] -> [[7,4,1], [8,5,2], [9,6,3]]
5) [] -> []
6) [[1], [2,3]] -> [[1], [2,3]]
*/


//Sol1
const rotateMatrixSol1 = (sqMatArray) => {

	if (sqMatArray === null || sqMatArray === undefined) {
		return sqMatArray;
	}

	if ((sqMatArray.length == 0) || (sqMatArray[0].length == 0) || (sqMatArray.length !== sqMatArray[0].length)) {
		return sqMatArray;
	}

	let len = sqMatArray.length;
	for (let layer = 0; layer < len/2; layer++) {
		let first = layer;
		let last = len - 1 - layer;

		for (let i = first; i < last; i++) {
			let offSet = i - first;

			let top = sqMatArray[first][i]; //save the top

			//top <- left
			sqMatArray[first][i] = sqMatArray[last-offSet][first];

			//left <- bottom
			sqMatArray[last-offSet][first] = sqMatArray[last][last-offSet];

			//bottom <- right
			sqMatArray[last][last-offSet] = sqMatArray[i][last];

			//right <- top
			sqMatArray[i][last] = top;
		}
	}

	return sqMatArray;
}

// console.log(rotateMatrixSol1([[1]]));
// console.log(rotateMatrixSol1([[]]));
// console.log(rotateMatrixSol1([[ , ], [ , ]]));
// console.log(rotateMatrixSol1([[1,2,3], [4,5,6], [7,8,9]]));
// console.log(rotateMatrixSol1([]));
// console.log(rotateMatrixSol1([[1], [2,3]]));
//Space O(1) as it is inplace
//Time O(n) as every cell of the matrix is handled

module.exports = {rotateMatrixSol1}