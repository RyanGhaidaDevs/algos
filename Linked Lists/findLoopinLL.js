// can you find a loop in a LL and where it orginates?

//strategy is to make two pointers and have one go twice as fast as the other and if at any point they collide then there is a loop. 

class LL {
  constructor(value){
    this.value = value; 
    this.next = null;
  }
}

function findLoop(head){
  let first = head.next; 
  let second = head.next.next; 

  while(first !== second){
    first = first.next; 
    second = second.next.next;
  }

  first = head 
  while(first !== second){
    first = first.next;
    second = second.next; 
  }
  return first; 
}