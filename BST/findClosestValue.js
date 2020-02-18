function findClosestValueinBST(tree, target){
  return findClosestHelper(tree,target,Infinity)
}

function findClosestHelper(tree, target, closest){
  if(tree === null ) return closest; 
  if(Math.abs(target - closest) > Math.abs(target - tree.value)){
    closest = tree.value; 
  }
  if(target < tree.value){
    return findClosestHelper(tree.left, target, closest); 
  } else if(target > tree.value){
    return findClosestHelper(tree.right, target, closest); 
  } else {
    return closest;
  }
}