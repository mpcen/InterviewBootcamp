// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# ' 
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let level = 0;
	let str = '';

	while(level < n) {
		for(let i = 0; i < n; i++) {
			if(str.length <= level) {
				str += '#';
			} else {
				str += ' ';
			}
		}
		console.log(str);
		level++;
		str = '';

		// console.log(str);
	}
}

module.exports = steps;
