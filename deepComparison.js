function deepComparison(first, second) {
    if (first === second) return true;
  
    // Check if either argument is null or not an object
    if (first === null || second === null || typeof first !== 'object' || typeof second !== 'object') return false;
  
    // Get property names of both objects
    let firstKeys = Object.keys(first);
    let secondKeys = Object.keys(second);
  
    // Check if the number of properties is different
    if (firstKeys.length !== secondKeys.length) return false;
  
    // Iterate through the properties and recursively check equality
    for (let key of firstKeys) {
      if (!second.hasOwnProperty(key) || !deepComparison(first[key], second[key])) return false;
    }
  
    return true;
  }