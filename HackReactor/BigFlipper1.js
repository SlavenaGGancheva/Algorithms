// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'


function flipEveryNChars(string, n) {
  var flipped = "";
  var characters = string.split('');
  for (var i = 0; i < characters.length; i+=n) {
    var currentSlice = characters.slice(i, i + n);
    var reversedSlice = currentSlice.reverse();
    var joinedSlice = reversedSlice.join('');
    flipped += joinedSlice;
  }
  return flipped;
}


// function flipEveryNChars(inputString, n) {
//   // create a result string 
//   var flipped = "";
//   // split input string into an array, on no delimiter
//   var characters = inputString.split("");
//   // iterate over the array of characters by n
//   for (var i = 0; i < characters.length; i+=n) {
//     // slice the array from current possition from current possition plus 
//     var currentSlice = characters.slice(i, i + n);
//     // reverse the array
//     var reversedSlice = currentSlice.reverse();
//     // join the reversed array
//     var joinedSlice = reversedSlice.join("");
//     // add to resulting string to result
//     flipped += joinedSlice;
//   }
//   // return result
//   return flipped;
// }


function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}] "${expected}", but got "${actual}"`);
  }
}

var input = 'a short example';
var actual = flipEveryNChars(input, 5);
var expected = 'ohs axe trelpma'
assertEqual(actual, expected, 'should work with input and n is 5');

var input_1 = 'abcdefghijkl';
var actual_1 = flipEveryNChars(input_1, 4);
var expected_1 = 'dcbahgfelkji'
assertEqual(actual_1, expected_1, 'should work with input and n is 4');






