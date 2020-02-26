// write a function to check whether a given BT is a valid BST. 

class BST{
  constructor(value){
    this.value = value; 
    this.left = null;
    this.right = null;
  }
}


//O(N) time and O(d) space where d is the depth of the BST
function validateBST(tree){
  return validatesBSTHelper(tree, -Infinity, Infintiy);
}

function validateBSTHelper(tree, minVal, maxVal){
  if(tree === null) return true;
  if(tree.value < minVal || tree.value >= maxVal) return false;
  const leftIsValid = validateBSTHelper(tree.left, minVal, tree.value);
  return leftIsValid && validatesBSTHelper(tree.right, tree.value, maxVal);
}