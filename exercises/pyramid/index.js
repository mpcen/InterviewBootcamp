// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, str = '', row = 0) {
	if(row === n) {
		return;
	}

	const strLen = 2 * n - 1;
	
	if(str.length === strLen) {
		console.log(str);

		return pyramid(n, '', row += 1);
	}
	
	const mid = Math.floor(strLen / 2);

	if(str.length < mid - row || str.length > mid + row) {
		str += ' ';
	} else {
		str += '#';
	}

	pyramid(n, str, row);
}


// function pyramid(n) {
// 	if(n === 1) {
// 		return console.log('#');
// 	}

// 	const strLen = 2 * n - 1;
// 	const mid = Math.floor(strLen / 2);
// 	let row = 0;

// 	for(let i = 0; i < n; i++) {
// 		let str = '';

// 		for(let j = 0; j < strLen; j++) {
// 			if(j < mid - row || j > mid + row) {
// 				str += ' ';
// 			} else {
// 				str += '#';
// 			}
// 		}

// 		console.log(str);

// 		row += 1;
// 	}
// }


// function pyramid(n) {
// 	const len = n * 2 - 1;
// 	const mid = Math.floor(len / 2);
// 	let level = 0;
// 	let str = '';

// 	while(level < n) {
// 		for(let i = 0; i < len; i++) {
// 			if(i < mid - level || i > mid + level) {
// 				str += ' ';
// 			} else {
// 				str += '#';
// 			}			
// 		}

// 		console.log(str);
// 		level++;
// 		str = '';
// 	}
// }

module.exports = pyramid;
