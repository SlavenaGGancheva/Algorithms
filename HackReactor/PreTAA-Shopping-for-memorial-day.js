/*
Shopping for Memorial Day!
Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

Examples
checkout([
  { desc: "potato chips", prc: 2, qty: 2, taxable: false },
  { desc: "soda", prc: 3, qty: 2, taxable: false },
  { desc: "paper plates", prc: 5, qty: 1, taxable: true }
]) ➞ 15.3
Notes
N/A
*/

const tax = .06

function checkout(cart) {
	var total = 0;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].taxable === true) {
			total += (cart[i].prc + cart[i].prc * tax) * cart[i].qty;
		} else {
			total += cart[i].prc * cart[i].qty;
		}
	}
	return total;
}

console.log(checkout([
  { desc: "potato chips", prc: 2, qty: 2, taxable: false },
  { desc: "soda", prc: 3, qty: 2, taxable: false },
  { desc: "paper plates", prc: 5, qty: 1, taxable: true }
]));
console.log();
console.log();