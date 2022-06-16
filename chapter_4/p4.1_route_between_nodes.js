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


let gr1 = new Graph();
gr1.addNode("A");
gr1.addNode("B");
gr1.addNode("C");
gr1.addNode("D");
gr1.addNode("E");
gr1.addNode("F");

gr1.addEdge('A', 'B');
gr1.addEdge('A', 'C');
gr1.addEdge('B', 'C');
gr1.addEdge('D', 'E');

//				A          D --* E
//             / \
//            *   *
//			 C *-- B


console.log(gr1.nodes);
console.log(checkRoute("A", "C", gr1));
console.log(checkRoute("A", "E", gr1));
console.log(checkRoute("B", "A", gr1));
console.log(checkRoute("D", "E", gr1));

//What if the graph is bi-directional.


