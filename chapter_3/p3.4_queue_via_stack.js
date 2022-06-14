/*
Queue via Stacks
Implement a MyQueue class which implements a queue using two stacks.
*/

/*
Explaination:
*/

/*
Questions:
1)
*/

/*
Assumption:
1)
2)
*/

/*
Example:
1)
*/

class Stack {
	constructor() {
		this._stack = [];
	}

	push(val) {
		this._stack.push(val);
	}

	size() {
		return this._stack.length;
	}

	isEmpty() {
		return this._stack.length === 0;
	}

	peek() {
		if(this.isEmpty()) {
			return null;
		}
		else {
			return this._stack[this.size()-1];
		}
	}

	pop() {
		if(this.isEmpty()) {
			return null;
		}
		else {
			return this._stack.pop()
		}
	}
}


class MyQueue {
	constructor() {
		this.newStack = new Stack();
		this.oldStack = new Stack();
	}

	push(val) {
		this.newStack.push(val);
	}

	loadOldStack() {
		while(! this.newStack.isEmpty()) {
			this.oldStack.push(this.newStack.pop());
		}
	}

	peek() {
		if (this.oldStack.isEmpty()) {
			this.loadOldStack();
		}
		return this.oldStack.peek();
		// if (this.oldStack.isEmpty()) {
		// 	return null;
		// }
		// else {
		// 	return this.oldStack[this.oldStack.size()-1];
		// }
	}

	pop() {
		if (this.oldStack.isEmpty()) {
			this.loadOldStack();
		}
		return this.oldStack.pop();
	}
}

let mQ1 = new MyQueue();
for(let i =0; i < 5; i++) {
	mQ1.push(i);
}
console.log(mQ1.newStack._stack);
console.log(mQ1.pop());
console.log(mQ1.peek());
mQ1.push(7);
console.log(mQ1.peek());
console.log(mQ1.pop());