/*
Three in one
Describe how you could use a single array to implement three stacks
*/

/*
Explaination:
[
	top
	middletop
	middlebottom
	bottom
]
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


/*
Splice syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/
class ThreeInOne {
	constructor() {
		this.container = [];
		this.middleBottom = 0;
		this.middleTop = 0;
	}

	pushTop(val) {
		this.container.unshift(val);
		this.middleBottom++;
		this.middleTop++;
	}

	pushMid(val) {
		this.container.splice(this.middleTop, 0, val);
		this.middleBottom++;
	}

	pushBottom(val) {
		this.container.splice(this.middleBottom, 0, val);
	}

	popTop(val) {
		if (this.isEmptyTop()) {
			return undefined;
		}

		let answer = this.container.shift();

		if (this.middleBottom > 0) {
			this.middleBottom--;
			this.middleTop--;
		}

		return answer;
	}

	popMiddle(val) {
		if (this.isEmptyMiddle()) {
			return undefined;
		}

		let answer = this.container[this.middleTop];
		this.container.splice(this.middleTop, 1 );
		if (this.middleTop < this.middleBottom) {
			this.middleBottom-- ;
		}

		return answer;
	}

	popBottom(val) {
		if (this.isEmptyBottom()) {
			return undefined;
		}

		let answer = this.container[this.middleBottom];
		this.container.splice(this.middleBottom, 1);
		return answer
	}

	peekTop() {
		return this.isEmptyTop() ? undefined : this.container[0];
	}

	peekMiddle() {
		return this.isEmptyMiddle() ? undefined : this.container[this.middleTop - 1];
	}

	peekBottom() {
		return this.isEmptyBottom() ? undefined : this.container[this.middleBottom - 1];
	}

	isEmptyTop() {
		return this.middleTop === 0;
	}

	isEmptyMiddle() {
		return this.middleBottom === this.middleTop;
	}

	isEmptyBottom() {
		return this.middleBottom === this.container.length;
	}
}

// let tio = new ThreeInOne();

// tio.pushTop('1a');
// tio.pushTop('1b');
// tio.pushTop('1c');
// tio.pushMid('2a');
// tio.pushMid('2b');
// tio.pushMid('2c');
// tio.pushBottom('3a');
// tio.pushBottom('3b');
// tio.pushBottom('3c');

// console.log(tio.container);

// let a1 = tio.popTop();
// let b1 = tio.popMiddle();
// let c1 = tio.popBottom();
// console.log(a1, b1, c1);
// console.log(tio.container);

// let peek1 = tio.peekTop();
// let peek2 = tio.peekMiddle();
// let peek3 = tio.peekBottom();

// console.log(peek1, peek2, peek3);
// console.log(tio.container);

// let a2 = tio.popTop();
// let b2 = tio.popMiddle();
// let c2 = tio.popBottom();
// console.log(a2, b2, c2);
// console.log(tio.container);

// let isEmptya1 = tio.isEmptyTop();
// let isEmptyb1 = tio.isEmptyMiddle();
// let isEmptyc1 = tio.isEmptyBottom();
// console.log(isEmptya1, isEmptyb1, isEmptyc1);
// console.log(tio.container);

// let a3 = tio.popTop();
// let b3 = tio.popMiddle();
// let c3 = tio.popBottom();
// console.log(a3, b3, c3);
// console.log(tio.container);

// let isEmptya2 = tio.isEmptyTop();
// let isEmptyb2 = tio.isEmptyMiddle();
// let isEmptyc2 = tio.isEmptyBottom();
// console.log(isEmptya2, isEmptyb2, isEmptyc2);
// console.log(tio.container);

module.exports = {ThreeInOne}
