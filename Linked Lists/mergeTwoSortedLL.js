
//merge sorted LL
class LL {
  constructor(value){
    this.value = value; 
    this.next = null;
  }
}

function mergleLL(h1, h2){
  //h1 is final LL
  let prev = null; 
  let p1 = h1; 
  let p2 = h2; 
  while(p1 !== null && p2 !== null){
    if(p1.value < p2.value){
      prev = p1; 
      p1 = p1.next; 
    }else {
      if(prev !== null) prev.next = p2;
      prev = p2; 
      p2 = p2.next; 
      prev.next = p1;
    }
  }
  if(p1 === null) prev.next = p2; 
  return h1.value < h2.value ? h1 : h2; 
}