// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
    let z = 0;
    arr = arr.sort((a,b) => a-b);
    let num1 = arr[0];
    let num2 = arr[1];
    let dif = num2-num1;
    for(let i=0; i<dif+1; i++){
      z += num1
      num1 += 1 
    }
    console.log(z)
    return z 
  }
  
  sumAll([1, 4]);