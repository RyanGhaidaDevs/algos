
//merge sorted LL
class LL {
  constructor(value){
    this.value = value; 
    this.next = null;
  }
}

//Time O(n + m) here n and m are lengths of LL and spave O(1)
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


//recursive solution 
//same time complexity but now space complexity is also O(n + m)
class LL {
  constructor(value){
    this.value = value; 
    this.next = null; 
  }
}

function mergeLL(h1,h2){
  recursiveMerge(h1,h2,null)
  return h1.value < h2.value ? h1 : h2; 
}

function recursiveMerge(p1, p2, p1prev){
  if(p1 === null) {
    p1prev.next = p2 
    return
  } 
  if(p2 === null) return; 

  if(p1.value < p2.value){
    recursiveMerge(p1.next, p2, p1)
  } else {
    if(p1prev !== null) p1prev.next = p2; 
    const newp2 = p2.next; 
    p2.next = p1; 
    recursiveMerge(p1, newp2, p2)
  }
}