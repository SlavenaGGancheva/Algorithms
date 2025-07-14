 

function findPairForSum(integers, targetSum) {
  // create an empty 
  var pair = []; 
  // iterate over the integers (outer)
  for (var j = 0; j < integers.length; j++) {
    // iterate from current integer over rest of integers (inner)
    for (var k = j + 1; k < integers.length; k++) {
      // check outer value plus inner (if sum is target sum)
      if (integers[j] + integers[k] === targetSum) {
        // push outer, then inner to result array
        pair.push(integers[j], integers[k]);
      }
    }
  }
  // return result array
  return pair;
}

function assertArraysEqual(actual, expected, testName) {
  var sameLength = actual.length === expected.length;
  var sameValues = true; 
  for (var i = 0; i < expected.length; i++) {
    if(expected[i] !== actual[i]) {
      sameValues = false;
      break;
    }
  }
  if (sameLength && sameValues) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}

var actualFound = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var expectedFound = [4, 5];
assertArraysEqual(actualFound, expectedFound, "should return an array of two integers that sum to target");

var actualNotFound = findPairForSum([3, 34, 17, 12, 5, 1], 11)
var expectedNotFound = [];
assertArraysEqual(actualNotFound, expectedNotFound, "should return an empty array when sum cannot be made");