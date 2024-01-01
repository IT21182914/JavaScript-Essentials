// Callback arrow function
const callbackFunction = () => {   
    console.log('Callback executed');
  };
  
  // Function that takes a callback
  const performAsyncTask = (callback) => {
    setTimeout(callback, 2000);
  };
  
  // Call the function with the callback
  performAsyncTask(callbackFunction);
  












  


//   const fetchData = (callback) => {
//     setTimeout(() => {
//       const data = 'Some data';
//       callback(null, data);
//     }, 1500);
//   };
  
//   fetchData((error, result) => {
//     if (error) {
//       console.error('Error:', error);
//     } else {
//       console.log('Data fetched:', result);
//     }
//   });
  