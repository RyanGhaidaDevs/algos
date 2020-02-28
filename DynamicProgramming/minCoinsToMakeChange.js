// write a function that takes in two parameters: n which is the value and an array of integers representing coins. 
//function should return the minimum number of coins needed to amke change for value n. if none possible return -1
// i.e. 11, [1,5,10] => 2 b/c 1*10 + 1*1 coins

function minCoinnToMakeChange(n, coins){
  //Initialize new array of size n + 1. 
  //as we iterate through coins array we will see minimum number of coins needed to make change up until n. 
  const minCoins = new Array(n + 1).fill(Infinity)

  for(const coin of coins){
    for(let amount = 0; amount < minCoins.length; amount++){
      if(coin <= amount){
      minCoins[amount] = Math.min(minCoins[amount], 1 + minCoins[amount - coin]);
      }
    }
  }
  return minCoins[n] !== Ininity ? minCoins[n] : -1; 
}

//time O(nd) where d is the size of the coins array 
//space O(n) because we need an array of atleast size n+1 ~ O(n) 