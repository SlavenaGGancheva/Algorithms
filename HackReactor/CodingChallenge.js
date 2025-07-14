/* 
We want you to write a function, organizeItems, that organizes items by category. The argument to the function is an array of item objects. Each item object has 3 properties, category (string), itemName (string), and onSale (Boolean).
Here's an example:
*/

var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

/*
The return value should be an object with category properties. Each property value is an array of items that belong to that category.
Here's an example return object based on our example input:
*/

/*
{
  fruit:  ['apple', 'melon($)'],
  canned: ['beans', 'corn($)', 'soup'],
  frozen: ['pizza']
};
*/


function organizeItems(items) {
  // input: array of objects
  // output: object of arrays

  var itemObj = items[i];
  var result = {};

  for (var i = 0; i < items.length; i++) {
    var type = items[i].category;
    var name = items[i].itemName;
    if (items[i].onSale) {
      name += '($)';
    }
    if (type in result) {
      result[type].push(name);
    } else {
      result[type] = [name];
    }
  }
  return result;
}

console.log(organizeItems(itemData));