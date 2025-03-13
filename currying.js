/* Currying is a technique in functional programming where a function is 
 transformed into a sequence of functions, each taking a single argument
 */

 // Example 1

 function currying(a){
    return function(b){
        return function(c){
        return a + b +c ;
    }
   }
 }

  // Example 2 Using arrow function
 const curry = a => b => c => a + b + c;


// Example 3 Currying with Infinite Arguments

 function currySum(a) {
    return function (b) {
        if (b !== undefined) return currySum(a + b);
        return a;
    };
}




 console.log("Sum is", currying(10)(20)(15));
 console.log("Sum is", curry(6)(9)(12));
 console.log("Sum is", currySum(1)(2)(3)(4)(11)()); 