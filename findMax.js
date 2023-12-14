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