//##########################
// Day 4 - Regular
//Given an array of numbers and a target number, return true if there are two numbers in the array that sum up to the target value; return false otherwise

function twoSum(arr, target) {
// create a cache to store difference between target and current number (target - current number)
const difference = [];
// loop over arr
for (let i = 0; i < arr.length; i++) {
  // on each iteration:
  // check if current number is in the cache
  console.log("difference: ", difference)
  if (difference.includes(arr[i])) {
    // if yes, return true
    return true;
  }
  
  // add curent number's difference to my cache
  difference.push(target - arr[i]);
}
  // console.log('difference arr: ', difference)
// if loop runs its course and does not return true, return false
return false;
}

function twoSumTests() {
  // console.log(twoSum([1,2,5,7], 3), ' -> ', true);
  // console.log(twoSum([1,2,5,7], 5), ' -> ', false);
  // console.log(twoSum([1], 5), ' -> ', false);
  console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
}

// twoSumTests() // uncomment to test
//########################################
/*
Day 4 - Advanced
Given an array of numbers, return an array of sums where the value at each index of the output array is the sum of the values at all other indices of the input array


Ex: 
[1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4

// Bonus 1: Get exclusiveSum to work without nested loops

Make sure your solution can handle zeros!

*/

function exclusiveSum(arr) {
  if (arr.length === 0) return [];
  // get the total sum of all numbers in array
  const sum = arr.reduce((acc, curr) => acc + curr);

  // return -> build up a new array based on subtracting out current number we're looking at in a loop over original array (.map)

  return arr.map(num => sum - num);
}

// console.log(exclusiveSum([1, 3, 4, 2]), ' -> expected:', [9, 7, 6, 8]);
// console.log(exclusiveSum([1, 2, 5]), ' -> ', [7, 6, 3]);
// console.log(exclusiveSum([1, 2, 5, 0]), ' -> ', [7, 6, 3, 8]);
// console.log(exclusiveSum([1]), ' -> ', [0]);
// console.log(exclusiveSum([]), ' -> ', []);







// Bonus 2: Modify this function to be 'exclusive product'
// Ex: 
// [1, 3, 4, 2] -> [24, 8, 6, 12]

function exclusiveProduct(arr) {
  // if (!Array.isArray(arr)) throw new TypeError('please input a valid array');
  if (arr.length === 1) return [0];
  // initialize products array (will hold all products)
  const products = [];
  // loop over input arr
  arr.forEach((num, idxI) => {
    // initialize product at 1
    let prod = 1;
    // for each, multiply product by all other elements in array
    arr.forEach((num2, idxJ) => {
      // check if indexes are not the same, if so, multiply current number into prod
      if (idxI !== idxJ) {
        prod *= num2;
        // prod = prod * num2
      }
    })
    // push current product to master array
    products.push(prod);
  })
  // return master array
  return products;
}

console.log(exclusiveProduct([1, 3, 4, 2]), ' -> ', [24, 8, 6, 12]);
console.log(exclusiveProduct([1, 2, 5]), ' -> ', [10, 5, 2]);
console.log(exclusiveProduct([1, 2, 5, 0]), ' -> ', [0, 0, 0, 10]);
console.log(exclusiveProduct([1]), ' -> ', [0]);
console.log(exclusiveProduct([]), ' -> ', []);
console.log(exclusiveProduct(4), ' -> ', error);