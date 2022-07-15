// You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.

// Return:
// Example: input - return -
// Pseudo Code:

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      const queue = [this];
      while(queue.length > 0){
        const currentNode = queue.shift();
        array.push(currentNode.name);
        for(const child of currentNode.children){
          queue.push(child)
        }
      }
      return array;
    }
  }