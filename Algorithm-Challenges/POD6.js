//############################
/* POD Day 6 - Regular - Single Number

You are given an array of integers. Every number in the array appears twice, except for one. Find that single one.

Challenge: solve this with linear time complexity

Ex: 

Input: [2, 2, 1]
Output: 1

Input: [4, 1, 2, 1, 2]
Output: 4

Input: [1]
Output: 1
*/

//input: array of numbers
//output: number
function singleNumber(arr) { // [4, 1, 2, 1, 2]
  //declare a cache
  const cache = {};
  //loop through the given array
  arr.forEach(element => {
    //check does this array element exist in the cache
    //if yes: just increment the value of that key
    //if not: just add that element to the cache as the key with the value of 1
    cache[element] ? cache[element] += 1 : cache[element] = 1;
  });
  //loop through the cache
  for (let key in cache) {
    //check does the value in the cache equal 1- if yes return that key
    if (cache[key] === 1) return Number(key);
  }

}



function singleNumberTests() {
  console.log(singleNumber([1, 2, 2]), ' -> ', 1);
  console.log(singleNumber([1]), ' -> ', 1);
  console.log(singleNumber([4, 1, 2, 1, 2]), ' -> ', 4);
}

// singleNumberTests() // uncomment to test

//######################################
/**POD Day 6 - Advanced -** Merge Sorted Arrays 

Given two arrays of integers sorted in ascending order, merge both into a single sorted array. Return the new array.

The new array should contain all elements from the input arrays, including duplicates.

Ex: 

let array1 = [1, 2, 5, 7, 9];
let array2  = [0, 1, 3, 4, 6, 7, 9];
mergeSortedArrays(array1, array2) -> [0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 9, 9]
*/

function mergeSortedArrays(array1, array2) {
  let i = 0;
  let j = 0;
  const sorted = [];
  
  while (i < array1.length || j < array2.length) {
    if (array1[i] && !array2[j] || array1[i] <= array2[j]) {
      sorted.push(array1[i]);
      i++;
    } else {
      sorted.push(array2[j]);
      j++;
    }
  }
  return sorted;
}

let array1 = [-6, 1, 2, 5, 7, 9, 10, 11, 15, 29, 27];
let array2 = [0, 1, 3, 4, 6, 7, 9];

console.log(mergeSortedArrays(array1, array2)) // -> [-6, 0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 9, 9]