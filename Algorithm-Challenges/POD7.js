/*
# POD Day 7 - Self Recording - Check if Sorted 

Given an array of integers, check to see if the array is already sorted (return true or false)

Focus on clearly explaining your solution

Once you've solved it iteratively, try to solve it recursively or using functional programming

If you have time, write and walk through some test cases for your code.

What's the time complexity of your solution?
*/



//////////// SOLUTION 1 //////////////////////
function arraySortedOrNot(arr) {
  let sorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      sorted = false;
      break;
    } 
  }
  return sorted;
}

console.log(arraySortedOrNot([1, 2, 3, 4, 5]), `-> true`);
console.log(arraySortedOrNot([1, 3, 4, 2, 5]), `-> false`);
console.log(arraySortedOrNot([5, 4, 3, 2, 1]), `-> false`);
console.log(arraySortedOrNot([9, 27, 90, 1, 45, 3]), `-> false`);
//console.log(sorted([]));