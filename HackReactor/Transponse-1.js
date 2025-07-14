/*

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should output:
H W  
e o  
l r  
l l  
o d

*/

function transposeTwoStrings(arrayInput) {
  // create alias for first string
  var firstString = arrayInput[0];
  // create alias for second string
  var secondString = arrayInput[1];
  
  // create variable for the longer string
  var longerString;
  // determine longer string
  if (firstString >= secondString) {
    longerString = firstString
  } else {
    longerString = secondString;
  }

  // create a result string
  var transposedString = '';

  // iterate over the length of the longer string
  for (var i = 0; i < longerString.length; i++) {
    // set first to first string's current letter or empty space
    var firstChar = firstString[i] || " ";
    // set second to second string's current letter or an empty space
    var secondChar = secondString[i] || " ";
    // add first, space, second, and newLine to result string
    transposedString += firstChar + " " + secondChar + '\n';
  }
  // return result string
  return transposedString;
}




console.log(transposeTwoStrings(['Hello','World']));
console.log('\n');
console.log(transposeTwoStrings(['some','things']));
console.log('\n');
console.log(transposeTwoStrings(['things','some']));


