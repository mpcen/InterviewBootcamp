// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let arr = [root];
	let widths = [1];

	while(arr.length) {
		let childArr = [];

		arr.forEach(node => childArr.push(...node.children));

		if(childArr.length) {
			widths.push(childArr.length);
		}

		arr = childArr;
	}

	return widths;
}

module.exports = levelWidth;
