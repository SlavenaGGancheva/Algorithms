/*
Rock, Paper, Scissors!
Abigail and Benson are playing Rock, Paper, Scissors.

Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

R stands for Rock
P stands for Paper
S stands for Scissors
Examples
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"
Notes
N/A
*/

////SIMPLEST EXAMPLE SOLUTION
function calculateScore(games) {
	var A = 0, B = 0, tie = 0;
	let j;
	for (i = 0; i < games.length; i++) {
		j = games[i];
		if (j[0] === "P" && j[1] === "R") {
      A+=1;
    }  
		if (j[0] === "P" && j[1] === "S") {
      B+=1;
    }  
		if (j[0] === "R" && j[1] === "P") {
      B+=1;
    }  
		if (j[0] === "R" && j[1] === "S") {
      A+=1;
    }  
		if (j[0] === "S" && j[1] == "P") {
      A+=1;
    }  
		if (j[0] === "S" && j[1] === "R") {
      B+=1;
    } else {
      tie += 1; 
   	}
	}
	if (A > B) { 
    return 'Abigail' 
	}	else if (B > A) {
    return 'Benson'
	}	else if (A === B) {
    return 'Tie'
	}
}
// ////// EXAMPLE SOLUTION
// function calculateScore(games) {
// 	let Abigail = 0;
// 	let Benson = 0;
// 	for(const game of games){
// 		if(game[0] === game[1]){
// 		} else if((game[0] === 'R' && game[1] === 'S') || 
// 						 (game[0] === 'P' && game[1] === 'R') ||
// 						 (game[0] === 'S' && game[1] ==='P') ) {
// 			Abigail += 1; 
// 		} else {
// 			Benson += 1;
// 		}
// 	}
// 	if(Abigail === Benson){
// 		return "Tie"
// 	} else if(Abigail > Benson){
// 		return "Abigail"
// 	} else {
// 		return "Benson"
// 	}
// }


// // EXAMPLE SOLUTION
// function calculateScore(games) {
// 	let a = 0
// 	let b = 0
// 	for (i = 0; i < games.length; i++) {
// 		if (games[i][0] === 'R') {
// 			if (games[i][1] === 'S') {
// 				a++
// 			}
// 			else if(games[i][1] === 'R'){
// 				a += 0
// 			}
// 			else{
// 				b++
// 			}
// 		}
// 		if (games[i][0] === 'P') {
// 			if (games[i][1] === 'R') {
// 				a++
//       } else if (games[i][1] === 'P') {
// 				a += 0
//       } else {
// 				b++
// 			}
// 		}
// 		if (games[i][0] === 'S') {
// 			if (games[i][1] === 'P') {
// 				a++
// 			} else if(games[i][1] === 'S') {
// 				a += 0
// 			} else {
// 				b++
// 			}
// 		}
// 	}
// 	if (a > b) {
// 		return 'Abigail'
// 	}
// 	if (a === b) {
// 		return 'Tie'
// 	}
// 	if (a < b) {
// 		return 'Benson'
// 	}
// }


// // NOT WORKING SOLUTION
// function calculateScore(games) {
// 	for (var i = 0; i < games.length; i++) {
// 		var game = games[i];
// 	  var aChoice = game[i][0];
// 		var bChoice = game[i][1];
// 		var aWinsCount = { "Abigail" : 0 };
// 		var bWinsCount = { "Benson" : 0 };
// 		if (aChoice === 'P' && bChoice === 'R') {
// 			aWinsCount["Abigail"]++;
// 		} else {
// 			bWinsCount["Benson"]++;
// 		}
// 		if (aChoice === 'R' && bChoice === 'S') {
// 			aWinsCount["Abigail"]++;
// 		} else {
// 			bWinsCount["Benson"]++;
// 		}
// 		if (aChoice === 'S' && bChoice === 'P') {
// 			aWinsCount["Abigail"]++;
// 		} else {
// 			bWinsCount["Benson"]++;
// 		}
// 		if (aWinsCount["Abigail"] === bWinsCount["Benson"]) {
// 			return 'Tie';
// 		} else if (aWinsCount["Abigail"] > bWinsCount["Benson"]) {
// 			return 'Abigail';
// 		} else if (aWinsCount["Abigail"] < bWinsCount["Benson"]) {
// 			return 'Benson';
// 		}
// 	}
// }


// // NOT WORKING SOLUTION
// function calculateScore(games) {
// 	for (var i = 0; i < games.length; i++) {
// 		var game = games[i];
// 	  var aChoice = game[i][0];
// 		var bChoice = game[i][1];
//     var tie = 0;
// 		var aWinsCount = { "Abigail" : 0 };
// 		var bWinsCount = { "Benson" : 0 };
//     if (aChoice === bChoice) {
//       tie++;
//     } else if ((aChoice === 'P' && bChoice === 'R') || 
//        (aChoice === 'R' && bChoice === 'S') || 
//        (aChoice === 'S' && bChoice === 'P')) {
// 			  aWinsCount["Abigail"]++;
// 		} else if ((bChoice === 'P' && aChoice === 'R') || 
//        (bChoice === 'R' && aChoice === 'S') || 
//        (bChoice === 'S' && aChoice === 'P')) {
//         bWinsCount["Benson"]++;
// 	  } 
// 		if (aWinsCount["Abigail"] === bWinsCount["Benson"]) {
// 			return 'Tie';
// 		} else if (aWinsCount["Abigail"] > bWinsCount["Benson"]) {
// 			return "Abigail";
// 		} else {
// 			return "Benson";
// 		}
// 	}
// }



// // NOT WORKING SOLUTION
// function calculateScore(games) {
//   var game = games[i];
// 	var aChoice = game[i][0];
// 	var bChoice = game[i][1];
// 	var aWinsCount = { "Abigail" : 0 };
// 	var bWinsCount = { "Benson" : 0 };
// 	for (var i = 0; i < games.length; i++) {
// 		if ((aChoice === 'P' && bChoice === 'R') || 
//        (aChoice === 'R' && bChoice === 'S') || 
//        (aChoice === 'S' && bChoice === 'P')) {
// 			  aWinsCount["Abigail"]++;
// 		} else if (aChoice !== bChoice) {
//       bWinsCount["Benson"]++;
// 		}
// 	}
//   if (aWinsCount["Abigail"] > bWinsCount["Benson"]) {
// 			return 'Abigail';
// 		} else if (aWinsCount["Abigail"] < bWinsCount["Benson"]) {
// 			return 'Benson';
// 		} else {
// 			return 'Tie';
// 		}
// }

console.log(calculateScore([["R", "R"], ["S", "S"]])); // ➞ "Tie"
console.log(calculateScore([["S", "R"], ["R", "S"], ["R", "R"]])); // ➞ "Tie"
console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]])); // ➞ "Abigail"
console.log();