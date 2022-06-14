/*
Stack of plates
Imagine a (literal) stack of plates. If the stack gets too high,
it might topple, Therefore in real life, we would likely start a new
stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed
of several stacks and should create a new stack once the previous one
exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
behave identically to a single stack (that is, pop() should return the
same values as it would if there were just a single stack).
FOLLOW UP
Implement a function popAt (int index) which performs a pop operation
on a specific sub-stack.
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

	size() {
		return this._stack.length;
	}

	isEmpty() {
		return this._stack.length === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return null
		}
		else {
			return this._stack[this.size() - 1];
		}
	}

	push(val) {
		this._stack.push(val);
	}

	pop() {
		if (this.isEmpty()) {
			return null
		}
		else {
			return this._stack.pop();
		}
	}
};


class setOfStacks {
	constructor(capacity) {
		this.capacity = capacity;
		this._stackSet = []
	}

	getLastStack() {
		if (this.isEmpty()) {
			return null;
		}
		else {
			return this._stackSet[this._stackSet.length - 1];
		}
	}

	isEmpty() {
		return this._stackSet.length === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return null
		}
		else {
			let lastStack = this.getLastStack();
			return lastStack.peek();
		}
	}

	push(val) {
		let lastStack = this.getLastStack();
		// console.log(lastStack);
		if (lastStack == null || lastStack.size() == this.capacity) {
			let newStack = new Stack();
			newStack.push(val);
			this._stackSet.push(newStack);
		}
		else {
			lastStack.push(val);
		}
	}

	pop() {
		if (this._stackSet.length == 0) {
			return null;
		}
		let lastStack = this.getLastStack();
		let val = lastStack.pop();
		if (lastStack.size() == 0) {
			this._stackSet.pop();
		}
		return val;
	}

	popAt(index) {
		if (index < 0 || index >= this._stackSet.length) {
			return undefined;
		}
		let val = this._stackSet[index].pop();
		if (this._stackSet[index].size() == 0) {
			this._stackSet.splice(index,1);
		}
		return val;
	}

}

// let bunchOPlates = new setOfStacks(4);
// for(let i = 0; i < 13; i++){
// 	bunchOPlates.push(i);
// }
// console.log(bunchOPlates._stackSet[2]._stack);



module.exports = {
	setOfStacks
}
