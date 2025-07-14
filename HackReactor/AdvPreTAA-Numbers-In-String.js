/*
Numbers in Strings
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without RegEx.
*/  

function numInStr(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		var currentStr = arr[i].split('');
		for (var j = 0; j < currentStr.length; j++) {
			if (Number(currentStr[j])) {
				result.push(arr[i]);
				break;
			}
		}
	}
	return result;
}

console.log(numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // ➞ ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); // ➞ ["test1"]