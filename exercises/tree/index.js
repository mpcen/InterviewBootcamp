// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.

// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.

// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data))
	}

	remove(data) {
		this.children = this.children.filter(child => {
			return child.data !== data
		});
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}	

	traverseBF(fn) {
		const nodes = [this.root];

		while(nodes.length) {
			if(nodes[0].children.length) {
				nodes.push(...nodes[0].children);
			}

			fn(nodes[0]);

			nodes.shift();
		}
	}

	traverseDF(fn) {
		const nodes = [this.root];

		while(nodes.length) {
			let childrenToAdd = [];

			if(nodes[0].children.length) {							
				childrenToAdd.push(...nodes[0].children);
			}

			fn(nodes[0]);

			nodes.shift();

			nodes.unshift(...childrenToAdd);
		}
	}
}

module.exports = { Tree, Node };



/*

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data))
	}

	remove(data) {
		this.children = this.children.filter(node => {
			return node.data !== data
		});
	}

}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const childrenArr = [];
		
		childrenArr.push(this.root)

		while(childrenArr.length) {
			childrenArr.push(...childrenArr[0].children)

			fn(childrenArr[0]);

			childrenArr.shift();
		}
	}

	traverseDF(fn) {
		const childrenArr = [];

		childrenArr.push(this.root);

		while(childrenArr.length) {
			const node = childrenArr.shift();

			childrenArr.unshift(...node.children);

			fn(node);
		}
	}
}

*/
