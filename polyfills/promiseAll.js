function promiseAll(iterable) { // Define the function that takes an iterable (array of promises)
    const results = []; // Array to store the results of each promise
    let completedCount = 0; // Counter to keep track of completed promises
    return new Promise((resolve, reject) => { // Return a new promise
      if (iterable.length === 0) { // Check if the iterable is empty
        resolve(results); // If empty, resolve with an empty results array
        return; // Exit the function
      }
      iterable.forEach((item, index) => { // Iterate over each item in the iterable
        const promise = Promise.resolve(item); // Ensure the item is a promise
  
        promise.then(result => { // On successful resolution of the promise
          results[index] = result; // Store the result at the corresponding index
          completedCount++; // Increment the completed count
  
          if (completedCount === iterable.length) { // Check if all promises have completed
            resolve(results); // If yes, resolve with the results array
          }
        })
        .catch(error => { // Handle any errors that occur
          reject(error); // Reject the promise with the error
        });
      });
    });
  }
  const promise1 = new Promise(resolve => setTimeout(() => resolve('Hello'), 2000)); // Promise that resolves after 2 seconds
  const promise2 = new Promise(resolve => setTimeout(() => resolve('World'), 1000)); // Promise that resolves after 1 second
  const promise3 = new Promise(resolve => setTimeout(() => resolve('!'), 1500)); // Promise that resolves after 1.5 seconds
  
  promiseAll([promise1, promise2, promise3]) // Call the promiseAll function with the array of promises
    .then(results => { // On successful resolution of promiseAll
      console.log(results.join(' ')); // Output the results joined by a space
    })
    .catch(error => { // Handle any errors
      console.error(error); // Log the error
    });
  