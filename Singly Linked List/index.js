class Node {
  constructor (value) {
    this.value = value;
    this.nextIndex = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if (this.head === null) return undefined;
    // checking if empty
    let current = this.head;
    let pre = null;
    // initializing variables for loop
    while (current.nextIndex) {
      pre = current;
      current = current.nextIndex;
    }
    // loop that will assign last (current) and 2nd from last elements
    this.tail = pre;
    // changing the tail
    let forReturn = current;
    // taking obj for return, because we want to delete it
    delete current.value;
    delete current.nextIndex;
    // deleting the current Node
    this.length--;
    // decrementing list length
    if (pre !== null) pre.nextIndex = null;
    // severing the connection to the deleted Node
    if (this.length === 0) { 
      this.head = null;
    }
    // checking if there's 1 element, so we need to delete head
    return forReturn;
  }

  shift() {
    if (this.head === null) return undefined;
    // checking if empty
    let forReturn = this.head;
    // saving the Node for return
    this.head = this.head.nextIndex;
    // updating the head
    this.length--;
    // decrementing the lenght of the list
    if (this.length === 0) { 
      this.tail = null;
    }
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
    // initializing var
    for (let i = 0; i < index; i++) {
      current = current.nextIndex;
    }
    // iterating until we reach the index
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
    newNode.nextIndex = prevNode.nextIndex;
    prevNode.nextIndex = newNode;
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
    // getting previous Node and saving the deleted Node 
    prevNode.nextIndex = deletedNode.nextIndex;
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
      thisNode.nextIndex = prevNode;
      prevNode = thisNode;
      thisNode = nextNode;
      nextNode = thisNode.nextIndex;
    }
    thisNode.nextIndex = prevNode;
    return this;
  }

// 1,   3,   5,   6
// t  <-   <-   <-
//                h
//          pre this next
// 10, 15, 23 ,25, 35 , 45
}

