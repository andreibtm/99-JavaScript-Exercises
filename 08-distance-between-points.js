// Compute the distance between two points A and B.
function distanceBetweenPoints(Ax, Ay, Bx, By) {
    // Calculate the difference in the x and y axes
    const deltaX = Bx - Ax;
    const deltaY = By - Ay;
    
    // Apply the Euclidean distance formula
    return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
} 
console.log(distanceBetweenPoints(4, 4, 1, 8)) // Expected output: 5
