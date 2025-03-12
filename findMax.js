// Solution 1

function findMax(arr){
let max = 0;
for(let i=0; i<=arr.length; i++){
    if(i<arr[i]){
     max = arr[i]
    }
 }
 return max;
}

console.log(findMax([3,6,8,1,15,35]))


// Solutiion 2
 
function findMax2(arr){
  const sortedArray = arr.sort((a, b) => b-a);  
  return sortedArray[0];
}

console.log(findMax2([7,9,64,3,748,8,64,7]))