class WGraph {
  // Undirected graph, object for storing connections
  constructor() {
    this.adjacencyList = {};
  }

  addVertex (name) {
    if(this.adjacencyList[name]) return false;
    this.adjacencyList[name] = [];
    return true;
  }

  addEdge (vert1, vert2, weight) {
    this.adjacencyList[vert1].push({vertex: vert2, weight});
    this.adjacencyList[vert2].push({vertex: vert1, weight});
  }

// removeEdge(vert1, vert2) {
//   this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2);
//   this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1);
//   return this.adjacencyList;
// }

// removeVertex (vertex) {
//   let forReturn = this.adjacencyList[vertex];
//   for (let each of this.adjacencyList[vertex]) {
//     this.removeEdge(each, vertex);
//   }
//   delete this.adjacencyList[vertex];
//   return forReturn;
// }

// DFS_rec(vertex) {
//   const alreadyVisited = {};
//   const pathList = [];
//   const Graph = this;
//   function traverser(vertex) {
//     if (!vertex) return;
//     if (alreadyVisited[vertex]) return;
//     alreadyVisited[vertex] = true;
//     pathList.push(vertex);
//     let current = Graph.adjacencyList[vertex];
//     for (let each of current) {
//       traverser(each);
//     }
//   }

//   traverser(vertex);
//   return pathList;
// }

// DFS_it(start) {
//   const stack = [start];
//   const pathList = [];
//   const visited = {};
//   while (stack[0]) {
//     let current = stack.pop();
//     if (!visited[current]) {
//       pathList.push(current);
//       visited[current] = true;
//       this.adjacencyList[current].forEach(n => stack.push(n));
//     }
//   }
//   return pathList;
// }

// BFS(start) {
//   const queue = [start];
//   const pathList = [];
//   const visited = {};
//   let current;
//   visited[start] = true;
//   while (queue[0]) {
//     current = queue.shift();
//     pathList.push(current);
//     this.adjacencyList[current].forEach(n => {
//       if (!visited[n]) {
//         queue.push(n);
//         visited[n] = true;
//       }
//     })
//   }
//   return pathList;
// }

}



let g = new WGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")


g.addEdge("A", "B", 10)
g.addEdge("A", "C", 6)
g.addEdge("B","C", 3)

console.log(g)


