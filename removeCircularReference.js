function removeCircularReferences(obj) {
    // Create a WeakSet to keep track of visited objects
    const visitedObjects = new WeakSet([obj]);
  
    // Immediately invoked function to iterate over the object
    (function iterateObject(obj) {
      // Loop through each key in the object
      for (let key in obj) {
        // Check if the property belongs to the object itself (not inherited)
        if (obj.hasOwnProperty(key)) {
          // Check if the value is of type 'object'
          if (typeof obj[key] === 'object') {
            // If the object has already been visited
            if (visitedObjects.has(obj[key])) {
              // Remove the circular reference by deleting the property
              delete obj[key];
            } else {
              // If not visited, add it to the WeakSet and recursively iterate
              visitedObjects.add(obj[key]);
              iterateObject(obj[key]);
            }
          }
        }
      }
    })(obj); // Invoke the function immediately with the original object
  }
  