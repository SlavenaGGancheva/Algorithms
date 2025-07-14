/*
Get Student with Best Test Avg.
Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.

Examples
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"
Notes
All students in an object will have the same amount of test scores. So no student will have taken more tests than another.
*/

function getBestStudent(grades) {
	// create an array on the students names
  // var student = Object.keys(grades);
	var maxAvg = 0;
	var bestStudent;
	for (var name in grades) {
		var studentGrades = grades[name];
		var currentAvg = getAvg(studentGrades);
		if (currentAvg > maxAvg) {
			maxAvg = currentAvg;
			bestStudent = name;
		}
	}
	return bestStudent;
}

function getAvg(arr) {
	var sum = 0; 
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]; 
	}
	return sum / arr.length;
}

console.log(getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
})); // ➞ "John"
console.log(getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
})); // ➞ "Mike"
console.log();