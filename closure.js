// Interview Question: Explain the concept of a closure in JavaScript and provide an example.

// Answer: A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It is created when a nested function references a variable from its containing function.

function outerFunction() {
    const outerVariable = "I am outside!";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction(); // Output: "I am outside!"