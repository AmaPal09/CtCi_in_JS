/*
Sort Stack
Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek and isEmpty.
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
		return this.size() === 0;
	}

	push(val) {
		this._stack.push(val);
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		return this._stack[this.size()-1];
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}
		return this._stack.pop();
	}
}


const sortStack = (inStack) => {
	let tmpvar = null;
	let tempStack = new Stack();

	while(! inStack.isEmpty()) {
		tmpvar = inStack.pop();
		// console.log(tmpvar);

		while(! tempStack.isEmpty() && tempStack.peek() > tmpvar) {
			inStack.push(tempStack.pop());
		}
		// console.log(inStack._stack);
		tempStack.push(tmpvar);
		// console.log(tempStack._stack);
	}

	while (! tempStack.isEmpty()) {
		inStack.push(tempStack.pop());
	}
}

let t1 = new Stack();
t1.push(4);
t1.push(6);
t1.push(3);
t1.push(1);
t1.push(8);
t1.push(5);
console.log(t1._stack);
sortStack(t1);
console.log(t1._stack);