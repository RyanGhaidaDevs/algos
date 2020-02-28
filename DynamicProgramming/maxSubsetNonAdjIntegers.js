// write a function that takes in an array and outputs the largest sum of non adjacent numbers.


//Space O(n) | Time O(n)
function maxSubsetOfNonAdjValues(array){
  if(!array.length) return 0; 
  if(array.length === 1 ) return array[0];

  const maxSums = array.slice(); 
  maxSums[1] = Math.max(array[0], array[1]);

  for(let i = 2; i < array.length; i++){
    maxSums[i] = Math.max(maxSums[i-1], maxSums[i -2] + array[i]);
  }
  return maxSums[maxSums.length - 1]; 
}

//create an array with the maximum possible sum of all indeces of input array up to but not neccesarily including the current index your on. 
// the value at the end of this array is the largest possible configuration of all the preceding maxes, thus end of maxSums[]
// recursive solution