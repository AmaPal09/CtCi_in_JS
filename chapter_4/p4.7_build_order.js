/*
Build Order
You are given a list of projects and a list of dependencies (which
is a list of pairs of projects, where the second project is dependent
on the first project). All of a project's dependencies must be built
before the project is.
Find a build order that will allow the projects to be built. If
there is no valid build order, return an error.
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
1) projects [a,b,c,d,e];
dependendices [[a,d], [f,b], [b,d], [f,a], [d,c]];
*/

class Graph {
	constructor() {
		this.nodes = {};
	}

	addNode(vertex) {
		if (this.nodes[vertex] != undefined) {
			return "Node already exists";
		}
		else {
			this.nodes[vertex] = [];
		}
	}

	//This is a directed graph
	addEdge(vertex, edge) {
		if (this.nodes[vertex] == undefined) {
			return "Node does not exist";
			console.log("1");
		}
		else {
			if (edge in this.nodes[vertex]) {
				return "edge already exists";
				console.log("2");
			}
			else {
				this.nodes[vertex].push(edge);
				console.log("3");
				console.log(vertex, this.nodes[vertex]);
			}
		}
	}

	removeNode(vertex) {
		if (this.nodes[vertex] == undefined) {
			return "Node does not exist";
		}

		for (let currNode in this.nodes) {
			if (vertex in this.nodes[currNode]) {
				let index = this.nodes[currNode].indexOf(vertex);
				this.nodes[currNode].splice(index, 1);
			}
		}

		delete this.nodes[vertex];
	}

	removeEdge(vertex, edge) {
		if (this.nodes[vertex] == undefined) {
			return " Node does not exist";
		}
		else {
			if (!(edge in this.nodes[vertex])) {
				return "edge does not exist";
			}
			else {
				let index = this.nodes[vertex].indexOf(edge);
				this.nodes[vertex].splice(index, 1);
			}
		}
	}

	display() {
		for (let key in this.nodes) {
			console.log(`${key}, ${this.nodes[key]}`);
		}
	}
 }

let gr1 = new Graph();
gr1.addNode("a1");
gr1.addNode("b1");
gr1.addNode("c1");
gr1.addNode("d1");
gr1.addNode("e1");
gr1.addNode("f1");
gr1.addEdge("d1","a1");
gr1.addEdge("b1","f1");
gr1.addEdge("d1","b1");
gr1.addEdge("a1","f1");
gr1.addEdge("c1","d1");
gr1.display();



