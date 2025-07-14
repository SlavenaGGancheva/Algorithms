/*
Get Student Top Notes
Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.

Examples
getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]) ➞ [5, 5, 4]
*/

// // NOT WORKING SOLUTION
// function getStudentTopNotes(students) {
// 	var topNotes = [];
// 	for (var i = 0; i < students.length; i++) {
// 		for (var j = 0; j < students[i].notes.length; j++) {
// 			var top = students[i].notes[0];
// 			if (students[i].notes.length === 0) {
// 				topNotes.push(0);
// 			} else if (students[i].notes[j] > top) {
// 				top = students[i].notes[j];
// 			}
//       topNotes.push(top);
// 		}
// 	}
// 	return topNotes;
// }

function getStudentTopNotes(students) {
	var topNotes = [];
  for (var i = 0; i < students.length; i++) {
		if (students[i].notes.length === 0) {
			topNotes.push(0);
		} else {
			var notes = students[i].notes;
			var max = notes[0];
			for (var j = 0; j < notes.length; j++) {
				if (notes[j] > max) {
					max = notes[j]
				}
			}
			topNotes.push(max) ;
		}
	}
	return topNotes;
}

console.log(getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]));
console.log();
