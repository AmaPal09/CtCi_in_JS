/*
Is Unique
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structure.
*/

//Sol1 using object
const isUniqueSol1 = (inStr) => {
	if (!inStr) {
		return false;
	}
	let charObj = {}
	for (let i = 0; i < inStr.length; i++ ) {
		// if (inStr[i] in charObj) {
		// if (charObj.hasOwnProperty(inStr[i])){
		// if (charObj[inStr[i]] !== undefined) {
		if (charObj[inStr[i]] && charObj[inStr[i]] >= 1) {
			return false;
		}
		else {
			charObj[inStr[i]] = 1;
		}
	}
	return true;
}
//Time complexity O(n),
//Space complexity O(c) c = const max can be 128/256/2^21.



//Sol2 using array and ascii values
/*
Check with the interviewer if the string is ASCII or Extended ASCII or Unicode string.
If the string is ASCII then define array of length 128, for Extended ASCII it would be 256 and for Unicode it would be 2^21.
ASCII contains all chars in lower and uppercase.
ASCII subset of extendeed ASCII subset of Unicode.
Interesting article/info: https://stackoverflow.com/questions/19212306/whats-the-difference-between-ascii-and-unicode
*/
const isUniqueSol2 = (inStr) => {
	//Assumption inStr is made up of ASCII characters alone
	//There are only 128 ASCII characters so if the string length is bigger than 128, then it has duplicates

	if (inStr.length > 128) {
		return false;
	}

	// let charCtrArr = new Array(128); //Not ES6 friendly.
	// let charCtrArr = Array.apply(null, Array(5));
	// let charCtrArr = Array.apply(null, {length: 5});
	// let charCtrArr = [...Array(5)].map(x => undefined);
	let charCtrArr = Array(5).fill(undefined); //ES6 friendly

	for (let i = 0; i < inStr.length; i++) {
		const val = inStr.charCodeAt(i);

		if (charCtrArr[val]) {
			return false;
		}
		else {
			charCtrArr[val] = true;
		}
	}

	return true;
}
console.log(isUniqueSol2('abcd'));
console.log(isUniqueSol2('abca'));
//Time complexity O(n) or can be called as O(1) as no more than 128 iterations possible,
//Space complexity O(c) c = const max can be 128/256/2^21 size of char set.



/* Not working
//Sol3 ascii values as bit vector
const isUniqueSol3 = (inStr) => {
	//assumption is that inStr is lowercase ASCII string. So possible to use just a single int
	let checker = 0;
	for (let i = 0; i < inStr.length; i++) {
		const val = inStr.charCodeAt(i) - 'a';
		if ((checker & (1 << val)) > 0) {
			return false;
		}
		checker |= (1 << val);
	}
	return true;
}
console.log(isUniqueSol3('abcd'));
console.log(isUniqueSol3('abca'));
*/


/*
When additional space cannot be used,
there are 2 options:
1) Compare every charachter of the string with every other char in the string.
This would be O(n^2) time and O(1)space
2) If original string can be modified, then sort the string and comapare every char with its neighbouring char, to check for duplicates. Assumptions- string modification is allowed and sort used has O(n log n) time.
*/
// Sol4
// const isUniqueSol4 = (inStr) => {
// 	//Assumption sort is O(n log n) & string modification is okay.
// 	inStr = sortingAlgo(inStr);
// 	for (let i = 0; i < inStr.length -1; i++) {
// 		if (inStr[i] == inStr[i+1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(isUniqueSol4('abcd'));
// console.log(isUniqueSol4('abca'));

module.exports = {isUniqueSol1};