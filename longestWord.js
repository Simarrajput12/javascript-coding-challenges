// Solution 1

function longestWord(str){
  let newString = str.split(" ");
  let longest = ''
  for(let i=0; i<newString.length; i++){
    if(newString[i].length > longest.length){
      longest = newString[i]
    }
  }
  return `Longest string is ${longest} and length is ${longest.length}`;
  
}

console.log(longestWord("Hello my name is simarjeet singh"));

