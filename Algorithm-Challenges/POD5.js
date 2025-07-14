//######################
// POD Day 5 - Regular - Reverse Integer
// Given a positive integer, return the number you get when you reverse all the digits. Do this without converting the number to a string!

// Ex: 
// 1234 -> 4321

function reverseInt(int) {
  // throw Error if number is negative
  if (int < 0) return new Error('number must be a positive integer')
  // initialize new variable to hold our integer
  let decreaseInt = int;
  console.log('decreaseInt: ', decreaseInt)
  // initialize new number 0
  let revInt = 0; //4321
  // loop until input int === 0
  while (decreaseInt > 0) {
    // multiply new number by 10
    revInt *= 10;  // revInt = revInt * 10
    console.log('revInt: ', revInt)

    // grab rightmost number in int and add to new number
    let rightmost = decreaseInt % 10;
    console.log('rightmost', rightmost);

    // add rightmost to revInt
    revInt += rightmost;
    console.log('revInt after adding: ', revInt)

    // divide out rightmost number from input
    decreaseInt = (decreaseInt - rightmost) / 10;
    console.log('decreaseInt: ', decreaseInt)
    console.log('*********************** ')

  }
  // return new number 
  return revInt;
}

// console.log(reverseInt(1230)) //321
// console.log(reverseInt(12)); // 21
// console.log(reverseInt(1234)); // 4321
// console.log(reverseInt(-1234)); // Error

//####################################
// POD Day 5 - Common Elements 
// Given 2 arrays that may contain both numbers and strings return a new array with the numbers and/or strings that appear in both arrays duplicates are only counted once;

// Ex: 

// const array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// const array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// commonElements(array1, array2) -> ['ferret', 12, 'dog']
// if there are no common numbers or strings, return []


//input: two arrays with number and/or string elements
//output: new array


function commonElements(arr1, arr2) {
  const filtered = arr1.filter(el => arr2.includes(el));
  console.log('filtered: ', filtered)
  console.log('without using spread:', new Set(filtered))
  return [...new Set(filtered)];
}

// function commonElementsTests() {
//   const array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
//   const array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
//   console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
// }

// commonElementsTests() // uncomment to test


// Bonus: Modify commonElements to take in an array of arrays and only return elements that appear in every array

function commonElements2(arr) {
  return arr.reduce((acc, curr) => commonElements(acc, curr));
}

const array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
const array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
const array3 = [1, 4, 6, 7, 'ferret', 99, 2000, 'dog', 'dog', 99, 'pigeon', 'drone', 'drone'];

// console.log(commonElements2([ array1, array2, array3 ])); // ['ferret', 'dog']