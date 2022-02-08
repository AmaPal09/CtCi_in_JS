/*
URLify
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you aare given the "true" length of the string. (Note: if implementing in java please use a character array so that you can perform this operation in place.)
*/

/*
Understanding:
when " " is replaced by "%20" 1 char is replaced by 3. So for every space, 2 extra chars added to the string
*/

/*
Examples:
1) "Mr John Smith  ", 13
	-------------
	13
	---------------
	15
*/


//Sol1
const urlifySol1 = (url, trueLength) => {
	let urlArray = url.trim().split("");
	for (let i = 0; i < urlArray.length; i++) {
		if (urlArray[i] === " ") {
			urlArray[i] = "%20";
		}
	}
	return urlArray.join("");
}
console.log(urlifySol1("Mr John Smith  ", 13));
console.log(urlifySol1("Hi there, Sam     ", 13));
//Issues: only one of 2 inputs used
//no idea of the processing time for trip, split at backend
//Space O(n)
//Time appears to be O(n).



//Helper function
const countOfChar = (inStr, start, end, target) => {
	let count = 0;
	for (let i = 0; i < end; i++) {
		if (inStr[i] == target) {
			count++;
		}
	}
	return count
}


//Sol2
const urlifySol2 = (url, trueLength) => {
	let numOfSpaces = countOfChar(url, 0, trueLength, " ");
	//This would be the new length of the string
	//This also eliminates possibility of trailing spaces after trueLength
	let newLength = trueLength + (numOfSpaces * 2);

	let urlArray = Array(newLength).fill(undefined);
	let newIndex = 0;
	let i = 0;

	while(i < trueLength) {
		if (url[i] == " ") {
			urlArray[newIndex] = "%";
			urlArray[newIndex+1] = "2";
			urlArray[newIndex+2] = "0";
			newIndex += 3
		}
		else {
			urlArray[newIndex] = url[i];
			newIndex += 1 ;
		}
		i ++;
	}

	return urlArray.join("");
}
console.log(urlifySol2("Mr John Smith  ", 13));
console.log(urlifySol2("Hi there, Sam     ", 13));

//Sol4
//This is a python solution. String index replacement wont happen in JS.
// const urlifySol4 = (url, trueLength) => {
// 	/*Edit the string from the end and work backwards. This helps use the extra buffer and truelenght.
// 	Approach: Count the number of spaces.
// 	2 extra spaces for each space.
// 	walk backward editing the string
// 	when there is space, replace with %20, else copy as is.
// 	*/

// 	let numOfSpaces = countOfChar(url, 0, trueLength, " ");
// 	let newIndex = trueLength - 1 + (numOfSpaces * 2);

// 	//Remove trailing spaces
// 	if (newIndex+1 < url.length) {
// 		url[newIndex+1] = '\0';
// 	}

// 	for (let oldIndex = trueLength-1; oldIndex >= 0; oldIndex -= 1) {
// 		if (url[oldIndex] == " ") {
// 			url[newIndex] = "0";
// 			url[newIndex-1] = "2";
// 			url[newIndex-2] = "%";
// 			newIndex -= 3;
// 		}
// 		else {
// 			url[newIndex] = url[oldIndex];
// 			newIndex -= 1;
// 		}
// 	}
// 	return url
// }

// let s1 = "Mr John Smith  ";
// let s11 = urlifySol4(s1, 13);
// console.log(s11);
// let s2 = "Hi there, Sam      "
// urlifySol4(s2, 13);
// console.log(s2);
//Issues: only one of 2 inputs used
//no idea of the processing time for trip, split at backend
//Space O(n)
//Time appears to be O(n).


//Sol3
//This is a python solution. String index replacement wont happen in JS.
// const urlifySol3 = (url, trueLength) => {
// 	let numOfSpaces = countOfChar(url, 0, trueLength, " ");
// 	let newLength = trueLength - 1 + (numOfSpaces * 2);

// 	let newUrl = Array(newLength).fill(" ").join();
// 	let newIndex = 0;
// 	for(i = 0; i < trueLength; i++) {
// 		if(url[i] == " ") {
// 			newUrl[newIndex] = "%";
// 			newUrl[newIndex] = "2";
// 			newUrl[newIndex] = "0";
// 			newIndex += 3;
// 		}
// 		else {
// 			newUrl[newIndex] = url[i];
// 			newIndex += 1;
// 		}
// 	}
// 	return newUrl;
// }
// console.log(urlifySol3("Mr John Smith  ", 13));
// console.log(urlifySol3("Hi there, Sam     ", 13));