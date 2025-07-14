// Your current client is a casino that needs you to fix their Black-Jack card counting program. The function should take an array of objects, each object is a card that was dealt and its value is the number on the card.

// The way card counting works is that each card has a _weighted_ value. Cards 2 through 6 are worth one point; 7, 8 and 9 are worth zero; and 10s, face cards and Aces are worth negative one. This type of card-counting system is called the _HiLo_ count. When counting down a standard deck of 52 cards, you'll notice the count will go up and down, and always end at zero if you counted correctly.

// The `cardCounter` function is supposed to take an array of card objects and return the count (weighted value) of the cards. It doesn't seem to be producing accurate results, see if you can fix it before the card-sharks beat the house!

// // starting code - wrong
// function cardCounter(array) {
//     var count = 0;
//     for (var i = 1; i < array.length; i++) {
//         var card = array[i];

//         if (card.card + i >= 2 && card.card + i <= 6) {
//             count++;
//         } else if (card.card + i >= 10 || card.card + i === 'face or ace') {
//             count--;
//         }
//         return count;
//     }
// }

// var dealtCards = [ { 'card 0': 2 }, { 'card 1': 6 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];

// MY SOLUTION 2 - WORKING
function cardCounter(array) {
  // create a count variable set to 0
  var count = 0;
  // iterate over the cards array
  for (var i = 0; i < array.length; i++) {
    // create a alias for current card
    var cardsObj = array[i];
    for (var card in cardsObj) {
      if (cardsObj[card] === 'face or ace') {
        count--;
      } else if (cardsObj[card] >= 2 && cardsObj[card] <= 6) {
        count++;
      } else if (cardsObj[card] >= 10) {
        count--;
      }
    }
  }
  return count;
}

// // MY SOLUTION 3 - NOT WORKING
// function cardCounter(array) {
//   var count = 0;
//   for (var i = 1; i < array.length; i++) {
//     var cardObj = array[i];
//     for (var card in cardObj)
//     if (cardObj[card] >= 10 || cardObj[card] === 'face or ace') {
//       count--;
//     } else if (cardObj[card] >= 2 && cardObj[card] <= 6) {
//       count++;
//     }
//     return count;
//   }
// }

// // SOLUTION
// function cardCounter(array) {
//   // create a count variable set to 0
//   var count = 0;
//   // iterate over the cards array
//   for (var i = 0; i < array.length; i++) {
//     // create a alias for current card
//     var card = array[i]["card " + i];
//     if (card === 'face or ace') {
//       count--;
//     } else if (card >= 2 && card <= 6) {
//       count++;
//     } else if (card >= 10) {
//       count--
//     }
//   }
//   return count;
// }




// solution
// function cardCounter(array) {
//   // create a count variable set to 0
//   var count = 0;
//   // iterate over the cards array
//   for (var i = 0; i < array.length; i++) {
//     // create a alias for current card
//     var card = array[i]["card " + i];
    
//     if (!isNaN(card)) {
//       if (card >= 2 && card <= 6) {
//         count++;
//       } else if (card >= 10) {
//         count--;
//       } 
//     } else if (card === 'face or ace') {
//       count--;
//     }
//   }
//   return count;
// }


  
function assertEquals(actual, expected, testName) {
  if (actual === expected) {
     console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
}

var dealtCards = [ { 'card 0': 2 }, { 'card 1': 6 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];

var actual = cardCounter(dealtCards);
var expected = 1;
assertEquals(actual, expected, 'function should return correct HiLo count.');

var dealtCards2 = [ { 'card 0': 'face or ace' }, { 'card 1': 9 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];

var actual2 = cardCounter(dealtCards2);
var expected2 = -2;
assertEquals(actual2, expected2, 'function should return correct HiLo count.');




/* Solution:

1) You can retrieve card value as var card = array[i]["card " + i]; not card.card + i.
2) Use i=0 inside for and add condition as if (!isNaN(card)) which will be true when value is number. If it is number then check whether value is between 2-6 or >=10 .
3) If value is not number then compare it with face or ace.
4) You should have return count; outside for loop.

function cardCounter(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    var card = array[i]["card " + i];
    if (!isNaN(card)) {
      if (card >= 2 && card <= 6) {
        count++;
      } else if (card >= 10) {
        count--;
      }
    } else if (card === 'face or ace') {
      count--;
    }
  }
  return count;
}

console.log(cardCounter([ { 'card 0': 2 }, { 'card 1': 6 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ]));
//output: 1
console.log(cardCounter([ { 'card 0': 'face or ace' }, { 'card 1': 9 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ]));
//output: -2

*/ 