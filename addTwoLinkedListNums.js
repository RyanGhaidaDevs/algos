var addTwoNumbers = function(l1, l2) {
  //reverse arrays, l1 -> [2,4,3] -> 342
  //use length attr of array to explicitly pull numbers 
  const arr1 = [];
  const arr2 = [];

    for(let i = 0; i < l1.length; i++){             arr1.unshift(l1[i])
    };

    for(let i = 0; i < l2.length; i++){
      arr2.unshift(l2[i])
    }

  let sum = parseInt(arr1.join("")) + parseInt(arr2.join(""))
  sum = sum.toString().split("");
  const result = []; 
  for(let i = 0; i < sum.length; i++){             result.unshift(sum[i])
    };
  return result
};
addTwoNumbers([2,4,3], [5,6,4])
