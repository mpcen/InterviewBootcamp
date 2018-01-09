// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.stack = new Stack();
		this.tmpStack = new Stack();		
	}

	add(item) {
		this.stack.push(item);		
	}

	remove() {
		while(this.stack.peek()) {
			this.tmpStack.push(this.stack.pop());
		}

		const returnVal = this.tmpStack.pop();

		while(this.tmpStack.peek()) {
			this.stack.push(this.tmpStack.pop())
		}

		return returnVal;
	}

	peek() {
		while(this.stack.peek()) {
			this.tmpStack.push(this.stack.pop());
		}

		const returnVal = this.tmpStack.peek();		

		while(this.tmpStack.peek()) {
			this.stack.push(this.tmpStack.pop());
		}

		return returnVal;
	}
}

module.exports = Queue;
