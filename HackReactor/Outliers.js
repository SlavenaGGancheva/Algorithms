/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

*/


function detectOutlierValue(stringOfNums) {
  // split input into an array of stringNum
  var arrayOfStringNums = stringOfNums.split(" ");
  // create arrays for odds and evens
  var odds = [];
  var evens = [];
  // iterate over the array of stringNums
  for (var i = 0; i < arrayOfStringNums.length; i++) {
    // convert stringNum to a number
    var currentNum = Number(arrayOfStringNums[i]);
    // check if current stringNum is even or odd
    if (currentNum % 2 === 0) {
      evens.push({
        value: currentNum,
        index: i + 1
      })
    } else {
      odds.push({
        value: currentNum,
        index: i + 1
      })
    }
    // create an object for that stringNum, with value and index where we found it
    // push it to the appropriate odds or evens array
  }
  // check which array has a length of 1
  if (odds.length = 1) {
    return odds[0].index;
  } else {
    return evens[0].index;
  }
  // return that array's only value's index value 
}


function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
   console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
}

var actual_1 = detectOutlierValue("2 4 7 8 10"); // => 3 
var expected_1 = 3
assertEqual(actual_1, expected_1, 'should work with sole odd number');


var actual_2 = detectOutlierValue("1 10 1 1");  //=> 2 
var expected_2 = 2
assertEqual(actual_2, expected_2, 'should work with sole even number')



// Algorithm
  // split input into an array of stringNums
  // create arrays for odds and evens
  // iterate over array of stringNums
    // check if current stringNum is even or odd
    // create an object for that stringNum, with value and index of where we found it
    // push it to the appropriate odds or evens array

  // check which array has a length of 1
  // return that array's only value's index value

/*

function detectOutlierValue(stringOfNums) {
  // split input into an array of stringNums
  var arrayOfStringNums = stringOfNums.split(" ");
  // create arrays for odds and evens
  var odds = [];
  var evens = [];
  // iterate over array of stringNums
  for (var i = 0; i < arrayOfStringNums.length; i++) {
    // convert current stringNum to a number
    var currentNum = Number(arrayOfStringNums[i]);
    // check if current stringNum is even or odd
    if (currentNum % 2 === 0) {
      evens.push({
        value: currentNum,
        index: i + 1
      })
    } else {
      odds.push({
        value: currentNum,
        index: i + 1
      })
    }
    
    // create an object for that stringNum, with value and index of where we found it
    // push it to the appropriate odds or evens array

  // check which array has a length of 1
  if (odds.length === 1) {
    return odds[0].index;
  } else {
    return evens[0].index;
  }
  // return that array's only value's index value
  }
}

  */