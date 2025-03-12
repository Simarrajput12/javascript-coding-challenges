// Solution 1

function findPalindromes(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove special chars & convert to lowercase
    return cleanStr === str.toLowerCase().split("").reverse().join("");
}


// Solution 2

function findPalindromesNum(num){
    const strNum = num.toString(); // Remove special chars & convert to lowercase
    return strNum === strNum.split("").reverse().join("");
}


console.log(findPalindromes("Simar"));
console.log(findPalindromes("Madam"));
console.log(findPalindromesNum(45678));
console.log(findPalindromesNum(4567654));
