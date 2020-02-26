//write functions that will save values of a BST in inOrder, preOrder, and postOrder. 

class BST{
  constructor(value){
    this.value = value; 
    this.right = null; 
    this.left = null; 
  }
}

//O(N) time | O(N) space b/c were saving every value of BST in an array
//If we were simply printing every value space would be O(d) where d is the height or longest branch of the BST.
function inOrder(tree, array){
  if(tree !== null){
    inOrder(tree.left, array)
    array.push(tree.value)
    inOrder(tree.right, array)
  }
  return array;
}

function preOrder(tree, array){
  if(tree !== null){
    array.push(tree.value)
    preOrder(tree.left, array)
    preOrder(tree.right, array)
  }
  return array;
}

function postOrder(tree, array){
  if(tree !== null){
    postOrder(tree.left, array);
    postOrder(tree.right, array);
    array.push(tree.value);
  }
  return array; 
}