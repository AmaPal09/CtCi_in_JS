/*
Route Between Nodes
Given a directed graph and two nodes (S and E), design an algorithm to find out whether there is a route from S to E
*/

/*
Explaination:
Can use BFS or DFS to traverse through the graph.
DFS is simple recursion but DFS will search at least one level deeper than the target node level as it will access nodes depthwise
BFS is a queue so extra datastructure but it will find the path/route faster as
as it will search closer to the starting node first and move away only when and 1 level every time it is necessary
*/

/*
Questions:
1) What happens when no route present?
2) What if target node is not found?
3) What if graph is empty?
4) Does the solution return True or False or the actual route?
*/

/*
Assumption:
1) Return whether route is present
2) Graph is directed.
3) Node relationship in the form of dictionary/objects.
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

	peek() {
		if(this.isEmpty()){
			return null;
		}
		else{
			return this._queue[this.size()-1];
		}
	}

	dequeue() {
		if(this.isEmpty()){
			return null;
		}
		else{
			return this._queue.shift();
		}
	}
}

class Graph {
	constructor() {
		this.nodes = {};
	}

	addNode(node) {
		if (this.nodes[node] !== undefined){
			return "Node already exist";
		}
		else {
			this.nodes[node] = {};
		}
	}

	addEdge(node,edge) {
		if (this.nodes[node] === undefined){
			return "Node does not exist";
		}
		else if (this.nodes[node][edge]) {
			return "Edge already exist";

		}
		else{
			this.nodes[node][edge] = true;
		}
	}

	hasNode(node) {
		return this.nodes[node] !== undefined;
	}

	hasEdge(node, edge){
		if (this.nodes[node] === undefined){
			return "Node does not exist";
		}
		else {
			return this.nodes[node][edge] !== undefined;
		}
	}

	getEdges(node) {
		if(this.nodes[node] === undefined){
			return "Node does not exist";
		}
		else {
			return this.nodes[node];
		}
	}

	removeEdge(node, edge) {
		if(this.nodes[node] === undefined) {
			return "Node does not exist";
		} else {
			delete this.nodes[node][edge];
		}
	}

	removeNode(node) {
		if(this.nodes[node] === undefined) {
			return "Node does not exist";
		}
		else {
			delete this.nodes[node];
			for (let currNode in this.nodes) {
				if (this.nodes[currNode][node] !== undefined) {
					delete this.nodes[currNode][node];
				}
			}
		}
	}
}


const checkRoute = (source, target, inGraph) => {
	if (! inGraph.hasNode(source)) {
		return "unknown source";
	}

	if (! inGraph.hasNode(target)) {
		return "unknown target";
	}

	let q1 = new Queue();
	let visited = new Set();
	q1.enqueue(source);

	let currEdge;
	while (!q1.isEmpty()) {
		currEdge = q1.dequeue();
		if (currEdge === target) {
			return true;
		}

		if (!visited.has(currEdge)) {
			visited.add(currEdge);
			for (let nextEdge in inGraph.getEdges(currEdge)) {
				q1.enqueue(nextEdge);
			}
		}
	}

	return false;
}


// let gr1 = new Graph();
// gr1.addNode("A");
// gr1.addNode("B");
// gr1.addNode("C");
// gr1.addNode("D");
// gr1.addNode("E");
// gr1.addNode("F");

// gr1.addEdge('A', 'B');
// gr1.addEdge('A', 'C');
// gr1.addEdge('B', 'C');
// gr1.addEdge('D', 'E');

// //				A          D --* E
// //             / \
// //            *   *
// //			 C *-- B


// console.log(gr1.nodes);
// console.log(checkRoute("A", "C", gr1));
// console.log(checkRoute("A", "E", gr1));
// console.log(checkRoute("B", "A", gr1));
// console.log(checkRoute("D", "E", gr1));

//What if the graph is bi-directional.



//Approach 2
/*
Assumptions
1) Graph is bidirectional.
2) Implemented using adjacency lists
2) Okay to use Bidirectional search (BFS in both directions) to come
	find solution quicker
*/

class biGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		this.adjacencyList[vertex] = [];
		// console.log(this.adjacencyList)
	}

	addEdge(source, destination) {
		if ( this.adjacencyList[source] === undefined) {
			this.adjacencyList[source] = [];
		}
		if ( this.adjacencyList[destination] === undefined) {
			this.adjacencyList[destination] = [];
		}
		this.adjacencyList[source].push(destination);
		this.adjacencyList[destination].push(source);
	}

	hasVertex(vertex) {
		return this.adjacencyList[vertex] !== undefined;
	}

	removeEdge(source, destination) {
		let tempList = this.adjacencyList[source] ;
		this.adjacencyList[source] = [];
		for (let v in tempList) {
			if (v !== destination) {
				this.adjacencyList[source].push(v);
			}
		}

		tempList = this.adjacencyList[destination];
		this.adjacencyList[destination] = [];
		for(let v in tempList) {
			if(v !== source) {
				this.adjacencyList[destination].push(v);
			}
		}
	}

	removeVertex(vertex) {
		while(this.adjacencyList[vertex]) {
			let adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}

		delete this.adjacencyList[vertex];
	}

	getEdges(vertex) {
		// console.log(vertex);
		if(!this.adjacencyList[vertex]) {
			return null;
		}
		// console.log(this.adjacencyList[vertex]);
		return this.adjacencyList[vertex];
	}
}


const checkRouteBi = (source, target, inGraph) => {
	if (! inGraph.hasVertex(source)) {
		return "unknown source";
	}

	if (! inGraph.hasVertex(target)) {
		return "unknown target";
	}

	let q1 = new Queue();
	let q2 = new Queue();
	let visited1 = new Set();
	let visited2 = new Set();
	q1.enqueue(source);
	q2.enqueue(target);

	let currEdge1;
	let currEdge2;
	while (!q1.isEmpty() || !q2.isEmpty()) {
		// console.log(visited1)
		// console.log(visited2)
		if (!q1.isEmpty()) {
			currEdge1 = q1.dequeue();
			if (currEdge1 === target) {
				return true;
			}
			if (! visited1.has(currEdge1)) {
				visited1.add(currEdge1);
				let nextEdgeList1 = inGraph.getEdges(currEdge1);
				if (nextEdgeList1 !== null ||  nextEdgeList1.length > 0) {
					for(let nextEdge of nextEdgeList1) {
						q1.enqueue(nextEdge);
					}
				}
				// }

				// inGraph.adjacencyList[currEdge1].forEach(
				// 	nextEdge => q1.enqueue(nextEdge));
				// }
			}
		}

		if(!q2.isEmpty()){
			currEdge2 = q2.dequeue();

			if(currEdge2 === source){
				return true;
			}
			if(! visited2.has(currEdge2)) {
				visited2.add(currEdge2);
				// for(let nextEdge of inGraph.getEdges(currEdge2)) {
				// 	q2.enqueue(nextEdge);
				let nextEdgeList2 = inGraph.getEdges(currEdge2);
				if(nextEdgeList2 !== null || nextEdgeList2.length > 0) {
					for(let nextEdge of nextEdgeList2) {
						q2.enqueue(nextEdge);
					}
				}
				// inGraph.adjacencyList[currEdge2].forEach(nextEdge => q2.enqueue(nextEdge));
				// }
			}
		}
	}

	return false;
}


let gr2 = new biGraph();
gr2.addVertex("A");
gr2.addVertex("B");
gr2.addVertex("C");
gr2.addVertex("D");
gr2.addVertex("E");
gr2.addVertex("F");

gr2.addEdge('A', 'B');
gr2.addEdge('A', 'C');
gr2.addEdge('B', 'C');
gr2.addEdge('D', 'E');

//				A          D --- E
//            /   \
//			 C --- B
console.log("Test bidirectional search");
console.log(gr2.adjacencyList);
console.log(checkRouteBi("A", "C", gr2));
console.log(checkRouteBi("A", "E", gr2));
console.log(checkRouteBi("B", "A", gr2));
console.log(checkRouteBi("D", "E", gr2));


