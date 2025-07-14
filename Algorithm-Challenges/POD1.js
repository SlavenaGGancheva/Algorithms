//######################
// Day 1 - Regular


// Create a function reverseString that accepts a string as a parameter and returns the reverse of that string.

// For example: 
// reverseString("I love testing") // should return "gnitset evol I"

function reverseString(str) {
  // instantiate a new str
  let newStr = '';
  // loop backwards over str input
  for (let i = str.length - 1; i >= 0; i--) {
    // add the current char to new str
    newStr += str[i];
  }

  // return new str;
  return newStr;
}

console.log(reverseString('Javascript')); // tpircsavaJ

// function reverseString(str){
//  return str.split('').reverse().join('');
// }

// const reverseString = str => str.split('').reverse().join('');

// console.log(reverseString('Javascript')); // tpircsavaJ

//######################
// Day 1 - Advanced
// Write a function that console logs a staircase of any given height where 1 <= N <= 100. The staircase must climb up from left to right. The last line should only consist of asterisks, without any leading/trailing spaces.  

// For example:   

// drawStairs(5) -> 
//     *    
//    **
//   ***
//  ****
// *****

function drawStairs(n) {
  if (n <= 1 || n >= 100) {
    throw new Error('please input a valid number N, between 1 and 100!');
  }

  const star = '*';
  const space = ' ';
  let numSpaces = n - 1;
  let numStars = 1;

  // loop upwards to n from 0
  for (let i = 0; i < n; i++) {
    // print space numspaces times
    // print star numstars times
    // console.log(star.repeat(numSpaces));   
    console.log(`${space.repeat(numSpaces)}${star.repeat(numStars)}`);

    // decrement numspaces
    numSpaces -= 1;
    // increment numstars
    numStars += 1;
  }
}



drawStairs(5); 
// drawStairs(0);
// drawStairs(300);