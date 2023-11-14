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

//   removeEdge(vert1, vert2) {
//     for (let i = 0; i < this.adjacencyList[vert1].length; i++) {
//       if (this.adjacencyList[vert1][i] === vert2) {
//         this.adjacencyList[vert1] = this.adjacencyList[vert1].splice(i-1, i);
//         break;
//       }  
//     }
//     for (let i = 0; i < this.adjacencyList[vert2].length; i++) {
//       if (this.adjacencyList[vert2][i] === vert1) {
//         this.adjacencyList[vert2] = this.adjacencyList[vert2].splice(i-1, i);
//         break;
//       }  
//     }
//     return this.adjacencyList;
//   }
// }

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

}



var g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Tokyo', 'Aspen');
g.removeVertex('Dallas');

console.log(g);