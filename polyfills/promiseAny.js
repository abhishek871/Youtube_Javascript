function any(promises) { // Define the function that takes an array of promises

    let errors = []; // Array to store errors from rejected promises
    
    return new Promise((resolve, reject) => { // Return a new promise
      for(let [idx, promise] of promises.entries()) { // Iterate over promises with index
        promise // For each promise
          .then((res) => resolve(res)) // If resolved, resolve the outer promise with the result
          .catch(e => { // If rejected, handle the error
            errors[idx] = e; // Store the error in the errors array at the corresponding index
            if(errors.length === promises.length) { // Check if all promises have been rejected
              reject(new AggregateError( // Reject the outer promise with an AggregateError
                'No Promise in Promise.any was resolved', // Error message
                errors // Pass the errors array
              ))
            }
          })
      }
    })
  }
  
  // Example usage
  const promise1 = new Promise((_, reject) => setTimeout(() => reject('Error from promise 1'), 1000)); // A promise that rejects after 1 second
  const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 500)); // A promise that resolves after 0.5 seconds
  const promise3 = new Promise((_, reject) => setTimeout(() => reject('Error from promise 3'), 1500)); // A promise that rejects after 1.5 seconds
  
  any([promise1, promise2, promise3]) // Call the any function with the array of promises
    .then(result => { // On successful resolution of any
      console.log(result); // Log the value of the first resolved promise
    })
    .catch(error => { // Handle any errors that occur
      console.error(error); // Log the AggregateError if all promises are rejected
    });
  