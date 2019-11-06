//find the smallest difference between two arrays of integers. 
function smallestDif(arr1, arr2){
  const solution = [];
  const hash = {}
  const min = arr1[0];
  
  
  arr1.sort((a,b)=> a-b);
  arr2.sort((a,b)=> a-b);
  
  for(let i = 0; i<arr1.length;i++ ){
    for(let j =0; j < arr2.length; j++){
      let currentCombo = [arr1[i], arr2[j]];
      let currentDif = Math.abs(arr1[i]) - Math.abs(arr2[j]); 
      console.log(Math.abs(arr1[i]), Math.abs(arr2[j]), Math.abs(currentDif))
      if(!(currentDif in hash) && i === 0&& j === 0 ){
        hash[Math.abs(currentDif)] = [[arr1[i], arr2[j]]]
      } else if (Math.abs(currentDif) < Object.keys(hash)[0]) {
        hash[Math.abs(currentDif)] = [[arr1[i], arr2[j]]]
      }
    }
  }
  return hash[Object.keys(hash)[0]][0]
  }
  
  smallestDif([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])