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

    
// Solutiion 2
 
function findMin2(arr){
    const sortedArray = arr.sort((a, b) => a-b);  
    return sortedArray[0];
  }
  
  console.log(findMin2([7,9,64,3,748,8,64,7]))