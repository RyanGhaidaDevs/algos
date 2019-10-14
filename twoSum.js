// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  //set a sum var = 0 
  //check first element and the sum of each successive num, if none move on to next
  sum = 0 
   for(let i = 0; i < nums.length; i++){
     for(let j = 0; j < nums.length; j++){
       sum = nums[i] + nums[j]
       if(sum == target && i != j ){
         return [i,j]
       }
     }
   }
};