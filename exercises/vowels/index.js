// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {
	const v = {
		a: 0,
		e: 0,
		i: 0,
		o: 0,
		u: 0
	};

	let count = 0;

	for(let char of str.toLowerCase()) {
		if(v.hasOwnProperty(char)) {
			v[char]++
		}
	}

	for(let prop in v) {
		count += v[prop];
	}

	return count;
}

// function vowels(str) {
// 	let vowels = str.match(/[aeiou]/ig);
// 	return vowels !== null ? vowels.length : 0;
// }


// function vowels(str) {
// 	let vowels = str.match(/[aeiou]/gi);

// 	return vowels === null ? 0 : vowels.length;
// }

module.exports = vowels;
