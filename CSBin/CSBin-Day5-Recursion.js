/*
Challenge 1 **********************************************************************
Repeater

Modify the function so that it returns a string containing the input character repeated 5 times. Use recursion!
*/
////////////////////////////
//     Challenge 1 - SOLVED
////////////////////////////
function repeater(char, n = 5) { // n = 5 -> default parameter
  if (n === 1) {
    return char
  }
  return char + repeater(char, n - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'


/*
Challenge 2
**********************************************************************
Is Even

Modify the function so that it returns true if a number is even (and false if it's not). Assume input will be a positive integer. Use recursion!

*/
////////////////////////////
//     Challenge 2 - SOLVED
////////////////////////////
function isEven(n) {
 if (n === 0) { // base case
   console.log(n)
   return true;
 } else if (n === 1) { // base case
   console.log(n)
   return false;
 } else {
   return isEven(n - 2); // recursive call
 }
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true

/* 
*************************************************************************************
Challenge 3
*************************************************************************************
Factorial

Modify the function so that it returns the factorial of an input number. Use recursion!

The factorial of n is the product of all numbers between 1 and n

Ex: 5! = 5 * 4 * 3 * 2 * 1
*/
////////////////////////////
//     Challenge 3 - SOLVED
////////////////////////////
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

/*
************************************************************************************
Challenge 4
************************************************************************************
Get Length

Modify the function so that it returns the length of an array recursively, without using the .length property. Use recursion!

Hint: What does JavaScript return when you attempt to access an index that is greater than array.length - 1?
*/
////////////////////////////
//     Challenge 4 SOLVED
////////////////////////////

// function getLength(array, i = 0) {
//   // base case: exit function and return i if length of array is 0
//   if (array[0] === undefined) {
//     return i;
//   }
//   // otherwise increase i if length of array is not 0
//   i++;
//   // recursive call to getLength, and pass in length
//   return getLength(array.slice(1), i);
// }


function getLength(array, length = 0) {
  // base case: exit function and return length if length of array is 0
  if (array[0] === undefined) {
    return length;
 }
  // increase length if length of array is not 0
  length++;
  // recursive call to getLength, and pass in length
  return getLength(array.slice(1), length)
  // return end result (length)
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5

// const arr = [0, 1];
// console.log(arr[5]);

/*
************************************************************************************
Challenge 5
************************************************************************************
POW

Modify the function so that it returns base to the power of exponent. Use recursion!

Ex: pow(5, 3) = 5 * 5 * 5
*/
////////////////////////////
//     Challenge 5 - SOLVED
////////////////////////////
function pow(base, exponent) {
 if (exponent === 1) {
   return base;
 }
  return base * pow(base, exponent - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

/*
***********************************************************************************
Challenge 6
***********************************************************************************
////////////////////////////
//     Challenge 6 SOLVED
////////////////////////////
Flow

Modify the function so that it returns the result of running the input number through each function in funcArray, in order. Use recursion!

First do it recursively, if you have time at the end try using a reduce function
*/

// overall strategy:
// base case: if no funcs in funcArray, return input
// recursive case: 
  // invoke the first func in funcArray using input as argument
  // recursively call flow using output of first func call as input
    // and funcArray wothout first func

// function flow(input, funcArray, i = 0) {
//   if (funcArray.length === 0) return input;
//   const output = funcArray[0](input); 
//   return flow(output, funcArray.slice(1))
// }

///////////////////IMPORTANT//////////////////////
function flow(input, funcArray) {
  const result = funcArray.reduce((acc, curr) => {
    console.log(acc)
    return curr(acc);
}, input);  // pass input as initial value
  return result;
}

// To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7


/*
***********************************************************************************
Challenge 7
Fibonacci
***********************************************************************************
Modify the function so that it returns the nth Fibonacci number. Try not to look back at the slides!

Fibonacci reference: 1, 1, 2, 3, 5, 8, 13, ...
*/
 
////////////////////////////
//     Challenge 7 SOLVED
////////////////////////////
function fib(n) {
  // base case:
  if (n === 0) return 0;
  if (n === 1) return 1;
  // recursive case: 
  return fib(n - 1) + fib(n - 2);
}

// To check if you've completed the challenge, uncomment this code!
// console.log(fib(1)); // -> 1
// console.log(fib(2)); // -> 1
// console.log(fib(7)); // -> 13

/*
************************************************************************************
Challenge 8
Heads or Tails
************************************************************************************

Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays
*/
////////////////////////////
//     Challenge 8
////////////////////////////
function headsOrTails(n) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

/*
***********************************************************************
Challenge 9
Combos of Any length
***********************************************************************

Modify this function so that it returns all combinations of the elements of arr as an array of arrays. Use Recursion!
*/
////////////////////////////
//     Challenge 9 SOLVED
////////////////////////////
function getAllCombos(arr) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
// console.log(getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]


const combinations = (elements) => {
  if (elements.length === 0) {
    return [ [] ];
  }
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const combsWithoutFirst = combinations(rest);
  const combsWithFirst = [];

  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  });
  return [ ...combsWithoutFirst, ...combsWithFirst];
};

// combinations(['a', 'b', 'c']);
// console.log(combinations(['a', 'b', 'c']));
// console.log(combinations(['a', 'b', 'c', 'd', 'e']));

// [
//   [],
//   [ a ],
//   [ b ], 
//   [ c ],
//   [ a, b ],
//   [ b, c ],
//   [ a, c ],
//   [ a, b, c ],
// ]