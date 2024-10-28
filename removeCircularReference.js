// function removeCircularReferences(obj) {
//     // Create a WeakSet to keep track of visited objects
//     const visitedObjects = new WeakSet([obj]);
  
//     // Immediately invoked function to iterate over the object
//     function iterateObject(obj) {
//       // Loop through each key in the object
//       for (let key in obj) {
//         // Check if the property belongs to the object itself (not inherited)
//         if (obj.hasOwnProperty(key)) {
//           // Check if the value is of type 'object'
//           if (typeof obj[key] === 'object') {
//             // If the object has already been visited
//             if (visitedObjects.has(obj[key])) {
//               // Remove the circular reference by deleting the property
//               delete obj[key];
//             } else {
//               // If not visited, add it to the WeakSet and recursively iterate
//               visitedObjects.add(obj[key]);
//               iterateObject(obj[key]);
//             }
//           }
//         }
//       }
//     }
//     iterateObject(obj); // Invoke the function immediately with the original object
//   }
//   let obj={
//     name: 'bmw',
//     model: 'bmw',
//     year:2018,
//     address: {
//     city: 'bangalore',
//     state: 'karnataka',
//     },
//     city:['allahbad','moradabad','bly'],
// }
// obj.address.name=obj;
// console.log(obj);
//   removeCircularReferences(obj);
//   console.log(obj);
function removeCircularReferences(obj) {
  const seenObjects = new WeakSet();

  function detectAndRemove(obj) {
      if (obj && typeof obj === 'object') {
          if (seenObjects.has(obj)) {
              return '[Circular]';
          }
          seenObjects.add(obj);

          for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                  obj[key] = detectAndRemove(obj[key]);
              }
          }
      }
      return obj;
  }

  return detectAndRemove(obj);
}

let obj = {
  name: 'bmw',
  model: 'bmw',
  year: 2018,
  address: {
      city: 'bangalore',
      state: 'karnataka',
  },
  city: ['allahbad', 'moradabad', 'bly'],
};
obj.address.name = obj;

console.log('Before removing circular references:', obj);
removeCircularReferences(obj);
console.log('After removing circular references:', obj);