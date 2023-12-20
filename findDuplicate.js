//Solution 1
function findDuplicate(arr){
    let duplicates = []
    for(let i=0; i<=arr.length; i++){
        for(let j=i+1; j<=arr.length; j++){
        if(arr[i] == arr[j]){
            duplicates.push(arr[j]);
        }
    }
}
    return duplicates
}

console.log(findDuplicate([4,8,94,67,8,4]))