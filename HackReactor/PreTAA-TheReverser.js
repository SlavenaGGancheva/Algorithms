/*
The Reverser!
The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

Examples
reverse("Hello World") ➞ "DLROw OLLEh"

reverse("ReVeRsE") ➞ "eSrEvEr"

reverse("Radar") ➞ "RADAr"
Notes
There will be no punctuation in any of the test cases.
*/

function reverse(str) {
	var result = "";
	for (var i = str.length - 1; i >= 0; i--) {
		if (str[i] === str[i].toUpperCase()) {
			result += str[i].toLowerCase();;
		} else {
			result += str[i].toUpperCase();
		}	
	}
	return result;
}

// function reverse(str) {
// 	let result = "";
//   for(let i = str.length-1; i>=0; i--) {
//     if(str[i] === str[i].toUpperCase()){
//       result+=str[i].toLowerCase();
//     }else{
//       result+=str[i].toUpperCase();
//     }
//   }
//   return result;
// }

console.log(reverse("Hello World"));
console.log(reverse("ReVeRsE"));
console.log(reverse("Radar"));