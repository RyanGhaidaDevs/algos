//recursive solution:
//space O(log(N)) | Time O(log(N)) b/c recurise method adding frames to call-stack.
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

//create a closest variable and initialize with infinity 
//compare the difference between target and closest with that of target and current node.
//If current node is closer then overwrite closest with that node, also if target is less
//than the node we know that every branch to the right can be eliminated. 
//Likewise, if target is > the current node we know that all the branches to the left can be skipped. 

//iterative solution:

//Time O(log(N)) | Space O(1)

function findClosestValueinBST(tree, target){
  return findClosestHelper(tree, target, Infinity);
}

function findClosestHelper(tree,target, closest){
  let currentNode = tree;
  while (currentNode !== null){
    if(Math.abs(target - closest) > Math.abs(target = currentNode.value)){
      closest = currentNode.value;
    }
    if(target < currentNode.value){
      currentNode = currentNode.left; 
    } else if( target > currentNode.value){
      currentNode = currentNode.right;
    } else {
      break;
    }

  }
  return closest
}

// create a while loop that will run untill null or if target matchs a value. 
//Compare abs diff between the currentNode.value and target alongside closest and target
//Again depending on which is closer will distate which branch to travese and which hald of the BST we can eliminate. 