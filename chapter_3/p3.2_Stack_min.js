/*
Stack Min
How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.
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
1) A -> B -> C -> D -> E -> C [same as the C earlier] C
*/

class Stack {
	constructor() {
		this.data = [];
	}

	size() {
		return this.data.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	push(val) {
		this.data.push(val);
	}

	pop() {
		return this.data.pop();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		else {
			return this.data[this.size() - 1];
		}
	}

	_toArray() {
		return this.data;
	}
}


class minStack extends Stack {
	constructor() {
		super();
		// this._stack = new Stack();
		this._minStack = new Stack();
		this._min = null;
	}

	push(val) {
		super.push(val);
		if (this._min === null || val < this._min) {
			this._min = val;
			this._minStack.push(val);
		}
	}

	pop() {
		let value = super.pop();
		if (value == this._minStack.peek()) {
			this._minStack.pop();
			this._min = this._minStack.peek();
		}
		return value;

	}

	min() {
		return this._min;
	}
}

let min1 = new minStack();
min1.push(2);
min1.push(3);
min1.push(1);
console.log(min1.min());
console.log(min1.pop());
console.log(min1.min());
min1.push(8);
console.log(min1.min());
console.log(min1.data);
min1.push(0);
console.log(min1.data);
console.log(min1.min());
min1.push(2);
console.log(min1.data);
console.log(min1.min());


console.log(min1.data);
console.log(min1._minStack.data);
console.log(min1.min());
console.log(min1._min);
console.log(min1.pop());
console.log(min1.pop());
console.log(min1.pop());
console.log(min1.isEmpty());