let arr1 = [1,3,5,7,9,11]
let arr2 = [2,4,6,10]

function sort1(arr1, arr2){
  let result = [...arr1, ...arr2]
  return result.sort((a,b)=> a-b)
}
// sort1(arr1, arr2)

function sort2(arr1,arr2){
  let merged = [] 
  let index1 = 0
  let index2 = 0 
  let current = 0 

  while(current < (arr1.length + arr2.length) - 1 ){
    let unmerged1 = arr1[index1]
    let unmerged2 = arr2[index2]

    if(unmerged1 < unmerged2){
     merged[current] = unmerged1;
     index1++
    } else {
      merged[current] = unmerged2;
     index2++;
    }
    current++
  }
return merged 
}
// sort2(arr1, arr2)

function sort3(arr1, arr2){
let x = arr1.length + arr2.length;
let merged = [];

while( merged.length != x) {
  let min1 = Math.min(...arr1)
  let min2 = Math.min(...arr2)
  merged.push(min1, min2)
  merged.sort((a,b) => a-b)
  arr1 = arr1.filter((x)=> x != min1)
  arr2 = arr2.filter((x)=> x != min2)
  console.log("ping", merged, arr1, arr2)
}
merged
return merged 
}
// sort3(arr1,arr2)
// sort3([1,3,5,7,9,11], [2,4,6,10,67,68])

