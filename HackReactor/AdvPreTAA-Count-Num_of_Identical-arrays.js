/*
Count Number of Identical Arrays
Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.

Examples
countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2

countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0

countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3
*/

// NOT WORKING SOLUTION
function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	var count = 0;
  var areEqual = false;
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			for (var k = 0; k < arr3.length; k++) {
				for (var l = 0; l < arr4.length; l++) {
					if (arr1[i] === arr2[j] &&
						 arr1[i] === arr3[k] &&
						 arr1[i] === arr4[l]) {
						 areEqual = true;
					}
				}
			}
		}
	}
	return count;
}


console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])); // ➞ 2
console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])); // ➞ 0
console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])); // ➞ 3