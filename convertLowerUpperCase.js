// Solution 1 Convert string into lowecase

function convertLowerCase(str){
  return str.toLowerCase();
}

// Solution 2 Convert string into lowecase

function convertUpperCase(str){
    return str.toUpperCase();
}

// Solution 3 Convert lower into uppercase & upper into lowercase

function convertUpperAndLowerCase(str){
        return str.replace(/[a-zA-Z]/g, (char) =>
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        );
}

// Solution 4 Convert lower into uppercase & upper into lowercase

function swapString(str){
    return str.split("").map((char) => char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("")
}




console.log(convertLowerCase("SimarJeet"));
console.log(convertUpperCase("siMarjEEt"));
console.log(convertUpperAndLowerCase("SimarJeet Singh"));
console.log(swapString("Hello WORLD! JavaScript is FUN."));
