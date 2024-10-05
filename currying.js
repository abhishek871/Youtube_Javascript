// 1)  Function to curry another function
        function curry(func) {
            // Inner function that will collect arguments
            const curriedFunc = function(...args) {
            // Check if the number of collected arguments is enough to call the original function
            if (args.length >= func.length) {
                // If yes, invoke the original function with the collected arguments using apply
                return func.apply(this, args); // Preserves the context of 'this'
            } else {
                // If not enough arguments, return a new function to collect more arguments
                return (...moreArgs) => curriedFunc.call(this, ...args, ...moreArgs); // Combines previous and new arguments
            }
            };
            // Return the curried function
            return curriedFunc;
        }
        // A simple function that concatenates three strings
        let concatenateStrings = (str1, str2, str3) => {
            // Return the concatenated string with underscores
            return `${str1}_${str2}_${str3}`;
        };
        // Create a curried version of the concatenateStrings function
        let curriedConcatenate = curry(concatenateStrings);
        // Example usage of the curried function with different calling styles
        console.log(curriedConcatenate("Hello")("World", "2023")); // Outputs: Hello_World_2023
        console.log(curriedConcatenate("Hello")("World")("2023")); // Outputs: Hello_World_2023

        //===============================================================

// 2) 
        