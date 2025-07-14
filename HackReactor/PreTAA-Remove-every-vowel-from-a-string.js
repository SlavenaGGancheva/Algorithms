/*

Create a function that takes a string and returns a new string with all vowels removed.

-------------Examples-----------------------
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
Notes
"y" is not considered a vowel.

*/

// SOLUTION 1
function removeVowels(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== 'a' && 
        str[i] !== 'e' && 
        str[i] !== 'i' && 
        str[i] !== 'o' && 
        str[i] !== 'u' && 
        str[i] !== 'I' && 
        str[i] !== 'A' && 
        str[i] !== 'E' && 
        str[i] !== 'U' && 
        str[i] !== 'O') {
		  result += str[i];
		}
	}
	return result;
}

console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
console.log(removeVowels("We're gonna build a wall!"));
console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));


// SOLUTION 2
// function removeVowels(str) {
// 	str = str.split('');
// 	for (var i = 0; i < str.length; i++) {
// 		if (str[i] === 'a' ||
//         str[i] === 'e' || 
//         str[i] === 'i' || 
//         str[i] === 'o' ||
//         str[i] === 'u' || 
//         str[i] === 'I' || 
//         str[i] === 'A' || 
//         str[i] === 'E' || 
//         str[i] === 'U' || 
//         str[i] === 'O') {
//         str.splice(i, 1);
// 		    i--;
// 		}
// 	}
// 	return str.join('');
// }



