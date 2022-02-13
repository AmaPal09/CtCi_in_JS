/*
Check permutation
Given two strings, write a method to decide if one of them is a permutation of the other.
*/

/* Questions:
1) Is permutation comparision case sensitive?
2) Is white space significant? That is: is "god " different from "dog". As so they are not permutations.
*/

/* Assumptions:
1) Permutation comparision is case sensitive.
2) White space matters. So "god" is a permutation of "dog" but not of "god ".
*/

/* Examples:
1) "god ", "dog" -> fasle
2) "god", "dog" -> true
3) "", " " -> false
4) "", "" -> true
5) " ", " " -> true
6) "  ", " " -> false
7) "aba", "aab" -> true
8) "aba", "ab" -> false
*/

const sortStr = (inStr) => {
	let strArray = inStr.split("");
	strArray = strArray.sort();
	return strArray.join("");
}

//Sol1
const checkPermSol1 = (str1, str2) => {

	if (str1 === null || str1 === undefined || str2 === null || str2 === undefined){
		return false;
	}

	if (str1.length != str2.length) {
		return false;
	}

	const sortedStr1 = sortStr(str1);
	const sortedStr2 = sortStr(str2);

	return sortedStr1 === sortedStr2;
}
//Space O(n)
//Time O(n logn) because of time it takes to sort


console.log(" ")
//Sol2
const checkPermSol2 = (str1, str2) => {
	if (str1 === null || str1 === undefined || str2 === null || str2 === undefined){
		return false;
	}

	if (str1.length != str2.length) {
		return false;
	}

	let sortedStr1 = str1.split("").sort().join("");
	let sortedStr2 = str2.split("").sort().join("");
	return sortedStr1 === sortedStr2;
}
//Space O(n)
//Time O(n logn) because of time it takes to sort


console.log("");
/*
For a more efficient solution, where time is O(n), we can use the understanding that if for 2 words, if the char count is the same, its a permutation.
Use this property, compare char counts of the 2 strings.
*/
/* Assumptions
1) Permutation comparision is case sensitive.
2) White space matters. So "god" is a permutation of "dog" but not of "god ".
3) Strings are ASCII strings
*/

//Sol3
const checkPermSol3 = (str1, str2) => {
	if (str1 === null || str1 === undefined || str2 === null || str2 === undefined){
		return false;
	}

	if (str1.length === str2.length) {
		let letterCount = Array(128).fill(0);

		for (let i= 0; i < str1.length; i++) {
			letterCount[str1.charCodeAt(i)] ++;
		}

		for (let i = 0; i < str2.length; i++) {
			letterCount[str2.charCodeAt(i)] --;
			if(letterCount[str2.charCodeAt(i)] < 0) {
				return false;
			}
		}

		return true;
	}
	else {
		return false;
	}


}
// console.log(checkPermSol3("god", "dog"));
// console.log(checkPermSol3("god ", "dog"));
// console.log(checkPermSol3("aba aa", "ab aaa"));
// console.log(checkPermSol3("abg aa", "ab aaa"));
//Space O(n)/ or O(1) as it will always be 128/256 or 2^21.
//Time 2 * O(n) = O(n)

module.exports = { checkPermSol1, checkPermSol2, checkPermSol3};