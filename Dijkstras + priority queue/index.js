class PriorityQueue {
  constructor () {
    this.values = []
  }

  enqueue (val, prio) {
    this.values.push({val, prio});
    this.sort();
  }

  dequeue () {
    return this.values.shift();
  }

  sort () {
    this.values.sort((a,b) => a.prio - b.prio);
  }
}

// SIMPLE VERSION

// class Node {
//   constructor(value, priority) {
//     this.val = value;
//     this.prio = priority;
//     // Heap will be build out of priorities, values do not matter
//   }
// }

// class PriorityQueue {
//   constructor() {
//     this.values = [];
//     // It will be array of Nodes
//   }

//   bubbleUp () {
//     let index;
//     if (this.values.length > 0) index = this.values.length - 1;
//     else index = 0;
//     // finding index of last element in the Heap, covering the edge case with empty Heap
//     let parentIndex;
//     if (index !== 0) parentIndex = Math.floor((index-1)/2);
//     else parentIndex = 0;
//     // using formula to find the parent of the new Heap, covering edge case with empty or 1-Node Heap
//     while (this.values[parentIndex].priority > this.values[index].priority) {
//       // loop until we have our Node priority bigger than the parent's or equal (1 is big, 5 is small)
//       // equal means that there's no more parents, this is the root
//       [[this.values[parentIndex], this.values[index]]] = [[this.values[index], this.values[parentIndex]]];
//       // swapping the values
//       index = parentIndex;
//       // updating the index after swapping
//       if (index !== 0) parentIndex = Math.floor((index-1)/2);
//       else break;
//       // finding new parent after swapping, breaking out if Node has reached the root (index = 0)
//     }
//     return true;
//   }

//   enqueue (val, prio) {
//     // takes 2 params now
//     let newNode = new Node(val, prio);
//     // creating the Node
//     this.values.push(newNode);
//     // pushing the Node to the end of the Heap
//     this.bubbleUp();
//     return this;
//   }

//   bubbleDown() {
//     let index = 0, parentIndex;
//     // declaring newly added Node index at root
//     if (!this.values[1] && !this.values[2]) return false;
//     // edge case, last Node in the Heap
//     if (!this.values[1] && this.values[2]) parentIndex = 2;
//     else if (this.values[1] && !this.values[2]) parentIndex = 1;
//     // edge cases, two last Nodes in the Heap
//     else if (this.values[1].priority < this.values[2].priority) parentIndex = 1;
//     else parentIndex = 2;
//     // checking which of children priority is bigger, assigning parentIndex of it
//     while (this.values[parentIndex].priority < this.values[index].priority) {
//       // loop until we have our child priority lesser than the parent (less = bigger priority)
//       // = OR > means that we have bubbled the Node to the bottom 
//       [[this.values[parentIndex], this.values[index]]] = [[this.values[index], this.values[parentIndex]]];
//       // swapping the values
//       index = parentIndex;
//       // updating the index after swapping
//       if (this.values[(index * 2) + 1] < this.values[(index * 2) + 2]) parentIndex = (index * 2) + 1;
//       else parentIndex = (index * 2) + 2;
//       // finding new parentIndex after swapping, for this checking smallest priority of the children
//       if (parentIndex > this.values.length - 1) break;
//       // if both of the parentIndex is out of length, it will break
//       // it will mean that Node has reached the bottom (does not have children)
//     }
//     return true;
//   }

//   dequeue () {
//     let value = this.values[0];
//     // saving the value for return
//     if (this.values.length === 1) this.values.pop();
//     // edge case, last Node
//     else if (value) { 
//       // edge case for empty Heap
//       this.values[0] = this.values.pop();
//     // removing most recently added Node of the Heap and puting it at root
//       this.bubbleDown();
//     }
//     return value || -1;
//   }
    
// }

// ADVANCED VERSION

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

  findPath (start, end) {
    const shortest = new PriorityQueue();
    for (let each in this.adjacencyList) {
      if (each !== start) shortest.enqueue(each, Infinity);
      else shortest.enqueue(each, 0);
    } 
    // setting up Queue

    const distances = {};
    for (let each in this.adjacencyList) {
      distances[each] = Infinity;
    }
    distances[start] = 0;

    // settings up Distances obj

    const visited = [];
    const previous = {};
    previous[start] = null;
    let currentClosest, previousCurrent, totalWeight = 0, object, currentCheckedNeighbour, thisThis = this;
    let shortestPath = [];

    // initializing rest of the things

    function looking (a) 
      {
        if (a.vertex === currentCheckedNeighbour) return a.vertex;
        // we are looking for current neighbour in previous node.
    }

    function summarize (previousCurrent) {
      do {
        object = thisThis.adjacencyList[previousCurrent].find(looking);
        // in adj there's a object ->> vertex key ->> array adj list for it ->> objects of edges ->> vertex and weight keys, 
        // we create var that saves the edge with current neighbour or his previous path node 
        totalWeight += object.weight;
        // summing the weight of that node with all previously checked
        currentCheckedNeighbour = previousCurrent;
        // moving current to the next Node in the chain, it is crucial for looking() function
        previousCurrent = previous[previousCurrent]
        // previous is an obj ->> keys of vertex ->> value of previous node to it
        // Also moving previous Node on 1 step back in the chain. For tracking purposes.
      } while (previousCurrent !== null);
      // calculation whole weight of the path from the start to the current neighbour
      // until we reach the start which is only has previous as null.
    }

    function pathfinder2 (currentCheckedNeighbour) {
      do {
        shortestPath.push(currentCheckedNeighbour);
        currentCheckedNeighbour = previous[currentCheckedNeighbour];
      } while (currentCheckedNeighbour !== null);
      return shortestPath;
    }
    
    // functions

      while (shortest.values.length > 0) {
        currentClosest = shortest.dequeue();
        // taking the smallest distance node
        if (!visited.includes(currentClosest.val)) {
          // making sure that we do not push to visited & iterate through the node that has already been visited 
          visited.push(currentClosest.val);
          for (let each of this.adjacencyList[currentClosest.val]) {
            // iterating thorugh each of neighbours of the currentClosest (smallest) node
            if (currentClosest.vertex === start && each.vertex === end) {
              // check for the shortest path in 1st level
              currentCheckedNeighbour = each.vertex;
              object = this.adjacencyList[start].find(looking)
              visited.push(object.vertex);
              console.log(visited);
              return object.weight;
            }
            // this section requires two conditions to avoid false-positive at the end, when we will reach End as currectClosest
            if (!visited.includes(each.vertex)) {
              // checking to not recalculate distance for previosly visited nodes
              if (distances[each.vertex] > each.weight) {
                // if current distance from start to current neighbour of currentClosest is less than previously calculated, then...
                // If A->B edge is smaller than current distance
                previous[each.vertex] = currentClosest.val;
                // to the current neighbour, we add previous currentCloses for the current calculation
                previousCurrent = previous[each.vertex];
                // adding var for the calculation below, previous of the current neighbour
                currentCheckedNeighbour = each.vertex;
                totalWeight = 0;
                summarize(previousCurrent);
                distances[each.vertex] = totalWeight;
                shortest.enqueue(each.vertex, distances[each.vertex])
              }
            }
          }
        }
      }
      // console.log(visited);
      console.log("Closest distance from ${start} to the ${end} will be: ", distances[end]);
      // currentCheckedNeighbour = end;
      return pathfinder2(end).reverse();

  }
}




let g = new WGraph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B","E", 3)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("D","F", 1)
g.addEdge("F","E", 1)
g.addEdge("D","E", 3)

console.log(g.findPath("A", "E"))
