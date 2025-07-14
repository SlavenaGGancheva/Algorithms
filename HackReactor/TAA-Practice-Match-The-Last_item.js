/*
Match the Last Item
Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
Notes
The array is always filled with items.
*/


function matchLastItem(arr) {
	var concatenated = "";
	for (var i = 0; i < arr.length - 1; i++) {
		concatenated = arr[i].toString();
	}
  console.log(concatenated)
	if (arr[arr.length - 1].toString() === concatenated) {
    console.log(arr[arr.length - 1].toString())
    console.log((arr[arr.length - 1].toString() === concatenated))
		return true;
	} else {
		return false;
	}
}


console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); // ➞ true
console.log(matchLastItem([1, 1, 1, "11"])); // ➞ false
console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); // ➞ true