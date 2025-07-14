// Flip every pair of characters in a string.


// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(string) {
  var result = "";
  for (var i = 0; i < string.length; i+=2) {
    if (string[i + 1] === undefined) {
      result += string[i];
      break;
    }
    result += string[i + 1];
    result += string[i];
  }
  return result;
}


var testName = 'Flip pairs in a string'
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log("FAILED [" + testName + "] Expected " + '"' + expected + '", but got "' + actual + '"');
  }
}

// TEST CASES

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var actual = flipPairs(input);
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"

var input1 = 'games'
var actual1 = flipPairs(input1);
var expected1 = 'agems'

assertEqual(actual, expected, testName);
assertEqual(actual1, expected1, testName);
