/*
Check permutation
Given two strings, write a methof to decide if one os a permutation of the other.
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
8) "aba", "aa" -> false
*/

const sortStr = (inStr) => {
	let strArray = inStr.split("");
	strArray = strArray.sort();
	return strArray.join("");
}

//Sol1
const checkPermSol1 = (str1, str2) => {
	if (str1.length != str2.length) {
		return false;
	}

	const sortedStr1 = sortStr(str1);
	const sortedStr2 = sortStr(str2);

	return sortedStr1 === sortedStr2;
}
console.log(checkPermSol1("god", "dog"));
console.log(checkPermSol1("god ", "dog"));
console.log(checkPermSol1("aba aa", "ab aaa"));
//Space O(n)
//Time O(n logn) because of time it takes to sort


console.log(" ")
//Sol2
const checkPermSol2 = (str1, str2) => {
	if (str1.length != str2.length) {
		return false;
	}

	let sortedStr1 = str1.split("").sort().join("");
	let sortedStr2 = str2.split("").sort().join("");
	return sortedStr1 === sortedStr2;
}
console.log(checkPermSol2("god", "dog"));
console.log(checkPermSol2("god ", "dog"));
console.log(checkPermSol2("aba aa", "ab aaa"));
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
const Sol3 = (str1, str2) => {
	if (str1.lenght !== str2) {
		return false;
	}

	letterCount = Array(128).filled(0); [a,b,g, " "];

	for (i= 0; i < str1.length; i++) {
		letter[str1.charCountAt(i)] ++;
	}

	for (i = 0; i < str2.length; i++) {
		letter[str2.charCountAt(i)] --;
		if(letter[str2.charCountAt[i]] < 0) {
			return false;
		}
	}

	return true;
}
console.log(checkPermSol2("god", "dog"));
console.log(checkPermSol2("god ", "dog"));
console.log(checkPermSol2("aba aa", "ab aaa"));
console.log(checkPermSol2("abg aa", "ab aaa"));
//Space O(n)/ or O(1) as it will always be 128/256 or 2^21.
//Time 2 * O(n) = O(n)

