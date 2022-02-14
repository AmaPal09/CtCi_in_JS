/*
One away
There are three three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

/*
Examples
1) 'pale' 'bale' -> true
1) 'pale' 'pales'-> true
1) 'pale' 'pal'-> true
1) 'pale' 'bales'-> false
*/

/*
Explanation
Replace: Both strings are of same length and have only one char that is different
Insert: Second string is bigger than the first by 1 in length and has one extra character
Remove: Second string is smaller than the first by 1 in length and has one less character.

Removal is inverse of insertion.
insert(s1, s2) == remove(s2, s1)
*/


//Helper function
const oneReplaceAway = (str1, str2) => {
	let ctr1 = 0;
	let ctr2 = 0;
	let diffPresent = false;

	while ((ctr1 < str1.length) && (ctr2 < str2.length)) {
		if (str1[ctr1] != str2[ctr2]) {
			if (diffPresent) {
				return false;
			}
			else {
				diffPresent = true;
			}
		}
		ctr1++;
		ctr2++;
	}
	return true;
}


//Helper function
const oneInsertAway = (smallerStr, biggerStr) => {
	let ctr1 = 0;
	let ctr2 = 0;
	let diffPresent = 0;

	while (ctr1 < smallerStr.length) {
		if (smallerStr[ctr1] != biggerStr[ctr2]) {
			if (diffPresent) {
				return false;
			}
			else {
				diffPresent = true;
				ctr2 ++;
			}
		}
		ctr1++;
		ctr2++;
	}
	return true;
}


//Sol1
const oneAwaySol1 = (inStr1, inStr2) => {

	if (inStr1 === null || inStr2 === null || inStr1 === undefined || inStr2 === undefined) {
		return false;
	}

	if (inStr1.length === inStr2.length) {
		return oneReplaceAway(inStr1, inStr2);
	}
	else if ((inStr1.length < inStr2.length) && (inStr1.length+1 === inStr2.length)) {
		return oneInsertAway(inStr1, inStr2);
	}
	else if ((inStr2.length < inStr1.length) && (inStr2.length+1 === inStr1.length)) {
		return oneInsertAway(inStr2, inStr1);
	}
	else {
		return false;
	}
}

module.exports = {oneAwaySol1};