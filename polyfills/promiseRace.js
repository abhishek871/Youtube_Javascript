function racePromises(promises) { // Define the function that takes an array of promises
    return new Promise((resolve, reject) => { // Return a new promise
      promises.forEach((promise) => { // Iterate over each promise in the array
        Promise.resolve(promise) // Ensure the item is a promise
          .then(value => { // On successful resolution of the promise
            resolve(value); // Resolve the outer promise with the value
          })
          .catch(error => { // Handle any errors that occur
            reject(error); // Reject the outer promise with the error
          });
      });
    });
  }
  
  // Example usage
  const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000)); // A promise that resolves after 1 second
  const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 500)); // A promise that resolves after 0.5 seconds
  const promise3 = new Promise((_, reject) => setTimeout(() => reject('Promise 3 rejected'), 1500)); // A promise that rejects after 1.5 seconds
  
  racePromises([promise1, promise2, promise3]) // Call the racePromises function with the array of promises
    .then(result => { // On successful resolution of racePromises
      console.log(result); // Log the value of the first resolved promise
    })
    .catch(error => { // Handle any errors that occur
      console.error(error); // Log the error from the first rejected promise
    });
  