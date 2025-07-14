/*
Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the appropriate network string (or undefined if there's no match).
*/

var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

// function detectNetwork(cardNumber, cardData) {
//   // your solution here
// }

// example
var network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'



function detectNetwork(cardNumber, cardData) {
  var answer = '';
  var cardLength = cardNumber.length;
  var firstTwoDigits = cardNumber[0] + cardNumber[1];

  for (var i =0; i < cardData.length; i++){
    var cardObj = cardData[i];
    if (cardObj['lengths'] == cardLength){
      var arrOfPrefixes = cardObj['prefixes'];
      for (var j =0; j < arrOfPrefixes.length; j++){
        if (arrOfPrefixes[j] === firstTwoDigits){
          answer = cardObj['network'];
        }
      }
    }
  }
  return answer;
}