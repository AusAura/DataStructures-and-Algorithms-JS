
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    // Heap will be build out of priorities, values do not matter
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
    // It will be array of Nodes
  }

  bubbleUp () {
    let index;
    if (this.values.length > 0) index = this.values.length - 1;
    else index = 0;
    // finding index of last element in the Heap, covering the edge case with empty Heap
    let parentIndex;
    if (index !== 0) parentIndex = Math.floor((index-1)/2);
    else parentIndex = 0;
    // using formula to find the parent of the new Heap, covering edge case with empty or 1-Node Heap
    while (this.values[parentIndex].priority > this.values[index].priority) {
      // loop until we have our Node priority bigger than the parent's or equal (1 is big, 5 is small)
      // equal means that there's no more parents, this is the root
      [[this.values[parentIndex], this.values[index]]] = [[this.values[index], this.values[parentIndex]]];
      // swapping the values
      index = parentIndex;
      // updating the index after swapping
      if (index !== 0) parentIndex = Math.floor((index-1)/2);
      else break;
      // finding new parent after swapping, breaking out if Node has reached the root (index = 0)
    }
    return true;
  }

  enqueue (value, priority) {
    // takes 2 params now
    let newNode = new Node(value, priority);
    // creating the Node
    this.values.push(newNode);
    // pushing the Node to the end of the Heap
    this.bubbleUp();
    return this;
  }

  bubbleDown() {
    let index = 0, parentIndex;
    // declaring newly added Node index at root
    if (!this.values[1] && !this.values[2]) return false;
    // edge case, last Node in the Heap
    if (!this.values[1] && this.values[2]) parentIndex = 2;
    else if (this.values[1] && !this.values[2]) parentIndex = 1;
    // edge cases, two last Nodes in the Heap
    else if (this.values[1].priority < this.values[2].priority) parentIndex = 1;
    else parentIndex = 2;
    // checking which of children priority is bigger, assigning parentIndex of it
    while (this.values[parentIndex].priority < this.values[index].priority) {
      // loop until we have our child priority lesser than the parent (less = bigger priority)
      // = OR > means that we have bubbled the Node to the bottom 
      [[this.values[parentIndex], this.values[index]]] = [[this.values[index], this.values[parentIndex]]];
      // swapping the values
      index = parentIndex;
      // updating the index after swapping
      if (this.values[(index * 2) + 1] < this.values[(index * 2) + 2]) parentIndex = (index * 2) + 1;
      else parentIndex = (index * 2) + 2;
      // finding new parentIndex after swapping, for this checking smallest priority of the children
      if (parentIndex > this.values.length - 1) break;
      // if both of the parentIndex is out of length, it will break
      // it will mean that Node has reached the bottom (does not have children)
    }
    return true;
  }

  dequeue () {
    let value = this.values[0];
    // saving the value for return
    if (this.values.length === 1) this.values.pop();
    // edge case, last Node
    else if (value) { 
      // edge case for empty Heap
      this.values[0] = this.values.pop();
    // removing most recently added Node of the Heap and puting it at root
      this.bubbleDown();
    }
    return value || -1;
  }
    
}


var tree = new PriorityQueue();

tree.enqueue(41, 1);
tree.enqueue(39, 0);
tree.enqueue(33, 5);
tree.enqueue(18, 3);
tree.enqueue(27, 1);
tree.enqueue(12, 0);
console.log(tree);
// console.log(tree.insert(56));
// console.log(tree.find(0));
// console.log(tree.find(15));
// console.log(tree.find(56));
// console.log(tree.find(1));


