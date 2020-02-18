class BST{
  constructor(value){
    this.value = value; 
    this.right = null;
    this.left = null; 
  }

  insert(value){
    if(value < this.value){
      if(this.left === null){
        this.left = new BST(value);
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null){
        this.right = new BST(value);
      } else {
        this.right.insert(value)
      }
    }
    return this; 
  }
}

