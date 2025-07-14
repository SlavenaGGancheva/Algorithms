/* Time Limit 45 minutes
  Write a function toggleCase which takes in a string and returns a new string where all the lowercase 
  letters are changed to uppercase and all the uppercase letters are changed to lowercase.
*/

// toggleCase('MaRio'); //'mArIO'
// toggleCase('PRP'); //'prp'
// toggleCase('Good news, everyone!'); //'gOOD NEWS, EVERYONE!' 

function toggleCase(str) {
  var newString = '';
  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];
    if (currentChar === currentChar.toLowerCase()) {
      newString += currentChar.toUpperCase();
    } else {
      newString += currentChar.toLowerCase();
    }
  }
  return newString;
}

// function toggleCase(str) {
//   // split string into an array of letters
//   var lettersOfStr = str.split('');

//   // iterate over array to check case 
//     // if upper convert to lower
//       // else convert to upper
//   // ignore characters other than number

//   for (var i = 0; i < lettersOfStr.length; i++) {
//     if (lettersOfStr[i] === lettersOfStr[i].toUpperCase()) {
//       lettersOfStr[i] === lettersOfStr[i].toLowerCase()
//     } else {
//       lettersOfStr[i] === lettersOfStr[i].toUpperCase()
//     }
//   }

//   // convert array back to string
//   var toggledStr = lettersOfStr.join('');
//   return toggledStr;
// }

console.log(toggleCase('MaRio')); 
console.log(toggleCase('PRP')); 
console.log(toggleCase('Good news, everyone!'));
console.log(toggleCase('123,.:@%'));