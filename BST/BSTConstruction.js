class BST{
  constructor(value){
    this.value = value; 
    this.right = null;
    this.left = null; 
  }

  //Space O(log(N)) | Time O(log(N))
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

  //Space O(log(N)) | Time O(log(N))
  contains(value){
    if(value < this.value){
      if(this.left === null){
        return false; 
      } else {
        return this.left.contains(value); 
      }
    } else if( value > this.value){
      if(this.right === null){
        return false 
      } else {
        return this.right.contains(value)
      }
    } else {
      return true; 
    }
  }

  remove(value, parent = null){
    if(value < this.value){
      if(this.left !== null){
        this.left.remove(value, this);
      }
    } else if(value > this.value){
      if(this.right !== null){
        this.right.remove(value, this);
      }
    } else {
      if(this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this)
      } else if (parent === null){
        if(this.left !== null){
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if(this.right !== null){
          this.value = this.right.value; 
          this.left = this.right.left; 
          this.right = this.right.right; 
        } else {
          this.value = null;
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if(parent.right === this){
        parent.right = this.left !== null ? this.left : this.right; 
      }
    }
    return this; 
  }

  getMinValue(){
    if (this.left === null){
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}


//Iterative Solution: 

class BST{
  constructor(value){
    this.value = value; 
    this.right = null; 
    this.left = null;
  }
  //Avg Time O(log(N)) | Space O(1)
  //Worst Time O(N) | Space O(1) 
  insert(value){
    let currentNode = this; 
    while(true){
      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left; 
        }
      } else {
        if(currentNode.right === null){
          currentNode.right = new BST(value);
          break;
        } else{
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value){
    let currentNode = this; 
    while (currentNode !== null){
      if(value < currentNode.value){
        if(currentNode.left === null){
          return false; 
        } else {

        }
      }
    }
  }

  remove(value, parentNode = null){
    let currentNode = this; 
    while(currentNode !== null){
      if(value < currentNode.value){
        parentNode = currentNode; 
        currentNode = currentNode.left; 
      } else if (value > currentNode.value){
        parentNode = currentNode; 
        currentNode = currentNode.right; 
      } else {
        if(currentNode.left !== null && currentNode.right !== null){
          //get and set min value from right subtree as this will satsify BST property
          currentNode.value = currentNode.right.getMinValue();
          // find and remove the node that we replaced currentNode with;
          currentNode.right.remove(currentNode.value, currentNode)
        } else if(parentNode === null){
          if(currentNode.left !== null){
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null){
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left; 
            currentNode.right = currentNode.right.right;
          }else {
            currentNode.value = null; 
          } 
        }else if (parentNode.left === currentNode){
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
        }else if (parentNode.right === currentNode){
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this; 
  }

  getMinValue(){
    let currentNode = this; 
    while(currentNode.left !== null){
      currentNode = currentNode.left;
    }
    return currentNode.value; 
  }


}
