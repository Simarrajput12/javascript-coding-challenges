// Solution 1

function findMissingNumber(arr, n) {
    let total = (n * (n + 1)) / 2; // Sum of first N numbers
    let sumArr = arr.reduce((acc, num) => acc + num, 0);
    return `Missing number is ${total - sumArr}`;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3