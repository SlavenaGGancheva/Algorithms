/*

Index Shuffle
Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
Examples
indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"
Notes
0 should be treated as an even number.


*/
// Solution 1
function indexShuffle(str) {
	var result = "";
	var evenIndexed = "";
	var oddIndexed = "";
	for (var i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			evenIndexed += str[i];
		} else {
		  oddIndexed += str[i];	
		}
		result = evenIndexed + oddIndexed;
	}
	return result;
}

console.log(indexShuffle("abcdefg"));

// Solution 2
// function indexShuffle(str) {
// 	let even =[];
// 	let odd = [];
// 	for(let i=0; i<str.length; i++){
// 		if(i%2===0){
// 			even.push(str[i]);
// 		}else{
// 			odd.push(str[i]);
// 		}
// 	}
// 	return even.concat(odd).join('');
// }

// even.concat(odd).join('');

var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'