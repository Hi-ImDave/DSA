// You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.
// Return:
// Example: input - return -
// Pseudo Code:

function removeDuplicatesFromLinkedList(linkedList){
    let currentNode = linkedList;
    while(currentNode !== null){
        let nextNode = currentNode.next;
        while(nextNode !== null && currentNode.value === nextNode.value){
            nextNode = nextNode.next
        }
        currentNode.next = nextNode;
        currentNode = nextNode;
    }
    return linkedList
}

// linked list class

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    addTail(value){
        let currentNode = this.head
        let node = new Node(value);
        if(currentNode === null){
            this.head = node;
            this.size++
            return;
        }
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = node
        this.size++
        return;
    }
}

let list = new LinkedList();

list.addTail(1)
list.addTail(1)
list.addTail(3)
list.addTail(4)
list.addTail(4)
list.addTail(4)
list.addTail(5)
list.addTail(6)
list.addTail(6)

removeDuplicatesFromLinkedList(list.head)