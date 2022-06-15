/*
Animal Shelter
An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in LinkedList data structure.
*/

/*
Explaination:
"Oldest" (based on arrival time.) So a normal queue should work here for current scenario.
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

class Queue {
	constructor() {
		this._queue = [];
	}

	size() {
		return this._queue.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	enqueue(val) {
		this._queue.push(val);
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		else {
			return this._queue.shift();
		}
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		else {
			return this._queue[0];
		}
	}
}

class Animal {
	constructor(name, type) {
		this._name = name;
		this._type = type;
	}
}

class AnimalShelter {
	constructor() {
		this._all = new Queue();
		this._cats = new Queue();
		this._dogs = new Queue();
	}

	enqueue(animal) {
		if (animal._type === "dog" ) {
			this._dogs.enqueue(animal);
			this._all.enqueue(animal);
		}
		else if(animal._type === "cat") {
			this._cats.enqueue(animal);
			this._all.enqueue(animal);
		}
	}

	dequeueDog() {
		if(this._dogs.isEmpty()){
			return null;
		}
		else {
			this._dogs.dequeue();
			return this._all.dequeue()
		}
	}

	dequeueCat() {
		if(this._cats.isEmpty()) {
			return null;
		}
		else {
			this._cats.dequeue();
			return this._all.dequeue();
		}
	}

	dequeueAny() {
		if (this._all.peek() === this._cats.peek()) {
			this._cats.dequeue();
			return this._all.dequeue();
		}
		else{
			this._dogs.dequeue();
			return this._dogs.dequeue();
		}
	}
}

let harry = new Animal("Harry", "cat");
let ron = new Animal("Ron", "dog");
let hagrid = new Animal("Hagrid", "dog");
let hermione = new Animal("Hermione", "cat");
let jinny = new Animal("Jinny", "dog");
let mcgonagall = new Animal("McGonagall", "cat");
let snape = new Animal("Snape", "dog");

let a1 = new AnimalShelter();
a1.enqueue(mcgonagall);
a1.enqueue(hagrid);
a1.enqueue(snape);
a1.enqueue(hermione);
a1.enqueue(harry);
a1.enqueue(ron);
a1.enqueue(jinny);
console.log(a1._all._queue);
console.log(a1._cats._queue);
console.log(a1._dogs._queue);
console.log(a1.dequeueAny());
console.log(a1.dequeueCat());
console.log(a1.dequeueDog());
console.log(a1._all._queue);
console.log(a1._cats._queue);
console.log(a1._dogs._queue);

