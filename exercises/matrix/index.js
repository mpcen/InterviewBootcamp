// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	const results = [];
	const numbers = n * n;
	let count = 1;

	for(let i = 0; i < n; i++) {
		results.push([]);
	}

	let startRow = 0;
	let startCol = 0;
	let endRow = n - 1;
	let endCol = n - 1;

	while(count <= numbers) {
		for(let j = startCol; j <= endCol; j++) {
			results[startRow][j] = count;
			count++;
		}

		startRow++;

		for(let i = startRow; i <= endRow; i++) {
			results[i][endCol] = count;
			count++;
		}

		endCol--;

		for(let j = endCol; j >= startCol; j--) {
			results[endRow][j] = count;
			count++
		}

		endRow--;

		for(let i = endRow; i >= startRow; i--) {
			results[i][startCol] = count;
			count++;
		}

		startCol++;
	}

	return results
}

module.exports = matrix;
