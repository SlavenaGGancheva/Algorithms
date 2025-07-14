/*
White Spaces Between Lower and Uppercase Letters
Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

Examples
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
Notes
Each word in the phrase will be at least two characters long.
*/

function insertWhitespace(s) {
	var result = "";
	for (var i = 0; i < s.length; i++) {
		if (s[i] === s[i].toLowerCase() && 
        s[i+1] !== undefined && 
				s[i+1] === s[i+1].toUpperCase()) {
			result += s[i] + " ";
		} else {
			result += s[i];
		}
	}
	return result;
}
// // EXAMPLE SOLUTION
// function insertWhitespace(s) {
// 	  let spacedS = "";
//   for (let i = 0; i < s.length; i++) {
//     if (
//       s[i] === s[i].toLowerCase() &&
//       s[i + 1] !== undefined &&
//       s[i + 1] === s[i + 1].toUpperCase()
//     ) {
//       spacedS += s[i] + " ";
//     } else {
//       spacedS += s[i];
//     }
//   }
//   return spacedS;
// }



console.log(insertWhitespace("SheWalksToTheBeach"));
console.log(insertWhitespace("MarvinTalksTooMuch"));
console.log(insertWhitespace("TheGreatestUpsetInHistory"));