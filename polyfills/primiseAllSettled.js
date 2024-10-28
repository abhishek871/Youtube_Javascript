function allSettled(promises) { // Define the function that takes an array of promises
    const results = []; // Array to store the results of each promise
    let completedCount = 0; // Counter to track how many promises have settled
    return new Promise((resolve) => { // Return a new promise
      if (promises.length === 0) { // Check if the promises array is empty
        resolve(results); // If empty, resolve with an empty results array
        return; // Exit the function
      }
      promises.forEach((promise, index) => { // Iterate over each promise in the array
        promise.then(value => { // On successful resolution of the promise
          results[index] = { status: 'fulfilled', value }; // Store the fulfilled result
          completedCount++; // Increment the completed count
  
          if (completedCount === promises.length) { // Check if all promises have settled
            resolve(results); // If yes, resolve with the results array
          }
        })
        .catch(reason => { // Handle any errors that occur
          results[index] = { status: 'rejected', reason }; // Store the rejection reason
          completedCount++; // Increment the completed count
  
          if (completedCount === promises.length) { // Check if all promises have settled
            resolve(results); // If yes, resolve with the results array
          }
        });
      });
    });
  }
  const promise1 = Promise.resolve(50); // A promise that resolves immediately with the value 50
  const promise2 = new Promise((resolve, reject) => // A promise that rejects after 1 second
    setTimeout(() => reject('Error occurred'), 1000)
  );
  const promises = [promise1, promise2]; // Array of promises to pass to allSettled
  
  allSettled(promises) // Call the allSettled function with the array of promises
    .then(results => { // On successful resolution of allSettled
      results.forEach(result => { // Iterate over the results
        console.log(result.status, result.value); // Log the status and value (or reason) of each result
      });
    })
    .catch(error => { // Handle any errors that occur
      console.error(error); // Log the error
    });
  