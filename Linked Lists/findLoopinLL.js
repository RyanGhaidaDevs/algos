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

//assume distance to loop start is D 
//distance first pointer travels after D and when it hits second pointer is P
//distance from P to the beggining of the loop is R. 

//first pointer traveled a total of D + P 
//second pointer went twice as much so 2D + 2P 

//total distance of LL is D + P + R 
// T = D + P + R 
//also for second pointer, T = 2D + 2P - P so, T = 2D + P 
//thus, T = T and 2D + P = D + P + R 

// R = D 

//reset first pointer to head and move each pointer by one untill they intersect 
//where they intersect is the beggining of the loop. 
