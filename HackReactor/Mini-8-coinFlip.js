// Time Limit 45 minutes
// Write a function coinFlip that returns at random either 'heads' or 'tails'
// HINT: look into Math.random()

coinFlip() //'heads'
//or
coinFlip() //'tails'

// BONUS: Can you devise a way to investigate if your function produces 'heads' and 'tails' with a roughly 50/50 split?

function coinFlip() {
  var number = Math.round(Math.random());
  if (number === 1) {
    return 'heads';
  }
  if (number === 0) {
    return 'tails';
  }
}


function check(n) {
  var heads = 0;
  var tails = 0;

  for (var i = 0; i < n; i++) {
    if (coinFlip() === 'heads') {
      heads ++;
    } else {
      tails ++;
    }
  }
  var headPercent = heads/n * 100;
  var tailPercent = tails/n * 100;

  console.log("headPercent:", headPercent);
  console.log("tailPercent", tailPercent);
}

  console.log(coinFlip());
  console.log(check(1000000));