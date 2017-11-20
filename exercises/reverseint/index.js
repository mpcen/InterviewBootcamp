// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let flag = n < 0 ? -1 : 1;
	n = n.toString();

	if(flag === -1) {
		n = n.substr(1);
	}

	return Number(n.split('').reduce((accu, char) => char + accu, '')) * flag;
}

module.exports = reverseInt;
