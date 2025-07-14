// Time limit 45 minutes
// Write a function removeVowels that takes a string and returns a string with all the vowels (a, e, i, o, u) removed.

function removeVowels(str) {
	str = str.split('');
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'a' ||
        str[i] === 'e' || 
        str[i] === 'i' || 
        str[i] === 'o' ||
        str[i] === 'u' || 
        str[i] === 'I' || 
        str[i] === 'A' || 
        str[i] === 'E' || 
        str[i] === 'U' || 
        str[i] === 'O') {
        str.splice(i, 1);
		    i--;
		}
	}
	return str.join('');
}

console.log(removeVowels("Coding"));  //"Cdng"
console.log(removeVowels("August 31")); //"gst 31"
console.log(removeVowels("Today is the day!")); //"Tdy s th dy!"