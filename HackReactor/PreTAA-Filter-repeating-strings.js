/*

Filter Repeating Character Strings
Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

Examples
identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
➞ ["aaaaaa", "d", "eeee"]

identicalFilter(["88", "999", "22", "545", "133"]) 
➞ ["88", "999", "22"]

identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ []
Notes
A string with a single character is trivially counted as a string with repeating identical characters.
If there are no strings with repeating identical characters, return an empty array (see example #3)

*/

function identicalFilter(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			var repeatChar = true;
			if (arr[i][0] !== arr[i][j]) {
				repeatChar = false;
				break
			}
		}
		if (repeatChar) {
			result.push(arr[i]);
		}
	}
	return result;
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
console.log(identicalFilter(["88", "999", "22", "545", "133"]));
console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));

