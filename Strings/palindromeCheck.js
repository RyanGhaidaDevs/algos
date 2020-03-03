//Write a function that takes in a non-empty string and that returns a boolean if that string is a palindrome or not.


//Time O(1) | Space O(N) b/c storing array of size N
function isPalindrome(string){
  //turn string into array of characters
  const arr1 = string.split("").reverse().join("");
  //reverse array as copy of original
  const arr2 = string.split("").join("");

  return arr1 === arr2 ? true : false;
}