/*

Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: 'orldhello w'

*/

function isRotated(str1, str2) {
  // create doubled version of string 1
  var doubled = str1 + str1;
  // check for indexOf str2 within doubled string 1
  var index = doubled.indexOf(str2);
  // if present 
  if (index !== -1) {
    // return true
    return true;
  // otherwise 
  } else {
    // return false
    return false;
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but fot "${actual}"`);
  }
}

var actualRotate = isRotated('hello world', 'orldhello w');
var expectedRotate = true;
assertEqual(actualRotate, expectedRotate, "should return true when string 2 is rotated version of string 1");

var actualNot = isRotated('hello world', 'roldhello w');
var expectedNot = false;
assertEqual(actualNot, expectedNot, 'should return false when string 2 is not a rotated version of string 1');