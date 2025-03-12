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


// Solution 2 

function findDuplicate2(arr){
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(findDuplicate2([7,8,54,78,17,54]))