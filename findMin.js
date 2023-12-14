// Solution 1
function findMin(arr){
    let min = 0;
    for(let i=0; i<=arr.length; i++){
        if(i>arr[i]){
         min = arr[i]
        }
     }
     return min;
    }
    
    console.log(findMin([3,6,8,1,15,35]))