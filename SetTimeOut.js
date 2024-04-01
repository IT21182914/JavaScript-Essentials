// Example 1: Execute a function after a delay
function sayHello() {
  console.log("Hello!");
}

// Call sayHello() function after 3 seconds
setTimeout(sayHello, 3000); // 3000 milliseconds = 3 seconds

// Example 2: Execute an anonymous function after a delay
setTimeout(function () {
  console.log("This message will appear after 2 seconds.");
}, 2000); // 2000 milliseconds = 2 seconds
