/*

Create a function that takes in a year and returns the correct century.

Examples
century(1756) ➞ "18th century"

century(1555) ➞ "16th century"

century(1000) ➞ "10th century"

century(1001) ➞ "11th century"

century(2005) ➞ "21st century"
Notes
All years will be between 1000 and 2010.
The 11th century is between 1001 and 1100.
The 18th century is between 1701-1800.

*/

function century(year) {
	if (year === 1000) {
		return "10th century";
	} else if (year >= 1001 && year <= 1100) {
		return "11th century";
	} else if (year >= 1101 && year <= 1200) {
		return "12th century";
	} else if (year >= 1201 && year <= 1300) {
		return "13th century";
	} else if (year >= 1301 && year <= 1400) {
		return "14th century";
	} else if (year >= 1401 && year <= 1500) {
		return "15th century";
	} else if (year >= 1501 && year <= 1600) {
		return "16th century";
	} else if (year >= 1601 && year <= 1700) {
		return "17th century";
	} else if (year >= 1701 && year <= 1800) {
		return "18th century";
	} else if (year >= 1801 && year <= 1900) {
		return "19th century";
	} else if (year >= 1901 && year <= 2000) {
		return "20th century";
	} else if (year >= 2001 && year <= 2010) {
		return "21st century";
	}
}

console.log(century(1756));
console.log(century(1555));
console.log(century(1000));
console.log(century(1001));
console.log(century(2005));
console.log();
console.log();