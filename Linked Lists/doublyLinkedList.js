class Node {
  constructor(value){
    this.value = value; 
    this.left = null;
    this.right = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  setHead(node){
    console.log("head", this.head)
    console.log("node", node)
    if(this.head === null){
      this.head = node; 
      this.tail = node; 
      return;
    }
    this.insertBefore(this.head, node)
  }

  setTail(node){
    if(this.tail === null){
      this.setHead(node)
      return;
    }
    this.insertAfter(this.tail, node)
  }

  insertBefore(node, nodeToInsert){
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return; 
    //incase node to insert is already in the list itself. 
    this.remove(nodeToInsert)

    nodeToInsert.prev = node.prev; 
    nodeToInsert.next = node;
    //if node is head, update head
    if(node.prev === null){
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert){
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return; 
    this.remove(nodeToInsert)

    nodeToInsert.prev = node; 
    nodeToInsert.next = node.next; 

    if(node.next === null){
      this.tail = nodeToInsert; 
    } else {
      node.next.prev = nodeToInsert
    }
    node.next = nodeToInsert; 
  }

  removeNodeWithValue(value){
    node = this.head; 
    while(node !== null){
      //set temp variable so we can continue traversing list for other node === value. 
      const nodeToRemove = node; 
      node = node.next
      if(nodeToRemove.value === value) remove(nodeToRemove);
    } 
  }


  //O(N) time space because you have to traverse enitre list in worst case.
  // O(1) space b/c your only doing setting once. 
  containsNodeWithValue(value){
    //return value is boolean. 
    //start at the beggining of the list with our pointer.
    node = this.head;
    //while the node is not either at the end - null - nor the value itself, traverse down list.  
    while(node !== null && node !== value) node = node.next; 
    //true if anything not null 
    return node !== null; 
  }
  //O(1) space because we setting in one step.  
  //O(N) time because were not traversing the list.
  remove(node){
    if(node === this.head){
      this.head = this.head.next; 
    }
    if(node === this.tail){
      this.tail = this.tail.prev; 
    }
    this.removeNodeBindings(node);
  }

  removeNodeBindings(node){
    //if node is anything other than head or tail it will hit 
    //these if statements. use node bindings before setting to null. 
    if(node.prev !== null) node.prev.next = node.next;
    if(node.next !== null) node.next.prev = node.prev;
    node.next = null;
    node.previous = null;
  }

}

let list = new DoublyLinkedList
list.setHead(1)
