/*
Palindrome Permutation
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or a phrase that is the same forwards and backwards. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.
*/

/*Explaination:
Word is the same backwards or forwards,
when string is even: each char can occur even number of times.
when string is odd: only one char can occur odd number of times, rest all even.
*/

/*Questions:
Do spaces matter?
Do non-letter chars matter?
*/

/*Assumption
As per problem:
case does not matter,
non-letter chars dont matter.
*/

/*
Example:
1) 'Tact Coa' -> true
2) 'Tact boa' -> false
3) 'a11a' -> true
4) 'a a a ' -> true
*/

const alphabetSet = new Set( ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] );

//Sol1
const isPalPermSol1 = (inStr) => {
	if (!inStr) {
		return false;
	}

	if (inStr.length < 1) {
		return false;
	}


	let strArray = [];

	//Because we have to ignore all non-letter chars & case does not matter
	for (let i = 0; i < inStr.length; i++) {
		if (alphabetSet.has(inStr[i].toLowerCase())) {
			strArray.push(inStr[i].toLowerCase());
		}
	}

	//Map count of chars.
	let charCountMap = {};
	for(let i= 0; i < strArray.length; i++) {
		if (charCountMap[strArray[i]] !== undefined) {
			charCountMap[strArray[i]] ++;
		}
		else {
			charCountMap[strArray[i]] = 1;
		}
	}

	//Check for if more than one char has an odd count
	let oddPresent = false;
	let isPalindrome = true;
	Object.keys(charCountMap).forEach((char) => {
		if (charCountMap[char] %2 == 1 ) {
			if (oddPresent == false) {
				oddPresent = true;
			}
			else {
				isPalindrome = false;
			}
		}
	});

	return isPalindrome;
}
//Space: for char mapping object and for char set
//Time: O(N)
// console.log(isPalPermSol1('Tact Coa'));
// console.log(isPalPermSol1('Tact boa'));
// console.log(isPalPermSol1('a11a'));


//Helper function
//Count number of times a char occurs and returns an array of the count.
const buildCharFreqTbl = (inStr) => {
	//takes into account only letter chars
	let charCount = "z".charCodeAt(0) - "a".charCodeAt(0);

	let freqTbl = Array(charCount + 1).fill(0);

	for (let i = 0; i < inStr.length; i++) {
		let charIndexNumber = getCharNumber(inStr[i]);
		if (charIndexNumber >=0) {
			freqTbl[charIndexNumber] ++;
		}
	}
	return freqTbl;
}

// Helper function
// Get the number for the char.
//Each letter gets a number assigned. a-> '0', 'b' -> 1, c -> 2, ... and so on.
//Non-letter chars are assigned -1. This takes care of all non-letter chars including space.
const getCharNumber = (char) => {
	const aNum = "a".charCodeAt(0);
	const zNum = "z".charCodeAt(0);

	//Case insensitive
	let charNum = char.toLowerCase().charCodeAt(0);

	if (charNum <= zNum && charNum >= aNum) {
		return charNum - aNum;
	}
	else {
		return -1;
	}
}

//Helper function
//Validates that the table has only one element with an odd count
const checkForOddChars = (table) => {
	let oddPresent = false;

	for (let i = 0; i < table.length; i++) {
		if (table[i]%2 == 1) {
			if (oddPresent) {
				return false;
			}
			else{
				oddPresent = true;
			}
		}
	}

	return true;
}


//Sol2
const isPalPermSol2 = (inStr) => {

	if (!inStr) {
		return false;
	}

	if (inStr.length < 1) {
		return false;
	}

	let charTable = buildCharFreqTbl(inStr);
	return checkForOddChars(charTable);
}
// console.log(isPalPermSol2('Tact Coa'));
// console.log(isPalPermSol2('Tact boa'));
// console.log(isPalPermSol2('a11a'));


//Sol3
const isPalPermSol3 = (inStr) => {
	if (!inStr) {
		return false;
	}

	if (inStr.length < 1) {
		return false;
	}

	let freqTable = Array(("z".charCodeAt(0) - "a".charCodeAt(0))+1).fill(0);
	let oddCount = 0;

	for (let i = 0; i <inStr.length; i++) {
		let charIndexNumber = getCharNumber(inStr[i]);

		if (charIndexNumber > -1) {
			freqTable[charIndexNumber]++
			if (freqTable[charIndexNumber]%2 == 1) {
				oddCount++
			}
			else {
				oddCount --;
			}
		}
	}

	return oddCount <= 1;
}
console.log(isPalPermSol3('Tact Coa'));
console.log(isPalPermSol3('Tact boa'));
console.log(isPalPermSol3('a11a'));


module.exports = {isPalPermSol1, isPalPermSol2, isPalPermSol3};