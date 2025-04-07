//your JS code here. If required.
let angle = 0; // Initialize the rotation angle

// Function to rotate the line
function rotateLine() {
    const line = document.getElementById('line'); // Select the line element
    angle += 2; // Increment the angle by 2 degrees
    line.style.transform = `rotate(${angle}deg)`; // Apply the rotation
}

// Set an interval to update the rotation every 20 milliseconds
setInterval(rotateLine, 20);