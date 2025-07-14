//##############################
// POD Day 3 - Regular - LargestAndSmallest - 

// The function largestAndSmallest should take one parameter, an array, and return a new array containing the largest and smallest elements from the original array.

//input: array
//output: new array

// EX: 
// [1, 2, 3, 4, 5] --> [1, 5]
// [90, 30, 44, 66, 10] --> [10, 90]
// [16, -70, 122] --> [-70, 122]

function largestAndSmallest(array) {
  //loop over the array,
  // console.log('array before reduce', array)
  return array.reduce((acc, curr) => {
    //console.log('acc', acc);
    //console.log('curr', curr)
    //Input: [1, 2, 3, 4, 5]
    // on each loop check whether current number is larger than largest we've seen so far, or smaller than smallest we've seen so far
    if (curr < acc[0]) {
      acc[0] = curr;
    }
    if (curr > acc[1]) {
      acc[1] = curr;
    }

    return acc; // [10, 90]
  }, [Infinity, -Infinity]);

}


console.log(largestAndSmallest([1, 2, 3, 4, 5])); // [1,5]
console.log(largestAndSmallest([90, 30, 44, 66, 10])); // [10,90]
console.log(largestAndSmallest([16, -70, 122])); // [-70, 122]


// Another way of solving largestAndSmallest in one line
const largestAndSmallest2 = array => [Math.min(...array), Math.max(...array)];

// console.log(largestAndSmallest2([1, 2, 3, 4, 5])); // [1,5]
// console.log(largestAndSmallest2([90, 30, 44, 66, 10])); // [10,90]
// console.log(largestAndSmallest2([16, -70, 122])); // [-70, 122]

//#####################################
// POD Day 3 - Advanced -  Reverse Number

// The function reverseNumber should take one parameter, a number, it should reverse the number and return it.

// EX: 
// 923 --> 329
// 100 --> 1
// -87 --> -78

//input: number
//output: reversed number

function reverseNumber(num) {
  // remember whether the num is negative number 
  //console.log('input num: ', num)
  let isNegative = false;

  if (Math.sign(num) === -1) isNegative = true;
  // convert to positive number
  let posNum = Math.abs(num);

  //convert positive number to string
  let posNumAsString = String(posNum);

  // reverse the string
  let reversed = posNumAsString.split('').reverse().join('');

  //convert the reversed string to a number
  let reversedNum = Number(reversed);

  // check whether original number was negative
  if (isNegative) {
    // if so, make current number negative and return
    return (-1 * reversedNum);
  } else {
    // if not, return as is
    return reversedNum;
  }
}

// console.log(reverseNumber(923)) // --> 329
// console.log(reverseNumber(100)) // --> 1
// console.log(reverseNumber(-87)) // --> -78
// console.log(reverseNumber(0001)) // --> 1