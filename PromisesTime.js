//this is a simple example of a promise that waits for 3 seconds and then resolves or rejects randomly
const waitPromise = new Promise((resolve, reject) => {
  const Success = Math.random() > 0.5;

  setTimeout(() => {
    if (Success) {
      resolve("Wait for 3 seconds");
    } else {
      reject("An error occurred while waiting for 3 seconds");
    }
  }, 3000);
});

waitPromise
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((message) => {
    console.log("This is in the catch " + message);
  });
