// Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.

// Return:
// Example: input - return -
// Pseudo Code:

function findClosestValueInBst(tree, target){
    let currentNode = tree;
    let closest = tree.value;
    while(currentNode !== null){
        if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
            closest = currentNode.value;
        }
        if(target < currentNode.value){
            currentNode = currentNode.left;
        } else if(target > currentNode.value){
            currentNode = currentNode.right;
        } else{
            break;
        }
    }
    return closest
}