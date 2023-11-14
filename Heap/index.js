
class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12];
  }

  bubbleUp () {
    let index = this.values.length - 1;
    // taking the newly addeed Heap element
    let parentIndex = Math.floor((index-1)/2);
    // using formula to find the parent of the new Heap
    while (this.values[parentIndex] < this.values[index]) {
      // loop until we have our value smaller than the parent or equal
      // equal means that there's no more parents, this is the root
      // the edge case is that this.values[-1] = undefined < 0, which returns false
      [[this.values[parentIndex], this.values[index]]] = [[this.values[index], this.values[parentIndex]]];
      // swapping the values
      index = parentIndex;
      // updating the index after swapping
      parentIndex = Math.floor((index-1)/2);
      // finding new parent after swapping
    }
    return true;
  }

  insert (value) {
    this.values.push(value);
    // pushing the value to the end of the Heap
    this.bubbleUp();
    return this;
  }

  bubbleDown() {
    let index = 0, parentIndex;
    // declaring newly added root index
    if (this.values[1] > this.values[2]) parentIndex = 1;
    else parentIndex = 2;
    // checking which of children values bigger, assigning parentIndex to it
    while (this.values[parentIndex] > this.values[index]) {
      // loop until we have our child bigger than the parent
      // the edge case is that this.values[-1] = undefined is not > than this.values[index],
      // it means that we have bubbled value to the bottom 
      [[this.values[parentIndex], this.values[index]]] = [[this.values[index], this.values[parentIndex]]];
      // swapping the values
      index = parentIndex;
      // updating the index after swapping
      if (this.values[(index * 2) + 1] > this.values[(index * 2) + 2]) parentIndex = (index * 2) + 1;
      else parentIndex = (index * 2) + 2;
      // finding new parentIndex after swapping, for this checking biggest of the children
      // if both of the indexes are out of length, it does not matter
      // loop will break because of it
    }
    return true;
  }

  extractMax () {
    let value = this.values[0];
    // saving the value for return
    if (value) { 
      // edge case for empty Heap
      this.values[0] = this.values.pop();
    // removing the Max value from the top of the Heap and puting it at root
      this.bubbleDown();
    }
    return value;
  }
    
}


var tree = new MaxBinaryHeap();

// tree.insert(4);
// tree.insert(1);
// tree.insert(12);
// tree.insert(56);
console.log(tree.extractMax());
console.log(tree);

