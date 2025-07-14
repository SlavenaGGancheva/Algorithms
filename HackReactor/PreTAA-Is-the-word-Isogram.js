/*
Is the Word an Isogram?
An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

Examples
isIsogram("Algorism") ➞ true

isIsogram("PasSword") ➞ false
// Not case sensitive.

isIsogram("Consecutive") ➞ false
Notes
Ignore letter case (should not be case sensitive).
All test cases contain valid one word strings.
*/

// SOLUTION
function isIsogram(str) {
	var passing = true;
	var str2 = str.toLowerCase();
	var counts = {};
	for (var i = 0; i < str2.length; i++) {
		var letter = str2[i];
		if (counts[letter] === undefined) {
			counts[letter] = 1;
		} else {
			counts[letter]++;
		}
	  if (counts[letter] > 1) {
		  return passing = false;
	  }
  }  
	return passing;
}

// EXAMPLE SOLUTION
// function isIsogram(str) {
//   if (typeof str === undefined) {
//     return true;
//   }
//   var passing = true;
//   var str2 = str.toLowerCase()
//   var counts = {};
//   for (i = 0; i < str2.length; i++) {
//     var letter = str2[i];
//     if (counts[letter]) {
//       counts[letter] ++;
//     } else {
//       counts[letter] = 1;
//     }
//     if (counts[letter] > 1) {
//       return passing = false;
//     }
//   }
//   return passing;
// }


console.log(isIsogram("Algorism")); // ➞ true
console.log(isIsogram("PasSword")); // ➞ false
console.log(isIsogram("Consecutive")); // ➞ false