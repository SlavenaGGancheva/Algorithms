/*

Complete the function splitPairs such that it splits the input string into pairs of characters. If the input string has a length that is odd, then it should replace the missing second character of the final pair with an underscore _. Note, an empty string should make your function produce an empty array.

*/

function splitPairs(input) {
  var result = [];
  if (input.length % 2 !== 0) {
    input += '_';
  }
  for (var i = 0; i < input.length; i+=2) {
    result.push(input[i] + input[i+1]);
  }
  return result;
}

console.log(splitPairs('abcdef'));
console.log(splitPairs('abcde'));