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
		}
		else {
			if (edge in this.nodes[vertex]) {
				return "edge already exists";
			}
			else {
				this.nodes[vertex].push(edge);
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



//ASSUMPTIONS
// Prerequisit project of each node is listed as its edge. Its direction.

// Sol
// 1) Find nodes with no incoming edges. This ensure we staert with some project
// which does not depend on any other project. If no such project found, cyclic dependencies. So exit with error
// 2) Remove this project edge from all other project. Once its built, there
// is no need to store this project. As there is no dependency once its completed.
// 3) Add the completed project to the project order.
// 4) Look for nodes with no incoming edges again. Repeat 1,2,3.

function createBuildOrder(inGraph) {
	let buildOrderArray = [];
	let independentPrjs;

	while(Object.keys(inGraph.nodes).length != 0) {
		independentPrjs = findIndependentPrjs(inGraph);
		//Check for cyclic prjs
		//If prjs present inGraph but no independent prjs found then cyclic
		if (independentPrjs.length == 0) {
			return "Error: Cyclic dependencies";
		}

		let i = 0;
		while (i < independentPrjs.length) {
			let prj = independentPrjs[i]
			completePrj(prj, inGraph);
			buildOrderArray.push(prj);
			i++;
		}
	}

	return buildOrderArray;
}


function findIndependentPrjs(grph) {
	//Find nodes with empty edge list
	let indPrj = [];
	for (let node in grph.nodes) {
		if (grph.nodes[node].length == 0) {
			//No prj is dependent on this prj
			indPrj.push(node);
		}
	}
	return indPrj;
}

function completePrj(node, inGraph) {
	//Remove all edges attached to provided nodes and then remove node
	// from graph
	for (let currNode in inGraph.nodes) {
		for (let i = 0; i < inGraph.nodes[currNode].length; i++) {
			if (inGraph.nodes[currNode][i] == node) {
				inGraph.nodes[currNode].splice(i, 1);
			}
		}
	}

	inGraph.removeNode(node);
}

console.log(createBuildOrder(gr1));