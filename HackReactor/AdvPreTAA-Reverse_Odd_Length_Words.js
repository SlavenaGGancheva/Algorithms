/*
Reverse the Odd Length Words
Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used.
*/

function reverseOdd(str) {
	var arr = str.split(" ");
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length % 2 !== 0) {
			// create an array of the word, reverse it, make it a string again
			var reversed = arr[i].split("").reverse().join("");
			result.push(reversed);
		} else {
			result.push(arr[i]);
		}
	}
	return result.join(" ");
}


console.log(reverseOdd("Bananas")); // ➞ "sananaB"
console.log(reverseOdd("One two three four")); // ➞ "enO owt eerht four"
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); // ➞ "Make sure you only reverse words of odd length"