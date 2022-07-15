// Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

// Return:
// Example: input - return -
// Pseudo Code:

function invertBinaryTree(tree) {
    if(tree === null) return;
      swapChildren(tree);
      invertBinaryTree(tree.left);
      invertBinaryTree(tree.right);
  }
  
  function swapChildren(tree){
    let placeHolder = tree.left;
    tree.left = tree.right;
    tree.right = placeHolder;
  }