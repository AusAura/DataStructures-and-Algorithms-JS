class Node {
  constructor (value) {
    this.value = value;
    this.nextIndex = null;
    this.prevIndex = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (value) {
    let newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextIndex = newNode;
      newNode.prevIndex = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if (this.head === null) return undefined;
    // checking if empty
    let current = this.tail;
    let prev = this.tail.prevIndex;
    // assigning prev and current Nodes
    if (this.length === 1) { 
      this.head = null;
    } else {
    // checking if there's 1 element, so we need to delete head
      prev.nextIndex = null
      this.tail.prevIndex  = null;
    }
    // severing the connection for both of the Nodes
    this.tail = prev;
    // changing the tail
    this.length--;
    // decrementing list length
    return current;
  }

  shift() {
    if (this.head === null) return undefined;
    // checking if empty
    let forReturn = this.head;
    // saving the Node for return
    this.head = this.head.nextIndex;
    // updating the head
    forReturn.nextIndex = null;
    if (this.head !== null) this.head.prevIndex = null;
    // severing the connections
    this.length--;
    // decrementing the lenght of the list
    if (this.length === 0) this.tail = null;
    // checking if there's 1 element, so we need to delete the tail
    return forReturn;
  }

  unshift(value) {
    let newNode = new Node(value);
    // creating a new Node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // checking list is empty
    } else {
      this.head.prevIndex = newNode;
      newNode.nextIndex = this.head;
      // if not empty, setting next for newly created Node
      this.head = newNode;
      // relink head to the new Node
    }
    this.length++;
    // increment list length
    return this;
    // return the list
  }

  get (index) {
    if (index < 0 || index > this.length - 1) return null;
    // checking for negatives and indexes out of range
    let current = this.head;
    // initializing var from the head

    if (index/(this.length - 1) <= 0.5) {
      for (let i = 0; i < index; i++) {
        current = current.nextIndex;
      // iterating until we reach the index
      }
    } else {
      current = this.tail;
      // initializing var from the head
      for (let i = 0; i !== (this.length - index - 1); i++) {
      current = current.prevIndex;
      // iterating until we reach the index 
      }
    }

    return current;
  }


  set (index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert (index, value) {
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    // check for adding 1st and last index in the list
    if (index < 0 || index > this.length) return false;
    // check for invalid index
    let prevNode = this.get(index - 1);
    // saving previous Node 
    let newNode = new Node(value);
    // creating a new Node
    newNode.nextIndex = prevNode.nextIndex, newNode.prevIndex = prevNode;
    prevNode.nextIndex.prevIndex = newNode, prevNode.nextIndex = newNode;
    // updating nextIndex for the new Node + rewiring prevNode to current
    this.length++;
    return true;
  }

  remove (index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    // check for removing 1st and last index in the list
    if (index < 0 || index >= this.length) return null;
    // check for invalid index
    let prevNode = this.get(index - 1);
    let deletedNode = prevNode.nextIndex;
    let nextNode = deletedNode.nextIndex;
    // getting previous Node and saving the deleted Node 
    prevNode.nextIndex = deletedNode.nextIndex;
    deletedNode.prevIndex = null;
    nextNode.prevIndex = prevNode;
    deletedNode.nextIndex = null;
    // updating nextIndex for the prevNode
    this.length--;
    return deletedNode;
  }

  reverse () {
    let prevNode = this.head;
    let thisNode = prevNode.nextIndex;
    let nextNode = thisNode.nextIndex;
    prevNode.nextIndex = null;
    [[this.head, this.tail] = [this.tail, this.head]]; 
    for (let i = 0; i < this.length - 2; i++) {
      prevNode.prevIndex = thisNode;
      thisNode.nextIndex = prevNode;
      thisNode.prevIndex = nextNode;
      prevNode = thisNode;
      thisNode = nextNode;
      nextNode = thisNode.nextIndex;
    }
    thisNode.nextIndex = prevNode;
    thisNode.prevIndex = null;
    return this;
  }

}

// 10     20    30     40    50
// T                          H
// n    <-     <-    <-    <-
// p   ->      ->    ->     ->
//                    prev  this  next
