class Node {
  constructor(value) {
    this.value = value; 
    this.prev = null; 
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null; 
    this.tail = null; 
  }
}

//O(1) time | O(1) space
setHead(node){
  //if head is empty, and list does not exist make head and tail equal to node.
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    return;
  }
  //else insert new head before old head.
 this.insertBefore(this.head, node)
}

//O(1) time | O(1) space
setTail(node) {
    //if tail is empty, and list does not exist make head and tail equal to node. user helper method.
  if (this.tail === null) {
    this.setHead(node);
    return; 
  }
  //else insert new tail after old tail.
  this.insertAfter(this.tail, node);
}

//O(1) time | O(1) space
insertBefore(node, nodeToInsert) {
  //if nodeToInsert is the same as head and tail aka one value, return.
  if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
  this.remove(nodeToInsert);
  nodeToInsert.prev = node.prev;
  nodeToInsert.next = node;
  if(node.prev === null) {
    this.head = nodeToInsert;
  } else {
    node.prev.next = nodeToInsert;
  }
  node.prev = nodeToInsert;
}

//O(1) time | O(1) space
insertAfter(node, nodeToInsert){
  if(nodeToInsert === head && nodeToInsert === this.tail) return; 
  this.remove(nodeToInsert);
  nodeToInsert.prev = node;
  nodeToInsert.next = node.next; 
  if(node.next === null) {
    this.tail = nodeToInsert;
  } else {
    node.next.prev = nodeToInsert;
  }
  node.next = nodeToInsert;
}

insertAtPosition(position, nodeToInsert){
  if(position === 1) {
    this.setHead(nodeToInsert);
    return;
  }
  let node = this.head; 
  let currentPosition = 1; 
  while(node !== null && currentPosition++ !== position) node = node.next; 
  if (node !== null) {
    this.insertBefore(node, nodeToInsert);
  } else {
    this.setTail(nodeToInsert)
  }
}