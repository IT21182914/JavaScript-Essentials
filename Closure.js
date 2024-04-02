/*JavaScript closure is a function which returns another function. In other words, 
a closure gives you access to an outer function's scope from an inner function. 
In JavaScript closure is used to encapsulate variables into a function and restrictaccess to it from the outside. */

function outerFunction() {
  let outerVariable = "I am from outerFunction"; 

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let closure = outerFunction();
closure(); // Output: I am from outerFunction
