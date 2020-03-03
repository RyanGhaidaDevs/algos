//Write a function that takes in a non-empty string and that returns a boolean if that string is a palindrome or not.


//Time O(1) | Space O(N) b/c storing array of size N
function isPalindrome(string){
  //turn string into array of characters
  const arr1 = string.split("").reverse().join("");
  //reverse array as copy of original
  const arr2 = string.split("").join("");

  return arr1 === arr2 ? true : false;
}

//note: two arrays with the same values are not identical, thus we need to operate on them to return them to strings
//otherwise we need to iterate through each array and compare values.



//recursive solution

//Space O(N) | Time O(N)
function isPalindrome(string, i = 0){
  //variable to traverse string from last char towards center.
  const j = string.length - 1 - i;
  console.log(i, j)
  //compare until i is equal or greater than j, aka when the pointers cross in the center of the string.
  //i >= j b/c string couls be even length or odd length and i will eventaull either === j or pass it. 
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i+1)
}

//note: the strategy here is to traverse the string from the begginging and the end simulataneously and compare values.
//i.e. string[i] === string[j] initially wiill be string[0] and string[6] if string.length === 6, 
//then on the next iteration string[1] === string[5] etc. 


// optimal iterative solution
//create left and right index to traverse string from left and right simultaneously.
//initialize while loops so that while left < right we compare values of string and iterate left and right respectively. 
function isPalindrome(string){
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while(leftIdx < rightIdx) {
    if(string[leftIdx] !== string[rightIdx]) return false; 
    leftIdx++; 
    rightIdx--;
  }
  return true;
}