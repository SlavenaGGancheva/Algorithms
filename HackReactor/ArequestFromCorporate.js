/*

Let us walk through the idea for this problem, as it is somewhat more complex than usual. The problem will require you to write two functions. One function will accomplish a task of some kind, and the other function will be an assertion function which can be used to compare your answer with an expected answer.

The first function you will write will be called generateSampleView. The input for this function will always be an array of objects, theoretically the result of a call to an API, or database. generateSampleView will take this array as its parameter, and return an array of strings based upon conditions that we will describe in a moment. The format of this input array of objects is described below:

--- If the value of the id property is odd, add the user's email to the return array
--- If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array 

*/

function generateSampleView(users) {
  // create result array
let result = [];
  // iterate over the users
  for (let i = 0; i < users.length; i++) {
    // if the current id is odd 
    if (users[i]['id'] % 2 === 1) {
      // do odd stuff
      result.push(users[i]['email']);
    // otherwise
    } else {
      // do even stuff
      // create a address string
      let address = "";
      let addressObj = users[i]['address'];
      // add necessary components
      address += addressObj['street'] + ', ' + addressObj['suite'] + ', ' + addressObj['city'] + ', ' + addressObj['zipcode'];
      // add to result array
      result.push(address);
    }  
  }
  // return result array
  return result;
}



// ASSERTION FUNCTION
function assertArraysEqual(actual, expected, testName) {
  let sameLengths = actual.length === expected.length;
  let sameValues = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      sameValues = false;
      break;
    }
  }
  if (sameLengths && sameValues) {
    console.log(`passed`);
  } else {
    console.log(`failed ${testName}`);
  }
}

// TEST CASES
var sampleUsers = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

let expected_1 = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
let actual_1 = generateSampleView(sampleUsers);
assertArraysEqual(actual_1, expected_1, 'creates the correct samle view');