// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution 1
// function palindrome(str) {
// 	let reversed = '';

// 	reversed = str.split('').reduce((accu, char) => char + accu, '');

// 	return str === reversed;
// }

// solution 2
// function palindrome(str) {
// 	let reversed = '';

// 	for(let char of str) {
// 		reversed = char + reversed;
// 	}

// 	return reversed === str;
// }

function palindrome(str) {
	let isPal = true;
	for(let i = 0; i < Math.floor(str.length / 2); i++) {
		
		if(str[i] !== str[str.length - i - 1]) {
			isPal = false;
			break;
		}
	}

	return isPal;
}

module.exports = palindrome;
