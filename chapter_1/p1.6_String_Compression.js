/*
String Compression
Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the origunal string. You can assune the string has only uppercase and lowercase letters(a-z)
*/

/*
Examples
1) "aabcccccaaa" -> a2b1c5a3
2) "abcd" -> abcd
3) "aabbc" -> a2b2c
4) "" -> ""
5) "aaAAAbCCcccaaAAA" -> a2A3b1C2c3a2A3

*/

/*
Assumption
String contains only letters= upper and lower case

*/

/*
Explanation

*/

const strCompressSol1 = (inStr) => {

	if ((inStr == "") || (inStr == " ")) {
		return inStr
	}

	let compressedArray = [];
	let firstChar = inStr[0];
	let currCharCtr = 1;

	for (let i = 1;  i < inStr.length; i++) {
		if (inStr[i] === firstChar) {
			currCharCtr++;
		}
		else {
			compressedArray.push(firstChar);
			compressedArray.push(currCharCtr);

			firstChar = inStr[i];
			currCharCtr = 1;
		}

		if (i == inStr.length - 1) {
			compressedArray.push(firstChar);
			compressedArray.push(currCharCtr);
		}
	}

	if (compressedArray.length < inStr.length) {
		return compressedArray.join("");
	}
	else {
		return inStr;
	}
}

console.log(strCompressSol1("aabcccccaaa")); //a2b1c5a3
console.log(strCompressSol1("abcd")); // abcd
console.log(strCompressSol1("aabbccc")); // a2b2c1
console.log(strCompressSol1("")); // ""
console.log(strCompressSol1("aaAAAbCCcccaaAAA")); // a2A3b1C2c3a2A3
