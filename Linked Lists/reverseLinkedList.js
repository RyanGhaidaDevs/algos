// O(N) space - O(1) time. 
//create 3 pointers and only check if middle pointer is null. Order is important to not lost access to nodes. Start from head. 
function reverseLinkedList(head){
  let p1 = null;
  let p2 = head; 

  while(p2 !== null){
    const p3 = p2.next; 
    p2.next = p1; 
    p1 = p2; 
    p2 = p3;
  }
  return p1 
}
//[1]->[2]->[3]->[4]
//we dont want to lose access to p2 so we first set p3 = p2.next.
//reverse pointer of p2 <-- 
//move p1 to the right to be p2
//move p2 to the right to be p3. 
//continue untill end. 

 



  