// Function to create a custom setTimeout implementation
function createSetTimeout() {
    // Initialize a timer ID counter
    var timerId = 0;
    // Object to keep track of active timers
    var timerMap = {};

    // Custom setTimeout implementation
    function setTimeoutPoly(callback, delay) {
        // Assign a unique ID for this timer
        var id = timerId++;
        // Mark the timer as active in the timerMap
        timerMap[id] = true;
        // Record the start time
        var start = Date.now();

        // Inner function to trigger the callback
        function triggerCallback() {
            // Check if the timer is still active
            if (!timerMap[id]) return; // If not, exit early

            // Check if the specified delay has passed
            if (Date.now() > start + delay) {
                // If the delay has passed, call the callback function
                callback();
            } else {
                // If not enough time has passed, use requestIdleCallback to wait for the next idle period
                requestIdleCallback(triggerCallback);
                // Alternative to avoid blocking: 
                // setTimeout(triggerCallback, 0); // This would schedule the callback in the next event loop tick
            }
        }

        // Start the callback trigger process
        requestIdleCallback(triggerCallback);
        // Return the unique timer ID
        return id;
    }

    // Function to clear a timer by ID
    function clearTimeoutPoly(id) {
        // Remove the timer ID from the active timers map
        delete timerMap[id];
    }

    // Return the custom setTimeout and clearTimeout functions
    return { setTimeoutPoly, clearTimeoutPoly };
}

// Destructure the custom setTimeout and clearTimeout functions from the createSetTimeout function
var { setTimeoutPoly, clearTimeoutPoly } = createSetTimeout();

// Log the starting message to the console
console.log("Start");

// Schedule a callback to log a welcome message after 1000 milliseconds (1 second)
var myId = setTimeoutPoly(function() {
    console.log("Welcome to jscafe");
}, 1000);
