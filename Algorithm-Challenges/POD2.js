//####################################
// POD Day 2 - Regular - addingToX & arrayToX

// Challenge Part 1
// Create a function called addingToX that accepts a number as an argument.

// It will return the sum of every integer from 1 up to and including the input number.

// addingToX(0) will return 0
// addingToX(3) will return 6
// addingToX(1) will return 1
// addingToX(2) will return 3
// addingToX(4) will return 10
// addingToX(5) will return 15
// addingToX(10) will return 55

function addingToX(num) {

  if (typeof num !== 'number') {
    throw new TypeError('wrong input type, make sure the datatype passed in is a number');
  }
  // keep sum variable
  let sum = 0;
  // loop upwards to num including num
  for (let i = 1; i <= num; i++) {
    // add current num to sum
    sum += i;
  }
  // return sum
  return sum;
}

// console.log(addingToX(0)); //  0
// console.log(addingToX(1)); // 1
// console.log(addingToX(2)); // 3
// console.log(addingToX(3)); // 6
// console.log(addingToX(4)); // 10
// console.log(addingToX(5)); // 15
// console.log(addingToX(10)); // 55
// console.log(addingToX('ten')); // error

//######################
// POD Day 2 - Advanced - modeMean

// Given an array of numbers, determine if the mode and mean of the array are equivalent

//  Caveats:
//  Math.floor the mean 
//  If there are multiple modes, use the max of the modes 
//  (the number that appears most often)
//  Return true or false
//  modeMean([1, 2, 2, 3, 3, 4, 6]) => mode 3. mean 3. true

function getMean(arr) {
  // get sum of all elements in array
  const sum = arr.reduce((sum, curr) => sum + curr);
  // divide that sum by arr.length
  const divided = sum / arr.length;
  // floor it and return 
  return Math.floor(divided);
}

function getMode(arr) {
  // create a cache of numbers and their # of times they occur in the passed in array
  const cache = {};
 
  //Loop over the given array
  arr.forEach(num => {
    cache[num] ? cache[num] += 1 : cache[num] = 1; // 
  })


  //Input: [1, 1, 2, 2, 3, 3, 4, 5]

  // declare variables that will store current greatest mode we've seen so far and its corresponding # of occurences
  let maxKey = -Infinity;
  let maxVal = 0;
  // looping over cache
  for (let key in cache) {
    let val = cache[key];

    // check if any given val we've seen so far is greater than current maxVal and current Number(key) is greater than current maxKey, set maxKey to current Number(key) and maxVal to current val
    if (val >= maxVal && Number(key) > maxKey) {
      maxKey = Number(key);
      maxVal = val;
    }
    
  }

  // return maxKey
  return maxKey;
}

// console.log(getMode([1, 2, 2, 3, 3, 4, 5]));

//now we create a HOF that just returns whether those two evaluated results from invoking both functions are the same or not
function modeMean(arr) {
  return getMean(arr) === getMode(arr);
}

// console.log(modeMean([1, 2, 2, 3, 3, 4, 5])); // mode 3. mean 2. false
// console.log(modeMean([1, 2, 2, 3, 3, 4, 6])); // mode 3. mean 3. true






// console.log(modeMean([6, 4, 3, 3, 2, 2, 1])); // true