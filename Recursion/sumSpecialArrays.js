//write a function that sums the elements of a special array. A special array could have other arrays as elements and for every one of those arrays' sums their total should be multiplied by a multiplier that correlates to their depth in the original array. 
// i.e. [1,2,[3,4,[5]]] would be 1 + 2 + 2(3 + 4) + 3(5) = 32. 

function sumSpecial(array, mult = 1){
  let sum = 0; 
  for(const element in array){
    if (typeof element === "number"){ 
      sum += element
    } else {
      sumSpecial(element, mult++)
    }
  } 
  return sum*mult
}

//Time O(N) b/c you have to traverse the array in its entirity atleast once.