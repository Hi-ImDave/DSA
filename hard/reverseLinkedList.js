// Write a function that takes in the head of a Singly Linked List, reverses the list in place (i.e., doesn't create a brand new list), and returns its new head.
// Return:
// Example: input - return -
// Pseudo Code:


function reverseLinkedList(head) {
    let currNode = head;
    let prevNode = null;
    while(currNode !== null){
      let nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    return prevNode;
  }
  
