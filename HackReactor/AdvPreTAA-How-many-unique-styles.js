/*
How Many Unique Styles?
There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

Examples
uniqueStyles([
  "Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal"
]) ➞ 9

uniqueStyles([
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul"
]) ➞ 7
Notes
N/A
*/

function uniqueStyles(albums) {
	var result = [];
	var styles = albums.toString().split(",");
	for (var i = 0; i < styles.length; i++) {
		if (result.indexOf(styles[i]) === -1) {
			result.push(styles[i]);
		}
	}
	return result.length;
}

// // NOT WORKING
// function uniqueStyles(albums) {
// 	var result = [];
// 	// var styles = albums.toString().split(",");
// 	for (var i = 0; i < albums.length; i++) {
// 		if (result.indexOf(albums[i]) === -1) {
// 			result.push(albums[i]);
// 		}
// 	}
// 	return result.length;
// }


console.log(uniqueStyles([
  "Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal"
])); // ➞ 9
console.log(uniqueStyles([
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul"
])); // ➞ 7