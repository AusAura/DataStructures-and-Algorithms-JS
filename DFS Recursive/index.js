class Graph {
  // Undirected graph, object for storing connections
  constructor() {
    this.adjacencyList = {};
  }

  addVertex (name) {
    if(this.adjacencyList[name]) return false;
    this.adjacencyList[name] = [];
    return true;
  }

  addEdge (vert1, vert2) {
    this.adjacencyList[vert1].push(vert2);
    this.adjacencyList[vert2].push(vert1);
  }

removeEdge(vert1, vert2) {
  this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2);
  this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1);
  return this.adjacencyList;
}

removeVertex (vertex) {
  let forReturn = this.adjacencyList[vertex];
  for (let each of this.adjacencyList[vertex]) {
    this.removeEdge(each, vertex);
  }
  delete this.adjacencyList[vertex];
  return forReturn;
}

DFS_rec(vertex) {
  const alreadyVisited = {};
  const pathList = [];
  const Graph = this;
  function traverser(vertex) {
    if (!vertex) return;
    if (alreadyVisited[vertex]) return;
    alreadyVisited[vertex] = true;
    pathList.push(vertex);
    let current = Graph.adjacencyList[vertex];
    for (let each of current) {
      traverser(each);
    }
  }

  traverser(vertex);
  return pathList;
}

}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.DFS_rec("A"))

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

