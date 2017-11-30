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

function pyramid(n) {
	const len = n * 2 - 1;
	const mid = Math.floor(len / 2);
	let level = 0;
	let str = '';

	while(level < n) {
		for(let i = 0; i < len; i++) {
			if(i < mid - level || i > mid + level) {
				str += ' ';
			} else {
				str += '#';
			}			
		}

		console.log(str);
		level++;
		str = '';
	}
}

module.exports = pyramid;
