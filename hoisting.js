// Interview Question: Explain the concept of hoisting in JavaScript and provide an example.

// Answer: Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted!";

// Equivalent to:
var hoistedVar;
console.log(hoistedVar);
hoistedVar = "I am hoisted!";