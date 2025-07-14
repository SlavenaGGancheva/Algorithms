/*
Replace Vowel with Another Character
Create a function that takes a string and replaces the vowels with another character.

a = 1
e = 2
i = 3
o = 4
u = 5
Examples
replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1r3"
Notes
The input will always be in lowercase.
  */

function replaceVowel(word) {
	word = word.split("");
	for (var i = 0; i < word.length; i++) {
		if (word[i] === 'a') {
			word[i] = 1; 
		} else if (word[i] === 'e') {
			word[i] = 2;
		} else if (word[i] === 'i') {
			word[i] = 3;
		} else if (word[i] === 'o') {
			word[i] = 4
		} else if (word[i] === 'u') {
			word[i] = 5
		} else {
			word[i] = word[i];
		}
	}
	return word.join("");
}

console.log(replaceVowel("karachi")); // ➞ "k1r1ch3"
console.log(replaceVowel("chembur")); // ➞ "ch2mb5r"
console.log(replaceVowel("khandbari")); // ➞ "kh1ndb1r3"
