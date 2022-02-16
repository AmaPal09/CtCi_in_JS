/*
String Rotation
Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring(e.g., "waterbottle" is a rotation of "erbottlewat").
*/

/*
Explaination:
If s2 is a rotation of s1 then the question is at what point the rotation starts.
Eg:
s1 = xy = waterbottle (xy string parts created at the point where rotation starts )
x = wat
y = erbottle
s2 = yx = erbottlewat

Hence, check if a way to split s1 into x & y such that xy = s1 and yx = s2.
But irrespective of the division, yx will always be the substring of xyxy.
Therefore s2 will always be the substring on s1s1.
*/

/*
Questions:
*/

/*
Assumption:
*/

/*
Example:
1) " ", "a" -> false
2) "aabb", "aab" -> false
3) "waterbottle", "erbottlewat" -> true
4) " ", " " -> true
*/


//Helper function
const isSubstring = (s1, s2) => {
	return s1.includes(s2);
}


//Sol1
const strRotSol1 = (str1, str2) => {

	if (str1 === null || str2 === null || str1 === undefined || str2 === undefined) {
		return false;
	}

	if ((str1.length != str2.length) || ((str1.length == 0)||(str2.length == 0))) {
		return false;
	}

	let str1str1 = str1 + str1;
	return isSubstring(str1str1, str2);
}
// console.log(strRotSol1("", ""));
// console.log(strRotSol1(" ", " "));
// console.log(strRotSol1(" ", "a"));
// console.log(strRotSol1("aabb", "aab"));
// console.log(strRotSol1("waterbottle", "erbottlewat"));

module.exports = {strRotSol1};