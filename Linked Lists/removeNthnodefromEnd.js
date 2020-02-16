//remove node at position k from the end. 
//function takes in head of singly linked list and integer k. 

//traverse linked list with two pointers. 
// set both pointers to head. 
// move second pointer to postion n ahead of first node.
//move both pointers together untill second pointer passes tail, aka becomes null.
//remove node at first pointer. 
//Time O(N) | Space O(1)
class LinkedList{
  constructor(){
    this.value = value; 
    this.next = null; 
  }
}

function removeKthNodeFromEnd(head, k){
  let counter = 1;
  let first = head
  let second = head; 

  while(counter <= k){
    second = second.next; 
    counter++;
  }
  if(second === null){
    head.value = head.next.value;
    head.next = head.next.next; 
    return;
  }
  while(second.next !== null){
    second = second.next; 
    first = first.next; 
  }

  first.next = first.next.next;

}