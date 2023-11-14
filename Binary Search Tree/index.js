class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert (value) {
    let currentNode = this.root;
    // this var is for checking
    let prevNode = this.root;
    // this var is for creating parent-child connection
    let destination = null;
    // this one is for destination of the connection
    while (true) {
      // Starting the infinite loop for search
      if (!currentNode) {
        // find case
        currentNode = new Node(value);
        // creating a Node
        if (destination !== null) destination ? prevNode.right = currentNode : prevNode.left = currentNode ; 
        //checking for 1st pass !== null + depending on the destination, setting the connection
        return this;
        // end of the function
      }

      prevNode = currentNode;
      // changing the previous Node, because check was done already
      if (value > currentNode.value) {
        // condition check
        destination = true;
        // destination set
        currentNode = currentNode.right;
        // changing the Node for check
      } else if (value < currentNode.value) { 
        destination = false;
        currentNode = currentNode.left
      } else { 
        destination = true;
        currentNode = currentNode.right;
      }
      // other conditions for two other possible cases
    }
  }

  find (value) {
    let currentNode = this.root;
    while (true) {

      if (!currentNode) return false;

      if (value > currentNode.value) currentNode = currentNode.right;
      else if (value < currentNode.value) currentNode = currentNode.left
      else return true;
    }
  }
    
}


var tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node (7);

tree.insert(4);
tree.insert(1);
tree.insert(12);
tree.insert(56);
console.log(tree.insert(56));
console.log(tree.find(0));
console.log(tree.find(15));
console.log(tree.find(56));
console.log(tree.find(1));


