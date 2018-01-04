// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// 	return str.split('').reduce((acc, char) => {
// 		return char + acc;
// 	}, '')
// }

// function reverse(str) {
// 	let newStr = '';

// 	for(let char of str) {
// 		newStr = char + newStr;
// 	}

// 	return newStr
// }

// function reverse(str) {
// 	const strArr = str.split('');

// 	return strArr.reverse().join('');
// }


module.exports = reverse;
