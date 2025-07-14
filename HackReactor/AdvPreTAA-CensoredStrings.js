/*
C*ns*r*d Str*ngs
Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

Given a censored string and a string of the censored vowels, return the original uncensored string.

Example
uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"

uncensor("abcd", "") ➞ "abcd"

uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

Notes
The vowels are given in the correct order.
The number of vowels will match the number of * characters in the censored string.
*/


function uncensor(str, vowels) {
  var result = "";
	var j = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "*") {
			result += vowels[j];
			j++;
		} else {
			result += str[i];
		}
	}
	return result;
}

// function uncensor(str, vowels) {
// 	str = str.split("");
// 	vowels = vowels.split("");
// 	for (var i = 0; i < vowels.length; i++) {
// 		str[str.indexOf("*")] = vowels[i];
// 	}
// 	return str.join("");
// }

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")); // ➞ "Where did my vowels go?"
console.log(uncensor("abcd", "")); // ➞ "abcd"
console.log(uncensor("*PP*RC*S*", "UEAE")); // ➞ "UPPERCASE"