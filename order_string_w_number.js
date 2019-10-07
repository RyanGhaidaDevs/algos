//given a string of words and each word has a number inside it. Based on that number that is its position in the new string. 

let string = "secon5d f1irst thi7rd fou4th"

function sortString(string){
  let obj = {}
  let arr = string.split(" ")
  arr.forEach((x) => {
    let word_split_arr = x.split("")
    word_split_arr.forEach(x=> {
      if(!!parseInt(x)){
      obj[x] = word_split_arr.join("")
      } 
    })
  })
  return Object.values(obj).join(" ")
}

sortString(string)


  

