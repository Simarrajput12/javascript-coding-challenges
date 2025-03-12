// Solution 1 find vowels count

function findVowelsCount(string){
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 const count = string.toLowerCase().split('').filter((item) => vowels.includes(item))
 return count.length;
 
}

// Solution 1 find vowels 

function findVowels(string){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const count = string.toLowerCase().split('').filter((item) => vowels.includes(item))
    return count.join();
    
   }

console.log(findVowelsCount("Hello my Name is Simar"));
console.log(findVowelsCount("AeIoU"));
console.log(findVowels("This is Vowels"));
console.log(findVowels("AeIoU"))