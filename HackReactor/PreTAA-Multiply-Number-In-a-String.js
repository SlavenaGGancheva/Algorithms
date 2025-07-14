/*
Multiplying Numbers in a String
Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples
multiplyNums("2, 3") ➞ 6

multiplyNums("1, 2, 3, 4") ➞ 24

multiplyNums("54, 75, 453, 0") ➞ 0

multiplyNums("10, -2") ➞ -20
Notes
Bonus: Try to complete this challenge in one line!
*/

function multiplyNums(nums) {
	nums = nums.split(", ");
  console.log(nums);
  var product = 1;
	for (var i = 0; i < nums.length; i++) {
		product *= Number(nums[i]);
	}
	return product;
}


console.log(multiplyNums("2, 3"));
console.log(multiplyNums("1, 2, 3, 4"));
console.log(multiplyNums("54, 75, 453, 0"));
console.log(multiplyNums("10, -2"));