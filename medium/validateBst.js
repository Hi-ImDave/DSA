// 
// Return:
// Example: input - return -
// Pseudo Code:
class BST{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new BST(10);
let node1 = new BST(5)
let node2 = new BST(15)
let node3 = new BST(2)
let node4 = new BST(5)
let node5 = new BST(13)
let node6 = new BST(22)
let node7 = new BST(1)
let node8 = new BST(14)

tree.left = node1;
tree.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node5.right = node8;

function validateBst(tree, min = -Infinity, max = Infinity){
    if(tree === null) return true;
    if(tree.value < min || tree.value >= max) return false;
    return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)
}

validateBst(tree)