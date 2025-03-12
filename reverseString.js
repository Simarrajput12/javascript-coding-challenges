// Solution 1

function reverseString(string){
    let reverseString = string.split('').reverse().join();
    return reverseString;

}


console.log(reverseString('Hello'));