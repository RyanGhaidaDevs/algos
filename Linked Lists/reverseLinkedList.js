// O(N) space - O(1) time. 
//create 3 pointers and only check if middle pointer is null. Order is important to not lost access to nodes. Start from head. 
function reverseLinkedList(head){
  let p1 = null;
  let p2 = head; 

  while(p2 !== null){
    const p3 = p2.next; 
    p1 = p2; 
    p2 = p3;
  }
  return p1 
}