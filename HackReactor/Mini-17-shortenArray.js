// Time Limit 45 minutes
// Write a function shortenArray that takes in an array with empty indexes and return a new array without the empty indexes.

function shortenArray(arr) {

}

var test1 = [1,2,3,4,,,,,];
console.log(test1);
var test2 = [, , , , "a", true, 4, 4];
var test3 = [1, , 2, , 3, , 4];

console.log(shortenArray(test1)) //[1,2,3,4]
console.log(shortenArray(test2)) //["a", true, 4, 4]
console.log(shortenArray(test3)) //[1,2,3,4]