/*
Write a function called 'checkWinner'. This function will take an array with a length of 7. Each element of the array will be either; 'red', 'black', or 0. We can assume that no violation of either of these is possible (i.e. input will always be of length 7, and elements will only be 'red', 'black', or 0).

Your function should accept this array as its only parameter.

If there are 4 'red' elements consecutively in a row, 'checkWinner' should return the string: 'Red Wins!'. Similarly, if there are 4 'black' elements consecutively in a row, 'checkWinner' should return the string: 'Black Wins!'. If neither of these is the case, 'checkWinner' should return 'Draw!'.

Here are some examples of your code running, assuming you have successfully created the described function. Please be sure to name the function "checkWinner".

*/

let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'

function checkWinner(array) {
  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    // if current and next are equal to black
    if (array[i] === 'black' && array[i+1] === 'black' && array[i+2] === 'black' && array[i+3] === 'black') {
      // return black wins string
      return 'Black Wins!'
    }
    // if current and next are equal to red
    if (array[i] === 'red' && array[i+1] === 'red' && array[i+2] === 'red' && array[i+3] === 'red') {
      // return red wins string
      return 'Red Wins!'
    }
  }
  // (if iteration stops)
  // return draw
  return 'Draw!';
}