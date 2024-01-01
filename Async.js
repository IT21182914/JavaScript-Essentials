// const exampleAsyncFunction = async () => {
//   console.log("Start");

//   await new Promise((resolve) => setTimeout(resolve, 5000));

//   console.log("After waiting for 5 seconds");
//   console.log("Start")
//   await new Promise((resolve) => setTimeout(resolve, 5000))
//   console.log("End")
// };

// // Call the async function
// exampleAsyncFunction();


const asyncFunction = async () => {
  console.log('Start');

  const result = await fetchData();
  console.log('Data fetched:', result);

  console.log('End');
};

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Some data');
    }, 2000);
  });
};

//Call the async function
asyncFunction();


















// const exampleAsyncFunction = async () => {
//     console.log('Start');

//     await new Promise(resolve => setTimeout(resolve, 5000));

//     console.log('After waiting for 5 seconds');

//     const result = await fetchData();
//     console.log('Data fetched:', result);

//     console.log('End');
//   };

//   // Simulated asynchronous data fetching
//   const fetchData = async () => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('Some data');
//       }, 1500);
//     });
//   };

//   // Call the async function
//   exampleAsyncFunction();
