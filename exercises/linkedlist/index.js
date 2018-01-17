// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		const node = new Node(data, this.head);

		this.head = node;
	}

	size() {		
		let counter = 0;
		let currentNode = this.head;

		while(currentNode) {
			counter += 1;
			currentNode = currentNode.next;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if(!this.head)
			return null;

		let currentNode = this.head;

		while(currentNode) {
			if(!currentNode.next) {
				return currentNode;
			}

			currentNode = currentNode.next
		}

		return currentNode;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if(!this.head)
			return;

		this.head = this.head.next;
	}

	removeLast() {
		if(!this.head)
			return;

		if(!this.head.next) {
			return this.head = null;
		}

		let currentNode = this.head;
		let lastNode = null;

		while(currentNode) {
			if(!currentNode.next) {
				return lastNode.next = null;
			}

			lastNode = currentNode;
			currentNode = currentNode.next;
		}
	}

	insertLast(data) {
		const newNode = new Node(data);

		if(!this.head) {
			return this.head = newNode;
		}

		// WE CAN ALSO REUSE A PREVIOUS METHOD WE MADE:
			// this.getLast().next = new Node(data);

		let currentNode = this.head;
		
		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = newNode;
	}

	getAt(index) {
		if(!this.head) {
			return null;
		}

		let currentNode = this.head;
		let counter = 0;

		while(currentNode) {
			if(counter === index) {
				return currentNode;
			}

			counter += 1;
			currentNode = currentNode.next;
		}

		return null;
	}

	removeAt(index) {
		if(!this.head) {
			return null;
		}

		if(index === 0) {
			return this.head = this.head.next;
		}

		let currentNode = this.head;
		let lastNode = null;
		let counter = 0;

		while(currentNode) {
			if(index === counter) {
				lastNode.next = currentNode.next;
				return 
			}

			lastNode = currentNode;
			currentNode = currentNode.next;
			counter += 1;
		}
	}

	insertAt(data, index) {
		let newNode = new Node(data, null);

		if(!this.head) {
			this.head = newNode;
			return;
		}

		if(index === 0) {
			newNode.next = this.head;
			this.head = newNode;
			return;
		}

		let currentNode = this.head;
		let lastNode = null;
		let counter = 0;

		while(currentNode) {
			if(!currentNode.next) {
				currentNode.next = newNode;
				return;
			}

			if(index === counter) {
				lastNode.next = newNode;
				newNode.next = currentNode;
				return;
			}

			lastNode = currentNode;
			currentNode = currentNode.next;
			counter += 1;
		}
	}

	forEach(fn) {
		let currentNode = this.head;
		let counter = 0;

		while(currentNode) {
			fn(currentNode, counter);

			currentNode = currentNode.next;

			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;

		while(node) {
			yield node;

			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
