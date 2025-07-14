/* 
Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn! '
*/

function flipPairs(input) {
  var flippedInput = "";
  // iterate over the string input incrementing by 2
  for (var i = 0; i < input.length; i+=2) {
    // check if next character is undefined
    if (input[i + 1] === undefined) {
      // grab current character and add to result
      flippedInput += input[i];
      // break;
      break;
    }
    // grab next character add to result
    flippedInput += input[i + 1];
    // grab current character and add to result
    flippedInput += input[i];
  } 
  // return result
  return flippedInput
}



function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}] "${expected}", but goy "${actual}"`);
  }
}


var input_1 = 'check out how interesting this problem is, it\'s insanely interesting!';
var actual_1 = flipPairs(input_1);
var expected_1 = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
assertEqual(actual_1, expected_1, 'should flip pairs for large sentence with mixed characters');

var input_2 = 'abcdef';
var actual_2 = flipPairs(input_2);
var expected_2 = 'badcfe';
assertEqual(actual_2, expected_2, 'should flip pairs for small word with only letters');

