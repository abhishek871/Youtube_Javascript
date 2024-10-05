function deepcopy(obj) {
    let newobj = Array.isArray(obj)?[]:{};  // Initialize an empty array/obj 
    for (let key in obj) {
        // Check if the key is a direct property of the object
        if (typeof obj[key] === 'object') {  // If the property is an object, call deepcopy recursively
          newobj[key] = deepcopy(obj[key]);
        } else {  // Otherwise, directly copy the value
          newobj[key] = obj[key];
        }
      
    }
    return newobj;  // Return the deep-copied object
  }

  let car={
    name: 'bmw',
    model: 'bmw',
    year:2018,
    address: {
    city: 'bangalore',
    state: 'karnataka'
    }
}
const myobj=deepcopy(car);
console.log(myobj);
