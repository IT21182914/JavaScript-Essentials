function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log("Count:", count);
    },
    decrement: function () {
      count--;
      console.log("Count:", count);
    },
  };
}

let counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
