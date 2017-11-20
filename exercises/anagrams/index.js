// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
// 	const charMapA = buildCharMap(stringA);
// 	const charMapB = buildCharMap(stringB);

// 	if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false;
// 	} else {
// 		for(let char in charMapA) {
// 			if(charMapA[char] !== charMapB[char]) {
// 				return false;
// 			}
// 		}
// 	}

// 	return true;
// }

// function buildCharMap(str) {
// 	const charMap = {};

// 	for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}

// 	return charMap;
// }

// function anagrams(stringA, stringB) {
// 	let charMap = {};
// 	let cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
// 	let cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
// 	let isAnagram = true;

// 	for(let char of cleanStringA) {
// 		if(!charMap[char]) {
// 			charMap[char] = 1;
// 		} else {
// 			charMap[char]++;
// 		}
// 	}

// 	for(let char of cleanStringB) {
// 		if(!charMap[char]) {
// 			isAnagram = false;
// 			break;
// 		} else {
// 			charMap[char]--;			
// 		}
// 	}

// 	for(let char in charMap) {
// 		if(charMap[char] !== 0) {
// 			isAnagram = false;
// 		}
// 	}

// 	return isAnagram;
// }

module.exports = anagrams;
