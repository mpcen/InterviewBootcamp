// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative
function fib(n) {
	if(n === 0) {
		return 0
	} else if(n === 1) {
		return 1
	} else {
		const entries = [0, 1];

		for(let i = 2; i <= n; i++) {
			const a = entries[i - 1];
			const b = entries[i - 2];
			entries.push(a + b);
		}

		return entries[entries.length - 1];
	}

}

module.exports = fib;
