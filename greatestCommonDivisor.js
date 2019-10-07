// Method 1
function greatestDivisor1(a,b) {
    a_arr = [] 
    b_arr = [] 
  
  
  // check which number is larger 
  if(a>b){
    for(let i = 0;i <= a;i++){
      a%i === 0 ? a_arr.push(i) : false
      b%i === 0 ? b_arr.push(i) : false
    }
      
  
  } else {
      for(let i = 0;i <= b;i++){
      b%i === 0 ? b_arr.push(i) : false
      a%i === 0 ? a_arr.push(i) : false 
    }
    }
    // Now find the max value that exists in both arrays 
    divisor_arr = [] 
    
   if( a_arr.length > b_arr.length ){
     for(let j=0; j<=a_arr.length;j++){
      b_arr.includes(a_arr[j]) ? divisor_arr.push(a_arr[j]): false 
     }
   } else {
     for(let j=0; j<=b_arr.length;j++){
      a_arr.includes(b_arr[j]) ? divisor_arr.push(b_arr[j]): false
      }
    }
   return Math.max(...divisor_arr)
  }
  
  greatestDivisor1(14,21)
  
  //----------------------------------------
  // Method 2 

  function greatestDivisor2(a, b){
    var divisor = 2
    var greatestDivisor = 1;
  
    if (a < 2 || b < 2)
       return 1;
    
    while(a >= divisor && b >= divisor){
     if(a % divisor === 0 && b% divisor === 0){
        greatestDivisor = divisor;      
      }
     divisor++;
    }
    return greatestDivisor;
  }
  
  greatestDivisor2(14,21)

  //----------------------------------------
  //Method 3 - fancy 

  function greatestDivisor3(a, b){
    console.log(a,b)
    
     if(b == 0)
       return a;
     else 
       return greatestDivisor3(b, a%b);
  }

  greatestDivisor3(14,21)

  

  
  
   